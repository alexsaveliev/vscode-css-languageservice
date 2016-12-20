(function (dependencies, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(dependencies, factory);
    }
})(["require", "exports", "../../parser/scssParser", "../css/languageFacts.test"], function (require, exports) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    var scssParser_1 = require("../../parser/scssParser");
    var languageFacts_test_1 = require("../css/languageFacts.test");
    suite('SCSS - Language facts', function () {
        test('is color', function () {
            var parser = new scssParser_1.SCSSParser();
            languageFacts_test_1.assertColor(parser, '#main { color: foo(red) }', 'red', true);
            languageFacts_test_1.assertColor(parser, '#main { color: red() }', 'red', false);
            languageFacts_test_1.assertColor(parser, '#main { red { nested: 1px } }', 'red', false);
            languageFacts_test_1.assertColor(parser, '#main { @include red; }', 'red', false);
            languageFacts_test_1.assertColor(parser, '#main { @include foo($f: red); }', 'red', true);
            languageFacts_test_1.assertColor(parser, '@function red($p) { @return 1px; }', 'red', false);
            languageFacts_test_1.assertColor(parser, '@function foo($p) { @return red; }', 'red', true);
            languageFacts_test_1.assertColor(parser, '@function foo($r: red) { @return $r; }', 'red', true);
        });
    });
});
//# sourceMappingURL=languageFacts.test.js.map