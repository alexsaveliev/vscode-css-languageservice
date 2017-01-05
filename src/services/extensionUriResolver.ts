/*---------------------------------------------------------------------------------------------
 *  Copyright (c) SourceGraph 2017
 *--------------------------------------------------------------------------------------------*/
'use strict';

import { CSSURIResolver } from "./cssUriResolver"

const path = require('path');

export class ExtensionURIResolver extends CSSURIResolver {

    private extension: string;

    constructor(extension: string) {
        super();
        this.extension = extension;
    }

    resolve(uri: string, documents: { [uri: string]: any }): string {
        let candidate = super.resolve(uri, documents);
        if (candidate) {
            return candidate;
        }

        const extension = path.extname(uri);
        const basename = path.basename(uri, extension);
        const dirname = path.posix.dirname(uri);

        if (!extension) {
            // import "foo" => import "foo.ext"
            uri = dirname + "/" + basename + this.extension;
            candidate = super.resolve(uri, documents);
            if (candidate) {
                return candidate;
            }
        }

        // import "foo" => import "_foo"
        const parts = uri.split("/");
        if (parts[parts.length - 1].length && parts[parts.length - 1].charAt(0) == "_") {
            return null;
        }
        parts[parts.length - 1] = "_" + parts[parts.length - 1];
        return super.resolve(parts.join("/"), documents);
    }
}