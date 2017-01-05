/*---------------------------------------------------------------------------------------------
 *  Copyright (c) SourceGraph 2017
 *--------------------------------------------------------------------------------------------*/
'use strict';

import { ExtensionURIResolver } from "./extensionUriResolver"

export class LESSURIResolver extends ExtensionURIResolver {
    constructor() {
        super(".less");
    }
}