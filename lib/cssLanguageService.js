(function (dependencies, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(dependencies, factory);
    }
})(["require", "exports", "./parser/cssParser", "./services/cssCompletion", "./services/cssHover", "./services/cssNavigation", "./services/cssCodeActions", "./services/cssValidation", "./services/cssUriResolver", "./parser/scssParser", "./services/scssCompletion", "./services/scssUriResolver", "./parser/lessParser", "./services/lessCompletion", "./services/lessUriResolver"], function (require, exports) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    var cssParser_1 = require("./parser/cssParser");
    var cssCompletion_1 = require("./services/cssCompletion");
    var cssHover_1 = require("./services/cssHover");
    var cssNavigation_1 = require("./services/cssNavigation");
    var cssCodeActions_1 = require("./services/cssCodeActions");
    var cssValidation_1 = require("./services/cssValidation");
    var cssUriResolver_1 = require("./services/cssUriResolver");
    var scssParser_1 = require("./parser/scssParser");
    var scssCompletion_1 = require("./services/scssCompletion");
    var scssUriResolver_1 = require("./services/scssUriResolver");
    var lessParser_1 = require("./parser/lessParser");
    var lessCompletion_1 = require("./services/lessCompletion");
    var lessUriResolver_1 = require("./services/lessUriResolver");
    function createFacade(parser, completion, hover, navigation, codeActions, validation) {
        return {
            configure: validation.configure.bind(validation),
            doValidation: validation.doValidation.bind(validation),
            parseStylesheet: parser.parseStylesheet.bind(parser),
            doComplete: completion.doComplete.bind(completion),
            findDependencies: parser.findDependencies.bind(parser),
            doHover: hover.doHover.bind(hover),
            findDefinition: navigation.findDefinition.bind(navigation),
            findReferences: navigation.findReferences.bind(navigation),
            findDocumentHighlights: navigation.findDocumentHighlights.bind(navigation),
            findDocumentSymbols: navigation.findDocumentSymbols.bind(navigation),
            doCodeActions: codeActions.doCodeActions.bind(codeActions),
            findColorSymbols: navigation.findColorSymbols.bind(navigation),
            doRename: navigation.doRename.bind(navigation)
        };
    }
    function getCSSLanguageService() {
        return createFacade(new cssParser_1.Parser(), new cssCompletion_1.CSSCompletion(), new cssHover_1.CSSHover(), new cssNavigation_1.CSSNavigation(new cssUriResolver_1.CSSURIResolver), new cssCodeActions_1.CSSCodeActions(), new cssValidation_1.CSSValidation);
    }
    exports.getCSSLanguageService = getCSSLanguageService;
    function getSCSSLanguageService() {
        return createFacade(new scssParser_1.SCSSParser(), new scssCompletion_1.SCSSCompletion(), new cssHover_1.CSSHover(), new cssNavigation_1.CSSNavigation(new scssUriResolver_1.SCSSURIResolver), new cssCodeActions_1.CSSCodeActions(), new cssValidation_1.CSSValidation);
    }
    exports.getSCSSLanguageService = getSCSSLanguageService;
    function getLESSLanguageService() {
        return createFacade(new lessParser_1.LESSParser(), new lessCompletion_1.LESSCompletion(), new cssHover_1.CSSHover(), new cssNavigation_1.CSSNavigation(new lessUriResolver_1.LESSURIResolver), new cssCodeActions_1.CSSCodeActions(), new cssValidation_1.CSSValidation);
    }
    exports.getLESSLanguageService = getLESSLanguageService;
});
//# sourceMappingURL=cssLanguageService.js.map