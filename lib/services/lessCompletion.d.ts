import * as languageFacts from './languageFacts';
import * as nodes from '../parser/cssNodes';
import { CSSCompletion } from './cssCompletion';
import { CompletionList } from 'vscode-languageserver-types';
export declare class LESSCompletion extends CSSCompletion {
    private static builtInProposals;
    private static colorProposals;
    constructor();
    private createFunctionProposals(proposals, existingNode, result);
    getTermProposals(existingNode: nodes.Node, result: CompletionList): CompletionList;
    protected getColorProposals(entry: languageFacts.IEntry, existingNode: nodes.Node, result: CompletionList): CompletionList;
}
