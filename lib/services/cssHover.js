(function (dependencies, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(dependencies, factory);
    }
})(["require", "exports", "../parser/cssNodes", "./languageFacts", "vscode-languageserver-types", "./selectorPrinting"], function (require, exports) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    var util = require("util");
    var path = require("path");
    var nodes = require("../parser/cssNodes");
    var languageFacts = require("./languageFacts");
    var vscode_languageserver_types_1 = require("vscode-languageserver-types");
    var selectorPrinting_1 = require("./selectorPrinting");
    var CSSHover = (function () {
        function CSSHover() {
        }
        CSSHover.prototype.hasPropDesc = function (propertyName) {
            return !!languageFacts.getProperties()[propertyName];
        };
        CSSHover.prototype.getPropDesc = function (propertyName) {
            var content = [];
            var propertyDefn = languageFacts.getProperties()[propertyName];
            if (propertyDefn) {
                var propDesc = propertyDefn.description;
                if (propDesc) {
                    content.push(propDesc);
                }
                var propBrws = languageFacts.getBrowserLabel(propertyDefn.browsers);
                if (propBrws) {
                    content.push(propBrws);
                }
                var propSytx = propertyDefn.syntax;
                if (propSytx) {
                    content.push({ language: "css", "value": propSytx });
                }
                var propDRef = propertyDefn.ref;
                if (propDRef) {
                    content.push(propDRef);
                }
            }
            return content;
        };
        CSSHover.prototype.findDecl = function (thisURI, documents, name, type) {
            for (var uri in documents) {
                var possibleCandidate = (function searchNode(node) {
                    if (!node)
                        return "";
                    if (node.type === type && node.getName() === name) {
                        return node.getText();
                    }
                    for (var idx = 0; idx < node.getChildren().length; idx++) {
                        var nodeRes = searchNode(node.getChildren()[idx]);
                        if (nodeRes) {
                            return nodeRes;
                        }
                    }
                    return "";
                })(documents[uri].styleSheet);
                if (possibleCandidate) {
                    return possibleCandidate;
                }
            }
            return null;
        };
        CSSHover.prototype.doHover = function (thisURI, documents, position) {
            var document = documents[thisURI].textDoc;
            var stylesheet = documents[thisURI].styleSheet;
            function getRange(node) {
                return vscode_languageserver_types_1.Range.create(document.positionAt(node.offset), document.positionAt(node.end));
            }
            var node;
            var offset = document.offsetAt(position);
            var nodepath = nodes.getNodePath(stylesheet, offset);
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
                    case nodes.NodeType.Selector: {
                        return {
                            contents: selectorPrinting_1.selectorToMarkedString(node),
                            range: getRange(node),
                        };
                    }
                    case nodes.NodeType.SimpleSelector: {
                        return {
                            contents: selectorPrinting_1.simpleSelectorToMarkedString(node),
                            range: getRange(node),
                        };
                    }
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
                    case nodes.NodeType.Declaration: {
                        var declPropName = node.getFullPropertyName();
                        if (this.hasPropDesc(declPropName)) {
                            return {
                                contents: this.getPropDesc(declPropName),
                                range: getRange(node)
                            };
                        }
                        break;
                    }
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
                    case nodes.NodeType.Term: {
                        var termText = node.getText();
                        if (this.hasPropDesc(termText)) {
                            return {
                                contents: this.getPropDesc(termText),
                                range: getRange(node)
                            };
                        }
                        break;
                    }
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
                    case nodes.NodeType.MixinDeclaration: {
                        return {
                            contents: [{ language: "scss", value: ("@mixin " + node.getName()) }],
                            range: getRange(node),
                        };
                    }
                    case nodes.NodeType.MixinReference:
                        {
                            var mDecl = void 0;
                            mDecl = this.findDecl(thisURI, documents, node.getName(), nodes.NodeType.MixinDeclaration);
                            if (mDecl) {
                                return {
                                    contents: [{ language: "scss", value: mDecl }],
                                    range: getRange(node),
                                };
                            }
                        }
                        break;
                    case nodes.NodeType.VariableName:
                        {
                            var vDecl = void 0;
                            vDecl = this.findDecl(thisURI, documents, node.getName(), nodes.NodeType.VariableDeclaration);
                            if (vDecl) {
                                return {
                                    contents: [{ language: "scss", value: vDecl }],
                                    range: getRange(node),
                                };
                            }
                        }
                        break;
                    case nodes.NodeType.VariableDeclaration: {
                        return {
                            contents: [{ language: "scss", value: node.getText() + " in " + thisURI.split("/").pop() }],
                            range: getRange(node),
                        };
                    }
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
                    case nodes.NodeType.Import: {
                        return {
                            contents: ["sources: " + node.getSources().join(", ")],
                            range: getRange(node),
                        };
                    }
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
            return null;
        };
        return CSSHover;
    }());
    exports.CSSHover = CSSHover;
});
//# sourceMappingURL=cssHover.js.map