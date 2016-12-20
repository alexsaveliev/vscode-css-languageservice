import * as nodes from '../parser/cssNodes';
import { TextDocument, Range, CodeActionContext, Command } from 'vscode-languageserver-types';
export declare class CSSCodeActions {
    constructor();
    doCodeActions(document: TextDocument, range: Range, context: CodeActionContext, stylesheet: nodes.Stylesheet): Command[];
    private getFixesForUnknownProperty(document, property, marker, result);
    private appendFixesForMarker(document, stylesheet, marker, result);
}
