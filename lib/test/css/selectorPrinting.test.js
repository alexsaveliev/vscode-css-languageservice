(function (dependencies, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(dependencies, factory);
    }
})(["require", "exports", "assert", "../../parser/cssParser", "../../parser/cssNodes", "../../services/selectorPrinting", "vscode-languageserver-types"], function (require, exports) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    var assert = require("assert");
    var cssParser_1 = require("../../parser/cssParser");
    var nodes = require("../../parser/cssNodes");
    var selectorPrinter = require("../../services/selectorPrinting");
    var vscode_languageserver_types_1 = require("vscode-languageserver-types");
    function elementToString(element) {
        var label = element.findAttribute('name') || '';
        var attributes = element.attributes && element.attributes.filter(function (a) { return a.name !== 'name'; });
        if (attributes && attributes.length > 0) {
            label = label + '[';
            var needsSeparator = false;
            for (var _i = 0, attributes_1 = attributes; _i < attributes_1.length; _i++) {
                var attribute = attributes_1[_i];
                if (attribute.name !== 'name') {
                    if (needsSeparator) {
                        label = label + '|';
                    }
                    needsSeparator = true;
                    label = label + attribute.name + '=' + attribute.value;
                }
            }
            label = label + ']';
        }
        if (element.children) {
            label = label + '{';
            for (var index = 0; index < element.children.length; index++) {
                if (index > 0) {
                    label = label + '|';
                }
                label = label + elementToString(element.children[index]);
            }
            label = label + '}';
        }
        return label;
    }
    function parseSelector(p, input, selectorName, expected) {
        var document = vscode_languageserver_types_1.TextDocument.create('test://test/test.css', 'css', 0, input);
        var styleSheet = p.parseStylesheet(document);
        var node = nodes.getNodeAtOffset(styleSheet, input.indexOf(selectorName));
        var selector = node.findParent(nodes.NodeType.Selector);
        var element = selectorPrinter.selectorToElement(selector);
        assert.equal(elementToString(element), expected);
    }
    exports.parseSelector = parseSelector;
    function assertElement(p, input, expected) {
        var node = p.internalParse(input, p._parseSimpleSelector);
        var actual = selectorPrinter.toElement(node);
        assert.deepEqual(actual.attributes, expected);
    }
    exports.assertElement = assertElement;
    suite('CSS - Selector Printing', function () {
        test('class/hash/elementname/attr', function () {
            var p = new cssParser_1.Parser();
            assertElement(p, 'element', [{ name: 'name', value: 'element' }]);
            assertElement(p, '.div', [{ name: 'class', value: 'div' }]);
            assertElement(p, '#first', [{ name: 'id', value: 'first' }]);
            assertElement(p, 'element.on', [{ name: 'name', value: 'element' }, { name: 'class', value: 'on' }]);
            assertElement(p, 'element.on#first', [{ name: 'name', value: 'element' }, { name: 'class', value: 'on' }, { name: 'id', value: 'first' }]);
            assertElement(p, '.on#first', [{ name: 'class', value: 'on' }, { name: 'id', value: 'first' }]);
            assertElement(p, '[lang=\'de\']', [{ name: 'lang', value: 'de' }]);
            assertElement(p, '[enabled]', [{ name: 'enabled', value: void 0 }]);
        });
        test('simple selector', function () {
            var p = new cssParser_1.Parser();
            parseSelector(p, 'element { }', 'element', '{element}');
            parseSelector(p, 'element.div { }', 'element', '{element[class=div]}');
            parseSelector(p, 'element.on#first { }', 'element', '{element[class=on|id=first]}');
            parseSelector(p, 'element:hover { }', 'element', '{element[:hover=]}');
            parseSelector(p, 'element[lang=\'de\'] { }', 'element', '{element[lang=de]}');
            parseSelector(p, 'element[enabled] { }', 'element', '{element[enabled=undefined]}');
            parseSelector(p, 'element[foo~="warning"] { }', 'element', '{element[foo= … warning … ]}');
            parseSelector(p, 'element[lang|="en"] { }', 'element', '{element[lang=en-…]}');
            parseSelector(p, '* { }', '*', '{element}');
        });
        test('selector', function () {
            var p = new cssParser_1.Parser();
            parseSelector(p, 'e1 e2 { }', 'e1', '{e1{…{e2}}}');
            parseSelector(p, 'e1 .div { }', 'e1', '{e1{…{[class=div]}}}');
            parseSelector(p, 'e1 > e2 { }', 'e2', '{e1{e2}}');
            parseSelector(p, 'e1, e2 { }', 'e1', '{e1}');
            parseSelector(p, 'e1 + e2 { }', 'e2', '{e1|e2}');
            parseSelector(p, 'e1 ~ e2 { }', 'e2', '{e1|e2|⋮|e2}');
        });
    });
});
//# sourceMappingURL=selectorPrinting.test.js.map