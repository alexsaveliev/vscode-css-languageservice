(function (dependencies, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(dependencies, factory);
    }
})(["require", "exports"], function (require, exports) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) SourceGraph 2017
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    var CSSURIResolver = (function () {
        function CSSURIResolver() {
        }
        CSSURIResolver.prototype.resolve = function (uri, documents) {
            if (documents[uri]) {
                return uri;
            }
            return null;
        };
        return CSSURIResolver;
    }());
    exports.CSSURIResolver = CSSURIResolver;
});
//# sourceMappingURL=cssUriResolver.js.map