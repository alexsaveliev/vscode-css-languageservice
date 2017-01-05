export interface URIResolver {
    /**
     * Attempts to resolve given URI to an existing one.
     * For example, may add appropriate extension if omitted or try .../_name for .../name
     * @return null if there is no known document
     */
    resolve(uri: string, documents: {
        [uri: string]: any;
    }): string;
}
