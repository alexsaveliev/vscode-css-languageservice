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
    var CSSNavigation = (function () {
        function CSSNavigation() {
        }
        CSSNavigation.prototype.findDecl = function (thisURI, documents, name, type, range) {
            for (var uri in documents) {
                var possibleCandidate = (function searchNode(node) {
                    if (!node)
                        return null;
                    if (node.type === type) {
                        if (node.getName() === name) {
                            return {
                                uri: documents[uri].textDoc.uri,
                                range: vscode_languageserver_types_1.Range.create(documents[uri].textDoc.positionAt(node.offset), documents[uri].textDoc.positionAt(node.end))
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
            var self = { uri: documents[thisURI].textDoc.uri, range: vscode_languageserver_types_1.Range.create(position, position) };
            var nodepath = nodes.getNodePath(documents[thisURI].styleSheet, documents[thisURI].textDoc.offsetAt(position));
            for (var idx = nodepath.length; idx-- > 0;) {
                switch (nodepath[idx].type) {
                    case nodes.NodeType.MixinReference:
                    case nodes.NodeType.VariableDeclaration: {
                        var decl = this.findDecl(thisURI, documents, nodepath[idx].getName(), nodepath[idx].type, vscode_languageserver_types_1.Range.create(position, position));
                        return decl ? decl : self;
                    }
                }
            }
            return self;
        };
        CSSNavigation.prototype.findReferences = function (thisURI, documents, position) {
            var refs = [];
            var node = nodes.getNodeAtOffset(documents[thisURI].styleSheet, documents[thisURI].textDoc.offsetAt(position));
            for (var uri in documents) {
                refs = refs.concat(this.findDocumentHighlights(documents[uri].textDoc, node, documents[uri].styleSheet).map(function (highlight) {
                    return {
                        uri: documents[uri].textDoc.uri,
                        range: highlight.range
                    };
                }));
            }
            return refs;
        };
        CSSNavigation.prototype.findDocumentHighlights = function (document, node, stylesheet) {
            var result = [];
            if (!node || node.type === nodes.NodeType.Stylesheet) {
                return result;
            }
            var symbols = new cssSymbolScope_1.Symbols(stylesheet);
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
            var highlights = this.findDocumentHighlights(document, nodes.getNodeAtOffset(stylesheet, document.offsetAt(position)), stylesheet);
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