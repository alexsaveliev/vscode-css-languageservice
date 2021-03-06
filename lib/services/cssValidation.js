(function (dependencies, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(dependencies, factory);
    }
})(["require", "exports", "../parser/cssNodes", "vscode-languageserver-types", "./lintRules", "./lint"], function (require, exports) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    var nodes = require("../parser/cssNodes");
    var vscode_languageserver_types_1 = require("vscode-languageserver-types");
    var lintRules_1 = require("./lintRules");
    var lint_1 = require("./lint");
    var CSSValidation = (function () {
        function CSSValidation() {
        }
        CSSValidation.prototype.configure = function (raw) {
            if (raw) {
                this.validationEnabled = raw.validate;
                if (raw.lint) {
                    this.lintSettings = lintRules_1.sanitize(raw.lint);
                }
                else {
                    this.lintSettings = {};
                }
            }
        };
        CSSValidation.prototype.doValidation = function (document, stylesheet) {
            if (!this.validationEnabled) {
                return [];
            }
            var entries = [];
            entries.push.apply(entries, nodes.ParseErrorCollector.entries(stylesheet));
            entries.push.apply(entries, lint_1.LintVisitor.entries(stylesheet, this.lintSettings));
            function toDiagnostic(marker) {
                var range = vscode_languageserver_types_1.Range.create(document.positionAt(marker.getOffset()), document.positionAt(marker.getOffset() + marker.getLength()));
                return {
                    code: marker.getRule().id,
                    source: document.languageId,
                    message: marker.getMessage(),
                    severity: marker.getLevel() === nodes.Level.Warning ? 2 /* Warning */ : 1 /* Error */,
                    range: range
                };
            }
            return entries.filter(function (entry) { return entry.getLevel() !== nodes.Level.Ignore; }).map(toDiagnostic);
        };
        return CSSValidation;
    }());
    exports.CSSValidation = CSSValidation;
});
//# sourceMappingURL=cssValidation.js.map