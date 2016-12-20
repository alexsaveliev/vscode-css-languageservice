(function (dependencies, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(dependencies, factory);
    }
})(["require", "exports", "../../services/lintRules", "../css/lint.test", "../../parser/scssParser"], function (require, exports) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    var lintRules_1 = require("../../services/lintRules");
    var lint_test_1 = require("../css/lint.test");
    var scssParser_1 = require("../../parser/scssParser");
    function assertFontFace(input) {
        var rules = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rules[_i - 1] = arguments[_i];
        }
        var p = new scssParser_1.SCSSParser();
        var node = p.internalParse(input, p._parseFontFace);
        lint_test_1.assertEntries(node, rules);
    }
    function assertRuleSet(input) {
        var rules = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rules[_i - 1] = arguments[_i];
        }
        var p = new scssParser_1.SCSSParser();
        var node = p.internalParse(input, p._parseRuleset);
        lint_test_1.assertEntries(node, rules);
    }
    suite('SCSS - Lint', function () {
        test('empty ruleset', function () {
            assertRuleSet('selector { color: red; nested {} }', lintRules_1.Rules.EmptyRuleSet);
        });
        test('font-face required properties', function () {
            assertFontFace('@font-face {  }', lintRules_1.Rules.RequiredPropertiesForFontFace);
            assertFontFace('@font-face { src: url(test.tff) }', lintRules_1.Rules.RequiredPropertiesForFontFace);
            assertFontFace('@font-face { font-family: \'name\' }', lintRules_1.Rules.RequiredPropertiesForFontFace);
            assertFontFace('@font-face { font-#{family}: foo }'); // no error, ignore all unknown properties
            assertFontFace('@font-face { font: {family: foo } }'); // no error, ignore all nested properties
            assertFontFace('@font-face { @if true { } }'); // no error, ignore all nested properties
        });
        test('unknown properties', function () {
            assertRuleSet('selector { -ms-property: "rest is missing" }', lintRules_1.Rules.UnknownProperty);
            assertRuleSet('selector { -moz-box-shadow: "rest is missing" }', lintRules_1.Rules.UnknownProperty, lintRules_1.Rules.IncludeStandardPropertyWhenUsingVendorPrefix);
            assertRuleSet('selector { box-shadow: none }'); // no error
            assertRuleSet('selector { -moz-#{box}-shadow: none }'); // no error if theres an interpolation
            assertRuleSet('selector { outer: { nested : blue }'); // no error for nested
        });
        test('vendor specific prefixes', function () {
            assertRuleSet('selector { -moz-animation: none }', lintRules_1.Rules.AllVendorPrefixes, lintRules_1.Rules.IncludeStandardPropertyWhenUsingVendorPrefix);
            assertRuleSet('selector { -moz-transform: none; transform: none }', lintRules_1.Rules.AllVendorPrefixes);
            assertRuleSet('selector { -moz-transform: none; transform: none; -o-transform: none; -webkit-transform: none; -ms-transform: none; }');
        });
    });
});
//# sourceMappingURL=lint.test.js.map