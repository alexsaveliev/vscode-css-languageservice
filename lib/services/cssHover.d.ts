import * as nodes from '../parser/cssNodes';
import { TextDocument, Position, Hover } from 'vscode-languageserver-types';
export declare class CSSHover {
    constructor();
    private hasPropDesc(propertyName);
    private getPropDesc(propertyName);
    findDecl(thisURI: string, documents: {
        [uri: string]: {
            textDoc: TextDocument;
            styleSheet: nodes.Stylesheet;
        };
    }, name: string, type: nodes.NodeType): string;
    doHover(thisURI: string, documents: {
        [uri: string]: {
            textDoc: TextDocument;
            styleSheet: nodes.Stylesheet;
        };
    }, position: Position): Hover;
}
