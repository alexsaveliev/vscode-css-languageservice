export declare enum TokenType {
    Ident = 0,
    AtKeyword = 1,
    String = 2,
    BadString = 3,
    BadUri = 4,
    Hash = 5,
    Num = 6,
    Percentage = 7,
    Dimension = 8,
    URI = 9,
    UnicodeRange = 10,
    CDO = 11,
    CDC = 12,
    Colon = 13,
    SemiColon = 14,
    CurlyL = 15,
    CurlyR = 16,
    ParenthesisL = 17,
    ParenthesisR = 18,
    BracketL = 19,
    BracketR = 20,
    Whitespace = 21,
    Includes = 22,
    Dashmatch = 23,
    SubstringOperator = 24,
    PrefixOperator = 25,
    SuffixOperator = 26,
    Delim = 27,
    EMS = 28,
    EXS = 29,
    Length = 30,
    Angle = 31,
    Time = 32,
    Freq = 33,
    Exclamation = 34,
    Resolution = 35,
    Comma = 36,
    Charset = 37,
    EscapedJavaScript = 38,
    BadEscapedJavaScript = 39,
    Comment = 40,
    SingleLineComment = 41,
    EOF = 42,
    CustomToken = 43,
}
export interface IToken {
    type: TokenType;
    text: string;
    offset: number;
    len: number;
}
export declare class MultiLineStream {
    private source;
    private len;
    private position;
    constructor(source: string);
    substring(from: number, to?: number): string;
    eos(): boolean;
    pos(): number;
    goBackTo(pos: number): void;
    goBack(n: number): void;
    advance(n: number): void;
    nextChar(): number;
    peekChar(n?: number): number;
    lookbackChar(n?: number): number;
    advanceIfChar(ch: number): boolean;
    advanceIfChars(ch: number[]): boolean;
    advanceWhileChar(condition: (ch: number) => boolean): number;
}
export declare class Scanner {
    stream: MultiLineStream;
    ignoreComment: boolean;
    ignoreWhitespace: boolean;
    setSource(input: string): void;
    finishToken(offset: number, type: TokenType, text?: string): IToken;
    substring(offset: number, len: number): string;
    pos(): number;
    goBackTo(pos: number): void;
    scan(): IToken;
    private _matchWordAnyCase(characters);
    protected trivia(): IToken;
    protected comment(): boolean;
    private _number();
    private _newline(result);
    private _escape(result, includeNewLines?);
    private _stringChar(closeQuote, result);
    private _string(result);
    private _url();
    private _whitespace();
    private _name(result);
    protected ident(result: string[]): boolean;
    private _identFirstChar(result);
    private _minus(result);
    private _identChar(result);
}
