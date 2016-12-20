(function (dependencies, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(dependencies, factory);
    }
})(["require", "exports", "assert", "../../parser/cssNodes", "../../parser/cssParser", "../../services/lint", "../../services/lintRules", "vscode-languageserver-types"], function (require, exports) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    var assert = require("assert");
    var nodes = require("../../parser/cssNodes");
    var cssParser_1 = require("../../parser/cssParser");
    var lint_1 = require("../../services/lint");
    var lintRules_1 = require("../../services/lintRules");
    var vscode_languageserver_types_1 = require("vscode-languageserver-types");
    function assertEntries(node, rules) {
        var visitor = new lint_1.LintVisitor();
        node.accept(visitor);
        var entries = visitor.getEntries(nodes.Level.Error | nodes.Level.Warning | nodes.Level.Ignore);
        assert.equal(entries.length, rules.length);
        for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
            var entry = entries_1[_i];
            var idx = rules.indexOf(entry.getRule());
            rules.splice(idx, 1);
        }
        assert.equal(rules.length, 0);
    }
    exports.assertEntries = assertEntries;
    function assertStyleSheet(input) {
        var rules = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rules[_i - 1] = arguments[_i];
        }
        var p = new cssParser_1.Parser();
        var document = vscode_languageserver_types_1.TextDocument.create('test://test/test.css', 'css', 0, input);
        var node = p.parseStylesheet(document);
        assertEntries(node, rules);
    }
    function assertRuleSet(input) {
        var rules = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rules[_i - 1] = arguments[_i];
        }
        var p = new cssParser_1.Parser();
        var node = p.internalParse(input, p._parseRuleset);
        assertEntries(node, rules);
    }
    function assertFontFace(input) {
        var rules = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rules[_i - 1] = arguments[_i];
        }
        var p = new cssParser_1.Parser();
        var node = p.internalParse(input, p._parseFontFace);
        assertEntries(node, rules);
    }
    suite('CSS - Lint', function () {
        test('universal selector, empty rule', function () {
            assertRuleSet('* { color: perty }', lintRules_1.Rules.UniversalSelector);
            assertRuleSet('*, div { color: perty }', lintRules_1.Rules.UniversalSelector);
            assertRuleSet('div, * { color: perty }', lintRules_1.Rules.UniversalSelector);
            assertRuleSet('div > * { color: perty }', lintRules_1.Rules.UniversalSelector);
            assertRuleSet('div + * { color: perty }', lintRules_1.Rules.UniversalSelector);
        });
        test('empty ruleset', function () {
            assertRuleSet('selector {}', lintRules_1.Rules.EmptyRuleSet);
        });
        test('properies ignored due to inline ', function () {
            assertRuleSet('selector { display: inline; height: 100px; }', lintRules_1.Rules.PropertyIgnoredDueToDisplay);
            assertRuleSet('selector { display: inline; width: 100px; }', lintRules_1.Rules.PropertyIgnoredDueToDisplay);
            assertRuleSet('selector { display: inline; margin-top: 1em; }', lintRules_1.Rules.PropertyIgnoredDueToDisplay);
            assertRuleSet('selector { display: inline; margin-bottom: 1em; }', lintRules_1.Rules.PropertyIgnoredDueToDisplay);
            assertRuleSet('selector { display: inline; float: right; }', lintRules_1.Rules.PropertyIgnoredDueToDisplay, lintRules_1.Rules.AvoidFloat);
            assertRuleSet('selector { display: inline-block; float: right; }', lintRules_1.Rules.PropertyIgnoredDueToDisplay, lintRules_1.Rules.AvoidFloat);
            assertRuleSet('selector { display: block; vertical-align: center; }', lintRules_1.Rules.PropertyIgnoredDueToDisplay);
        });
        test('avoid !important', function () {
            assertRuleSet('selector { display: inline !important; }', lintRules_1.Rules.AvoidImportant);
        });
        test('avoid float', function () {
            assertRuleSet('selector { float: right; }', lintRules_1.Rules.AvoidFloat);
        });
        test('avoid id selectors', function () {
            assertRuleSet('#selector {  display: inline; }', lintRules_1.Rules.AvoidIdSelector);
        });
        test('zero with unit', function () {
            //	assertRuleSet('selector { width: 0px }', lint.Rules.ZeroWithUnit);
            assertRuleSet('selector { width: 0% }');
        });
        test('duplicate declarations', function () {
            assertRuleSet('selector { color: perty; color: perty }', lintRules_1.Rules.DuplicateDeclarations, lintRules_1.Rules.DuplicateDeclarations);
            assertRuleSet('selector { color: -o-perty; color: perty }');
        });
        test('unknown properties', function () {
            assertRuleSet('selector { -ms-property: "rest is missing" }', lintRules_1.Rules.UnknownVendorSpecificProperty);
            assertRuleSet('selector { -moz-box-shadow: "rest is missing" }', lintRules_1.Rules.UnknownVendorSpecificProperty, lintRules_1.Rules.IncludeStandardPropertyWhenUsingVendorPrefix);
            assertRuleSet('selector { box-shadow: none }'); // no error
            assertRuleSet('selector { box-property: "rest is missing" }', lintRules_1.Rules.UnknownProperty);
        });
        test('IE hacks', function () {
            assertRuleSet('selector { display: inline-block; *display: inline; }', lintRules_1.Rules.IEStarHack);
            assertRuleSet('selector { background: #00f; /* all browsers including Mac IE */ *background: #f00; /* IE 7 and below */ _background: #f60; /* IE 6 and below */  }', lintRules_1.Rules.IEStarHack, lintRules_1.Rules.IEStarHack);
        });
        test('vendor specific prefixes', function () {
            assertRuleSet('selector { -moz-animation: none }', lintRules_1.Rules.AllVendorPrefixes, lintRules_1.Rules.IncludeStandardPropertyWhenUsingVendorPrefix);
            assertRuleSet('selector { -moz-transform: none; transform: none }', lintRules_1.Rules.AllVendorPrefixes);
            assertRuleSet('selector { transform: none; }');
            assertRuleSet('selector { -moz-transform: none; transform: none; -o-transform: none; -webkit-transform: none; -ms-transform: none; }');
            assertRuleSet('selector { --transform: none; }');
        });
        test('font-face required properties', function () {
            assertFontFace('@font-face {  }', lintRules_1.Rules.RequiredPropertiesForFontFace);
            assertFontFace('@font-face { src: url(test.tff) }', lintRules_1.Rules.RequiredPropertiesForFontFace);
            assertFontFace('@font-face { font-family: \'name\' }', lintRules_1.Rules.RequiredPropertiesForFontFace);
            assertFontFace('@font-face { src: url(test.tff); font-family: \'name\' }'); // no error
        });
        test('keyframes', function () {
            assertStyleSheet('@keyframes foo { }');
            assertStyleSheet('@keyframes foo { } @-moz-keyframes foo { }', lintRules_1.Rules.AllVendorPrefixes);
            assertStyleSheet('@-moz-keyframes foo { }', lintRules_1.Rules.AllVendorPrefixes, lintRules_1.Rules.IncludeStandardPropertyWhenUsingVendorPrefix);
        });
    });
});
//# sourceMappingURL=lint.test.js.map