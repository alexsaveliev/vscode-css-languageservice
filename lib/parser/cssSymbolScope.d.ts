import * as nodes from './cssNodes';
export declare class Scope {
    parent: Scope;
    children: Scope[];
    offset: number;
    length: number;
    private symbols;
    constructor(offset: number, length: number);
    addChild(scope: Scope): void;
    setParent(scope: Scope): void;
    findScope(offset: number, length?: number): Scope;
    private findInScope(offset, length?);
    addSymbol(symbol: Symbol): void;
    getSymbol(name: string, type: nodes.ReferenceType): Symbol;
    getSymbols(): Symbol[];
}
export declare class GlobalScope extends Scope {
    constructor();
}
export declare class Symbol {
    name: string;
    value: string;
    type: nodes.ReferenceType;
    node: nodes.Node;
    constructor(name: string, value: string, node: nodes.Node, type: nodes.ReferenceType);
}
export declare class ScopeBuilder implements nodes.IVisitor {
    scope: Scope;
    constructor(scope: Scope);
    private addSymbol(node, name, value, type);
    private addScope(node);
    private addSymbolToChildScope(scopeNode, node, name, value, type);
    visitNode(node: nodes.Node): boolean;
    visitRuleSet(node: nodes.RuleSet): boolean;
    visitVariableDeclarationNode(node: nodes.VariableDeclaration): boolean;
    visitFunctionParameterNode(node: nodes.FunctionParameter): boolean;
    visitCustomPropertyDeclarationNode(node: nodes.CustomPropertyDeclaration): boolean;
    private addCSSVariable(node, name, value, type);
    private getGlobalScope(node, name, type);
}
export declare class Symbols {
    private global;
    constructor(node: nodes.Node);
    findSymbolsAtOffset(offset: number, referenceType: nodes.ReferenceType): Symbol[];
    private internalFindSymbol(node, referenceTypes);
    private evaluateReferenceTypes(node);
    findSymbolFromNode(node: nodes.Node): Symbol;
    matchesSymbol(node: nodes.Node, symbol: Symbol): boolean;
    findSymbol(name: string, type: nodes.ReferenceType, offset: number): Symbol;
}
