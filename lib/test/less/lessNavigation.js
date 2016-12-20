(function (dependencies, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(dependencies, factory);
    }
})(["require", "exports", "../../parser/lessParser", "../../parser/cssNodes", "../css/navigation.test"], function (require, exports) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    var lessParser_1 = require("../../parser/lessParser");
    var nodes = require("../../parser/cssNodes");
    var navigation_test_1 = require("../css/navigation.test");
    suite('LESS - Symbols', function () {
        test('scope building', function () {
            var p = new lessParser_1.LESSParser();
            navigation_test_1.assertScopeBuilding(p, '@let: blue');
            navigation_test_1.assertScopeBuilding(p, '.class { .nested {} }', { offset: 7, length: 14 }, { offset: 17, length: 2 });
        });
        test('symbols in scopes', function () {
            var p = new lessParser_1.LESSParser();
            navigation_test_1.assertSymbolsInScope(p, '@let: iable;', 0, { name: '@let', type: nodes.ReferenceType.Variable });
            navigation_test_1.assertSymbolsInScope(p, '@let: iable;', 11, { name: '@let', type: nodes.ReferenceType.Variable });
            navigation_test_1.assertSymbolsInScope(p, '@let: iable; .class { @color: blue; }', 11, { name: '@let', type: nodes.ReferenceType.Variable }, { name: '.class', type: nodes.ReferenceType.Rule });
            navigation_test_1.assertSymbolsInScope(p, '@let: iable; .class { @color: blue; }', 21, { name: '@color', type: nodes.ReferenceType.Variable });
            navigation_test_1.assertSymbolsInScope(p, '@let: iable; .class { @color: blue; }', 36, { name: '@color', type: nodes.ReferenceType.Variable });
            navigation_test_1.assertSymbolsInScope(p, '@namespace "x"; .mixin() {}', 0, { name: '.mixin', type: nodes.ReferenceType.Mixin });
            navigation_test_1.assertSymbolsInScope(p, '.mixin() { .nested() {} }', 10, { name: '.nested', type: nodes.ReferenceType.Mixin });
            navigation_test_1.assertSymbolsInScope(p, '.mixin() { .nested() {} }', 11);
            navigation_test_1.assertSymbolsInScope(p, '@keyframes animation {};', 0, { name: 'animation', type: nodes.ReferenceType.Keyframe });
        });
        test('scopes and symbols', function () {
            var p = new lessParser_1.LESSParser();
            navigation_test_1.assertScopesAndSymbols(p, '@var1: 1; @var2: 2; .foo { @var3: 3; }', '@var1,@var2,.foo,[@var3]');
            navigation_test_1.assertScopesAndSymbols(p, '.mixin1 { @var0: 1} .mixin2(@var1) { @var3: 3 }', '.mixin1,.mixin2,[@var0],[@var1,@var3]');
            navigation_test_1.assertScopesAndSymbols(p, 'a b { @var0: 1; c { d { } } }', '[@var0,c,[d,[]]]');
        });
        test('mark highlights', function (testDone) {
            var p = new lessParser_1.LESSParser();
            Promise.all([
                navigation_test_1.assertHighlights(p, '@var1: 1; @var2: /**/@var1;', '/**/', 2, 1, '@var1'),
                navigation_test_1.assertHighlights(p, '@var1: 1; p { @var2: /**/@var1; }', '/**/', 2, 1, '@var1'),
                navigation_test_1.assertHighlights(p, 'r1 { @var1: 1; p1: @var1;} r2,r3 { @var1: 1; p1: /**/@var1 + @var1;}', '/**/', 3, 1, '@var1'),
                navigation_test_1.assertHighlights(p, '.r1 { r1: 1em; } r2 { r1: 2em; /**/.r1;}', '/**/', 2, 1, '.r1'),
                navigation_test_1.assertHighlights(p, '.r1(@p1) { r1: @p1; } r2 { r1: 2em; /**/.r1(2px); }', '/**/', 2, 1, '.r1'),
                navigation_test_1.assertHighlights(p, '/**/.r1(@p1) { r1: @p1; } r2 { r1: 2em; .r1(2px); }', '/**/', 2, 1, '.r1'),
                navigation_test_1.assertHighlights(p, '@p1 : 1; .r1(@p1) { r1: /**/@p1; }', '/**/', 2, 1, '@p1'),
                navigation_test_1.assertHighlights(p, '/**/@p1 : 1; .r1(@p1) { r1: @p1; }', '/**/', 1, 1, '@p1'),
                navigation_test_1.assertHighlights(p, '@p1 : 1; .r1(/**/@p1) { r1: @p1; }', '/**/', 2, 1, '@p1'),
            ]).then(function () { return testDone(); }, function (error) { return testDone(error); });
        });
    });
});
//# sourceMappingURL=lessNavigation.js.map