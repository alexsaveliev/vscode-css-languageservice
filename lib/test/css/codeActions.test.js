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
    suite('CSS - Code Actions', function () {
        var testCodeActions = function (value, tokenBefore) {
            var ls = cssLanguageService.getCSSLanguageService();
            var document = vscode_languageserver_types_1.TextDocument.create('test://test/test.css', 'css', 0, value);
            var styleSheet = ls.parseStylesheet(document);
            var offset = value.indexOf(tokenBefore);
            var startPosition = document.positionAt(offset);
            var endPosition = document.positionAt(offset + tokenBefore.length);
            var range = vscode_languageserver_types_1.Range.create(startPosition, endPosition);
            ls.configure({ validate: true });
            return asPromise(ls.doValidation(document, styleSheet)).then(function (diagnostics) {
                return asPromise(ls.doCodeActions(document, range, { diagnostics: diagnostics }, styleSheet)).then(function (commands) {
                    return { commands: commands, document: document };
                });
            });
        };
        var assertCodeAction = function (commands, document, expected) {
            var labels = commands.map(function (command) { return command.title; });
            for (var _i = 0, expected_1 = expected; _i < expected_1.length; _i++) {
                var exp = expected_1[_i];
                var index = labels.indexOf(exp.title);
                assert.ok(index !== -1, 'Quick fix not found: ' + exp.title + ' , found:' + labels.join(','));
                var command = commands[index];
                assert.equal(textEditSupport_1.applyEdits(document, command.arguments[2]), exp.content);
                assert.equal(command.arguments[0], document.uri);
                assert.equal(command.arguments[1], document.version);
            }
        };
        test('Unknown Properties', function (testDone) {
            Promise.all([
                testCodeActions('body { /*here*/displai: inline }', '/*here*/').then(function (result) {
                    assertCodeAction(result.commands, result.document, [
                        { title: 'Rename to \'display\'', content: 'body { /*here*/display: inline }' }
                    ]);
                }),
                testCodeActions('body { /*here*/background-colar: red }', '/*here*/').then(function (result) {
                    assertCodeAction(result.commands, result.document, [
                        { title: 'Rename to \'background-color\'', content: 'body { /*here*/background-color: red }' },
                        { title: 'Rename to \'background-clip\'', content: 'body { /*here*/background-clip: red }' },
                        { title: 'Rename to \'background-image\'', content: 'body { /*here*/background-image: red }' }
                    ]);
                })
            ]).then(function () { return testDone(); }, function (error) { return testDone(error); });
        });
    });
});
//# sourceMappingURL=codeActions.test.js.map