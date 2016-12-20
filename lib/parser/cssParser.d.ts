import { TokenType, Scanner, IToken } from './cssScanner';
import * as nodes from './cssNodes';
import { CSSIssueType } from './cssErrors';
import { TextDocument } from 'vscode-languageserver-types';
export interface IMark {
    prev: IToken;
    curr: IToken;
    pos: number;
}
export declare class Parser {
    scanner: Scanner;
    token: IToken;
    prevToken: IToken;
    private lastErrorToken;
    constructor(scnr?: Scanner);
    findDependencies(stylesheet: nodes.Stylesheet): string[];
    peek(type: TokenType, text?: string, ignoreCase?: boolean): boolean;
    peekRegExp(type: TokenType, regEx: RegExp): boolean;
    hasWhitespace(): boolean;
    consumeToken(): void;
    mark(): IMark;
    restoreAtMark(mark: IMark): void;
    acceptOne(type: TokenType, text?: string[], ignoreCase?: boolean): boolean;
    accept(type: TokenType, text?: string, ignoreCase?: boolean): boolean;
    resync(resyncTokens: TokenType[], resyncStopTokens: TokenType[]): boolean;
    createNode(nodeType: nodes.NodeType): nodes.Node;
    create(ctor: any): nodes.Node;
    finish<T extends nodes.Node>(node: T, error?: CSSIssueType, resyncTokens?: TokenType[], resyncStopTokens?: TokenType[]): T;
    markError<T extends nodes.Node>(node: T, error: CSSIssueType, resyncTokens?: TokenType[], resyncStopTokens?: TokenType[]): void;
    parseStylesheet(textDocument: TextDocument): nodes.Stylesheet;
    internalParse<T extends nodes.Node>(input: string, parseFunc: () => T, textProvider?: nodes.ITextProvider): T;
    _parseStylesheet(): nodes.Stylesheet;
    _parseStylesheetStatement(): nodes.Node;
    _tryParseRuleset(isNested: boolean): nodes.RuleSet;
    _parseRuleset(isNested?: boolean): nodes.RuleSet;
    _parseRuleSetDeclaration(): nodes.Node;
    /**
     * Parses declarations like:
     *   @apply --my-theme;
     *
     * Follows https://tabatkins.github.io/specs/css-apply-rule/#using
     */
    _parseAtApply(): nodes.Node;
    _needsSemicolonAfter(node: nodes.Node): boolean;
    _parseDeclarations(parseDeclaration: () => nodes.Node): nodes.Declarations;
    _parseBody<T extends nodes.BodyDeclaration>(node: T, parseDeclaration: () => nodes.Node): T;
    _parseSelector(isNested: boolean): nodes.Selector;
    _parseDeclaration(resyncStopTokens?: TokenType[]): nodes.Declaration;
    _tryParseCustomPropertyDeclaration(): nodes.Node;
    /**
     * Parse custom property values.
     *
     * Based on https://www.w3.org/TR/css-variables/#syntax
     *
     * This code is somewhat unusual, as the allowed syntax is incredibly broad,
     * parsing almost any sequence of tokens, save for a small set of exceptions.
     * Unbalanced delimitors, invalid tokens, and declaration
     * terminators like semicolons and !important directives (when not inside
     * of delimitors).
     */
    _parseCustomPropertyValue(): nodes.Node;
    _tryToParseDeclaration(): nodes.Declaration;
    _parseProperty(): nodes.Property;
    _parsePropertyIdentifier(): nodes.Identifier;
    _parseCharset(): nodes.Node;
    _parseImport(): nodes.Node;
    _parseNamespace(): nodes.Node;
    _parseFontFace(): nodes.Node;
    _parseViewPort(): nodes.Node;
    _parseKeyframe(): nodes.Node;
    _parseKeyframeSelector(): nodes.Node;
    _parseMediaDeclaration(): nodes.Node;
    _parseMedia(): nodes.Node;
    _parseMediaQuery(resyncStopToken: TokenType[]): nodes.Node;
    _parseMediaFeatureName(): nodes.Node;
    _parseMediaList(): nodes.Medialist;
    _parseMedium(): nodes.Node;
    _parsePageDeclaration(): nodes.Node;
    _parsePage(): nodes.Node;
    _parsePageMarginBox(): nodes.Node;
    _parsePageSelector(): nodes.Node;
    _parseDocument(): nodes.Node;
    _parseOperator(): nodes.Node;
    _parseUnaryOperator(): nodes.Node;
    _parseCombinator(): nodes.Node;
    _parseSimpleSelector(): nodes.SimpleSelector;
    _parseSimpleSelectorBody(): nodes.Node;
    _parseSelectorIdent(): nodes.Node;
    _parseHash(): nodes.Node;
    _parseClass(): nodes.Node;
    _parseElementName(): nodes.Node;
    _parseAttrib(): nodes.Node;
    _parsePseudo(): nodes.Node;
    _parsePrio(): nodes.Node;
    _parseExpr(stopOnComma?: boolean): nodes.Expression;
    _parseBinaryExpr(preparsedLeft?: nodes.BinaryExpression, preparsedOper?: nodes.Node): nodes.Node;
    _parseTerm(): nodes.Term;
    _parseOperation(): nodes.Node;
    _parseNumeric(): nodes.NumericValue;
    _parseStringLiteral(): nodes.Node;
    _parseURILiteral(): nodes.Node;
    _parseIdent(referenceTypes?: nodes.ReferenceType[]): nodes.Identifier;
    _parseFunction(): nodes.Function;
    _parseFunctionIdentifier(): nodes.Identifier;
    _parseFunctionArgument(): nodes.Node;
    _parseHexColor(): nodes.Node;
}
