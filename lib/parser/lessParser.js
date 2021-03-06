var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
(function (dependencies, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(dependencies, factory);
    }
})(["require", "exports", "./lessScanner", "./cssScanner", "./cssParser", "./cssNodes", "./cssErrors"], function (require, exports) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    var lessScanner = require("./lessScanner");
    var cssScanner_1 = require("./cssScanner");
    var cssParser = require("./cssParser");
    var nodes = require("./cssNodes");
    var cssErrors_1 = require("./cssErrors");
    /// <summary>
    /// A parser for LESS
    /// http://lesscss.org/
    /// </summary>
    var LESSParser = (function (_super) {
        __extends(LESSParser, _super);
        function LESSParser() {
            return _super.call(this, new lessScanner.LESSScanner()) || this;
        }
        LESSParser.prototype._parseStylesheetStatement = function () {
            return this._tryParseMixinDeclaration()
                || this._tryParseMixinReference(true)
                || _super.prototype._parseStylesheetStatement.call(this)
                || this._parseVariableDeclaration();
        };
        LESSParser.prototype._parseImport = function () {
            var node = this.create(nodes.Import);
            if (!this.accept(cssScanner_1.TokenType.AtKeyword, '@import') && !this.accept(cssScanner_1.TokenType.AtKeyword, '@import-once') /* deprecated in less 1.4.1 */) {
                return null;
            }
            // less 1.4.1: @import (css) "lib"
            if (this.accept(cssScanner_1.TokenType.ParenthesisL)) {
                if (!this.accept(cssScanner_1.TokenType.Ident)) {
                    return this.finish(node, cssErrors_1.ParseError.IdentifierExpected, [cssScanner_1.TokenType.SemiColon]);
                }
                do {
                    if (!this.accept(cssScanner_1.TokenType.Comma)) {
                        break;
                    }
                } while (this.accept(cssScanner_1.TokenType.Ident));
                if (!this.accept(cssScanner_1.TokenType.ParenthesisR)) {
                    return this.finish(node, cssErrors_1.ParseError.RightParenthesisExpected, [cssScanner_1.TokenType.SemiColon]);
                }
            }
            if (!this.accept(cssScanner_1.TokenType.URI) && !this.accept(cssScanner_1.TokenType.String)) {
                return this.finish(node, cssErrors_1.ParseError.URIOrStringExpected, [cssScanner_1.TokenType.SemiColon]);
            }
            node.addSource(new nodes.ImportSource(this.prevToken.offset, this.prevToken.len));
            node.setMedialist(this._parseMediaList());
            return this.finish(node);
        };
        LESSParser.prototype._parseMediaQuery = function (resyncStopToken) {
            var node = _super.prototype._parseMediaQuery.call(this, resyncStopToken);
            if (!node) {
                var node_1 = this.create(nodes.MediaQuery);
                if (node_1.addChild(this._parseVariable())) {
                    return this.finish(node_1);
                }
                return null;
            }
            return node;
        };
        LESSParser.prototype._parseMediaDeclaration = function () {
            return this._tryParseRuleset(false)
                || this._tryToParseDeclaration()
                || this._tryParseMixinDeclaration()
                || this._tryParseMixinReference()
                || this._parseStylesheetStatement();
        };
        LESSParser.prototype._parseVariableDeclaration = function (panic) {
            if (panic === void 0) { panic = []; }
            var node = this.create(nodes.VariableDeclaration);
            var mark = this.mark();
            if (!node.setVariable(this._parseVariable())) {
                return null;
            }
            if (this.accept(cssScanner_1.TokenType.Colon, ':')) {
                node.colonPosition = this.prevToken.offset;
                if (this.peek(cssScanner_1.TokenType.CurlyL)) {
                    //detached ruleset 
                    var content = this.create(nodes.BodyDeclaration);
                    this._parseBody(content, this._parseRuleSetDeclaration.bind(this));
                    node.setValue(content);
                }
                else if (!node.setValue(this._parseExpr())) {
                    return this.finish(node, cssErrors_1.ParseError.VariableValueExpected, [], panic);
                }
                node.addChild(this._parsePrio());
            }
            else {
                this.restoreAtMark(mark);
                return null; // at keyword, but no ':', not a variable declaration but some at keyword
            }
            if (this.peek(cssScanner_1.TokenType.SemiColon)) {
                node.semicolonPosition = this.token.offset; // not part of the declaration, but useful information for code assist
            }
            return this.finish(node);
        };
        LESSParser.prototype._parseVariable = function () {
            var node = this.create(nodes.Variable);
            var mark = this.mark();
            while (this.accept(cssScanner_1.TokenType.Delim, '@')) {
                if (this.hasWhitespace()) {
                    this.restoreAtMark(mark);
                    return null;
                }
            }
            if (!this.accept(cssScanner_1.TokenType.AtKeyword)) {
                this.restoreAtMark(mark);
                return null;
            }
            return node;
        };
        LESSParser.prototype._parseTerm = function () {
            var term = _super.prototype._parseTerm.call(this);
            if (term) {
                return term;
            }
            term = this.create(nodes.Term);
            if (term.setExpression(this._parseVariable()) ||
                term.setExpression(this._parseEscaped())) {
                return this.finish(term);
            }
            return null;
        };
        LESSParser.prototype._parseEscaped = function () {
            var node = this.createNode(nodes.NodeType.EscapedValue);
            if (this.accept(cssScanner_1.TokenType.EscapedJavaScript) ||
                this.accept(cssScanner_1.TokenType.BadEscapedJavaScript)) {
                return this.finish(node);
            }
            if (this.accept(cssScanner_1.TokenType.Delim, '~')) {
                return this.finish(node, this.accept(cssScanner_1.TokenType.String) ? null : cssErrors_1.ParseError.TermExpected);
            }
            return null;
        };
        LESSParser.prototype._parseOperator = function () {
            var node = this._parseGuardOperator();
            if (node) {
                return node;
            }
            else {
                return _super.prototype._parseOperator.call(this);
            }
        };
        LESSParser.prototype._parseGuardOperator = function () {
            var node = this.createNode(nodes.NodeType.Operator);
            if (this.accept(cssScanner_1.TokenType.Delim, '>')) {
                this.accept(cssScanner_1.TokenType.Delim, '=');
                return node;
            }
            else if (this.accept(cssScanner_1.TokenType.Delim, '=')) {
                this.accept(cssScanner_1.TokenType.Delim, '<');
                return node;
            }
            else if (this.accept(cssScanner_1.TokenType.Delim, '<')) {
                this.accept(cssScanner_1.TokenType.Delim, '=');
                return node;
            }
            return null;
        };
        LESSParser.prototype._parseRuleSetDeclaration = function () {
            if (this.peek(cssScanner_1.TokenType.AtKeyword)) {
                return this._parseKeyframe()
                    || this._parseMedia()
                    || this._parseImport()
                    || this._parseDetachedRuleSetMixin() // less detached ruleset mixin
                    || this._parseVariableDeclaration(); // Variable declarations
            }
            return this._tryParseMixinDeclaration()
                || this._tryParseRuleset(true) // nested ruleset
                || this._tryParseMixinReference() // less mixin reference
                || this._parseExtend() // less extend declaration
                || _super.prototype._parseRuleSetDeclaration.call(this); // try css ruleset declaration as the last option
        };
        LESSParser.prototype._parseSimpleSelectorBody = function () {
            return this._parseSelectorCombinator() || _super.prototype._parseSimpleSelectorBody.call(this);
        };
        LESSParser.prototype._parseSelector = function (isNested) {
            // CSS Guards
            var mark = this.mark();
            var node = this.create(nodes.Selector);
            if (node.addChild(this._parseSimpleSelector()) && node.addChild(this._parseGuard())) {
                return this.finish(node);
            }
            this.restoreAtMark(mark);
            return _super.prototype._parseSelector.call(this, isNested);
        };
        LESSParser.prototype._parseSelectorCombinator = function () {
            var node = this.createNode(nodes.NodeType.SelectorCombinator);
            if (this.accept(cssScanner_1.TokenType.Delim, '&')) {
                while (!this.hasWhitespace() && (this.accept(cssScanner_1.TokenType.Delim, '-') || node.addChild(this._parseIdent()) || this.accept(cssScanner_1.TokenType.Delim, '&'))) {
                }
                return this.finish(node);
            }
            return null;
        };
        LESSParser.prototype._parseSelectorIdent = function () {
            return this._parseIdent() || this._parseSelectorInterpolation();
        };
        LESSParser.prototype._parseSelectorInterpolation = function () {
            // Selector interpolation;  old: ~"@{name}", new: @{name}
            var node = this.createNode(nodes.NodeType.SelectorInterpolation);
            if (this.accept(cssScanner_1.TokenType.Delim, '~')) {
                if (!this.hasWhitespace() && (this.accept(cssScanner_1.TokenType.String) || this.accept(cssScanner_1.TokenType.BadString))) {
                    return this.finish(node);
                }
                return this.finish(node, cssErrors_1.ParseError.StringLiteralExpected);
            }
            else if (this.accept(cssScanner_1.TokenType.Delim, '@')) {
                if (this.hasWhitespace() || !this.accept(cssScanner_1.TokenType.CurlyL)) {
                    return this.finish(node, cssErrors_1.ParseError.LeftCurlyExpected);
                }
                if (!node.addChild(this._parseIdent())) {
                    return this.finish(node, cssErrors_1.ParseError.IdentifierExpected);
                }
                if (!this.accept(cssScanner_1.TokenType.CurlyR)) {
                    return this.finish(node, cssErrors_1.ParseError.RightCurlyExpected);
                }
                return this.finish(node);
            }
            return null;
        };
        LESSParser.prototype._tryParseMixinDeclaration = function () {
            var mark = this.mark();
            var node = this.create(nodes.MixinDeclaration);
            if (!node.setIdentifier(this._parseMixinDeclarationIdentifier()) || !this.accept(cssScanner_1.TokenType.ParenthesisL)) {
                this.restoreAtMark(mark);
                return null;
            }
            if (node.getParameters().addChild(this._parseMixinParameter())) {
                while (this.accept(cssScanner_1.TokenType.Comma) || this.accept(cssScanner_1.TokenType.SemiColon)) {
                    if (this.peek(cssScanner_1.TokenType.ParenthesisR)) {
                        break;
                    }
                    if (!node.getParameters().addChild(this._parseMixinParameter())) {
                        return this.finish(node, cssErrors_1.ParseError.IdentifierExpected);
                    }
                }
            }
            if (!this.accept(cssScanner_1.TokenType.ParenthesisR)) {
                return this.finish(node, cssErrors_1.ParseError.RightParenthesisExpected);
            }
            node.setGuard(this._parseGuard());
            if (!this.peek(cssScanner_1.TokenType.CurlyL)) {
                this.restoreAtMark(mark);
                return null;
            }
            return this._parseBody(node, this._parseRuleSetDeclaration.bind(this));
        };
        LESSParser.prototype._parseMixinDeclarationIdentifier = function () {
            var identifier;
            if (this.peek(cssScanner_1.TokenType.Delim, '#') || this.peek(cssScanner_1.TokenType.Delim, '.')) {
                identifier = this.create(nodes.Identifier);
                this.consumeToken(); // # or .
                if (this.hasWhitespace() || !identifier.addChild(this._parseIdent())) {
                    return null;
                }
            }
            else if (this.peek(cssScanner_1.TokenType.Hash)) {
                identifier = this.create(nodes.Identifier);
                this.consumeToken(); // TokenType.Hash
            }
            else {
                return null;
            }
            identifier.referenceTypes = [nodes.ReferenceType.Mixin];
            return this.finish(identifier);
        };
        LESSParser.prototype._parsePseudo = function () {
            if (!this.peek(cssScanner_1.TokenType.Colon)) {
                return null;
            }
            var mark = this.mark();
            var node = this.create(nodes.ExtendsReference);
            this.consumeToken(); // :
            if (this.accept(cssScanner_1.TokenType.Ident, 'extend')) {
                return this._completeExtends(node);
            }
            this.restoreAtMark(mark);
            return _super.prototype._parsePseudo.call(this);
        };
        LESSParser.prototype._parseExtend = function () {
            if (!this.peek(cssScanner_1.TokenType.Delim, '&')) {
                return null;
            }
            var mark = this.mark();
            var node = this.create(nodes.ExtendsReference);
            this.consumeToken(); // &
            if (this.hasWhitespace() || !this.accept(cssScanner_1.TokenType.Colon) || !this.accept(cssScanner_1.TokenType.Ident, 'extend')) {
                this.restoreAtMark(mark);
                return null;
            }
            return this._completeExtends(node);
        };
        LESSParser.prototype._completeExtends = function (node) {
            if (!this.accept(cssScanner_1.TokenType.ParenthesisL)) {
                return this.finish(node, cssErrors_1.ParseError.LeftParenthesisExpected);
            }
            if (!node.setSelector(this._parseSelector(true))) {
                return this.finish(node, cssErrors_1.ParseError.SelectorExpected);
            }
            if (!this.accept(cssScanner_1.TokenType.ParenthesisR)) {
                return this.finish(node, cssErrors_1.ParseError.RightParenthesisExpected);
            }
            return this.finish(node);
        };
        LESSParser.prototype._parseDetachedRuleSetMixin = function () {
            if (!this.peek(cssScanner_1.TokenType.AtKeyword)) {
                return null;
            }
            var mark = this.mark();
            var node = this.create(nodes.MixinReference);
            if (!node.addChild(this._parseVariable()) || !this.accept(cssScanner_1.TokenType.ParenthesisL)) {
                this.restoreAtMark(mark);
                return null;
            }
            if (!this.accept(cssScanner_1.TokenType.ParenthesisR)) {
                return this.finish(node, cssErrors_1.ParseError.RightParenthesisExpected);
            }
            return this.finish(node);
        };
        LESSParser.prototype._tryParseMixinReference = function (atRoot) {
            if (atRoot === void 0) { atRoot = false; }
            var mark = this.mark();
            var node = this.create(nodes.MixinReference);
            var identifier = this._parseMixinDeclarationIdentifier();
            while (identifier) {
                this.accept(cssScanner_1.TokenType.Delim, '>');
                var nextId = this._parseMixinDeclarationIdentifier();
                if (nextId) {
                    node.getNamespaces().addChild(identifier);
                    identifier = nextId;
                }
                else {
                    break;
                }
            }
            if (!node.setIdentifier(identifier)) {
                this.restoreAtMark(mark);
                return null;
            }
            if (!this.hasWhitespace() && this.accept(cssScanner_1.TokenType.ParenthesisL)) {
                if (node.getArguments().addChild(this._parseMixinArgument())) {
                    while (this.accept(cssScanner_1.TokenType.Comma) || this.accept(cssScanner_1.TokenType.SemiColon)) {
                        if (this.peek(cssScanner_1.TokenType.ParenthesisR)) {
                            break;
                        }
                        if (!node.getArguments().addChild(this._parseMixinArgument())) {
                            return this.finish(node, cssErrors_1.ParseError.ExpressionExpected);
                        }
                    }
                }
                if (!this.accept(cssScanner_1.TokenType.ParenthesisR)) {
                    return this.finish(node, cssErrors_1.ParseError.RightParenthesisExpected);
                }
                identifier.referenceTypes = [nodes.ReferenceType.Mixin];
            }
            else {
                identifier.referenceTypes = [nodes.ReferenceType.Mixin, nodes.ReferenceType.Rule];
            }
            node.addChild(this._parsePrio());
            if (atRoot && !this.peek(cssScanner_1.TokenType.SemiColon)) {
                this.restoreAtMark(mark);
                return null;
            }
            return this.finish(node);
        };
        LESSParser.prototype._parseMixinArgument = function () {
            // [variableName ':'] expression | variableName '...'
            var node = this.create(nodes.FunctionArgument);
            var pos = this.mark();
            var argument = this._parseVariable();
            if (argument) {
                if (!this.accept(cssScanner_1.TokenType.Colon)) {
                    this.restoreAtMark(pos);
                }
                else {
                    node.setIdentifier(argument);
                }
            }
            if (node.setValue(this._parseExpr(true))) {
                return this.finish(node);
            }
            return null;
        };
        LESSParser.prototype._parseMixinParameter = function () {
            var node = this.create(nodes.FunctionParameter);
            // special rest variable: @rest...
            if (this.peek(cssScanner_1.TokenType.AtKeyword, '@rest')) {
                var restNode = this.create(nodes.Node);
                this.consumeToken();
                if (!this.accept(lessScanner.Ellipsis)) {
                    return this.finish(node, cssErrors_1.ParseError.DotExpected, [], [cssScanner_1.TokenType.Comma, cssScanner_1.TokenType.ParenthesisR]);
                }
                node.setIdentifier(this.finish(restNode));
                return this.finish(node);
            }
            // special let args: ...
            if (this.peek(lessScanner.Ellipsis)) {
                var varargsNode = this.create(nodes.Node);
                this.consumeToken();
                node.setIdentifier(this.finish(varargsNode));
                return this.finish(node);
            }
            var hasContent = false;
            // default variable declaration: @param: 12 or @name
            if (node.setIdentifier(this._parseVariable())) {
                this.accept(cssScanner_1.TokenType.Colon);
                hasContent = true;
            }
            if (!node.setDefaultValue(this._parseExpr(true)) && !hasContent) {
                return null;
            }
            return this.finish(node);
        };
        LESSParser.prototype._parseGuard = function () {
            if (!this.peek(cssScanner_1.TokenType.Ident, 'when')) {
                return null;
            }
            var node = this.create(nodes.LessGuard);
            this.consumeToken(); // when
            node.isNegated = this.accept(cssScanner_1.TokenType.Ident, 'not');
            if (!node.getConditions().addChild(this._parseGuardCondition())) {
                return this.finish(node, cssErrors_1.ParseError.ConditionExpected);
            }
            while (this.accept(cssScanner_1.TokenType.Ident, 'and') || this.accept(cssScanner_1.TokenType.Comma, ',')) {
                if (!node.getConditions().addChild(this._parseGuardCondition())) {
                    return this.finish(node, cssErrors_1.ParseError.ConditionExpected);
                }
            }
            return this.finish(node);
        };
        LESSParser.prototype._parseGuardCondition = function () {
            var node = this.create(nodes.GuardCondition);
            if (!this.accept(cssScanner_1.TokenType.ParenthesisL)) {
                return null;
            }
            if (!node.addChild(this._parseExpr())) {
            }
            if (!this.accept(cssScanner_1.TokenType.ParenthesisR)) {
                return this.finish(node, cssErrors_1.ParseError.RightParenthesisExpected);
            }
            return this.finish(node);
        };
        LESSParser.prototype._parseFunctionIdentifier = function () {
            if (this.peek(cssScanner_1.TokenType.Delim, '%')) {
                var node = this.create(nodes.Identifier);
                node.referenceTypes = [nodes.ReferenceType.Function];
                this.consumeToken();
                return this.finish(node);
            }
            return _super.prototype._parseFunctionIdentifier.call(this);
        };
        LESSParser.prototype._parsePropertyIdentifier = function () {
            var identifier = this._parseIdent();
            if (!identifier) {
                return null;
            }
            if (!this.hasWhitespace()) {
                this.accept(cssScanner_1.TokenType.Delim, '+');
                if (!this.hasWhitespace()) {
                    this.accept(cssScanner_1.TokenType.Ident, '_');
                }
            }
            return this.finish(identifier);
        };
        return LESSParser;
    }(cssParser.Parser));
    exports.LESSParser = LESSParser;
});
//# sourceMappingURL=lessParser.js.map