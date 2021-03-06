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
})(["require", "exports", "./scssScanner", "./cssScanner", "./cssParser", "./cssNodes", "./scssErrors", "./cssErrors"], function (require, exports) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    var scssScanner = require("./scssScanner");
    var cssScanner_1 = require("./cssScanner");
    var cssParser = require("./cssParser");
    var nodes = require("./cssNodes");
    var scssErrors_1 = require("./scssErrors");
    var cssErrors_1 = require("./cssErrors");
    /// <summary>
    /// A parser for scss
    /// http://sass-lang.com/documentation/file.SASS_REFERENCE.html
    /// </summary>
    var SCSSParser = (function (_super) {
        __extends(SCSSParser, _super);
        function SCSSParser() {
            return _super.call(this, new scssScanner.SCSSScanner()) || this;
        }
        SCSSParser.prototype._parseStylesheetStatement = function () {
            return _super.prototype._parseStylesheetStatement.call(this)
                || this._parseVariableDeclaration()
                || this._parseWarnAndDebug()
                || this._parseControlStatement()
                || this._parseMixinDeclaration()
                || this._parseMixinContent()
                || this._parseMixinReference() // @include
                || this._parseFunctionDeclaration();
        };
        SCSSParser.prototype._parseImport = function () {
            var node = this.create(nodes.Import);
            if (!this.accept(cssScanner_1.TokenType.AtKeyword, '@import')) {
                return null;
            }
            do {
                if (!this.accept(cssScanner_1.TokenType.URI) && !this.accept(cssScanner_1.TokenType.String)) {
                    return this.finish(node, cssErrors_1.ParseError.URIOrStringExpected);
                }
                node.addSource(new nodes.ImportSource(this.prevToken.offset, this.prevToken.len));
            } while (this.accept(cssScanner_1.TokenType.Comma));
            node.setMedialist(this._parseMediaList());
            return this.finish(node);
        };
        // scss variables: $font-size: 12px;
        SCSSParser.prototype._parseVariableDeclaration = function (panic) {
            if (panic === void 0) { panic = []; }
            var node = this.create(nodes.VariableDeclaration);
            if (!node.setVariable(this._parseVariable())) {
                return null;
            }
            if (!this.accept(cssScanner_1.TokenType.Colon, ':')) {
                return this.finish(node, cssErrors_1.ParseError.ColonExpected);
            }
            node.colonPosition = this.prevToken.offset;
            if (!node.setValue(this._parseExpr())) {
                return this.finish(node, cssErrors_1.ParseError.VariableValueExpected, [], panic);
            }
            if (this.accept(cssScanner_1.TokenType.Exclamation)) {
                if (!this.accept(cssScanner_1.TokenType.Ident, 'default', true)) {
                    return this.finish(node, cssErrors_1.ParseError.UnknownKeyword);
                }
            }
            if (this.peek(cssScanner_1.TokenType.SemiColon)) {
                node.semicolonPosition = this.token.offset; // not part of the declaration, but useful information for code assist
            }
            return this.finish(node);
        };
        SCSSParser.prototype._parseMediaFeatureName = function () {
            return this._parseFunction() || this._parseIdent() || this._parseVariable(); // first function, the indent
        };
        SCSSParser.prototype._parseKeyframeSelector = function () {
            return _super.prototype._parseKeyframeSelector.call(this) || this._parseMixinContent();
        };
        SCSSParser.prototype._parseVariable = function () {
            var node = this.create(nodes.Variable);
            if (!this.accept(scssScanner.VariableName)) {
                return null;
            }
            return node;
        };
        SCSSParser.prototype._parseIdent = function (referenceTypes) {
            var node = this.create(nodes.Identifier);
            node.referenceTypes = referenceTypes;
            var hasContent = false;
            while (this.accept(cssScanner_1.TokenType.Ident) || node.addChild(this._parseInterpolation())) {
                hasContent = true;
                if (!this.hasWhitespace() && this.accept(cssScanner_1.TokenType.Delim, '-')) {
                }
                if (this.hasWhitespace()) {
                    break;
                }
            }
            return hasContent ? this.finish(node) : null;
        };
        SCSSParser.prototype._parseTerm = function () {
            var term = _super.prototype._parseTerm.call(this);
            if (term) {
                return term;
            }
            term = this.create(nodes.Term);
            if (term.setExpression(this._parseVariable())
                || term.setExpression(this._parseSelectorCombinator())) {
                return this.finish(term);
            }
            return null;
        };
        SCSSParser.prototype._parseInterpolation = function () {
            var node = this.create(nodes.Interpolation);
            if (this.accept(scssScanner.InterpolationFunction)) {
                if (!node.addChild(this._parseBinaryExpr()) && !this._parseSelectorCombinator()) {
                    return this.finish(node, cssErrors_1.ParseError.ExpressionExpected);
                }
                if (!this.accept(cssScanner_1.TokenType.CurlyR)) {
                    return this.finish(node, cssErrors_1.ParseError.RightCurlyExpected);
                }
                return this.finish(node);
            }
            return null;
        };
        SCSSParser.prototype._parseOperator = function () {
            if (this.peek(scssScanner.EqualsOperator) || this.peek(scssScanner.NotEqualsOperator)
                || this.peek(scssScanner.GreaterEqualsOperator) || this.peek(scssScanner.SmallerEqualsOperator)
                || this.peek(cssScanner_1.TokenType.Delim, '>') || this.peek(cssScanner_1.TokenType.Delim, '<')
                || this.peek(cssScanner_1.TokenType.Ident, 'and') || this.peek(cssScanner_1.TokenType.Ident, 'or')
                || this.peek(cssScanner_1.TokenType.Delim, '%')) {
                var node = this.createNode(nodes.NodeType.Operator);
                this.consumeToken();
                return this.finish(node);
            }
            return _super.prototype._parseOperator.call(this);
        };
        SCSSParser.prototype._parseUnaryOperator = function () {
            if (this.peek(cssScanner_1.TokenType.Ident, 'not')) {
                var node = this.create(nodes.Node);
                this.consumeToken();
                return this.finish(node);
            }
            return _super.prototype._parseUnaryOperator.call(this);
        };
        SCSSParser.prototype._parseRuleSetDeclaration = function () {
            if (this.peek(cssScanner_1.TokenType.AtKeyword)) {
                return this._parseKeyframe() // nested @keyframe
                    || this._parseImport() // nested @import
                    || this._parseMedia() // nested @media
                    || this._parseFontFace() // nested @font-face
                    || this._parseWarnAndDebug() // @warn and @debug statements
                    || this._parseControlStatement() // @if, @while, @for, @each
                    || this._parseFunctionDeclaration() // @function
                    || this._parseExtends() // @extends
                    || this._parseMixinReference() // @include
                    || this._parseMixinContent() // @content
                    || this._parseMixinDeclaration() // nested @mixin
                    || this._parseRuleset(true); // @at-rule
            }
            return this._parseVariableDeclaration() // variable declaration
                || this._tryParseRuleset(true) // nested ruleset
                || _super.prototype._parseRuleSetDeclaration.call(this); // try css ruleset declaration as last so in the error case, the ast will contain a declaration
        };
        SCSSParser.prototype._parseDeclaration = function (resyncStopTokens) {
            var node = this.create(nodes.Declaration);
            if (!node.setProperty(this._parseProperty())) {
                return null;
            }
            if (!this.accept(cssScanner_1.TokenType.Colon, ':')) {
                return this.finish(node, cssErrors_1.ParseError.ColonExpected, [cssScanner_1.TokenType.Colon], resyncStopTokens);
            }
            node.colonPosition = this.prevToken.offset;
            var hasContent = false;
            if (node.setValue(this._parseExpr())) {
                hasContent = true;
                node.addChild(this._parsePrio());
            }
            if (this.peek(cssScanner_1.TokenType.CurlyL)) {
                node.setNestedProperties(this._parseNestedProperties());
            }
            else {
                if (!hasContent) {
                    return this.finish(node, cssErrors_1.ParseError.PropertyValueExpected);
                }
            }
            if (this.peek(cssScanner_1.TokenType.SemiColon)) {
                node.semicolonPosition = this.token.offset; // not part of the declaration, but useful information for code assist
            }
            return this.finish(node);
        };
        SCSSParser.prototype._parseNestedProperties = function () {
            var node = this.create(nodes.NestedProperties);
            return this._parseBody(node, this._parseDeclaration.bind(this));
        };
        SCSSParser.prototype._parseExtends = function () {
            var node = this.create(nodes.ExtendsReference);
            if (this.accept(cssScanner_1.TokenType.AtKeyword, '@extend')) {
                if (!node.setSelector(this._parseSimpleSelector())) {
                    return this.finish(node, cssErrors_1.ParseError.SelectorExpected);
                }
                if (this.accept(cssScanner_1.TokenType.Exclamation)) {
                    if (!this.accept(cssScanner_1.TokenType.Ident, 'optional', true)) {
                        return this.finish(node, cssErrors_1.ParseError.UnknownKeyword);
                    }
                }
                return this.finish(node);
            }
            return null;
        };
        SCSSParser.prototype._parseSimpleSelectorBody = function () {
            return this._parseSelectorCombinator() || this._parseSelectorPlaceholder() || _super.prototype._parseSimpleSelectorBody.call(this);
        };
        SCSSParser.prototype._parseSelectorCombinator = function () {
            var node = this.createNode(nodes.NodeType.SelectorCombinator);
            if (this.accept(cssScanner_1.TokenType.Delim, '&')) {
                while (!this.hasWhitespace() && (this.accept(cssScanner_1.TokenType.Delim, '-') || node.addChild(this._parseIdent()) || this.accept(cssScanner_1.TokenType.Delim, '&'))) {
                }
                return this.finish(node);
            }
            return null;
        };
        SCSSParser.prototype._parseSelectorPlaceholder = function () {
            var node = this.createNode(nodes.NodeType.SelectorPlaceholder);
            if (this.accept(cssScanner_1.TokenType.Delim, '%')) {
                this._parseIdent();
                return this.finish(node);
            }
            else if (this.accept(cssScanner_1.TokenType.AtKeyword, '@at-root')) {
                return this.finish(node);
            }
            return null;
        };
        SCSSParser.prototype._parseWarnAndDebug = function () {
            if (!this.peek(cssScanner_1.TokenType.AtKeyword, '@debug') && !this.peek(cssScanner_1.TokenType.AtKeyword, '@warn')) {
                return null;
            }
            var node = this.createNode(nodes.NodeType.Debug);
            this.consumeToken(); // @debug or @warn
            node.addChild(this._parseExpr()); // optional
            return this.finish(node);
        };
        SCSSParser.prototype._parseControlStatement = function (parseStatement) {
            if (parseStatement === void 0) { parseStatement = this._parseRuleSetDeclaration.bind(this); }
            if (!this.peek(cssScanner_1.TokenType.AtKeyword)) {
                return null;
            }
            return this._parseIfStatement(parseStatement) || this._parseForStatement(parseStatement)
                || this._parseEachStatement(parseStatement) || this._parseWhileStatement(parseStatement);
        };
        SCSSParser.prototype._parseIfStatement = function (parseStatement) {
            if (!this.peek(cssScanner_1.TokenType.AtKeyword, '@if')) {
                return null;
            }
            return this._internalParseIfStatement(parseStatement);
        };
        SCSSParser.prototype._internalParseIfStatement = function (parseStatement) {
            var node = this.create(nodes.IfStatement);
            this.consumeToken(); // @if or if
            if (!node.setExpression(this._parseExpr(true))) {
                return this.finish(node, cssErrors_1.ParseError.ExpressionExpected);
            }
            this._parseBody(node, parseStatement);
            if (this.accept(cssScanner_1.TokenType.AtKeyword, '@else')) {
                if (this.peek(cssScanner_1.TokenType.Ident, 'if')) {
                    node.setElseClause(this._internalParseIfStatement(parseStatement));
                }
                else if (this.peek(cssScanner_1.TokenType.CurlyL)) {
                    var elseNode = this.create(nodes.ElseStatement);
                    this._parseBody(elseNode, parseStatement);
                    node.setElseClause(elseNode);
                }
            }
            return this.finish(node);
        };
        SCSSParser.prototype._parseForStatement = function (parseStatement) {
            if (!this.peek(cssScanner_1.TokenType.AtKeyword, '@for')) {
                return null;
            }
            var node = this.create(nodes.ForStatement);
            this.consumeToken(); // @for
            if (!node.setVariable(this._parseVariable())) {
                return this.finish(node, cssErrors_1.ParseError.VariableNameExpected, [cssScanner_1.TokenType.CurlyR]);
            }
            if (!this.accept(cssScanner_1.TokenType.Ident, 'from')) {
                return this.finish(node, scssErrors_1.SCSSParseError.FromExpected, [cssScanner_1.TokenType.CurlyR]);
            }
            if (!node.addChild(this._parseBinaryExpr())) {
                return this.finish(node, cssErrors_1.ParseError.ExpressionExpected, [cssScanner_1.TokenType.CurlyR]);
            }
            if (!this.accept(cssScanner_1.TokenType.Ident, 'to') && !this.accept(cssScanner_1.TokenType.Ident, 'through')) {
                return this.finish(node, scssErrors_1.SCSSParseError.ThroughOrToExpected, [cssScanner_1.TokenType.CurlyR]);
            }
            if (!node.addChild(this._parseBinaryExpr())) {
                return this.finish(node, cssErrors_1.ParseError.ExpressionExpected, [cssScanner_1.TokenType.CurlyR]);
            }
            return this._parseBody(node, parseStatement);
        };
        SCSSParser.prototype._parseEachStatement = function (parseStatement) {
            if (!this.peek(cssScanner_1.TokenType.AtKeyword, '@each')) {
                return null;
            }
            var node = this.create(nodes.EachStatement);
            this.consumeToken(); // @each
            if (!node.setVariable(this._parseVariable())) {
                return this.finish(node, cssErrors_1.ParseError.VariableNameExpected, [cssScanner_1.TokenType.CurlyR]);
            }
            if (!this.accept(cssScanner_1.TokenType.Ident, 'in')) {
                return this.finish(node, scssErrors_1.SCSSParseError.InExpected, [cssScanner_1.TokenType.CurlyR]);
            }
            if (!node.addChild(this._parseExpr())) {
                return this.finish(node, cssErrors_1.ParseError.ExpressionExpected, [cssScanner_1.TokenType.CurlyR]);
            }
            return this._parseBody(node, parseStatement);
        };
        SCSSParser.prototype._parseWhileStatement = function (parseStatement) {
            if (!this.peek(cssScanner_1.TokenType.AtKeyword, '@while')) {
                return null;
            }
            var node = this.create(nodes.WhileStatement);
            this.consumeToken(); // @while
            if (!node.addChild(this._parseBinaryExpr())) {
                return this.finish(node, cssErrors_1.ParseError.ExpressionExpected, [cssScanner_1.TokenType.CurlyR]);
            }
            return this._parseBody(node, parseStatement);
        };
        SCSSParser.prototype._parseFunctionBodyDeclaration = function () {
            return this._parseVariableDeclaration() || this._parseReturnStatement()
                || this._parseControlStatement(this._parseFunctionBodyDeclaration.bind(this));
        };
        SCSSParser.prototype._parseFunctionDeclaration = function () {
            if (!this.peek(cssScanner_1.TokenType.AtKeyword, '@function')) {
                return null;
            }
            var node = this.create(nodes.FunctionDeclaration);
            this.consumeToken(); // @function
            if (!node.setIdentifier(this._parseIdent([nodes.ReferenceType.Function]))) {
                return this.finish(node, cssErrors_1.ParseError.IdentifierExpected, [cssScanner_1.TokenType.CurlyR]);
            }
            if (!this.accept(cssScanner_1.TokenType.ParenthesisL)) {
                return this.finish(node, cssErrors_1.ParseError.LeftParenthesisExpected, [cssScanner_1.TokenType.CurlyR]);
            }
            if (node.getParameters().addChild(this._parseParameterDeclaration())) {
                while (this.accept(cssScanner_1.TokenType.Comma)) {
                    if (!node.getParameters().addChild(this._parseParameterDeclaration())) {
                        return this.finish(node, cssErrors_1.ParseError.VariableNameExpected);
                    }
                }
            }
            if (!this.accept(cssScanner_1.TokenType.ParenthesisR)) {
                return this.finish(node, cssErrors_1.ParseError.RightParenthesisExpected, [cssScanner_1.TokenType.CurlyR]);
            }
            return this._parseBody(node, this._parseFunctionBodyDeclaration.bind(this));
        };
        SCSSParser.prototype._parseReturnStatement = function () {
            if (!this.peek(cssScanner_1.TokenType.AtKeyword, '@return')) {
                return null;
            }
            var node = this.createNode(nodes.NodeType.ReturnStatement);
            this.consumeToken(); // @function
            if (!node.addChild(this._parseExpr())) {
                return this.finish(node, cssErrors_1.ParseError.ExpressionExpected);
            }
            return this.finish(node);
        };
        SCSSParser.prototype._parseMixinDeclaration = function () {
            if (!this.peek(cssScanner_1.TokenType.AtKeyword, '@mixin')) {
                return null;
            }
            var node = this.create(nodes.MixinDeclaration);
            this.consumeToken();
            if (!node.setIdentifier(this._parseIdent([nodes.ReferenceType.Mixin]))) {
                return this.finish(node, cssErrors_1.ParseError.IdentifierExpected, [cssScanner_1.TokenType.CurlyR]);
            }
            if (this.accept(cssScanner_1.TokenType.ParenthesisL)) {
                if (node.getParameters().addChild(this._parseParameterDeclaration())) {
                    while (this.accept(cssScanner_1.TokenType.Comma)) {
                        if (!node.getParameters().addChild(this._parseParameterDeclaration())) {
                            return this.finish(node, cssErrors_1.ParseError.VariableNameExpected);
                        }
                    }
                }
                if (!this.accept(cssScanner_1.TokenType.ParenthesisR)) {
                    return this.finish(node, cssErrors_1.ParseError.RightParenthesisExpected, [cssScanner_1.TokenType.CurlyR]);
                }
            }
            return this._parseBody(node, this._parseRuleSetDeclaration.bind(this));
        };
        SCSSParser.prototype._parseParameterDeclaration = function () {
            var node = this.create(nodes.FunctionParameter);
            if (!node.setIdentifier(this._parseVariable())) {
                return null;
            }
            if (this.accept(scssScanner.Ellipsis)) {
            }
            if (this.accept(cssScanner_1.TokenType.Colon)) {
                if (!node.setDefaultValue(this._parseExpr(true))) {
                    return this.finish(node, cssErrors_1.ParseError.VariableValueExpected, [], [cssScanner_1.TokenType.Comma, cssScanner_1.TokenType.ParenthesisR]);
                }
            }
            return this.finish(node);
        };
        SCSSParser.prototype._parseMixinContent = function () {
            if (!this.peek(cssScanner_1.TokenType.AtKeyword, '@content')) {
                return null;
            }
            var node = this.createNode(nodes.NodeType.MixinContent);
            this.consumeToken();
            return this.finish(node);
        };
        SCSSParser.prototype._parseMixinReference = function () {
            if (!this.peek(cssScanner_1.TokenType.AtKeyword, '@include')) {
                return null;
            }
            var node = this.create(nodes.MixinReference);
            this.consumeToken();
            if (!node.setIdentifier(this._parseIdent([nodes.ReferenceType.Mixin]))) {
                return this.finish(node, cssErrors_1.ParseError.IdentifierExpected, [cssScanner_1.TokenType.CurlyR]);
            }
            if (this.accept(cssScanner_1.TokenType.ParenthesisL)) {
                if (node.getArguments().addChild(this._parseFunctionArgument())) {
                    while (this.accept(cssScanner_1.TokenType.Comma)) {
                        if (!node.getArguments().addChild(this._parseFunctionArgument())) {
                            return this.finish(node, cssErrors_1.ParseError.ExpressionExpected);
                        }
                    }
                }
                if (!this.accept(cssScanner_1.TokenType.ParenthesisR)) {
                    return this.finish(node, cssErrors_1.ParseError.RightParenthesisExpected);
                }
            }
            if (this.peek(cssScanner_1.TokenType.CurlyL)) {
                var content = this.create(nodes.BodyDeclaration);
                this._parseBody(content, this._parseMixinReferenceBodyStatement.bind(this));
                node.setContent(content);
            }
            return this.finish(node);
        };
        SCSSParser.prototype._parseMixinReferenceBodyStatement = function () {
            return this._parseRuleSetDeclaration() || this._parseKeyframeSelector();
        };
        SCSSParser.prototype._parseFunctionArgument = function () {
            // [variableName ':'] expression | variableName '...'
            var node = this.create(nodes.FunctionArgument);
            var pos = this.mark();
            var argument = this._parseVariable();
            if (argument) {
                if (!this.accept(cssScanner_1.TokenType.Colon)) {
                    if (this.accept(scssScanner.Ellipsis)) {
                        node.setValue(argument);
                        return this.finish(node);
                    }
                    else {
                        this.restoreAtMark(pos);
                    }
                }
                else {
                    node.setIdentifier(argument);
                }
            }
            if (node.setValue(this._parseExpr(true))) {
                node.addChild(this._parsePrio()); // #9859
                return this.finish(node);
            }
            return null;
        };
        return SCSSParser;
    }(cssParser.Parser));
    exports.SCSSParser = SCSSParser;
});
//# sourceMappingURL=scssParser.js.map