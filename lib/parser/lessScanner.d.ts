import * as scanner from './cssScanner';
export declare const Ellipsis: scanner.TokenType;
export declare class LESSScanner extends scanner.Scanner {
    scan(): scanner.IToken;
    protected comment(): boolean;
    private escapedJavaScript();
}
