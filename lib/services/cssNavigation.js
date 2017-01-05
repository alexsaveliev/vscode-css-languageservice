(function (dependencies, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(dependencies, factory);
    }
})(["require", "exports", "../parser/cssNodes", "vscode-languageserver-types", "../parser/cssSymbolScope", "../services/languageFacts", "vscode-nls"], function (require, exports) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    var nodes = require("../parser/cssNodes");
    var vscode_languageserver_types_1 = require("vscode-languageserver-types");
    var cssSymbolScope_1 = require("../parser/cssSymbolScope");
    var languageFacts_1 = require("../services/languageFacts");
    var nls = require("vscode-nls");
    var localize = nls.loadMessageBundle();
    var path = require("path");
    var url = require("url");
    var CSSNavigation = (function () {
        function CSSNavigation(uriResolver) {
            this.uriResolver = uriResolver;
        }
        CSSNavigation.prototype.findDecl = function (thisURI, documents, name, type, range) {
            function getRange(document, node) {
                return vscode_languageserver_types_1.Range.create(document.positionAt(node.offset), document.positionAt(node.end));
            }
            for (var uri in documents) {
                var possibleCandidate = (function searchNode(node) {
                    if (!node) {
                        return null;
                    }
                    if (node.type === type) {
                        if (node.getName() === name) {
                            return {
                                uri: documents[uri].textDoc.uri,
                                range: getRange(documents[uri].textDoc, node)
                            };
                        }
                    }
                    for (var idx = 0; idx < node.getChildren().length; idx++) {
                        var nodeRes = searchNode(node.getChildren()[idx]);
                        if (nodeRes) {
                            return nodeRes;
                        }
                    }
                    return null;
                })(documents[uri].styleSheet);
                if (possibleCandidate) {
                    return possibleCandidate;
                }
            }
            return {
                uri: thisURI,
                range: range
            };
        };
        CSSNavigation.prototype.findDefinition = function (thisURI, documents, position) {
            var document = documents[thisURI].textDoc;
            var stylesheet = documents[thisURI].styleSheet;
            function getRange(node) {
                return vscode_languageserver_types_1.Range.create(document.positionAt(node.offset), document.positionAt(node.end));
            }
            var offset = document.offsetAt(position);
            var nodepath = nodes.getNodePath(stylesheet, offset);
            var node;
            for (var idx = nodepath.length; idx-- > 0;) {
                node = nodepath[idx];
                switch (node.type) {
                    case nodes.NodeType.Undefined:
                        { }
                        break;
                    case nodes.NodeType.Identifier:
                        { }
                        break;
                    case nodes.NodeType.Stylesheet:
                        { }
                        break;
                    case nodes.NodeType.Ruleset:
                        { }
                        break;
                    case nodes.NodeType.Selector:
                        { }
                        break;
                    case nodes.NodeType.SimpleSelector:
                        { }
                        break;
                    case nodes.NodeType.SelectorInterpolation:
                        { }
                        break;
                    case nodes.NodeType.SelectorCombinator:
                        { }
                        break;
                    case nodes.NodeType.SelectorCombinatorParent:
                        { }
                        break;
                    case nodes.NodeType.SelectorCombinatorSibling:
                        { }
                        break;
                    case nodes.NodeType.SelectorCombinatorAllSiblings:
                        { }
                        break;
                    case nodes.NodeType.Page:
                        { }
                        break;
                    case nodes.NodeType.PageBoxMarginBox:
                        { }
                        break;
                    case nodes.NodeType.ClassSelector:
                        { }
                        break;
                    case nodes.NodeType.IdentifierSelector:
                        { }
                        break;
                    case nodes.NodeType.ElementNameSelector:
                        { }
                        break;
                    case nodes.NodeType.PseudoSelector:
                        { }
                        break;
                    case nodes.NodeType.AttributeSelector:
                        { }
                        break;
                    case nodes.NodeType.Declaration:
                        { }
                        break;
                    case nodes.NodeType.Declarations:
                        { }
                        break;
                    case nodes.NodeType.Property:
                        { }
                        break;
                    case nodes.NodeType.Expression:
                        { }
                        break;
                    case nodes.NodeType.BinaryExpression:
                        { }
                        break;
                    case nodes.NodeType.Term:
                        { }
                        break;
                    case nodes.NodeType.Operator:
                        { }
                        break;
                    case nodes.NodeType.Value:
                        { }
                        break;
                    case nodes.NodeType.StringLiteral:
                        { }
                        break;
                    case nodes.NodeType.URILiteral:
                        { }
                        break;
                    case nodes.NodeType.EscapedValue:
                        { }
                        break;
                    case nodes.NodeType.Function:
                        { }
                        break;
                    case nodes.NodeType.NumericValue:
                        { }
                        break;
                    case nodes.NodeType.HexColorValue:
                        { }
                        break;
                    case nodes.NodeType.MixinDeclaration:
                        { }
                        break;
                    case nodes.NodeType.MixinReference: {
                        var mDecl = void 0;
                        mDecl = this.findDecl(thisURI, documents, node.getName(), nodes.NodeType.MixinDeclaration, vscode_languageserver_types_1.Range.create(position, position));
                        if (mDecl) {
                            return mDecl;
                        }
                        else {
                            return {
                                uri: document.uri,
                                range: vscode_languageserver_types_1.Range.create(position, position)
                            };
                        }
                    }
                    case nodes.NodeType.VariableName: {
                        var vDecl = void 0;
                        vDecl = this.findDecl(thisURI, documents, node.getName(), nodes.NodeType.VariableDeclaration, vscode_languageserver_types_1.Range.create(position, position));
                        if (vDecl) {
                            return vDecl;
                        }
                        else {
                            return {
                                uri: document.uri,
                                range: vscode_languageserver_types_1.Range.create(position, position)
                            };
                        }
                    }
                    case nodes.NodeType.VariableDeclaration:
                        { }
                        break;
                    case nodes.NodeType.Prio:
                        { }
                        break;
                    case nodes.NodeType.Interpolation:
                        { }
                        break;
                    case nodes.NodeType.NestedProperties:
                        { }
                        break;
                    case nodes.NodeType.ExtendsReference:
                        { }
                        break;
                    case nodes.NodeType.SelectorPlaceholder:
                        { }
                        break;
                    case nodes.NodeType.Debug:
                        { }
                        break;
                    case nodes.NodeType.If:
                        { }
                        break;
                    case nodes.NodeType.Else:
                        { }
                        break;
                    case nodes.NodeType.For:
                        { }
                        break;
                    case nodes.NodeType.Each:
                        { }
                        break;
                    case nodes.NodeType.While:
                        { }
                        break;
                    case nodes.NodeType.MixinContent:
                        { }
                        break;
                    case nodes.NodeType.Media:
                        { }
                        break;
                    case nodes.NodeType.Keyframe:
                        { }
                        break;
                    case nodes.NodeType.FontFace:
                        { }
                        break;
                    case nodes.NodeType.Import:
                        {
                            for (var _i = 0, _a = node.getSources(); _i < _a.length; _i++) {
                                var source = _a[_i];
                                if (source.offset <= offset &&
                                    source.offset + source.length > offset) {
                                    var path_1 = source.getPath();
                                    var parsedUrl = url.parse(path_1);
                                    if (parsedUrl.protocol == 'http:' ||
                                        parsedUrl.protocol == 'https:') {
                                        continue;
                                    }
                                    path_1 = parsedUrl.pathname;
                                    var resolved = this.uriResolver.resolve(url.resolve(document.uri, path_1), documents);
                                    if (resolved) {
                                        return {
                                            uri: resolved,
                                            range: vscode_languageserver_types_1.Range.create(0, 0, 0, 0)
                                        };
                                    }
                                }
                            }
                        }
                        break;
                    case nodes.NodeType.Namespace:
                        { }
                        break;
                    case nodes.NodeType.Invocation: { }
                    case nodes.NodeType.FunctionDeclaration:
                        { }
                        break;
                    case nodes.NodeType.ReturnStatement:
                        { }
                        break;
                    case nodes.NodeType.MediaQuery:
                        { }
                        break;
                    case nodes.NodeType.FunctionParameter:
                        { }
                        break;
                    case nodes.NodeType.FunctionArgument:
                        { }
                        break;
                    case nodes.NodeType.KeyframeSelector:
                        { }
                        break;
                    case nodes.NodeType.ViewPort:
                        { }
                        break;
                    case nodes.NodeType.Document:
                        { }
                        break;
                    default:
                        { }
                        break;
                }
            }
            return {
                uri: document.uri,
                range: vscode_languageserver_types_1.Range.create(position, position)
            };
        };
        CSSNavigation.prototype.findReferences = function (thisURI, documents, position) {
            var refs = [];
            var node = nodes.getNodeAtOffset(documents[thisURI].styleSheet, documents[thisURI].textDoc.offsetAt(position));
            for (var uri in documents) {
                refs = refs.concat(this.findDocumentHighlights(documents[uri].textDoc, node, new cssSymbolScope_1.Symbols(documents[thisURI].styleSheet), documents[uri].styleSheet).map(function (highlight) {
                    return {
                        uri: documents[uri].textDoc.uri,
                        range: highlight.range
                    };
                }));
            }
            return refs;
        };
        CSSNavigation.prototype.findDocumentHighlights = function (document, node, symbols, stylesheet) {
            var result = [];
            if (!node || node.type === nodes.NodeType.Stylesheet || node.type === nodes.NodeType.Declarations || !stylesheet || typeof stylesheet.accept !== "function") {
                return result;
            }
            var symbol = symbols.findSymbolFromNode(node);
            var name = node.getText();
            stylesheet.accept(function (candidate) {
                if (symbol) {
                    if (symbols.matchesSymbol(candidate, symbol)) {
                        result.push({
                            kind: getHighlightKind(candidate),
                            range: getRange(candidate, document)
                        });
                        return false;
                    }
                }
                else if (node.type === candidate.type && node.length === candidate.length && name === candidate.getText()) {
                    // Same node type and data
                    result.push({
                        kind: getHighlightKind(candidate),
                        range: getRange(candidate, document)
                    });
                }
                return true;
            });
            return result;
        };
        CSSNavigation.prototype.findDocumentSymbols = function (document, stylesheet) {
            var result = [];
            stylesheet.accept(function (node) {
                var entry = {
                    name: null,
                    kind: 5 /* Class */,
                    location: null
                };
                var locationNode = node;
                if (node instanceof nodes.Selector) {
                    entry.name = node.getText();
                    locationNode = node.findParent(nodes.NodeType.Ruleset);
                }
                else if (node instanceof nodes.VariableDeclaration) {
                    entry.name = node.getName();
                    entry.kind = 13 /* Variable */;
                }
                else if (node instanceof nodes.MixinDeclaration) {
                    entry.name = node.getName();
                    entry.kind = 6 /* Method */;
                }
                else if (node instanceof nodes.FunctionDeclaration) {
                    entry.name = node.getName();
                    entry.kind = 12 /* Function */;
                }
                else if (node instanceof nodes.Keyframe) {
                    entry.name = localize('literal.keyframes', "@keyframes {0}", node.getName());
                }
                else if (node instanceof nodes.FontFace) {
                    entry.name = localize('literal.fontface', "@font-face");
                }
                if (entry.name) {
                    entry.location = vscode_languageserver_types_1.Location.create(document.uri, getRange(locationNode, document));
                    result.push(entry);
                }
                return true;
            });
            return result;
        };
        CSSNavigation.prototype.findColorSymbols = function (document, stylesheet) {
            var result = [];
            stylesheet.accept(function (node) {
                if (languageFacts_1.isColorValue(node)) {
                    result.push(getRange(node, document));
                }
                return true;
            });
            return result;
        };
        CSSNavigation.prototype.doRename = function (document, position, newName, stylesheet) {
            var highlights = this.findDocumentHighlights(document, nodes.getNodeAtOffset(stylesheet, document.offsetAt(position)), new cssSymbolScope_1.Symbols(stylesheet), stylesheet);
            var edits = highlights.map(function (h) { return vscode_languageserver_types_1.TextEdit.replace(h.range, newName); });
            return {
                changes: (_a = {},
                    _a[document.uri] = edits,
                    _a)
            };
            var _a;
        };
        return CSSNavigation;
    }());
    exports.CSSNavigation = CSSNavigation;
    function getRange(node, document) {
        return vscode_languageserver_types_1.Range.create(document.positionAt(node.offset), document.positionAt(node.end));
    }
    function getHighlightKind(node) {
        if (node.type === nodes.NodeType.Selector) {
            return 3 /* Write */;
        }
        if (node instanceof nodes.Identifier) {
            if (node.parent && node.parent instanceof nodes.Property) {
                if (node.isCustomProperty) {
                    return 3 /* Write */;
                }
            }
        }
        if (node.parent) {
            switch (node.parent.type) {
                case nodes.NodeType.FunctionDeclaration:
                case nodes.NodeType.MixinDeclaration:
                case nodes.NodeType.Keyframe:
                case nodes.NodeType.VariableDeclaration:
                case nodes.NodeType.FunctionParameter:
                    return 3 /* Write */;
            }
        }
        return 2 /* Read */;
    }
});
//# sourceMappingURL=cssNavigation.js.map