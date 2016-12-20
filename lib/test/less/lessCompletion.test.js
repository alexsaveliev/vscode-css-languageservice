(function (dependencies, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(dependencies, factory);
    }
})(["require", "exports", "assert", "../../cssLanguageService", "vscode-languageserver-types", "../css/completion.test"], function (require, exports) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    var assert = require("assert");
    var cssLanguageService = require("../../cssLanguageService");
    var vscode_languageserver_types_1 = require("vscode-languageserver-types");
    var completion_test_1 = require("../css/completion.test");
    function asPromise(result) {
        return Promise.resolve(result);
    }
    suite('SCSS - Completions', function () {
        var testCompletionFor = function (value, expected) {
            var offset = value.indexOf('|');
            value = value.substr(0, offset) + value.substr(offset + 1);
            var ls = cssLanguageService.getSCSSLanguageService();
            var document = vscode_languageserver_types_1.TextDocument.create('test://test/test.scss', 'scss', 0, value);
            var position = vscode_languageserver_types_1.Position.create(0, offset);
            var jsonDoc = ls.parseStylesheet(document);
            return asPromise(ls.doComplete(document, position, jsonDoc)).then(function (list) {
                if (expected.count) {
                    assert.equal(list.items, expected.count);
                }
                if (expected.items) {
                    for (var _i = 0, _a = expected.items; _i < _a.length; _i++) {
                        var item = _a[_i];
                        completion_test_1.assertCompletion(list, item, document, offset);
                    }
                }
            });
        };
        test('sylesheet', function (testDone) {
            Promise.all([
                testCompletionFor('$i: 0; body { width: |', {
                    items: [
                        { label: '$i', documentation: '0' }
                    ]
                }),
                testCompletionFor('@for $i from 1 through 3 { .item-#{|$i} { width: 2em * $i; } }', {
                    items: [
                        { label: '$i' }
                    ]
                }),
                testCompletionFor('.foo { background-color: d|', {
                    items: [
                        { label: 'darken' },
                        { label: 'desaturate' }
                    ]
                }),
                testCompletionFor('@function foo($x, $y) { @return $x + $y; } .foo { background-color: f|', {
                    items: [
                        { label: 'foo', resultText: '@function foo($x, $y) { @return $x + $y; } .foo { background-color: foo(${1:$x}, ${2:$y})' }
                    ]
                }),
                testCompletionFor('@mixin mixin($a: 1, $b) { content: $|}', {
                    items: [
                        { label: '$a', documentation: '1', detail: 'argument from \'mixin\'' },
                        { label: '$b', documentation: null, detail: 'argument from \'mixin\'' }
                    ]
                }),
                testCompletionFor('@mixin mixin($a: 1, $b) { content: $a + $b; } @include m|', {
                    items: [
                        { label: 'mixin', resultText: '@mixin mixin($a: 1, $b) { content: $a + $b; } @include mixin(${1:$a}, ${2:$b})' }
                    ]
                }),
                testCompletionFor('.foo { di| span { } ', {
                    items: [
                        { label: 'display' },
                        { label: 'div' }
                    ]
                }),
                testCompletionFor('.foo { .|', {
                    items: [
                        { label: '.foo' }
                    ]
                }),
                // issue #250
                testCompletionFor('.foo { display: block;|', {
                    count: 0
                }),
            ]).then(function () { return testDone(); }, function (error) { return testDone(error); });
        });
    });
});
//# sourceMappingURL=lessCompletion.test.js.map