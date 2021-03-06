# vscode-css-languageservice
Language services for CSS, LESS and SCSS forked from Microsoft/vscode-css-languageservice

Why?
----
The _vscode-css-languageservice_ contains the language smarts behind the CSS, LESS and SCSS editing experience of Visual Studio Code
and the Monaco editor.
 - *doValidation* analyses an input string and returns syntax and lint errros.
 - *doComplete* provides completion proposals for a given location.
 - *findDependencies* takes in a parsed stylesheet and spits out an array of "imports" in that file.
 - *doHover* provides a hover text for a given location.
 - *findDefinition* finds the definition of the symbol at the given location.
 - *findReferences* finds all references to the symbol at the given location.
 - *findDocumentHighlights* finds all symbols connected to the given location.
 - *findDocumentSymbols* provides all symbols in the given document
 - *doCodeActions* evaluats code actions for the given location, typically to fix a problem.
 - *findColorSymbols* evaluates all color symbols in the given document
 - *doRename* renames all symbols connected connected to the given location.

API
---

```typescript

export interface LanguageService {
	configure(raw: LanguageSettings): void;
	doValidation(document: TextDocument, stylesheet: Stylesheet): Diagnostic[];
	parseStylesheet(document: TextDocument): Stylesheet;
	doComplete(document: TextDocument, position: Position, stylesheet: Stylesheet): CompletionList;
	findDependencies(stylesheet: Stylesheet): string[];
	doHover(thisURI: string, documents: {[uri: string]: {textDoc: TextDocument, styleSheet: Stylesheet}}, position: Position): Hover;
	findDefinition(thisURI: string, documents: {[uri: string]: {textDoc: TextDocument, styleSheet: Stylesheet}}, position: Position): Location;
	findReferences(thisURI: string, documents: {[uri: string]: {textDoc: TextDocument, styleSheet: Stylesheet}}, position: Position): Location[];
	findDocumentHighlights(document: TextDocument, position: Position, stylesheet: Stylesheet): DocumentHighlight[];
	findDocumentSymbols(document: TextDocument, stylesheet: Stylesheet): SymbolInformation[];
	doCodeActions(document: TextDocument, range: Range, context: CodeActionContext, stylesheet: Stylesheet): Command[];
	findColorSymbols(document: TextDocument, stylesheet: Stylesheet): Range[];
	doRename(document: TextDocument, position: Position, newName: string, stylesheet: Stylesheet): WorkspaceEdit;
}

export interface LanguageSettings {
	validate?: boolean;
	lint?: any;
}

```

Notes
-----

- The static data describing css properties is generated by build/generate_browserjs.js which uses the css-schema.xml from Microsoft and files from developer.mozilla.org/en-US/docs/Web/CSS under build/moz-mdn-css.
- doHover/findDefinition/findReferences take in an object that contains all the files that could potentially contain the reference/definition/hover-info. First they find the node at the position described by the position parameter and then find the path from that node to the root stylesheet node. The path is then traversed in reverse order (from node to root) until we find a nodeType that is handled by the code - which involves traversing the dependencies and the file itself looking for references/definition of the said node.
- While SCSS/LESS have their own parser for generating the AST, the service to resolve hover/definition is the same as CSS.
- While we parse import statements, we do not resolve any of them - this is handled by cssServiceShim in css-langserver
- To download: `git clone https://github.com/sourcegraph/vscode-css-languageservice`
- To update css-data: `npm run update-data`
- To compile: `npm run compile`
- To run tests: `npm run test` (NOTE: Test coverage is not 100% yet; Most of the tests are focused on the parsers and very little on the "services" ie. doHover/findRef/findDef/findDep etc..)
- Always run `npm run compile` before pushing any changes. Due to a bug in npm; when we include dependencies by git url - it does not run npm compile after cloning the repo so as a workaround we run compile before publishing and include the /lib folder in the git repo which is then imported as a tarball in css-langserver. A potential fix could be to publish this to npm ie. sourcegraph-css-languageservice.

License
-------

(MIT License)

Copyright 2016, Microsoft
Copyright 2016, Sourcegraph
