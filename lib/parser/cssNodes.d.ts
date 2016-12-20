export declare enum NodeType {
    Undefined = 0,
    Identifier = 1,
    Stylesheet = 2,
    Ruleset = 3,
    Selector = 4,
    SimpleSelector = 5,
    SelectorInterpolation = 6,
    SelectorCombinator = 7,
    SelectorCombinatorParent = 8,
    SelectorCombinatorSibling = 9,
    SelectorCombinatorAllSiblings = 10,
    Page = 11,
    PageBoxMarginBox = 12,
    ClassSelector = 13,
    IdentifierSelector = 14,
    ElementNameSelector = 15,
    PseudoSelector = 16,
    AttributeSelector = 17,
    Declaration = 18,
    Declarations = 19,
    Property = 20,
    Expression = 21,
    BinaryExpression = 22,
    Term = 23,
    Operator = 24,
    Value = 25,
    StringLiteral = 26,
    URILiteral = 27,
    EscapedValue = 28,
    Function = 29,
    NumericValue = 30,
    HexColorValue = 31,
    MixinDeclaration = 32,
    MixinReference = 33,
    VariableName = 34,
    VariableDeclaration = 35,
    Prio = 36,
    Interpolation = 37,
    NestedProperties = 38,
    ExtendsReference = 39,
    SelectorPlaceholder = 40,
    Debug = 41,
    If = 42,
    Else = 43,
    For = 44,
    Each = 45,
    While = 46,
    MixinContent = 47,
    Media = 48,
    Keyframe = 49,
    FontFace = 50,
    Import = 51,
    Namespace = 52,
    Invocation = 53,
    FunctionDeclaration = 54,
    ReturnStatement = 55,
    MediaQuery = 56,
    FunctionParameter = 57,
    FunctionArgument = 58,
    KeyframeSelector = 59,
    ViewPort = 60,
    Document = 61,
    AtApplyRule = 62,
    CustomPropertyDeclaration = 63,
    CustomPropertySet = 64,
}
export declare enum ReferenceType {
    Mixin = 0,
    Rule = 1,
    Variable = 2,
    Function = 3,
    Keyframe = 4,
    Unknown = 5,
}
export declare function getNodeAtOffset(node: Node, offset: number): Node;
export declare function getNodePath(node: Node, offset: number): Node[];
export declare function getParentDeclaration(node: Node): Declaration;
export interface ITextProvider {
    (offset: number, length: number): string;
}
export declare class Node {
    parent: Node;
    offset: number;
    length: number;
    readonly end: number;
    options: {
        [name: string]: any;
    };
    textProvider: ITextProvider;
    private children;
    private issues;
    private nodeType;
    constructor(offset?: number, len?: number, nodeType?: NodeType);
    type: NodeType;
    getTextProvider(): ITextProvider;
    getText(): string;
    matches(str: string): boolean;
    startsWith(str: string): boolean;
    endsWith(str: string): boolean;
    accept(visitor: IVisitorFunction): void;
    accept(visitor: IVisitor): void;
    adoptChild(node: Node, index?: number): Node;
    attachTo(parent: Node, index?: number): Node;
    collectIssues(results: any[]): void;
    addIssue(issue: IMarker): void;
    hasIssue(rule: IRule): boolean;
    isErroneous(recursive?: boolean): boolean;
    setNode(field: string, node: Node, index?: number): boolean;
    addChild(node: Node): boolean;
    private updateOffsetAndLength(node);
    hasChildren(): boolean;
    getChildren(): Node[];
    getChild(index: number): Node;
    addChildren(nodes: Node[]): void;
    findFirstChildBeforeOffset(offset: number): Node;
    findChildAtOffset(offset: number, goDeep: boolean): Node;
    encloses(candidate: Node): boolean;
    getParent(): Node;
    findParent(type: NodeType): Node;
    setData(key: string, value: any): void;
    getData(key: string): any;
}
export declare class Nodelist extends Node {
    private _nodeList;
    constructor(parent: Node, index?: number);
}
export declare class Identifier extends Node {
    referenceTypes: ReferenceType[];
    isCustomProperty: boolean;
    constructor(offset: number, length: number);
    readonly type: NodeType;
    containsInterpolation(): boolean;
}
export declare class Stylesheet extends Node {
    private name;
    private dependencyMap;
    constructor(offset: number, length: number);
    getDependencies(): {
        [src: string]: string;
    };
    remDependencies(src: string[]): void;
    addDependencies(src: string[]): void;
    readonly type: NodeType;
    setName(value: string): void;
}
export declare class Declarations extends Node {
    constructor(offset: number, length: number);
    readonly type: NodeType;
}
export declare class BodyDeclaration extends Node {
    private declarations;
    constructor(offset: number, length: number);
    getDeclarations(): Declarations;
    setDeclarations(decls: Declarations): boolean;
}
export declare class RuleSet extends BodyDeclaration {
    private selectors;
    constructor(offset: number, length: number);
    readonly type: NodeType;
    getSelectors(): Nodelist;
    isNested(): boolean;
}
export declare class Selector extends Node {
    private _selector;
    constructor(offset: number, length: number);
    readonly type: NodeType;
}
export declare class SimpleSelector extends Node {
    private _simpleSelector;
    constructor(offset: number, length: number);
    readonly type: NodeType;
}
export declare class AtApplyRule extends Node {
    private identifier;
    constructor(offset: number, length: number);
    readonly type: NodeType;
    setIdentifier(node: Identifier): boolean;
    getIdentifier(): Identifier;
    getName(): string;
}
export declare abstract class AbstractDeclaration extends Node {
    colonPosition: number;
    semicolonPosition: number;
    constructor(offset: number, length: number);
}
export declare class CustomPropertyDeclaration extends AbstractDeclaration {
    private property;
    private value;
    private propertySet;
    constructor(offset: number, length: number);
    readonly type: NodeType;
    setProperty(node: Property): boolean;
    getProperty(): Property;
    setValue(value: Expression): boolean;
    getValue(): Expression;
    setPropertySet(value: CustomPropertySet): boolean;
    getPropertySet(): CustomPropertySet;
}
export declare class CustomPropertySet extends BodyDeclaration {
    constructor(offset: number, length: number);
    readonly type: NodeType;
}
export declare class Declaration extends AbstractDeclaration {
    private property;
    private value;
    private nestedProprties;
    constructor(offset: number, length: number);
    readonly type: NodeType;
    setProperty(node: Property): boolean;
    getProperty(): Property;
    getFullPropertyName(): string;
    getNonPrefixedPropertyName(): string;
    setValue(value: Expression): boolean;
    getValue(): Expression;
    setNestedProperties(value: NestedProperties): boolean;
    getNestedProperties(): NestedProperties;
}
export declare class Property extends Node {
    private identifier;
    constructor(offset: number, length: number);
    readonly type: NodeType;
    setIdentifier(value: Identifier): boolean;
    getIdentifier(): Identifier;
    getName(): string;
    isCustomProperty(): boolean;
}
export declare class Invocation extends Node {
    private arguments;
    constructor(offset: number, length: number);
    readonly type: NodeType;
    getArguments(): Nodelist;
}
export declare class Function extends Invocation {
    private identifier;
    constructor(offset: number, length: number);
    readonly type: NodeType;
    setIdentifier(node: Identifier): boolean;
    getIdentifier(): Identifier;
    getName(): string;
}
export declare class FunctionParameter extends Node {
    private identifier;
    private defaultValue;
    constructor(offset: number, length: number);
    readonly type: NodeType;
    setIdentifier(node: Node): boolean;
    getIdentifier(): Node;
    getName(): string;
    setDefaultValue(node: Node): boolean;
    getDefaultValue(): Node;
}
export declare class FunctionArgument extends Node {
    private identifier;
    private value;
    constructor(offset: number, length: number);
    readonly type: NodeType;
    setIdentifier(node: Node): boolean;
    getIdentifier(): Node;
    getName(): string;
    setValue(node: Node): boolean;
    getValue(): Node;
}
export declare class IfStatement extends BodyDeclaration {
    expression: Expression;
    elseClause: BodyDeclaration;
    constructor(offset: number, length: number);
    readonly type: NodeType;
    setExpression(node: Expression): boolean;
    setElseClause(elseClause: BodyDeclaration): boolean;
}
export declare class ForStatement extends BodyDeclaration {
    variable: Variable;
    constructor(offset: number, length: number);
    readonly type: NodeType;
    setVariable(node: Variable): boolean;
}
export declare class EachStatement extends BodyDeclaration {
    variable: Variable;
    constructor(offset: number, length: number);
    readonly type: NodeType;
    setVariable(node: Variable): boolean;
}
export declare class WhileStatement extends BodyDeclaration {
    constructor(offset: number, length: number);
    readonly type: NodeType;
}
export declare class ElseStatement extends BodyDeclaration {
    constructor(offset: number, length: number);
    readonly type: NodeType;
}
export declare class FunctionDeclaration extends BodyDeclaration {
    private identifier;
    private parameters;
    constructor(offset: number, length: number);
    readonly type: NodeType;
    setIdentifier(node: Identifier): boolean;
    getIdentifier(): Identifier;
    getName(): string;
    getParameters(): Nodelist;
}
export declare class ViewPort extends BodyDeclaration {
    constructor(offset: number, length: number);
    readonly type: NodeType;
}
export declare class FontFace extends BodyDeclaration {
    constructor(offset: number, length: number);
    readonly type: NodeType;
}
export declare class NestedProperties extends BodyDeclaration {
    constructor(offset: number, length: number);
    readonly type: NodeType;
}
export declare class Keyframe extends BodyDeclaration {
    private keyword;
    private identifier;
    constructor(offset: number, length: number);
    readonly type: NodeType;
    setKeyword(keyword: Node): boolean;
    getKeyword(): Node;
    setIdentifier(node: Identifier): boolean;
    getIdentifier(): Identifier;
    getName(): string;
}
export declare class KeyframeSelector extends BodyDeclaration {
    constructor(offset: number, length: number);
    readonly type: NodeType;
}
export declare class Import extends Node {
    private medialist;
    private sourceList;
    constructor(offset: number, length: number);
    readonly type: NodeType;
    addSource(src: string): void;
    getSources(): string[];
    setMedialist(node: Node): boolean;
}
export declare class Namespace extends Node {
    constructor(offset: number, length: number);
    readonly type: NodeType;
}
export declare class Media extends BodyDeclaration {
    constructor(offset: number, length: number);
    readonly type: NodeType;
}
export declare class Document extends BodyDeclaration {
    constructor(offset: number, length: number);
    readonly type: NodeType;
}
export declare class Medialist extends Node {
    private mediums;
    constructor(offset: number, length: number);
    getMediums(): Nodelist;
}
export declare class MediaQuery extends Node {
    constructor(offset: number, length: number);
    readonly type: NodeType;
}
export declare class Page extends BodyDeclaration {
    constructor(offset: number, length: number);
    readonly type: NodeType;
}
export declare class PageBoxMarginBox extends BodyDeclaration {
    constructor(offset: number, length: number);
    readonly type: NodeType;
}
export declare class Expression extends Node {
    private _expression;
    constructor(offset: number, length: number);
    readonly type: NodeType;
}
export declare class BinaryExpression extends Node {
    private left;
    private right;
    private operator;
    constructor(offset: number, length: number);
    readonly type: NodeType;
    setLeft(left: Node): boolean;
    getLeft(): Node;
    setRight(right: Node): boolean;
    getRight(): Node;
    setOperator(value: Node): boolean;
    getOperator(): Node;
}
export declare class Term extends Node {
    private operator;
    private expression;
    constructor(offset: number, length: number);
    readonly type: NodeType;
    setOperator(value: Node): boolean;
    getOperator(): Node;
    setExpression(value: Node): boolean;
    getExpression(): Node;
}
export declare class Operator extends Node {
    constructor(offset: number, length: number);
    readonly type: NodeType;
}
export declare class HexColorValue extends Node {
    constructor(offset: number, length: number);
    readonly type: NodeType;
}
export declare class NumericValue extends Node {
    constructor(offset: number, length: number);
    readonly type: NodeType;
    getValue(): {
        value: string;
        unit: string;
    };
}
export declare class VariableDeclaration extends AbstractDeclaration {
    private variable;
    private value;
    constructor(offset: number, length: number);
    readonly type: NodeType;
    setVariable(node: Variable): boolean;
    getVariable(): Variable;
    getName(): string;
    setValue(node: Node): boolean;
    getValue(): Node;
}
export declare class Interpolation extends Node {
    constructor(offset: number, length: number);
    readonly type: NodeType;
}
export declare class Variable extends Node {
    constructor(offset: number, length: number);
    readonly type: NodeType;
    getName(): string;
}
export declare class ExtendsReference extends Node {
    private selector;
    constructor(offset: number, length: number);
    readonly type: NodeType;
    setSelector(node: Node): boolean;
    getSelector(): Node;
    getName(): string;
}
export declare class MixinReference extends Node {
    private namespaces;
    private identifier;
    private arguments;
    private content;
    constructor(offset: number, length: number);
    readonly type: NodeType;
    getNamespaces(): Nodelist;
    setIdentifier(node: Identifier): boolean;
    getIdentifier(): Identifier;
    getName(): string;
    getArguments(): Nodelist;
    setContent(node: BodyDeclaration): boolean;
    getContent(): BodyDeclaration;
}
export declare class MixinDeclaration extends BodyDeclaration {
    private identifier;
    private parameters;
    private guard;
    constructor(offset: number, length: number);
    readonly type: NodeType;
    setIdentifier(node: Identifier): boolean;
    getIdentifier(): Identifier;
    getName(): string;
    getParameters(): Nodelist;
    setGuard(node: LessGuard): boolean;
}
export declare class LessGuard extends Node {
    isNegated: boolean;
    private conditions;
    getConditions(): Nodelist;
}
export declare class GuardCondition extends Node {
    variable: Node;
    isEquals: boolean;
    isGreater: boolean;
    isEqualsGreater: boolean;
    isLess: boolean;
    isEqualsLess: boolean;
    setVariable(node: Node): boolean;
}
export interface IRule {
    id: string;
    message: string;
}
export declare enum Level {
    Ignore = 1,
    Warning = 2,
    Error = 4,
}
export interface IMarker {
    getNode(): Node;
    getMessage(): string;
    getOffset(): number;
    getLength(): number;
    getRule(): IRule;
    getLevel(): Level;
}
export declare class Marker implements IMarker {
    private node;
    private rule;
    private level;
    private message;
    private offset;
    private length;
    constructor(node: Node, rule: IRule, level: Level, message?: string, offset?: number, length?: number);
    getRule(): IRule;
    getLevel(): Level;
    getOffset(): number;
    getLength(): number;
    getNode(): Node;
    getMessage(): string;
}
export interface IVisitor {
    visitNode: (node: Node) => boolean;
}
export interface IVisitorFunction {
    (node: Node): boolean;
}
export declare class ParseErrorCollector implements IVisitor {
    static entries(node: Node): IMarker[];
    entries: IMarker[];
    constructor();
    visitNode(node: Node): boolean;
}
