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
})(["require", "exports", "./cssUriResolver"], function (require, exports) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) SourceGraph 2017
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    var cssUriResolver_1 = require("./cssUriResolver");
    var path = require('path');
    var ExtensionURIResolver = (function (_super) {
        __extends(ExtensionURIResolver, _super);
        function ExtensionURIResolver(extension) {
            var _this = _super.call(this) || this;
            _this.extension = extension;
            return _this;
        }
        ExtensionURIResolver.prototype.resolve = function (uri, documents) {
            var candidate = _super.prototype.resolve.call(this, uri, documents);
            if (candidate) {
                return candidate;
            }
            var extension = path.extname(uri);
            var basename = path.basename(uri, extension);
            var dirname = path.posix.dirname(uri);
            if (!extension) {
                // import "foo" => import "foo.ext"
                uri = dirname + "/" + basename + this.extension;
                candidate = _super.prototype.resolve.call(this, uri, documents);
                if (candidate) {
                    return candidate;
                }
            }
            // import "foo" => import "_foo"
            var parts = uri.split("/");
            if (parts[parts.length - 1].length && parts[parts.length - 1].charAt(0) == "_") {
                return null;
            }
            parts[parts.length - 1] = "_" + parts[parts.length - 1];
            return _super.prototype.resolve.call(this, parts.join("/"), documents);
        };
        return ExtensionURIResolver;
    }(cssUriResolver_1.CSSURIResolver));
    exports.ExtensionURIResolver = ExtensionURIResolver;
});
//# sourceMappingURL=extensionUriResolver.js.map