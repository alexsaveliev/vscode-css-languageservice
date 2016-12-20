(function (dependencies, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(dependencies, factory);
    }
})(["require", "exports", "assert", "../../cssLanguageService", "../../services/lessCompletion", "vscode-languageserver-types", "../css/completion.test"], function (require, exports) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    var assert = require("assert");
    var cssLanguageService = require("../../cssLanguageService");
    var lessCompletion_1 = require("../../services/lessCompletion");
    var vscode_languageserver_types_1 = require("vscode-languageserver-types");
    var completion_test_1 = require("../css/completion.test");
    function asPromise(result) {
        return Promise.resolve(result);
    }
    suite('LESS - Completions', function () {
        var testCompletionFor = function (value, expected) {
            var offset = value.indexOf('|');
            value = value.substr(0, offset) + value.substr(offset + 1);
            var ls = cssLanguageService.getLESSLanguageService();
            var ls2 = new lessCompletion_1.LESSCompletion();
            var document = vscode_languageserver_types_1.TextDocument.create('test://test/test.less', 'less', 0, value);
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
                testCompletionFor('body { |', {
                    items: [
                        { label: 'display' },
                        { label: 'background' }
                    ]
                }),
                testCompletionFor('body { ver|', {
                    items: [
                        { label: 'vertical-align' }
                    ]
                }),
                testCompletionFor('body { word-break: |', {
                    items: [
                        { label: 'keep-all' }
                    ]
                }),
                testCompletionFor('body { inner { vertical-align: |}', {
                    items: [
                        { label: 'bottom' }
                    ]
                }),
                testCompletionFor('@var1: 3; body { inner { vertical-align: |}', {
                    items: [
                        { label: '@var1', documentation: '3' }
                    ]
                }),
                testCompletionFor('@var1: { content: 1; }; body { inner { vertical-align: |}', {
                    items: [
                        { label: '@var1', documentation: '{ content: 1; }' }
                    ]
                }),
                testCompletionFor('.mixin(@a: 1, @b) { content: @|}', {
                    items: [
                        { label: '@a', documentation: '1', detail: 'argument from \'.mixin\'' },
                        { label: '@b', documentation: null, detail: 'argument from \'.mixin\'' }
                    ]
                }),
                testCompletionFor('.foo { background-color: d|', {
                    items: [
                        { label: 'darken' },
                        { label: 'desaturate' }
                    ]
                })
            ]).then(function () { return testDone(); }, function (error) { return testDone(error); });
        });
    });
});
//# sourceMappingURL=scssCompletion.test.js.map