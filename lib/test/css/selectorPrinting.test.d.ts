import { Parser } from '../../parser/cssParser';
export declare function parseSelector(p: Parser, input: string, selectorName: string, expected: string): void;
export declare function assertElement(p: Parser, input: string, expected: {
    name: string;
    value: string;
}[]): void;
