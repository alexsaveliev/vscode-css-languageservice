(function (dependencies, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(dependencies, factory);
    }
})(["require", "exports", "./cssScanner", "./cssNodes", "./cssErrors", "../services/languageFacts"], function (require, exports) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    var cssScanner_1 = require("./cssScanner");
    var nodes = require("./cssNodes");
    var cssErrors_1 = require("./cssErrors");
    var languageFacts = require("../services/languageFacts");
    /// <summary>
    /// A parser for the css core specification. See for reference:
    /// http://www.w3.org/TR/CSS21/syndata.html#tokenization
    /// </summary>
    var Parser = (function () {
        function Parser(scnr) {
            if (scnr === void 0) { scnr = new cssScanner_1.Scanner(); }
            this.scanner = scnr;
            this.token = null;
            this.prevToken = null;
        }
        Parser.prototype.findDependencies = function (stylesheet) {
            return stylesheet.getDependencies();
        };
        Parser.prototype.peek = function (type, text, ignoreCase) {
            if (ignoreCase === void 0) { ignoreCase = true; }
            if (type !== this.token.type) {
                return false;
            }
            if (typeof text !== 'undefined') {
                if (ignoreCase) {
                    return text.toLowerCase() === this.token.text.toLowerCase();
                }
                else {
                    return text === this.token.text;
                }
            }
            return true;
        };
        Parser.prototype.peekRegExp = function (type, regEx) {
            if (type !== this.token.type) {
                return false;
            }
            return regEx.test(this.token.text);
        };
        Parser.prototype.hasWhitespace = function () {
            return this.prevToken && (this.prevToken.offset + this.prevToken.len !== this.token.offset);
        };
        Parser.prototype.consumeToken = function () {
            this.prevToken = this.token;
            this.token = this.scanner.scan();
        };
        Parser.prototype.mark = function () {
            return {
                prev: this.prevToken,
                curr: this.token,
                pos: this.scanner.pos()
            };
        };
        Parser.prototype.restoreAtMark = function (mark) {
            this.prevToken = mark.prev;
            this.token = mark.curr;
            this.scanner.goBackTo(mark.pos);
        };
        Parser.prototype.acceptOne = function (type, text, ignoreCase) {
            if (ignoreCase === void 0) { ignoreCase = true; }
            for (var i = 0; i < text.length; i++) {
                if (this.peek(type, text[i], ignoreCase)) {
                    this.consumeToken();
                    return true;
                }
            }
            return false;
        };
        Parser.prototype.accept = function (type, text, ignoreCase) {
            if (ignoreCase === void 0) { ignoreCase = true; }
            if (this.peek(type, text, ignoreCase)) {
                this.consumeToken();
                return true;
            }
            return false;
        };
        Parser.prototype.resync = function (resyncTokens, resyncStopTokens) {
            while (true) {
                if (resyncTokens && resyncTokens.indexOf(this.token.type) !== -1) {
                    this.consumeToken();
                    return true;
                }
                else if (resyncStopTokens && resyncStopTokens.indexOf(this.token.type) !== -1) {
                    return true;
                }
                else {
                    if (this.token.type === cssScanner_1.TokenType.EOF) {
                        return false;
                    }
                    this.token = this.scanner.scan();
                }
            }
        };
        Parser.prototype.createNode = function (nodeType) {
            return new nodes.Node(this.token.offset, this.token.len, nodeType);
        };
        Parser.prototype.create = function (ctor) {
            var obj = Object.create(ctor.prototype);
            ctor.apply(obj, [this.token.offset, this.token.len]);
            return obj;
        };
        Parser.prototype.finish = function (node, error, resyncTokens, resyncStopTokens) {
            // parseNumeric misuses error for boolean flagging (however the real error mustn't be a false)
            // + nodelist offsets mustn't be modified, because there is a offset hack in rulesets for smartselection
            if (!(node instanceof nodes.Nodelist)) {
                if (error) {
                    this.markError(node, error, resyncTokens, resyncStopTokens);
                }
                // set the node end position
                if (this.prevToken !== null) {
                    // length with more elements belonging together
                    var prevEnd = this.prevToken.offset + this.prevToken.len;
                    node.length = prevEnd > node.offset ? prevEnd - node.offset : 0; // offset is taken from current token, end from previous: Use 0 for empty nodes
                }
            }
            return node;
        };
        Parser.prototype.markError = function (node, error, resyncTokens, resyncStopTokens) {
            if (this.token !== this.lastErrorToken) {
                node.addIssue(new nodes.Marker(node, error, nodes.Level.Error, null, this.token.offset, this.token.len));
                this.lastErrorToken = this.token;
            }
            if (resyncTokens || resyncStopTokens) {
                this.resync(resyncTokens, resyncStopTokens);
            }
        };
        Parser.prototype.parseStylesheet = function (textDocument) {
            var versionId = textDocument.version;
            var textProvider = function (offset, length) {
                if (textDocument.version !== versionId) {
                    throw new Error('Underlying model has changed, AST is no longer valid');
                }
                return textDocument.getText().substr(offset, length);
            };
            return this.internalParse(textDocument.getText(), this._parseStylesheet, textProvider);
        };
        Parser.prototype.internalParse = function (input, parseFunc, textProvider) {
            this.scanner.setSource(input);
            this.token = this.scanner.scan();
            var node = parseFunc.bind(this)();
            if (node) {
                if (textProvider) {
                    node.textProvider = textProvider;
                }
                else {
                    node.textProvider = function (offset, length) { return input.substr(offset, length); };
                }
            }
            return node;
        };
        Parser.prototype._parseStylesheet = function () {
            var node = this.create(nodes.Stylesheet);
            node.addChild(this._parseCharset());
            var inRecovery = false;
            do {
                var hasMatch = false;
                do {
                    hasMatch = false;
                    var statement = this._parseStylesheetStatement();
                    if (statement) {
                        node.addChild(statement);
                        (function parseChildNodes(sheet, node) {
                            if (!node) {
                                return;
                            }
                            if (node.type === nodes.NodeType.Import) {
                                sheet.addDependencies(node.getSources());
                                return;
                            }
                            node.getChildren().map(function (node) { return parseChildNodes(sheet, node); });
                        })(node, statement);
                        hasMatch = true;
                        inRecovery = false;
                        if (!this.peek(cssScanner_1.TokenType.EOF) && this._needsSemicolonAfter(statement) && !this.accept(cssScanner_1.TokenType.SemiColon)) {
                            this.markError(node, cssErrors_1.ParseError.SemiColonExpected);
                        }
                    }
                    while (this.accept(cssScanner_1.TokenType.SemiColon) || this.accept(cssScanner_1.TokenType.CDO) || this.accept(cssScanner_1.TokenType.CDC)) {
                        // accept empty statements
                        hasMatch = true;
                        inRecovery = false;
                    }
                } while (hasMatch);
                if (this.peek(cssScanner_1.TokenType.EOF)) {
                    break;
                }
                if (!inRecovery) {
                    if (this.peek(cssScanner_1.TokenType.AtKeyword)) {
                        this.markError(node, cssErrors_1.ParseError.UnknownAtRule);
                    }
                    else {
                        this.markError(node, cssErrors_1.ParseError.RuleOrSelectorExpected);
                    }
                    inRecovery = true;
                }
                this.consumeToken();
            } while (!this.peek(cssScanner_1.TokenType.EOF));
            return this.finish(node);
        };
        Parser.prototype._parseStylesheetStatement = function () {
            return this._parseRuleset(false)
                || this._parseImport()
                || this._parseMedia()
                || this._parsePage()
                || this._parseFontFace()
                || this._parseKeyframe()
                || this._parseViewPort()
                || this._parseNamespace()
                || this._parseDocument();
        };
        Parser.prototype._tryParseRuleset = function (isNested) {
            var mark = this.mark();
            if (this._parseSelector(isNested)) {
                while (this.accept(cssScanner_1.TokenType.Comma) && this._parseSelector(isNested)) {
                }
                if (this.accept(cssScanner_1.TokenType.CurlyL)) {
                    this.restoreAtMark(mark);
                    return this._parseRuleset(isNested);
                }
            }
            this.restoreAtMark(mark);
            return null;
        };
        Parser.prototype._parseRuleset = function (isNested) {
            if (isNested === void 0) { isNested = false; }
            var node = this.create(nodes.RuleSet);
            if (!node.getSelectors().addChild(this._parseSelector(isNested))) {
                return null;
            }
            while (this.accept(cssScanner_1.TokenType.Comma) && node.getSelectors().addChild(this._parseSelector(isNested))) {
            }
            return this._parseBody(node, this._parseRuleSetDeclaration.bind(this));
        };
        Parser.prototype._parseRuleSetDeclaration = function () {
            return this._parseAtApply() || this._tryParseCustomPropertyDeclaration() || this._parseDeclaration();
        };
        /**
         * Parses declarations like:
         *   @apply --my-theme;
         *
         * Follows https://tabatkins.github.io/specs/css-apply-rule/#using
         */
        Parser.prototype._parseAtApply = function () {
            if (!this.peek(cssScanner_1.TokenType.AtKeyword, '@apply')) {
                return null;
            }
            var node = this.create(nodes.AtApplyRule);
            this.consumeToken();
            if (!node.setIdentifier(this._parseIdent([nodes.ReferenceType.Variable]))) {
                return this.finish(node, cssErrors_1.ParseError.IdentifierExpected);
            }
            return this.finish(node);
        };
        Parser.prototype._needsSemicolonAfter = function (node) {
            switch (node.type) {
                case nodes.NodeType.Keyframe:
                case nodes.NodeType.ViewPort:
                case nodes.NodeType.Media:
                case nodes.NodeType.Ruleset:
                case nodes.NodeType.Namespace:
                case nodes.NodeType.If:
                case nodes.NodeType.For:
                case nodes.NodeType.Each:
                case nodes.NodeType.While:
                case nodes.NodeType.MixinDeclaration:
                case nodes.NodeType.FunctionDeclaration:
                    return false;
                case nodes.NodeType.VariableDeclaration:
                case nodes.NodeType.ExtendsReference:
                case nodes.NodeType.MixinContent:
                case nodes.NodeType.ReturnStatement:
                case nodes.NodeType.MediaQuery:
                case nodes.NodeType.Debug:
                case nodes.NodeType.Import:
                case nodes.NodeType.AtApplyRule:
                case nodes.NodeType.CustomPropertyDeclaration:
                    return true;
                case nodes.NodeType.MixinReference:
                    return !node.getContent();
                case nodes.NodeType.Declaration:
                    return !node.getNestedProperties();
            }
            return false;
        };
        Parser.prototype._parseDeclarations = function (parseDeclaration) {
            var node = this.create(nodes.Declarations);
            if (!this.accept(cssScanner_1.TokenType.CurlyL)) {
                return null;
            }
            var decl = parseDeclaration();
            while (node.addChild(decl)) {
                if (this.peek(cssScanner_1.TokenType.CurlyR)) {
                    break;
                }
                if (this._needsSemicolonAfter(decl) && !this.accept(cssScanner_1.TokenType.SemiColon)) {
                    return this.finish(node, cssErrors_1.ParseError.SemiColonExpected, [cssScanner_1.TokenType.SemiColon, cssScanner_1.TokenType.CurlyR]);
                }
                while (this.accept(cssScanner_1.TokenType.SemiColon)) {
                }
                decl = parseDeclaration();
            }
            if (!this.accept(cssScanner_1.TokenType.CurlyR)) {
                return this.finish(node, cssErrors_1.ParseError.RightCurlyExpected, [cssScanner_1.TokenType.CurlyR, cssScanner_1.TokenType.SemiColon]);
            }
            return this.finish(node);
        };
        Parser.prototype._parseBody = function (node, parseDeclaration) {
            if (!node.setDeclarations(this._parseDeclarations(parseDeclaration))) {
                return this.finish(node, cssErrors_1.ParseError.LeftCurlyExpected, [cssScanner_1.TokenType.CurlyR, cssScanner_1.TokenType.SemiColon]);
            }
            return this.finish(node);
        };
        Parser.prototype._parseSelector = function (isNested) {
            var node = this.create(nodes.Selector);
            var hasContent = false;
            if (isNested) {
                // nested selectors can start with a combinator
                hasContent = node.addChild(this._parseCombinator());
            }
            while (node.addChild(this._parseSimpleSelector())) {
                hasContent = true;
                node.addChild(this._parseCombinator()); // optional
            }
            return hasContent ? this.finish(node) : null;
        };
        Parser.prototype._parseDeclaration = function (resyncStopTokens) {
            var node = this.create(nodes.Declaration);
            if (!node.setProperty(this._parseProperty())) {
                return null;
            }
            if (!this.accept(cssScanner_1.TokenType.Colon)) {
                return this.finish(node, cssErrors_1.ParseError.ColonExpected, [cssScanner_1.TokenType.Colon], resyncStopTokens);
            }
            node.colonPosition = this.prevToken.offset;
            if (!node.setValue(this._parseExpr())) {
                return this.finish(node, cssErrors_1.ParseError.PropertyValueExpected);
            }
            node.addChild(this._parsePrio());
            if (this.peek(cssScanner_1.TokenType.SemiColon)) {
                node.semicolonPosition = this.token.offset; // not part of the declaration, but useful information for code assist
            }
            return this.finish(node);
        };
        Parser.prototype._tryParseCustomPropertyDeclaration = function () {
            if (!this.peekRegExp(cssScanner_1.TokenType.Ident, /^--/)) {
                return null;
            }
            var node = this.create(nodes.CustomPropertyDeclaration);
            if (!node.setProperty(this._parseProperty())) {
                return null;
            }
            if (!this.accept(cssScanner_1.TokenType.Colon)) {
                return this.finish(node, cssErrors_1.ParseError.ColonExpected, [cssScanner_1.TokenType.Colon]);
            }
            node.colonPosition = this.prevToken.offset;
            var mark = this.mark();
            if (this.peek(cssScanner_1.TokenType.CurlyL)) {
                // try to parse it as nested declaration
                var propertySet = this.create(nodes.CustomPropertySet);
                var declarations = this._parseDeclarations(this._parseRuleSetDeclaration.bind(this));
                if (propertySet.setDeclarations(declarations) && !declarations.isErroneous(true)) {
                    propertySet.addChild(this._parsePrio());
                    if (this.peek(cssScanner_1.TokenType.SemiColon)) {
                        this.finish(propertySet);
                        node.setPropertySet(propertySet);
                        node.semicolonPosition = this.token.offset; // not part of the declaration, but useful information for code assist
                        return this.finish(node);
                    }
                }
                this.restoreAtMark(mark);
            }
            // try tp parse as expression
            var expression = this._parseExpr();
            if (expression && !expression.isErroneous(true)) {
                this._parsePrio();
                if (this.peek(cssScanner_1.TokenType.SemiColon)) {
                    node.setValue(expression);
                    node.semicolonPosition = this.token.offset; // not part of the declaration, but useful information for code assist
                    return this.finish(node);
                }
            }
            this.restoreAtMark(mark);
            node.addChild(this._parseCustomPropertyValue());
            node.addChild(this._parsePrio());
            if (this.token.offset === node.colonPosition + 1) {
                return this.finish(node, cssErrors_1.ParseError.PropertyValueExpected);
            }
            return this.finish(node);
        };
        /**
         * Parse custom property values.
         *
         * Based on https://www.w3.org/TR/css-variables/#syntax
         *
         * This code is somewhat unusual, as the allowed syntax is incredibly broad,
         * parsing almost any sequence of tokens, save for a small set of exceptions.
         * Unbalanced delimitors, invalid tokens, and declaration
         * terminators like semicolons and !important directives (when not inside
         * of delimitors).
         */
        Parser.prototype._parseCustomPropertyValue = function () {
            var node = this.create(nodes.Node);
            var isTopLevel = function () { return curlyDepth === 0 && parensDepth === 0 && bracketsDepth === 0; };
            var curlyDepth = 0;
            var parensDepth = 0;
            var bracketsDepth = 0;
            done: while (true) {
                switch (this.token.type) {
                    case cssScanner_1.TokenType.SemiColon:
                        // A semicolon only ends things if we're not inside a delimitor.
                        if (isTopLevel()) {
                            break done;
                        }
                        break;
                    case cssScanner_1.TokenType.Exclamation:
                        // An exclamation ends the value if we're not inside delims.
                        if (isTopLevel()) {
                            break done;
                        }
                        break;
                    case cssScanner_1.TokenType.CurlyL:
                        curlyDepth++;
                        break;
                    case cssScanner_1.TokenType.CurlyR:
                        curlyDepth--;
                        if (curlyDepth < 0) {
                            // The property value has been terminated without a semicolon, and
                            // this is the last declaration in the ruleset.
                            if (parensDepth === 0 && bracketsDepth === 0) {
                                break done;
                            }
                            return this.finish(node, cssErrors_1.ParseError.LeftCurlyExpected);
                        }
                        break;
                    case cssScanner_1.TokenType.ParenthesisL:
                        parensDepth++;
                        break;
                    case cssScanner_1.TokenType.ParenthesisR:
                        parensDepth--;
                        if (parensDepth < 0) {
                            return this.finish(node, cssErrors_1.ParseError.LeftParenthesisExpected);
                        }
                        break;
                    case cssScanner_1.TokenType.BracketL:
                        bracketsDepth++;
                        break;
                    case cssScanner_1.TokenType.BracketR:
                        bracketsDepth--;
                        if (bracketsDepth < 0) {
                            return this.finish(node, cssErrors_1.ParseError.LeftSquareBracketExpected);
                        }
                        break;
                    case cssScanner_1.TokenType.BadString: // fall through
                    case cssScanner_1.TokenType.BadUri:
                        break done;
                    case cssScanner_1.TokenType.EOF:
                        // We shouldn't have reached the end of input, something is
                        // unterminated.
                        var error = cssErrors_1.ParseError.RightCurlyExpected;
                        if (bracketsDepth > 0) {
                            error = cssErrors_1.ParseError.RightSquareBracketExpected;
                        }
                        else if (parensDepth > 0) {
                            error = cssErrors_1.ParseError.RightParenthesisExpected;
                        }
                        return this.finish(node, error);
                }
                this.consumeToken();
            }
            return this.finish(node);
        };
        Parser.prototype._tryToParseDeclaration = function () {
            var mark = this.mark();
            if (this._parseProperty() && this.accept(cssScanner_1.TokenType.Colon)) {
                // looks like a declaration, go ahead
                this.restoreAtMark(mark);
                return this._parseDeclaration();
            }
            this.restoreAtMark(mark);
            return null;
        };
        Parser.prototype._parseProperty = function () {
            var node = this.create(nodes.Property);
            var mark = this.mark();
            if (this.accept(cssScanner_1.TokenType.Delim, '*') || this.accept(cssScanner_1.TokenType.Delim, '_')) {
                // support for  IE 5.x, 6 and 7 star hack: see http://en.wikipedia.org/wiki/CSS_filter#Star_hack
                if (this.hasWhitespace()) {
                    this.restoreAtMark(mark);
                    return null;
                }
            }
            if (node.setIdentifier(this._parsePropertyIdentifier())) {
                return this.finish(node);
            }
            return null;
        };
        Parser.prototype._parsePropertyIdentifier = function () {
            return this._parseIdent();
        };
        Parser.prototype._parseCharset = function () {
            var node = this.create(nodes.Node);
            if (!this.accept(cssScanner_1.TokenType.Charset)) {
                return null;
            }
            if (!this.accept(cssScanner_1.TokenType.String)) {
                return this.finish(node, cssErrors_1.ParseError.IdentifierExpected);
            }
            if (!this.accept(cssScanner_1.TokenType.SemiColon)) {
                return this.finish(node, cssErrors_1.ParseError.SemiColonExpected);
            }
            return this.finish(node);
        };
        Parser.prototype._parseImport = function () {
            var node = this.create(nodes.Import);
            if (!this.accept(cssScanner_1.TokenType.AtKeyword, '@import')) {
                return null;
            }
            if (!this.accept(cssScanner_1.TokenType.URI) && !this.accept(cssScanner_1.TokenType.String)) {
                return this.finish(node, cssErrors_1.ParseError.URIOrStringExpected);
            }
            node.addSource(new nodes.ImportSource(this.prevToken.offset, this.prevToken.len));
            node.setMedialist(this._parseMediaList());
            return this.finish(node);
        };
        Parser.prototype._parseNamespace = function () {
            // http://www.w3.org/TR/css3-namespace/
            // namespace  : NAMESPACE_SYM S* [IDENT S*]? [STRING|URI] S* ';' S*
            var node = this.create(nodes.Namespace);
            if (!this.accept(cssScanner_1.TokenType.AtKeyword, '@namespace')) {
                return null;
            }
            node.addChild(this._parseIdent()); // optional prefix
            if (!this.accept(cssScanner_1.TokenType.URI) && !this.accept(cssScanner_1.TokenType.String)) {
                return this.finish(node, cssErrors_1.ParseError.URIExpected, [cssScanner_1.TokenType.SemiColon]);
            }
            if (!this.accept(cssScanner_1.TokenType.SemiColon)) {
                return this.finish(node, cssErrors_1.ParseError.SemiColonExpected);
            }
            return this.finish(node);
        };
        Parser.prototype._parseFontFace = function () {
            if (!this.peek(cssScanner_1.TokenType.AtKeyword, '@font-face')) {
                return null;
            }
            var node = this.create(nodes.FontFace);
            this.consumeToken(); // @font-face
            return this._parseBody(node, this._parseRuleSetDeclaration.bind(this));
        };
        Parser.prototype._parseViewPort = function () {
            if (!this.peek(cssScanner_1.TokenType.AtKeyword, '@-ms-viewport') &&
                !this.peek(cssScanner_1.TokenType.AtKeyword, '@-o-viewport') &&
                !this.peek(cssScanner_1.TokenType.AtKeyword, '@viewport')) {
                return null;
            }
            var node = this.create(nodes.ViewPort);
            this.consumeToken(); // @-ms-viewport
            return this._parseBody(node, this._parseRuleSetDeclaration.bind(this));
        };
        Parser.prototype._parseKeyframe = function () {
            var node = this.create(nodes.Keyframe);
            var atNode = this.create(nodes.Node);
            if (!this.accept(cssScanner_1.TokenType.AtKeyword, '@keyframes') &&
                !this.accept(cssScanner_1.TokenType.AtKeyword, '@-webkit-keyframes') &&
                !this.accept(cssScanner_1.TokenType.AtKeyword, '@-ms-keyframes') &&
                !this.accept(cssScanner_1.TokenType.AtKeyword, '@-moz-keyframes') &&
                !this.accept(cssScanner_1.TokenType.AtKeyword, '@-o-keyframes')) {
                return null;
            }
            node.setKeyword(this.finish(atNode));
            if (atNode.getText() === '@-ms-keyframes') {
                this.markError(atNode, cssErrors_1.ParseError.UnknownKeyword);
            }
            if (!node.setIdentifier(this._parseIdent([nodes.ReferenceType.Keyframe]))) {
                return this.finish(node, cssErrors_1.ParseError.IdentifierExpected, [cssScanner_1.TokenType.CurlyR]);
            }
            return this._parseBody(node, this._parseKeyframeSelector.bind(this));
        };
        Parser.prototype._parseKeyframeSelector = function () {
            var node = this.create(nodes.KeyframeSelector);
            if (!node.addChild(this._parseIdent()) && !this.accept(cssScanner_1.TokenType.Percentage)) {
                return null;
            }
            while (this.accept(cssScanner_1.TokenType.Comma)) {
                if (!node.addChild(this._parseIdent()) && !this.accept(cssScanner_1.TokenType.Percentage)) {
                    return this.finish(node, cssErrors_1.ParseError.PercentageExpected);
                }
            }
            return this._parseBody(node, this._parseRuleSetDeclaration.bind(this));
        };
        Parser.prototype._parseMediaDeclaration = function () {
            return this._tryParseRuleset(false)
                || this._tryToParseDeclaration()
                || this._parseStylesheetStatement();
        };
        Parser.prototype._parseMedia = function () {
            // MEDIA_SYM S* media_query_list '{' S* ruleset* '}' S*
            // media_query_list : S* [media_query [ ',' S* media_query ]* ]?
            var node = this.create(nodes.Media);
            if (!this.accept(cssScanner_1.TokenType.AtKeyword, '@media')) {
                return null;
            }
            if (!node.addChild(this._parseMediaQuery([cssScanner_1.TokenType.CurlyL]))) {
                return this.finish(node, cssErrors_1.ParseError.IdentifierExpected);
            }
            while (this.accept(cssScanner_1.TokenType.Comma)) {
                if (!node.addChild(this._parseMediaQuery([cssScanner_1.TokenType.CurlyL]))) {
                    return this.finish(node, cssErrors_1.ParseError.IdentifierExpected);
                }
            }
            return this._parseBody(node, this._parseMediaDeclaration.bind(this));
        };
        Parser.prototype._parseMediaQuery = function (resyncStopToken) {
            // http://www.w3.org/TR/css3-mediaqueries/
            // media_query : [ONLY | NOT]? S* IDENT S* [ AND S* expression ]* | expression [ AND S* expression ]*
            // expression : '(' S* IDENT S* [ ':' S* expr ]? ')' S*
            var node = this.create(nodes.MediaQuery);
            var parseExpression = true;
            var hasContent = false;
            if (!this.peek(cssScanner_1.TokenType.ParenthesisL)) {
                if (this.accept(cssScanner_1.TokenType.Ident, 'only', true) || this.accept(cssScanner_1.TokenType.Ident, 'not', true)) {
                }
                if (!node.addChild(this._parseIdent())) {
                    return null;
                }
                hasContent = true;
                parseExpression = this.accept(cssScanner_1.TokenType.Ident, 'and', true);
            }
            while (parseExpression) {
                if (!this.accept(cssScanner_1.TokenType.ParenthesisL)) {
                    if (hasContent) {
                        return this.finish(node, cssErrors_1.ParseError.LeftParenthesisExpected, [], resyncStopToken);
                    }
                    return null;
                }
                if (!node.addChild(this._parseMediaFeatureName())) {
                    return this.finish(node, cssErrors_1.ParseError.IdentifierExpected, [], resyncStopToken);
                }
                if (this.accept(cssScanner_1.TokenType.Colon)) {
                    if (!node.addChild(this._parseExpr())) {
                        return this.finish(node, cssErrors_1.ParseError.TermExpected, [], resyncStopToken);
                    }
                }
                if (!this.accept(cssScanner_1.TokenType.ParenthesisR)) {
                    return this.finish(node, cssErrors_1.ParseError.RightParenthesisExpected, [], resyncStopToken);
                }
                parseExpression = this.accept(cssScanner_1.TokenType.Ident, 'and', true);
            }
            return node;
        };
        Parser.prototype._parseMediaFeatureName = function () {
            return this._parseIdent();
        };
        Parser.prototype._parseMediaList = function () {
            var node = this.create(nodes.Medialist);
            if (node.getMediums().addChild(this._parseMedium())) {
                while (this.accept(cssScanner_1.TokenType.Comma)) {
                    if (!node.getMediums().addChild(this._parseMedium())) {
                        return this.finish(node, cssErrors_1.ParseError.IdentifierExpected);
                    }
                }
                return this.finish(node);
            }
            return null;
        };
        Parser.prototype._parseMedium = function () {
            var node = this.create(nodes.Node);
            if (node.addChild(this._parseIdent())) {
                return this.finish(node);
            }
            else {
                return null;
            }
        };
        Parser.prototype._parsePageDeclaration = function () {
            return this._parsePageMarginBox() || this._parseRuleSetDeclaration();
        };
        Parser.prototype._parsePage = function () {
            // http://www.w3.org/TR/css3-page/
            // page_rule : PAGE_SYM S* page_selector_list '{' S* page_body '}' S*
            // page_body :  /* Can be empty */ declaration? [ ';' S* page_body ]? | page_margin_box page_body
            var node = this.create(nodes.Page);
            if (!this.accept(cssScanner_1.TokenType.AtKeyword, '@Page')) {
                return null;
            }
            if (node.addChild(this._parsePageSelector())) {
                while (this.accept(cssScanner_1.TokenType.Comma)) {
                    if (!node.addChild(this._parsePageSelector())) {
                        return this.finish(node, cssErrors_1.ParseError.IdentifierExpected);
                    }
                }
            }
            return this._parseBody(node, this._parsePageDeclaration.bind(this));
        };
        Parser.prototype._parsePageMarginBox = function () {
            // page_margin_box :  margin_sym S* '{' S* declaration? [ ';' S* declaration? ]* '}' S*
            var node = this.create(nodes.PageBoxMarginBox);
            if (!this.peek(cssScanner_1.TokenType.AtKeyword)) {
                return null;
            }
            if (!this.acceptOne(cssScanner_1.TokenType.AtKeyword, languageFacts.getPageBoxDirectives())) {
                this.markError(node, cssErrors_1.ParseError.UnknownAtRule, [], [cssScanner_1.TokenType.CurlyL]);
            }
            return this._parseBody(node, this._parseRuleSetDeclaration.bind(this));
        };
        Parser.prototype._parsePageSelector = function () {
            // page_selector : pseudo_page+ | IDENT pseudo_page*
            // pseudo_page :  ':' [ "left" | "right" | "first" | "blank" ];
            var node = this.create(nodes.Node);
            if (!this.peek(cssScanner_1.TokenType.Ident) && !this.peek(cssScanner_1.TokenType.Colon)) {
                return null;
            }
            node.addChild(this._parseIdent()); // optional ident
            if (this.accept(cssScanner_1.TokenType.Colon)) {
                if (!node.addChild(this._parseIdent())) {
                    return this.finish(node, cssErrors_1.ParseError.IdentifierExpected);
                }
            }
            return this.finish(node);
        };
        Parser.prototype._parseDocument = function () {
            // -moz-document is experimental but has been pushed to css4
            var node = this.create(nodes.Document);
            if (!this.accept(cssScanner_1.TokenType.AtKeyword, '@-moz-document')) {
                return null;
            }
            this.resync([], [cssScanner_1.TokenType.CurlyL]); // ignore all the rules
            return this._parseBody(node, this._parseStylesheetStatement.bind(this));
        };
        Parser.prototype._parseOperator = function () {
            // these are operators for binary expressions
            var node = this.createNode(nodes.NodeType.Operator);
            if (this.accept(cssScanner_1.TokenType.Delim, '/') ||
                this.accept(cssScanner_1.TokenType.Delim, '*') ||
                this.accept(cssScanner_1.TokenType.Delim, '+') ||
                this.accept(cssScanner_1.TokenType.Delim, '-') ||
                this.accept(cssScanner_1.TokenType.Dashmatch) ||
                this.accept(cssScanner_1.TokenType.Includes) ||
                this.accept(cssScanner_1.TokenType.SubstringOperator) ||
                this.accept(cssScanner_1.TokenType.PrefixOperator) ||
                this.accept(cssScanner_1.TokenType.SuffixOperator) ||
                this.accept(cssScanner_1.TokenType.Delim, '=')) {
                return this.finish(node);
            }
            else {
                return null;
            }
        };
        Parser.prototype._parseUnaryOperator = function () {
            var node = this.create(nodes.Node);
            if (this.accept(cssScanner_1.TokenType.Delim, '+') || this.accept(cssScanner_1.TokenType.Delim, '-')) {
                return this.finish(node);
            }
            else {
                return null;
            }
        };
        Parser.prototype._parseCombinator = function () {
            var node = this.create(nodes.Node);
            if (this.accept(cssScanner_1.TokenType.Delim, '>')) {
                node.type = nodes.NodeType.SelectorCombinatorParent;
                return this.finish(node);
            }
            else if (this.accept(cssScanner_1.TokenType.Delim, '+')) {
                node.type = nodes.NodeType.SelectorCombinatorSibling;
                return this.finish(node);
            }
            else if (this.accept(cssScanner_1.TokenType.Delim, '~')) {
                node.type = nodes.NodeType.SelectorCombinatorAllSiblings;
                return this.finish(node);
            }
            else {
                return null;
            }
        };
        Parser.prototype._parseSimpleSelector = function () {
            // simple_selector
            //  : element_name [ HASH | class | attrib | pseudo ]* | [ HASH | class | attrib | pseudo ]+ ;
            var node = this.create(nodes.SimpleSelector);
            var c = 0;
            if (node.addChild(this._parseElementName())) {
                c++;
            }
            while ((c === 0 || !this.hasWhitespace()) && node.addChild(this._parseSimpleSelectorBody())) {
                c++;
            }
            return c > 0 ? this.finish(node) : null;
        };
        Parser.prototype._parseSimpleSelectorBody = function () {
            return this._parsePseudo() || this._parseHash() || this._parseClass() || this._parseAttrib();
        };
        Parser.prototype._parseSelectorIdent = function () {
            return this._parseIdent();
        };
        Parser.prototype._parseHash = function () {
            if (!this.peek(cssScanner_1.TokenType.Hash) && !this.peek(cssScanner_1.TokenType.Delim, '#')) {
                return null;
            }
            var node = this.createNode(nodes.NodeType.IdentifierSelector);
            if (this.accept(cssScanner_1.TokenType.Delim, '#')) {
                if (this.hasWhitespace() || !node.addChild(this._parseSelectorIdent())) {
                    return this.finish(node, cssErrors_1.ParseError.IdentifierExpected);
                }
            }
            else {
                this.consumeToken(); // TokenType.Hash
            }
            return this.finish(node);
        };
        Parser.prototype._parseClass = function () {
            // class: '.' IDENT ;
            if (!this.peek(cssScanner_1.TokenType.Delim, '.')) {
                return null;
            }
            var node = this.createNode(nodes.NodeType.ClassSelector);
            this.consumeToken(); // '.'
            if (this.hasWhitespace() || !node.addChild(this._parseSelectorIdent())) {
                return this.finish(node, cssErrors_1.ParseError.IdentifierExpected);
            }
            return this.finish(node);
        };
        Parser.prototype._parseElementName = function () {
            // element_name: IDENT | '*';
            var node = this.createNode(nodes.NodeType.ElementNameSelector);
            if (node.addChild(this._parseSelectorIdent()) || this.accept(cssScanner_1.TokenType.Delim, '*')) {
                return this.finish(node);
            }
            return null;
        };
        Parser.prototype._parseAttrib = function () {
            // attrib : '[' S* IDENT S* [ [ '=' | INCLUDES | DASHMATCH ] S*   [ IDENT | STRING ] S* ]? ']'
            if (!this.peek(cssScanner_1.TokenType.BracketL)) {
                return null;
            }
            var node = this.createNode(nodes.NodeType.AttributeSelector);
            this.consumeToken(); // BracketL
            if (!node.addChild(this._parseBinaryExpr())) {
            }
            if (!this.accept(cssScanner_1.TokenType.BracketR)) {
                return this.finish(node, cssErrors_1.ParseError.RightSquareBracketExpected);
            }
            return this.finish(node);
        };
        Parser.prototype._parsePseudo = function () {
            // pseudo: ':' [ IDENT | FUNCTION S* [IDENT S*]? ')' ]
            if (!this.peek(cssScanner_1.TokenType.Colon)) {
                return null;
            }
            var pos = this.mark();
            var node = this.createNode(nodes.NodeType.PseudoSelector);
            this.consumeToken(); // Colon
            if (!this.hasWhitespace()) {
                // optional, support ::
                if (this.accept(cssScanner_1.TokenType.Colon) && this.hasWhitespace()) {
                    return this.finish(node, cssErrors_1.ParseError.IdentifierExpected);
                }
                if (!node.addChild(this._parseIdent())) {
                    return this.finish(node, cssErrors_1.ParseError.IdentifierExpected);
                }
                if (!this.hasWhitespace() && this.accept(cssScanner_1.TokenType.ParenthesisL)) {
                    node.addChild(this._parseBinaryExpr() || this._parseSimpleSelector());
                    if (!this.accept(cssScanner_1.TokenType.ParenthesisR)) {
                        return this.finish(node, cssErrors_1.ParseError.RightParenthesisExpected);
                    }
                }
                return this.finish(node);
            }
            this.restoreAtMark(pos);
            return null;
        };
        Parser.prototype._parsePrio = function () {
            if (!this.peek(cssScanner_1.TokenType.Exclamation)) {
                return null;
            }
            var node = this.createNode(nodes.NodeType.Prio);
            if (this.accept(cssScanner_1.TokenType.Exclamation) && this.accept(cssScanner_1.TokenType.Ident, 'important', true)) {
                return this.finish(node);
            }
            return null;
        };
        Parser.prototype._parseExpr = function (stopOnComma) {
            if (stopOnComma === void 0) { stopOnComma = false; }
            var node = this.create(nodes.Expression);
            if (!node.addChild(this._parseBinaryExpr())) {
                return null;
            }
            while (true) {
                if (this.peek(cssScanner_1.TokenType.Comma)) {
                    if (stopOnComma) {
                        return this.finish(node);
                    }
                    this.consumeToken();
                }
                if (!node.addChild(this._parseBinaryExpr())) {
                    break;
                }
            }
            return this.finish(node);
        };
        Parser.prototype._parseBinaryExpr = function (preparsedLeft, preparsedOper) {
            var node = this.create(nodes.BinaryExpression);
            if (!node.setLeft((preparsedLeft || this._parseTerm()))) {
                return null;
            }
            if (!node.setOperator(preparsedOper || this._parseOperator())) {
                return this.finish(node);
            }
            if (!node.setRight(this._parseTerm())) {
                return this.finish(node, cssErrors_1.ParseError.TermExpected);
            }
            // things needed for multiple binary expressions
            node = this.finish(node);
            var operator = this._parseOperator();
            if (operator) {
                node = this._parseBinaryExpr(node, operator);
            }
            return this.finish(node);
        };
        Parser.prototype._parseTerm = function () {
            var node = this.create(nodes.Term);
            node.setOperator(this._parseUnaryOperator()); // optional
            if (node.setExpression(this._parseFunction()) ||
                node.setExpression(this._parseIdent()) ||
                node.setExpression(this._parseURILiteral()) ||
                node.setExpression(this._parseStringLiteral()) ||
                node.setExpression(this._parseNumeric()) ||
                node.setExpression(this._parseHexColor()) ||
                node.setExpression(this._parseOperation())) {
                return this.finish(node);
            }
            return null;
        };
        Parser.prototype._parseOperation = function () {
            var node = this.create(nodes.Node);
            if (!this.accept(cssScanner_1.TokenType.ParenthesisL)) {
                return null;
            }
            node.addChild(this._parseExpr());
            if (!this.accept(cssScanner_1.TokenType.ParenthesisR)) {
                return this.finish(node, cssErrors_1.ParseError.RightParenthesisExpected);
            }
            return this.finish(node);
        };
        Parser.prototype._parseNumeric = function () {
            var node = this.create(nodes.NumericValue);
            if (this.accept(cssScanner_1.TokenType.Num) ||
                this.accept(cssScanner_1.TokenType.Percentage) ||
                this.accept(cssScanner_1.TokenType.Resolution) ||
                this.accept(cssScanner_1.TokenType.Length) ||
                this.accept(cssScanner_1.TokenType.EMS) ||
                this.accept(cssScanner_1.TokenType.EXS) ||
                this.accept(cssScanner_1.TokenType.Angle) ||
                this.accept(cssScanner_1.TokenType.Time) ||
                this.accept(cssScanner_1.TokenType.Dimension) ||
                this.accept(cssScanner_1.TokenType.Freq)) {
                return this.finish(node);
            }
            return null;
        };
        Parser.prototype._parseStringLiteral = function () {
            var node = this.createNode(nodes.NodeType.StringLiteral);
            if (this.accept(cssScanner_1.TokenType.String) || this.accept(cssScanner_1.TokenType.BadString)) {
                return this.finish(node);
            }
            return null;
        };
        Parser.prototype._parseURILiteral = function () {
            var node = this.createNode(nodes.NodeType.URILiteral);
            if (this.accept(cssScanner_1.TokenType.URI) || this.accept(cssScanner_1.TokenType.BadUri)) {
                return this.finish(node);
            }
            return null;
        };
        Parser.prototype._parseIdent = function (referenceTypes) {
            var node = this.create(nodes.Identifier);
            if (referenceTypes) {
                node.referenceTypes = referenceTypes;
            }
            node.isCustomProperty = this.peekRegExp(cssScanner_1.TokenType.Ident, /^--/);
            if (this.accept(cssScanner_1.TokenType.Ident)) {
                return this.finish(node);
            }
            return null;
        };
        Parser.prototype._parseFunction = function () {
            var pos = this.mark();
            var node = this.create(nodes.Function);
            if (!node.setIdentifier(this._parseFunctionIdentifier())) {
                return null;
            }
            if (this.hasWhitespace() || !this.accept(cssScanner_1.TokenType.ParenthesisL)) {
                this.restoreAtMark(pos);
                return null;
            }
            if (node.getArguments().addChild(this._parseFunctionArgument())) {
                while (this.accept(cssScanner_1.TokenType.Comma)) {
                    if (!node.getArguments().addChild(this._parseFunctionArgument())) {
                        this.markError(node, cssErrors_1.ParseError.ExpressionExpected);
                    }
                }
            }
            if (!this.accept(cssScanner_1.TokenType.ParenthesisR)) {
                return this.finish(node, cssErrors_1.ParseError.RightParenthesisExpected);
            }
            return this.finish(node);
        };
        Parser.prototype._parseFunctionIdentifier = function () {
            var node = this.create(nodes.Identifier);
            node.referenceTypes = [nodes.ReferenceType.Function];
            if (this.accept(cssScanner_1.TokenType.Ident, 'progid')) {
                // support for IE7 specific filters: 'progid:DXImageTransform.Microsoft.MotionBlur(strength=13, direction=310)'
                if (this.accept(cssScanner_1.TokenType.Colon)) {
                    while (this.accept(cssScanner_1.TokenType.Ident) && this.accept(cssScanner_1.TokenType.Delim, '.')) {
                    }
                }
                return this.finish(node);
            }
            else if (this.accept(cssScanner_1.TokenType.Ident)) {
                return this.finish(node);
            }
            return null;
        };
        Parser.prototype._parseFunctionArgument = function () {
            var node = this.create(nodes.FunctionArgument);
            if (node.setValue(this._parseExpr(true))) {
                return this.finish(node);
            }
            return null;
        };
        Parser.prototype._parseHexColor = function () {
            if (this.peekRegExp(cssScanner_1.TokenType.Hash, /^#[0-9A-Fa-f]{3}([0-9A-Fa-f]{3})?$/g)) {
                var node = this.create(nodes.HexColorValue);
                this.consumeToken();
                return this.finish(node);
            }
            else {
                return null;
            }
        };
        return Parser;
    }());
    exports.Parser = Parser;
});
//# sourceMappingURL=cssParser.js.map