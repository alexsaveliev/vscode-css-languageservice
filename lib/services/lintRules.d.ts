import * as nodes from '../parser/cssNodes';
export declare class Rule implements nodes.IRule {
    id: string;
    message: string;
    defaultValue: string;
    constructor(id: string, message: string, defaultValue: string);
}
export declare let Rules: {
    AllVendorPrefixes: Rule;
    IncludeStandardPropertyWhenUsingVendorPrefix: Rule;
    DuplicateDeclarations: Rule;
    EmptyRuleSet: Rule;
    ImportStatemement: Rule;
    NoWidthOrHeightWhenPaddingOrBorder: Rule;
    UniversalSelector: Rule;
    ZeroWithUnit: Rule;
    RequiredPropertiesForFontFace: Rule;
    HexColorLength: Rule;
    ArgsInColorFunction: Rule;
    UnknownProperty: Rule;
    IEStarHack: Rule;
    UnknownVendorSpecificProperty: Rule;
    PropertyIgnoredDueToDisplay: Rule;
    AvoidImportant: Rule;
    AvoidFloat: Rule;
    AvoidIdSelector: Rule;
};
export interface ILintConfigurationSettings {
    [ruleId: string]: nodes.Level;
}
export declare function sanitize(conf: any): ILintConfigurationSettings;
export declare function toLevel(level: string): nodes.Level;
