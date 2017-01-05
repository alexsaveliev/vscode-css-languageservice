/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';

import * as nodes from '../parser/cssNodes';
import {TextDocument, Range, Position, Location, DocumentHighlightKind, DocumentHighlight,
	SymbolInformation, SymbolKind, WorkspaceEdit, TextEdit, VersionedTextDocumentIdentifier, MarkedString} from 'vscode-languageserver-types';
import {Symbols} from '../parser/cssSymbolScope';
import {isColorValue} from '../services/languageFacts';
import {URIResolver} from '../services/uriResolver';

import * as nls from 'vscode-nls';
const localize = nls.loadMessageBundle();

var path = require("path");
var url = require("url");

export class CSSNavigation {

	private uriResolver: URIResolver;

	constructor(uriResolver: URIResolver) {
		this.uriResolver = uriResolver;
	}

	public findDecl(thisURI: string, documents: {[uri: string]: {textDoc: TextDocument, styleSheet: nodes.Stylesheet}}, name: string, type: nodes.NodeType, range: Range): Location {
		function getRange(document: TextDocument, node: nodes.Node) {
			return Range.create(document.positionAt(node.offset), document.positionAt(node.end));
		}

		for (var uri in documents) {
			const possibleCandidate = (function searchNode(node: nodes.Node): Location {
				if (!node) {
					return null;
				}
				if (node.type === type) {
					if ((node as any).getName() === name) {
						return {
							uri: documents[uri].textDoc.uri,
							range: getRange(documents[uri].textDoc, node)
						};
					}
				}
				for (let idx = 0; idx < node.getChildren().length; idx++) {
					const nodeRes = searchNode(node.getChildren()[idx]);
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
	}

	public findDefinition(thisURI: string, documents: {[uri: string]: {textDoc: TextDocument, styleSheet: nodes.Stylesheet}}, position: Position): Location {
		const document = documents[thisURI].textDoc;
		const stylesheet = documents[thisURI].styleSheet;

		function getRange(node: nodes.Node) {
			return Range.create(document.positionAt(node.offset), document.positionAt(node.end));
		}

		let offset = document.offsetAt(position);
		let nodepath = nodes.getNodePath(stylesheet, offset);

		let node : nodes.Node;

		for (let idx = nodepath.length; idx-- > 0;) {
			node = nodepath[idx];

			switch (node.type) {
				case nodes.NodeType.Undefined: { } break;
				case nodes.NodeType.Identifier: { } break;
				case nodes.NodeType.Stylesheet: { } break;
				case nodes.NodeType.Ruleset: { } break;
				case nodes.NodeType.Selector: { } break;
				case nodes.NodeType.SimpleSelector: { } break;
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
				case nodes.NodeType.Declaration: { } break;
				case nodes.NodeType.Declarations: { } break;
				case nodes.NodeType.Property: { } break;
				case nodes.NodeType.Expression: { } break;
				case nodes.NodeType.BinaryExpression: { } break;
				case nodes.NodeType.Term: { } break;
				case nodes.NodeType.Operator: { } break;
				case nodes.NodeType.Value: { } break;
				case nodes.NodeType.StringLiteral: { } break;
				case nodes.NodeType.URILiteral: { } break;
				case nodes.NodeType.EscapedValue: { } break;
				case nodes.NodeType.Function: { } break;
				case nodes.NodeType.NumericValue: { } break;
				case nodes.NodeType.HexColorValue: { } break;
				case nodes.NodeType.MixinDeclaration: { } break;
				case nodes.NodeType.MixinReference: {
					let mDecl: Location;

					mDecl = this.findDecl(thisURI, documents, (node as nodes.MixinReference).getName(), nodes.NodeType.MixinDeclaration, Range.create(position, position));
					if (mDecl) {
						return mDecl;
					} else {
						return {
							uri: document.uri,
							range: Range.create(position, position)
						};
					}
				}
				case nodes.NodeType.VariableName: {
					let vDecl: Location;

					vDecl = this.findDecl(thisURI, documents, (node as nodes.Variable).getName(), nodes.NodeType.VariableDeclaration, Range.create(position, position));
					if (vDecl) {
						return vDecl;
					} else {
						return {
							uri: document.uri,
							range: Range.create(position, position)
						};
					}
				}
				case nodes.NodeType.VariableDeclaration: { } break;
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
					for (const source of (node as nodes.Import).getSources()) {
						if (source.offset <= offset &&
							source.offset + source.length > offset) {
								let path = source.getPath();
								const parsedUrl = url.parse(path);
								if (parsedUrl.protocol == 'http:' ||
									parsedUrl.protocol == 'https:') {
									continue;
								}
								path = parsedUrl.pathname;
								const resolved = this.uriResolver.resolve(url.resolve(document.uri, path), documents);
								if (resolved) {
									return {
										uri: resolved,
										range: Range.create(0, 0, 0, 0)
									};
								}
						}
					}
				} 
				break;
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

		return {
			uri: document.uri,
			range: Range.create(position, position)
		};
	}

	public findReferences(thisURI: string, documents: {[uri: string]: {textDoc: TextDocument, styleSheet: nodes.Stylesheet}}, position: Position): Location[] {
		let refs: Location[] = [];
		const node: nodes.Node = nodes.getNodeAtOffset(documents[thisURI].styleSheet, documents[thisURI].textDoc.offsetAt(position));

		for (var uri in documents) {
			refs = refs.concat(this.findDocumentHighlights(documents[uri].textDoc, node, new Symbols(documents[thisURI].styleSheet), documents[uri].styleSheet).map(highlight => {
				return {
					uri: documents[uri].textDoc.uri,
					range: highlight.range
				};
			}));
		}

		return refs;
	}

	public findDocumentHighlights(document: TextDocument, node: nodes.Node, symbols: Symbols, stylesheet: nodes.Stylesheet): DocumentHighlight[] {
		let result: DocumentHighlight[] = [];

		if (!node || node.type === nodes.NodeType.Stylesheet || node.type === nodes.NodeType.Declarations || !stylesheet || typeof stylesheet.accept !== "function") {
			return result;
		}

		let symbol = symbols.findSymbolFromNode(node);
		let name = node.getText();

		stylesheet.accept(candidate => {
			if (symbol) {
				if (symbols.matchesSymbol(candidate, symbol)) {
					result.push({
						kind: getHighlightKind(candidate),
						range: getRange(candidate, document)
					});
					return false;
				}
			} else if (node.type === candidate.type && node.length === candidate.length && name === candidate.getText()) {
				// Same node type and data
				result.push({
					kind: getHighlightKind(candidate),
					range: getRange(candidate, document)
				});
			}
			return true;
		});

		return result;
	}

	public findDocumentSymbols(document: TextDocument, stylesheet: nodes.Stylesheet): SymbolInformation[] {

		let result: SymbolInformation[] = [];

		stylesheet.accept((node) => {

			let entry: SymbolInformation = {
				name: null,
				kind: SymbolKind.Class, // TODO@Martin: find a good SymbolKind
				location: null
			};
			let locationNode = node;
			if (node instanceof nodes.Selector) {
				entry.name = node.getText();
				locationNode = node.findParent(nodes.NodeType.Ruleset)
			} else if (node instanceof nodes.VariableDeclaration) {
				entry.name = (<nodes.VariableDeclaration>node).getName();
				entry.kind = SymbolKind.Variable;
			} else if (node instanceof nodes.MixinDeclaration) {
				entry.name = (<nodes.MixinDeclaration>node).getName();
				entry.kind = SymbolKind.Method;
			} else if (node instanceof nodes.FunctionDeclaration) {
				entry.name = (<nodes.FunctionDeclaration>node).getName();
				entry.kind = SymbolKind.Function;
			} else if (node instanceof nodes.Keyframe) {
				entry.name = localize('literal.keyframes', "@keyframes {0}", (<nodes.Keyframe>node).getName());
			} else if (node instanceof nodes.FontFace) {
				entry.name = localize('literal.fontface', "@font-face");
			}

			if (entry.name) {
				entry.location = Location.create(document.uri, getRange(locationNode, document));
				result.push(entry);
			}

			return true;
		});

		return result;
	}

	public findColorSymbols(document: TextDocument, stylesheet: nodes.Stylesheet): Range[] {
		let result: Range[] = [];
		stylesheet.accept((node) => {
			if (isColorValue(node)) {
				result.push(getRange(node, document));
			}
			return true;
		});
		return result;
	}

	public doRename(document: TextDocument, position: Position, newName: string, stylesheet: nodes.Stylesheet): WorkspaceEdit {
		let highlights = this.findDocumentHighlights(document, nodes.getNodeAtOffset(stylesheet, document.offsetAt(position)), new Symbols(stylesheet), stylesheet);
		let edits = highlights.map(h => TextEdit.replace(h.range, newName));
		return {
			changes: {
				[document.uri]: edits
			}
		};
	}

}

function getRange(node: nodes.Node, document: TextDocument) : Range {
	return Range.create(document.positionAt(node.offset), document.positionAt(node.end));
}

function getHighlightKind(node: nodes.Node): DocumentHighlightKind {

	if (node.type === nodes.NodeType.Selector) {
		return DocumentHighlightKind.Write;
	}

	if (node instanceof nodes.Identifier) {
		if (node.parent && node.parent instanceof nodes.Property) {
			if (node.isCustomProperty) {
				return DocumentHighlightKind.Write;
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
				return DocumentHighlightKind.Write;
		}
	}

	return DocumentHighlightKind.Read;
}

