import { TokenType } from './cssScanner';
import * as cssParser from './cssParser';
import * as nodes from './cssNodes';
export declare class LESSParser extends cssParser.Parser {
    constructor();
    _parseStylesheetStatement(): nodes.Node;
    _parseImport(): nodes.Node;
    _parseMediaQuery(resyncStopToken: TokenType[]): nodes.Node;
    _parseMediaDeclaration(): nodes.Node;
    _parseVariableDeclaration(panic?: TokenType[]): nodes.VariableDeclaration;
    _parseVariable(): nodes.Variable;
    _parseTerm(): nodes.Term;
    _parseEscaped(): nodes.Node;
    _parseOperator(): nodes.Node;
    _parseGuardOperator(): nodes.Node;
    _parseRuleSetDeclaration(): nodes.Node;
    _parseSimpleSelectorBody(): nodes.Node;
    _parseSelector(isNested: boolean): nodes.Selector;
    _parseSelectorCombinator(): nodes.Node;
    _parseSelectorIdent(): nodes.Node;
    _parseSelectorInterpolation(): nodes.Node;
    _tryParseMixinDeclaration(): nodes.Node;
    private _parseMixinDeclarationIdentifier();
    _parsePseudo(): nodes.Node;
    _parseExtend(): nodes.Node;
    private _completeExtends(node);
    _parseDetachedRuleSetMixin(): nodes.Node;
    _tryParseMixinReference(atRoot?: boolean): nodes.Node;
    _parseMixinArgument(): nodes.Node;
    _parseMixinParameter(): nodes.Node;
    _parseGuard(): nodes.LessGuard;
    _parseGuardCondition(): nodes.Node;
    _parseFunctionIdentifier(): nodes.Identifier;
    _parsePropertyIdentifier(): nodes.Identifier;
}