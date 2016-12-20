/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';

var util = require("util");
var path = require("path");

import * as nodes from '../parser/cssNodes';
import * as languageFacts from './languageFacts';
import {TextDocument, Range, Position, Hover, MarkedString} from 'vscode-languageserver-types';
import {selectorToMarkedString, simpleSelectorToMarkedString} from './selectorPrinting';

export class CSSHover {

	constructor() {
	}

	private hasPropDesc(propertyName: string): boolean {
		return !!languageFacts.getProperties()[propertyName];
	}

	private getPropDesc(propertyName: string): MarkedString[] {
		let content : MarkedString[] = [];

		let propertyDefn = languageFacts.getProperties()[propertyName];
		if (propertyDefn) {
			let propDesc = propertyDefn.description;
			if (propDesc) {
				content.push(propDesc);
			}
			let propBrws = languageFacts.getBrowserLabel(propertyDefn.browsers);
			if (propBrws) {
				content.push(propBrws);
			}
			let propSytx = propertyDefn.syntax;
			if (propSytx) {
				content.push({language: "css", "value": propSytx});
			}
			let propDRef = propertyDefn.ref;
			if (propDRef) {
				content.push(propDRef);
			}
		}

		return content;
	}

	public findDecl(thisURI: string, documents: {[uri: string]: {textDoc: TextDocument, styleSheet: nodes.Stylesheet}}, name: string, type: nodes.NodeType): string {
		for (var uri in documents) {
			const possibleCandidate = (function searchNode(node: nodes.Node): string {
				if (!node) return "";
				if (node.type === type && (node as any).getName() === name) {
					return node.getText();
				}
				for (let idx = 0; idx < node.getChildren().length; idx++) {
					const nodeRes = searchNode(node.getChildren()[idx]);
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
	}

	public doHover(thisURI: string, documents: {[uri: string]: {textDoc: TextDocument, styleSheet: nodes.Stylesheet}}, position: Position): Hover {
		const document = documents[thisURI].textDoc;
		const stylesheet = documents[thisURI].styleSheet;

		function getRange(node: nodes.Node) {
			return Range.create(document.positionAt(node.offset), document.positionAt(node.end));
		}

		let node : nodes.Node;
		let offset = document.offsetAt(position);
		let nodepath = nodes.getNodePath(stylesheet, offset);

		for (let idx = nodepath.length; idx-- > 0;) {
			node = nodepath[idx];

			switch (node.type) {
				case nodes.NodeType.Undefined: { } break;
				case nodes.NodeType.Identifier: { } break;
				case nodes.NodeType.Stylesheet: { } break;
				case nodes.NodeType.Ruleset: { } break;
				case nodes.NodeType.Selector: {
					return {
						contents: selectorToMarkedString(node as nodes.Selector),
						range: getRange(node),
					};
				}
				case nodes.NodeType.SimpleSelector: {
					return {
						contents: simpleSelectorToMarkedString(node as nodes.SimpleSelector),
						range: getRange(node),
					};
				}
				case nodes.NodeType.SelectorInterpolation: { } break;
				case nodes.NodeType.SelectorCombinator: { } break;
				case nodes.NodeType.SelectorCombinatorParent: { } break;
				case nodes.NodeType.SelectorCombinatorSibling: { } break;
				case nodes.NodeType.SelectorCombinatorAllSiblings: { } break;
				case nodes.NodeType.Page: { } break;
				case nodes.NodeType.PageBoxMarginBox: { } break;
				case nodes.NodeType.ClassSelector: { } break;
				case nodes.NodeType.IdentifierSelector: { } break;
				case nodes.NodeType.ElementNameSelector: { } break;
				case nodes.NodeType.PseudoSelector: { } break;
				case nodes.NodeType.AttributeSelector: { } break;
				case nodes.NodeType.Declaration: {
					let declPropName = (node as nodes.Declaration).getFullPropertyName();

					if (this.hasPropDesc(declPropName)) {
						return {
							contents: this.getPropDesc(declPropName),
							range: getRange(node)
						};
					}

					break;
				}
				case nodes.NodeType.Declarations: { } break;
				case nodes.NodeType.Property: { } break;
				case nodes.NodeType.Expression: { } break;
				case nodes.NodeType.BinaryExpression: { } break;
				case nodes.NodeType.Term: {
					let termText = (node as nodes.Term).getText();

					if (this.hasPropDesc(termText)) {
						return {
							contents: this.getPropDesc(termText),
							range: getRange(node)
						};
					}

					break;
				}
				case nodes.NodeType.Operator: { } break;
				case nodes.NodeType.Value: { } break;
				case nodes.NodeType.StringLiteral: { } break;
				case nodes.NodeType.URILiteral: { } break;
				case nodes.NodeType.EscapedValue: { } break;
				case nodes.NodeType.Function: { } break;
				case nodes.NodeType.NumericValue: { } break;
				case nodes.NodeType.HexColorValue: { } break;
				case nodes.NodeType.MixinDeclaration: {
					return {
						contents: [{language: "scss", value: (`@mixin ${(node as nodes.MixinDeclaration).getName()}`)} as MarkedString],
						range: getRange(node),
					};
				}
				case nodes.NodeType.MixinReference: {
					let mDecl: string;

					mDecl = this.findDecl(thisURI, documents, (node as nodes.MixinReference).getName(), nodes.NodeType.MixinDeclaration);
					if (mDecl) {
						return {
							contents: [{language: "scss", value: mDecl} as MarkedString],
							range: getRange(node),
						};
					}
				} break;
				case nodes.NodeType.VariableName: {
					let vDecl: string;

					vDecl = this.findDecl(thisURI, documents, (node as nodes.Variable).getName(), nodes.NodeType.VariableDeclaration);
					if (vDecl) {
						return {
							contents: [{language: "scss", value: vDecl} as MarkedString],
							range: getRange(node),
						};
					}
				} break;
				case nodes.NodeType.VariableDeclaration: {
					return {
						contents: [{language: "scss", value: `${(node as nodes.VariableDeclaration).getText()} in ${thisURI.split("/").pop()}`} as MarkedString],
						range: getRange(node),
					};
				}
				case nodes.NodeType.Prio: { } break;
				case nodes.NodeType.Interpolation: { } break;
				case nodes.NodeType.NestedProperties: { } break;
				case nodes.NodeType.ExtendsReference: { } break;
				case nodes.NodeType.SelectorPlaceholder: { } break;
				case nodes.NodeType.Debug: { } break;
				case nodes.NodeType.If: { } break;
				case nodes.NodeType.Else: { } break;
				case nodes.NodeType.For: { } break;
				case nodes.NodeType.Each: { } break;
				case nodes.NodeType.While: { } break;
				case nodes.NodeType.MixinContent: { } break;
				case nodes.NodeType.Media: { } break;
				case nodes.NodeType.Keyframe: { } break;
				case nodes.NodeType.FontFace: { } break;
				case nodes.NodeType.Import: {
					return {
						contents: ["sources: " + (node as nodes.Import).getSources().join(", ")],
						range: getRange(node),
					};
				}
				case nodes.NodeType.Namespace: { } break;
				case nodes.NodeType.Invocation: { }
				case nodes.NodeType.FunctionDeclaration: { } break;
				case nodes.NodeType.ReturnStatement: { } break;
				case nodes.NodeType.MediaQuery: { } break;
				case nodes.NodeType.FunctionParameter: { } break;
				case nodes.NodeType.FunctionArgument: { } break;
				case nodes.NodeType.KeyframeSelector: { } break;
				case nodes.NodeType.ViewPort: { } break;
				case nodes.NodeType.Document: { } break;
				default: { } break;
			}
		}

		return null;
	}
}

