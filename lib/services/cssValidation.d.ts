import * as nodes from '../parser/cssNodes';
import { TextDocument, Diagnostic } from 'vscode-languageserver-types';
import { LanguageSettings } from '../cssLanguageService';
export declare class CSSValidation {
    private lintSettings;
    private validationEnabled;
    constructor();
    configure(raw: LanguageSettings): void;
    doValidation(document: TextDocument, stylesheet: nodes.Stylesheet): Diagnostic[];
}
