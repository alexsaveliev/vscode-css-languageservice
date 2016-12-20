/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
(function (dependencies, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(dependencies, factory);
    }
})(["require", "exports", "../../parser/scssParser", "../../parser/cssErrors", "../../parser/scssErrors", "../css/parser.test"], function (require, exports) {
    'use strict';
    var scssParser_1 = require("../../parser/scssParser");
    var cssErrors_1 = require("../../parser/cssErrors");
    var scssErrors_1 = require("../../parser/scssErrors");
    var parser_test_1 = require("../css/parser.test");
    suite('SCSS - Parser', function () {
        test('Comments', function () {
            var parser = new scssParser_1.SCSSParser();
            parser_test_1.assertNode(' a { b:  /* comment */ c }', parser, parser._parseStylesheet.bind(parser));
            parser_test_1.assertNode(' a { b: /* comment \n * is several\n * lines long\n */ c }', parser, parser._parseStylesheet.bind(parser));
            parser_test_1.assertNode(' a { b: // single line comment\n  c }', parser, parser._parseStylesheet.bind(parser));
        });
        test('Variable', function () {
            var parser = new scssParser_1.SCSSParser();
            parser_test_1.assertNode('$color', parser, parser._parseVariable.bind(parser));
            parser_test_1.assertNode('$co42lor', parser, parser._parseVariable.bind(parser));
            parser_test_1.assertNode('$-co42lor', parser, parser._parseVariable.bind(parser));
        });
        test('VariableDeclaration', function () {
            var parser = new scssParser_1.SCSSParser();
            parser_test_1.assertNode('$color: #F5F5F5', parser, parser._parseVariableDeclaration.bind(parser));
            parser_test_1.assertNode('$color: 0', parser, parser._parseVariableDeclaration.bind(parser));
            parser_test_1.assertNode('$color: 255', parser, parser._parseVariableDeclaration.bind(parser));
            parser_test_1.assertNode('$color: 25.5', parser, parser._parseVariableDeclaration.bind(parser));
            parser_test_1.assertNode('$color: 25px', parser, parser._parseVariableDeclaration.bind(parser));
            parser_test_1.assertNode('$color: 25.5px !default', parser, parser._parseVariableDeclaration.bind(parser));
            parser_test_1.assertNode('$primary-font: "wf_SegoeUI","Segoe UI","Segoe","Segoe WP"', parser, parser._parseVariableDeclaration.bind(parser));
            parser_test_1.assertError('$color: red !def', parser, parser._parseVariableDeclaration.bind(parser), cssErrors_1.ParseError.UnknownKeyword);
            parser_test_1.assertError('$color : !default', parser, parser._parseVariableDeclaration.bind(parser), cssErrors_1.ParseError.VariableValueExpected);
            parser_test_1.assertError('$color !default', parser, parser._parseVariableDeclaration.bind(parser), cssErrors_1.ParseError.ColonExpected);
        });
        test('Expr', function () {
            var parser = new scssParser_1.SCSSParser();
            parser_test_1.assertNode('($let + 20)', parser, parser._parseExpr.bind(parser));
            parser_test_1.assertNode('($let - 20)', parser, parser._parseExpr.bind(parser));
            parser_test_1.assertNode('($let * 20)', parser, parser._parseExpr.bind(parser));
            parser_test_1.assertNode('($let / 20)', parser, parser._parseExpr.bind(parser));
            parser_test_1.assertNode('(20 + $let)', parser, parser._parseExpr.bind(parser));
            parser_test_1.assertNode('(20 - $let)', parser, parser._parseExpr.bind(parser));
            parser_test_1.assertNode('(20 * $let)', parser, parser._parseExpr.bind(parser));
            parser_test_1.assertNode('(20 / $let)', parser, parser._parseExpr.bind(parser));
            parser_test_1.assertNode('(20 / 20 + $let)', parser, parser._parseExpr.bind(parser));
            parser_test_1.assertNode('(20 + 20 + $let)', parser, parser._parseExpr.bind(parser));
            parser_test_1.assertNode('(20 + 20 + 20 + $let)', parser, parser._parseExpr.bind(parser));
            parser_test_1.assertNode('(20 + 20 + 20 + 20 + $let)', parser, parser._parseExpr.bind(parser));
            parser_test_1.assertNode('(20 + 20 + $let + 20 + 20 + $let)', parser, parser._parseExpr.bind(parser));
            parser_test_1.assertNode('(20 + 20)', parser, parser._parseExpr.bind(parser));
            parser_test_1.assertNode('($var1 + $var2)', parser, parser._parseExpr.bind(parser));
            parser_test_1.assertNode('(($let + 5) * 2)', parser, parser._parseExpr.bind(parser));
            parser_test_1.assertNode('(($let + (5 + 2)) * 2)', parser, parser._parseExpr.bind(parser));
            parser_test_1.assertNode('($let + ((5 + 2) * 2))', parser, parser._parseExpr.bind(parser));
            parser_test_1.assertNode('$color', parser, parser._parseExpr.bind(parser));
            parser_test_1.assertNode('$color, $color', parser, parser._parseExpr.bind(parser));
            parser_test_1.assertNode('$color, 42%', parser, parser._parseExpr.bind(parser));
            parser_test_1.assertNode('$color, 42%, $color', parser, parser._parseExpr.bind(parser));
            parser_test_1.assertNode('$color - ($color + 10%)', parser, parser._parseExpr.bind(parser));
            parser_test_1.assertNode('($base + $filler)', parser, parser._parseExpr.bind(parser));
            parser_test_1.assertNode('(100% / 2 + $filler)', parser, parser._parseExpr.bind(parser));
            parser_test_1.assertNode('100% / 2 + $filler', parser, parser._parseExpr.bind(parser));
            parser_test_1.assertNode('not ($v and $b) or $c', parser, parser._parseExpr.bind(parser));
            parser_test_1.assertError('(20 + 20', parser, parser._parseExpr.bind(parser), cssErrors_1.ParseError.RightParenthesisExpected);
        });
        test('SCSSOperator', function () {
            var parser = new scssParser_1.SCSSParser();
            parser_test_1.assertNode('>=', parser, parser._parseOperator.bind(parser));
            parser_test_1.assertNode('>', parser, parser._parseOperator.bind(parser));
            parser_test_1.assertNode('<', parser, parser._parseOperator.bind(parser));
            parser_test_1.assertNode('<=', parser, parser._parseOperator.bind(parser));
            parser_test_1.assertNode('==', parser, parser._parseOperator.bind(parser));
            parser_test_1.assertNode('!=', parser, parser._parseOperator.bind(parser));
            parser_test_1.assertNode('and', parser, parser._parseOperator.bind(parser));
            parser_test_1.assertNode('+', parser, parser._parseOperator.bind(parser));
            parser_test_1.assertNode('-', parser, parser._parseOperator.bind(parser));
            parser_test_1.assertNode('*', parser, parser._parseOperator.bind(parser));
            parser_test_1.assertNode('/', parser, parser._parseOperator.bind(parser));
            parser_test_1.assertNode('%', parser, parser._parseOperator.bind(parser));
            parser_test_1.assertNode('not', parser, parser._parseUnaryOperator.bind(parser));
        });
        test('Interpolation', function () {
            var parser = new scssParser_1.SCSSParser();
            parser_test_1.assertNode('#{red}', parser, parser._parseIdent.bind(parser));
            parser_test_1.assertNode('#{$color}', parser, parser._parseIdent.bind(parser));
            parser_test_1.assertNode('#{3 + 4}', parser, parser._parseIdent.bind(parser));
            parser_test_1.assertNode('#{3 + #{3 + 4}}', parser, parser._parseIdent.bind(parser));
            parser_test_1.assertNode('#{$d}-style: 0', parser, parser._parseDeclaration.bind(parser));
            parser_test_1.assertNode('foo-#{$d}: 1', parser, parser._parseDeclaration.bind(parser));
            parser_test_1.assertNode('#{$d}-bar-#{$d}: 2', parser, parser._parseDeclaration.bind(parser));
            parser_test_1.assertNode('foo-#{$d}-bar: 1', parser, parser._parseDeclaration.bind(parser));
            parser_test_1.assertNode('#{$d}-#{$d}: 2', parser, parser._parseDeclaration.bind(parser));
            parser_test_1.assertNode('&:nth-child(#{$query}+1) { clear: $opposite-direction; }', parser, parser._parseRuleset.bind(parser));
            parser_test_1.assertError('#{}', parser, parser._parseIdent.bind(parser), cssErrors_1.ParseError.ExpressionExpected);
            parser_test_1.assertError('#{1 + 2', parser, parser._parseIdent.bind(parser), cssErrors_1.ParseError.RightCurlyExpected);
        });
        test('Declaration', function () {
            var parser = new scssParser_1.SCSSParser();
            parser_test_1.assertNode('border: thin solid 1px', parser, parser._parseDeclaration.bind(parser));
            parser_test_1.assertNode('dummy: $color', parser, parser._parseDeclaration.bind(parser));
            parser_test_1.assertNode('dummy: blue', parser, parser._parseDeclaration.bind(parser));
            parser_test_1.assertNode('dummy: (20 / $let)', parser, parser._parseDeclaration.bind(parser));
            parser_test_1.assertNode('dummy: (20 / 20 + $let)', parser, parser._parseDeclaration.bind(parser));
            parser_test_1.assertNode('dummy: func($red)', parser, parser._parseDeclaration.bind(parser));
            parser_test_1.assertNode('dummy: desaturate($red, 10%)', parser, parser._parseDeclaration.bind(parser));
            parser_test_1.assertNode('dummy: desaturate(16, 10%)', parser, parser._parseDeclaration.bind(parser));
            parser_test_1.assertNode('color: $base-color + #111', parser, parser._parseDeclaration.bind(parser));
            parser_test_1.assertNode('color: 100% / 2 + $ref', parser, parser._parseDeclaration.bind(parser));
            parser_test_1.assertNode('border: ($width * 2) solid black', parser, parser._parseDeclaration.bind(parser));
            parser_test_1.assertNode('property: $class', parser, parser._parseDeclaration.bind(parser));
            parser_test_1.assertNode('prop-erty: fnc($t, 10%)', parser, parser._parseDeclaration.bind(parser));
            parser_test_1.assertNode('width: (1em + 2em) * 3', parser, parser._parseDeclaration.bind(parser));
            parser_test_1.assertNode('color: #010203 + #040506', parser, parser._parseDeclaration.bind(parser));
            parser_test_1.assertNode('font-family: sans- + "serif"', parser, parser._parseDeclaration.bind(parser));
            parser_test_1.assertNode('margin: 3px + 4px auto', parser, parser._parseDeclaration.bind(parser));
            parser_test_1.assertNode('color: hsl(0, 100%, 50%)', parser, parser._parseDeclaration.bind(parser));
            parser_test_1.assertNode('color: hsl($hue: 0, $saturation: 100%, $lightness: 50%)', parser, parser._parseDeclaration.bind(parser));
            parser_test_1.assertNode('foo: if($value == \'default\', flex-gutter(), $value)', parser, parser._parseDeclaration.bind(parser));
            parser_test_1.assertNode('color: selector-replace(&, 1)', parser, parser._parseDeclaration.bind(parser));
            parser_test_1.assertError('fo = 8', parser, parser._parseDeclaration.bind(parser), cssErrors_1.ParseError.ColonExpected);
            parser_test_1.assertError('fo:', parser, parser._parseDeclaration.bind(parser), cssErrors_1.ParseError.PropertyValueExpected);
            parser_test_1.assertError('color: hsl($hue: 0,', parser, parser._parseDeclaration.bind(parser), cssErrors_1.ParseError.ExpressionExpected);
            parser_test_1.assertError('color: hsl($hue: 0', parser, parser._parseDeclaration.bind(parser), cssErrors_1.ParseError.RightParenthesisExpected);
        });
        test('Stylesheet', function () {
            var parser = new scssParser_1.SCSSParser();
            parser_test_1.assertNode('$color: #F5F5F5;', parser, parser._parseStylesheet.bind(parser));
            parser_test_1.assertNode('$color: #F5F5F5; $color: #F5F5F5;', parser, parser._parseStylesheet.bind(parser));
            parser_test_1.assertNode('$color: #F5F5F5; $color: #F5F5F5; $color: #F5F5F5;', parser, parser._parseStylesheet.bind(parser));
            parser_test_1.assertNode('#main { width: 97%; p, div { a { font-weight: bold; } } }', parser, parser._parseStylesheet.bind(parser));
            parser_test_1.assertNode('a { &:hover { color: red; } }', parser, parser._parseStylesheet.bind(parser));
            parser_test_1.assertNode('fo { font: 2px/3px { family: fantasy; } }', parser, parser._parseStylesheet.bind(parser));
            parser_test_1.assertNode('.foo { bar: { yoo: fantasy; } }', parser, parser._parseStylesheet.bind(parser));
            parser_test_1.assertNode('selector { propsuffix: { nested: 1px; } rule: 1px; nested.selector { foo: 1; } nested:selector { foo: 2 }}', parser, parser._parseStylesheet.bind(parser));
            parser_test_1.assertNode('legend {foo{a:s}margin-top:0;margin-bottom:#123;margin-top:s(1)}', parser, parser._parseStylesheet.bind(parser));
            parser_test_1.assertNode('@mixin keyframe { @keyframes name { @content; } }', parser, parser._parseStylesheet.bind(parser));
            parser_test_1.assertNode('@include keyframe { 10% { top: 3px; } }', parser, parser._parseStylesheet.bind(parser));
            parser_test_1.assertNode('.class{&--sub-class-with-ampersand{color: red;}}', parser, parser._parseStylesheet.bind(parser));
            parser_test_1.assertError('fo { font: 2px/3px { family } }', parser, parser._parseStylesheet.bind(parser), cssErrors_1.ParseError.ColonExpected);
        });
        test('@import', function () {
            var parser = new scssParser_1.SCSSParser();
            parser_test_1.assertNode('@import "test.css"', parser, parser._parseImport.bind(parser));
            parser_test_1.assertNode('@import url("test.css")', parser, parser._parseImport.bind(parser));
            parser_test_1.assertNode('@import "test.css", "bar.css"', parser, parser._parseImport.bind(parser));
            parser_test_1.assertNode('@import "test.css", "bar.css" screen, projection', parser, parser._parseImport.bind(parser));
            parser_test_1.assertNode('foo { @import "test.css"; }', parser, parser._parseStylesheet.bind(parser));
            parser_test_1.assertError('@import "test.css" "bar.css"', parser, parser._parseStylesheet.bind(parser), cssErrors_1.ParseError.SemiColonExpected);
            parser_test_1.assertError('@import "test.css", screen', parser, parser._parseImport.bind(parser), cssErrors_1.ParseError.URIOrStringExpected);
            parser_test_1.assertError('@import', parser, parser._parseImport.bind(parser), cssErrors_1.ParseError.URIOrStringExpected);
        });
        test('@media', function () {
            var parser = new scssParser_1.SCSSParser();
            parser_test_1.assertNode('@media screen { .sidebar { @media (orientation: landscape) { width: 500px; } } }', parser, parser._parseStylesheet.bind(parser));
            parser_test_1.assertNode('@media #{$media} and ($feature: $value)  {}', parser, parser._parseStylesheet.bind(parser));
            parser_test_1.assertNode('foo { bar { @media screen and (orientation: landscape) {}} }', parser, parser._parseStylesheet.bind(parser));
            parser_test_1.assertNode('@media screen and (nth($query, 1): nth($query, 2)) { }', parser, parser._parseMedia.bind(parser));
        });
        test('@keyframe', function () {
            var parser = new scssParser_1.SCSSParser();
            parser_test_1.assertNode('@keyframes name { @content; }', parser, parser._parseKeyframe.bind(parser));
        });
        test('@extend', function () {
            var parser = new scssParser_1.SCSSParser();
            parser_test_1.assertNode('foo { @extend .error; border-width: 3px; }', parser, parser._parseStylesheet.bind(parser));
            parser_test_1.assertNode('a.important { @extend .notice !optional; }', parser, parser._parseStylesheet.bind(parser));
            parser_test_1.assertNode('.hoverlink { @extend a:hover; }', parser, parser._parseStylesheet.bind(parser));
            parser_test_1.assertNode('.seriousError {  @extend .error; @extend .attention; }', parser, parser._parseStylesheet.bind(parser));
            parser_test_1.assertNode('#context a%extreme { color: blue; }  .notice { @extend %extreme }', parser, parser._parseStylesheet.bind(parser));
            parser_test_1.assertNode('@media print { .error {  } .seriousError { @extend .error; } }', parser, parser._parseStylesheet.bind(parser));
            parser_test_1.assertNode('@mixin error($a: false) { @extend .#{$a}; @extend ##{$a}; }', parser, parser._parseStylesheet.bind(parser));
            parser_test_1.assertError('.hoverlink { @extend }', parser, parser._parseStylesheet.bind(parser), cssErrors_1.ParseError.SelectorExpected);
            parser_test_1.assertError('.hoverlink { @extend %extreme !default }', parser, parser._parseStylesheet.bind(parser), cssErrors_1.ParseError.UnknownKeyword);
        });
        test('@debug', function () {
            var parser = new scssParser_1.SCSSParser();
            parser_test_1.assertNode('@debug test;', parser, parser._parseStylesheet.bind(parser));
            parser_test_1.assertNode('foo { @debug 1 + 4; nested { @warn 1 4; } }', parser, parser._parseStylesheet.bind(parser));
            parser_test_1.assertNode('@if $foo == 1 { @debug 1 + 4 }', parser, parser._parseStylesheet.bind(parser));
        });
        test('@if', function () {
            var parser = new scssParser_1.SCSSParser();
            parser_test_1.assertNode('@if 1 + 1 == 2 { border: 1px solid;  }', parser, parser._parseRuleSetDeclaration.bind(parser));
            parser_test_1.assertNode('@if 5 < 3      { border: 2px dotted; }', parser, parser._parseRuleSetDeclaration.bind(parser));
            parser_test_1.assertNode('@if null       { border: 3px double; }', parser, parser._parseRuleSetDeclaration.bind(parser));
            parser_test_1.assertNode('@if 1 <= $let { border: 3px; } @else { border: 4px; }', parser, parser._parseRuleSetDeclaration.bind(parser));
            parser_test_1.assertNode('@if 1 >= (1 + $foo) { border: 3px; } @else if 1 + 1 == 2 { border: 4px; }', parser, parser._parseRuleSetDeclaration.bind(parser));
            parser_test_1.assertNode('p { @if $i == 1 { x: 3px; } @else if $i == 1 { x: 4px; } @else { x: 4px; } }', parser, parser._parseStylesheet.bind(parser));
            parser_test_1.assertNode('@if $i == 1 { p { x: 3px; } }', parser, parser._parseStylesheet.bind(parser));
            parser_test_1.assertError('@if { border: 1px solid;  }', parser, parser._parseRuleSetDeclaration.bind(parser), cssErrors_1.ParseError.ExpressionExpected);
            parser_test_1.assertError('@if 1 }', parser, parser._parseRuleSetDeclaration.bind(parser), cssErrors_1.ParseError.LeftCurlyExpected);
        });
        test('@for', function () {
            var parser = new scssParser_1.SCSSParser();
            parser_test_1.assertNode('@for $i from 1 to 5 { .item-#{$i} { width: 2em * $i; }  }', parser, parser._parseRuleSetDeclaration.bind(parser));
            parser_test_1.assertNode('@for $k from 1 + $x through 5 + $x {  }', parser, parser._parseRuleSetDeclaration.bind(parser));
            parser_test_1.assertError('@for i from 0 to 4 {}', parser, parser._parseRuleSetDeclaration.bind(parser), cssErrors_1.ParseError.VariableNameExpected);
            parser_test_1.assertError('@for $i to 4 {}', parser, parser._parseRuleSetDeclaration.bind(parser), scssErrors_1.SCSSParseError.FromExpected);
            parser_test_1.assertError('@for $i from 0 by 4 {}', parser, parser._parseRuleSetDeclaration.bind(parser), scssErrors_1.SCSSParseError.ThroughOrToExpected);
            parser_test_1.assertError('@for $i from {}', parser, parser._parseRuleSetDeclaration.bind(parser), cssErrors_1.ParseError.ExpressionExpected);
            parser_test_1.assertError('@for $i from 0 to {}', parser, parser._parseRuleSetDeclaration.bind(parser), cssErrors_1.ParseError.ExpressionExpected);
        });
        test('@each', function () {
            var parser = new scssParser_1.SCSSParser();
            parser_test_1.assertNode('@each $i in 1, 2, 3 { }', parser, parser._parseRuleSetDeclaration.bind(parser));
            parser_test_1.assertNode('@each $i in 1 2 3 { }', parser, parser._parseRuleSetDeclaration.bind(parser));
            parser_test_1.assertError('@each i in 4 {}', parser, parser._parseRuleSetDeclaration.bind(parser), cssErrors_1.ParseError.VariableNameExpected);
            parser_test_1.assertError('@each $i from 4 {}', parser, parser._parseRuleSetDeclaration.bind(parser), scssErrors_1.SCSSParseError.InExpected);
            parser_test_1.assertError('@each $i in {}', parser, parser._parseRuleSetDeclaration.bind(parser), cssErrors_1.ParseError.ExpressionExpected);
        });
        test('@while', function () {
            var parser = new scssParser_1.SCSSParser();
            parser_test_1.assertNode('@while $i < 0 { .item-#{$i} { width: 2em * $i; } $i: $i - 2; }', parser, parser._parseRuleSetDeclaration.bind(parser));
            parser_test_1.assertError('@while {}', parser, parser._parseRuleSetDeclaration.bind(parser), cssErrors_1.ParseError.ExpressionExpected);
            parser_test_1.assertError('@while $i != 4', parser, parser._parseRuleSetDeclaration.bind(parser), cssErrors_1.ParseError.LeftCurlyExpected);
            parser_test_1.assertError('@while ($i >= 4) {', parser, parser._parseRuleSetDeclaration.bind(parser), cssErrors_1.ParseError.RightCurlyExpected);
        });
        test('@mixin', function () {
            var parser = new scssParser_1.SCSSParser();
            parser_test_1.assertNode('@mixin large-text { font: { family: Arial; size: 20px; } color: #ff0000; }', parser, parser._parseStylesheet.bind(parser));
            parser_test_1.assertNode('@mixin sexy-border($color, $width: 1in) { color: black; }', parser, parser._parseStylesheet.bind(parser));
            parser_test_1.assertNode('@mixin box-shadow($shadows...) { -moz-box-shadow: $shadows; }', parser, parser._parseStylesheet.bind(parser));
            parser_test_1.assertNode('@mixin apply-to-ie6-only {  * html { @content; } }', parser, parser._parseStylesheet.bind(parser));
            parser_test_1.assertNode('@mixin #{foo}($color){}', parser, parser._parseStylesheet.bind(parser));
            parser_test_1.assertNode('@mixin foo ($i:4) { size: $i; @include wee ($i - 1); }', parser, parser._parseStylesheet.bind(parser));
            parser_test_1.assertError('@mixin $1 {}', parser, parser._parseStylesheet.bind(parser), cssErrors_1.ParseError.IdentifierExpected);
            parser_test_1.assertError('@mixin foo() i {}', parser, parser._parseStylesheet.bind(parser), cssErrors_1.ParseError.LeftCurlyExpected);
            parser_test_1.assertError('@mixin foo(1) {}', parser, parser._parseStylesheet.bind(parser), cssErrors_1.ParseError.RightParenthesisExpected);
            parser_test_1.assertError('@mixin foo($color = 9) {}', parser, parser._parseStylesheet.bind(parser), cssErrors_1.ParseError.RightParenthesisExpected);
            parser_test_1.assertError('@mixin foo($color)', parser, parser._parseStylesheet.bind(parser), cssErrors_1.ParseError.LeftCurlyExpected);
            parser_test_1.assertError('@mixin foo($color){', parser, parser._parseStylesheet.bind(parser), cssErrors_1.ParseError.RightCurlyExpected);
            parser_test_1.assertError('@mixin foo($color,){', parser, parser._parseStylesheet.bind(parser), cssErrors_1.ParseError.VariableNameExpected);
        });
        test('@include', function () {
            var parser = new scssParser_1.SCSSParser();
            parser_test_1.assertNode('p { @include sexy-border(blue); }', parser, parser._parseStylesheet.bind(parser));
            parser_test_1.assertNode('.shadows { @include box-shadow(0px 4px 5px #666, 2px 6px 10px #999); }', parser, parser._parseStylesheet.bind(parser));
            parser_test_1.assertNode('$values: #ff0000, #00ff00, #0000ff; .primary { @include colors($values...); }', parser, parser._parseStylesheet.bind(parser));
            parser_test_1.assertNode('.test { @include fontsize(16px, 21px !important); }', parser, parser._parseStylesheet.bind(parser));
            parser_test_1.assertNode('p {  @include apply-to-ie6-only { #logo { background-image: url(/logo.gif); } } }', parser, parser._parseStylesheet.bind(parser));
            parser_test_1.assertError('p { @include sexy-border blue', parser, parser._parseStylesheet.bind(parser), cssErrors_1.ParseError.SemiColonExpected);
            parser_test_1.assertError('p { @include sexy-border($values blue', parser, parser._parseStylesheet.bind(parser), cssErrors_1.ParseError.RightParenthesisExpected);
            parser_test_1.assertError('p { @include }', parser, parser._parseStylesheet.bind(parser), cssErrors_1.ParseError.IdentifierExpected);
            parser_test_1.assertError('p { @include foo($values }', parser, parser._parseStylesheet.bind(parser), cssErrors_1.ParseError.RightParenthesisExpected);
            parser_test_1.assertError('p { @include foo($values, }', parser, parser._parseStylesheet.bind(parser), cssErrors_1.ParseError.ExpressionExpected);
        });
        test('@function', function () {
            var parser = new scssParser_1.SCSSParser();
            parser_test_1.assertNode('@function grid-width($n) { @return $n * $grid-width + ($n - 1) * $gutter-width; }', parser, parser._parseStylesheet.bind(parser));
            parser_test_1.assertNode('@function grid-width($n: 1, $e) { @return 0; }', parser, parser._parseStylesheet.bind(parser));
            parser_test_1.assertNode('@function foo($total, $a) { @for $i from 0 to $total { } @return $grid; }', parser, parser._parseStylesheet.bind(parser));
            parser_test_1.assertNode('@function foo() { @if (unit($a) == "%") and ($i == ($total - 1)) { @return 0; } @return 1; }', parser, parser._parseStylesheet.bind(parser));
            parser_test_1.assertNode('@function is-even($int) { @if $int%2 == 0 { @return true; } @return false }', parser, parser._parseStylesheet.bind(parser));
            parser_test_1.assertNode('@function bar ($i) { @if $i > 0 { @return $i * bar($i - 1); } @return 1; }', parser, parser._parseStylesheet.bind(parser));
            parser_test_1.assertError('@function foo {} ', parser, parser._parseStylesheet.bind(parser), cssErrors_1.ParseError.LeftParenthesisExpected);
            parser_test_1.assertError('@function {} ', parser, parser._parseStylesheet.bind(parser), cssErrors_1.ParseError.IdentifierExpected);
            parser_test_1.assertError('@function foo($a $b) {} ', parser, parser._parseStylesheet.bind(parser), cssErrors_1.ParseError.RightParenthesisExpected);
            parser_test_1.assertError('@function foo($a {} ', parser, parser._parseStylesheet.bind(parser), cssErrors_1.ParseError.RightParenthesisExpected);
            parser_test_1.assertError('@function foo($a...) { @return; }', parser, parser._parseStylesheet.bind(parser), cssErrors_1.ParseError.ExpressionExpected);
            parser_test_1.assertError('@function foo($a,) {} ', parser, parser._parseStylesheet.bind(parser), cssErrors_1.ParseError.VariableNameExpected);
            parser_test_1.assertError('@function foo($a:) {} ', parser, parser._parseStylesheet.bind(parser), cssErrors_1.ParseError.VariableValueExpected);
        });
        test('Ruleset', function () {
            var parser = new scssParser_1.SCSSParser();
            parser_test_1.assertNode('.selector { prop: erty $let 1px; }', parser, parser._parseRuleset.bind(parser));
            parser_test_1.assertNode('selector:active { property:value; nested:hover {}}', parser, parser._parseRuleset.bind(parser));
            parser_test_1.assertNode('selector {}', parser, parser._parseRuleset.bind(parser));
            parser_test_1.assertNode('selector { property: declaration }', parser, parser._parseRuleset.bind(parser));
            parser_test_1.assertNode('selector { $variable: declaration }', parser, parser._parseRuleset.bind(parser));
            parser_test_1.assertNode('selector { nested {}}', parser, parser._parseRuleset.bind(parser));
            parser_test_1.assertNode('selector { nested, a, b {}}', parser, parser._parseRuleset.bind(parser));
            parser_test_1.assertNode('selector { property: value; property: $value; }', parser, parser._parseRuleset.bind(parser));
            parser_test_1.assertNode('selector { property: value; @keyframes foo {} @-moz-keyframes foo {}}', parser, parser._parseRuleset.bind(parser));
        });
        test('Nested Ruleset', function () {
            var parser = new scssParser_1.SCSSParser();
            parser_test_1.assertNode('.class1 { $let: 1; .class { $let: 2; three: $let; let: 3; } one: $let; }', parser, parser._parseRuleset.bind(parser));
            parser_test_1.assertNode('.class1 { > .class2 { & > .class4 { rule1: v1; } } }', parser, parser._parseRuleset.bind(parser));
            parser_test_1.assertNode('foo { @at-root { display: none; } }', parser, parser._parseRuleset.bind(parser));
            parser_test_1.assertNode('th, tr { @at-root #{selector-replace(&, "tr")} { border-bottom: 0; } }', parser, parser._parseRuleset.bind(parser));
        });
        test('Selector Interpolation', function () {
            var parser = new scssParser_1.SCSSParser();
            parser_test_1.assertNode('.#{$name} { }', parser, parser._parseRuleset.bind(parser));
            parser_test_1.assertNode('p.#{$name} { #{$attr}-color: blue; }', parser, parser._parseRuleset.bind(parser));
            parser_test_1.assertNode('sans-#{serif} { a-#{1 + 2}-color-#{$attr}: blue; }', parser, parser._parseRuleset.bind(parser));
            parser_test_1.assertNode('##{f} .#{f} #{f}:#{f} { }', parser, parser._parseRuleset.bind(parser));
            parser_test_1.assertNode('.foo-#{&} .foo-#{&-sub} { }', parser, parser._parseRuleset.bind(parser));
        });
        test('Parent Selector', function () {
            var parser = new scssParser_1.SCSSParser();
            parser_test_1.assertNode('&:hover', parser, parser._parseSimpleSelector.bind(parser));
            parser_test_1.assertNode('&.float', parser, parser._parseSimpleSelector.bind(parser));
            parser_test_1.assertNode('&-bar', parser, parser._parseSimpleSelector.bind(parser));
            parser_test_1.assertNode('&&', parser, parser._parseSimpleSelector.bind(parser));
        });
        test('Selector Placeholder', function () {
            var parser = new scssParser_1.SCSSParser();
            parser_test_1.assertNode('%hover', parser, parser._parseSimpleSelector.bind(parser));
            parser_test_1.assertNode('a%float', parser, parser._parseSimpleSelector.bind(parser));
        });
    });
});
//# sourceMappingURL=parser.test.js.map