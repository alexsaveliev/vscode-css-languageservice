/*---------------------------------------------------------------------------------------------
 *  Copyright (c) SourceGraph 2017
 *--------------------------------------------------------------------------------------------*/
'use strict';

import { ExtensionURIResolver } from "./extensionUriResolver"

export class SCSSURIResolver extends ExtensionURIResolver {
    constructor() {
        super(".scss");
    }
}
