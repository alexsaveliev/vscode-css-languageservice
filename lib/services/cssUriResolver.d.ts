import { URIResolver } from "./uriResolver";
export declare class CSSURIResolver implements URIResolver {
    resolve(uri: string, documents: {
        [uri: string]: any;
    }): string;
}
