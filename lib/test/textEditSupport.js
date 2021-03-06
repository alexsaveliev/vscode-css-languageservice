(function (dependencies, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(dependencies, factory);
    }
})(["require", "exports", "assert"], function (require, exports) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    var assert = require("assert");
    function applyEdits(document, edits) {
        var text = document.getText();
        var sortedEdits = edits.sort(function (a, b) { return document.offsetAt(b.range.start) - document.offsetAt(a.range.start); });
        var lastOffset = text.length;
        sortedEdits.forEach(function (e) {
            var startOffset = document.offsetAt(e.range.start);
            var endOffset = document.offsetAt(e.range.end);
            assert.ok(startOffset <= endOffset);
            assert.ok(endOffset <= lastOffset);
            text = text.substring(0, startOffset) + e.newText + text.substring(endOffset, text.length);
            lastOffset = startOffset;
        });
        return text;
    }
    exports.applyEdits = applyEdits;
});
//# sourceMappingURL=textEditSupport.js.map