import { CSSURIResolver } from "./cssUriResolver";
export declare class ExtensionURIResolver extends CSSURIResolver {
    private extension;
    constructor(extension: string);
    resolve(uri: string, documents: {
        [uri: string]: any;
    }): string;
}
