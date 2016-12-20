import * as languageFacts from './languageFacts';
import { CSSCompletion } from './cssCompletion';
import * as nodes from '../parser/cssNodes';
import { CompletionList } from 'vscode-languageserver-types';
export declare class SCSSCompletion extends CSSCompletion {
    private static variableDefaults;
    private static colorProposals;
    private static selectorFuncs;
    private static builtInFuncs;
    constructor();
    private createReplaceFunction();
    private createFunctionProposals(proposals, existingNode, result);
    getCompletionsForSelector(ruleSet: nodes.RuleSet, result: CompletionList): CompletionList;
    getTermProposals(existingNode: nodes.Node, result: CompletionList): CompletionList;
    protected getColorProposals(entry: languageFacts.IEntry, existingNode: nodes.Node, result: CompletionList): CompletionList;
    getCompletionsForDeclarationProperty(declaration: nodes.Declaration, result: CompletionList): CompletionList;
}
