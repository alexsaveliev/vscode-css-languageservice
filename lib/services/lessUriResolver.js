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
})(["require", "exports", "./extensionUriResolver"], function (require, exports) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) SourceGraph 2017
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    var extensionUriResolver_1 = require("./extensionUriResolver");
    var LESSURIResolver = (function (_super) {
        __extends(LESSURIResolver, _super);
        function LESSURIResolver() {
            return _super.call(this, ".less") || this;
        }
        return LESSURIResolver;
    }(extensionUriResolver_1.ExtensionURIResolver));
    exports.LESSURIResolver = LESSURIResolver;
});
//# sourceMappingURL=lessUriResolver.js.map