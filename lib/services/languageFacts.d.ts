import * as nodes from '../parser/cssNodes';
export declare let colors: {
    [name: string]: string;
};
export declare let colorKeywords: {
    [name: string]: string;
};
export declare let positionKeywords: {
    [name: string]: string;
};
export declare let repeatStyleKeywords: {
    [name: string]: string;
};
export declare let lineStyleKeywords: {
    [name: string]: string;
};
export declare let lineWidthKeywords: string[];
export declare let boxKeywords: {
    [name: string]: string;
};
export declare let geometryBoxKeywords: {
    [name: string]: string;
};
export declare let cssWideKeywords: {
    [name: string]: string;
};
export declare let colorFunctions: {
    func: string;
    desc: string;
}[];
export declare let imageFunctions: {
    [name: string]: string;
};
export declare let transitionTimingFunctions: {
    [name: string]: string;
};
export declare let basicShapeFunctions: {
    [name: string]: string;
};
export declare let units: {
    [unitName: string]: string[];
};
export declare let html5Tags: string[];
export declare let svgElements: string[];
export declare function isColorConstructor(node: nodes.Function): boolean;
/**
 * Returns true if the node is a color value - either
 * defined a hex number, as rgb or rgba function, or
 * as color name.
 */
export declare function isColorValue(node: nodes.Node): boolean;
/**
 * Returns true if the given name is a known property.
 */
export declare function isKnownProperty(name: string): boolean;
export declare function isCommonValue(entry: Value): boolean;
export declare function getPageBoxDirectives(): string[];
export declare function getEntryDescription(entry: {
    description: string;
    browsers: Browsers;
}): string;
export declare function getBrowserLabel(b: Browsers): string;
export interface Browsers {
    E?: string;
    FF?: string;
    IE?: string;
    O?: string;
    C?: string;
    S?: string;
    count: number;
    all: boolean;
    onCodeComplete: boolean;
}
export interface Value {
    name: string;
    description: string;
    browsers: Browsers;
}
export interface IEntry {
    name: string;
    restrictions: string[];
    browsers: Browsers;
    syntax: string;
    ref: string;
    description: string;
    values: Value[];
}
export declare function getProperties(): {
    [name: string]: IEntry;
};
export declare function getAtDirectives(): IEntry[];
export declare function getPseudoElements(): IEntry[];
export declare function getPseudoClasses(): IEntry[];
export declare let browserNames: {
    E: string;
    FF: string;
    S: string;
    C: string;
    IE: string;
    O: string;
};
