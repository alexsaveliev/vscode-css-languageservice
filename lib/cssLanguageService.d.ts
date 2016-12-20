import { TextDocument, Position, CompletionList, Hover, Range, SymbolInformation, Diagnostic, Location, DocumentHighlight, CodeActionContext, Command, WorkspaceEdit } from 'vscode-languageserver-types';
export declare type Stylesheet = {};
export interface LanguageService {
    configure(raw: LanguageSettings): void;
    doValidation(document: TextDocument, stylesheet: Stylesheet): Diagnostic[];
    parseStylesheet(document: TextDocument): Stylesheet;
    doComplete(document: TextDocument, position: Position, stylesheet: Stylesheet): CompletionList;
    findDependencies(stylesheet: Stylesheet): string[];
    doHover(thisURI: string, documents: {
        [uri: string]: {
            textDoc: TextDocument;
            styleSheet: Stylesheet;
        };
    }, position: Position): Hover;
    findDefinition(thisURI: string, documents: {
        [uri: string]: {
            textDoc: TextDocument;
            styleSheet: Stylesheet;
        };
    }, position: Position): Location;
    findReferences(thisURI: string, documents: {
        [uri: string]: {
            textDoc: TextDocument;
            styleSheet: Stylesheet;
        };
    }, position: Position): Location[];
    findDocumentHighlights(document: TextDocument, position: Position, stylesheet: Stylesheet): DocumentHighlight[];
    findDocumentSymbols(document: TextDocument, stylesheet: Stylesheet): SymbolInformation[];
    doCodeActions(document: TextDocument, range: Range, context: CodeActionContext, stylesheet: Stylesheet): Command[];
    findColorSymbols(document: TextDocument, stylesheet: Stylesheet): Range[];
    doRename(document: TextDocument, position: Position, newName: string, stylesheet: Stylesheet): WorkspaceEdit;
}
export interface LanguageSettings {
    validate?: boolean;
    lint?: any;
}
export declare function getCSSLanguageService(): LanguageService;
export declare function getSCSSLanguageService(): LanguageService;
export declare function getLESSLanguageService(): LanguageService;
