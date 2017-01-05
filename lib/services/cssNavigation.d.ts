import * as nodes from '../parser/cssNodes';
import { TextDocument, Range, Position, Location, DocumentHighlight, SymbolInformation, WorkspaceEdit } from 'vscode-languageserver-types';
import { Symbols } from '../parser/cssSymbolScope';
import { URIResolver } from '../services/uriResolver';
export declare class CSSNavigation {
    private uriResolver;
    constructor(uriResolver: URIResolver);
    findDecl(thisURI: string, documents: {
        [uri: string]: {
            textDoc: TextDocument;
            styleSheet: nodes.Stylesheet;
        };
    }, name: string, type: nodes.NodeType, range: Range): Location;
    findDefinition(thisURI: string, documents: {
        [uri: string]: {
            textDoc: TextDocument;
            styleSheet: nodes.Stylesheet;
        };
    }, position: Position): Location;
    findReferences(thisURI: string, documents: {
        [uri: string]: {
            textDoc: TextDocument;
            styleSheet: nodes.Stylesheet;
        };
    }, position: Position): Location[];
    findDocumentHighlights(document: TextDocument, node: nodes.Node, symbols: Symbols, stylesheet: nodes.Stylesheet): DocumentHighlight[];
    findDocumentSymbols(document: TextDocument, stylesheet: nodes.Stylesheet): SymbolInformation[];
    findColorSymbols(document: TextDocument, stylesheet: nodes.Stylesheet): Range[];
    doRename(document: TextDocument, position: Position, newName: string, stylesheet: nodes.Stylesheet): WorkspaceEdit;
}
