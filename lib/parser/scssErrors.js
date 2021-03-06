(function (dependencies, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(dependencies, factory);
    }
})(["require", "exports", "vscode-nls"], function (require, exports) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    var nls = require("vscode-nls");
    var localize = nls.loadMessageBundle();
    var SCSSIssueType = (function () {
        function SCSSIssueType(id, message) {
            this.id = id;
            this.message = message;
        }
        return SCSSIssueType;
    }());
    exports.SCSSIssueType = SCSSIssueType;
    exports.SCSSParseError = {
        FromExpected: new SCSSIssueType('scss-fromexpected', localize('expected.from', "'from' expected")),
        ThroughOrToExpected: new SCSSIssueType('scss-throughexpected', localize('expected.through', "'through' or 'to' expected")),
        InExpected: new SCSSIssueType('scss-fromexpected', localize('expected.in', "'in' expected")),
    };
});
//# sourceMappingURL=scssErrors.js.map