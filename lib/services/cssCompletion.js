(function (dependencies, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(dependencies, factory);
    }
})(["require", "exports", "../parser/cssNodes", "../parser/cssSymbolScope", "./languageFacts", "../utils/strings", "vscode-languageserver-types", "vscode-nls"], function (require, exports) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    var nodes = require("../parser/cssNodes");
    var cssSymbolScope_1 = require("../parser/cssSymbolScope");
    var languageFacts = require("./languageFacts");
    var strings = require("../utils/strings");
    var vscode_languageserver_types_1 = require("vscode-languageserver-types");
    var nls = require("vscode-nls");
    var localize = nls.loadMessageBundle();
    var CSSCompletion = (function () {
        function CSSCompletion(variablePrefix) {
            if (variablePrefix === void 0) { variablePrefix = null; }
            this.valueTypes = [
                nodes.NodeType.Identifier, nodes.NodeType.Value, nodes.NodeType.StringLiteral, nodes.NodeType.URILiteral, nodes.NodeType.NumericValue,
                nodes.NodeType.HexColorValue, nodes.NodeType.VariableName, nodes.NodeType.Prio
            ];
            this.variablePrefix = variablePrefix;
        }
        CSSCompletion.prototype.getSymbolContext = function () {
            if (!this.symbolContext) {
                this.symbolContext = new cssSymbolScope_1.Symbols(this.styleSheet);
            }
            return this.symbolContext;
        };
        CSSCompletion.prototype.doComplete = function (document, position, styleSheet) {
            this.offset = document.offsetAt(position);
            this.position = position;
            this.currentWord = getCurrentWord(document, this.offset);
            this.defaultReplaceRange = vscode_languageserver_types_1.Range.create(vscode_languageserver_types_1.Position.create(this.position.line, this.position.character - this.currentWord.length), this.position);
            this.textDocument = document;
            this.styleSheet = styleSheet;
            try {
                var result = { isIncomplete: false, items: [] };
                this.nodePath = nodes.getNodePath(this.styleSheet, this.offset);
                for (var i = this.nodePath.length - 1; i >= 0; i--) {
                    var node = this.nodePath[i];
                    if (node instanceof nodes.Property) {
                        this.getCompletionsForDeclarationProperty(node.getParent(), result);
                    }
                    else if (node instanceof nodes.Expression) {
                        this.getCompletionsForExpression(node, result);
                    }
                    else if (node instanceof nodes.SimpleSelector) {
                        var parentRuleSet = node.findParent(nodes.NodeType.Ruleset);
                        this.getCompletionsForSelector(parentRuleSet, result);
                    }
                    else if (node instanceof nodes.FunctionArgument) {
                        this.getCompletionsForFunctionArgument(node, node.getParent(), result);
                    }
                    else if (node instanceof nodes.Declarations) {
                        this.getCompletionsForDeclarations(node, result);
                    }
                    else if (node instanceof nodes.VariableDeclaration) {
                        this.getCompletionsForVariableDeclaration(node, result);
                    }
                    else if (node instanceof nodes.RuleSet) {
                        this.getCompletionsForRuleSet(node, result);
                    }
                    else if (node instanceof nodes.Interpolation) {
                        this.getCompletionsForInterpolation(node, result);
                    }
                    else if (node instanceof nodes.FunctionDeclaration) {
                        this.getCompletionsForFunctionDeclaration(node, result);
                    }
                    else if (node instanceof nodes.MixinReference) {
                        this.getCompletionsForMixinReference(node, result);
                    }
                    else if (node instanceof nodes.Function) {
                        this.getCompletionsForFunctionArgument(null, node, result);
                    }
                    if (result.items.length > 0) {
                        return result;
                    }
                }
                this.getCompletionsForStylesheet(result);
                if (result.items.length > 0) {
                    return result;
                }
                if (this.variablePrefix && this.currentWord.indexOf(this.variablePrefix) === 0) {
                    this.getVariableProposals(null, result);
                    if (result.items.length > 0) {
                        return result;
                    }
                }
                // no match, don't show text matches
                return result;
            }
            finally {
                // don't hold on any state, clear symbolContext
                this.position = null;
                this.currentWord = null;
                this.textDocument = null;
                this.styleSheet = null;
                this.symbolContext = null;
                this.defaultReplaceRange = null;
                this.nodePath = null;
            }
        };
        CSSCompletion.prototype.findInNodePath = function () {
            var types = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                types[_i] = arguments[_i];
            }
            for (var i = this.nodePath.length - 1; i >= 0; i--) {
                var node = this.nodePath[i];
                if (types.indexOf(node.type) !== -1) {
                    return node;
                }
            }
            return null;
        };
        CSSCompletion.prototype.getCompletionsForDeclarationProperty = function (declaration, result) {
            return this.getPropertyProposals(declaration, result);
        };
        CSSCompletion.prototype.getPropertyProposals = function (declaration, result) {
            var properties = languageFacts.getProperties();
            for (var key in properties) {
                if (properties.hasOwnProperty(key)) {
                    var entry = properties[key];
                    if (entry.browsers.onCodeComplete) {
                        var range = void 0;
                        var insertText = void 0;
                        if (declaration) {
                            range = this.getCompletionRange(declaration.getProperty());
                            insertText = entry.name + (!isDefined(declaration.colonPosition) ? ': ' : '');
                        }
                        else {
                            range = this.getCompletionRange(null);
                            insertText = entry.name + ': ';
                        }
                        result.items.push({
                            label: entry.name,
                            documentation: languageFacts.getEntryDescription(entry),
                            insertText: insertText,
                            range: range,
                            kind: 10 /* Property */
                        });
                    }
                }
            }
            return result;
        };
        CSSCompletion.prototype.getCompletionsForDeclarationValue = function (node, result) {
            var _this = this;
            var propertyName = node.getFullPropertyName();
            var entry = languageFacts.getProperties()[propertyName];
            var existingNode = node.getValue();
            while (existingNode && existingNode.hasChildren()) {
                existingNode = existingNode.findChildAtOffset(this.offset, false);
            }
            if (entry) {
                this.getColorProposals(entry, existingNode, result);
                this.getPositionProposals(entry, existingNode, result);
                this.getRepeatStyleProposals(entry, existingNode, result);
                this.getLineProposals(entry, existingNode, result);
                this.getBoxProposals(entry, existingNode, result);
                this.getImageProposals(entry, existingNode, result);
                this.getTimingFunctionProposals(entry, existingNode, result);
                this.getBasicShapeProposals(entry, existingNode, result);
                this.getValueEnumProposals(entry, existingNode, result);
                this.getCSSWideKeywordProposals(entry, existingNode, result);
                this.getUnitProposals(entry, existingNode, result);
            }
            else {
                var existingValues = new Set();
                this.styleSheet.accept(new ValuesCollector(propertyName, existingValues));
                existingValues.getEntries().forEach(function (existingValue) {
                    result.items.push({
                        label: existingValue,
                        range: _this.getCompletionRange(existingNode),
                        kind: 12 /* Value */
                    });
                });
            }
            this.getVariableProposals(existingNode, result);
            this.getTermProposals(existingNode, result);
            return result;
        };
        CSSCompletion.prototype.getValueEnumProposals = function (entry, existingNode, result) {
            var _this = this;
            if (entry.values) {
                entry.values.forEach(function (value) {
                    if (languageFacts.isCommonValue(value)) {
                        result.items.push({
                            label: value.name,
                            documentation: languageFacts.getEntryDescription(value),
                            range: _this.getCompletionRange(existingNode),
                            kind: 12 /* Value */
                        });
                    }
                });
            }
            return result;
        };
        CSSCompletion.prototype.getCSSWideKeywordProposals = function (entry, existingNode, result) {
            for (var keywords in languageFacts.cssWideKeywords) {
                result.items.push({
                    label: keywords,
                    documentation: languageFacts.cssWideKeywords[keywords],
                    range: this.getCompletionRange(existingNode),
                    kind: 12 /* Value */
                });
            }
            return result;
        };
        CSSCompletion.prototype.getCompletionsForInterpolation = function (node, result) {
            if (this.offset >= node.offset + 2) {
                this.getVariableProposals(null, result);
            }
            return result;
        };
        CSSCompletion.prototype.getVariableProposals = function (existingNode, result) {
            var _this = this;
            var symbols = this.getSymbolContext().findSymbolsAtOffset(this.offset, nodes.ReferenceType.Variable);
            symbols.forEach(function (symbol) {
                var suggest = {
                    label: symbol.name,
                    documentation: symbol.value ? strings.getLimitedString(symbol.value) : symbol.value,
                    insertText: strings.startsWith(symbol.name, '--') ? "var(" + symbol.name + ")" : symbol.name,
                    range: _this.getCompletionRange(existingNode),
                    kind: 6 /* Variable */
                };
                if (symbol.node.type === nodes.NodeType.FunctionParameter) {
                    var mixinNode = (symbol.node.getParent());
                    if (mixinNode.type === nodes.NodeType.MixinDeclaration) {
                        suggest.detail = localize('completion.argument', 'argument from \'{0}\'', mixinNode.getName());
                    }
                }
                result.items.push(suggest);
            });
            return result;
        };
        CSSCompletion.prototype.getVariableProposalsForCSSVarFunction = function (result) {
            var _this = this;
            var symbols = this.getSymbolContext().findSymbolsAtOffset(this.offset, nodes.ReferenceType.Variable);
            symbols = symbols.filter(function (symbol) {
                return strings.startsWith(symbol.name, '--');
            });
            symbols.forEach(function (symbol) {
                result.items.push({
                    label: symbol.name,
                    documentation: symbol.value ? strings.getLimitedString(symbol.value) : symbol.value,
                    range: _this.getCompletionRange(null),
                    kind: 6 /* Variable */
                });
            });
            return result;
        };
        CSSCompletion.prototype.getUnitProposals = function (entry, existingNode, result) {
            var _this = this;
            var currentWord = '0';
            if (this.currentWord.length > 0) {
                var numMatch = this.currentWord.match(/^-?\d[\.\d+]*/);
                if (numMatch) {
                    currentWord = numMatch[0];
                    result.isIncomplete = currentWord.length === this.currentWord.length;
                }
            }
            else if (this.currentWord.length === 0) {
                result.isIncomplete = true;
            }
            entry.restrictions.forEach(function (restriction) {
                var units = languageFacts.units[restriction];
                if (units) {
                    units.forEach(function (unit) {
                        result.items.push({
                            label: currentWord + unit,
                            range: _this.getCompletionRange(existingNode),
                            kind: 11 /* Unit */
                        });
                    });
                }
            });
            return result;
        };
        CSSCompletion.prototype.getCompletionRange = function (existingNode) {
            if (existingNode && existingNode.offset <= this.offset) {
                var end = existingNode.end !== -1 ? this.textDocument.positionAt(existingNode.end) : this.position;
                return vscode_languageserver_types_1.Range.create(this.textDocument.positionAt(existingNode.offset), end);
            }
            return this.defaultReplaceRange;
        };
        CSSCompletion.prototype.getColorProposals = function (entry, existingNode, result) {
            var _this = this;
            if (entry.restrictions.indexOf('color') !== -1) {
                for (var color in languageFacts.colors) {
                    result.items.push({
                        label: color,
                        documentation: languageFacts.colors[color],
                        range: this.getCompletionRange(existingNode),
                        kind: 16 /* Color */
                    });
                }
                for (var color in languageFacts.colorKeywords) {
                    result.items.push({
                        label: color,
                        documentation: languageFacts.colorKeywords[color],
                        range: this.getCompletionRange(existingNode),
                        kind: 12 /* Value */
                    });
                }
                var colorValues = new Set();
                this.styleSheet.accept(new ColorValueCollector(colorValues));
                colorValues.getEntries().forEach(function (color) {
                    result.items.push({
                        label: color,
                        range: _this.getCompletionRange(existingNode),
                        kind: 16 /* Color */
                    });
                });
                languageFacts.colorFunctions.forEach(function (p) {
                    var tabStop = 1;
                    var replaceFunction = function (match, p1) { return '${' + tabStop++ + ':' + p1 + '}'; };
                    result.items.push({
                        label: p.func.substr(0, p.func.indexOf('(')),
                        detail: p.func,
                        documentation: p.desc,
                        insertText: vscode_languageserver_types_1.SnippetString.create(p.func.replace(/\[?\$(\w+)\]?/g, replaceFunction)),
                        range: _this.getCompletionRange(existingNode),
                        kind: 3 /* Function */
                    });
                });
            }
            return result;
        };
        CSSCompletion.prototype.getPositionProposals = function (entry, existingNode, result) {
            if (entry.restrictions.indexOf('position') !== -1) {
                for (var position in languageFacts.positionKeywords) {
                    result.items.push({
                        label: position,
                        documentation: languageFacts.positionKeywords[position],
                        range: this.getCompletionRange(existingNode),
                        kind: 12 /* Value */
                    });
                }
            }
            return result;
        };
        CSSCompletion.prototype.getRepeatStyleProposals = function (entry, existingNode, result) {
            if (entry.restrictions.indexOf('repeat') !== -1) {
                for (var repeat in languageFacts.repeatStyleKeywords) {
                    result.items.push({
                        label: repeat,
                        documentation: languageFacts.repeatStyleKeywords[repeat],
                        range: this.getCompletionRange(existingNode),
                        kind: 12 /* Value */
                    });
                }
            }
            return result;
        };
        CSSCompletion.prototype.getLineProposals = function (entry, existingNode, result) {
            var _this = this;
            if (entry.restrictions.indexOf('line-style') !== -1) {
                for (var lineStyle in languageFacts.lineStyleKeywords) {
                    result.items.push({
                        label: lineStyle,
                        documentation: languageFacts.lineStyleKeywords[lineStyle],
                        range: this.getCompletionRange(existingNode),
                        kind: 12 /* Value */
                    });
                }
            }
            if (entry.restrictions.indexOf('line-width') !== -1) {
                languageFacts.lineWidthKeywords.forEach(function (lineWidth) {
                    result.items.push({
                        label: lineWidth,
                        range: _this.getCompletionRange(existingNode),
                        kind: 12 /* Value */
                    });
                });
            }
            return result;
        };
        CSSCompletion.prototype.getBoxProposals = function (entry, existingNode, result) {
            var geometryBox = entry.restrictions.indexOf('geometry-box');
            if (geometryBox !== -1) {
                for (var box in languageFacts.geometryBoxKeywords) {
                    result.items.push({
                        label: box,
                        documentation: languageFacts.geometryBoxKeywords[box],
                        range: this.getCompletionRange(existingNode),
                        kind: 12 /* Value */
                    });
                }
            }
            if (entry.restrictions.indexOf('box') !== -1 || geometryBox !== -1) {
                for (var box in languageFacts.boxKeywords) {
                    result.items.push({
                        label: box,
                        documentation: languageFacts.boxKeywords[box],
                        range: this.getCompletionRange(existingNode),
                        kind: 12 /* Value */
                    });
                }
            }
            return result;
        };
        CSSCompletion.prototype.getImageProposals = function (entry, existingNode, result) {
            if (entry.restrictions.indexOf('image') !== -1) {
                for (var image in languageFacts.imageFunctions) {
                    result.items.push({
                        label: image,
                        documentation: languageFacts.imageFunctions[image],
                        range: this.getCompletionRange(existingNode),
                        kind: 3 /* Function */
                    });
                }
            }
            return result;
        };
        CSSCompletion.prototype.getTimingFunctionProposals = function (entry, existingNode, result) {
            if (entry.restrictions.indexOf('timing-function') !== -1) {
                for (var timing in languageFacts.transitionTimingFunctions) {
                    result.items.push({
                        label: timing,
                        documentation: languageFacts.transitionTimingFunctions[timing],
                        range: this.getCompletionRange(existingNode),
                        kind: 3 /* Function */
                    });
                }
            }
            return result;
        };
        CSSCompletion.prototype.getBasicShapeProposals = function (entry, existingNode, result) {
            if (entry.restrictions.indexOf('shape') !== -1) {
                for (var shape in languageFacts.basicShapeFunctions) {
                    result.items.push({
                        label: shape,
                        documentation: languageFacts.basicShapeFunctions[shape],
                        range: this.getCompletionRange(existingNode),
                        kind: 3 /* Function */
                    });
                }
            }
            return result;
        };
        CSSCompletion.prototype.getCompletionsForStylesheet = function (result) {
            var node = this.styleSheet.findFirstChildBeforeOffset(this.offset);
            if (!node) {
                return this.getCompletionForTopLevel(result);
            }
            if (node instanceof nodes.RuleSet) {
                return this.getCompletionsForRuleSet(node, result);
            }
            return result;
        };
        CSSCompletion.prototype.getCompletionForTopLevel = function (result) {
            var _this = this;
            languageFacts.getAtDirectives().forEach(function (entry) {
                if (entry.browsers.count > 0) {
                    result.items.push({
                        label: entry.name,
                        range: _this.getCompletionRange(null),
                        documentation: languageFacts.getEntryDescription(entry),
                        kind: 14 /* Keyword */
                    });
                }
            });
            this.getCompletionsForSelector(null, result);
            return result;
        };
        CSSCompletion.prototype.getCompletionsForRuleSet = function (ruleSet, result) {
            var declarations = ruleSet.getDeclarations();
            var isAfter = declarations && declarations.endsWith('}') && this.offset >= declarations.end;
            if (isAfter) {
                return this.getCompletionForTopLevel(result);
            }
            var isInSelectors = !declarations || this.offset <= declarations.offset;
            if (isInSelectors) {
                var currentWordStart = this.textDocument.offsetAt(this.defaultReplaceRange.start);
                while (currentWordStart > 0 && this.textDocument.getText().charAt(currentWordStart - 1) === ':') {
                    currentWordStart--;
                }
                return this.getCompletionsForSelector(ruleSet, result);
            }
            ruleSet.findParent(nodes.NodeType.Ruleset);
            return this.getCompletionsForDeclarations(ruleSet.getDeclarations(), result);
        };
        CSSCompletion.prototype.getCompletionsForSelector = function (ruleSet, result) {
            var _this = this;
            var existingNode = this.findInNodePath(nodes.NodeType.PseudoSelector, nodes.NodeType.IdentifierSelector, nodes.NodeType.ClassSelector, nodes.NodeType.ElementNameSelector);
            if (!existingNode && this.currentWord.length === 0 && this.offset > 0 && this.textDocument.getText()[this.offset - 1] === ':') {
                // after the ':' of a pseudo selector, no node generated for just ':'
                this.currentWord = ':';
                this.defaultReplaceRange = vscode_languageserver_types_1.Range.create(vscode_languageserver_types_1.Position.create(this.position.line, this.position.character - 1), this.position);
            }
            languageFacts.getPseudoClasses().forEach(function (entry) {
                if (entry.browsers.onCodeComplete) {
                    result.items.push({
                        label: entry.name,
                        range: _this.getCompletionRange(existingNode),
                        documentation: languageFacts.getEntryDescription(entry),
                        kind: 3 /* Function */
                    });
                }
            });
            languageFacts.getPseudoElements().forEach(function (entry) {
                if (entry.browsers.onCodeComplete) {
                    result.items.push({
                        label: entry.name,
                        range: _this.getCompletionRange(existingNode),
                        documentation: languageFacts.getEntryDescription(entry),
                        kind: 3 /* Function */
                    });
                }
            });
            languageFacts.html5Tags.forEach(function (entry) {
                result.items.push({
                    label: entry,
                    range: _this.getCompletionRange(existingNode),
                    kind: 14 /* Keyword */
                });
            });
            languageFacts.svgElements.forEach(function (entry) {
                result.items.push({
                    label: entry,
                    range: _this.getCompletionRange(existingNode),
                    kind: 14 /* Keyword */
                });
            });
            var visited = {};
            visited[this.currentWord] = true;
            var textProvider = this.styleSheet.getTextProvider();
            this.styleSheet.accept(function (n) {
                if (n.type === nodes.NodeType.SimpleSelector && n.length > 0) {
                    var selector = textProvider(n.offset, n.length);
                    if (selector.charAt(0) === '.' && !visited[selector]) {
                        visited[selector] = true;
                        result.items.push({
                            label: selector,
                            range: _this.getCompletionRange(existingNode),
                            kind: 14 /* Keyword */
                        });
                    }
                    return false;
                }
                return true;
            });
            if (ruleSet && ruleSet.isNested()) {
                var selector = ruleSet.getSelectors().findFirstChildBeforeOffset(this.offset);
                if (selector && ruleSet.getSelectors().getChildren().indexOf(selector) === 0) {
                    this.getPropertyProposals(null, result);
                }
            }
            return result;
        };
        CSSCompletion.prototype.getCompletionsForDeclarations = function (declarations, result) {
            if (!declarations) {
                return result;
            }
            var node = declarations.findFirstChildBeforeOffset(this.offset);
            if (!node) {
                return this.getCompletionsForDeclarationProperty(null, result);
            }
            if (node instanceof nodes.AbstractDeclaration) {
                var declaration = node;
                if (!isDefined(declaration.colonPosition || this.offset <= declaration.colonPosition)) {
                    // complete property
                    return this.getCompletionsForDeclarationProperty(declaration, result);
                }
                else if ((isDefined(declaration.semicolonPosition) && declaration.semicolonPosition < this.offset)) {
                    if (this.offset === declaration.semicolonPosition + 1) {
                        return result; // don't show new properties right after semicolon (see Bug 15421:[intellisense] [css] Be less aggressive when manually typing CSS)
                    }
                    // complete next property
                    return this.getCompletionsForDeclarationProperty(null, result);
                }
                if (declaration instanceof nodes.Declaration) {
                    // complete value
                    return this.getCompletionsForDeclarationValue(declaration, result);
                }
            }
            return result;
        };
        CSSCompletion.prototype.getCompletionsForVariableDeclaration = function (declaration, result) {
            if (this.offset > declaration.colonPosition) {
                this.getVariableProposals(declaration.getValue(), result);
            }
            return result;
        };
        CSSCompletion.prototype.getCompletionsForExpression = function (expression, result) {
            if (expression.getParent() instanceof nodes.FunctionArgument) {
                this.getCompletionsForFunctionArgument(expression.getParent(), expression.getParent().getParent(), result);
                return result;
            }
            var declaration = expression.findParent(nodes.NodeType.Declaration);
            if (!declaration) {
                this.getTermProposals(null, result);
                return result;
            }
            var node = expression.findChildAtOffset(this.offset, true);
            if (!node) {
                return this.getCompletionsForDeclarationValue(declaration, result);
            }
            if (node instanceof nodes.NumericValue || node instanceof nodes.Identifier) {
                return this.getCompletionsForDeclarationValue(declaration, result);
            }
            return result;
        };
        CSSCompletion.prototype.getCompletionsForFunctionArgument = function (arg, func, result) {
            if (func.getIdentifier().getText() === 'var') {
                if (!func.getArguments().hasChildren() || func.getArguments().getChild(0) === arg) {
                    this.getVariableProposalsForCSSVarFunction(result);
                }
            }
            return result;
        };
        CSSCompletion.prototype.getCompletionsForFunctionDeclaration = function (decl, result) {
            var declarations = decl.getDeclarations();
            if (declarations && this.offset > declarations.offset && this.offset < declarations.end) {
                this.getTermProposals(null, result);
            }
            return result;
        };
        CSSCompletion.prototype.getCompletionsForMixinReference = function (ref, result) {
            var _this = this;
            var allMixins = this.getSymbolContext().findSymbolsAtOffset(this.offset, nodes.ReferenceType.Mixin);
            allMixins.forEach(function (mixinSymbol) {
                if (mixinSymbol.node instanceof nodes.MixinDeclaration) {
                    result.items.push(_this.makeTermProposal(mixinSymbol, mixinSymbol.node.getParameters(), null));
                }
            });
            return result;
        };
        CSSCompletion.prototype.getTermProposals = function (existingNode, result) {
            var _this = this;
            var allFunctions = this.getSymbolContext().findSymbolsAtOffset(this.offset, nodes.ReferenceType.Function);
            allFunctions.forEach(function (functionSymbol) {
                if (functionSymbol.node instanceof nodes.FunctionDeclaration) {
                    result.items.push(_this.makeTermProposal(functionSymbol, functionSymbol.node.getParameters(), existingNode));
                }
            });
            return result;
        };
        CSSCompletion.prototype.makeTermProposal = function (symbol, parameters, existingNode) {
            var decl = symbol.node;
            var params = parameters.getChildren().map(function (c) {
                return (c instanceof nodes.FunctionParameter) ? c.getName() : c.getText();
            });
            return {
                label: symbol.name,
                detail: symbol.name + '(' + params.join(', ') + ')',
                insertText: vscode_languageserver_types_1.SnippetString.create(symbol.name + '(' + params.map(function (p, index) { return '${' + (index + 1) + ':' + p + '}'; }).join(', ') + ')'),
                range: this.getCompletionRange(existingNode),
                kind: 3 /* Function */
            };
        };
        return CSSCompletion;
    }());
    exports.CSSCompletion = CSSCompletion;
    var Set = (function () {
        function Set() {
            this.entries = {};
        }
        Set.prototype.add = function (entry) {
            this.entries[entry] = true;
        };
        Set.prototype.getEntries = function () {
            return Object.keys(this.entries);
        };
        return Set;
    }());
    var InternalValueCollector = (function () {
        function InternalValueCollector(entries) {
            this.entries = entries;
            // nothing to do
        }
        InternalValueCollector.prototype.visitNode = function (node) {
            if (node instanceof nodes.Identifier || node instanceof nodes.NumericValue || node instanceof nodes.HexColorValue) {
                this.entries.add(node.getText());
            }
            return true;
        };
        return InternalValueCollector;
    }());
    var ValuesCollector = (function () {
        function ValuesCollector(propertyName, entries) {
            this.propertyName = propertyName;
            this.entries = entries;
            // nothing to do
        }
        ValuesCollector.prototype.matchesProperty = function (decl) {
            var propertyName = decl.getFullPropertyName();
            return this.propertyName === propertyName;
        };
        ValuesCollector.prototype.visitNode = function (node) {
            if (node instanceof nodes.Declaration) {
                if (this.matchesProperty(node)) {
                    var value = node.getValue();
                    if (value) {
                        value.accept(new InternalValueCollector(this.entries));
                    }
                }
            }
            return true;
        };
        return ValuesCollector;
    }());
    var ColorValueCollector = (function () {
        function ColorValueCollector(entries) {
            this.entries = entries;
            // nothing to do
        }
        ColorValueCollector.prototype.visitNode = function (node) {
            if (node instanceof nodes.HexColorValue || (node instanceof nodes.Function && languageFacts.isColorConstructor(node))) {
                this.entries.add(node.getText());
            }
            return true;
        };
        return ColorValueCollector;
    }());
    function isDefined(obj) {
        return typeof obj !== 'undefined';
    }
    function getCurrentWord(document, offset) {
        var i = offset - 1;
        var text = document.getText();
        while (i >= 0 && ' \t\n\r":{[()]},'.indexOf(text.charAt(i)) === -1) {
            i--;
        }
        return text.substring(i + 1, offset);
    }
});
//# sourceMappingURL=cssCompletion.js.map