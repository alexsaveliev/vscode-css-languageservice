(function (dependencies, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(dependencies, factory);
    }
})(["require", "exports", "assert", "../../services/languageFacts", "../../parser/cssParser", "../../parser/cssNodes", "vscode-languageserver-types"], function (require, exports) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    var assert = require("assert");
    var languageFacts = require("../../services/languageFacts");
    var cssParser_1 = require("../../parser/cssParser");
    var nodes = require("../../parser/cssNodes");
    var vscode_languageserver_types_1 = require("vscode-languageserver-types");
    function assertColor(parser, text, selection, isColor) {
        var document = vscode_languageserver_types_1.TextDocument.create('test://test/test.css', 'css', 0, text);
        var stylesheet = parser.parseStylesheet(document);
        assert.equal(0, nodes.ParseErrorCollector.entries(stylesheet).length, 'compile errors');
        var node = nodes.getNodeAtOffset(stylesheet, text.indexOf(selection));
        assert.equal(isColor, languageFacts.isColorValue(node));
    }
    exports.assertColor = assertColor;
    suite('CSS - Language Facts', function () {
        test('properties', function () {
            var properties = languageFacts.getProperties();
            var alignLast = properties['text-align-last'];
            assert.ok(alignLast !== null);
            assert.equal(alignLast.name, 'text-align-last');
            var b = alignLast.browsers;
            assert.equal(b['FF'], '12');
            assert.equal(b['IE'], '5');
            assert.equal(b['E'], '');
            assert.equal(b['C'], void 0);
            assert.equal(b['count'], 3);
            assert.equal(languageFacts.getBrowserLabel(alignLast.browsers), 'Edge, Firefox 12, IE 5');
            var r = alignLast.restrictions;
            assert.equal(r.length, 1);
            assert.equal(r[0], 'enum');
            var v = alignLast.values;
            assert.equal(v.length, 5);
            assert.equal(v[0].name, 'auto');
            assert.equal(v[0].browsers.all, true);
            assert.equal(v[0].browsers.count, Number.MAX_VALUE);
        });
        test('is color', function () {
            var parser = new cssParser_1.Parser();
            assertColor(parser, '#main { color: red }', 'red', true);
            assertColor(parser, '#main { color: #231 }', '#231', true);
            assertColor(parser, '#main { red: 1 }', 'red', false);
            assertColor(parser, '#red { foo: 1 }', 'red', false);
        });
    });
});
//# sourceMappingURL=languageFacts.test.js.map