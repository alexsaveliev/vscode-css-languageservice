import * as nodes from './cssNodes';
export declare class SCSSIssueType implements nodes.IRule {
    id: string;
    message: string;
    constructor(id: string, message: string);
}
export declare var SCSSParseError: {
    FromExpected: SCSSIssueType;
    ThroughOrToExpected: SCSSIssueType;
    InExpected: SCSSIssueType;
};
