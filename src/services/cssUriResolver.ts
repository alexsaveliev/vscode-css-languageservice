/*---------------------------------------------------------------------------------------------
 *  Copyright (c) SourceGraph 2017
 *--------------------------------------------------------------------------------------------*/
'use strict';

import {URIResolver} from "./uriResolver"

export class CSSURIResolver implements URIResolver {

    resolve(uri: string, documents: {[uri: string]: any}): string {
        if (documents[uri]) {
            return uri;
        }
        return null;
    }
}
