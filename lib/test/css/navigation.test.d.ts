import * as nodes from '../../parser/cssNodes';
import { Parser } from '../../parser/cssParser';
export declare function assertScopesAndSymbols(p: Parser, input: string, expected: string): void;
export declare function assertHighlights(p: Parser, input: string, marker: string, expectedMatches: number, expectedWrites: number, elementName?: string): PromiseLike<void>;
export declare function assertSymbolsInScope(p: Parser, input: string, offset: number, ...selections: {
    name: string;
    type: nodes.ReferenceType;
}[]): void;
export declare function assertScopeBuilding(p: Parser, input: string, ...scopes: {
    offset: number;
    length: number;
}[]): void;
