import { ILintConfigurationSettings } from './lintRules';
import * as nodes from '../parser/cssNodes';
export declare class LintVisitor implements nodes.IVisitor {
    static entries(node: nodes.Node, settings: ILintConfigurationSettings): nodes.IMarker[];
    static prefixes: string[];
    private warnings;
    private configuration;
    constructor(settings?: ILintConfigurationSettings);
    private fetch(input, s);
    private fetchWithValue(input, s, v);
    private findValueInExpression(expression, v);
    private fetchWithin(input, s);
    getEntries(filter?: number): nodes.IMarker[];
    private addEntry(node, rule, details?);
    private getMissingNames(expected, actual);
    visitNode(node: nodes.Node): boolean;
    private visitStylesheet(node);
    private visitSimpleSelector(node);
    private visitImport(node);
    private visitRuleSet(node);
    private visitNumericValue(node);
    private visitFontFace(node);
    private isCSSDeclaration(node);
    private visitUnknownNode(node);
    private visitFunction(node);
}
