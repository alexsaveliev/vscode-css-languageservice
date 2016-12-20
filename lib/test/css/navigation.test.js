(function (dependencies, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(dependencies, factory);
    }
})(["require", "exports", "assert", "../../parser/cssSymbolScope", "../../parser/cssNodes", "../../parser/cssParser", "../../services/cssNavigation", "vscode-languageserver-types"], function (require, exports) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    var assert = require("assert");
    var cssSymbolScope_1 = require("../../parser/cssSymbolScope");
    var nodes = require("../../parser/cssNodes");
    var cssParser_1 = require("../../parser/cssParser");
    var cssNavigation_1 = require("../../services/cssNavigation");
    var vscode_languageserver_types_1 = require("vscode-languageserver-types");
    function asPromise(result) {
        return Promise.resolve(result);
    }
    function assertScopesAndSymbols(p, input, expected) {
        var global = createScope(p, input);
        assert.equal(scopeToString(global), expected);
    }
    exports.assertScopesAndSymbols = assertScopesAndSymbols;
    function assertHighlights(p, input, marker, expectedMatches, expectedWrites, elementName) {
        var document = vscode_languageserver_types_1.TextDocument.create('test://test/test.css', 'css', 0, input);
        var stylesheet = p.parseStylesheet(document);
        assertNoErrors(stylesheet);
        var index = input.indexOf(marker) + marker.length;
        var position = document.positionAt(index);
        return asPromise(new cssNavigation_1.CSSNavigation().findDocumentHighlights(document, nodes.getNodeAtOffset(stylesheet, document.offsetAt(position)), stylesheet)).then(function (highlights) {
            assert.equal(highlights.length, expectedMatches, input);
            var nWrites = 0;
            for (var _i = 0, highlights_1 = highlights; _i < highlights_1.length; _i++) {
                var highlight = highlights_1[_i];
                if (highlight.kind === 3 /* Write */) {
                    nWrites++;
                }
                var range = highlight.range;
                var start = document.offsetAt(range.start), end = document.offsetAt(range.end);
                assert.equal(document.getText().substring(start, end), elementName || marker);
            }
            assert.equal(nWrites, expectedWrites, input);
        });
    }
    exports.assertHighlights = assertHighlights;
    function assertSymbolsInScope(p, input, offset) {
        var selections = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            selections[_i - 3] = arguments[_i];
        }
        var global = createScope(p, input);
        var scope = global.findScope(offset);
        var getErrorMessage = function (name) {
            var all = 'symbol ' + name + ' not found. In scope: ';
            scope.getSymbols().forEach(function (sym) { all += (sym.name + ' '); });
            return all;
        };
        for (var i = 0; i < selections.length; i++) {
            var selection = selections[i];
            var sym = scope.getSymbol(selection.name, selection.type) || global.getSymbol(selection.name, selection.type);
            assert.ok(!!sym, getErrorMessage(selection.name));
        }
    }
    exports.assertSymbolsInScope = assertSymbolsInScope;
    function assertScopeBuilding(p, input) {
        var scopes = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            scopes[_i - 2] = arguments[_i];
        }
        var global = createScope(p, input);
        function assertChildren(scope) {
            scope.children.forEach(function (scope) {
                // check bounds
                var expected = scopes.shift();
                assert.equal(scope.offset, expected.offset);
                assert.equal(scope.length, expected.length);
                // recursive descent
                assertChildren(scope);
            });
        }
        assertChildren(global);
        assert.equal(scopes.length, 0, 'remainig scopes: ' + scopes.join());
    }
    exports.assertScopeBuilding = assertScopeBuilding;
    function scopeToString(scope) {
        var str = '';
        var symbols = scope.getSymbols();
        for (var index = 0; index < symbols.length; index++) {
            if (str.length > 0) {
                str += ',';
            }
            str += symbols[index].name;
        }
        var scopes = scope.children;
        for (var index = 0; index < scopes.length; index++) {
            if (str.length > 0) {
                str += ',';
            }
            str += ('[' + scopeToString(scopes[index]) + ']');
        }
        return str;
    }
    function assertNoErrors(node) {
        var markers = nodes.ParseErrorCollector.entries(node);
        if (markers.length > 0) {
            assert.ok(false, 'node has errors: ' + markers[0].getMessage() + ', offset: ' + markers[0].getNode().offset);
        }
    }
    function createScope(p, input) {
        var document = vscode_languageserver_types_1.TextDocument.create('test://test/test.css', 'css', 0, input);
        var styleSheet = p.parseStylesheet(document), global = new cssSymbolScope_1.GlobalScope(), builder = new cssSymbolScope_1.ScopeBuilder(global);
        assertNoErrors(styleSheet);
        styleSheet.accept(builder);
        return global;
    }
    suite('CSS - Symbols', function () {
        test('scope creation', function () {
            var global = new cssSymbolScope_1.GlobalScope(), child1 = new cssSymbolScope_1.Scope(10, 5), child2 = new cssSymbolScope_1.Scope(15, 5);
            global.addChild(child1);
            global.addChild(child2);
            assert.equal(global.children.length, 2);
            assert.ok(child1.parent === global);
            assert.ok(child2.parent === global);
            // find children
            assert.ok(global.findScope(-1) === null);
            assert.ok(global.findScope(0) === global);
            assert.ok(global.findScope(10) === child1);
            assert.ok(global.findScope(14) === child1);
            assert.ok(global.findScope(15) === child2);
            assert.ok(global.findScope(19) === child2);
            assert.ok(global.findScope(19).parent === global);
        });
        test('scope building', function () {
            var p = new cssParser_1.Parser();
            assertScopeBuilding(p, '.class {}', { offset: 7, length: 2 });
            assertScopeBuilding(p, '.class {} .class {}', { offset: 7, length: 2 }, { offset: 17, length: 2 });
        });
        test('symbols in scopes', function () {
            var p = new cssParser_1.Parser();
            assertSymbolsInScope(p, '@keyframes animation {};', 0, { name: 'animation', type: nodes.ReferenceType.Keyframe });
            assertSymbolsInScope(p, ' .class1 {} .class2 {}', 0, { name: '.class1', type: nodes.ReferenceType.Rule }, { name: '.class2', type: nodes.ReferenceType.Rule });
        });
        test('scopes and symbols', function () {
            var p = new cssParser_1.Parser();
            assertScopesAndSymbols(p, '.class {}', '.class,[]');
            assertScopesAndSymbols(p, '@keyframes animation {}; .class {}', 'animation,.class,[],[]');
            assertScopesAndSymbols(p, '@page :pseudo-class { margin:2in; }', '[]');
            assertScopesAndSymbols(p, '@media print { body { font-size: 10pt } }', '[body,[]]');
            assertScopesAndSymbols(p, '@-moz-keyframes identifier { 0% { top: 0; } 50% { top: 30px; left: 20px; }}', 'identifier,[[],[]]');
            assertScopesAndSymbols(p, '@font-face { font-family: "Bitstream Vera Serif Bold"; }', '[]');
        });
        test('mark highlights', function (testDone) {
            var p = new cssParser_1.Parser();
            Promise.all([
                assertHighlights(p, '@keyframes id {}; #main { animation: id 4s linear 0s infinite alternate; }', 'id', 2, 1),
                assertHighlights(p, '@keyframes id {}; #main { animation-name: id; foo: id;}', 'id', 2, 1)
            ]).then(function () { return testDone(); }, function (error) { return testDone(error); });
        });
        test('test variables in root scope', function () {
            var p = new cssParser_1.Parser();
            assertSymbolsInScope(p, ':root{ --var1: abc; --var2: def; }', 0, { name: '--var1', type: nodes.ReferenceType.Variable }, { name: '--var2', type: nodes.ReferenceType.Variable });
        });
        test('test variables in local scope', function () {
            var p = new cssParser_1.Parser();
            assertSymbolsInScope(p, '.a{ --var1: abc; --var2: def; }', 2, { name: '--var1', type: nodes.ReferenceType.Variable }, { name: '--var2', type: nodes.ReferenceType.Variable });
        });
        test('test variables in local scope get root variables too', function () {
            var p = new cssParser_1.Parser();
            assertSymbolsInScope(p, '.a{ --var1: abc; } :root{ --var2: abc;}', 2, { name: '--var1', type: nodes.ReferenceType.Variable }, { name: '--var2', type: nodes.ReferenceType.Variable });
        });
        test('test variables in local scope get root variables and other local variables too', function () {
            var p = new cssParser_1.Parser();
            assertSymbolsInScope(p, '.a{ --var1: abc; } .b{ --var2: abc; } :root{ --var3: abc;}', 2, { name: '--var1', type: nodes.ReferenceType.Variable }, { name: '--var2', type: nodes.ReferenceType.Variable }, { name: '--var3', type: nodes.ReferenceType.Variable });
        });
        test('mark occurrences for variable defined in root and used in a rule', function (testDone) {
            var p = new cssParser_1.Parser();
            Promise.all([
                assertHighlights(p, '.a{ background: let(--var1); } :root{ --var1: abc;}', '--var1', 2, 1)
            ]).then(function () { return testDone(); }, function (error) { return testDone(error); });
        });
        test('mark occurrences for variable defined in a rule and used in a different rule', function (testDone) {
            var p = new cssParser_1.Parser();
            Promise.all([
                assertHighlights(p, '.a{ background: let(--var1); } :b{ --var1: abc;}', '--var1', 2, 1)
            ]).then(function () { return testDone(); }, function (error) { return testDone(error); });
        });
        test('mark occurrences for property', function (testDone) {
            var p = new cssParser_1.Parser();
            Promise.all([
                assertHighlights(p, 'body { display: inline } #foo { display: inline }', 'display', 2, 0)
            ]).then(function () { return testDone(); }, function (error) { return testDone(error); });
        });
        test('mark occurrences for value', function (testDone) {
            var p = new cssParser_1.Parser();
            Promise.all([
                assertHighlights(p, 'body { display: inline } #foo { display: inline }', 'inline', 2, 0)
            ]).then(function () { return testDone(); }, function (error) { return testDone(error); });
        });
        test('mark occurrences for selector', function (testDone) {
            var p = new cssParser_1.Parser();
            Promise.all([
                assertHighlights(p, 'body { display: inline } #foo { display: inline }', 'body', 1, 1)
            ]).then(function () { return testDone(); }, function (error) { return testDone(error); });
        });
        test('mark occurrences for comment', function (testDone) {
            var p = new cssParser_1.Parser();
            Promise.all([
                assertHighlights(p, '/* comment */body { display: inline } ', 'comment', 0, 0)
            ]).then(function () { return testDone(); }, function (error) { return testDone(error); });
        });
    });
});
//# sourceMappingURL=navigation.test.js.map