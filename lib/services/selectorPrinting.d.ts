import * as nodes from '../parser/cssNodes';
import { MarkedString } from 'vscode-languageserver-types';
export declare class Element {
    parent: Element;
    children: Element[];
    attributes: {
        name: string;
        value: string;
    }[];
    findAttribute(name: string): string;
    addChild(child: Element): void;
    append(text: string): void;
    prepend(text: string): void;
    findRoot(): Element;
    removeChild(child: Element): boolean;
    addAttr(name: string, value: string): void;
    clone(cloneChildren?: boolean): Element;
    cloneWithParent(): Element;
}
export declare class RootElement extends Element {
}
export declare class LabelElement extends Element {
    constructor(label: string);
}
export declare function toElement(node: nodes.SimpleSelector, parentElement?: Element): Element;
export declare function selectorToMarkedString(node: nodes.Selector): MarkedString[];
export declare function simpleSelectorToMarkedString(node: nodes.SimpleSelector): MarkedString[];
export declare function selectorToElement(node: nodes.Selector): Element;
