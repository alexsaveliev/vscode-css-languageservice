import * as nodes from './cssNodes';
export declare class CSSIssueType implements nodes.IRule {
    id: string;
    message: string;
    constructor(id: string, message: string);
}
export declare let ParseError: {
    NumberExpected: CSSIssueType;
    ConditionExpected: CSSIssueType;
    RuleOrSelectorExpected: CSSIssueType;
    DotExpected: CSSIssueType;
    ColonExpected: CSSIssueType;
    SemiColonExpected: CSSIssueType;
    TermExpected: CSSIssueType;
    ExpressionExpected: CSSIssueType;
    OperatorExpected: CSSIssueType;
    IdentifierExpected: CSSIssueType;
    PercentageExpected: CSSIssueType;
    URIOrStringExpected: CSSIssueType;
    URIExpected: CSSIssueType;
    VariableNameExpected: CSSIssueType;
    VariableValueExpected: CSSIssueType;
    PropertyValueExpected: CSSIssueType;
    LeftCurlyExpected: CSSIssueType;
    RightCurlyExpected: CSSIssueType;
    LeftSquareBracketExpected: CSSIssueType;
    RightSquareBracketExpected: CSSIssueType;
    LeftParenthesisExpected: CSSIssueType;
    RightParenthesisExpected: CSSIssueType;
    CommaExpected: CSSIssueType;
    PageDirectiveOrDeclarationExpected: CSSIssueType;
    UnknownAtRule: CSSIssueType;
    UnknownKeyword: CSSIssueType;
    SelectorExpected: CSSIssueType;
    StringLiteralExpected: CSSIssueType;
};
