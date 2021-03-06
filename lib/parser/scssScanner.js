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
})(["require", "exports", "./cssScanner"], function (require, exports) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    var cssScanner_1 = require("./cssScanner");
    var _FSL = '/'.charCodeAt(0);
    var _NWL = '\n'.charCodeAt(0);
    var _CAR = '\r'.charCodeAt(0);
    var _LFD = '\f'.charCodeAt(0);
    var _DLR = '$'.charCodeAt(0);
    var _HSH = '#'.charCodeAt(0);
    var _CUL = '{'.charCodeAt(0);
    var _EQS = '='.charCodeAt(0);
    var _BNG = '!'.charCodeAt(0);
    var _LAN = '<'.charCodeAt(0);
    var _RAN = '>'.charCodeAt(0);
    var _DOT = '.'.charCodeAt(0);
    var customTokenValue = cssScanner_1.TokenType.CustomToken;
    exports.VariableName = customTokenValue++;
    exports.InterpolationFunction = customTokenValue++;
    exports.Default = customTokenValue++;
    exports.EqualsOperator = customTokenValue++;
    exports.NotEqualsOperator = customTokenValue++;
    exports.GreaterEqualsOperator = customTokenValue++;
    exports.SmallerEqualsOperator = customTokenValue++;
    exports.Ellipsis = customTokenValue++;
    var SCSSScanner = (function (_super) {
        __extends(SCSSScanner, _super);
        function SCSSScanner() {
            return _super.apply(this, arguments) || this;
        }
        SCSSScanner.prototype.scan = function () {
            // processes all whitespaces and comments
            var triviaToken = this.trivia();
            if (triviaToken !== null) {
                return triviaToken;
            }
            var offset = this.stream.pos();
            // scss variable
            if (this.stream.advanceIfChar(_DLR)) {
                var content = ['$'];
                if (this.ident(content)) {
                    return this.finishToken(offset, exports.VariableName, content.join(''));
                }
                else {
                    this.stream.goBackTo(offset);
                }
            }
            // scss: interpolation function #{..})
            if (this.stream.advanceIfChars([_HSH, _CUL])) {
                return this.finishToken(offset, exports.InterpolationFunction);
            }
            // operator ==
            if (this.stream.advanceIfChars([_EQS, _EQS])) {
                return this.finishToken(offset, exports.EqualsOperator);
            }
            // operator !=
            if (this.stream.advanceIfChars([_BNG, _EQS])) {
                return this.finishToken(offset, exports.NotEqualsOperator);
            }
            // operators <, <=
            if (this.stream.advanceIfChar(_LAN)) {
                if (this.stream.advanceIfChar(_EQS)) {
                    return this.finishToken(offset, exports.SmallerEqualsOperator);
                }
                return this.finishToken(offset, cssScanner_1.TokenType.Delim);
            }
            // ooperators >, >=
            if (this.stream.advanceIfChar(_RAN)) {
                if (this.stream.advanceIfChar(_EQS)) {
                    return this.finishToken(offset, exports.GreaterEqualsOperator);
                }
                return this.finishToken(offset, cssScanner_1.TokenType.Delim);
            }
            // ellipis
            if (this.stream.advanceIfChars([_DOT, _DOT, _DOT])) {
                return this.finishToken(offset, exports.Ellipsis);
            }
            return _super.prototype.scan.call(this);
        };
        SCSSScanner.prototype.comment = function () {
            if (_super.prototype.comment.call(this)) {
                return true;
            }
            if (this.stream.advanceIfChars([_FSL, _FSL])) {
                this.stream.advanceWhileChar(function (ch) {
                    switch (ch) {
                        case _NWL:
                        case _CAR:
                        case _LFD:
                            return false;
                        default:
                            return true;
                    }
                });
                return true;
            }
            else {
                return false;
            }
        };
        return SCSSScanner;
    }(cssScanner_1.Scanner));
    exports.SCSSScanner = SCSSScanner;
});
//# sourceMappingURL=scssScanner.js.map