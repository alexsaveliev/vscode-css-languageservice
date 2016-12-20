import { CompletionList, TextDocument, CompletionItemKind } from 'vscode-languageserver-types';
export interface ItemDescription {
    label: string;
    detail?: string;
    documentation?: string;
    kind?: CompletionItemKind;
    resultText?: string;
}
export declare let assertCompletion: (completions: CompletionList, expected: ItemDescription, document: TextDocument, offset: number) => void;
