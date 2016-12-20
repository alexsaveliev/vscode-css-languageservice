(function (dependencies, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(dependencies, factory);
    }
})(["require", "exports", "assert", "../../cssLanguageService", "vscode-languageserver-types", "../textEditSupport"], function (require, exports) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    var assert = require("assert");
    var cssLanguageService = require("../../cssLanguageService");
    var vscode_languageserver_types_1 = require("vscode-languageserver-types");
    var textEditSupport_1 = require("../textEditSupport");
    function asPromise(result) {
        return Promise.resolve(result);
    }
    exports.assertCompletion = function (completions, expected, document, offset) {
        var matches = completions.items.filter(function (completion) {
            return completion.label === expected.label;
        });
        assert.equal(matches.length, 1, expected.label + " should only existing once: Actual: " + completions.items.map(function (c) { return c.label; }).join(', '));
        var match = matches[0];
        if (expected.detail) {
            assert.equal(match.detail, expected.detail);
        }
        if (expected.documentation) {
            assert.equal(match.documentation, expected.documentation);
        }
        if (expected.kind) {
            assert.equal(match.kind, expected.kind);
        }
        if (expected.resultText) {
            var insertText = match.label;
            if (vscode_languageserver_types_1.SnippetString.is(match.insertText)) {
                insertText = match.insertText.value;
            }
            else if (match.insertText) {
                insertText = match.insertText;
            }
            assert.equal(textEditSupport_1.applyEdits(document, [vscode_languageserver_types_1.TextEdit.replace(match.range, insertText)]), expected.resultText);
        }
    };
    suite('CSS - Completion', function () {
        var testCompletionFor = function (value, expected) {
            var offset = value.indexOf('|');
            value = value.substr(0, offset) + value.substr(offset + 1);
            var ls = cssLanguageService.getCSSLanguageService();
            var document = vscode_languageserver_types_1.TextDocument.create('test://test/test.css', 'css', 0, value);
            var position = vscode_languageserver_types_1.Position.create(0, offset);
            var jsonDoc = ls.parseStylesheet(document);
            return asPromise(ls.doComplete(document, position, jsonDoc)).then(function (list) {
                if (expected.count) {
                    assert.equal(list.items, expected.count);
                }
                if (expected.items) {
                    for (var _i = 0, _a = expected.items; _i < _a.length; _i++) {
                        var item = _a[_i];
                        exports.assertCompletion(list, item, document, offset);
                    }
                }
            });
        };
        test('sylesheet', function (testDone) {
            Promise.all([
                testCompletionFor('| ', {
                    items: [
                        { label: '@import', resultText: '@import ' },
                        { label: '@keyframes', resultText: '@keyframes ' },
                        { label: 'div', resultText: 'div ' }
                    ]
                }),
                testCompletionFor('| body {', {
                    items: [
                        { label: '@import', resultText: '@import body {' },
                        { label: '@keyframes', resultText: '@keyframes body {' },
                        { label: 'html', resultText: 'html body {' }
                    ]
                }),
                testCompletionFor('h| {', {
                    items: [
                        { label: 'html', resultText: 'html {' }
                    ]
                }),
                testCompletionFor('@|import url("something.css");', {
                    count: 0
                })
            ]).then(function () { return testDone(); }, function (error) { return testDone(error); });
        });
        test('selectors', function (testDone) {
            Promise.all([
                testCompletionFor('a:h| ', {
                    items: [
                        { label: ':hover', resultText: 'a:hover ' },
                        { label: '::after', resultText: 'a::after ' }
                    ]
                }),
                testCompletionFor('a::h| ', {
                    items: [
                        { label: ':hover', resultText: 'a:hover ' },
                        { label: '::after', resultText: 'a::after ' }
                    ]
                }),
                testCompletionFor('a::| ', {
                    items: [
                        { label: ':hover', resultText: 'a:hover ' },
                        { label: '::after', resultText: 'a::after ' }
                    ]
                }),
                testCompletionFor('a:| ', {
                    items: [
                        { label: ':hover', resultText: 'a:hover ' },
                        { label: '::after', resultText: 'a::after ' }
                    ]
                }),
                testCompletionFor('a:|hover ', {
                    items: [
                        { label: ':hover', resultText: 'a:hover ' },
                        { label: '::after', resultText: 'a::after ' }
                    ]
                }),
                testCompletionFor('a#| ', {
                    items: [
                        { label: ':hover', resultText: 'a:hover ' },
                        { label: '::after', resultText: 'a::after ' }
                    ]
                }),
                testCompletionFor('a.| ', {
                    items: [
                        { label: ':hover', resultText: 'a:hover ' },
                        { label: '::after', resultText: 'a::after ' }
                    ]
                }),
                testCompletionFor('.a:| ', {
                    items: [
                        { label: ':hover', resultText: '.a:hover ' },
                        { label: '::after', resultText: '.a::after ' }
                    ]
                })
            ]).then(function () { return testDone(); }, function (error) { return testDone(error); });
        });
        test('properties', function (testDone) {
            Promise.all([
                testCompletionFor('body {|', {
                    items: [
                        { label: 'display', resultText: 'body {display: ' },
                        { label: 'background', resultText: 'body {background: ' }
                    ]
                }),
                testCompletionFor('body { ver|', {
                    items: [
                        { label: 'vertical-align', resultText: 'body { vertical-align: ' }
                    ]
                }),
                testCompletionFor('body { vertical-ali|gn', {
                    items: [
                        { label: 'vertical-align', resultText: 'body { vertical-align: ' }
                    ]
                }),
                testCompletionFor('body { vertical-align|', {
                    items: [
                        { label: 'vertical-align', resultText: 'body { vertical-align: ' }
                    ]
                }),
                testCompletionFor('body { vertical-align|: bottom;}', {
                    items: [
                        { label: 'vertical-align', resultText: 'body { vertical-align: bottom;}' }
                    ]
                }),
                testCompletionFor('body { trans| ', {
                    items: [
                        { label: 'transition', resultText: 'body { transition:  ' }
                    ]
                })
            ]).then(function () { return testDone(); }, function (error) { return testDone(error); });
        });
        test('values', function (testDone) {
            Promise.all([
                testCompletionFor('body { vertical-align:| bottom;}', {
                    items: [
                        { label: 'bottom', resultText: 'body { vertical-align:bottom bottom;}' },
                        { label: '0cm', resultText: 'body { vertical-align:0cm bottom;}' }
                    ]
                }),
                testCompletionFor('body { vertical-align: |bottom;}', {
                    items: [
                        { label: 'bottom', resultText: 'body { vertical-align: bottom;}' },
                        { label: '0cm', resultText: 'body { vertical-align: 0cm;}' }
                    ]
                }),
                testCompletionFor('body { vertical-align: bott|', {
                    items: [
                        { label: 'bottom', resultText: 'body { vertical-align: bottom' }
                    ]
                }),
                testCompletionFor('body { vertical-align: bott|om }', {
                    items: [
                        { label: 'bottom', resultText: 'body { vertical-align: bottom }' }
                    ]
                }),
                testCompletionFor('body { vertical-align: bottom| }', {
                    items: [
                        { label: 'bottom', resultText: 'body { vertical-align: bottom }' }
                    ]
                }),
                testCompletionFor('body { vertical-align:bott|', {
                    items: [
                        { label: 'bottom', resultText: 'body { vertical-align:bottom' }
                    ]
                }),
                testCompletionFor('body { vertical-align: bottom|; }', {
                    items: [
                        { label: 'bottom', resultText: 'body { vertical-align: bottom; }' }
                    ]
                }),
                testCompletionFor('body { vertical-align: bottom;| }', {
                    count: 0
                }),
                testCompletionFor('body { vertical-align: bottom; |}', {
                    items: [
                        { label: 'display', resultText: 'body { vertical-align: bottom; display: }' }
                    ]
                })
            ]).then(function () { return testDone(); }, function (error) { return testDone(error); });
        });
        test('units', function (testDone) {
            Promise.all([
                testCompletionFor('body { vertical-align: 9| }', {
                    items: [
                        { label: '9cm', resultText: 'body { vertical-align: 9cm }' }
                    ]
                }),
                testCompletionFor('body { vertical-align: 1.2| }', {
                    items: [
                        { label: '1.2em', resultText: 'body { vertical-align: 1.2em }' }
                    ]
                }),
                testCompletionFor('body { vertical-align: 1|0 }', {
                    items: [
                        { label: '1cm', resultText: 'body { vertical-align: 1cm }' }
                    ]
                }),
                testCompletionFor('body { vertical-align: 10c| }', {
                    items: [
                        { label: '10cm', resultText: 'body { vertical-align: 10cm }' }
                    ]
                })
            ]).then(function () { return testDone(); }, function (error) { return testDone(error); });
        });
        test('unknown', function (testDone) {
            Promise.all([
                testCompletionFor('body { notexisting: |;}', {
                    count: 0
                }),
                testCompletionFor('.foo { unknown: foo; } .bar { unknown:| }', {
                    items: [
                        { label: 'foo', kind: 12 /* Value */, resultText: '.foo { unknown: foo; } .bar { unknown:foo }' }
                    ]
                })
            ]).then(function () { return testDone(); }, function (error) { return testDone(error); });
        });
        test('colors', function (testDone) {
            Promise.all([
                testCompletionFor('body { border-right: |', {
                    items: [
                        { label: 'cyan', resultText: 'body { border-right: cyan' },
                        { label: 'dotted', resultText: 'body { border-right: dotted' },
                        { label: '0em', resultText: 'body { border-right: 0em' }
                    ]
                }),
                testCompletionFor('body { border-right: cyan| dotted 2em ', {
                    items: [
                        { label: 'cyan', resultText: 'body { border-right: cyan dotted 2em ' },
                        { label: 'darkcyan', resultText: 'body { border-right: darkcyan dotted 2em ' }
                    ]
                }),
                testCompletionFor('body { border-right: dotted 2em |', {
                    items: [
                        { label: 'cyan', resultText: 'body { border-right: dotted 2em cyan' }
                    ]
                }),
                testCompletionFor('.foo { background-color: #123456; } .bar { background-color:| }', {
                    items: [
                        { label: '#123456', kind: 16 /* Color */, resultText: '.foo { background-color: #123456; } .bar { background-color:#123456 }' }
                    ]
                }),
                testCompletionFor('.foo { background-color: r|', {
                    items: [
                        { label: 'rgb', kind: 3 /* Function */, resultText: '.foo { background-color: rgb(${1:red}, ${2:green}, ${3:blue})' },
                        { label: 'rgba', kind: 3 /* Function */, resultText: '.foo { background-color: rgba(${1:red}, ${2:green}, ${3:blue}, ${4:alpha})' },
                        { label: 'red', kind: 16 /* Color */, resultText: '.foo { background-color: red' }
                    ]
                })
            ]).then(function () { return testDone(); }, function (error) { return testDone(error); });
        });
        test('variables', function (testDone) {
            Promise.all([
                testCompletionFor(':root { --myvar: red; } body { color: |', {
                    items: [
                        { label: '--myvar', documentation: 'red', resultText: ':root { --myvar: red; } body { color: var(--myvar)' },
                    ]
                }),
                testCompletionFor('body { --myvar: 0px; border-right: var| ', {
                    items: [
                        { label: '--myvar', documentation: '0px', resultText: 'body { --myvar: 0px; border-right: var(--myvar) ' },
                    ]
                }),
                testCompletionFor('body { --myvar: 0px; border-right: var(| ', {
                    items: [
                        { label: '--myvar', documentation: '0px', resultText: 'body { --myvar: 0px; border-right: var(--myvar ' },
                    ]
                }),
                testCompletionFor('a { color: | } :root { --bg-color: red; } ', {
                    items: [
                        { label: '--bg-color', documentation: 'red', resultText: 'a { color: var(--bg-color) } :root { --bg-color: red; } ' },
                    ]
                })
            ]).then(function () { return testDone(); }, function (error) { return testDone(error); });
        });
    });
});
//# sourceMappingURL=completion.test.js.map