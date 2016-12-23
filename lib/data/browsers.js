/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
// file generated from css-schema.xml using css-exclude_generate_browserjs.js

(function (factory) {
	if (typeof module === "object" && typeof module.exports === "object") {
		var v = factory(require, exports); if (v !== undefined) module.exports = v;
	} else if (typeof define === "function" && define.amd) {
		define(["require", "exports"], factory);
	}
})(function (require, exports) {
	exports.data = {
	"css": {
		"atdirectives": [
			{
				"name": "@charset",
				"desc": "The @charset CSS at-rule specifies the character encoding used in the style sheet. It must be the first element in the style sheet and not be preceded by any character; as it is not a nested statement, it cannot be used inside conditional group at-rules. If several @charset at-rules are defined, only the first one is used, and it cannot be used inside a style attribute on an HTML element or inside the <style> element where the character set of the HTML page is relevant.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/@charset",
				"syntax": "@charset 'utf-8';"
			},
			{
				"name": "@counter-style",
				"desc": "The @counter-style CSS at-rule lets authors define specific counter styles that are not part of the predefined set of styles. A @counter-style rule defines how to convert a counter value into a string representation.",
				"browsers": "FF33",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/@counter-style",
				"syntax": "@counter-style <counter-style-name> { <declaration-list> }"
			},
			{
				"name": "@font-face",
				"desc": "The @font-face CSS at-rule allows authors to specify online fonts to display text on their web pages. By allowing authors to provide their own fonts, @font-face eliminates the need to depend on the limited number of fonts users have installed on their computers. The @font-face at-rule may be used not only at the top level of a CSS, but also inside any CSS conditional-group at-rule.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face",
				"syntax": "@font-face { <font-description> }"
			},
			{
				"name": "@font-feature-values",
				"desc": "The @font-feature-values CSS at-rule allows authors to use a common name in font-variant-alternates for feature activated differently in OpenType. It allows to simplify the CSS when using several fonts.",
				"browsers": "FF34",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/@font-feature-values",
				"syntax": "@font-feature-values <font-family> { }"
			},
			{
				"name": "@import",
				"desc": "The @import CSS at-rule is used to import style rules from other style sheets. These rules must precede all other types of rules, except @charset rules; as it is not a nested statement, @import cannot be used inside conditional group at-rules.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/@import",
				"syntax": "@import url('file.css') tv, print;"
			},
			{
				"name": "@keyframes",
				"desc": "The @keyframes CSS at-rule lets authors control the intermediate steps in a CSS animation sequence by establishing keyframes (or waypoints) along the animation sequence that must be reached by certain points during the animation. This gives you more specific control over the intermediate steps of the animation sequence than you'd get when letting the browser handle everything automatically.",
				"browsers": "E,C43,FF16,IE10,O30,S9",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes",
				"syntax": "@keyframes animation-name"
			},
			{
				"name": "@media",
				"desc": "The @media CSS at-rule associates a set of nested statements, in a CSS block that is delimited by curly braces, with a condition defined by a media query. The @media at-rule may be used not only at the top level of a CSS, but also inside any CSS conditional-group at-rule.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media",
				"syntax": "@media print { ... }"
			},
			{
				"name": "@-moz-document",
				"desc": "Gecko-specific at-rule that restricts the style rules contained within it based on the URL of the document.",
				"browsers": "FF1.8",
				"ref": "https://developer.mozilla.org/en/CSS/@document"
			},
			{
				"name": "@-moz-keyframes",
				"desc": "Defines set of animation key frames.",
				"browsers": "FF5",
				"ref": "http://www.w3.org/TR/css3-animations/#keyframes",
				"syntax": "@-moz-keyframes animation-name"
			},
			{
				"name": "@-ms-viewport",
				"desc": "Specifies the size, zoom factor, and orientation of the viewport.",
				"browsers": "E,IE10",
				"ref": "http://www.w3.org/TR/css-device-adapt/#the-viewport-rule",
				"syntax": "@@-ms-viewport { width: device-width; }"
			},
			{
				"name": "@namespace",
				"desc": "@namespace is an at-rule that defines XML namespaces to be used in a CSS style sheet. The defined namespaces can be used to restrict the universal, type, and attribute selectors to only select elements within that namespace. The @namespace rule is generally only useful when dealing with documents containing multiple namespaces—such as HTML5 with inline SVG or MathML, or XML that mixes multiple vocabularies.",
				"browsers": "E,C,FF1,IE9,O8,S1",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/@namespace",
				"syntax": "@namespace [prefix] string|url;"
			},
			{
				"name": "@-o-keyframes",
				"desc": "Defines set of animation key frames.",
				"browsers": "O12",
				"ref": "http://www.w3.org/TR/css3-animations/#keyframes",
				"syntax": "@-o-keyframes animation-name { }"
			},
			{
				"name": "@-o-viewport",
				"desc": "Specifies the size, zoom factor, and orientation of the viewport.",
				"browsers": "O11",
				"ref": "http://dev.w3.org/csswg/css-device-adapt/#the-viewport-rule",
				"syntax": "@@-o-viewport { width: 320px; zoom: 0.5; }"
			},
			{
				"name": "@page",
				"desc": "The @page CSS at-rule is used to modify some CSS properties when printing a document. You can't change all CSS properties with @page. You can only change the margins, orphans, widows, and page breaks of the document. Attempts to change any other CSS properties will be ignored.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/@page",
				"syntax": "@page :first { margin-top: 10cm }"
			},
			{
				"name": "@supports",
				"desc": "The @supports CSS at-rule associates a set of nested statements, in a CSS block, that is delimited by curly braces, with a condition consisting of testing of CSS declarations, that is property-value pairs, combined with arbitrary conjunctions, disjunctions, and negations of them. Such a condition is called a supports condition.",
				"browsers": "E,C28,FF22,O12.1,S9",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/@supports",
				"syntax": "@supports (display: flexbox) { div { display: flexbox; } }"
			},
			{
				"name": "@-webkit-keyframes",
				"desc": "Defines set of animation key frames.",
				"browsers": "C,S4",
				"ref": "http://www.w3.org/TR/css3-animations/#keyframes",
				"syntax": "@-webkit-keyframes animation-name"
			}
		],
		"pseudoclasses": [
			{
				"name": ":active",
				"desc": "The :active CSS pseudo-class matches when an element is being activated by the user. It allows the page to give a feedback that the activation has been detected by the browser. When interacting with a mouse, this is typically the time between the user presses the mouse button and releases it. The :active pseudo-class is also typically matched when using the keyboard tab key. It is frequently used on <a> and <button> HTML elements, but may not be limited to just those.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/:active",
				"syntax": "a:active { color: red; }"
			},
			{
				"name": ":any-link",
				"desc": "The :any-link CSS pseudo-class represents an element that acts as the source anchor of a hyperlink independent of whether it has been visited, that is, it matches every <a>, <area> or <link> elements with an href attribute. So, it matches all elements that match :link or :visited.",
				"browsers": "S9",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/:any-link",
				"syntax": "a:any-link { text-decoration: none; }"
			},
			{
				"name": ":checked",
				"desc": "Radio and checkbox elements can be toggled by the user. Some menu items are 'checked' when the user selects them. When such elements are toggled 'on' the :checked pseudo-class applies.",
				"browsers": "E,C,FF1,IE9,O9,S3.13",
				"ref": "http://www.w3.org/TR/css3-selectors/#checked",
				"syntax": "input:checked { color: red; }"
			},
			{
				"name": ":corner-present",
				"desc": "Non-standard. Indicates whether or not a scrollbar corner is present.",
				"browsers": "C,S5",
				"ref": "https://webkit.org/blog/363/styling-scrollbars/"
			},
			{
				"name": ":decrement",
				"desc": "Non-standard. Applies to buttons and track pieces. Indicates whether or not the button or track piece will decrement the view’s position when used.",
				"browsers": "C,S5",
				"ref": "https://webkit.org/blog/363/styling-scrollbars/"
			},
			{
				"name": ":default",
				"desc": "The :default CSS pseudo-class represents any user interface element that is the default among a group of similar elements.",
				"browsers": "C,FF3,O10,S5",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/:default",
				"syntax": "input:default { color: red; }"
			},
			{
				"name": ":disabled",
				"desc": "The :disabled CSS pseudo-class represents any disabled element. An element is disabled if it can't be activated (e.g. selected, clicked on or accept text input) or accept focus. The element also has an enabled state, in which it can be activated or accept focus.",
				"browsers": "E,C,FF1.5,IE9,O9,S3.1",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/:disabled",
				"syntax": "input:disabled { background-color: silver; }"
			},
			{
				"name": ":double-button",
				"desc": "Non-standard. Applies to buttons and track pieces. Applies when both buttons are displayed together at the same end of the scrollbar.",
				"browsers": "C,S5",
				"ref": "https://webkit.org/blog/363/styling-scrollbars/"
			},
			{
				"name": ":empty",
				"desc": "The :empty pseudo-class represents any element that has no children at all. Only element nodes and text (including whitespace) are considered. Comments or processing instructions do not affect whether an element is considered empty or not.",
				"browsers": "E,C,FF1.5,IE9,O9,S3.1",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/:empty",
				"syntax": "div:empty { background-color: red; }"
			},
			{
				"name": ":enabled",
				"desc": "The :enabled CSS pseudo-class represents any enabled element. An element is enabled if it can be activated (e.g. selected, clicked on or accept text input) or accept focus. The element also has an disabled state, in which it can't be activated or accept focus.",
				"browsers": "E,C,FF1.5,IE9,O9,S3.1",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/:enabled",
				"syntax": "input:enabled { background-color: green; }"
			},
			{
				"name": ":end",
				"desc": "Non-standard. Applies to buttons and track pieces. Indicates whether the object is placed after the thumb.",
				"browsers": "C,S5",
				"ref": "https://webkit.org/blog/363/styling-scrollbars/"
			},
			{
				"name": ":first",
				"desc": "The :first @page CSS pseudo-class describes the styling of the first page when printing a document.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/:first",
				"syntax": "@page :first { margin-left: 4cm; }"
			},
			{
				"name": ":first-child",
				"desc": "Same as :nth-child(1). Represents an element that is the first child of some other element.",
				"browsers": "E,C,FF3,IE7,O9.5,S3.1",
				"ref": "http://www.w3.org/TR/css3-selectors/#first-child-pseudo",
				"syntax": "li:first-child { font-size: 1.2em; }"
			},
			{
				"name": ":first-of-type",
				"desc": "The :first-of-type CSS pseudo-class represents the first sibling of its type in the list of children of its parent element.",
				"browsers": "E,C,FF3.5,IE9,O9.5,S3.2",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/:first-of-type",
				"syntax": "dl dt:first-of-type { font-size: 200%; }"
			},
			{
				"name": ":focus",
				"desc": "The :focus CSS pseudo-class is applied when an element has received focus, either from the user selecting it with the use of a keyboard or by activating with the mouse (e.g. a form input).",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/:focus",
				"syntax": "a:focus { color: yellow; }"
			},
			{
				"name": ":fullscreen",
				"desc": "The :fullscreen CSS pseudo-class applies to any element that's currently being displayed in full-screen mode. It selects not only to the top level element, but to the whole stack of elements that appears.",
				"browsers": "E",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/:fullscreen",
				"syntax": "iframe:fullscreen { border: none; }"
			},
			{
				"name": ":future",
				"desc": "Represents any element that is defined to occur entirely after a :current element.",
				"browsers": "C,O16,S6",
				"ref": "http://www.w3.org/TR/selectors4/#the-future-pseudo",
				"syntax": ":future { color: yellow; }"
			},
			{
				"name": ":horizontal",
				"desc": "Non-standard. Applies to any scrollbar pieces that have a horizontal orientation.",
				"browsers": "C,S5",
				"ref": "https://webkit.org/blog/363/styling-scrollbars/"
			},
			{
				"name": ":host",
				"desc": "When evaluated in the context of a shadow tree, matches the shadow tree’s host element.",
				"browsers": "C35,O22",
				"ref": "http://www.w3.org/TR/css-scoping-1/#selectordef-host0",
				"syntax": ":host { display: block; }"
			},
			{
				"name": ":host()",
				"desc": "When evaluated in the context of a shadow tree, it matches the shadow tree’s host element if the host element, in its normal context, matches the selector argument.",
				"browsers": "C35,O22",
				"ref": "http://www.w3.org/TR/css-scoping-1/#selectordef-host",
				"syntax": ":host(.myclass) { color: blue; }"
			},
			{
				"name": ":host-context()",
				"desc": "Tests whether there is an ancestor, outside the shadow tree, which matches a particular selector.",
				"browsers": "C35,O22",
				"ref": "http://www.w3.org/TR/css-scoping-1/#selectordef-host-context",
				"syntax": ":host-context(.myclass) { color: blue; }"
			},
			{
				"name": ":hover",
				"desc": "The :hover CSS pseudo-class matches when the user designates an element with a pointing device, but does not necessarily activate it. This style may be overridden by any other link-related pseudo-classes, that is :link, :visited, and :active, appearing in subsequent rules. In order to style appropriately links, you need to put the :hover rule after the :link and :visited rules but before the :active one, as defined by the LVHA-order: :link — :visited — :hover — :active.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/:hover",
				"syntax": "a:hover { text-decoration: none; }"
			},
			{
				"name": ":increment",
				"desc": "Non-standard. Applies to buttons and track pieces. Indicates whether or not the button or track piece will increment the view’s position when used.",
				"browsers": "C,S5",
				"ref": "https://webkit.org/blog/363/styling-scrollbars/"
			},
			{
				"name": ":indeterminate",
				"desc": "The :indeterminate CSS pseudo-class represents:",
				"browsers": "E,C,FF3.6,IE9,O10.6,S3",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/:indeterminate",
				"syntax": "input:indeterminate { margin: auto 2px; }"
			},
			{
				"name": ":in-range",
				"desc": "The :in-range CSS pseudo-class matches when an element has its value attribute inside the specified range limitations for this element. It allows the page to give a feedback that the value currently defined using the element is inside the range limits.",
				"browsers": "E13,C,FF10,O9.6,S5.1",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/:in-range",
				"syntax": "input:in-range { color: green; }"
			},
			{
				"name": ":invalid",
				"desc": "The :invalid CSS pseudo-class represents any <input> or <form> element whose content fails to validate according to the input's type setting. This allows you to easily have invalid fields adopt an appearance that helps the user identify and correct errors.",
				"browsers": "E,C,FF4,IE10,O10,S5",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/:invalid",
				"syntax": "input:invalid { border-color: red; }"
			},
			{
				"name": ":lang()",
				"desc": "Represents an element that is in language specified.",
				"browsers": "E,C,FF1,IE8,O8,S3",
				"ref": "http://www.w3.org/TR/css3-selectors/#lang-pseudo",
				"syntax": "html:lang(en) { color: blue; }"
			},
			{
				"name": ":last-child",
				"desc": "The :last-child CSS pseudo-class represents any element that is the last child element of its parent.",
				"browsers": "E,C,FF1,IE9,O9.5,S3.1",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/:last-child",
				"syntax": "li:last-child { font-size: 1.2em; }"
			},
			{
				"name": ":last-of-type",
				"desc": "The :last-of-type CSS pseudo-class represents the last sibling with the given element name in the list of children of its parent element.",
				"browsers": "E,C,FF3.5,IE9,O9.5,S3.1",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/:last-of-type",
				"syntax": "dl dt:last-of-type { font-size: 200%; }"
			},
			{
				"name": ":left",
				"desc": "The :left CSS page pseudo-class matches any left page when printing a page. It allows to describe the styling of left-side pages.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/:left",
				"syntax": "@page :left { margin-left: 4cm; }"
			},
			{
				"name": ":link",
				"desc": "The :link CSS pseudo-class lets you select links inside elements. This will select any link which has not yet been visited, even those already styled using selector with other link-related pseudo-classes like :hover, :active or :visited. In order to appropriately style links, you need to put the :link rule before the other ones, as defined by the LVHA-order: :link — :visited — :hover — :active. The :focus pseudo-class is usually placed right before or right after :hover, depending on the expected effect.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/:link",
				"syntax": "a:link { text-decoration: none; }"
			},
			{
				"name": ":matches()",
				"desc": "Takes a selector list as its argument. It represents an element that is represented by its argument.",
				"browsers": "S9",
				"ref": "http://www.w3.org/TR/selectors4/#matches",
				"syntax": "div:matches(:hover) { border-color: pink; }"
			},
			{
				"name": ":-moz-any()",
				"desc": "Represents an element that is represented by the selector list passed as its argument. Standardized as :matches().",
				"browsers": "FF4"
			},
			{
				"name": ":-moz-any-link",
				"desc": "Represents an element that acts as the source anchor of a hyperlink. Applies to both visited and unvisited links.",
				"browsers": "FF1"
			},
			{
				"name": ":-moz-broken",
				"desc": "The :-moz-broken CSS pseudo-class matches elements representing broken image links.",
				"browsers": "FF3",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/:-moz-broken"
			},
			{
				"name": ":-moz-drag-over",
				"desc": "The :-moz-drag-over CSS pseudo-class is used to edit an element when a drag-over event is called on it.",
				"browsers": "FF1",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/:-moz-drag-over"
			},
			{
				"name": ":-moz-first-node",
				"desc": "The :-moz-first-node CSS pseudo-class represents any element that is the first child node of some other element. It differs from :first-child because it does not match a first child element with (non-whitespace) text before it.",
				"browsers": "FF1",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/:-moz-first-node"
			},
			{
				"name": ":-moz-focusring",
				"desc": "The :-moz-focusring CSS pseudo-class is similar to the :focus pseudo-class, but it only matches an element if the element is currently focused and a focus ring or other indicator should be drawn for that element. If :-moz-focusring matches, then :focus also matches, but the converse is not always true - it depends on whether the user agent has focus ring drawing enabled and how the element was focused. Whether the user agent has focus ring drawing enabled can depend on things like the settings of the operating system the user is using, so the precise behavior of this pseudo-class can vary from platform to platform depending on each platforms' particular focus best practices (defaults) or user modified settings.",
				"browsers": "FF4",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/:-moz-focusring"
			},
			{
				"name": ":-moz-full-screen",
				"desc": "Matches any element that has its fullscreen flag set. Standardized as :fullscreen.",
				"browsers": "FF9"
			},
			{
				"name": ":-moz-last-node",
				"desc": "The :-moz-last-node CSS pseudo-class matches an element that is the last child node of some other element. It differs from :last-child because it does not match a last child element with (non-whitespace) text after it.",
				"browsers": "FF1",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/:-moz-last-node"
			},
			{
				"name": ":-moz-loading",
				"desc": "Non-standard. Matches elements, such as images, that haven’t started loading yet.",
				"browsers": "FF3"
			},
			{
				"name": ":-moz-only-whitespace",
				"desc": "The :-moz-only-whitespace CSS pseudo-class matches an element that has no child nodes at all or empty text nodes or text nodes that have only white-space in them. Only when there are element nodes or text nodes with one or more characters inside the element, the element doesn't match this pseudo-class anymore.",
				"browsers": "FF1.5",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/:-moz-only-whitespace"
			},
			{
				"name": ":-moz-placeholder",
				"desc": "The :-moz-placeholder pseudo-class represents any form element displaying placeholder text. This allows web developers and theme designers to customize the appearance of placeholder text, which is a light grey color by default. This may not work well if you've changed the background color of your form fields to be a similar color, for example, so you can use this pseudo-class to change the placeholder text color.",
				"browsers": "FF4",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/:-moz-placeholder"
			},
			{
				"name": ":-moz-submit-invalid",
				"desc": "Non-standard. Represents any submit button when the contents of the associated form are not valid.",
				"browsers": "FF4"
			},
			{
				"name": ":-moz-suppressed",
				"desc": "Non-standard. Matches elements representing images that have been blocked from loading.",
				"browsers": "FF3"
			},
			{
				"name": ":-moz-ui-invalid",
				"desc": "The :-moz-ui-invalid CSS pseudo-class represents any validated form element whose value isn't valid based on their validation constraints, in certain circumstances. This pseudo-class is applied according to the following rules:",
				"browsers": "FF4",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/:-moz-ui-invalid"
			},
			{
				"name": ":-moz-ui-valid",
				"desc": "The :-moz-ui-valid CSS pseudo-class represents any validated form element whose value validates correctly based on its validation constraints.",
				"browsers": "FF4",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/:-moz-ui-valid"
			},
			{
				"name": ":-moz-user-disabled",
				"desc": "The :-moz-user-disabled CSS pseudo-class matches elements representing images that were not loaded because images have been entirely disabled by the user's preferences.",
				"browsers": "FF3",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/:-moz-user-disabled"
			},
			{
				"name": ":-moz-window-inactive",
				"desc": "The :-moz-window-inactive CSS pseudo-class matches any element while it's in an inactive window.",
				"browsers": "FF4",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/:-moz-window-inactive"
			},
			{
				"name": ":-ms-fullscreen",
				"desc": "Matches any element that has its fullscreen flag set.",
				"browsers": "IE11",
				"ref": "https://fullscreen.spec.whatwg.org/#:fullscreen-pseudo-class",
				"syntax": "iframe:-ms-fullscreen { border: none; }"
			},
			{
				"name": ":-ms-input-placeholder",
				"desc": "The non-standard proprietary :-ms-input-placeholder pseudo-class represents the placeholder text of a form element. This allows web developers and theme designers to customize the appearance of placeholder text. This pseudo-class is only supported by Internet Explorer and Microsoft Edge.",
				"browsers": "IE10",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/:-ms-input-placeholder",
				"syntax": "input:-ms-input-placeholder { color: red; }"
			},
			{
				"name": ":-ms-keyboard-active",
				"desc": "Windows Store apps only. Applies one or more styles to an element when it has focus and the user presses the space bar.",
				"browsers": "IE10",
				"ref": "https://msdn.microsoft.com/en-us/library/dn336891(v=vs.85).aspx",
				"syntax": "input:-ms-keyboard-active { background: red; }"
			},
			{
				"name": ":-ms-lang()",
				"desc": "Represents an element that is in the language specified. Accepts a comma seperated list of language tokens.",
				"browsers": "E,IE10",
				"ref": "http://www.w3.org/TR/selectors4/#lang-pseudo",
				"syntax": "html:-ms-lang(en, fr, de) { color: blue; }"
			},
			{
				"name": ":no-button",
				"desc": "Non-standard. Applies to track pieces. Applies when there is no button at that end of the track.",
				"browsers": "C,S5",
				"ref": "https://webkit.org/blog/363/styling-scrollbars/"
			},
			{
				"name": ":not()",
				"desc": "The negation pseudo-class, :not(X), is a functional notation taking a simple selector (excluding the negation pseudo-class itself) as an argument. It represents an element that is not represented by its argument.",
				"browsers": "E,C,FF1,IE9,O9.5,S2",
				"ref": "http://www.w3.org/TR/css3-selectors/#negation",
				"syntax": "div:not(:empty) { border-color: pink; }"
			},
			{
				"name": ":nth-child()",
				"desc": "Represents an element that has an+b-1 siblings before it in the document tree, for any positive integer or zero value of n, and has a parent element.",
				"browsers": "E,C,FF3.5,IE9,O9.5,S3.1",
				"ref": "http://www.w3.org/TR/css3-selectors/#nth-child-pseudo",
				"syntax": "tr:nth-child(2n+1) { border-color: pink; }"
			},
			{
				"name": ":nth-last-child()",
				"desc": "Represents an element that has an+b-1 siblings after it in the document tree, for any positive integer or zero value of n, and has a parent element.",
				"browsers": "E,C,FF3.5,IE9,O9.5,S3.1",
				"ref": "http://www.w3.org/TR/css3-selectors/#nth-last-child-pseudo",
				"syntax": "tr:nth-last-child(-n+2) { border-color: pink; }"
			},
			{
				"name": ":nth-last-of-type()",
				"desc": "Represents an element that has an+b-1 siblings with the same expanded element name after it in the document tree, for any zero or positive integer value of n, and has a parent element.",
				"browsers": "E,C,FF3.5,IE9,O9.5,S3.1",
				"ref": "http://www.w3.org/TR/css3-selectors/#nth-of-type-pseudo",
				"syntax": "tr:nth-last-of-type(n+2) { border-color: pink; }"
			},
			{
				"name": ":nth-of-type()",
				"desc": "Represents an element that has an+b-1 siblings with the same expanded element name before it in the document tree, for any zero or positive integer value of n, and has a parent element.",
				"browsers": "E,C,FF3.5,IE9,O9.5,S3.1",
				"ref": "http://www.w3.org/TR/css3-selectors/#nth-of-type-pseudo",
				"syntax": "tr:nth-of-type(2n) { border-color: pink; }"
			},
			{
				"name": ":only-child",
				"desc": "The :only-child CSS pseudo-class represents any element which is the only child of its parent. This is the same as :first-child:last-child or :nth-child(1):nth-last-child(1), but with a lower specificity.",
				"browsers": "E,C,FF1.5,IE9,O9.5,S3.1",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/:only-child",
				"syntax": "p:only-child { color: #f00; }"
			},
			{
				"name": ":only-of-type",
				"desc": "The :only-of-type CSS pseudo-class represents any element that has no siblings of the given type.",
				"browsers": "E,C,FF3.5,IE9,O9.5,S3.2",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/:only-of-type",
				"syntax": "p:only-of-type { color: #f00; }"
			},
			{
				"name": ":optional",
				"desc": "The :optional CSS pseudo-class represents any <input> or <textarea> element that does not have the required attribute set on it. This allows forms to easily indicate optional fields, and to style them accordingly.",
				"browsers": "E,C,FF4,IE10,O10,S5",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/:optional",
				"syntax": "input:optional { color: yellow; }"
			},
			{
				"name": ":out-of-range",
				"desc": "The :out-of-range CSS pseudo-class matches when an element has its value attribute outside the specified range limitations for this element. It allows the page to give a feedback that the value currently defined using the element is outside the range limits. A value can be outside of a range if it is either smaller or larger than maximum and minimum set values.",
				"browsers": "E13,C,FF10,O9.6,S5.1",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/:out-of-range",
				"syntax": "input:out-of-range { color: red; }"
			},
			{
				"name": ":past",
				"desc": "Represents any element that is defined to occur entirely prior to a :current element.",
				"browsers": "C,O16,S6",
				"ref": "http://www.w3.org/TR/selectors4/#the-past-pseudo",
				"syntax": ":past { color: green; }"
			},
			{
				"name": ":read-only",
				"desc": "The :read-only CSS pseudo-class matches when an element is not writable by the user.",
				"browsers": "E13,C,FF10,O9,S4",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/:read-only",
				"syntax": "input:read-only { margin: auto; }"
			},
			{
				"name": ":read-write",
				"desc": "The :read-write CSS pseudo-class matches when an element is editable by user like text input elements.",
				"browsers": "E13,C,FF10,O9,S4",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/:read-write",
				"syntax": "input:read-write { margin: auto 2px; }"
			},
			{
				"name": ":required",
				"desc": "The :required CSS pseudo-class represents any <input> element that has the required attribute set on it. This allows forms to easily indicate which fields must have valid data before the form can be submitted.",
				"browsers": "E,C,FF4,IE10,O10,S5",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/:required",
				"syntax": "input:optional { color: yellow; }"
			},
			{
				"name": ":right",
				"desc": "The :right CSS page pseudo-class matches any right page when printing a page. It allows to describe the styling of right-side page.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/:right",
				"syntax": "@page :right { margin-left: 4cm; }"
			},
			{
				"name": ":root",
				"desc": "The :root CSS  pseudo-class matches the root element of a tree representing the document. Applied to HTML, :root represents the <html> element and is identical to the selector html, except that its specificity is higher.",
				"browsers": "E,C,FF1,IE9,O9.5,S1",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/:root",
				"syntax": ":root { padding: auto 3em; }"
			},
			{
				"name": ":scope",
				"desc": "The :scope CSS  pseudo-class matches the elements that are a reference point for selectors to match against. In HTML, a new reference point can be defined using the scoped attribute of the <style>. If no such attribute is used on an HTML page, the reference point is the <html> element.",
				"browsers": "FF32,S6",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/:scope",
				"syntax": ":scope { border-color: pink; }"
			},
			{
				"name": ":single-button",
				"desc": "Non-standard. Applies to buttons and track pieces. Applies when both buttons are displayed separately at either end of the scrollbar.",
				"browsers": "C,S5",
				"ref": "https://webkit.org/blog/363/styling-scrollbars/"
			},
			{
				"name": ":start",
				"desc": "Non-standard. Applies to buttons and track pieces. Indicates whether the object is placed before the thumb.",
				"browsers": "C,S5",
				"ref": "https://webkit.org/blog/363/styling-scrollbars/"
			},
			{
				"name": ":target",
				"desc": "Some URIs refer to a location within a resource. This kind of URI ends with a 'number sign' (#) followed by an anchor identifier (called the fragment identifier).",
				"browsers": "E,C,FF1,IE9,O9.5,S1",
				"ref": "http://www.w3.org/TR/css3-selectors/#root-pseudo",
				"syntax": "h2:target { background-color: yellow; }"
			},
			{
				"name": ":valid",
				"desc": "The :valid CSS pseudo-class represents any <input> or <form> element whose content validates correctly according to the input's type setting. This allows to easily make valid fields adopt an appearance that helps the user confirm that their data is formatted properly.",
				"browsers": "E,C,FF4,IE10,O10,S5",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/:valid",
				"syntax": "input:valid { border-color: green; }"
			},
			{
				"name": ":vertical",
				"desc": "Non-standard. Applies to any scrollbar pieces that have a vertical orientation.",
				"browsers": "C,S5",
				"ref": "https://webkit.org/blog/363/styling-scrollbars/"
			},
			{
				"name": ":visited",
				"desc": "The :visited CSS pseudo-class lets you select only links that have been visited. This style may be overridden by any other link-related pseudo-classes, that is :link, :hover, and :active, appearing in subsequent rules. In order to style appropriately links, you need to put the :visited rule after the :link rule but before the other ones, defined in the LVHA-order: :link — :visited — :hover — :active.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/:visited",
				"syntax": "a:visited { color: purple; }"
			},
			{
				"name": ":-webkit-any()",
				"desc": "Represents an element that is represented by the selector list passed as its argument. Standardized as :matches().",
				"browsers": "C,S5"
			},
			{
				"name": ":-webkit-full-screen",
				"desc": "Matches any element that has its fullscreen flag set. Standardized as :fullscreen.",
				"browsers": "C,S6"
			},
			{
				"name": ":window-inactive",
				"desc": "Non-standard. Applies to all scrollbar pieces. Indicates whether or not the window containing the scrollbar is currently active.",
				"browsers": "C,S3",
				"ref": "https://webkit.org/blog/363/styling-scrollbars/"
			}
		],
		"pseudoelements": [
			{
				"name": "::after",
				"desc": "Represents a styleable child pseudo-element immediately after the originating element’s actual content.",
				"browsers": "E,C,FF1.5,IE9,O9,S4",
				"ref": "http://www.w3.org/TR/css-pseudo-4/#selectordef-after",
				"syntax": "div::after { content: 'abc'; }"
			},
			{
				"name": "::backdrop",
				"desc": "Used to create a backdrop that hides the underlying document for an element in a top layer (such as an element that is displayed fullscreen).",
				"browsers": "E",
				"ref": "https://fullscreen.spec.whatwg.org/#::backdrop-pseudo-element",
				"syntax": "*|*:fullscreen::backdrop { position: fixed; }"
			},
			{
				"name": "::before",
				"desc": "Represents a styleable child pseudo-element immediately before the originating element’s actual content.",
				"browsers": "E,C,FF1.5,IE9,O9,S4",
				"ref": "http://www.w3.org/TR/css-pseudo-4/#selectordef-before",
				"syntax": "div::before { content: 'abc'; }"
			},
			{
				"name": "::content",
				"desc": "Deprecated. Matches the distribution list itself, on elements that have one. Use ::slotted for forward compatibility.",
				"browsers": "C35,O22",
				"ref": "http://www.w3.org/TR/css-scoping-1/#selectordef-content",
				"syntax": "::content > span { color: yellow; }"
			},
			{
				"name": "::cue",
				"browsers": "C,O16,S6",
				"ref": "https://w3c.github.io/webvtt/#the-cue-pseudo-element",
				"syntax": "::cue { color: red; }"
			},
			{
				"name": "::cue()",
				"browsers": "C,O16,S6",
				"ref": "https://w3c.github.io/webvtt/#selectordef-cue-selector",
				"syntax": "::cue(v(voice=woman)) { color: red; }"
			},
			{
				"name": "::cue-region",
				"browsers": "C,O16,S6",
				"ref": "https://w3c.github.io/webvtt/#the-cue-region-pseudo-element",
				"syntax": "::cue-region { border: none; }"
			},
			{
				"name": "::cue-region()",
				"browsers": "C,O16,S6",
				"ref": "https://w3c.github.io/webvtt/#the-cue-region-pseudo-element",
				"syntax": "::cue-region(v(voice=woman)) { color: red; }"
			},
			{
				"name": "::first-letter",
				"desc": "Represents the first letter of an element, if it is not preceded by any other content (such as images or inline tables) on its line.",
				"browsers": "E,C,FF1.5,IE9,O7,S1",
				"ref": "http://www.w3.org/TR/css-pseudo-4/#first-letter-pseudo",
				"syntax": "p::first-letter { font-size: 200%; }"
			},
			{
				"name": "::first-line",
				"desc": "Describes the contents of the first formatted line of its originating element.",
				"browsers": "E,C,FF1.5,IE9,O7,S1",
				"ref": "http://www.w3.org/TR/css-pseudo-4/#selectordef-first-line",
				"syntax": "p::first-line { color: green; }"
			},
			{
				"name": "::-moz-focus-inner",
				"browsers": "FF4"
			},
			{
				"name": "::-moz-focus-outer",
				"browsers": "FF4"
			},
			{
				"name": "::-moz-list-bullet",
				"desc": "Used to style the bullet of a list element. Similar to the standardized ::marker.",
				"browsers": "FF1"
			},
			{
				"name": "::-moz-list-number",
				"desc": "Used to style the numbers of a list element. Similar to the standardized ::marker.",
				"browsers": "FF1"
			},
			{
				"name": "::-moz-placeholder",
				"desc": "Represents placeholder text in an input field",
				"browsers": "FF19"
			},
			{
				"name": "::-moz-progress-bar",
				"desc": "Represents the bar portion of a progress bar.",
				"browsers": "FF9"
			},
			{
				"name": "::-moz-selection",
				"desc": "Represents the portion of a document that has been highlighted by the user.",
				"browsers": "FF1"
			},
			{
				"name": "::-ms-backdrop",
				"desc": "Used to create a backdrop that hides the underlying document for an element in a top layer (such as an element that is displayed fullscreen).",
				"browsers": "IE11",
				"ref": "https://fullscreen.spec.whatwg.org/#::backdrop-pseudo-element",
				"syntax": "*|*:-ms-fullscreen::-ms-backdrop { position: fixed; }"
			},
			{
				"name": "::-ms-browse",
				"desc": "Represents the browse button of an input type=file control.",
				"browsers": "E,IE10",
				"ref": "https://msdn.microsoft.com/en-us/library/windows/apps/hh779844.aspx"
			},
			{
				"name": "::-ms-check",
				"desc": "Represents the check of a checkbox or radio button input control.",
				"browsers": "E,IE10",
				"ref": "https://msdn.microsoft.com/en-us/library/windows/apps/hh465739.aspx"
			},
			{
				"name": "::-ms-clear",
				"desc": "Represents the clear button of a text input control",
				"browsers": "E,IE10",
				"ref": "https://msdn.microsoft.com/en-us/library/windows/apps/hh465740.aspx"
			},
			{
				"name": "::-ms-expand",
				"desc": "Represents the drop-down button of a select control.",
				"browsers": "E,IE10",
				"ref": "https://msdn.microsoft.com/en-us/library/windows/apps/hh465742.aspx"
			},
			{
				"name": "::-ms-fill",
				"desc": "Represents the bar portion of a progress bar.",
				"browsers": "E,IE10",
				"ref": "https://msdn.microsoft.com/en-us/library/windows/apps/hh465757.aspx"
			},
			{
				"name": "::-ms-fill-lower",
				"desc": "Represents the portion of the slider track from its smallest value up to the value currently selected by the thumb. In a left-to-right layout, this is the portion of the slider track to the left of the thumb.",
				"browsers": "E,IE10",
				"ref": "https://msdn.microsoft.com/en-us/library/windows/apps/hh465745.aspx"
			},
			{
				"name": "::-ms-fill-upper",
				"desc": "Represents the portion of the slider track from the value currently selected by the thumb up to the slider's largest value. In a left-to-right layout, this is the portion of the slider track to the right of the thumb.",
				"browsers": "E,IE10",
				"ref": "https://msdn.microsoft.com/en-us/library/windows/apps/hh465748.aspx"
			},
			{
				"name": "::-ms-reveal",
				"desc": "Represents the password reveal button of an input type=password control.",
				"browsers": "E,IE10",
				"ref": "https://msdn.microsoft.com/en-us/library/windows/apps/hh465773.aspx"
			},
			{
				"name": "::-ms-thumb",
				"desc": "Represents the portion of range input control (also known as a slider control) that the user drags.",
				"browsers": "E,IE10",
				"ref": "https://msdn.microsoft.com/en-us/library/windows/apps/hh465780.aspx"
			},
			{
				"name": "::-ms-ticks-after",
				"desc": "Represents the tick marks of a slider that begin just after the thumb and continue up to the slider's largest value. In a left-to-right layout, these are the ticks to the right of the thumb.",
				"browsers": "E,IE10",
				"ref": "https://msdn.microsoft.com/en-us/library/windows/apps/hh465789.aspx"
			},
			{
				"name": "::-ms-ticks-before",
				"desc": "Represents the tick marks of a slider that represent its smallest values up to the value currently selected by the thumb. In a left-to-right layout, these are the ticks to the left of the thumb.",
				"browsers": "E,IE10",
				"ref": "https://msdn.microsoft.com/en-us/library/windows/apps/hh465796.aspx"
			},
			{
				"name": "::-ms-tooltip",
				"desc": "Represents the tooltip of a slider (input type=range).",
				"browsers": "E,IE10",
				"ref": "https://msdn.microsoft.com/en-us/library/windows/apps/hh465805.aspx"
			},
			{
				"name": "::-ms-track",
				"desc": "Represents the track of a slider.",
				"browsers": "E,IE10",
				"ref": "https://msdn.microsoft.com/en-us/library/windows/apps/hh465813.aspx"
			},
			{
				"name": "::-ms-value",
				"desc": "Represents the content of a text or password input control, or a select control.",
				"browsers": "E,IE10",
				"ref": "https://msdn.microsoft.com/en-us/library/windows/apps/hh465820.aspx"
			},
			{
				"name": "::selection",
				"desc": "Represents the portion of a document that has been highlighted by the user.",
				"browsers": "E,C,IE9,O9.5,S1.1",
				"ref": "http://www.w3.org/TR/css-pseudo-4/#selectordef-selection",
				"syntax": "p::selection { color: red; }"
			},
			{
				"name": "::shadow",
				"desc": "Matches the shadow root if an element has a shadow tree.",
				"browsers": "C35,O22",
				"ref": "http://www.w3.org/TR/css-scoping-1/#shadow-pseudoelement",
				"syntax": "x-foo::shadow > span { color: red; }"
			},
			{
				"name": "::-webkit-file-upload-button",
				"browsers": "C,O,S6"
			},
			{
				"name": "::-webkit-inner-spin-button",
				"browsers": "C,O,S6"
			},
			{
				"name": "::-webkit-input-placeholder",
				"browsers": "C,S4"
			},
			{
				"name": "::-webkit-keygen-select",
				"browsers": "C,O,S6"
			},
			{
				"name": "::-webkit-meter-bar",
				"browsers": "E13,C,O15,S6"
			},
			{
				"name": "::-webkit-meter-even-less-good-value",
				"browsers": "E13,C,O15,S6"
			},
			{
				"name": "::-webkit-meter-optimum-value",
				"browsers": "E13,C,O15,S6"
			},
			{
				"name": "::-webkit-meter-suboptimal-value",
				"browsers": "E13,C,O15,S6"
			},
			{
				"name": "::-webkit-outer-spin-button",
				"browsers": "C,O,S6"
			},
			{
				"name": "::-webkit-progress-bar",
				"browsers": "C,S3"
			},
			{
				"name": "::-webkit-progress-inner-element",
				"browsers": "C,S3"
			},
			{
				"name": "::-webkit-progress-value",
				"browsers": "C,S3"
			},
			{
				"name": "::-webkit-resizer",
				"browsers": "C,S5"
			},
			{
				"name": "::-webkit-scrollbar",
				"browsers": "C,S5"
			},
			{
				"name": "::-webkit-scrollbar-button",
				"browsers": "C,S5"
			},
			{
				"name": "::-webkit-scrollbar-corner",
				"browsers": "C,S5"
			},
			{
				"name": "::-webkit-scrollbar-thumb",
				"browsers": "C,S5"
			},
			{
				"name": "::-webkit-scrollbar-track",
				"browsers": "C,S5"
			},
			{
				"name": "::-webkit-scrollbar-track-piece",
				"browsers": "C,S5"
			},
			{
				"name": "::-webkit-search-cancel-button",
				"browsers": "C,S4"
			},
			{
				"name": "::-webkit-search-decoration",
				"browsers": "C,S4"
			},
			{
				"name": "::-webkit-search-results-button",
				"browsers": "C,S4"
			},
			{
				"name": "::-webkit-search-results-decoration",
				"browsers": "C,S4"
			},
			{
				"name": "::-webkit-slider-runnable-track",
				"browsers": "C,O,S6"
			},
			{
				"name": "::-webkit-slider-thumb",
				"browsers": "C,O,S6"
			},
			{
				"name": "::-webkit-textfield-decoration-container",
				"browsers": "C,O,S6"
			},
			{
				"name": "::-webkit-validation-bubble",
				"browsers": "C,O,S6"
			},
			{
				"name": "::-webkit-validation-bubble-arrow",
				"browsers": "C,O,S6"
			},
			{
				"name": "::-webkit-validation-bubble-arrow-clipper",
				"browsers": "C,O,S6"
			},
			{
				"name": "::-webkit-validation-bubble-heading",
				"browsers": "C,O,S6"
			},
			{
				"name": "::-webkit-validation-bubble-message",
				"browsers": "C,O,S6"
			},
			{
				"name": "::-webkit-validation-bubble-text-block",
				"browsers": "C,O,S6"
			}
		],
		"properties": [
			{
				"name": "additive-symbols",
				"desc": "@counter-style descriptor. Specifies the symbols used by the marker-construction algorithm specified by the system descriptor. Needs to be specified if the counter system is 'additive'.",
				"browsers": "FF33",
				"ref": "http://www.w3.org/TR/css-counter-styles-3/#descdef-counter-style-additive-symbols",
				"syntax": "@counter-style { additive-symbols: 1 I; }",
				"restriction": "integer, string, image, identifier"
			},
			{
				"name": "align-content",
				"desc": "The CSS align-content property aligns a flex container's lines within the flex container when there is extra space on the cross-axis.",
				"browsers": "E,C29,FF22,IE11,O12.1,S9",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/align-content",
				"syntax": "p { align-content: flex-start; }",
				"restriction": "enum",
				"values": [
					{
						"name": "center",
						"desc": "Lines are packed toward the center of the flex container."
					},
					{
						"name": "flex-end",
						"desc": "Lines are packed toward the end of the flex container."
					},
					{
						"name": "flex-start",
						"desc": "Lines are packed toward the start of the flex container."
					},
					{
						"name": "space-around",
						"desc": "Lines are evenly distributed in the flex container, with half-size spaces on either end."
					},
					{
						"name": "space-between",
						"desc": "Lines are evenly distributed in the flex container."
					},
					{
						"name": "stretch",
						"desc": "Lines stretch to take up the remaining space."
					}
				]
			},
			{
				"name": "align-items",
				"desc": "The CSS align-items property defines how the browser distributes space between and around flex items along the cross-axis of their container. This means it works like justify-content but in the perpendicular direction.",
				"browsers": "E,C29,FF22,IE11,O12.1,S9",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/align-items",
				"syntax": "p { align-items: flex-start; }",
				"restriction": "enum",
				"values": [
					{
						"name": "baseline",
						"desc": "If the flex item’s inline axis is the same as the cross axis, this value is identical to 'flex-start'. Otherwise, it participates in baseline alignment."
					},
					{
						"name": "center",
						"desc": "The flex item’s margin box is centered in the cross axis within the line."
					},
					{
						"name": "flex-end",
						"desc": "The cross-end margin edge of the flex item is placed flush with the cross-end edge of the line."
					},
					{
						"name": "flex-start",
						"desc": "The cross-start margin edge of the flex item is placed flush with the cross-start edge of the line."
					},
					{
						"name": "stretch",
						"desc": "If the cross size property of the flex item computes to auto, and neither of the cross-axis margins are auto, the flex item is stretched."
					}
				]
			},
			{
				"name": "align-self",
				"desc": "The align-self CSS property aligns flex items of the current flex line overriding the align-items value. If any of the flex item's cross-axis margin is set to auto, then align-self is ignored.",
				"browsers": "E,C29,FF22,IE11,O12.1,S9",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/align-self",
				"syntax": "p { align-self: flex-start; }",
				"restriction": "enum",
				"values": [
					{
						"name": "auto",
						"desc": "Computes to the value of 'align-items' on the element’s parent, or 'stretch' if the element has no parent. On absolutely positioned elements, it computes to itself."
					},
					{
						"name": "baseline",
						"desc": "If the flex item’s inline axis is the same as the cross axis, this value is identical to 'flex-start'. Otherwise, it participates in baseline alignment."
					},
					{
						"name": "center",
						"desc": "The flex item’s margin box is centered in the cross axis within the line."
					},
					{
						"name": "flex-end",
						"desc": "The cross-end margin edge of the flex item is placed flush with the cross-end edge of the line."
					},
					{
						"name": "flex-start",
						"desc": "The cross-start margin edge of the flex item is placed flush with the cross-start edge of the line."
					},
					{
						"name": "stretch",
						"desc": "If the cross size property of the flex item computes to auto, and neither of the cross-axis margins are auto, the flex item is stretched."
					}
				]
			},
			{
				"name": "all",
				"desc": "The CSS all shorthand property resets all properties, apart from unicode-bidi and direction, to their initial or inherited value.",
				"browsers": "C37,FF27,O24",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/all",
				"syntax": "* { all: unset; }",
				"restriction": "enum",
				"values": []
			},
			{
				"name": "alt",
				"desc": "Provides alternative text for assistive technology to replace the genenerated content of a ::before or ::after element.",
				"browsers": "S9",
				"ref": "https://drafts.csswg.org/css-content-3/#propdef-alt",
				"syntax": "label::before { alt: 'alt text'; }",
				"restriction": "string, enum",
				"values": []
			},
			{
				"name": "animation",
				"desc": "The animation CSS property is a shorthand property for animation-name, animation-duration, animation-timing-function, animation-delay, animation-iteration-count, animation-direction, animation-fill-mode and animation-play-state.",
				"browsers": "E,C43,FF16,IE10,O12.1,S9",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/animation",
				"syntax": "div { animation: movearound 4s ease 3 normal; }",
				"restriction": "time, timing-function, enum, identifier, number",
				"values": [
					{
						"name": "alternate"
					},
					{
						"name": "alternate-reverse"
					},
					{
						"name": "backwards"
					},
					{
						"name": "both",
						"desc": "Both forwards and backwards fill modes are applied."
					},
					{
						"name": "forwards"
					},
					{
						"name": "infinite",
						"desc": "Causes the animation to repeat forever."
					},
					{
						"name": "none",
						"desc": "No animation is performed"
					},
					{
						"name": "normal",
						"desc": "Normal playback."
					},
					{
						"name": "reverse",
						"desc": "All iterations of the animation are played in the reverse direction from the way they were specified."
					}
				]
			},
			{
				"name": "animation-delay",
				"desc": "The animation-delay CSS property specifies when the animation should start. This lets the animation sequence begin some time after it's applied to an element.",
				"browsers": "E,C43,FF16,IE10,O12.1,S9",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/animation-delay",
				"syntax": "div { animation-delay: 4s; }",
				"restriction": "time"
			},
			{
				"name": "animation-direction",
				"desc": "The animation-direction CSS property indicates whether the animation should play in reverse on alternate cycles.",
				"browsers": "E,C43,FF16,IE10,O12.1,S9",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction",
				"syntax": "div { animation-direction: normal; }",
				"restriction": "enum",
				"values": [
					{
						"name": "alternate"
					},
					{
						"name": "alternate-reverse"
					},
					{
						"name": "normal",
						"desc": "Normal playback."
					},
					{
						"name": "reverse",
						"desc": "All iterations of the animation are played in the reverse direction from the way they were specified."
					}
				]
			},
			{
				"name": "animation-duration",
				"desc": "The animation-duration CSS property specifies the length of time that an animation should take to complete one cycle.",
				"browsers": "E,C43,FF16,IE10,O12.1,S9",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/animation-duration",
				"syntax": "div { animation-duration: 4s; }",
				"restriction": "time"
			},
			{
				"name": "animation-fill-mode",
				"desc": "The animation-fill-mode CSS property specifies how a CSS animation should apply styles to its target before and after it is executing.",
				"browsers": "E,C43,FF16,IE10,O12.1,S9",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode",
				"syntax": "div { animation-fill-mode: forwards; }",
				"restriction": "enum",
				"values": [
					{
						"name": "backwards"
					},
					{
						"name": "both",
						"desc": "Both forwards and backwards fill modes are applied."
					},
					{
						"name": "forwards"
					},
					{
						"name": "none",
						"desc": "There is no change to the property value between the time the animation is applied and the time the animation begins playing or after the animation completes."
					}
				]
			},
			{
				"name": "animation-iteration-count",
				"desc": "The animation-iteration-count CSS property defines the number of times an animation cycle should be played before stopping. If multiple values are specified, each time the animation is played, the next value in the list is used, cycling back to the first value after the last one is used.",
				"browsers": "E,C43,FF16,IE10,O12.1,S9",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/animation-iteration-count",
				"syntax": "div { animation-iteration-count: 3; }",
				"restriction": "number, enum",
				"values": [
					{
						"name": "infinite",
						"desc": "Causes the animation to repeat forever."
					}
				]
			},
			{
				"name": "animation-name",
				"desc": "The animation-name CSS property specifies a list of animations that should be applied to the selected element. Each name indicates a @keyframes at-rule that defines the property values for the animation sequence.",
				"browsers": "E,C43,FF16,IE10,O12.1,S9",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/animation-name",
				"syntax": "div { animation-name: movearound; }",
				"restriction": "identifier, enum",
				"values": [
					{
						"name": "none",
						"desc": "No animation is performed"
					}
				]
			},
			{
				"name": "animation-play-state",
				"desc": "The animation-play-state CSS property determines whether an animation is running or paused. This can be queried to determine whether or not the animation is currently running. In addition, its value can be set to pause and resume playback of an animation.",
				"browsers": "E,C43,FF16,IE10,O12.1,S9",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/animation-play-state",
				"syntax": "div { animation-play-state: running; }",
				"restriction": "enum",
				"values": [
					{
						"name": "paused"
					},
					{
						"name": "running"
					}
				]
			},
			{
				"name": "animation-timing-function",
				"desc": "The animation-timing-function CSS property specifies how a CSS animation should progress over the duration of each cycle. The possible values are one or several <timing-function>.",
				"browsers": "E,C43,FF16,IE10,O12.1,S9",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function",
				"syntax": "div { animation-timing-function: ease; }",
				"restriction": "timing-function"
			},
			{
				"name": "backface-visibility",
				"desc": "The CSS backface-visibility property determines whether or not the back face of the element is visible when facing the user. The back face of an element is always a transparent background, letting, when visible, a mirror image of the front face be displayed.",
				"browsers": "E,C36,FF16,IE10,O23",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/backface-visibility",
				"syntax": "div { backface-visibility: hidden; }",
				"restriction": "enum",
				"values": [
					{
						"name": "hidden",
						"desc": "Back side is hidden."
					},
					{
						"name": "visible",
						"desc": "Back side is visible."
					}
				]
			},
			{
				"name": "background",
				"desc": "The background CSS property is a shorthand for setting the individual background values in a single place in the style sheet. background can be used to set the values for one or more of: background-clip, background-color, background-image, background-origin, background-position, background-repeat, background-size, and background-attachment.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/background",
				"syntax": "section { background: url(image.png) no-repeat #999; }",
				"restriction": "enum, image, color, position, length, repeat, percentage, box",
				"values": [
					{
						"name": "fixed",
						"desc": "The background is fixed with regard to the viewport. In paged media where there is no viewport, a 'fixed' background is fixed with respect to the page box and therefore replicated on every page."
					},
					{
						"name": "local",
						"desc": "The background is fixed with regard to the element's contents: if the element has a scrolling mechanism, the background scrolls with the element's contents."
					},
					{
						"name": "scroll",
						"desc": "The background is fixed with regard to the element itself and does not scroll with its contents. (It is effectively attached to the element's border.)"
					}
				]
			},
			{
				"name": "background-attachment",
				"desc": "If a background-image is specified, the background-attachment CSS property determines whether that image's position is fixed within the viewport, or scrolls along with its containing block.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/background-attachment",
				"syntax": ".box { background-attachment: fixed; }",
				"restriction": "enum",
				"values": [
					{
						"name": "fixed",
						"desc": "The background is fixed with regard to the viewport. In paged media where there is no viewport, a 'fixed' background is fixed with respect to the page box and therefore replicated on every page."
					},
					{
						"name": "local",
						"desc": "The background is fixed with regard to the element’s contents: if the element has a scrolling mechanism, the background scrolls with the element’s contents.",
						"browsers": "E,C,FF25,IE9,O11.5,S5"
					},
					{
						"name": "scroll",
						"desc": "The background is fixed with regard to the element itself and does not scroll with its contents. (It is effectively attached to the element’s border.)"
					}
				]
			},
			{
				"name": "background-blend-mode",
				"desc": "The background-blend-mode CSS property describes how the element's background images should blend with each other and the element's background color. ",
				"browsers": "C35,FF30,O22,S7.1",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/background-blend-mode",
				"syntax": "div { background-blend-mode: saturation; }",
				"restriction": "enum",
				"values": [
					{
						"name": "normal",
						"desc": "Default attribute which specifies no blending"
					},
					{
						"name": "multiply"
					},
					{
						"name": "screen"
					},
					{
						"name": "overlay"
					},
					{
						"name": "darken"
					},
					{
						"name": "lighten"
					},
					{
						"name": "color-dodge"
					},
					{
						"name": "color-burn"
					},
					{
						"name": "hard-light"
					},
					{
						"name": "soft-light"
					},
					{
						"name": "difference"
					},
					{
						"name": "exclusion"
					},
					{
						"name": "hue",
						"browsers": "C35,FF30,O22"
					},
					{
						"name": "saturation",
						"browsers": "C35,FF30,O22"
					},
					{
						"name": "color",
						"browsers": "C35,FF30,O22"
					},
					{
						"name": "luminosity",
						"browsers": "C35,FF30,O22"
					}
				]
			},
			{
				"name": "background-clip",
				"desc": "The background-clip CSS property specifies whether an element's background, either the color or image, extends underneath its border.",
				"browsers": "E,C,FF4,IE9,O10.5,S3",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip",
				"syntax": "header { background-clip: border-box; }",
				"restriction": "box"
			},
			{
				"name": "background-color",
				"desc": "The background-color CSS property sets the background color of an element, either through a color value or the keyword transparent.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/background-color",
				"syntax": "body { background-color: white; }",
				"restriction": "color"
			},
			{
				"name": "background-image",
				"desc": "The CSS background-image property sets one or several background images for an element. The images are drawn on stacking context layers on top of each other. The first layer specified is drawn as if it is closest to the user.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/background-image",
				"syntax": "article { background-image: url(image.png); }",
				"restriction": "image, enum",
				"values": [
					{
						"name": "none",
						"desc": "Counts as an image layer but draws nothing."
					}
				]
			},
			{
				"name": "background-origin",
				"desc": "The background-origin CSS property determines the background positioning area, that is the position of the origin of an image specified using the background-image CSS property.",
				"browsers": "E,C,FF4,IE9,O10.5,S3",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/background-origin",
				"syntax": "header { background-origin: border-box; }",
				"restriction": "box"
			},
			{
				"name": "background-position",
				"desc": "The background-position CSS property sets the initial position for each defined background image, relative to the background position layer defined by background-origin.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/background-position",
				"syntax": "div { background-position: left center}",
				"restriction": "position, length, percentage"
			},
			{
				"name": "background-position-x",
				"desc": "The background-position-x CSS property sets the initial horizontal position, relative to the background position layer defined by background-origin for each defined background image. For more information, see the background-position property, which has been widely supported.",
				"browsers": "E,IE6",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/background-position-x",
				"syntax": "body { background-position-x: center; }",
				"restriction": "length, percentage",
				"values": [
					{
						"name": "center",
						"desc": "Equivalent to '50%' ('left 50%') for the horizontal position if the horizontal position is not otherwise specified, or '50%' ('top 50%') for the vertical position if it is."
					},
					{
						"name": "left",
						"desc": "Equivalent to '0%' for the horizontal position if one or two values are given, otherwise specifies the left edge as the origin for the next offset."
					},
					{
						"name": "right",
						"desc": "Equivalent to '100%' for the horizontal position if one or two values are given, otherwise specifies the right edge as the origin for the next offset."
					}
				]
			},
			{
				"name": "background-position-y",
				"desc": "The background-position-y CSS property sets the initial vertical position, relative to the background position layer defined by background-origin for each defined background image. For more information, see the background-position property, which has been widely supported for much longer.",
				"browsers": "E,IE6",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/background-position-y",
				"syntax": "body { background-position-y: center; }",
				"restriction": "length, percentage",
				"values": [
					{
						"name": "bottom",
						"desc": "Equivalent to '100%' for the vertical position if one or two values are given, otherwise specifies the bottom edge as the origin for the next offset."
					},
					{
						"name": "center",
						"desc": "Equivalent to '50%' ('left 50%') for the horizontal position if the horizontal position is not otherwise specified, or '50%' ('top 50%') for the vertical position if it is."
					},
					{
						"name": "top",
						"desc": "Equivalent to '0%' for the vertical position if one or two values are given, otherwise specifies the top edge as the origin for the next offset."
					}
				]
			},
			{
				"name": "background-repeat",
				"desc": "The background-repeat CSS property defines how background images are repeated. A background image can be repeated along the horizontal axis, the vertical axis, both axes, or not repeated at all.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat",
				"syntax": "article { background-repeat: no-repeat; }",
				"restriction": "repeat",
				"values": []
			},
			{
				"name": "background-size",
				"desc": "The background-size CSS property specifies the size of the background images. The size of the image can be fully constrained or only partially in order to preserve its intrinsic ratio.",
				"browsers": "E,C,FF4,IE9,O10,S4.1",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/background-size",
				"syntax": "header { background-size: 20px; }",
				"restriction": "length, percentage",
				"values": [
					{
						"name": "auto",
						"desc": "Resolved by using the image’s intrinsic ratio and the size of the other dimension, or failing that, using the image’s intrinsic size, or failing that, treating it as 100%."
					},
					{
						"name": "contain",
						"desc": "Scale the image, while preserving its intrinsic aspect ratio (if any), to the largest size such that both its width and its height can fit inside the background positioning area."
					},
					{
						"name": "cover",
						"desc": "Scale the image, while preserving its intrinsic aspect ratio (if any), to the smallest size such that both its width and its height can completely cover the background positioning area."
					}
				]
			},
			{
				"name": "behavior",
				"desc": "IE only. Used to extend behaviors of the browser.",
				"browsers": "IE6",
				"ref": "https://msdn.microsoft.com/en-us/ie/gg192966.aspx",
				"syntax": "div { behavior: url(http://example.com/png_fix.htc); }",
				"restriction": "url"
			},
			{
				"name": "block-size",
				"desc": "The block-size CSS property defines the horizontal or vertical size of an element's block depending on its writing mode. It corresponds to the width or the height property depending on the value defined for writing-mode.",
				"browsers": "FF41",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/block-size",
				"syntax": "header { block-size: 200px; }",
				"restriction": "length, percentage",
				"values": [
					{
						"name": "auto",
						"desc": "Depends on the values of other properties."
					}
				]
			},
			{
				"name": "border",
				"desc": "The border CSS property is a shorthand property for setting the individual border property values in a single place in the style sheet. border can be used to set the values for one or more of: border-width, border-style, border-color.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/border",
				"syntax": "header { border: 5px solid red;}",
				"restriction": "length, line-width, line-style, color"
			},
			{
				"name": "border-block-end",
				"desc": "The border-block-end CSS property is a shorthand property for setting the individual logical block end border property values in a single place in the style sheet. border-block-end can be used to set the values for one or more of: border-block-end-width, border-block-end-style, border-block-end-color. It maps to a physical border depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top, border-right, border-bottom, or border-left property depending on the values defined for writing-mode, direction, and text-orientation.",
				"browsers": "FF41",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-end",
				"syntax": "header { border-block-end: 5px solid red;}",
				"restriction": "length, line-width, line-style, color"
			},
			{
				"name": "border-block-start",
				"desc": "The border-block-start CSS property is a shorthand property for setting the individual logical block start border property values in a single place in the style sheet. border-block-start can be used to set the values for one or more of: border-block-start-width, border-block-start-style, border-block-start-color. It maps to a physical border depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top, border-right, border-bottom, or border-left property depending on the values defined for writing-mode, direction, and text-orientation.",
				"browsers": "FF41",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-start",
				"syntax": "header { border-block-start: 5px solid red;}",
				"restriction": "length, line-width, line-style, color"
			},
			{
				"name": "border-block-end-color",
				"desc": "The border-block-end-color CSS property defines the color of the logical block end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-color, border-right-color, border-bottom-color, or border-left-color property depending on the values defined for writing-mode, direction, and text-orientation.",
				"browsers": "FF41",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-end-color",
				"syntax": "article { border-block-end-color: red; }",
				"restriction": "color"
			},
			{
				"name": "border-block-start-color",
				"desc": "The border-block-start-color CSS property defines the color of the logical block start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-color, border-right-color, border-bottom-color, or border-left-color property depending on the values defined for writing-mode, direction, and text-orientation.",
				"browsers": "FF41",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-start-color",
				"syntax": "article { border-block-start-color: red; }",
				"restriction": "color"
			},
			{
				"name": "border-block-end-style",
				"desc": "The border-block-end-style CSS property defines the style of the logical block end border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-style, border-right-style, border-bottom-style, or border-left-style property depending on the values defined for writing-mode, direction, and text-orientation.",
				"browsers": "FF41",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-end-style",
				"syntax": "article { border-block-end-style: solid; }",
				"restriction": "line-style"
			},
			{
				"name": "border-block-start-style",
				"desc": "The border-block-start-style CSS property defines the style of the logical block start border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-style, border-right-style, border-bottom-style, or border-left-style property depending on the values defined for writing-mode, direction, and text-orientation.",
				"browsers": "FF41",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-start-style",
				"syntax": "article { border-block-start-style: solid; }",
				"restriction": "lline-style"
			},
			{
				"name": "border-block-end-width",
				"desc": "The border-block-end-width CSS property defines the width of the logical block end border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-width, border-right-width, border-bottom-width, or border-left-width property depending on the values defined for writing-mode, direction, and text-orientation.",
				"browsers": "FF41",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-end-width",
				"syntax": "article { border-block-end-width: 50px; }",
				"restriction": "length, line-width"
			},
			{
				"name": "border-block-start-width",
				"desc": "The border-block-start-width CSS property defines the width of the logical block start border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-width, border-right-width, border-bottom-width, or border-left-width property depending on the values defined for writing-mode, direction, and text-orientation.",
				"browsers": "FF41",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-start-width",
				"syntax": "article { border-block-start-width: 50px; }",
				"restriction": "length, line-width"
			},
			{
				"name": "border-bottom",
				"desc": "The border-bottom CSS property is a shorthand that sets the values of border-bottom-color, border-bottom-style, and border-bottom-width. These properties describe the bottom border of elements.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom",
				"syntax": "header { border-bottom: 5px solid red;}",
				"restriction": "length, line-width, line-style, color"
			},
			{
				"name": "border-bottom-color",
				"desc": "The border-bottom-color CSS property sets the color of the bottom border of an element. Note that in many cases the shorthand CSS properties border-color or border-bottom are more convenient and preferable.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-color",
				"syntax": "td { border-bottom-color: blue; }",
				"restriction": "color"
			},
			{
				"name": "border-bottom-left-radius",
				"desc": "The border-bottom-left-radius CSS property sets the rounding of the bottom-left corner of the element. The rounding can be a circle or an ellipse, or if one of the value is 0 no rounding is done and the corner is square.",
				"browsers": "E,C,FF4,IE9,O10.5,S5",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-left-radius",
				"syntax": "td { border-bottom-left-radius: 4px; }",
				"restriction": "length, percentage"
			},
			{
				"name": "border-bottom-right-radius",
				"desc": "The border-bottom-right-radius CSS property sets the rounding of the bottom-right corner of the element. The rounding can be a circle or an ellipse, or if one of the value is 0 no rounding is done and the corner is square.",
				"browsers": "E,C,FF4,IE9,O10.5,S5",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-right-radius",
				"syntax": "td { border-bottom-right-radius: 4px; }",
				"restriction": "length, percentage"
			},
			{
				"name": "border-bottom-style",
				"desc": "The border-bottom-style CSS property sets the line style of the bottom border of a box.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-style",
				"syntax": "td { border-bottom-style: solid; }",
				"restriction": "line-style"
			},
			{
				"name": "border-bottom-width",
				"desc": "The border-bottom-width CSS property sets the width of the bottom border of a box.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-width",
				"syntax": "td { border-bottom-width: 2px; }",
				"restriction": "length, line-width"
			},
			{
				"name": "border-collapse",
				"desc": "The border-collapse CSS property determines whether a table's borders are separated or collapsed. In the separated model, adjacent cells each have their own distinct borders. In the collapsed model, adjacent table cells share borders.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/border-collapse",
				"syntax": "table { border-collapse: collapse; }",
				"restriction": "enum",
				"values": [
					{
						"name": "collapse",
						"desc": "Selects the collapsing borders model."
					},
					{
						"name": "separate",
						"desc": "Selects the separated borders border model."
					}
				]
			},
			{
				"name": "border-color",
				"desc": "The border-color CSS property is a shorthand for setting the color of the four sides of an element's border: border-top-color, border-right-color, border-bottom-color, border-left-color",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/border-color",
				"syntax": "td { border-color: blue; }",
				"restriction": "color",
				"values": []
			},
			{
				"name": "border-image",
				"desc": "The border-image CSS property allows drawing an image on the borders of elements. This makes drawing complex looking widgets much simpler than it has been and removes the need for nine boxes in some cases. The border-image is used instead of the border styles given by the border-style properties. Though the specification requires that border-style must be present if border-image is used, some browsers may not implement this.",
				"browsers": "E,C16,FF15,IE11,O15,S6",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/border-image",
				"syntax": "td { border-image: url(border.png) 30 30 round;}",
				"restriction": "length, percentage, number, url, enum",
				"values": [
					{
						"name": "auto",
						"desc": "If 'auto' is specified then the border image width is the intrinsic width or height (whichever is applicable) of the corresponding image slice. If the image does not have the required intrinsic dimension then the corresponding border-width is used instead."
					},
					{
						"name": "fill",
						"desc": "Causes the middle part of the border-image to be preserved."
					},
					{
						"name": "none",
						"desc": "Use the border styles."
					},
					{
						"name": "repeat"
					},
					{
						"name": "round",
						"desc": "The image is tiled (repeated) to fill the area. If it does not fill the area with a whole number of tiles, the image is rescaled so that it does."
					},
					{
						"name": "space",
						"desc": "The image is tiled (repeated) to fill the area. If it does not fill the area with a whole number of tiles, the extra space is distributed around the tiles."
					},
					{
						"name": "stretch",
						"desc": "The image is stretched to fill the area."
					},
					{
						"name": "url()"
					}
				]
			},
			{
				"name": "border-image-outset",
				"desc": "The border-image-outset property describes by what amount the border image area extends beyond the border box.",
				"browsers": "E,C16,FF15,IE11,O15,S6",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-outset",
				"syntax": "div { border-image-outset: 3px; }",
				"restriction": "length, number"
			},
			{
				"name": "border-image-repeat",
				"desc": "The border-image-repeat CSS property defines how the middle part of a border image is handled so that it can match the size of the border. It has a one-value syntax that describes the behavior of all the sides, and a two-value syntax that sets a different value for the horizontal and vertical behavior.",
				"browsers": "E,C16,FF15,IE11,O15,S6",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-repeat",
				"syntax": "td { border-image-repeat: stretch; }",
				"restriction": "enum",
				"values": [
					{
						"name": "repeat"
					},
					{
						"name": "round",
						"desc": "The image is tiled (repeated) to fill the area. If it does not fill the area with a whole number of tiles, the image is rescaled so that it does."
					},
					{
						"name": "space",
						"desc": "The image is tiled (repeated) to fill the area. If it does not fill the area with a whole number of tiles, the extra space is distributed around the tiles."
					},
					{
						"name": "stretch",
						"desc": "The image is stretched to fill the area."
					}
				]
			},
			{
				"name": "border-image-slice",
				"desc": "The border-image-slice CSS property divides the image specified by border-image-source in nine regions: the four corners, the four edges and the middle. It does this by specifying 4 inwards offsets.",
				"browsers": "E,C16,FF15,IE11,O15,S6",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-slice",
				"syntax": "div { border-image-slice: 10%; }",
				"restriction": "number, percentage",
				"values": [
					{
						"name": "fill",
						"desc": "Causes the middle part of the border-image to be preserved."
					}
				]
			},
			{
				"name": "border-image-source",
				"desc": "The border-image-source CSS property defines the <image> to use instead of the style of the border. If this property is set to none, the style defined by border-style is used instead.",
				"browsers": "E,C16,FF15,IE11,O15,S6",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-source",
				"syntax": "aside { border-image-source: url(image.png); }",
				"restriction": "image",
				"values": [
					{
						"name": "none",
						"desc": "Use the border styles."
					}
				]
			},
			{
				"name": "border-image-width",
				"desc": "The border-image-width CSS property defines the width of the border image by defining inward offsets from the border edges. If the border-image-width is greater than the border-width, then the border image extends beyond the padding (and/or content) edge.",
				"browsers": "E,C16,FF15,IE11,O15,S6",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-width",
				"syntax": ".album { border-image-width: 4px; }",
				"restriction": "length, percentage, number",
				"values": [
					{
						"name": "auto",
						"desc": "The border image width is the intrinsic width or height (whichever is applicable) of the corresponding image slice. If the image does not have the required intrinsic dimension then the corresponding border-width is used instead."
					}
				]
			},
			{
				"name": "border-inline-end",
				"desc": "The border-inline-end CSS property is a shorthand property for setting the individual logical inline end border property values in a single place in the style sheet. border-inline-end can be used to set the values for one or more of: border-inline-end-width, border-inline-end-style, border-inline-end-color. It maps to a physical border depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top, border-right, border-bottom, or border-left property depending on the values defined for writing-mode, direction, and text-orientation.",
				"browsers": "FF41",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-end",
				"syntax": "header { border-inline-end: 5px solid red;}",
				"restriction": "length, line-width, line-style, color"
			},
			{
				"name": "border-inline-start",
				"desc": "The border-inline-start CSS property is a shorthand property for setting the individual logical inline start border property values in a single place in the style sheet. border-inline-start can be used to set the values for one or more of: border-inline-start-width, border-inline-start-style, border-inline-start-color. It maps to a physical border depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top, border-right, border-bottom, or border-left property depending on the values defined for writing-mode, direction, and text-orientation.",
				"browsers": "FF41",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-start",
				"syntax": "header { border-inline-start: 5px solid red;}",
				"restriction": "length, line-width, line-style, color"
			},
			{
				"name": "border-inline-end-color",
				"desc": "The border-inline-end-color CSS property defines the color of the logical inline end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-color, border-right-color, border-bottom-color, or border-left-color property depending on the values defined for writing-mode, direction, and text-orientation.",
				"browsers": "FF41",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-end-color",
				"syntax": "article { border-inline-end-color: red; }",
				"restriction": "color"
			},
			{
				"name": "border-inline-start-color",
				"desc": "The border-inline-start-color CSS property defines the color of the logical inline start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-color, border-right-color, border-bottom-color, or border-left-color property depending on the values defined for writing-mode, direction, and text-orientation.",
				"browsers": "FF41",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-start-color",
				"syntax": "article { border-inline-start-color: red; }",
				"restriction": "color"
			},
			{
				"name": "border-inline-end-style",
				"desc": "The border-inline-end-style CSS property defines the style of the logical inline end border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-style, border-right-style, border-bottom-style, or border-left-style property depending on the values defined for writing-mode, direction, and text-orientation.",
				"browsers": "FF41",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-end-style",
				"syntax": "article { border-inline-end-style: solid; }",
				"restriction": "line-style"
			},
			{
				"name": "border-inline-start-style",
				"desc": "The border-inline-start-style CSS property defines the style of the logical inline start border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-style, border-right-style, border-bottom-style, or border-left-style property depending on the values defined for writing-mode, direction, and text-orientation.",
				"browsers": "FF41",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-start-style",
				"syntax": "article { border-inline-start-style: solid; }",
				"restriction": "lline-style"
			},
			{
				"name": "border-inline-end-width",
				"desc": "The border-inline-end-width CSS property defines the width of the logical inline end border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-width, border-right-width, border-bottom-width, or border-left-width property depending on the values defined for writing-mode, direction, and text-orientation.",
				"browsers": "FF41",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-end-width",
				"syntax": "article { border-inline-end-width: 50px; }",
				"restriction": "length, line-width"
			},
			{
				"name": "border-inline-start-width",
				"desc": "The border-inline-start-width CSS property defines the width of the logical inline start border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-width, border-right-width, border-bottom-width, or border-left-width property depending on the values defined for writing-mode, direction, and text-orientation.",
				"browsers": "FF41",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-start-width",
				"syntax": "article { border-inline-start-width: 50px; }",
				"restriction": "length, line-width"
			},
			{
				"name": "border-left",
				"desc": "The border-left CSS property is a shorthand that sets the values of border-left-color, border-left-style, and border-left-width. These properties describe the left border of elements.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/border-left",
				"syntax": "header { border-left: 5px solid red;}",
				"restriction": "length, line-width, line-style, color"
			},
			{
				"name": "border-left-color",
				"desc": "The border-left-color CSS property sets the color of the left border of an element. Note that in many cases the shorthand CSS properties border-color or border-left are more convenient and preferable.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-color",
				"syntax": "td { border-left-color: blue; }",
				"restriction": "color"
			},
			{
				"name": "border-left-style",
				"desc": "The border-left-style CSS property sets the line style of the left border of a box.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-style",
				"syntax": "td { border-left-style: solid; }",
				"restriction": "line-style"
			},
			{
				"name": "border-left-width",
				"desc": "The border-left-width CSS property sets the width of the left border of a box.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-width",
				"syntax": "td { border-left-width: 2px; }",
				"restriction": "length, line-width"
			},
			{
				"name": "border-radius",
				"desc": "The border-radius CSS property allows Web authors to define how rounded border corners are. The curve of each corner is defined using one or two radii, defining its shape: circle or ellipse.",
				"browsers": "E,C,FF4,IE9,O10.5,S5",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius",
				"syntax": "td { border-radius: 3px 4px; }",
				"restriction": "length, percentage"
			},
			{
				"name": "border-right",
				"desc": "The border-right CSS property is a shorthand that sets the values of border-right-color, border-right-style, and border-right-width. These properties describe the right border of elements.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/border-right",
				"syntax": "header { border-right: 5px solid red;}",
				"restriction": "length, line-width, line-style, color"
			},
			{
				"name": "border-right-color",
				"desc": "The border-right-color CSS property sets the color of the right border of an element. Note that in many cases the shorthand CSS properties  border-color or border-right are more convenient and preferable.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-color",
				"syntax": "td { border-right-color: blue; }",
				"restriction": "color"
			},
			{
				"name": "border-right-style",
				"desc": "The border-right-style CSS property sets the line style of the right border of a box.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-style",
				"syntax": "td { border-right-style: solid; }",
				"restriction": "line-style"
			},
			{
				"name": "border-right-width",
				"desc": "The border-right-width CSS property sets the width of the right border of a box.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-width",
				"syntax": "td { border-right-width: 2px; }",
				"restriction": "length, line-width"
			},
			{
				"name": "border-spacing",
				"desc": "The border-spacing CSS property specifies the distance between the borders of adjacent table cells (only for the separated borders model). This is equivalent to the cellspacing attribute in presentational HTML, but an optional second value can be used to set different horizontal and vertical spacing.",
				"browsers": "E,C,FF1,IE8,O7,S1.2",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/border-spacing",
				"syntax": "table { border-spacing: 10px 50px; }",
				"restriction": "length"
			},
			{
				"name": "border-style",
				"desc": "The border-style property is a shorthand property for setting the line style for all four sides of the element´s border.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/border-style",
				"syntax": "td { border-style: solid; }",
				"restriction": "line-style",
				"values": []
			},
			{
				"name": "border-top",
				"desc": "The border-top CSS property is a shorthand that sets the values of border-top-color, border-top-style, and border-top-width. These properties describe the top border of elements.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/border-top",
				"syntax": "header { border-top: 5px solid red;}",
				"restriction": "length, line-width, line-style, color"
			},
			{
				"name": "border-top-color",
				"desc": "The border-top-color CSS property sets the color of the top border of an element. Note that in many cases the shorthand CSS properties border-color or border-top are more convenient and preferable.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-color",
				"syntax": "td { border-top-color: blue; }",
				"restriction": "color"
			},
			{
				"name": "border-top-left-radius",
				"desc": "Defines the radii of the top left outer border edge.",
				"browsers": "E,C,FF4,IE9,O10.5,S5",
				"ref": "http://www.w3.org/TR/css3-background/#border-radius",
				"syntax": "td { border-top-left-radius: 4px; }",
				"restriction": "length, percentage"
			},
			{
				"name": "border-top-right-radius",
				"desc": "The border-top-right-radius CSS property sets the rounding of the top-right corner of the element. The rounding can be a circle or an ellipse, or if one of the value is 0 no rounding is done and the corner is square.",
				"browsers": "E,C,FF4,IE9,O10.5,S5",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-right-radius",
				"syntax": "td { border-top-right-radius: 4px; }",
				"restriction": "length, percentage"
			},
			{
				"name": "border-top-style",
				"desc": "The border-top-style CSS property sets the line style of the top border of a box.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-style",
				"syntax": "td { border-top-style: solid; }",
				"restriction": "line-style"
			},
			{
				"name": "border-top-width",
				"desc": "The border-top-width CSS property sets the width of the top border of a box.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-width",
				"syntax": "td { border-top-width: 2px; }",
				"restriction": "length, line-width"
			},
			{
				"name": "border-width",
				"desc": "The border-width property is a shorthand property for setting border-top-width, border-right-width, border-bottom-width and border-left-width of a box at the same place.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/border-width",
				"syntax": "td { border-width: 2px; }",
				"restriction": "length, line-width",
				"values": []
			},
			{
				"name": "bottom",
				"desc": "The bottom CSS property participates in specifying the position of positioned elements.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/bottom",
				"syntax": "article { bottom: 50px; }",
				"restriction": "length, percentage",
				"values": [
					{
						"name": "auto",
						"desc": "For non-replaced elements, the effect of this value depends on which of related properties have the value 'auto' as well"
					}
				]
			},
			{
				"name": "box-decoration-break",
				"desc": "The box-decoration-break CSS property specifies how the background, padding, border, border-image, box-shadow, margin and clip of an element is applied when the box for the element is fragmented.  Fragmentation occurs when an inline box wraps onto multiple lines, or when a block spans more than one column inside a column layout container, or spans a page break when printed.  Each piece of the rendering for the element is called a fragment.",
				"browsers": "FF32,O11",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/box-decoration-break",
				"syntax": "div { box-decoration-break: clone; }",
				"restriction": "enum",
				"values": [
					{
						"name": "clone"
					},
					{
						"name": "slice"
					}
				]
			},
			{
				"name": "box-shadow",
				"desc": "The box-shadow property describes one or more shadow effects as a comma-separated list. It enables you to cast a drop shadow from the frame of almost any element. If a border-radius is specified on the element with a box shadow, the box shadow takes on the same rounded corners. The z-ordering of multiple box shadows is the same as multiple text shadows (the first specified shadow is on top).",
				"browsers": "E,C,FF4,IE9,O11.5,S5.1",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow",
				"syntax": "div { box-shadow: rgba(0,0,0,0.4) 10px 10px inset; }",
				"restriction": "length, color, enum",
				"values": [
					{
						"name": "inset"
					}
				]
			},
			{
				"name": "box-sizing",
				"desc": "The box-sizing property is used to alter the default CSS box model used to calculate width and height of the elements. It is possible to use this property to emulate the behavior of browsers that do not correctly support the CSS box model specification.",
				"browsers": "E,C10,FF29,IE8,O8,S5.1",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing",
				"syntax": "div { box-sizing: content-box; }",
				"restriction": "enum",
				"values": [
					{
						"name": "border-box"
					},
					{
						"name": "content-box"
					}
				]
			},
			{
				"name": "break-after",
				"desc": "The break-after CSS property describes the page, column, or region break behavior (in other words, how and whether to break) after the generated box. If there is no generated box, the property is ignored.",
				"browsers": "E,IE10,O11.5",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/break-after",
				"syntax": "h2 { break-after: column; }",
				"restriction": "enum",
				"values": [
					{
						"name": "always",
						"desc": "Always force a page break before/after the generated box."
					},
					{
						"name": "auto",
						"desc": "Neither force nor forbid a page/column break before/after the principal box."
					},
					{
						"name": "avoid",
						"desc": "Avoid a break before/after the principal box."
					},
					{
						"name": "avoid-column",
						"desc": "Avoid a column break before/after the principal box."
					},
					{
						"name": "avoid-page",
						"desc": "Avoid a page break before/after the principal box."
					},
					{
						"name": "column",
						"desc": "Always force a column break before/after the principal box."
					},
					{
						"name": "left",
						"desc": "Force one or two page breaks before/after the generated box so that the next page is formatted as a left page."
					},
					{
						"name": "page",
						"desc": "Always force a page break before/after the principal box."
					},
					{
						"name": "right",
						"desc": "Force one or two page breaks before/after the generated box so that the next page is formatted as a right page."
					}
				]
			},
			{
				"name": "break-before",
				"desc": "The break-before CSS property describes the page, column or region break behavior before the generated box. If there is no generated box, the property is ignored.",
				"browsers": "E,IE10,O11.5",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/break-before",
				"syntax": "h2 { break-before: column; }",
				"restriction": "enum",
				"values": [
					{
						"name": "always",
						"desc": "Always force a page break before/after the generated box."
					},
					{
						"name": "auto",
						"desc": "Neither force nor forbid a page/column break before/after the principal box."
					},
					{
						"name": "avoid",
						"desc": "Avoid a break before/after the principal box."
					},
					{
						"name": "avoid-column",
						"desc": "Avoid a column break before/after the principal box."
					},
					{
						"name": "avoid-page",
						"desc": "Avoid a page break before/after the principal box."
					},
					{
						"name": "column",
						"desc": "Always force a column break before/after the principal box."
					},
					{
						"name": "left",
						"desc": "Force one or two page breaks before/after the generated box so that the next page is formatted as a left page."
					},
					{
						"name": "page",
						"desc": "Always force a page break before/after the principal box."
					},
					{
						"name": "right",
						"desc": "Force one or two page breaks before/after the generated box so that the next page is formatted as a right page."
					}
				]
			},
			{
				"name": "break-inside",
				"desc": "The break-inside CSS property describes how the page, column or region break inside the generated box. If there is no generated box, the property is ignored.",
				"browsers": "E,IE10,O11.5",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/break-inside",
				"syntax": "h2 { break-inside: avoid-column; }",
				"restriction": "enum",
				"values": [
					{
						"name": "auto",
						"desc": "Impose no additional breaking constraints within the box."
					},
					{
						"name": "avoid",
						"desc": "Avoid breaks within the box."
					},
					{
						"name": "avoid-column",
						"desc": "Avoid a column break within the box."
					},
					{
						"name": "avoid-page",
						"desc": "Avoid a page break within the box."
					}
				]
			},
			{
				"name": "caption-side",
				"desc": "The caption-side CSS property positions the content of a table's <caption> on the specified side.",
				"browsers": "E,C,FF,IE8,O,S",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/caption-side",
				"syntax": "caption { caption-side: bottom; }",
				"restriction": "enum",
				"values": [
					{
						"name": "bottom",
						"desc": "Positions the caption box below the table box."
					},
					{
						"name": "top",
						"desc": "Positions the caption box above the table box."
					}
				]
			},
			{
				"name": "clear",
				"desc": "The clear CSS property specifies whether an element can be next to floating elements that precede it or must be moved down (cleared) below them. The clear property applies to both floating and non-floating elements.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/clear",
				"syntax": "footer { clear: both; }",
				"restriction": "enum",
				"values": [
					{
						"name": "both",
						"desc": "The clearance of the generated box is set to the amount necessary to place the top border edge below the bottom outer edge of any right-floating and left-floating boxes that resulted from elements earlier in the source document."
					},
					{
						"name": "left",
						"desc": "The clearance of the generated box is set to the amount necessary to place the top border edge below the bottom outer edge of any left-floating boxes that resulted from elements earlier in the source document."
					},
					{
						"name": "none",
						"desc": "No constraint on the box's position with respect to floats."
					},
					{
						"name": "right",
						"desc": "The clearance of the generated box is set to the amount necessary to place the top border edge below the bottom outer edge of any right-floating boxes that resulted from elements earlier in the source document."
					}
				]
			},
			{
				"name": "clip",
				"desc": "The clip CSS property defines what portion of an element is visible. The clip property applies only to absolutely positioned elements, that is elements with position:absolute or position:fixed.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/clip",
				"syntax": "span { clip: rect(0px, 60px, 200px, 0px); }",
				"restriction": "enum",
				"values": [
					{
						"name": "auto",
						"desc": "The element does not clip."
					},
					{
						"name": "rect()"
					}
				]
			},
			{
				"name": "clip-path",
				"desc": "The clip-path CSS property prevents a portion of an element from getting displayed by defining a clipping region to be displayed i.e, only a specific region of the element is displayed. The clipping region is a path specified as a URL referencing an inline or external SVG, or shape method such as circle(). The clip-path property replaces the now deprecated clip property.",
				"browsers": "FF3.5",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path",
				"restriction": "url, shape, geometry-box, enum",
				"values": [
					{
						"name": "none",
						"desc": "No clipping path gets created."
					},
					{
						"name": "url()",
						"desc": "References a <clipPath> element to create a clipping path."
					}
				]
			},
			{
				"name": "clip-rule",
				"desc": "Indicates the algorithm which is to be used to determine what parts of the canvas are included inside the shape.",
				"browsers": "E,C5,FF3,IE10,O9,S6",
				"ref": "http://www.w3.org/TR/css-masking-1/#the-clip-rule",
				"restriction": "enum",
				"values": [
					{
						"name": "evenodd"
					},
					{
						"name": "nonzero"
					}
				]
			},
			{
				"name": "color",
				"desc": "The color property sets the foreground color of an element's text content, and its decorations. It doesn't affect any other characteristic of the element; it should really be called text-color and would have been named so, save for historical reasons and its appearance in CSS Level 1.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/color",
				"syntax": "body { color: red; }",
				"restriction": "color"
			},
			{
				"name": "color-interpolation-filters",
				"desc": "Specifies the color space for imaging operations performed via filter effects.",
				"browsers": "E,C5,FF3,IE10,O9,S6",
				"ref": "http://www.w3.org/TR/filter-effects/#ColorInterpolationFiltersProperty",
				"restriction": "enum",
				"values": [
					{
						"name": "auto",
						"desc": "Color operations are not required to occur in a particular color space."
					},
					{
						"name": "linearRGB"
					},
					{
						"name": "sRGB"
					}
				]
			},
			{
				"name": "column-count",
				"desc": "The column-count CSS property describes the number of columns of the element.",
				"browsers": "E,IE10,O11.5,S9",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/column-count",
				"syntax": "div { column-count: 3; }",
				"restriction": "integer, enum",
				"values": [
					{
						"name": "auto",
						"desc": "Determines the number of columns by the 'column-width' property and the element width."
					}
				]
			},
			{
				"name": "column-fill",
				"desc": "The column-fill CSS property controls how contents are partitioned into columns. Contents are either balanced, which means that contents in all columns will have the same height or, when using auto, just take up the room the content needs.",
				"browsers": "E,IE10,O11.5,S9",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/column-fill",
				"syntax": "article { column-fill: balance; }",
				"restriction": "enum",
				"values": [
					{
						"name": "auto",
						"desc": "Fills columns sequentially."
					},
					{
						"name": "balance"
					}
				]
			},
			{
				"name": "column-gap",
				"desc": "The column-gap CSS property sets the size of the gap between columns for elements which are specified to be displayed as multi-column elements.",
				"browsers": "E,IE10,O11.5,S9",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap",
				"syntax": "div { column-gap: 10px; }",
				"restriction": "length, enum",
				"values": [
					{
						"name": "normal",
						"desc": "User agent specific and typically equivalent to 1em."
					}
				]
			},
			{
				"name": "column-rule",
				"desc": "In multi-column layouts, the column-rule CSS property specifies a straight line, or \"rule\", to be drawn between each column. It is a convenient shorthand to avoid setting each of the individual column-rule-* properties separately : column-rule-width, column-rule-style and column-rule-color.",
				"browsers": "E,IE10,O11.5,S9",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule",
				"syntax": "header { column-rule: 5px solid red;}",
				"restriction": "length, line-width, line-style, color"
			},
			{
				"name": "column-rule-color",
				"desc": "The column-rule-color CSS property lets you set the color of the \"rule\" or line drawn between columns in multi-column layouts.",
				"browsers": "E,IE10,O11.6",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule-color",
				"syntax": "div { column-rule-color: #ff0; }",
				"restriction": "color"
			},
			{
				"name": "column-rule-style",
				"desc": "The column-rule-style CSS property lets you set the style of the rule drawn between columns in multi-column layouts.",
				"browsers": "E,IE10,O11.5,S6",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule-style",
				"syntax": "div { column-rule-style: solid; }",
				"restriction": "line-style"
			},
			{
				"name": "column-rule-width",
				"desc": "The column-rule-width CSS property lets you set the width of the rule drawn between columns in multi-column layouts.",
				"browsers": "E,IE10,O11.5,S9",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule-width",
				"syntax": "div { column-rule-width: 3px; }",
				"restriction": "length, line-width"
			},
			{
				"name": "columns",
				"desc": "The columns CSS property is a shorthand property allowing to set both the column-width and the column-count properties at the same time.",
				"browsers": "E,IE10,O11.5,S9",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/columns",
				"syntax": "div { columns: 100px 3; }",
				"restriction": "length, integer, enum",
				"values": [
					{
						"name": "auto",
						"desc": "The width depends on the values of other properties."
					}
				]
			},
			{
				"name": "column-span",
				"desc": "The column-span CSS property makes it possible for an element to span across all columns when its value is set to all. An element that spans more than one column is called a spanning element.",
				"browsers": "E,IE10,O11.5,S9",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/column-span",
				"syntax": "article { column-span: all; }",
				"restriction": "enum",
				"values": [
					{
						"name": "all",
						"desc": "The element spans across all columns. Content in the normal flow that appears before the element is automatically balanced across all columns before the element appear."
					},
					{
						"name": "none",
						"desc": "The element does not span multiple columns."
					}
				]
			},
			{
				"name": "column-width",
				"desc": "The column-width CSS property suggests an optimal column width. The column-width is the maximum width a column will become before adding another column. For instance, a 300px column width a gap of 0px would be a single column at 599px, but at 600px it would be split into 2 columns. This allows us to achieve scalable designs that fit different screen sizes. Especially in presence of the column-count CSS property which has precedence, to set an exact column width, all length values must be specified. In horizontal text these are width, column-width, column-gap, and column-rule-width.",
				"browsers": "E,IE10,O11.5,S9",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/column-width",
				"syntax": "div { column-width: 100px; }",
				"restriction": "length, enum",
				"values": [
					{
						"name": "auto",
						"desc": "The width depends on the values of other properties."
					}
				]
			},
			{
				"name": "content",
				"desc": "The content CSS property is used with the ::before and ::after pseudo-elements to generate content in an element. Objects inserted using the content property are anonymous replaced elements.",
				"browsers": "E,C,FF1,IE8,O4,S1",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/content",
				"syntax": "a:after { content: ' ( attr(href))';}",
				"restriction": "string, url",
				"values": [
					{
						"name": "attr()"
					},
					{
						"name": "counter(name)"
					},
					{
						"name": "icon",
						"desc": "The (pseudo-)element is replaced in its entirety by the resource referenced by its 'icon' property, and treated as a replaced element."
					},
					{
						"name": "none",
						"desc": "On elements, this inhibits the children of the element from being rendered as children of this element, as if the element was empty. On pseudo-elements it causes the pseudo-element to have no content."
					},
					{
						"name": "normal",
						"desc": "See http://www.w3.org/TR/css3-content/#content for computation rules."
					},
					{
						"name": "url()"
					}
				]
			},
			{
				"name": "counter-increment",
				"desc": "The counter-increment CSS property is used to increase the value of CSS Counters by a given value. The counter's value can be reset using the counter-reset CSS property.",
				"browsers": "E,C,FF1.5,IE8,O10.5,S3",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/counter-increment",
				"syntax": "h1:before { counter-increment: section; }",
				"restriction": "identifier, integer",
				"values": [
					{
						"name": "none",
						"desc": "This element does not alter the value of any counters."
					}
				]
			},
			{
				"name": "counter-reset",
				"desc": "The counter-reset CSS property is used to reset CSS Counters to a given value.",
				"browsers": "E,C,FF1.5,IE8,O10.5,S3",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/counter-reset",
				"syntax": "h1 { counter-reset: section; }",
				"restriction": "identifier, integer",
				"values": [
					{
						"name": "none",
						"desc": "The counter is not modified."
					}
				]
			},
			{
				"name": "cursor",
				"desc": "The cursor CSS property specifies the mouse cursor displayed when the mouse pointer is over an element.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/cursor",
				"syntax": "nav { cursor: pointer; }",
				"restriction": "url, number, enum",
				"values": [
					{
						"name": "alias"
					},
					{
						"name": "all-scroll"
					},
					{
						"name": "auto",
						"desc": "The UA determines the cursor to display based on the current context."
					},
					{
						"name": "cell"
					},
					{
						"name": "col-resize"
					},
					{
						"name": "context-menu"
					},
					{
						"name": "copy"
					},
					{
						"name": "crosshair"
					},
					{
						"name": "default",
						"desc": "The platform-dependent default cursor. Often rendered as an arrow."
					},
					{
						"name": "e-resize"
					},
					{
						"name": "ew-resize"
					},
					{
						"name": "grab",
						"browsers": "FF27"
					},
					{
						"name": "grabbing",
						"browsers": "FF27"
					},
					{
						"name": "help"
					},
					{
						"name": "move"
					},
					{
						"name": "-moz-grab",
						"browsers": "FF1.5"
					},
					{
						"name": "-moz-grabbing",
						"browsers": "FF1.5"
					},
					{
						"name": "-moz-zoom-in",
						"browsers": "FF"
					},
					{
						"name": "-moz-zoom-out",
						"browsers": "FF"
					},
					{
						"name": "ne-resize"
					},
					{
						"name": "nesw-resize"
					},
					{
						"name": "no-drop"
					},
					{
						"name": "none",
						"desc": "No cursor is rendered for the element."
					},
					{
						"name": "not-allowed"
					},
					{
						"name": "n-resize"
					},
					{
						"name": "ns-resize"
					},
					{
						"name": "nw-resize"
					},
					{
						"name": "nwse-resize"
					},
					{
						"name": "pointer"
					},
					{
						"name": "progress"
					},
					{
						"name": "row-resize"
					},
					{
						"name": "se-resize"
					},
					{
						"name": "s-resize"
					},
					{
						"name": "sw-resize"
					},
					{
						"name": "text",
						"desc": "Indicates text that may be selected. Often rendered as a vertical I-beam."
					},
					{
						"name": "vertical-text"
					},
					{
						"name": "wait"
					},
					{
						"name": "-webkit-grab",
						"browsers": "C,S4"
					},
					{
						"name": "-webkit-grabbing",
						"browsers": "C,S4"
					},
					{
						"name": "-webkit-zoom-in",
						"browsers": "C,S1.2"
					},
					{
						"name": "-webkit-zoom-out",
						"browsers": "C,S1.2"
					},
					{
						"name": "w-resize"
					},
					{
						"name": "zoom-in",
						"browsers": "E,C37,FF24,O12.1,S9"
					},
					{
						"name": "zoom-out",
						"browsers": "E,C37,FF24,O12.1,S9"
					}
				]
			},
			{
				"name": "direction",
				"desc": "Set the direction CSS property to match the direction of the text: rtl for languages written from right-to-left (like Hebrew or Arabic) text and ltr for other scripts. This is typically done as part of the document (e.g., using the dir attribute in HTML) rather than through direct use of CSS.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/direction",
				"syntax": "div { direction: rtl; }",
				"restriction": "enum",
				"values": [
					{
						"name": "ltr"
					},
					{
						"name": "rtl"
					}
				]
			},
			{
				"name": "display",
				"desc": "The display CSS property specifies the type of rendering box used for an element. In HTML, default display property values are taken from behaviors described in the HTML specifications or from the browser/user default stylesheet. The default value in XML is inline.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/display",
				"syntax": "p { display: inline; }",
				"restriction": "enum",
				"values": [
					{
						"name": "block"
					},
					{
						"name": "flex",
						"browsers": "E,C29,FF22,IE11,O12.1,S9"
					},
					{
						"name": "flexbox",
						"browsers": "O12.1"
					},
					{
						"name": "inline",
						"desc": "The element generates an inline-level box."
					},
					{
						"name": "inline-block"
					},
					{
						"name": "inline-flex",
						"browsers": "E,C29,FF22,IE11,O12.1,S9"
					},
					{
						"name": "inline-flexbox",
						"browsers": "O12.1"
					},
					{
						"name": "inline-table"
					},
					{
						"name": "list-item"
					},
					{
						"name": "-moz-box",
						"browsers": "FF"
					},
					{
						"name": "-moz-deck",
						"browsers": "FF"
					},
					{
						"name": "-moz-grid",
						"browsers": "FF"
					},
					{
						"name": "-moz-grid-group",
						"browsers": "FF"
					},
					{
						"name": "-moz-grid-line",
						"browsers": "FF"
					},
					{
						"name": "-moz-groupbox",
						"browsers": "FF"
					},
					{
						"name": "-moz-inline-box",
						"browsers": "FF"
					},
					{
						"name": "-moz-inline-grid",
						"browsers": "FF"
					},
					{
						"name": "-moz-inline-stack",
						"browsers": "FF"
					},
					{
						"name": "-moz-marker",
						"browsers": "FF"
					},
					{
						"name": "-moz-popup",
						"browsers": "FF"
					},
					{
						"name": "-moz-stack",
						"browsers": "FF"
					},
					{
						"name": "-ms-flexbox",
						"browsers": "IE10"
					},
					{
						"name": "-ms-grid",
						"browsers": "E,IE10"
					},
					{
						"name": "-ms-inline-flexbox",
						"browsers": "IE10"
					},
					{
						"name": "-ms-inline-grid",
						"browsers": "E,IE10"
					},
					{
						"name": "none",
						"desc": "The element and its descendants generates no boxes."
					},
					{
						"name": "ruby",
						"desc": "The element generates a principal ruby container box, and establishes a ruby formatting context."
					},
					{
						"name": "ruby-base"
					},
					{
						"name": "ruby-base-container"
					},
					{
						"name": "ruby-text"
					},
					{
						"name": "ruby-text-container"
					},
					{
						"name": "run-in",
						"browsers": "IE8"
					},
					{
						"name": "table"
					},
					{
						"name": "table-caption"
					},
					{
						"name": "table-cell"
					},
					{
						"name": "table-column"
					},
					{
						"name": "table-column-group"
					},
					{
						"name": "table-footer-group"
					},
					{
						"name": "table-header-group"
					},
					{
						"name": "table-row"
					},
					{
						"name": "table-row-group"
					},
					{
						"name": "-webkit-box",
						"browsers": "C,S1"
					},
					{
						"name": "-webkit-flex",
						"browsers": "C21,O15,S6.1"
					},
					{
						"name": "-webkit-inline-box",
						"browsers": "C,S1"
					},
					{
						"name": "-webkit-inline-flex",
						"browsers": "C21,O15,S6.1"
					}
				]
			},
			{
				"name": "empty-cells",
				"desc": "The empty-cells CSS property specifies how user agents should render borders and backgrounds around cells that have no visible content.",
				"browsers": "E,C,FF1,IE7,O4,S1.2",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/empty-cells",
				"syntax": "table { empty-cells: hide; }",
				"restriction": "enum",
				"values": [
					{
						"name": "hide"
					},
					{
						"name": "-moz-show-background",
						"browsers": "FF"
					},
					{
						"name": "show"
					}
				]
			},
			{
				"name": "enable-background",
				"desc": "Deprecated. Use 'isolation' property instead when support allows. Specifies how the accumulation of the background image is managed.",
				"ref": "http://www.w3.org/TR/filter-effects/#AccessBackgroundImage",
				"restriction": "integer, length, percentage, enum",
				"values": [
					{
						"name": "accumulate"
					},
					{
						"name": "new"
					}
				]
			},
			{
				"name": "fallback",
				"desc": "@counter-style descriptor. Specifies a fallback counter style to be used when the current counter style can’t create a representation for a given counter value.",
				"browsers": "FF33",
				"ref": "http://www.w3.org/TR/css-counter-styles-3/#descdef-counter-style-fallback",
				"syntax": "@counter-style { fallback: upper-alpha; }",
				"restriction": "identifier"
			},
			{
				"name": "fill",
				"desc": "Paints the interior of the given graphical element.",
				"ref": "http://www.w3.org/TR/SVG2/painting.html#FillProperty",
				"restriction": "color, enum, url",
				"values": [
					{
						"name": "url()",
						"desc": "A URL reference to a paint server element, which is an element that defines a paint server: ‘hatch’, ‘linearGradient’, ‘mesh’, ‘pattern’, ‘radialGradient’ and ‘solidcolor’."
					}
				]
			},
			{
				"name": "fill-opacity",
				"desc": "Specifies the opacity of the painting operation used to paint the interior the current object.",
				"ref": "http://www.w3.org/TR/SVG2/painting.html#FillOpacity",
				"restriction": "number(0-1)"
			},
			{
				"name": "fill-rule",
				"desc": "Indicates the algorithm (or winding rule) which is to be used to determine what parts of the canvas are included inside the shape.",
				"ref": "http://www.w3.org/TR/SVG2/painting.html#WindingRule",
				"restriction": "enum",
				"values": [
					{
						"name": "evenodd"
					},
					{
						"name": "nonzero"
					}
				]
			},
			{
				"name": "filter",
				"desc": "The filter property provides graphical effects like blurring, sharpening, or color shifting an element. Filters are commonly used to adjust the rendering of images, backgrounds, and borders.",
				"browsers": "E13,FF35",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/filter",
				"syntax": "div { filter: opacity(50%); }",
				"restriction": "enum, url",
				"values": [
					{
						"name": "none",
						"desc": "No filter effects are applied."
					},
					{
						"name": "blur()"
					},
					{
						"name": "brightness()"
					},
					{
						"name": "contrast()"
					},
					{
						"name": "drop-shadow()"
					},
					{
						"name": "grayscale()"
					},
					{
						"name": "hue-rotate()"
					},
					{
						"name": "invert()"
					},
					{
						"name": "opacity()"
					},
					{
						"name": "saturate()"
					},
					{
						"name": "sepia()"
					},
					{
						"name": "url()",
						"desc": "A filter reference to a <filter> element.",
						"browsers": "FF3.6"
					}
				]
			},
			{
				"name": "flex",
				"desc": "The flex CSS property is a shorthand property specifying the ability of a flex item to alter its dimensions to fill available space. Flex items can be stretched to use available space proportional to their flex grow factor or their flex shrink factor to prevent overflow.",
				"browsers": "E,C29,FF22,IE11,O12.1,S9",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/flex",
				"syntax": "p { flex: 0 1 auto; }",
				"restriction": "length, number, percentage",
				"values": [
					{
						"name": "auto",
						"desc": "Retrieves the value of the main size property as the used 'flex-basis'."
					},
					{
						"name": "content",
						"browsers": "E,IE11"
					},
					{
						"name": "none",
						"desc": "Expands to '0 0 auto'."
					}
				]
			},
			{
				"name": "flex-basis",
				"desc": "The flex-basis CSS property specifies the flex basis which is the initial main size of a flex item. This property determines the size of the content-box unless specified otherwise using box-sizing.",
				"browsers": "E,C29,FF22,IE11,O12.1,S9",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis",
				"syntax": "p { flex-basis: 30%; }",
				"restriction": "length, number, percentage",
				"values": [
					{
						"name": "auto",
						"desc": "Retrieves the value of the main size property as the used 'flex-basis'."
					},
					{
						"name": "content",
						"browsers": "E,IE11"
					}
				]
			},
			{
				"name": "flex-direction",
				"desc": "The flex-direction CSS property specifies how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).",
				"browsers": "E,C29,FF22,IE11,O12.1,S9",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction",
				"syntax": "div { flex-direction: column; }",
				"restriction": "enum",
				"values": [
					{
						"name": "column",
						"desc": "The flex container’s main axis has the same orientation as the block axis of the current writing mode."
					},
					{
						"name": "column-reverse"
					},
					{
						"name": "row"
					},
					{
						"name": "row-reverse"
					}
				]
			},
			{
				"name": "flex-flow",
				"desc": "The flex-flow CSS property is a shorthand property for flex-direction and flex-wrap individual properties.",
				"browsers": "E,C29,FF28,IE11,O12.1,S9",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/flex-flow",
				"syntax": "div { flex-flow: column wrap; }",
				"restriction": "enum",
				"values": [
					{
						"name": "column",
						"desc": "The flex container’s main axis has the same orientation as the block axis of the current writing mode."
					},
					{
						"name": "column-reverse"
					},
					{
						"name": "nowrap",
						"desc": "The flex container is single-line."
					},
					{
						"name": "row"
					},
					{
						"name": "row-reverse"
					},
					{
						"name": "wrap",
						"desc": "The flexbox is multi-line."
					},
					{
						"name": "wrap-reverse"
					}
				]
			},
			{
				"name": "flex-grow",
				"desc": "The flex-grow CSS property specifies the flex grow factor of a flex item. It specifies what amount of space inside the flex container the item should take up.",
				"browsers": "E,C29,FF22,IE11,O12.1,S9",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow",
				"syntax": "p { flex-grow: 4; }",
				"restriction": "number"
			},
			{
				"name": "flex-shrink",
				"desc": "The flex-shrink CSS property specifies the flex shrink factor of a flex item.",
				"browsers": "E,C29,FF22,IE11,O12.1,S9",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink",
				"syntax": "p { flex-shrink: 4; }",
				"restriction": "number"
			},
			{
				"name": "flex-wrap",
				"desc": "The CSS flex-wrap property specifies whether flex items are forced into a single line or can be wrapped onto multiple lines. If wrapping is allowed, this property also enables you to control the direction in which lines are stacked.",
				"browsers": "E,C29,FF28,IE11,O12.1,S9",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap",
				"syntax": "div { flex-wrap: nowrap; }",
				"restriction": "enum",
				"values": [
					{
						"name": "nowrap",
						"desc": "The flex container is single-line."
					},
					{
						"name": "wrap",
						"desc": "The flexbox is multi-line."
					},
					{
						"name": "wrap-reverse"
					}
				]
			},
			{
				"name": "float",
				"desc": "The float CSS property specifies that an element should be taken from the normal flow and placed along the left or right side of its container, where text and inline elements will wrap around it.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/float",
				"syntax": "img { float: right; }",
				"restriction": "enum",
				"values": [
					{
						"name": "left",
						"desc": "The element generates a block box that is floated to the left. Content flows on the right side of the box, starting at the top (subject to the 'clear' property)."
					},
					{
						"name": "none",
						"desc": "The box is not floated."
					},
					{
						"name": "right",
						"desc": "Similar to 'left', except the box is floated to the right, and content flows on the left side of the box, starting at the top."
					}
				]
			},
			{
				"name": "flood-color",
				"desc": "Indicates what color to use to flood the current filter primitive subregion.",
				"browsers": "E,C5,FF3,IE10,O9,S6",
				"ref": "http://www.w3.org/TR/filter-effects/#FloodColorProperty",
				"restriction": "color"
			},
			{
				"name": "flood-opacity",
				"desc": "Indicates what opacity to use to flood the current filter primitive subregion.",
				"browsers": "E,C5,FF3,IE10,O9,S6",
				"ref": "http://www.w3.org/TR/filter-effects/#FloodOpacityProperty",
				"restriction": "number(0-1), percentage"
			},
			{
				"name": "font",
				"desc": "Shorthand property for setting 'font-style', 'font-variant', 'font-weight', 'font-size', 'line-height', and 'font-family', at the same place in the style sheet. The syntax of this property is based on a traditional typographical shorthand notation to set multiple properties related to fonts.",
				"ref": "http://www.w3.org/TR/css3-fonts/#propdef-font",
				"syntax": "body { font: bold 12px arial, verdana; }",
				"restriction": "font",
				"values": [
					{
						"name": "100"
					},
					{
						"name": "200"
					},
					{
						"name": "300"
					},
					{
						"name": "400"
					},
					{
						"name": "500"
					},
					{
						"name": "600"
					},
					{
						"name": "700"
					},
					{
						"name": "800"
					},
					{
						"name": "900"
					},
					{
						"name": "bold"
					},
					{
						"name": "bolder"
					},
					{
						"name": "caption"
					},
					{
						"name": "icon",
						"desc": "The font used to label icons."
					},
					{
						"name": "italic",
						"desc": "Selects a font that is labeled 'italic', or, if that is not available, one labeled 'oblique'."
					},
					{
						"name": "large"
					},
					{
						"name": "larger"
					},
					{
						"name": "lighter"
					},
					{
						"name": "medium"
					},
					{
						"name": "menu"
					},
					{
						"name": "message-box"
					},
					{
						"name": "normal",
						"desc": "Specifies a face that is not labeled as a small-caps font."
					},
					{
						"name": "oblique",
						"desc": "Selects a font that is labeled 'oblique'."
					},
					{
						"name": "small"
					},
					{
						"name": "small-caps",
						"desc": "Specifies a font that is labeled as a small-caps font. If a genuine small-caps font is not available, user agents should simulate a small-caps font."
					},
					{
						"name": "small-caption"
					},
					{
						"name": "smaller"
					},
					{
						"name": "status-bar"
					},
					{
						"name": "x-large"
					},
					{
						"name": "x-small"
					},
					{
						"name": "xx-large"
					},
					{
						"name": "xx-small"
					}
				]
			},
			{
				"name": "font-family",
				"desc": "The font-family CSS property lets you specify a prioritized list of font family names and/or generic family names for the selected element. Values are separated by a comma to indicate that they are alternatives. The browser will select the first font on the list that is installed on the computer or that can be downloaded using a @font-face at-rule.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/font-family",
				"syntax": "body { font-family: arial, verdana; }",
				"restriction": "font",
				"values": [
					{
						"name": "Arial, Helvetica, sans-serif"
					},
					{
						"name": "Cambria, Cochin, Georgia, Times, Times New Roman, serif"
					},
					{
						"name": "Courier New, Courier, monospace"
					},
					{
						"name": "cursive"
					},
					{
						"name": "fantasy"
					},
					{
						"name": "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"
					},
					{
						"name": "Georgia, 'Times New Roman', Times, serif"
					},
					{
						"name": "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"
					},
					{
						"name": "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"
					},
					{
						"name": "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"
					},
					{
						"name": "monospace"
					},
					{
						"name": "sans-serif"
					},
					{
						"name": "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
					},
					{
						"name": "serif"
					},
					{
						"name": "'Times New Roman', Times, serif"
					},
					{
						"name": "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"
					},
					{
						"name": "Verdana, Geneva, Tahoma, sans-serif"
					}
				]
			},
			{
				"name": "font-feature-settings",
				"desc": "The font-feature-settings CSS property gives you control over advanced typographic features in OpenType fonts.",
				"browsers": "E,FF34,IE10",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/font-feature-settings",
				"syntax": "body { font-feature-settings: 'hwid'; }",
				"restriction": "string, integer",
				"values": [
					{
						"name": "\"aalt\""
					},
					{
						"name": "\"abvf\""
					},
					{
						"name": "\"abvm\""
					},
					{
						"name": "\"abvs\""
					},
					{
						"name": "\"afrc\""
					},
					{
						"name": "\"akhn\""
					},
					{
						"name": "\"blwf\""
					},
					{
						"name": "\"blwm\""
					},
					{
						"name": "\"blws\""
					},
					{
						"name": "\"calt\""
					},
					{
						"name": "\"case\""
					},
					{
						"name": "\"ccmp\""
					},
					{
						"name": "\"cfar\""
					},
					{
						"name": "\"cjct\""
					},
					{
						"name": "\"clig\""
					},
					{
						"name": "\"cpct\""
					},
					{
						"name": "\"cpsp\""
					},
					{
						"name": "\"cswh\""
					},
					{
						"name": "\"curs\""
					},
					{
						"name": "\"c2pc\""
					},
					{
						"name": "\"c2cs\"",
						"desc": "Small Capitals From Capitals. Applies only to bicameral scripts."
					},
					{
						"name": "\"dist\""
					},
					{
						"name": "\"dlig\"",
						"desc": "Discretionary ligatures."
					},
					{
						"name": "\"dnom\""
					},
					{
						"name": "\"dtls\""
					},
					{
						"name": "\"expt\""
					},
					{
						"name": "\"falt\""
					},
					{
						"name": "\"fin2\""
					},
					{
						"name": "\"fin3\""
					},
					{
						"name": "\"fina\""
					},
					{
						"name": "\"flac\""
					},
					{
						"name": "\"frac\""
					},
					{
						"name": "\"fwid\""
					},
					{
						"name": "\"half\""
					},
					{
						"name": "\"haln\""
					},
					{
						"name": "\"halt\""
					},
					{
						"name": "\"hist\""
					},
					{
						"name": "\"hkna\""
					},
					{
						"name": "\"hlig\""
					},
					{
						"name": "\"hngl\""
					},
					{
						"name": "\"hojo\""
					},
					{
						"name": "\"hwid\""
					},
					{
						"name": "\"init\""
					},
					{
						"name": "\"isol\""
					},
					{
						"name": "\"ital\""
					},
					{
						"name": "\"jalt\""
					},
					{
						"name": "\"jp78\""
					},
					{
						"name": "\"jp83\""
					},
					{
						"name": "\"jp90\""
					},
					{
						"name": "\"jp04\""
					},
					{
						"name": "\"kern\"",
						"desc": "Kerning."
					},
					{
						"name": "\"lfbd\""
					},
					{
						"name": "\"liga\"",
						"desc": "Standard Ligatures."
					},
					{
						"name": "\"ljmo\""
					},
					{
						"name": "\"lnum\"",
						"desc": "Lining Figures."
					},
					{
						"name": "\"locl\""
					},
					{
						"name": "\"ltra\""
					},
					{
						"name": "\"ltrm\""
					},
					{
						"name": "\"mark\""
					},
					{
						"name": "\"med2\""
					},
					{
						"name": "\"medi\""
					},
					{
						"name": "\"mgrk\""
					},
					{
						"name": "\"mkmk\""
					},
					{
						"name": "\"nalt\""
					},
					{
						"name": "\"nlck\""
					},
					{
						"name": "\"nukt\""
					},
					{
						"name": "\"numr\""
					},
					{
						"name": "\"onum\"",
						"desc": "Oldstyle Figures."
					},
					{
						"name": "\"opbd\""
					},
					{
						"name": "\"ordn\""
					},
					{
						"name": "\"ornm\""
					},
					{
						"name": "\"palt\""
					},
					{
						"name": "\"pcap\""
					},
					{
						"name": "\"pkna\""
					},
					{
						"name": "\"pnum\""
					},
					{
						"name": "\"pref\""
					},
					{
						"name": "\"pres\""
					},
					{
						"name": "\"pstf\""
					},
					{
						"name": "\"psts\""
					},
					{
						"name": "\"pwid\""
					},
					{
						"name": "\"qwid\""
					},
					{
						"name": "\"rand\""
					},
					{
						"name": "\"rclt\""
					},
					{
						"name": "\"rlig\""
					},
					{
						"name": "\"rkrf\""
					},
					{
						"name": "\"rphf\""
					},
					{
						"name": "\"rtbd\""
					},
					{
						"name": "\"rtla\""
					},
					{
						"name": "\"rtlm\""
					},
					{
						"name": "\"ruby\""
					},
					{
						"name": "\"salt\""
					},
					{
						"name": "\"sinf\""
					},
					{
						"name": "\"size\""
					},
					{
						"name": "\"smcp\"",
						"desc": "Small Capitals. Applies only to bicameral scripts."
					},
					{
						"name": "\"smpl\""
					},
					{
						"name": "\"ssty\""
					},
					{
						"name": "\"stch\""
					},
					{
						"name": "\"subs\""
					},
					{
						"name": "\"sups\""
					},
					{
						"name": "\"swsh\"",
						"desc": "Swash. Does not apply to ideographic scripts."
					},
					{
						"name": "\"titl\""
					},
					{
						"name": "\"tjmo\""
					},
					{
						"name": "\"tnam\""
					},
					{
						"name": "\"tnum\"",
						"desc": "Tabular Figures."
					},
					{
						"name": "\"trad\""
					},
					{
						"name": "\"twid\""
					},
					{
						"name": "\"unic\""
					},
					{
						"name": "\"valt\""
					},
					{
						"name": "\"vatu\""
					},
					{
						"name": "\"vert\""
					},
					{
						"name": "\"vhal\""
					},
					{
						"name": "\"vjmo\""
					},
					{
						"name": "\"vkna\""
					},
					{
						"name": "\"vkrn\""
					},
					{
						"name": "\"vpal\""
					},
					{
						"name": "\"vrt2\""
					},
					{
						"name": "\"zero\""
					},
					{
						"name": "normal",
						"desc": "No change in glyph substitution or positioning occurs."
					},
					{
						"name": "off",
						"desc": "Disable feature."
					},
					{
						"name": "on",
						"desc": "Enable feature."
					}
				]
			},
			{
				"name": "font-kerning",
				"desc": "The font-kerning CSS property controls the usage of the kerning information; that is, it controls how letters are spaced. The kerning information is stored in the font, and if the font is well-kerned, this feature allows spacing between characters to be very similar, whatever the characters are.",
				"browsers": "C33,FF34,O20",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/font-kerning",
				"syntax": "body { font-kerning: normal; }",
				"restriction": "enum",
				"values": [
					{
						"name": "auto",
						"desc": "Specifies that kerning is applied at the discretion of the user agent."
					},
					{
						"name": "none",
						"desc": "Specifies that kerning is not applied."
					},
					{
						"name": "normal",
						"desc": "Specifies that kerning is applied."
					}
				]
			},
			{
				"name": "font-language-override",
				"desc": "The font-language-override CSS property controls the usage of language-specific glyphs in a typeface.",
				"browsers": "FF34",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/font-language-override",
				"syntax": "body { font-language-override: 'SRB'; }",
				"restriction": "string",
				"values": [
					{
						"name": "normal",
						"desc": "Implies that when rendering with OpenType fonts the language of the document is used to infer the OpenType language system, used to select language specific features when rendering."
					}
				]
			},
			{
				"name": "font-size",
				"desc": "The font-size CSS property specifies the size of the font (historically the width of the capital \"M\"). Setting the font size may, in turn, change the size of other items, since it is used to compute the value of the em and ex <length> units.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/font-size",
				"syntax": "div { font-size: 12px; }",
				"restriction": "length, percentage",
				"values": [
					{
						"name": "large"
					},
					{
						"name": "larger"
					},
					{
						"name": "medium"
					},
					{
						"name": "small"
					},
					{
						"name": "smaller"
					},
					{
						"name": "x-large"
					},
					{
						"name": "x-small"
					},
					{
						"name": "xx-large"
					},
					{
						"name": "xx-small"
					}
				]
			},
			{
				"name": "font-size-adjust",
				"desc": "The font-size-adjust CSS property specifies that font size should be chosen based on the height of lowercase letters rather than the height of capital letters. This is useful since the legibility of fonts, especially at small sizes, is determined more by the size of lowercase letters than by the size of capital letters.",
				"browsers": "E,FF3,IE10",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/font-size-adjust",
				"syntax": "div { font-size-adjust: 0.58; }",
				"restriction": "number",
				"values": [
					{
						"name": "none",
						"desc": "Do not preserve the font’s x-height."
					}
				]
			},
			{
				"name": "font-stretch",
				"desc": "The font-stretch property selects a normal, condensed, or expanded face from a font.",
				"browsers": "E,FF9,IE9",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/font-stretch",
				"syntax": "div { font-stretch: expanded; }",
				"restriction": "enum",
				"values": [
					{
						"name": "condensed"
					},
					{
						"name": "expanded"
					},
					{
						"name": "extra-condensed"
					},
					{
						"name": "extra-expanded"
					},
					{
						"name": "narrower",
						"browsers": "E,IE10"
					},
					{
						"name": "normal"
					},
					{
						"name": "semi-condensed"
					},
					{
						"name": "semi-expanded"
					},
					{
						"name": "ultra-condensed"
					},
					{
						"name": "ultra-expanded"
					},
					{
						"name": "wider",
						"browsers": "E,IE10"
					}
				]
			},
			{
				"name": "font-style",
				"desc": "The font-style CSS property lets you select italic or oblique faces within a font-family. Italic forms are generally cursive in nature, usually using less horizontal space than their unstyled counterparts, while oblique faces are usually just sloped versions of the regular face. Both italic and oblique faces are simulated by artificially sloping the glyphs of the regular face (see font-synthesis for control over this).",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/font-style",
				"syntax": "body { font-style: italic; }",
				"restriction": "enum",
				"values": [
					{
						"name": "italic",
						"desc": "Selects a font that is labeled as an 'italic' face, or an 'oblique' face if one is not"
					},
					{
						"name": "normal",
						"desc": "Selects a face that is classified as 'normal'."
					},
					{
						"name": "oblique",
						"desc": "Selects a font that is labeled as an 'oblique' face, or an 'italic' face if one is not."
					}
				]
			},
			{
				"name": "font-synthesis",
				"desc": "The font-synthesis CSS property controls which missing typefaces, bold or italic, may be synthesized by the browser.",
				"browsers": "FF34,S9",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/font-synthesis",
				"syntax": "html:lang(ar) { font-synthesis: none; }",
				"restriction": "enum",
				"values": [
					{
						"name": "none",
						"desc": "Disallow all synthetic faces."
					},
					{
						"name": "style"
					},
					{
						"name": "weight"
					}
				]
			},
			{
				"name": "font-variant",
				"desc": "The font-variant property acts as a shorthand for the longhand properties: font-variant-caps, font-variant-numeric, font-variant-alternates, font-variant-ligatures, and font-variant-east-asian. You can also set the CSS Level 2 (Revision 1) values of font-variant, (that is, normal or small-caps), by using the font shorthand.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant",
				"syntax": "div { font-variant: small-caps; }",
				"restriction": "enum",
				"values": [
					{
						"name": "normal",
						"desc": "Specifies a face that is not labeled as a small-caps font."
					},
					{
						"name": "small-caps",
						"desc": "Specifies a font that is labeled as a small-caps font. If a genuine small-caps font is not available, user agents should simulate a small-caps font."
					}
				]
			},
			{
				"name": "font-variant-alternates",
				"desc": "The font-variant-alternates CSS property controls the usage of alternate glyphs. These alternate glyphs may be referenced by alternative names defined in @font-feature-values.",
				"browsers": "FF34",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-alternates",
				"syntax": "h2 { font-variant-alternates: styleset(3,5); }",
				"restriction": "enum",
				"values": [
					{
						"name": "annotation()"
					},
					{
						"name": "character-variant()"
					},
					{
						"name": "historical-forms"
					},
					{
						"name": "normal",
						"desc": "None of the features are enabled."
					},
					{
						"name": "ornaments()"
					},
					{
						"name": "styleset()"
					},
					{
						"name": "stylistic()"
					},
					{
						"name": "swash()"
					}
				]
			},
			{
				"name": "font-variant-caps",
				"desc": "The font-variant-caps CSS property controls the usage of alternate glyphs for capital letters. Scripts can have capital letter glyphs of different sizes, the normal uppercase glyphs, small capital glyphs, and petite capital glyphs. This property controls which alternate glyphs to use.",
				"browsers": "FF34",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-caps",
				"syntax": "p { font-variant-caps: titling-caps; }",
				"restriction": "enum",
				"values": [
					{
						"name": "all-petite-caps"
					},
					{
						"name": "all-small-caps"
					},
					{
						"name": "normal",
						"desc": "None of the features are enabled."
					},
					{
						"name": "petite-caps"
					},
					{
						"name": "small-caps",
						"desc": "Enables display of small capitals. Small-caps glyphs typically use the form of uppercase letters but are reduced to the size of lowercase letters."
					},
					{
						"name": "titling-caps"
					},
					{
						"name": "unicase"
					}
				]
			},
			{
				"name": "font-variant-east-asian",
				"desc": "The font-variant-east-asian CSS property controls the usage of alternate glyphs for East Asian scripts, like Japanese and Chinese.",
				"browsers": "FF34",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-east-asian",
				"syntax": "mark { font-variant-east-asian: normal; }",
				"restriction": "enum",
				"values": [
					{
						"name": "full-width"
					},
					{
						"name": "jis04"
					},
					{
						"name": "jis78"
					},
					{
						"name": "jis83"
					},
					{
						"name": "jis90"
					},
					{
						"name": "normal",
						"desc": "None of the features are enabled."
					},
					{
						"name": "proportional-width"
					},
					{
						"name": "ruby",
						"desc": "Enables display of ruby variant glyphs."
					},
					{
						"name": "simplified"
					},
					{
						"name": "traditional"
					}
				]
			},
			{
				"name": "font-variant-ligatures",
				"desc": "The font-variant-ligatures CSS property controls which ligatures and contextual forms are used in textual content of the elements it applies to. This leads to more harmonized forms in the resulting text.",
				"browsers": "C18,FF34,O15,S6",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-ligatures",
				"syntax": "div { font-variant-ligatures: historical-ligatures; }",
				"restriction": "enum",
				"values": [
					{
						"name": "additional-ligatures"
					},
					{
						"name": "common-ligatures"
					},
					{
						"name": "contextual",
						"browsers": "C35,F34,O22"
					},
					{
						"name": "discretionary-ligatures"
					},
					{
						"name": "historical-ligatures"
					},
					{
						"name": "no-additional-ligatures"
					},
					{
						"name": "no-common-ligatures"
					},
					{
						"name": "no-contextual",
						"browsers": "C35,F34,O22"
					},
					{
						"name": "no-discretionary-ligatures"
					},
					{
						"name": "no-historical-ligatures"
					},
					{
						"name": "none",
						"desc": "Disables all ligatures.",
						"browsers": "FF34"
					},
					{
						"name": "normal",
						"desc": "Implies that the defaults set by the font are used."
					}
				]
			},
			{
				"name": "font-variant-numeric",
				"desc": "The font-variant-numeric CSS property controls the usage of alternate glyphs for numbers, fractions, and ordinal markers.",
				"browsers": "FF34",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-numeric",
				"syntax": ".amount { font-variant-numeric: oldstyle-nums diagonal-fractions; }",
				"restriction": "enum",
				"values": [
					{
						"name": "diagonal-fractions"
					},
					{
						"name": "lining-nums"
					},
					{
						"name": "normal",
						"desc": "None of the features are enabled."
					},
					{
						"name": "oldstyle-nums"
					},
					{
						"name": "ordinal"
					},
					{
						"name": "proportional-nums"
					},
					{
						"name": "slashed-zero"
					},
					{
						"name": "stacked-fractions"
					},
					{
						"name": "tabular-nums"
					}
				]
			},
			{
				"name": "font-variant-position",
				"desc": "The font-variant-position CSS property controls the usage of alternate glyphs of smaller size positioned as superscript or subscript regarding the baseline of the font, which is set unchanged. These glyphs are likely to be used in <sub> and <sup> elements.",
				"browsers": "FF34",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-position",
				"syntax": "sub { font-variant-position: subscript; }",
				"restriction": "enum",
				"values": [
					{
						"name": "normal",
						"desc": "None of the features are enabled."
					},
					{
						"name": "sub",
						"desc": "Enables display of subscript variants (OpenType feature: subs)."
					},
					{
						"name": "super",
						"desc": "Enables display of superscript variants (OpenType feature: sups)."
					}
				]
			},
			{
				"name": "font-weight",
				"desc": "The font-weight CSS property specifies the weight or boldness of the font. Some fonts are only available in normal and bold.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight",
				"syntax": "th { font-weight: bold; }",
				"restriction": "enum",
				"values": [
					{
						"name": "100"
					},
					{
						"name": "200"
					},
					{
						"name": "300"
					},
					{
						"name": "400"
					},
					{
						"name": "500"
					},
					{
						"name": "600"
					},
					{
						"name": "700"
					},
					{
						"name": "800"
					},
					{
						"name": "900"
					},
					{
						"name": "bold"
					},
					{
						"name": "bolder"
					},
					{
						"name": "lighter"
					},
					{
						"name": "normal",
						"desc": "Same as 400"
					}
				]
			},
			{
				"name": "glyph-orientation-horizontal",
				"desc": "Controls glyph orientation when the inline-progression-direction is horizontal.",
				"ref": "http://www.w3.org/TR/SVG2/text.html#GlyphOrientationHorizontal",
				"restriction": "angle, number"
			},
			{
				"name": "glyph-orientation-vertical",
				"desc": "Controls glyph orientation when the inline-progression-direction is vertical.",
				"ref": "http://www.w3.org/TR/SVG2/text.html#GlyphOrientationVertical",
				"restriction": "angle, number, enum",
				"values": [
					{
						"name": "auto",
						"desc": "Sets the orientation based on the fullwidth or non-fullwidth characters and the most common orientation."
					}
				]
			},
			{
				"name": "height",
				"desc": "The height CSS property specifies the height of the content area of an element. The content area is inside the padding, border, and margin of the element.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/height",
				"syntax": "footer { height: 100px; }",
				"restriction": "length, percentage",
				"values": [
					{
						"name": "auto",
						"desc": "The height depends on the values of other properties."
					},
					{
						"name": "fit-content",
						"browsers": "C46,O33"
					},
					{
						"name": "max-content",
						"browsers": "C46,O33"
					},
					{
						"name": "min-content",
						"browsers": "C46,O33"
					}
				]
			},
			{
				"name": "image-orientation",
				"desc": "The image-orientation CSS property describes how to correct the default orientation of an image.",
				"browsers": "FF26",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/image-orientation",
				"syntax": "img.ninety { image-orientation: 90deg; }",
				"restriction": "angle",
				"values": [
					{
						"name": "flip"
					},
					{
						"name": "from-image"
					}
				]
			},
			{
				"name": "image-rendering",
				"desc": "The image-rendering CSS property provides a hint to the browser about the algorithm it should use to scale images. It applies to the element itself as well as any images supplied in other properties for the element. It has no effect on non-scaled images.",
				"browsers": "C,FF3.6,O11.6,S",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/image-rendering",
				"restriction": "enum",
				"values": [
					{
						"name": "auto",
						"desc": "The image should be scaled with an algorithm that maximizes the appearance of the image."
					},
					{
						"name": "crisp-edges"
					},
					{
						"name": "-moz-crisp-edges",
						"browsers": "FF"
					},
					{
						"name": "optimizeQuality"
					},
					{
						"name": "optimizeSpeed",
						"desc": "Deprecated."
					},
					{
						"name": "pixelated"
					}
				]
			},
			{
				"name": "ime-mode",
				"desc": "The ime-mode CSS property controls the state of the input method editor for text fields. According to the spec:",
				"browsers": "E,FF3,IE5",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/ime-mode",
				"syntax": "body { ime-mode: active; }",
				"restriction": "enum",
				"values": [
					{
						"name": "active"
					},
					{
						"name": "auto",
						"desc": "No change is made to the current input method editor state. This is the default."
					},
					{
						"name": "disabled"
					},
					{
						"name": "inactive"
					},
					{
						"name": "normal",
						"desc": "The IME state should be normal; this value can be used in a user style sheet to override the page setting."
					}
				]
			},
			{
				"name": "inline-size",
				"desc": "The inline-size CSS property defines the horizontal or vertical size of an element's block depending on its writing mode. It corresponds to the width or the height property depending on the value defined for writing-mode.",
				"browsers": "FF41",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/inline-size",
				"syntax": "header { inline-size: 200px; }",
				"restriction": "length, percentage",
				"values": [
					{
						"name": "auto",
						"desc": "Depends on the values of other properties."
					}
				]
			},
			{
				"name": "isolation",
				"desc": "The isolation CSS property defines if the element must create a new stacking context.",
				"browsers": "C,FF,O,S",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/isolation",
				"syntax": "div { isolation: isolate; }",
				"restriction": "enum",
				"values": [
					{
						"name": "auto",
						"desc": "Elements are not isolated unless an operation is applied that causes the creation of a stacking context."
					},
					{
						"name": "isolate",
						"desc": "In CSS will turn the element into a stacking context."
					}
				]
			},
			{
				"name": "justify-content",
				"desc": "The CSS justify-content property defines how the browser distributes space between and around flex items along the main-axis of their container.",
				"browsers": "E,C29,FF22,IE11,O12.1,S9",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content",
				"syntax": "p { justify-content: flex-start; }",
				"restriction": "enum",
				"values": [
					{
						"name": "center",
						"desc": "Flex items are packed toward the center of the line."
					},
					{
						"name": "flex-end",
						"desc": "Flex items are packed toward the end of the line."
					},
					{
						"name": "flex-start",
						"desc": "Flex items are packed toward the start of the line."
					},
					{
						"name": "space-around",
						"desc": "Flex items are evenly distributed in the line, with half-size spaces on either end."
					},
					{
						"name": "space-between",
						"desc": "Flex items are evenly distributed in the line."
					}
				]
			},
			{
				"name": "kerning",
				"desc": "Indicates whether the user agent should adjust inter-glyph spacing based on kerning tables that are included in the relevant font or instead disable auto-kerning and set inter-character spacing to a specific length.",
				"ref": "http://www.w3.org/TR/SVG11/text.html#KerningProperty",
				"restriction": "length, enum",
				"values": [
					{
						"name": "auto",
						"desc": "Indicates that the user agent should adjust inter-glyph spacing based on kerning tables that are included in the font that will be used."
					}
				]
			},
			{
				"name": "left",
				"desc": "The left CSS property specifies part of the position of positioned elements.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/left",
				"syntax": "article { left: 50px; }",
				"restriction": "length, percentage",
				"values": [
					{
						"name": "auto",
						"desc": "For non-replaced elements, the effect of this value depends on which of related properties have the value 'auto' as well"
					}
				]
			},
			{
				"name": "letter-spacing",
				"desc": "The letter-spacing CSS property specifies spacing behavior between text characters.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing",
				"syntax": "h2 { letter-spacing: 2px; }",
				"restriction": "length",
				"values": [
					{
						"name": "normal",
						"desc": "The spacing is the normal spacing for the current font. It is typically zero-length."
					}
				]
			},
			{
				"name": "lighting-color",
				"desc": "Defines the color of the light source for filter primitives 'feDiffuseLighting' and 'feSpecularLighting'.",
				"browsers": "E,C5,FF3,IE10,O9,S6",
				"ref": "http://www.w3.org/TR/filter-effects/#LightingColorProperty",
				"restriction": "color"
			},
			{
				"name": "line-height",
				"desc": "On block level elements, the line-height property specifies the minimum height of line boxes within the element.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/line-height",
				"syntax": "#menu { line-height: 22px; }",
				"restriction": "number, length, percentage",
				"values": [
					{
						"name": "normal",
						"desc": "Tells user agents to set the computed value to a 'reasonable' value based on the font size of the element."
					}
				]
			},
			{
				"name": "list-style",
				"desc": "The list-style property is a shorthand property for setting list-style-type, list-style-image and list-style-position.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/list-style",
				"syntax": "ul { list-style: square url('square.png');}",
				"restriction": "image, enum, url",
				"values": [
					{
						"name": "armenian"
					},
					{
						"name": "circle"
					},
					{
						"name": "decimal"
					},
					{
						"name": "decimal-leading-zero"
					},
					{
						"name": "disc"
					},
					{
						"name": "georgian"
					},
					{
						"name": "inside"
					},
					{
						"name": "lower-alpha"
					},
					{
						"name": "lower-greek"
					},
					{
						"name": "lower-latin"
					},
					{
						"name": "lower-roman"
					},
					{
						"name": "none"
					},
					{
						"name": "outside"
					},
					{
						"name": "square",
						"desc": "A filled square."
					},
					{
						"name": "symbols()",
						"browsers": "FF35"
					},
					{
						"name": "upper-alpha"
					},
					{
						"name": "upper-latin"
					},
					{
						"name": "upper-roman"
					},
					{
						"name": "url()"
					}
				]
			},
			{
				"name": "list-style-image",
				"desc": "The list-style-image property specifies an image to be used as the list item marker.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-image",
				"syntax": "<uri> | none",
				"restriction": "image",
				"values": [
					{
						"name": "none",
						"desc": "The default contents of the of the list item’s marker are given by 'list-style-type' instead."
					}
				]
			},
			{
				"name": "list-style-position",
				"desc": "Specifies the position of the '::marker' pseudo-element's box in the list item.",
				"ref": "http://www.w3.org/TR/css3-lists/#list-style-position",
				"syntax": "ul { list-style-position: inside; }",
				"restriction": "enum",
				"values": [
					{
						"name": "inside"
					},
					{
						"name": "outside"
					}
				]
			},
			{
				"name": "list-style-type",
				"desc": "The list-style-type property specifies the appearance of a list item element. Because it is the only property that defaults to display:list-item, this is usually a <li> element, but can be any element with this display value.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type",
				"syntax": "<glyph> | <algorithmic> | <numeric> | <alphabetic> | <symbolic> | <non-repeating> | normal | none",
				"restriction": "enum, string",
				"values": [
					{
						"name": "armenian",
						"desc": "Traditional uppercase Armenian numbering."
					},
					{
						"name": "circle"
					},
					{
						"name": "decimal",
						"desc": "Western decimal numbers."
					},
					{
						"name": "decimal-leading-zero",
						"desc": "Decimal numbers padded by initial zeros."
					},
					{
						"name": "disc"
					},
					{
						"name": "georgian",
						"desc": "Traditional Georgian numbering."
					},
					{
						"name": "lower-alpha",
						"desc": "Lowercase ASCII letters."
					},
					{
						"name": "lower-greek",
						"desc": "Lowercase classical Greek."
					},
					{
						"name": "lower-latin",
						"desc": "Lowercase ASCII letters."
					},
					{
						"name": "lower-roman",
						"desc": "Lowercase ASCII Roman numerals."
					},
					{
						"name": "none",
						"desc": "No marker"
					},
					{
						"name": "square",
						"desc": "A filled square."
					},
					{
						"name": "symbols()",
						"browsers": "FF35"
					},
					{
						"name": "upper-alpha",
						"desc": "Uppercase ASCII letters."
					},
					{
						"name": "upper-latin",
						"desc": "Uppercase ASCII letters."
					},
					{
						"name": "upper-roman",
						"desc": "Uppercase ASCII Roman numerals."
					}
				]
			},
			{
				"name": "margin",
				"desc": "The margin CSS property sets the margin for all four sides. It is a shorthand to avoid setting each side separately with the other margin properties: margin-top, margin-right, margin-bottom and margin-left.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/margin",
				"syntax": "div { margin: 4px 7px 2px 4px; }",
				"restriction": "length, percentage",
				"values": [
					{
						"name": "auto"
					}
				]
			},
			{
				"name": "margin-block-end",
				"desc": "The margin-block-end CSS property defines the logical block end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. It corresponds to the margin-top, margin-right, margin-bottom, or margin-left property depending on the values defined for writing-mode, direction, and text-orientation.",
				"browsers": "FF41",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/margin-block-end",
				"syntax": "div { margin-block-end: 4px; }",
				"restriction": "length, percentage",
				"values": [
					{
						"name": "auto"
					}
				]
			},
			{
				"name": "margin-block-start",
				"desc": "Logical 'margin-top'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
				"browsers": "FF41",
				"ref": "https://drafts.csswg.org/css-logical-props/#logical-prop",
				"syntax": "div { margin-block-start: 4px; }",
				"restriction": "length, percentage",
				"values": [
					{
						"name": "auto"
					}
				]
			},
			{
				"name": "margin-bottom",
				"desc": "The margin-bottom CSS property of an element sets the margin space required on the bottom of an element. A negative value is also allowed.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom",
				"syntax": "div { margin-bottom: 4px; }",
				"restriction": "length, percentage",
				"values": [
					{
						"name": "auto"
					}
				]
			},
			{
				"name": "margin-inline-end",
				"desc": "The margin-inline-end CSS property defines the logical inline end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. In other words, it corresponds to the margin-top, margin-right, margin-bottom or margin-left property depending on the values defined for writing-mode, direction, and text-orientation.",
				"browsers": "FF41",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline-end",
				"syntax": "div { margin-inline-end: 4px; }",
				"restriction": "length, percentage",
				"values": [
					{
						"name": "auto"
					}
				]
			},
			{
				"name": "margin-inline-start",
				"desc": "Logical 'margin-left'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
				"browsers": "FF41",
				"ref": "https://drafts.csswg.org/css-logical-props/#logical-prop",
				"syntax": "div { margin-inline-start: 4px; }",
				"restriction": "length, percentage",
				"values": [
					{
						"name": "auto"
					}
				]
			},
			{
				"name": "margin-left",
				"desc": "The margin-left CSS property sets the margin space required on the left side of a box associated with an element. A negative value is also allowed.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left",
				"syntax": "div { margin-left: 4px; }",
				"restriction": "length, percentage",
				"values": [
					{
						"name": "auto"
					}
				]
			},
			{
				"name": "margin-right",
				"desc": "The margin-right CSS property of an element sets the margin space required on the right side of an element. A negative value is also allowed.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/margin-right",
				"syntax": "div { margin-right: 4px; }",
				"restriction": "length, percentage",
				"values": [
					{
						"name": "auto"
					}
				]
			},
			{
				"name": "margin-top",
				"desc": "The margin-top CSS property of an element sets the margin space required on the top of an element. A negative value is also allowed.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/margin-top",
				"syntax": "div { margin-top: 4px; }",
				"restriction": "length, percentage",
				"values": [
					{
						"name": "auto"
					}
				]
			},
			{
				"name": "marker",
				"desc": "Specifies the marker symbol that shall be used for all points on the sets the value for all vertices on the given ‘path’ element or basic shape.",
				"ref": "http://www.w3.org/TR/SVG2/painting.html#MarkerProperty",
				"restriction": "url",
				"values": [
					{
						"name": "none",
						"desc": "Indicates that no marker symbol will be drawn at the given vertex or vertices."
					},
					{
						"name": "url()",
						"desc": "Indicates that the <marker> element referenced will be used."
					}
				]
			},
			{
				"name": "marker-end",
				"desc": "Specifies the marker that will be drawn at the last vertices of the given markable element.",
				"ref": "http://www.w3.org/TR/SVG2/painting.html#VertexMarkerProperties",
				"restriction": "url",
				"values": [
					{
						"name": "none",
						"desc": "Indicates that no marker symbol will be drawn at the given vertex or vertices."
					},
					{
						"name": "url()",
						"desc": "Indicates that the <marker> element referenced will be used."
					}
				]
			},
			{
				"name": "marker-mid",
				"desc": "Specifies the marker that will be drawn at all vertices except the first and last.",
				"ref": "http://www.w3.org/TR/SVG2/painting.html#VertexMarkerProperties",
				"restriction": "url",
				"values": [
					{
						"name": "none",
						"desc": "Indicates that no marker symbol will be drawn at the given vertex or vertices."
					},
					{
						"name": "url()",
						"desc": "Indicates that the <marker> element referenced will be used."
					}
				]
			},
			{
				"name": "marker-start",
				"desc": "Specifies the marker that will be drawn at the first vertices of the given markable element.",
				"ref": "http://www.w3.org/TR/SVG2/painting.html#VertexMarkerProperties",
				"restriction": "url",
				"values": [
					{
						"name": "none",
						"desc": "Indicates that no marker symbol will be drawn at the given vertex or vertices."
					},
					{
						"name": "url()",
						"desc": "Indicates that the <marker> element referenced will be used."
					}
				]
			},
			{
				"name": "mask-type",
				"desc": "The CSS mask-type properties defines if a mask is used as a luminance or an alpha mask.",
				"browsers": "C24,FF35,O15,S7",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/mask-type",
				"restriction": "enum",
				"values": [
					{
						"name": "alpha"
					},
					{
						"name": "luminance"
					}
				]
			},
			{
				"name": "max-block-size",
				"desc": "The max-block-size CSS property defines the horizontal or vertical maximal size of an element's block depending on its writing mode. It corresponds to the max-width or the max-height property, depending on the value defined for writing-mode. If the writing mode is vertically oriented, the value of max-block-size relates to the maximal width of the element, otherwise it relates to the maximal height of the element. It relates to max-inline-size, which defines the other dimension of the element.",
				"browsers": "FF41",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/max-block-size",
				"syntax": "header { max-block-size: 200px; }",
				"restriction": "length, percentage",
				"values": [
					{
						"name": "none",
						"desc": "No limit on the width of the box."
					}
				]
			},
			{
				"name": "max-height",
				"desc": "The max-height property is used to set the maximum height of an element. It prevents the used value of the height property from becoming larger than the value specified for max-height.",
				"browsers": "E,C,FF1,IE7,O7,S1",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/max-height",
				"syntax": "footer { max-height: 300px; }",
				"restriction": "length, percentage",
				"values": [
					{
						"name": "none",
						"desc": "No limit on the height of the box."
					},
					{
						"name": "fit-content",
						"browsers": "C46,O33"
					},
					{
						"name": "max-content",
						"browsers": "C46,O33"
					},
					{
						"name": "min-content",
						"browsers": "C46,O33"
					}
				]
			},
			{
				"name": "max-inline-size",
				"desc": "The max-inline-size CSS property defines the horizontal or vertical maximal size of an element's block depending on its writing mode. It corresponds to the max-width or the max-height property depending on the value defined for writing-mode. If the writing mode is vertically oriented, the value of max-inline-size relates to the maximal height of the element, otherwise it relates to the maximal width of the element. It relates to max-block-size, which defines the other dimension of the element.",
				"browsers": "FF41",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/max-inline-size",
				"syntax": "header { max-inline-size: 200px; }",
				"restriction": "length, percentage",
				"values": [
					{
						"name": "none",
						"desc": "No limit on the height of the box."
					}
				]
			},
			{
				"name": "max-width",
				"desc": "The max-width property is used to set the maximum width of a given element. It prevents the used value of the width property from becoming larger than the value specified for max-width.",
				"browsers": "E,C,FF1,IE7,O7,S1",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/max-width",
				"syntax": "footer { max-width: 300px; }",
				"restriction": "length, percentage",
				"values": [
					{
						"name": "none",
						"desc": "No limit on the width of the box."
					},
					{
						"name": "fit-content",
						"browsers": "C46,O33"
					},
					{
						"name": "max-content",
						"browsers": "C46,O33"
					},
					{
						"name": "min-content",
						"browsers": "C46,O33"
					}
				]
			},
			{
				"name": "min-block-size",
				"desc": "The min-block-size CSS property defines the horizontal or vertical minimal size of an element's block depending on its writing mode. It corresponds to the min-width or the min-height property, depending on the value defined for writing-mode. If the writing mode is vertically oriented, the value of min-block-size relates to the minimal width of the element, otherwise it relates to the minimal height of the element. It relates to min-inline-size, which defines the other dimension of the element.",
				"browsers": "FF41",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/min-block-size",
				"syntax": "header { min-block-size: 200px; }",
				"restriction": "length, percentage"
			},
			{
				"name": "min-height",
				"desc": "The min-height property is used to set the minimum height of a given element. It prevents the used value of the height property from becoming smaller than the value specified for min-height.",
				"browsers": "E,C,FF1,IE7,O7,S1",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/min-height",
				"syntax": "footer { min-height: 300px; }",
				"restriction": "length, percentage",
				"values": [
					{
						"name": "auto",
						"browsers": "E,IE11"
					},
					{
						"name": "fit-content",
						"browsers": "C46,O33"
					},
					{
						"name": "max-content",
						"browsers": "C46,O33"
					},
					{
						"name": "min-content",
						"browsers": "C46,O33"
					}
				]
			},
			{
				"name": "min-inline-size",
				"desc": "The min-inline-size CSS property defines the horizontal or vertical minimal size of an element's block depending on its writing mode. It corresponds to the min-width or the min-height property, depending on the value defined for writing-mode. If the writing mode is vertically oriented, the value of min-inline-size relates to the minimal height of the element, otherwise it relates to the minimal width of the element. It relates to min-block-size, which defines the other dimension of the element.",
				"browsers": "FF41",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/min-inline-size",
				"syntax": "header { min-inline-size: 200px; }",
				"restriction": "length, percentage"
			},
			{
				"name": "min-width",
				"desc": "The min-width property is used to set the minimum width of a given element. It prevents the used value of the width property from becoming smaller than the value specified for min-width.",
				"browsers": "E,C,FF1,IE7,O7,S1",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/min-width",
				"syntax": "footer { min-width: 300px; }",
				"restriction": "length, percentage",
				"values": [
					{
						"name": "auto",
						"browsers": "E,IE11"
					},
					{
						"name": "fit-content",
						"browsers": "C46,O33"
					},
					{
						"name": "max-content",
						"browsers": "C46,O33"
					},
					{
						"name": "min-content",
						"browsers": "C46,O33"
					}
				]
			},
			{
				"name": "mix-blend-mode",
				"desc": "The mix-blend-mode CSS property describes how an element's content should blend with the content of the element's direct parent and the element's background.",
				"browsers": "C41,FF32,O29,S7.1",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode",
				"syntax": "div { mix-blend-mode: saturation; }",
				"restriction": "enum",
				"values": [
					{
						"name": "normal",
						"desc": "Default attribute which specifies no blending"
					},
					{
						"name": "multiply"
					},
					{
						"name": "screen"
					},
					{
						"name": "overlay"
					},
					{
						"name": "darken"
					},
					{
						"name": "lighten"
					},
					{
						"name": "color-dodge"
					},
					{
						"name": "color-burn"
					},
					{
						"name": "hard-light"
					},
					{
						"name": "soft-light"
					},
					{
						"name": "difference"
					},
					{
						"name": "exclusion"
					},
					{
						"name": "hue",
						"browsers": "C41,FF32,O29"
					},
					{
						"name": "saturation",
						"browsers": "C41,FF32,O29"
					},
					{
						"name": "color",
						"browsers": "C41,FF32,O29"
					},
					{
						"name": "luminosity",
						"browsers": "C41,FF32,O29"
					}
				]
			},
			{
				"name": "motion",
				"desc": "Shorthand property for setting 'motion-path', 'motion-offset' and 'motion-rotation'.",
				"browsers": "C46,O33",
				"ref": "http://www.w3.org/TR/motion-1/#propdef-motion",
				"restriction": "url, length, percentage, angle, shape, geometry-box, enum",
				"values": [
					{
						"name": "none",
						"desc": "No motion path gets created."
					},
					{
						"name": "path()"
					},
					{
						"name": "auto",
						"desc": "Indicates that the object is rotated by the angle of the direction of the motion path."
					},
					{
						"name": "reverse",
						"desc": "Indicates that the object is rotated by the angle of the direction of the motion path plus 180 degrees."
					}
				]
			},
			{
				"name": "motion-offset",
				"desc": "A distance that describes the position along the specified motion path.",
				"browsers": "C46,O33",
				"ref": "http://www.w3.org/TR/motion-1/#propdef-motion-offset",
				"syntax": "div { motion-offset: 10%; }",
				"restriction": "length, percentage"
			},
			{
				"name": "motion-path",
				"desc": "Specifies the motion path the element gets positioned at.",
				"browsers": "C46,O33",
				"ref": "http://www.w3.org/TR/motion-1/#propdef-motion-path",
				"restriction": "url, shape, geometry-box, enum",
				"values": [
					{
						"name": "none",
						"desc": "No motion path gets created."
					},
					{
						"name": "path()"
					}
				]
			},
			{
				"name": "motion-rotation",
				"desc": "Defines the direction of the element while positioning along the motion path.",
				"browsers": "C46,O33",
				"ref": "http://www.w3.org/TR/motion-1/#propdef-motion-rotation",
				"syntax": "div { motion-rotation: 90%; }",
				"restriction": "angle",
				"values": [
					{
						"name": "auto",
						"desc": "Indicates that the object is rotated by the angle of the direction of the motion path."
					},
					{
						"name": "reverse",
						"desc": "Indicates that the object is rotated by the angle of the direction of the motion path plus 180 degrees."
					}
				]
			},
			{
				"name": "-moz-animation",
				"desc": "Shorthand property combines six of the animation properties into a single property.",
				"browsers": "FF9",
				"ref": "http://www.w3.org/TR/css3-animations/#animation",
				"syntax": "div { -moz-animation: movearound 4s ease 3 normal; }",
				"restriction": "time, enum, timing-function, identifier, number",
				"values": [
					{
						"name": "alternate"
					},
					{
						"name": "alternate-reverse"
					},
					{
						"name": "backwards"
					},
					{
						"name": "both",
						"desc": "Both forwards and backwards fill modes are applied."
					},
					{
						"name": "forwards"
					},
					{
						"name": "infinite",
						"desc": "Causes the animation to repeat forever."
					},
					{
						"name": "none",
						"desc": "No animation is performed"
					},
					{
						"name": "normal",
						"desc": "Normal playback."
					},
					{
						"name": "reverse",
						"desc": "All iterations of the animation are played in the reverse direction from the way they were specified."
					}
				]
			},
			{
				"name": "-moz-animation-delay",
				"desc": "Defines when the animation will start.",
				"browsers": "FF9",
				"ref": "http://www.w3.org/TR/css3-animations/#animation-delay",
				"syntax": "div { -moz-animation-delay: 4s; }",
				"restriction": "time"
			},
			{
				"name": "-moz-animation-direction",
				"desc": "Defines whether or not the animation should play in reverse on alternate cycles.",
				"browsers": "FF9",
				"ref": "http://www.w3.org/TR/css3-animations/#animation-direction",
				"syntax": "div { -moz-animation-direction: normal; }",
				"restriction": "enum",
				"values": [
					{
						"name": "alternate"
					},
					{
						"name": "alternate-reverse"
					},
					{
						"name": "normal",
						"desc": "Normal playback."
					},
					{
						"name": "reverse",
						"desc": "All iterations of the animation are played in the reverse direction from the way they were specified."
					}
				]
			},
			{
				"name": "-moz-animation-duration",
				"desc": "Defines the length of time that an animation takes to complete one cycle.",
				"browsers": "FF9",
				"ref": "http://www.w3.org/TR/css3-animations/#animation-duration",
				"syntax": "div { -moz-animation-duration: 4s; }",
				"restriction": "time"
			},
			{
				"name": "-moz-animation-iteration-count",
				"desc": "Defines the number of times an animation cycle is played. The default value is one, meaning the animation will play from beginning to end once.",
				"browsers": "FF9",
				"ref": "http://www.w3.org/TR/css3-animations/#animation-iteration-count",
				"syntax": "div { -moz-animation-iteration-count: 3; }",
				"restriction": "number, enum",
				"values": [
					{
						"name": "infinite",
						"desc": "Causes the animation to repeat forever."
					}
				]
			},
			{
				"name": "-moz-animation-name",
				"desc": "Defines a list of animations that apply. Each name is used to select the keyframe at-rule that provides the property values for the animation.",
				"browsers": "FF9",
				"ref": "http://www.w3.org/TR/css3-animations/#the-animation-name-property-",
				"syntax": "div { -moz-animation-name: movearound; }",
				"restriction": "identifier, enum",
				"values": [
					{
						"name": "none",
						"desc": "No animation is performed"
					}
				]
			},
			{
				"name": "-moz-animation-play-state",
				"desc": "Defines whether the animation is running or paused.",
				"browsers": "FF9",
				"ref": "http://www.w3.org/TR/css3-animations/#animation-play-state",
				"syntax": "div { -moz-animation-play-state: running; }",
				"restriction": "enum",
				"values": [
					{
						"name": "paused"
					},
					{
						"name": "running"
					}
				]
			},
			{
				"name": "-moz-animation-timing-function",
				"desc": "Describes how the animation will progress over one cycle of its duration. See the 'transition-timing-function'.",
				"browsers": "FF9",
				"ref": "http://www.w3.org/TR/css3-animations/#animation-timing-function",
				"syntax": "div { -moz-animation-timing-function: ease; }",
				"restriction": "timing-function"
			},
			{
				"name": "-moz-appearance",
				"desc": "Used in Gecko (Firefox) to display an element using a platform-native styling based on the operating system's theme.",
				"browsers": "FF1",
				"ref": "https://developer.mozilla.org/en/CSS/-moz-appearance",
				"syntax": ".example { -moz-appearance: toolbarbutton; }",
				"restriction": "enum",
				"values": [
					{
						"name": "button"
					},
					{
						"name": "button-arrow-down"
					},
					{
						"name": "button-arrow-next"
					},
					{
						"name": "button-arrow-previous"
					},
					{
						"name": "button-arrow-up"
					},
					{
						"name": "button-bevel"
					},
					{
						"name": "checkbox"
					},
					{
						"name": "checkbox-container"
					},
					{
						"name": "checkbox-label"
					},
					{
						"name": "dialog"
					},
					{
						"name": "groupbox"
					},
					{
						"name": "listbox"
					},
					{
						"name": "menuarrow"
					},
					{
						"name": "menuimage"
					},
					{
						"name": "menuitem"
					},
					{
						"name": "menuitemtext"
					},
					{
						"name": "menulist"
					},
					{
						"name": "menulist-button"
					},
					{
						"name": "menulist-text"
					},
					{
						"name": "menulist-textfield"
					},
					{
						"name": "menupopup"
					},
					{
						"name": "menuradio"
					},
					{
						"name": "menuseparator"
					},
					{
						"name": "-moz-mac-unified-toolbar"
					},
					{
						"name": "-moz-win-borderless-glass"
					},
					{
						"name": "-moz-win-browsertabbar-toolbox"
					},
					{
						"name": "-moz-win-communications-toolbox"
					},
					{
						"name": "-moz-win-glass"
					},
					{
						"name": "-moz-win-media-toolbox"
					},
					{
						"name": "none"
					},
					{
						"name": "progressbar"
					},
					{
						"name": "progresschunk"
					},
					{
						"name": "radio"
					},
					{
						"name": "radio-container"
					},
					{
						"name": "radio-label"
					},
					{
						"name": "radiomenuitem"
					},
					{
						"name": "resizer"
					},
					{
						"name": "resizerpanel"
					},
					{
						"name": "scrollbarbutton-down"
					},
					{
						"name": "scrollbarbutton-left"
					},
					{
						"name": "scrollbarbutton-right"
					},
					{
						"name": "scrollbarbutton-up"
					},
					{
						"name": "scrollbar-small"
					},
					{
						"name": "scrollbartrack-horizontal"
					},
					{
						"name": "scrollbartrack-vertical"
					},
					{
						"name": "separator"
					},
					{
						"name": "spinner"
					},
					{
						"name": "spinner-downbutton"
					},
					{
						"name": "spinner-textfield"
					},
					{
						"name": "spinner-upbutton"
					},
					{
						"name": "statusbar"
					},
					{
						"name": "statusbarpanel"
					},
					{
						"name": "tab"
					},
					{
						"name": "tabpanels"
					},
					{
						"name": "tab-scroll-arrow-back"
					},
					{
						"name": "tab-scroll-arrow-forward"
					},
					{
						"name": "textfield"
					},
					{
						"name": "textfield-multiline"
					},
					{
						"name": "toolbar"
					},
					{
						"name": "toolbox"
					},
					{
						"name": "tooltip"
					},
					{
						"name": "treeheadercell"
					},
					{
						"name": "treeheadersortarrow"
					},
					{
						"name": "treeitem"
					},
					{
						"name": "treetwistyopen"
					},
					{
						"name": "treeview"
					},
					{
						"name": "treewisty"
					},
					{
						"name": "window"
					}
				]
			},
			{
				"name": "-moz-backface-visibility",
				"desc": "Determines whether or not the 'back' side of a transformed element is visible when facing the viewer. With an identity transform, the front side of an element faces the viewer.",
				"browsers": "FF10",
				"ref": "http://www.w3.org/TR/css3-3d-transforms/#backface-visibility",
				"syntax": "div { -moz-backface-visibility: hidden; }",
				"restriction": "enum",
				"values": [
					{
						"name": "hidden"
					},
					{
						"name": "visible"
					}
				]
			},
			{
				"name": "-moz-background-clip",
				"desc": "Determines the background painting area.",
				"browsers": "FF1-3.6",
				"ref": "http://www.w3.org/TR/css3-background/#the-background-clip",
				"syntax": "header { -moz-background-clip: border-box; }",
				"restriction": "box, enum",
				"values": [
					{
						"name": "padding"
					}
				]
			},
			{
				"name": "-moz-background-inline-policy",
				"desc": "In Gecko-based applications like Firefox, the -moz-background-inline-policy CSS property specifies how the background image of an inline element is determined when the content of the inline element wraps onto multiple lines. The choice of position has significant effects on repetition.",
				"browsers": "FF1",
				"ref": "https://developer.mozilla.org/en/CSS/-moz-background-inline-policy",
				"syntax": "div { -moz-background-inline-policy: bounding-box; }",
				"restriction": "enum",
				"values": [
					{
						"name": "bounding-box"
					},
					{
						"name": "continuous"
					},
					{
						"name": "each-box"
					}
				]
			},
			{
				"name": "-moz-background-origin",
				"desc": "For elements rendered as a single box, specifies the background positioning area. For elements rendered as multiple boxes (e.g., inline boxes on several lines, boxes on several pages) specifies which boxes 'box-decoration-break' operates on to determine the background positioning area(s).",
				"browsers": "FF1",
				"ref": "http://www.w3.org/TR/css3-background/#the-background-origin",
				"syntax": "header { -moz-background-origin: border-box; }",
				"restriction": "box"
			},
			{
				"name": "-moz-border-bottom-colors",
				"desc": "Sets a list of colors for the bottom border.",
				"browsers": "FF1",
				"ref": "https://developer.mozilla.org/en/CSS/-moz-border-left-colors",
				"syntax": "td { -moz-border-bottom-colors:  #00ff33 #33ff66 #66ff99; }",
				"restriction": "color"
			},
			{
				"name": "-moz-border-image",
				"desc": "Shorthand property for setting 'border-image-source', 'border-image-slice', 'border-image-width', 'border-image-outset' and 'border-image-repeat'. Omitted values are set to their initial values.",
				"browsers": "FF3.6",
				"ref": "http://www.w3.org/TR/css3-background/#border-image",
				"syntax": "td { -moz-border-image: url(border.png) 30 30 round;}",
				"restriction": "length, percentage, number, url, enum",
				"values": [
					{
						"name": "auto",
						"desc": "If 'auto' is specified then the border image width is the intrinsic width or height (whichever is applicable) of the corresponding image slice. If the image does not have the required intrinsic dimension then the corresponding border-width is used instead."
					},
					{
						"name": "fill",
						"desc": "Causes the middle part of the border-image to be preserved."
					},
					{
						"name": "none"
					},
					{
						"name": "repeat"
					},
					{
						"name": "round",
						"desc": "The image is tiled (repeated) to fill the area. If it does not fill the area with a whole number of tiles, the image is rescaled so that it does."
					},
					{
						"name": "space",
						"desc": "The image is tiled (repeated) to fill the area. If it does not fill the area with a whole number of tiles, the extra space is distributed around the tiles."
					},
					{
						"name": "stretch",
						"desc": "The image is stretched to fill the area."
					},
					{
						"name": "url()"
					}
				]
			},
			{
				"name": "-moz-border-left-colors",
				"desc": "Sets a list of colors for the bottom border.",
				"browsers": "FF1",
				"ref": "https://developer.mozilla.org/en/CSS/-moz-border-left-colors",
				"syntax": "td { -moz-border-left-colors:  #00ff33 #33ff66 #66ff99; }",
				"restriction": "color"
			},
			{
				"name": "-moz-border-right-colors",
				"desc": "Sets a list of colors for the bottom border.",
				"browsers": "FF1",
				"ref": "https://developer.mozilla.org/en/CSS/-moz-border-left-colors",
				"syntax": "td { -moz-border-right-colors:  #00ff33 #33ff66 #66ff99; }",
				"restriction": "color"
			},
			{
				"name": "-moz-border-top-colors",
				"desc": "Ske Firefox, -moz-border-bottom-colors sets a list of colors for the bottom border.",
				"browsers": "FF1",
				"ref": "https://developer.mozilla.org/en/CSS/-moz-border-left-colors",
				"syntax": "td { -moz-border-top-colors:  #00ff33 #33ff66 #66ff99; }",
				"restriction": "color"
			},
			{
				"name": "-moz-box-align",
				"desc": "Specifies how a XUL box aligns its contents across (perpendicular to) the direction of its layout. The effect of this is only visible if there is extra space in the box.",
				"browsers": "FF1",
				"ref": "https://developer.mozilla.org/en/CSS/-moz-box-align",
				"syntax": "div { -moz-box-align: end; }",
				"restriction": "enum",
				"values": [
					{
						"name": "baseline",
						"desc": "If this box orientation is inline-axis or horizontal, all children are placed with their baselines aligned, and extra space placed before or after as necessary. For block flows, the baseline of the first non-empty line box located within the element is used. For tables, the baseline of the first cell is used."
					},
					{
						"name": "center",
						"desc": "Any extra space is divided evenly, with half placed above the child and the other half placed after the child."
					},
					{
						"name": "end",
						"desc": "For normal direction boxes, the bottom edge of each child is placed along the bottom of the box. Extra space is placed above the element. For reverse direction boxes, the top edge of each child is placed along the top of the box. Extra space is placed below the element."
					},
					{
						"name": "start",
						"desc": "For normal direction boxes, the top edge of each child is placed along the top of the box. Extra space is placed below the element. For reverse direction boxes, the bottom edge of each child is placed along the bottom of the box. Extra space is placed above the element."
					},
					{
						"name": "stretch",
						"desc": "The height of each child is adjusted to that of the containing block."
					}
				]
			},
			{
				"name": "-moz-box-direction",
				"desc": "Specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).",
				"browsers": "FF1",
				"ref": "https://developer.mozilla.org/en/CSS/-moz-box-direction",
				"syntax": "div { -moz-box-direction: reverse; }",
				"restriction": "enum",
				"values": [
					{
						"name": "normal",
						"desc": "A box with a computed value of horizontal for box-orient displays its children from left to right. A box with a computed value of vertical displays its children from top to bottom."
					},
					{
						"name": "reverse",
						"desc": "A box with a computed value of horizontal for box-orient displays its children from right to left. A box with a computed value of vertical displays its children from bottom to top."
					}
				]
			},
			{
				"name": "-moz-box-flex",
				"desc": "Specifies how a box grows to fill the box that contains it, in the direction of the containing box's layout.",
				"browsers": "FF1",
				"ref": "https://developer.mozilla.org/en/CSS/-moz-box-flex",
				"syntax": "div { -moz-box-flex: 1; }",
				"restriction": "number"
			},
			{
				"name": "-moz-box-flexgroup",
				"desc": "Flexible elements can be assigned to flex groups using the 'box-flex-group' property.",
				"browsers": "FF1",
				"ref": "https://developer.mozilla.org/en/CSS/-moz-box-flexgroup",
				"syntax": "div { -moz-box-flexgroup: 3; }",
				"restriction": "integer"
			},
			{
				"name": "-moz-box-ordinal-group",
				"desc": "Indicates the ordinal group the element belongs to. Elements with a lower ordinal group are displayed before those with a higher ordinal group.",
				"browsers": "FF1",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/-moz-box-ordinal-group",
				"syntax": "div { -moz-box-ordinal-group: 5; }",
				"restriction": "integer"
			},
			{
				"name": "-moz-box-orient",
				"desc": "In Mozilla applications, -moz-box-orient specifies whether a box lays out its contents horizontally or vertically.",
				"browsers": "FF1",
				"ref": "https://developer.mozilla.org/en/CSS/-moz-box-orient",
				"syntax": "div { -moz-box-orient: vertical; }",
				"restriction": "enum",
				"values": [
					{
						"name": "block-axis"
					},
					{
						"name": "horizontal",
						"desc": "The box displays its children from left to right in a horizontal line."
					},
					{
						"name": "inline-axis"
					},
					{
						"name": "vertical",
						"desc": "The box displays its children from stacked from top to bottom vertically."
					}
				]
			},
			{
				"name": "-moz-box-pack",
				"desc": "Specifies how a box packs its contents in the direction of its layout. The effect of this is only visible if there is extra space in the box.",
				"browsers": "FF1",
				"ref": "https://developer.mozilla.org/en/CSS/-moz-box-pack",
				"syntax": "div { -moz-box-pack: end; }",
				"restriction": "enum",
				"values": [
					{
						"name": "center",
						"desc": "The extra space is divided evenly, with half placed before the first child and the other half placed after the last child."
					},
					{
						"name": "end",
						"desc": "For normal direction boxes, the right edge of the last child is placed at the right side, with all extra space placed before the first child. For reverse direction boxes, the left edge of the first child is placed at the left side, with all extra space placed after the last child."
					},
					{
						"name": "justify",
						"desc": "The space is divided evenly in-between each child, with none of the extra space placed before the first child or after the last child. If there is only one child, treat the pack value as if it were start."
					},
					{
						"name": "start",
						"desc": "For normal direction boxes, the left edge of the first child is placed at the left side, with all extra space placed after the last child. For reverse direction boxes, the right edge of the last child is placed at the right side, with all extra space placed before the first child."
					}
				]
			},
			{
				"name": "-moz-box-sizing",
				"desc": "Box Model addition in CSS3.",
				"browsers": "FF1",
				"ref": "http://www.w3.org/TR/css3-ui/#box-sizing",
				"syntax": "div { -moz-box-sizing: content-box; }",
				"restriction": "enum",
				"values": [
					{
						"name": "border-box"
					},
					{
						"name": "content-box"
					},
					{
						"name": "padding-box"
					}
				]
			},
			{
				"name": "-moz-column-count",
				"desc": "Describes the optimal number of columns into which the content of the element will be flowed.",
				"browsers": "FF3.5",
				"ref": "http://www.w3.org/TR/css3-multicol/#column-count",
				"syntax": "div { -moz-column-count: 3; }",
				"restriction": "integer",
				"values": [
					{
						"name": "auto",
						"desc": "Determines the number of columns by the 'column-width' property and the element width."
					}
				]
			},
			{
				"name": "-moz-column-gap",
				"desc": "Sets the gap between columns. If there is a column rule between columns, it will appear in the middle of the gap.",
				"browsers": "FF3.5",
				"ref": "http://www.w3.org/TR/css3-multicol/#column-gap0",
				"syntax": "div { -moz-column-gap: 10px; }",
				"restriction": "length",
				"values": [
					{
						"name": "normal",
						"desc": "User agent specific and typically equivalent to 1em."
					}
				]
			},
			{
				"name": "-moz-column-rule",
				"desc": "Shorthand for setting 'column-rule-width', 'column-rule-style', and 'column-rule-color' at the same place in the style sheet. Omitted values are set to their initial values.",
				"browsers": "FF3.5",
				"ref": "http://www.w3.org/TR/css3-multicol/#column-rule0",
				"syntax": "header { -moz-column-rule: 5px solid red;}",
				"restriction": "length, line-width, line-style, color"
			},
			{
				"name": "-moz-column-rule-color",
				"desc": "Sets the color of the column rule",
				"browsers": "FF3.5",
				"ref": "http://www.w3.org/TR/css3-multicol/#column-rule-color",
				"syntax": "div { -moz-column-rule-color: #ff0; }",
				"restriction": "color"
			},
			{
				"name": "-moz-column-rule-style",
				"desc": "Sets the style of the rule between columns of an element.",
				"browsers": "FF3.5",
				"ref": "http://www.w3.org/TR/css3-multicol/#column-rule-style",
				"syntax": "div { -moz-column-rule-style: solid; }",
				"restriction": "line-style"
			},
			{
				"name": "-moz-column-rule-width",
				"desc": "Sets the width of the rule between columns. Negative values are not allowed.",
				"browsers": "FF3.5",
				"ref": "http://www.w3.org/TR/css3-multicol/#column-rule-width",
				"syntax": "div { -moz-column-rule-width: 3px; }",
				"restriction": "length, line-width"
			},
			{
				"name": "-moz-columns",
				"desc": "A shorthand property which sets both 'column-width' and 'column-count'.",
				"browsers": "FF9",
				"ref": "http://www.w3.org/TR/css3-multicol/#columns0",
				"syntax": "div { -moz-columns: 100px 3; }",
				"restriction": "length, integer",
				"values": [
					{
						"name": "auto",
						"desc": "The width depends on the values of other properties."
					}
				]
			},
			{
				"name": "-moz-column-width",
				"desc": "This property describes the width of columns in multicol elements.",
				"browsers": "FF3.5",
				"ref": "http://www.w3.org/TR/css3-multicol/#column-width",
				"syntax": "div { -moz-column-width: 100px; }",
				"restriction": "length",
				"values": [
					{
						"name": "auto",
						"desc": "The width depends on the values of other properties."
					}
				]
			},
			{
				"name": "-moz-font-feature-settings",
				"desc": "Provides low-level control over OpenType font features. It is intended as a way of providing access to font features that are not widely used but are needed for a particular use case.",
				"browsers": "FF4",
				"ref": "http://www.w3.org/TR/css3-fonts/#propdef-font-feature-settings",
				"syntax": "body { -moz-font-feature-settings: 'hwid'; }",
				"restriction": "string, integer",
				"values": [
					{
						"name": "\"c2cs\""
					},
					{
						"name": "\"dlig\""
					},
					{
						"name": "\"kern\""
					},
					{
						"name": "\"liga\""
					},
					{
						"name": "\"lnum\""
					},
					{
						"name": "\"onum\""
					},
					{
						"name": "\"smcp\""
					},
					{
						"name": "\"swsh\""
					},
					{
						"name": "\"tnum\""
					},
					{
						"name": "normal",
						"desc": "No change in glyph substitution or positioning occurs."
					},
					{
						"name": "off",
						"browsers": "FF15"
					},
					{
						"name": "on",
						"browsers": "FF15"
					}
				]
			},
			{
				"name": "-moz-hyphens",
				"desc": "Controls whether hyphenation is allowed to create more break opportunities within a line of text.",
				"browsers": "FF9",
				"ref": "http://www.w3.org/TR/css3-text/#hyphens0",
				"syntax": "div { -moz-hyphens: manual; }",
				"restriction": "enum",
				"values": [
					{
						"name": "auto",
						"desc": "Conditional hyphenation characters inside a word, if present, take priority over automatic resources when determining hyphenation points within the word."
					},
					{
						"name": "manual"
					},
					{
						"name": "none",
						"desc": "Words are not broken at line breaks, even if characters inside the word suggest line break points."
					}
				]
			},
			{
				"name": "-moz-perspective",
				"desc": "Applies the same transform as the perspective(<number>) transform function, except that it applies only to the positioned or transformed children of the element, not to the transform on the element itself.",
				"browsers": "FF10",
				"ref": "http://www.w3.org/TR/css3-3d-transforms/#perspective",
				"syntax": "div { -moz-perspective: none; }",
				"restriction": "length",
				"values": [
					{
						"name": "none",
						"desc": "No perspective transform is applied."
					}
				]
			},
			{
				"name": "-moz-perspective-origin",
				"desc": "Establishes the origin for the perspective property. It effectively sets the X and Y position at which the viewer appears to be looking at the children of the element.",
				"browsers": "FF10",
				"ref": "http://www.w3.org/TR/css3-3d-transforms/#perspective-origin",
				"syntax": "div { -moz-perspective-origin: 10px; }",
				"restriction": "position, percentage, length"
			},
			{
				"name": "-moz-text-align-last",
				"desc": "Describes how the last line of a block or a line right before a forced line break is aligned when 'text-align' is set to 'justify'.",
				"browsers": "FF12",
				"ref": "http://www.w3.org/TR/css3-text/#text-align-last0",
				"syntax": "div { -moz-text-align-last: right; }",
				"restriction": "enum",
				"values": [
					{
						"name": "auto"
					},
					{
						"name": "center",
						"desc": "The inline contents are centered within the line box."
					},
					{
						"name": "justify",
						"desc": "The text is justified according to the method specified by the 'text-justify' property."
					},
					{
						"name": "left",
						"desc": "The inline contents are aligned to the left edge of the line box. In vertical text, 'left' aligns to the edge of the line box that would be the start edge for left-to-right text."
					},
					{
						"name": "right",
						"desc": "The inline contents are aligned to the right edge of the line box. In vertical text, 'right' aligns to the edge of the line box that would be the end edge for left-to-right text."
					}
				]
			},
			{
				"name": "-moz-text-decoration-color",
				"desc": "Specifies the color of text decoration (underlines overlines, and line-throughs) set on the element with text-decoration-line.",
				"browsers": "FF6",
				"ref": "http://www.w3.org/TR/css-text-decor-3/#text-decoration-color",
				"syntax": "div { -moz-text-decoration-color: #ff0; }",
				"restriction": "color"
			},
			{
				"name": "-moz-text-decoration-line",
				"desc": "Specifies what line decorations, if any, are added to the element.",
				"browsers": "FF6",
				"ref": "http://www.w3.org/TR/css-text-decor-3/#text-decoration-line",
				"syntax": "div { -moz-text-decoration-line: underline; }",
				"restriction": "enum",
				"values": [
					{
						"name": "line-through"
					},
					{
						"name": "none",
						"desc": "Neither produces nor inhibits text decoration."
					},
					{
						"name": "overline"
					},
					{
						"name": "underline"
					}
				]
			},
			{
				"name": "-moz-text-decoration-style",
				"desc": "Specifies the line style for underline, line-through and overline text decoration.",
				"browsers": "FF6",
				"ref": "http://www.w3.org/TR/css-text-decor-3/#text-decoration-style",
				"syntax": "div { -moz-text-decoration-style: solid; }",
				"restriction": "enum",
				"values": [
					{
						"name": "dashed"
					},
					{
						"name": "dotted"
					},
					{
						"name": "double"
					},
					{
						"name": "none",
						"desc": "Produces no line."
					},
					{
						"name": "solid"
					},
					{
						"name": "wavy"
					}
				]
			},
			{
				"name": "-moz-text-size-adjust",
				"desc": "Specifies a size adjustment for displaying text content in mobile browsers.",
				"browsers": "FF",
				"ref": "http://dev.w3.org/csswg/css-size-adjust/",
				"syntax": "body { -moz-text-size-adjust: 150%; }",
				"restriction": "enum, percentage",
				"values": [
					{
						"name": "auto",
						"desc": "Renderers must use the default size adjustment when displaying on a small device."
					},
					{
						"name": "none",
						"desc": "Renderers must not do size adjustment when displaying on a small device."
					}
				]
			},
			{
				"name": "-moz-transform",
				"desc": "A two-dimensional transformation is applied to an element through the 'transform' property. This property contains a list of transform functions similar to those allowed by SVG.",
				"browsers": "FF3.5",
				"ref": "http://www.w3.org/TR/css3-2d-transforms/#transform-property",
				"syntax": "div { -moz-transform: rotate(-90deg); }",
				"restriction": "enum",
				"values": [
					{
						"name": "matrix()"
					},
					{
						"name": "matrix3d()"
					},
					{
						"name": "none"
					},
					{
						"name": "perspective"
					},
					{
						"name": "rotate()"
					},
					{
						"name": "rotate3d()"
					},
					{
						"name": "rotateX('angle')"
					},
					{
						"name": "rotateY('angle')"
					},
					{
						"name": "rotateZ('angle')"
					},
					{
						"name": "scale()"
					},
					{
						"name": "scale3d()"
					},
					{
						"name": "scaleX()"
					},
					{
						"name": "scaleY()"
					},
					{
						"name": "scaleZ()"
					},
					{
						"name": "skew()"
					},
					{
						"name": "skewX()"
					},
					{
						"name": "skewY()"
					},
					{
						"name": "translate()"
					},
					{
						"name": "translate3d()"
					},
					{
						"name": "translateX()"
					},
					{
						"name": "translateY()"
					},
					{
						"name": "translateZ()"
					}
				]
			},
			{
				"name": "-moz-transform-origin",
				"desc": "Establishes the origin of transformation for an element.",
				"browsers": "FF3.5",
				"ref": "http://www.w3.org/TR/css3-2d-transforms/#transform-origin",
				"syntax": ".album { -moz-transform-origin: 20% 40%; }",
				"restriction": "position, length, percentage"
			},
			{
				"name": "-moz-transition",
				"desc": "Shorthand property combines four of the transition properties into a single property.",
				"browsers": "FF4",
				"ref": "http://www.w3.org/TR/css3-transitions/#transition",
				"syntax": "div { -moz-transition: background-color linear 1s; }",
				"restriction": "time, property, timing-function, enum",
				"values": [
					{
						"name": "all",
						"desc": "Every property that is able to undergo a transition will do so."
					},
					{
						"name": "none",
						"desc": "No property will transition."
					}
				]
			},
			{
				"name": "-moz-transition-delay",
				"desc": "Defines when the transition will start. It allows a transition to begin execution some period of time from when it is applied.",
				"browsers": "FF4",
				"ref": "http://www.w3.org/TR/css3-transitions/#transition-delay",
				"syntax": "div { -moz-transition-delay: 1s; }",
				"restriction": "time"
			},
			{
				"name": "-moz-transition-duration",
				"desc": "Specifies how long the transition from the old value to the new value should take.",
				"browsers": "FF4",
				"ref": "http://www.w3.org/TR/css3-transitions/#transition-duration",
				"syntax": "div { -moz-transition-duration: 1s; }",
				"restriction": "time"
			},
			{
				"name": "-moz-transition-property",
				"desc": "Specifies the name of the CSS property to which the transition is applied.",
				"browsers": "FF4",
				"ref": "http://www.w3.org/TR/css3-transitions/#transition-property",
				"syntax": "div { -moz-transition-property: background-color; }",
				"restriction": "property",
				"values": [
					{
						"name": "all",
						"desc": "Every property that is able to undergo a transition will do so."
					},
					{
						"name": "none",
						"desc": "No property will transition."
					}
				]
			},
			{
				"name": "-moz-transition-timing-function",
				"desc": "Describes how the intermediate values used during a transition will be calculated.",
				"browsers": "FF4",
				"ref": "http://www.w3.org/TR/css3-transitions/#transition-timing-function",
				"syntax": "div { -moz-transition-timing-function: linear; }",
				"restriction": "timing-function"
			},
			{
				"name": "-moz-user-focus",
				"desc": "The -moz-user-focus CSS property is used to indicate whether the element can have the focus.",
				"browsers": "FF1.5",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/-moz-user-focus",
				"syntax": "div { -moz-user-focus: ignore; }",
				"values": [
					{
						"name": "ignore"
					},
					{
						"name": "normal"
					}
				]
			},
			{
				"name": "-moz-user-select",
				"desc": "Controls the appearance of selection.",
				"browsers": "FF1.5",
				"ref": "https://developer.mozilla.org/en/CSS/-moz-user-select",
				"syntax": "div { -moz-user-select: text; }",
				"restriction": "enum",
				"values": [
					{
						"name": "all"
					},
					{
						"name": "element"
					},
					{
						"name": "elements"
					},
					{
						"name": "-moz-all"
					},
					{
						"name": "-moz-none"
					},
					{
						"name": "none"
					},
					{
						"name": "text"
					},
					{
						"name": "toggle"
					}
				]
			},
			{
				"name": "-ms-accelerator",
				"desc": "IE only. Has the ability to turn off its system underlines for accelerator keys until the ALT key is pressed",
				"browsers": "E,IE10",
				"ref": "http://www.css3.com/css-accelerator/",
				"syntax": "u { -ms-accelerator: true; }",
				"restriction": "enum",
				"values": [
					{
						"name": "false"
					},
					{
						"name": "true"
					}
				]
			},
			{
				"name": "-ms-behavior",
				"desc": "IE only. Used to extend behaviors of the browser",
				"browsers": "IE8",
				"ref": "https://msdn.microsoft.com/en-us/ie/gg192966.aspx",
				"syntax": "div { -ms-behavior: url(http://example.com/png_fix.htc); }",
				"restriction": "url"
			},
			{
				"name": "-ms-block-progression",
				"desc": "Sets the block-progression value and the flow orientation",
				"browsers": "IE8",
				"ref": "http://www.w3.org/TR/2003/CR-css3-text-20030514/#Progression",
				"syntax": "div { -ms-block-progression: bt; }",
				"restriction": "enum",
				"values": [
					{
						"name": "bt"
					},
					{
						"name": "lr"
					},
					{
						"name": "rl"
					},
					{
						"name": "tb"
					}
				]
			},
			{
				"name": "-ms-content-zoom-chaining",
				"desc": "Specifies the zoom behavior that occurs when a user hits the zoom limit during a manipulation.",
				"browsers": "E,IE10",
				"ref": "https://msdn.microsoft.com/en-us/library/windows/apps/hh441243.aspx",
				"syntax": "div { -ms-content-zoom-chaining: chained; }",
				"values": [
					{
						"name": "chained",
						"desc": "The nearest zoomable parent element begins zooming when the user hits a zoom limit during a manipulation. No bounce effect is shown."
					},
					{
						"name": "none",
						"desc": "A bounce effect is shown when the user hits a zoom limit during a manipulation."
					}
				]
			},
			{
				"name": "-ms-content-zooming",
				"desc": "Specifies whether zooming is enabled.",
				"browsers": "E,IE10",
				"ref": "https://msdn.microsoft.com/en-us/library/windows/apps/hh441251.aspx",
				"syntax": "div { -ms-content-zooming: zoom; }",
				"restriction": "enum",
				"values": [
					{
						"name": "none",
						"desc": "The element is not zoomable."
					},
					{
						"name": "zoom"
					}
				]
			},
			{
				"name": "-ms-content-zoom-limit",
				"desc": "Shorthand property for the -ms-content-zoom-limit-min and -ms-content-zoom-limit-max properties.",
				"browsers": "E,IE10",
				"ref": "https://msdn.microsoft.com/en-us/library/windows/apps/hh996912.aspx",
				"syntax": "div { -ms-content-zoom-limit: 10%; }",
				"restriction": "percentage"
			},
			{
				"name": "-ms-content-zoom-limit-max",
				"desc": "Specifies the maximum zoom factor.",
				"browsers": "E,IE10",
				"ref": "https://msdn.microsoft.com/en-us/library/windows/apps/hh996913.aspx",
				"syntax": "div { -ms-content-zoom-limit-max: 10%; }",
				"restriction": "percentage"
			},
			{
				"name": "-ms-content-zoom-limit-min",
				"desc": "Specifies the minimum zoom factor.",
				"browsers": "E,IE10",
				"ref": "https://msdn.microsoft.com/en-us/library/windows/apps/hh996914.aspx",
				"syntax": "div { -ms-content-zoom-limit-min: 10%; }",
				"restriction": "percentage"
			},
			{
				"name": "-ms-content-zoom-snap",
				"desc": "Shorthand property for the -ms-content-zoom-snap-type and -ms-content-zoom-snap-points properties.",
				"browsers": "E,IE10",
				"ref": "https://msdn.microsoft.com/en-us/library/windows/apps/hh441255.aspx",
				"syntax": "header { -ms-content-zoom-snap: proximity; }",
				"values": [
					{
						"name": "mandatory",
						"desc": "Indicates that the motion of the content after the contact is picked up is always adjusted so that it lands on a snap-point."
					},
					{
						"name": "none",
						"desc": "Indicates that zooming is unaffected by any defined snap-points."
					},
					{
						"name": "proximity",
						"desc": "Indicates that the motion of the content after the contact is picked up may be adjusted if the content would normally stop \"close enough\" to a snap-point."
					},
					{
						"name": "snapInterval(100%, 100%)",
						"desc": "Specifies where the snap-points will be placed."
					},
					{
						"name": "snapList()",
						"desc": "Specifies the position of individual snap-points as a comma-separated list of zoom factors."
					}
				]
			},
			{
				"name": "-ms-content-zoom-snap-points",
				"desc": "Defines where zoom snap-points are located.",
				"browsers": "E,IE10",
				"ref": "https://msdn.microsoft.com/en-us/library/windows/apps/hh441259.aspx",
				"values": [
					{
						"name": "snapInterval(100%, 100%)",
						"desc": "Specifies where the snap-points will be placed."
					},
					{
						"name": "snapList()",
						"desc": "Specifies the position of individual snap-points as a comma-separated list of zoom factors."
					}
				]
			},
			{
				"name": "-ms-content-zoom-snap-type",
				"desc": "Specifies how zooming is affected by defined snap-points.",
				"browsers": "E,IE10",
				"ref": "https://msdn.microsoft.com/en-us/library/windows/apps/hh441264.aspx",
				"syntax": "header { -ms-content-zoom-snap-type: proximity; }",
				"restriction": "enum",
				"values": [
					{
						"name": "mandatory",
						"desc": "Indicates that the motion of the content after the contact is picked up is always adjusted so that it lands on a snap-point."
					},
					{
						"name": "none",
						"desc": "Indicates that zooming is unaffected by any defined snap-points."
					},
					{
						"name": "proximity",
						"desc": "Indicates that the motion of the content after the contact is picked up may be adjusted if the content would normally stop \"close enough\" to a snap-point."
					}
				]
			},
			{
				"name": "-ms-filter",
				"desc": "IE only. Used to produce visual effects.",
				"browsers": "IE8-9",
				"ref": "https://msdn.microsoft.com/en-us/ie/gg192966.aspx",
				"syntax": "div { -ms-filter: 'alpha(opacity = 50)'; }",
				"restriction": "string"
			},
			{
				"name": "-ms-flex",
				"desc": "specifies the parameters of a flexible length: the positive and negative flexibility, and the preferred size.",
				"browsers": "IE10",
				"ref": "http://www.w3.org/TR/css3-flexbox/#flex",
				"syntax": "p { -ms-flex: 1 auto; }",
				"restriction": "length, number, percentage",
				"values": [
					{
						"name": "auto",
						"desc": "Retrieves the value of the main size property as the used 'flex-basis'."
					},
					{
						"name": "none",
						"desc": "Expands to '0 0 auto'."
					}
				]
			},
			{
				"name": "-ms-flex-align",
				"desc": "Aligns flex items along the cross axis of the current line of the flex container.",
				"browsers": "IE10",
				"ref": "http://www.w3.org/TR/css3-flexbox/#flex-align0",
				"syntax": "div { -ms-flex-align: center; }",
				"restriction": "enum",
				"values": [
					{
						"name": "baseline",
						"desc": "If the flex item’s inline axis is the same as the cross axis, this value is identical to 'flex-start'. Otherwise, it participates in baseline alignment."
					},
					{
						"name": "center",
						"desc": "The flex item’s margin box is centered in the cross axis within the line."
					},
					{
						"name": "end",
						"desc": "The cross-end margin edge of the flex item is placed flush with the cross-end edge of the line."
					},
					{
						"name": "start",
						"desc": "The cross-start margin edge of the flexbox item is placed flush with the cross-start edge of the line."
					},
					{
						"name": "stretch",
						"desc": "If the cross size property of the flexbox item is anything other than 'auto', this value is identical to 'start'."
					}
				]
			},
			{
				"name": "-ms-flex-direction",
				"desc": "Specifies how flex items are placed in the flex container, by setting the direction of the flex container’s main axis.",
				"browsers": "IE10",
				"ref": "http://www.w3.org/TR/css3-flexbox/#flex-direction0",
				"syntax": "div { -ms-flex-direction: column; }",
				"restriction": "enum",
				"values": [
					{
						"name": "column",
						"desc": "The flex container’s main axis has the same orientation as the block axis of the current writing mode."
					},
					{
						"name": "column-reverse"
					},
					{
						"name": "row"
					},
					{
						"name": "row-reverse"
					}
				]
			},
			{
				"name": "-ms-flex-flow",
				"desc": "Specifies how flexbox items are placed in the flexbox.",
				"browsers": "IE10",
				"ref": "http://www.w3.org/TR/css3-flexbox/#flex-flow",
				"syntax": "div { -ms-flex-flow: column wrap; }",
				"restriction": "enum",
				"values": [
					{
						"name": "column",
						"desc": "The flex container’s main axis has the same orientation as the block axis of the current writing mode."
					},
					{
						"name": "column-reverse"
					},
					{
						"name": "nowrap",
						"desc": "The flex container is single-line."
					},
					{
						"name": "row"
					},
					{
						"name": "wrap",
						"desc": "The flexbox is multi-line."
					},
					{
						"name": "wrap-reverse"
					}
				]
			},
			{
				"name": "-ms-flex-item-align",
				"desc": "Allows the default alignment along the cross axis to be overridden for individual flex items.",
				"browsers": "IE10",
				"ref": "http://www.w3.org/TR/css3-flexbox/#flex-item-align",
				"syntax": "div { -ms-flex-item-align: center; }",
				"restriction": "enum",
				"values": [
					{
						"name": "auto",
						"desc": "Computes to the value of 'align-items' on the element’s parent, or 'stretch' if the element has no parent. On absolutely positioned elements, it computes to itself."
					},
					{
						"name": "baseline",
						"desc": "If the flex item’s inline axis is the same as the cross axis, this value is identical to 'flex-start'. Otherwise, it participates in baseline alignment."
					},
					{
						"name": "center",
						"desc": "The flex item’s margin box is centered in the cross axis within the line."
					},
					{
						"name": "end",
						"desc": "The cross-end margin edge of the flex item is placed flush with the cross-end edge of the line."
					},
					{
						"name": "start",
						"desc": "The cross-start margin edge of the flex item is placed flush with the cross-start edge of the line."
					},
					{
						"name": "stretch",
						"desc": "If the cross size property of the flex item computes to auto, and neither of the cross-axis margins are auto, the flex item is stretched."
					}
				]
			},
			{
				"name": "-ms-flex-line-pack",
				"desc": "Aligns a flex container’s lines within the flex container when there is extra space in the cross-axis, similar to how 'justify-content' aligns individual items within the main-axis.",
				"browsers": "IE10",
				"ref": "http://www.w3.org/TR/css3-flexbox/#flex-line-pack0",
				"syntax": "div { -ms-flex-line-pack: justify; }",
				"restriction": "enum",
				"values": [
					{
						"name": "center",
						"desc": "Lines are packed toward the center of the flex container."
					},
					{
						"name": "distribute",
						"desc": "Lines are evenly distributed in the flex container, with half-size spaces on either end."
					},
					{
						"name": "end",
						"desc": "Lines are packed toward the end of the flex container."
					},
					{
						"name": "justify",
						"desc": "Lines are evenly distributed in the flex container."
					},
					{
						"name": "start",
						"desc": "Lines are packed toward the start of the flex container."
					},
					{
						"name": "stretch",
						"desc": "Lines stretch to take up the remaining space."
					}
				]
			},
			{
				"name": "-ms-flex-order",
				"desc": "Controls the order in which children of a flex container appear within the flex container, by assigning them to ordinal groups.",
				"browsers": "IE10",
				"ref": "http://www.w3.org/TR/css3-flexbox/#flex-order0",
				"syntax": "p { -ms-flex-order: 1; }",
				"restriction": "integer"
			},
			{
				"name": "-ms-flex-pack",
				"desc": "Aligns flex items along the main axis of the current line of the flex container.",
				"browsers": "IE10",
				"ref": "http://www.w3.org/TR/css3-flexbox/#flex-pack0",
				"syntax": "div { -ms-flex-pack: justify; }",
				"restriction": "enum",
				"values": [
					{
						"name": "center",
						"desc": "Flex items are packed toward the center of the line."
					},
					{
						"name": "distribute",
						"desc": "Flex items are evenly distributed in the line, with half-size spaces on either end."
					},
					{
						"name": "end",
						"desc": "Flex items are packed toward the end of the line."
					},
					{
						"name": "justify",
						"desc": "Flex items are evenly distributed in the line."
					},
					{
						"name": "start",
						"desc": "Flex items are packed toward the start of the line."
					}
				]
			},
			{
				"name": "-ms-flex-wrap",
				"desc": "Controls whether the flex container is single-line or multi-line, and the direction of the cross-axis, which determines the direction new lines are stacked in.",
				"browsers": "IE10",
				"ref": "http://www.w3.org/TR/css3-flexbox/#flex-wrap",
				"syntax": "div { -ms-flex-wrap: nowrap; }",
				"restriction": "enum",
				"values": [
					{
						"name": "nowrap",
						"desc": "The flex container is single-line."
					},
					{
						"name": "wrap",
						"desc": "The flexbox is multi-line."
					},
					{
						"name": "wrap-reverse"
					}
				]
			},
			{
				"name": "-ms-flow-from",
				"desc": "Makes a block container a region and associates it with a named flow.",
				"browsers": "E,IE10",
				"ref": "http://www.w3.org/TR/css3-regions/#flow-from",
				"syntax": "div { -ms-flow-from: identifier; }",
				"restriction": "identifier",
				"values": [
					{
						"name": "none",
						"desc": "The block container is not a CSS Region."
					}
				]
			},
			{
				"name": "-ms-flow-into",
				"desc": "Places an element or its contents into a named flow.",
				"browsers": "E,IE10",
				"ref": "http://www.w3.org/TR/css3-regions/#flow-into",
				"syntax": "div { -ms-flow-into: identifier; }",
				"restriction": "identifier",
				"values": [
					{
						"name": "none",
						"desc": "The element is not moved to a named flow and normal CSS processing takes place."
					}
				]
			},
			{
				"name": "-ms-grid-column",
				"desc": "Used to place grid items and explicitly defined grid cells in the Grid.",
				"browsers": "E,IE10",
				"ref": "http://www.w3.org/TR/css3-grid-layout/#grid-column",
				"syntax": "#item1 { -ms-grid-column: start end; }",
				"restriction": "integer, string, enum",
				"values": [
					{
						"name": "auto"
					},
					{
						"name": "end"
					},
					{
						"name": "start"
					}
				]
			},
			{
				"name": "-ms-grid-column-align",
				"desc": "Aligns the columns in a grid.",
				"browsers": "E,IE10",
				"ref": "http://www.w3.org/TR/css3-grid-layout/#grid-column-align",
				"syntax": "article { -ms-grid-column-align: center; }",
				"restriction": "enum",
				"values": [
					{
						"name": "center",
						"desc": "Places the center of the Grid Item's margin box at the center of the Grid Item's column."
					},
					{
						"name": "end",
						"desc": "Aligns the end edge of the Grid Item's margin box to the end edge of the Grid Item's column."
					},
					{
						"name": "start",
						"desc": "Aligns the starting edge of the Grid Item's margin box to the starting edge of the Grid Item's column."
					},
					{
						"name": "stretch",
						"desc": "Ensures that the Grid Item's margin box is equal to the size of the Grid Item's column."
					}
				]
			},
			{
				"name": "-ms-grid-columns",
				"desc": "Lays out the columns of the grid.",
				"browsers": "E,IE10",
				"ref": "http://www.w3.org/TR/css3-grid-layout/#grid-columns",
				"syntax": "div { -ms-grid-columns: 150px 1fr; }"
			},
			{
				"name": "-ms-grid-column-span",
				"desc": "Specifies the number of columns to span.",
				"browsers": "E,IE10",
				"ref": "http://www.w3.org/TR/css3-grid-layout/#grid-row-span-and-grid-column-span",
				"syntax": "#item { -ms-grid-column-span: 2; }.",
				"restriction": "integer"
			},
			{
				"name": "-ms-grid-layer",
				"desc": "Grid-layer is similar in concept to z-index, but avoids overloading the meaning of the z-index property, which is applicable only to positioned elements.",
				"browsers": "E,IE10",
				"ref": "http://www.w3.org/TR/2011/WD-css3-grid-layout-20110407/#grid-layer",
				"syntax": "div { -ms-grid-layer: 2; }",
				"restriction": "integer"
			},
			{
				"name": "-ms-grid-row",
				"desc": "grid-row is used to place grid items and explicitly defined grid cells in the Grid.",
				"browsers": "E,IE10",
				"ref": "http://www.w3.org/TR/css3-grid-layout/#grid-row",
				"syntax": "#item1 { -ms-grid-row: start end; }",
				"restriction": "integer, string, enum",
				"values": [
					{
						"name": "auto"
					},
					{
						"name": "end"
					},
					{
						"name": "start"
					}
				]
			},
			{
				"name": "-ms-grid-row-align",
				"desc": "Aligns the rows in a grid.",
				"browsers": "E,IE10",
				"ref": "http://www.w3.org/TR/css3-grid-layout/#grid-row-align",
				"syntax": "div { -ms-grid-row-align: stretch; }",
				"restriction": "enum",
				"values": [
					{
						"name": "center",
						"desc": "Places the center of the Grid Item's margin box at the center of the Grid Item's row."
					},
					{
						"name": "end",
						"desc": "Aligns the end edge of the Grid Item's margin box to the end edge of the Grid Item's row."
					},
					{
						"name": "start",
						"desc": "Aligns the starting edge of the Grid Item's margin box to the starting edge of the Grid Item's row."
					},
					{
						"name": "stretch",
						"desc": "Ensures that the Grid Item's margin box is equal to the size of the Grid Item's row."
					}
				]
			},
			{
				"name": "-ms-grid-rows",
				"desc": "Lays out the columns of the grid.",
				"browsers": "E,IE10",
				"ref": "http://www.w3.org/TR/css3-grid-layout/#grid-rows",
				"syntax": "div { -ms-grid-rows: 50px 1fr 50px; }"
			},
			{
				"name": "-ms-grid-row-span",
				"desc": "Specifies the number of rows to span.",
				"browsers": "E,IE10",
				"ref": "http://www.w3.org/TR/css3-grid-layout/#grid-row-span-and-grid-column-span",
				"syntax": "#item { -ms-grid-row-span: 2; }.",
				"restriction": "integer"
			},
			{
				"name": "-ms-high-contrast-adjust",
				"desc": "Specifies if properties should be adjusted in high contrast mode.",
				"browsers": "E,IE10",
				"ref": "https://msdn.microsoft.com/en-us/library/windows/apps/hh441137.aspx",
				"syntax": "section { -ms-high-contrast-adjust: auto; }",
				"restriction": "enum",
				"values": [
					{
						"name": "auto",
						"desc": "Properties will be adjusted as applicable."
					},
					{
						"name": "none",
						"desc": "No adjustments will be applied."
					}
				]
			},
			{
				"name": "-ms-hyphenate-limit-chars",
				"desc": "Specifies the minimum number of characters in a hyphenated word.",
				"browsers": "E,IE10",
				"ref": "https://drafts.csswg.org/css-text-4/#propdef-hyphenate-limit-chars",
				"syntax": "div { -ms-hyphenate-limit-chars: 5 2 2; }",
				"restriction": "integer",
				"values": [
					{
						"name": "auto",
						"desc": "The user agent chooses a value that adapts to the current layout."
					}
				]
			},
			{
				"name": "-ms-hyphenate-limit-lines",
				"desc": "Indicates the maximum number of successive hyphenated lines in an element.",
				"browsers": "E,IE10",
				"ref": "https://drafts.csswg.org/css-text-4/#propdef-hyphenate-limit-lines",
				"syntax": "div { -ms-hyphenate-limit-lines: 2; }",
				"restriction": "integer",
				"values": [
					{
						"name": "no-limit"
					}
				]
			},
			{
				"name": "-ms-hyphenate-limit-zone",
				"desc": "Specifies the maximum amount of unfilled space (before justification) that may be left in the line box before hyphenation is triggered to pull part of a word from the next line back up into the current line.",
				"browsers": "E,IE10",
				"ref": "https://drafts.csswg.org/css-text-4/#propdef-hyphenate-limit-zone",
				"syntax": "div { -ms-hyphenate-limit-zone: 25%; }",
				"restriction": "percentage, length"
			},
			{
				"name": "-ms-hyphens",
				"desc": "Controls whether hyphenation is allowed to create more break opportunities within a line of text.",
				"browsers": "E,IE10",
				"ref": "http://www.w3.org/TR/css3-text/#hyphens0",
				"syntax": "div { -ms-hyphens: manual; }",
				"restriction": "enum",
				"values": [
					{
						"name": "auto",
						"desc": "Conditional hyphenation characters inside a word, if present, take priority over automatic resources when determining hyphenation points within the word."
					},
					{
						"name": "manual"
					},
					{
						"name": "none",
						"desc": "Words are not broken at line breaks, even if characters inside the word suggest line break points."
					}
				]
			},
			{
				"name": "-ms-ime-mode",
				"desc": "Controls the state of the input method editor for text fields.",
				"browsers": "IE10",
				"ref": "http://www.w3.org/TR/css3-ui/#ime-mode",
				"syntax": "body { -ms-ime-mode: active; }",
				"restriction": "enum",
				"values": [
					{
						"name": "active"
					},
					{
						"name": "auto",
						"desc": "No change is made to the current input method editor state. This is the default."
					},
					{
						"name": "disabled"
					},
					{
						"name": "inactive"
					},
					{
						"name": "normal",
						"desc": "The IME state should be normal; this value can be used in a user style sheet to override the page setting."
					}
				]
			},
			{
				"name": "-ms-interpolation-mode",
				"desc": "Gets or sets the interpolation (resampling) method used to stretch images.",
				"browsers": "IE7",
				"ref": "https://msdn.microsoft.com/en-us/library/ie/ms530822(v=vs.85).aspx",
				"syntax": "img.highqual { -ms-interpolation-mode: bicubic; }",
				"restriction": "enum",
				"values": [
					{
						"name": "bicubic"
					},
					{
						"name": "nearest-neighbor"
					}
				]
			},
			{
				"name": "-ms-layout-grid",
				"desc": "Sets or retrieves the composite document grid properties that specify the layout of text characters.",
				"browsers": "E,IE10",
				"ref": "https://msdn.microsoft.com/en-us/library/ie/ms530771(v=vs.85).aspx",
				"syntax": "div { -ms-layout-grid: both fixed 12px 12px}",
				"values": [
					{
						"name": "char",
						"desc": "Any of the range of character values available to the -ms-layout-grid-char property."
					},
					{
						"name": "line",
						"desc": "Any of the range of line values available to the -ms-layout-grid-line property."
					},
					{
						"name": "mode"
					},
					{
						"name": "type"
					}
				]
			},
			{
				"name": "-ms-layout-grid-char",
				"desc": "Sets or retrieves the size of the character grid used for rendering the text content of an element.",
				"browsers": "E,IE10",
				"ref": "https://msdn.microsoft.com/en-us/library/ie/ms530772(v=vs.85).aspx",
				"syntax": "div { -ms-layout-grid-char: auto; }",
				"restriction": "enum, length, percentage",
				"values": [
					{
						"name": "auto",
						"desc": "Largest character in the font of the element is used to set the character grid."
					},
					{
						"name": "none",
						"desc": "Default. No character grid is set."
					}
				]
			},
			{
				"name": "-ms-layout-grid-line",
				"desc": "Sets or retrieves the gridline value used for rendering the text content of an element.",
				"browsers": "E,IE10",
				"ref": "https://msdn.microsoft.com/en-us/library/ie/ms530773(v=vs.85).aspx",
				"syntax": "div { -ms-layout-grid-line: auto; }",
				"restriction": "length",
				"values": [
					{
						"name": "auto",
						"desc": "Largest character in the font of the element is used to set the character grid."
					},
					{
						"name": "none",
						"desc": "Default. No grid line is set."
					}
				]
			},
			{
				"name": "-ms-layout-grid-mode",
				"desc": "Gets or sets whether the text layout grid uses two dimensions.",
				"browsers": "E,IE10",
				"ref": "https://msdn.microsoft.com/en-us/library/ie/ms530774(v=vs.85).aspx",
				"syntax": "div { -ms-layout-grid-mode: line; }",
				"restriction": "enum",
				"values": [
					{
						"name": "both",
						"desc": "Default. Both the char and line grid modes are enabled. This setting is necessary to fully enable the layout grid on an element."
					},
					{
						"name": "char",
						"desc": "Only a character grid is used. This is recommended for use with block-level elements, such as a blockquote, where the line grid is intended to be disabled."
					},
					{
						"name": "line",
						"desc": "Only a line grid is used. This is recommended for use with inline elements, such as a span, to disable the horizontal grid on runs of text that act as a single entity in the grid layout."
					},
					{
						"name": "none",
						"desc": "No grid is used."
					}
				]
			},
			{
				"name": "-ms-layout-grid-type",
				"desc": "Sets or retrieves the type of grid used for rendering the text content of an element.",
				"browsers": "E,IE10",
				"ref": "https://msdn.microsoft.com/en-us/library/ie/ms530775(v=vs.85).aspx",
				"syntax": "div { -ms-layout-grid-type: strict; }",
				"restriction": "enum",
				"values": [
					{
						"name": "fixed",
						"desc": "Grid used for monospaced layout. All noncursive characters are treated as equal; every character is centered within a single grid space by default."
					},
					{
						"name": "loose"
					},
					{
						"name": "strict",
						"desc": "Grid used for Chinese, as well as Japanese (Genko) and Korean characters. Only the ideographs, kanas, and wide characters are snapped to the grid."
					}
				]
			},
			{
				"name": "-ms-line-break",
				"desc": "Specifies what set of line breaking restrictions are in effect within the element.",
				"browsers": "E,IE10",
				"ref": "http://www.w3.org/TR/css3-text/#line-break0",
				"syntax": "p { -ms-line-break: strict; }",
				"restriction": "enum",
				"values": [
					{
						"name": "auto",
						"desc": "The UA determines the set of line-breaking restrictions to use for CJK scripts, and it may vary the restrictions based on the length of the line; e.g., use a less restrictive set of line-break rules for short lines."
					},
					{
						"name": "keep-all",
						"desc": "Sequences of CJK characters can no longer break on implied break points. This option should only be used where the presence of word separator characters still creates line-breaking opportunities, as in Korean."
					},
					{
						"name": "newspaper",
						"desc": "Breaks CJK scripts using the least restrictive set of line-breaking rules. Typically used for short lines, such as in newspapers."
					},
					{
						"name": "normal",
						"desc": "Breaks CJK scripts using a normal set of line-breaking rules."
					},
					{
						"name": "strict",
						"desc": "Breaks CJK scripts using a more restrictive set of line-breaking rules than 'normal'."
					}
				]
			},
			{
				"name": "-ms-overflow-style",
				"desc": "-ms-overflow-style is a proprietary CSS property, specific to Internet Explorer and Microsoft Edge, which controls the behavior of scrollbars when an element's content overflows.",
				"browsers": "E,IE10",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/-ms-overflow-style",
				"syntax": "p { -ms-overflow-style: scrollbar; }",
				"restriction": "enum",
				"values": [
					{
						"name": "auto",
						"desc": "No preference, UA should use the first scrolling method in the list that it supports."
					},
					{
						"name": "-ms-autohiding-scrollbar"
					},
					{
						"name": "none",
						"desc": "Indicates the element does not display scrollbars or panning indicators, even when its content overflows."
					},
					{
						"name": "scrollbar"
					}
				]
			},
			{
				"name": "-ms-perspective",
				"desc": "Applies the same transform as the perspective(<number>) transform function, except that it applies only to the positioned or transformed children of the element, not to the transform on the element itself.",
				"browsers": "IE10",
				"ref": "http://www.w3.org/TR/css3-3d-transforms/#perspective",
				"syntax": "div { -ms-perspective: none; }",
				"restriction": "length",
				"values": [
					{
						"name": "none",
						"desc": "No perspective transform is applied."
					}
				]
			},
			{
				"name": "-ms-perspective-origin",
				"desc": "Establishes the origin for the perspective property. It effectively sets the X and Y position at which the viewer appears to be looking at the children of the element.",
				"browsers": "IE10",
				"ref": "http://www.w3.org/TR/css3-3d-transforms/#perspective-origin",
				"syntax": "div { -ms-perspective-origin: 10px; }",
				"restriction": "position, percentage, length"
			},
			{
				"name": "-ms-perspective-origin-x",
				"desc": "Establishes the origin for the perspective property. It effectively sets the X  position at which the viewer appears to be looking at the children of the element.",
				"browsers": "IE10",
				"ref": "http://www.w3.org/TR/css3-3d-transforms/#perspective-origin",
				"restriction": "position, percentage, length"
			},
			{
				"name": "-ms-perspective-origin-y",
				"desc": "Establishes the origin for the perspective property. It effectively sets the Y position at which the viewer appears to be looking at the children of the element.",
				"browsers": "IE10",
				"ref": "http://www.w3.org/TR/css3-3d-transforms/#perspective-origin",
				"restriction": "position, percentage, length"
			},
			{
				"name": "-ms-progress-appearance",
				"desc": "Gets or sets a value that specifies whether a progress control displays as a bar or a ring.",
				"browsers": "IE10",
				"ref": "https://msdn.microsoft.com/en-us/library/windows/apps/Hh779845.aspx",
				"syntax": "progress { -ms-progress-appearance: bar; }",
				"restriction": "enum",
				"values": [
					{
						"name": "bar"
					},
					{
						"name": "ring"
					}
				]
			},
			{
				"name": "-ms-scrollbar-3dlight-color",
				"desc": "Determines the color of the top and left edges of the scroll box and scroll arrows of a scroll bar.",
				"browsers": "IE8",
				"ref": "https://msdn.microsoft.com/en-us/library/ms531153(VS.85).aspx",
				"syntax": "textarea { -ms-scrollbar-3dlight-color: #00ffff; }",
				"restriction": "color"
			},
			{
				"name": "-ms-scrollbar-arrow-color",
				"desc": "Determines the color of the arrow elements of a scroll arrow.",
				"browsers": "IE8",
				"ref": "https://msdn.microsoft.com/en-us/library/ms531154(VS.85).aspx",
				"syntax": "body { -ms-scrollbar-arrow-color: #00ffff; }",
				"restriction": "color"
			},
			{
				"name": "-ms-scrollbar-base-color",
				"desc": "Determines the color of the main elements of a scroll bar, which include the scroll box, track, and scroll arrows.",
				"browsers": "IE8",
				"ref": "https://msdn.microsoft.com/en-us/library/ms531155(VS.85).aspx",
				"syntax": "textarea { -ms-scrollbar-base-color: #00ffff; }",
				"restriction": "color"
			},
			{
				"name": "-ms-scrollbar-darkshadow-color",
				"desc": "Determines the color of the gutter of a scroll bar.",
				"browsers": "IE8",
				"ref": "https://msdn.microsoft.com/en-us/library/ms531156(v=VS.85).aspx",
				"syntax": "textarea { -ms-scrollbar-darkshadow-color: #00ffff; }",
				"restriction": "color"
			},
			{
				"name": "-ms-scrollbar-face-color",
				"desc": "Determines the color of the scroll box and scroll arrows of a scroll bar.",
				"browsers": "IE8",
				"ref": "https://msdn.microsoft.com/en-us/library/ms531157(VS.85).aspx",
				"syntax": "textarea { -ms-scrollbar-face-color: #00ffff; }",
				"restriction": "color"
			},
			{
				"name": "-ms-scrollbar-highlight-color",
				"desc": "Determines the color of the top and left edges of the scroll box and scroll arrows of a scroll bar.",
				"browsers": "IE8",
				"ref": "https://msdn.microsoft.com/en-us/library/ms531158(VS.85).aspx",
				"syntax": "textarea { -ms-scrollbar-highlight-color: #00ffff; }",
				"restriction": "color"
			},
			{
				"name": "-ms-scrollbar-shadow-color",
				"desc": "Determines the color of the bottom and right edges of the scroll box and scroll arrows of a scroll bar.",
				"browsers": "IE8",
				"ref": "https://msdn.microsoft.com/en-us/library/ms531159(VS.85).aspx",
				"syntax": "textarea { -ms-scrollbar-shadow-color: #00ffff; }",
				"restriction": "color"
			},
			{
				"name": "-ms-scrollbar-track-color",
				"desc": "Determines the color of the track element of a scroll bar.",
				"browsers": "IE8",
				"ref": "https://msdn.microsoft.com/en-us/library/ms531160(VS.85).aspx",
				"syntax": "textarea { -ms-scrollbar-track-color: #00ffff; }",
				"restriction": "color"
			},
			{
				"name": "-ms-scroll-chaining",
				"desc": "Gets or sets a value that indicates the scrolling behavior that occurs when a user hits the content boundary during a manipulation.",
				"browsers": "E,IE10",
				"ref": "https://msdn.microsoft.com/en-us/library/windows/apps/hh466007.aspx",
				"syntax": "div { -ms-scroll-chaining: chained; }",
				"restriction": "enum, length",
				"values": [
					{
						"name": "chained"
					},
					{
						"name": "none"
					}
				]
			},
			{
				"name": "-ms-scroll-limit",
				"desc": "Gets or sets a shorthand value that sets values for the -ms-scroll-limit-x-min, -ms-scroll-limit-y-min, -ms-scroll-limit-x-max, and -ms-scroll-limit-y-max properties.",
				"browsers": "E,IE10",
				"ref": "https://msdn.microsoft.com/en-us/library/windows/apps/hh996918.aspx",
				"restriction": "length",
				"values": [
					{
						"name": "auto"
					}
				]
			},
			{
				"name": "-ms-scroll-limit-x-max",
				"desc": "Gets or sets a value that specifies the maximum value for the scrollLeft property.",
				"browsers": "E,IE10",
				"ref": "https://msdn.microsoft.com/en-us/library/windows/apps/hh996919.aspx",
				"syntax": "div { -ms-scroll-limit-x-max: auto; }",
				"restriction": "length",
				"values": [
					{
						"name": "auto"
					}
				]
			},
			{
				"name": "-ms-scroll-limit-x-min",
				"desc": "Gets or sets a value that specifies the minimum value for the scrollLeft property.",
				"browsers": "E,IE10",
				"ref": "https://msdn.microsoft.com/en-us/library/windows/apps/hh996920.aspx",
				"syntax": "div { -ms-scroll-limit-x-min: 5px; }",
				"restriction": "length"
			},
			{
				"name": "-ms-scroll-limit-y-max",
				"desc": "Gets or sets a value that specifies the maximum value for the scrollTop property.",
				"browsers": "E,IE10",
				"ref": "https://msdn.microsoft.com/en-us/library/windows/apps/hh996921.aspx",
				"syntax": "div { -ms-scroll-limit-y-max: auto; }",
				"restriction": "length",
				"values": [
					{
						"name": "auto"
					}
				]
			},
			{
				"name": "-ms-scroll-limit-y-min",
				"desc": "Gets or sets a value that specifies the minimum value for the scrollTop property.",
				"browsers": "E,IE10",
				"ref": "https://msdn.microsoft.com/en-us/library/windows/apps/hh996922.aspx",
				"syntax": "div { -ms-scroll-limit-y-min: 5px; }",
				"restriction": "length"
			},
			{
				"name": "-ms-scroll-rails",
				"desc": "Gets or sets a value that indicates whether or not small motions perpendicular to the primary axis of motion will result in either changes to both the scrollTop and scrollLeft properties or a change to the primary axis (for instance, either the scrollTop or scrollLeft properties will change, but not both).",
				"browsers": "E,IE10",
				"ref": "https://msdn.microsoft.com/en-us/library/windows/apps/hh466018.aspx",
				"syntax": "div { -ms-scroll-rails: railed; }",
				"restriction": "enum, length",
				"values": [
					{
						"name": "none"
					},
					{
						"name": "railed"
					}
				]
			},
			{
				"name": "-ms-scroll-snap-points-x",
				"desc": "Gets or sets a value that defines where snap-points will be located along the x-axis.",
				"browsers": "E,IE10",
				"ref": "https://msdn.microsoft.com/en-us/library/windows/apps/hh466031.aspx",
				"syntax": "div { -ms-scroll-snap-points-x: snapInterval(100%, 100%); }",
				"restriction": "enum",
				"values": [
					{
						"name": "snapInterval(100%, 100%)"
					},
					{
						"name": "snapList()"
					}
				]
			},
			{
				"name": "-ms-scroll-snap-points-y",
				"desc": "Gets or sets a value that defines where snap-points will be located along the y-axis.",
				"browsers": "E,IE10",
				"ref": "https://msdn.microsoft.com/en-us/library/windows/apps/hh466042.aspx",
				"syntax": "div { -ms-scroll-snap-points-y: snapInterval(100%, 100%); }",
				"restriction": "enum",
				"values": [
					{
						"name": "snapInterval(100%, 100%)"
					},
					{
						"name": "snapList()"
					}
				]
			},
			{
				"name": "-ms-scroll-snap-type",
				"desc": "Gets or sets a value that defines what type of snap-point should be used for the current element. There are two type of snap-points, with the primary difference being whether or not the user is guaranteed to always stop on a snap-point.",
				"browsers": "E,IE10",
				"ref": "https://msdn.microsoft.com/en-us/library/windows/apps/hh466057.aspx",
				"syntax": "div { -ms-scroll-snap-type: proximity; }",
				"restriction": "enum",
				"values": [
					{
						"name": "none",
						"desc": "The visual viewport of this scroll container must ignore snap points, if any, when scrolled."
					},
					{
						"name": "mandatory",
						"desc": "The visual viewport of this scroll container is guaranteed to rest on a snap point when there are no active scrolling operations."
					},
					{
						"name": "proximity",
						"desc": "The visual viewport of this scroll container may come to rest on a snap point at the termination of a scroll at the discretion of the UA given the parameters of the scroll."
					}
				]
			},
			{
				"name": "-ms-scroll-snap-x",
				"desc": "Gets or sets a shorthand value that sets values for the -ms-scroll-snap-type and -ms-scroll-snap-points-x properties.",
				"browsers": "E,IE10",
				"ref": "https://msdn.microsoft.com/en-us/library/windows/apps/hh466066.aspx",
				"syntax": "div { -ms-scroll-snap-x: proximity snapInterval(100%, 100%); }",
				"restriction": "enum",
				"values": [
					{
						"name": "mandatory"
					},
					{
						"name": "none"
					},
					{
						"name": "proximity"
					},
					{
						"name": "snapInterval(100%, 100%)"
					},
					{
						"name": "snapList()"
					}
				]
			},
			{
				"name": "-ms-scroll-snap-y",
				"desc": "Gets or sets a shorthand value that sets values for the -ms-scroll-snap-type and -ms-scroll-snap-points-y properties.",
				"browsers": "E,IE10",
				"ref": "https://msdn.microsoft.com/en-us/library/windows/apps/hh466078.aspx",
				"syntax": "div { -ms-scroll-snap-y: proximity snapInterval(100%, 100%); }",
				"restriction": "enum",
				"values": [
					{
						"name": "mandatory"
					},
					{
						"name": "none"
					},
					{
						"name": "proximity"
					},
					{
						"name": "snapInterval(100%, 100%)"
					},
					{
						"name": "snapList()"
					}
				]
			},
			{
				"name": "-ms-scroll-translation",
				"desc": "Gets or sets a value that specifies whether vertical-to-horizontal scroll wheel translation occurs on the specified element.",
				"browsers": "E,IE10",
				"ref": "https://msdn.microsoft.com/en-us/library/windows/apps/hh996917.aspx",
				"syntax": "div { -ms-scroll-translation: vertical-to-horizontal; }",
				"restriction": "enum",
				"values": [
					{
						"name": "none"
					},
					{
						"name": "vertical-to-horizontal"
					}
				]
			},
			{
				"name": "-ms-text-align-last",
				"desc": "Describes how the last line of a block or a line right before a forced line break is aligned when 'text-align' is set to 'justify'.",
				"browsers": "E,IE8",
				"ref": "http://www.w3.org/TR/css3-text/#text-align-last0",
				"syntax": "div { -ms-text-align-last: right; }",
				"restriction": "enum",
				"values": [
					{
						"name": "auto"
					},
					{
						"name": "center",
						"desc": "The inline contents are centered within the line box."
					},
					{
						"name": "justify",
						"desc": "The text is justified according to the method specified by the 'text-justify' property."
					},
					{
						"name": "left",
						"desc": "The inline contents are aligned to the left edge of the line box. In vertical text, 'left' aligns to the edge of the line box that would be the start edge for left-to-right text."
					},
					{
						"name": "right",
						"desc": "The inline contents are aligned to the right edge of the line box. In vertical text, 'right' aligns to the edge of the line box that would be the end edge for left-to-right text."
					}
				]
			},
			{
				"name": "-ms-text-autospace",
				"desc": "Determines whether or not a full-width punctuation mark character should be trimmed if it appears at the beginning of a line, so that its 'ink' lines up with the first glyph in the line above and below.",
				"browsers": "E,IE8",
				"ref": "http://www.w3.org/TR/css3-text/#text-autospace",
				"syntax": "div { -ms-text-autospace: ideograph-numeric; }",
				"restriction": "enum",
				"values": [
					{
						"name": "ideograph-alpha"
					},
					{
						"name": "ideograph-numeric"
					},
					{
						"name": "ideograph-parenthesis"
					},
					{
						"name": "ideograph-space"
					},
					{
						"name": "none",
						"desc": "No extra space is created."
					},
					{
						"name": "punctuation"
					}
				]
			},
			{
				"name": "-ms-text-combine-horizontal",
				"desc": "This property specifies the combination of multiple characters into the space of a single character.",
				"browsers": "E,IE11",
				"ref": "http://www.w3.org/TR/css-writing-modes-3/#text-combine-upright",
				"syntax": "span { -ms-text-combine-horizontal: all; }",
				"restriction": "enum, integer",
				"values": [
					{
						"name": "all",
						"desc": "Attempt to typeset horizontally all consecutive characters within the box such that they take up the space of a single character within the vertical line box."
					},
					{
						"name": "digits"
					},
					{
						"name": "none",
						"desc": "No special processing."
					}
				]
			},
			{
				"name": "-ms-text-justify",
				"desc": "Selects the justification algorithm used when 'text-align' is set to 'justify'. The property applies to block containers, but the UA may (but is not required to) also support it on inline elements.",
				"browsers": "E,IE8",
				"ref": "http://www.w3.org/TR/css3-text/#text-justify0",
				"syntax": "div { -ms-text-justify: inter-word; }",
				"restriction": "enum",
				"values": [
					{
						"name": "auto",
						"desc": "The UA determines the justification algorithm to follow, based on a balance between performance and adequate presentation quality."
					},
					{
						"name": "distribute",
						"desc": "Justification primarily changes spacing both at word separators and at grapheme cluster boundaries in all scripts except those in the connected and cursive groups. This value is sometimes used in e.g. Japanese, often with the 'text-align-last' property."
					},
					{
						"name": "inter-cluster"
					},
					{
						"name": "inter-ideograph"
					},
					{
						"name": "inter-word"
					},
					{
						"name": "kashida"
					}
				]
			},
			{
				"name": "-ms-text-kashida-space",
				"desc": "Sets or retrieves the ratio of kashida expansion to white space expansion when justifying lines of text in the object.",
				"browsers": "E,IE10",
				"ref": "https://msdn.microsoft.com/en-us/library/windows/apps/hh453798.aspx",
				"syntax": "article { -ms-text-kashida-space: 10%; }",
				"restriction": "percentage"
			},
			{
				"name": "-ms-text-overflow",
				"desc": "Text can overflow for example when it is prevented from wrapping",
				"browsers": "IE10",
				"ref": "http://www.w3.org/TR/css3-ui/#text-overflow0",
				"syntax": "span { -ms-text-overflow: ellipsis; }",
				"restriction": "enum",
				"values": [
					{
						"name": "clip"
					},
					{
						"name": "ellipsis"
					}
				]
			},
			{
				"name": "-ms-text-size-adjust",
				"desc": "Specifies a size adjustment for displaying text content in mobile browsers.",
				"browsers": "E,IE10",
				"ref": "http://dev.w3.org/csswg/css-size-adjust/",
				"syntax": "body { -ms-text-size-adjust: 150%; }",
				"restriction": "enum, percentage",
				"values": [
					{
						"name": "auto",
						"desc": "Renderers must use the default size adjustment when displaying on a small device."
					},
					{
						"name": "none",
						"desc": "Renderers must not do size adjustment when displaying on a small device."
					}
				]
			},
			{
				"name": "-ms-text-underline-position",
				"desc": "Sets the position of an underline specified on the same element: it does not affect underlines specified by ancestor elements.This property is typically used in vertical writing contexts such as in Japanese documents where it often desired to have the underline appear 'over' (to the right of) the affected run of text",
				"browsers": "E,IE10",
				"ref": "http://www.w3.org/TR/css3-text/#text-underline-position0",
				"syntax": "div { -ms-text-underline-position: auto; }",
				"restriction": "enum",
				"values": [
					{
						"name": "alphabetic",
						"desc": "The underline is aligned with the alphabetic baseline. In this case the underline is likely to cross some descenders."
					},
					{
						"name": "auto",
						"desc": "The user agent may use any algorithm to determine the underline's position. In horizontal line layout, the underline should be aligned as for alphabetic. In vertical line layout, if the language is set to Japanese or Korean, the underline should be aligned as for over."
					},
					{
						"name": "over"
					},
					{
						"name": "under"
					}
				]
			},
			{
				"name": "-ms-touch-action",
				"desc": "Gets or sets a value that indicates whether and how a given region can be manipulated by the user.",
				"browsers": "IE10",
				"ref": "https://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx",
				"syntax": "div { -ms-touch-action: manipulation double-tap-zoom; }",
				"restriction": "enum",
				"values": [
					{
						"name": "auto",
						"desc": "The element is a passive element, with several exceptions."
					},
					{
						"name": "double-tap-zoom",
						"desc": "The element will zoom on double-tap."
					},
					{
						"name": "manipulation",
						"desc": "The element is a manipulation-causing element."
					},
					{
						"name": "none",
						"desc": "The element is a manipulation-blocking element."
					},
					{
						"name": "pan-x",
						"desc": "The element permits touch-driven panning on the horizontal axis. The touch pan is performed on the nearest ancestor with horizontally scrollable content."
					},
					{
						"name": "pan-y",
						"desc": "The element permits touch-driven panning on the vertical axis. The touch pan is performed on the nearest ancestor with vertically scrollable content."
					},
					{
						"name": "pinch-zoom",
						"desc": "The element permits pinch-zooming. The pinch-zoom is performed on the nearest ancestor with zoomable content."
					}
				]
			},
			{
				"name": "-ms-touch-select",
				"desc": "Gets or sets a value that toggles the 'gripper' visual elements that enable touch text selection.",
				"browsers": "E,IE10",
				"ref": "https://msdn.microsoft.com/en-us/library/ie/hh975292(v=vs.85).aspx",
				"syntax": "div::selection { -ms-touch-select: grippers; }",
				"restriction": "enum",
				"values": [
					{
						"name": "grippers"
					},
					{
						"name": "none",
						"desc": "Grippers are always off."
					}
				]
			},
			{
				"name": "-ms-transform",
				"desc": "A two-dimensional transformation is applied to an element through the 'transform' property. This property contains a list of transform functions similar to those allowed by SVG.",
				"browsers": "IE9-9",
				"ref": "http://www.w3.org/TR/css3-2d-transforms/#transform-property",
				"syntax": "div { -ms-transform: rotate(-90deg); }",
				"restriction": "enum",
				"values": [
					{
						"name": "matrix()"
					},
					{
						"name": "matrix3d()"
					},
					{
						"name": "none"
					},
					{
						"name": "rotate()"
					},
					{
						"name": "rotate3d()"
					},
					{
						"name": "rotateX('angle')"
					},
					{
						"name": "rotateY('angle')"
					},
					{
						"name": "rotateZ('angle')"
					},
					{
						"name": "scale()"
					},
					{
						"name": "scale3d()"
					},
					{
						"name": "scaleX()"
					},
					{
						"name": "scaleY()"
					},
					{
						"name": "scaleZ()"
					},
					{
						"name": "skew()"
					},
					{
						"name": "skewX()"
					},
					{
						"name": "skewY()"
					},
					{
						"name": "translate()"
					},
					{
						"name": "translate3d()"
					},
					{
						"name": "translateX()"
					},
					{
						"name": "translateY()"
					},
					{
						"name": "translateZ()"
					}
				]
			},
			{
				"name": "-ms-transform-origin",
				"desc": "Establishes the origin of transformation for an element.",
				"browsers": "IE9-9",
				"ref": "http://www.w3.org/TR/css3-2d-transforms/#transform-origin",
				"syntax": ".album { -ms-transform-origin: 20% 40%; }",
				"restriction": "position, length, percentage"
			},
			{
				"name": "-ms-transform-origin-x",
				"desc": "The x coordinate of the origin for transforms applied to an element with respect to its border box.",
				"browsers": "IE10",
				"ref": "http://www.w3.org/TR/css3-3d-transforms/#transform-origin",
				"restriction": "length, percentage"
			},
			{
				"name": "-ms-transform-origin-y",
				"desc": "The y coordinate of the origin for transforms applied to an element with respect to its border box.",
				"browsers": "IE10",
				"ref": "http://www.w3.org/TR/css3-3d-transforms/#transform-origin",
				"restriction": "length, percentage"
			},
			{
				"name": "-ms-transform-origin-z",
				"desc": "The z coordinate of the origin for transforms applied to an element with respect to its border box.",
				"browsers": "IE10",
				"ref": "http://www.w3.org/TR/css3-3d-transforms/#transform-origin",
				"restriction": "length, percentage"
			},
			{
				"name": "-ms-user-select",
				"desc": "Controls the appearance of selection.",
				"browsers": "E,IE10",
				"ref": "http://ie.microsoft.com/testdrive/HTML5/msUserSelect/",
				"syntax": "div { -ms-user-select: none; }",
				"restriction": "enum",
				"values": [
					{
						"name": "element"
					},
					{
						"name": "none"
					},
					{
						"name": "text"
					}
				]
			},
			{
				"name": "-ms-word-break",
				"desc": "Specifies line break opportunities for non-CJK scripts.",
				"browsers": "IE8",
				"ref": "http://www.w3.org/TR/css3-text/#word-break0",
				"syntax": "p.album { -ms-word-break: break-all; }",
				"restriction": "enum",
				"values": [
					{
						"name": "break-all"
					},
					{
						"name": "keep-all",
						"desc": "Block characters can no longer create implied break points."
					},
					{
						"name": "normal",
						"desc": "Breaks non-CJK scripts according to their own rules."
					}
				]
			},
			{
				"name": "-ms-word-wrap",
				"desc": "Specifies whether the UA may break within a word to prevent overflow when an otherwise-unbreakable string is too long to fit.",
				"browsers": "IE8",
				"ref": "http://www.w3.org/TR/css3-text/#word-wrap0",
				"syntax": "p { -ms-word-wrap: break-word; }",
				"restriction": "enum",
				"values": [
					{
						"name": "break-word",
						"desc": "An unbreakable 'word' may be broken at an arbitrary point if there are no otherwise-acceptable break points in the line."
					},
					{
						"name": "normal",
						"desc": "Lines may break only at allowed break points."
					}
				]
			},
			{
				"name": "-ms-wrap-flow",
				"desc": "An element becomes an exclusion when its 'wrap-flow' property has a computed value other than 'auto'.",
				"browsers": "E,IE10",
				"ref": "http://www.w3.org/TR/css3-exclusions/#wrap-flow-property",
				"syntax": "div { -ms-wrap-flow: maximum; }",
				"restriction": "enum",
				"values": [
					{
						"name": "auto",
						"desc": "For floats an exclusion is created, for all other elements an exclusion is not created."
					},
					{
						"name": "both",
						"desc": "Inline flow content can flow on all sides of the exclusion."
					},
					{
						"name": "clear"
					},
					{
						"name": "end",
						"desc": "Inline flow content can wrap on the end side of the exclusion area but must leave the area to the start edge of the exclusion area empty."
					},
					{
						"name": "maximum"
					},
					{
						"name": "minimum"
					},
					{
						"name": "start",
						"desc": "Inline flow content can wrap on the start edge of the exclusion area but must leave the area to end edge of the exclusion area empty."
					}
				]
			},
			{
				"name": "-ms-wrap-margin",
				"desc": "Gets or sets a value that is used to offset the inner wrap shape from other shapes.",
				"browsers": "E,IE10",
				"ref": "https://msdn.microsoft.com/en-us/library/windows/apps/hh466103.aspx",
				"syntax": "div { -ms-wrap-margin: 20px; }",
				"restriction": "length, percentage"
			},
			{
				"name": "-ms-wrap-through",
				"desc": "Specifies if an element inherits its parent wrapping context. In other words if it is subject to the exclusions defined outside the element.",
				"browsers": "E,IE10",
				"ref": "http://www.w3.org/TR/css3-exclusions/#propdef-wrap-through",
				"syntax": "div { -ms-wrap-through: wrap; }",
				"restriction": "enum",
				"values": [
					{
						"name": "none",
						"desc": "The exclusion element does not inherit its parent node's wrapping context. Its descendants are only subject to exclusion shapes defined inside the element."
					},
					{
						"name": "wrap",
						"desc": "The exclusion element inherits its parent node's wrapping context. Its descendant inline content wraps around exclusions defined outside the element."
					}
				]
			},
			{
				"name": "-ms-writing-mode",
				"desc": "Shorthand property for both 'direction' and 'block-progression'.",
				"browsers": "IE8",
				"ref": "http://www.w3.org/TR/2003/CR-css3-text-20030514/#writing-mode",
				"syntax": "span { -ms-writing-mode: lr-tb; }",
				"restriction": "enum",
				"values": [
					{
						"name": "bt-lr"
					},
					{
						"name": "bt-rl"
					},
					{
						"name": "lr-bt"
					},
					{
						"name": "lr-tb"
					},
					{
						"name": "rl-bt"
					},
					{
						"name": "rl-tb"
					},
					{
						"name": "tb-lr"
					},
					{
						"name": "tb-rl"
					}
				]
			},
			{
				"name": "-ms-zoom",
				"desc": "Sets or retrieves the magnification scale of the object.",
				"browsers": "IE8",
				"ref": "https://msdn.microsoft.com/en-us/ie/gg192966.aspx",
				"syntax": ".example { -ms-zoom: 1; }",
				"restriction": "enum, integer, number, percentage",
				"values": [
					{
						"name": "normal"
					}
				]
			},
			{
				"name": "-ms-zoom-animation",
				"desc": "Gets or sets a value that indicates whether an animation is used when zooming.",
				"browsers": "IE10",
				"ref": "https://msdn.microsoft.com/en-us/library/windows/apps/hh466117.aspx",
				"syntax": "div { -ms-zoom-animation: none; }",
				"restriction": "enum",
				"values": [
					{
						"name": "default"
					},
					{
						"name": "none"
					}
				]
			},
			{
				"name": "nav-down",
				"desc": "Provides an way to control directional focus navigation.",
				"browsers": "O9.5",
				"ref": "http://www.w3.org/TR/css3-ui/#nav-dir",
				"syntax": "auto | 'id' [ current | root | 'target-name' ]?",
				"restriction": "enum, identifier, string",
				"values": [
					{
						"name": "auto",
						"desc": "The user agent automatically determines which element to navigate the focus to in response to directional navigational input."
					},
					{
						"name": "current"
					},
					{
						"name": "root"
					}
				]
			},
			{
				"name": "nav-index",
				"desc": "Provides an input-method-neutral way of specifying the sequential navigation order (also known as 'tabbing order').",
				"browsers": "O9.5",
				"ref": "http://www.w3.org/TR/css3-ui/#nav-index0",
				"syntax": "auto | 'number'",
				"restriction": "number",
				"values": [
					{
						"name": "auto",
						"desc": "The element's sequential navigation order is assigned automatically by the user agent."
					}
				]
			},
			{
				"name": "nav-left",
				"desc": "Provides an way to control directional focus navigation.",
				"browsers": "O9.5",
				"ref": "http://www.w3.org/TR/css3-ui/#nav-dir",
				"syntax": "auto | 'id' [ current | root | 'target-name' ]?",
				"restriction": "enum, identifier, string",
				"values": [
					{
						"name": "auto",
						"desc": "The user agent automatically determines which element to navigate the focus to in response to directional navigational input."
					},
					{
						"name": "current"
					},
					{
						"name": "root"
					}
				]
			},
			{
				"name": "nav-right",
				"desc": "Provides an way to control directional focus navigation.",
				"browsers": "O9.5",
				"ref": "http://www.w3.org/TR/css3-ui/#nav-dir",
				"syntax": "auto | 'id' [ current | root | 'target-name' ]?",
				"restriction": "enum, identifier, string",
				"values": [
					{
						"name": "auto",
						"desc": "The user agent automatically determines which element to navigate the focus to in response to directional navigational input."
					},
					{
						"name": "current"
					},
					{
						"name": "root"
					}
				]
			},
			{
				"name": "nav-up",
				"desc": "Provides an way to control directional focus navigation.",
				"browsers": "O9.5",
				"ref": "http://www.w3.org/TR/css3-ui/#nav-dir",
				"syntax": "auto | 'id' [ current | root | 'target-name' ]?",
				"restriction": "enum, identifier, string",
				"values": [
					{
						"name": "auto",
						"desc": "The user agent automatically determines which element to navigate the focus to in response to directional navigational input."
					},
					{
						"name": "current"
					},
					{
						"name": "root"
					}
				]
			},
			{
				"name": "negative",
				"desc": "@counter-style descriptor. Defines how to alter the representation when the counter value is negative.",
				"browsers": "FF33",
				"ref": "http://www.w3.org/TR/css-counter-styles-3/#descdef-counter-style-negative",
				"syntax": "@counter-style { negative: '(' ')'; }",
				"restriction": "image, identifier, string"
			},
			{
				"name": "-o-animation",
				"desc": "Shorthand property combines six of the animation properties into a single property.",
				"browsers": "O12",
				"ref": "http://www.w3.org/TR/css3-animations/#animation",
				"syntax": "div { -o-animation: movearound 4s ease 3 normal; }",
				"restriction": "time, enum, timing-function, identifier, number",
				"values": [
					{
						"name": "alternate"
					},
					{
						"name": "alternate-reverse"
					},
					{
						"name": "backwards"
					},
					{
						"name": "both",
						"desc": "Both forwards and backwards fill modes are applied."
					},
					{
						"name": "forwards"
					},
					{
						"name": "infinite",
						"desc": "Causes the animation to repeat forever."
					},
					{
						"name": "none",
						"desc": "No animation is performed"
					},
					{
						"name": "normal",
						"desc": "Normal playback."
					},
					{
						"name": "reverse",
						"desc": "All iterations of the animation are played in the reverse direction from the way they were specified."
					}
				]
			},
			{
				"name": "-o-animation-delay",
				"desc": "Defines when the animation will start.",
				"browsers": "O12",
				"ref": "http://www.w3.org/TR/css3-animations/#animation-delay",
				"syntax": "div { -o-animation-delay: 4s; }",
				"restriction": "time"
			},
			{
				"name": "-o-animation-direction",
				"desc": "Defines whether or not the animation should play in reverse on alternate cycles.",
				"browsers": "O12",
				"ref": "http://www.w3.org/TR/css3-animations/#animation-direction",
				"syntax": "div { -o-animation-direction: normal; }",
				"restriction": "enum",
				"values": [
					{
						"name": "alternate"
					},
					{
						"name": "alternate-reverse"
					},
					{
						"name": "normal",
						"desc": "Normal playback."
					},
					{
						"name": "reverse",
						"desc": "All iterations of the animation are played in the reverse direction from the way they were specified."
					}
				]
			},
			{
				"name": "-o-animation-duration",
				"desc": "Defines the length of time that an animation takes to complete one cycle.",
				"browsers": "O12",
				"ref": "http://www.w3.org/TR/css3-animations/#animation-duration",
				"syntax": "div { -o-animation-duration: 4s; }",
				"restriction": "time"
			},
			{
				"name": "-o-animation-fill-mode",
				"desc": "Defines what values are applied by the animation outside the time it is executing.",
				"browsers": "O12",
				"ref": "http://www.w3.org/TR/css3-animations/#animation-fill-mode-property",
				"syntax": "div { -o-animation-fill-mode: forwards; }",
				"restriction": "enum",
				"values": [
					{
						"name": "backwards"
					},
					{
						"name": "both",
						"desc": "Both forwards and backwards fill modes are applied."
					},
					{
						"name": "forwards"
					},
					{
						"name": "none",
						"desc": "There is no change to the property value between the time the animation is applied and the time the animation begins playing or after the animation completes."
					}
				]
			},
			{
				"name": "-o-animation-iteration-count",
				"desc": "Defines the number of times an animation cycle is played. The default value is one, meaning the animation will play from beginning to end once.",
				"browsers": "O12",
				"ref": "http://www.w3.org/TR/css3-animations/#animation-iteration-count",
				"syntax": "div { -o-animation-iteration-count: 3; }",
				"restriction": "number, enum",
				"values": [
					{
						"name": "infinite",
						"desc": "Causes the animation to repeat forever."
					}
				]
			},
			{
				"name": "-o-animation-name",
				"desc": "Defines a list of animations that apply. Each name is used to select the keyframe at-rule that provides the property values for the animation.",
				"browsers": "O12",
				"ref": "http://www.w3.org/TR/css3-animations/#the-animation-name-property-",
				"syntax": "div { -o-animation-name: movearound; }",
				"restriction": "identifier, enum",
				"values": [
					{
						"name": "none",
						"desc": "No animation is performed"
					}
				]
			},
			{
				"name": "-o-animation-play-state",
				"desc": "Defines whether the animation is running or paused.",
				"browsers": "O12",
				"ref": "http://www.w3.org/TR/css3-animations/#animation-play-state",
				"syntax": "div { -o-animation-play-state: running; }",
				"restriction": "enum",
				"values": [
					{
						"name": "paused"
					},
					{
						"name": "running"
					}
				]
			},
			{
				"name": "-o-animation-timing-function",
				"desc": "Describes how the animation will progress over one cycle of its duration. See the 'transition-timing-function'.",
				"browsers": "O12",
				"ref": "http://www.w3.org/TR/css3-animations/#animation-timing-function",
				"syntax": "div { -o-animation-timing-function: ease; }",
				"restriction": "timing-function"
			},
			{
				"name": "object-fit",
				"desc": "The object-fit CSS property specifies how the contents of a replaced element should be fitted to the box established by its used height and width.",
				"browsers": "C32,FF36,O19,S7.1",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit",
				"syntax": "p { object-fit: cover; }",
				"restriction": "enum",
				"values": [
					{
						"name": "contain",
						"desc": "The replaced content is sized to maintain its aspect ratio while fitting within the element’s content box: its concrete object size is resolved as a contain constraint against the element's used width and height."
					},
					{
						"name": "cover",
						"desc": "The replaced content is sized to maintain its aspect ratio while filling the element's entire content box: its concrete object size is resolved as a cover constraint against the element’s used width and height."
					},
					{
						"name": "fill",
						"desc": "The replaced content is sized to fill the element’s content box: the object's concrete object size is the element's used width and height."
					},
					{
						"name": "none",
						"desc": "The replaced content is not resized to fit inside the element's content box"
					},
					{
						"name": "scale-down"
					}
				]
			},
			{
				"name": "object-position",
				"desc": "The object-position property determines the alignment of the replaced element inside its box.",
				"browsers": "C32,FF36,O19",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/object-position",
				"syntax": "img { object-position: left top; }",
				"restriction": "position, length, percentage"
			},
			{
				"name": "-o-border-image",
				"desc": "Shorthand property for setting 'border-image-source', 'border-image-slice', 'border-image-width', 'border-image-outset' and 'border-image-repeat'. Omitted values are set to their initial values.",
				"browsers": "O11.6",
				"ref": "http://www.w3.org/TR/css3-background/#border-image",
				"syntax": "div { -o-border-image: url(border.png) 0 5 0 5;}",
				"restriction": "length, percentage, number, image, enum",
				"values": [
					{
						"name": "auto",
						"desc": "If 'auto' is specified then the border image width is the intrinsic width or height (whichever is applicable) of the corresponding image slice. If the image does not have the required intrinsic dimension then the corresponding border-width is used instead."
					},
					{
						"name": "fill",
						"desc": "Causes the middle part of the border-image to be preserved."
					},
					{
						"name": "none"
					},
					{
						"name": "repeat"
					},
					{
						"name": "round",
						"desc": "The image is tiled (repeated) to fill the area. If it does not fill the area with a whole number of tiles, the image is rescaled so that it does."
					},
					{
						"name": "space",
						"desc": "The image is tiled (repeated) to fill the area. If it does not fill the area with a whole number of tiles, the extra space is distributed around the tiles."
					},
					{
						"name": "stretch",
						"desc": "The image is stretched to fill the area."
					}
				]
			},
			{
				"name": "-o-object-fit",
				"desc": "Specifies how the contents of a replaced element should be scaled relative to the box established by its used height and width.",
				"browsers": "O10.6",
				"ref": "http://www.w3.org/TR/css4-images/#object-fit",
				"syntax": "p { -o-object-fit: cover; }",
				"restriction": "enum",
				"values": [
					{
						"name": "contain",
						"desc": "The replaced content is sized to maintain its aspect ratio while fitting within the element’s content box: its concrete object size is resolved as a contain constraint against the element's used width and height."
					},
					{
						"name": "cover",
						"desc": "The replaced content is sized to maintain its aspect ratio while filling the element's entire content box: its concrete object size is resolved as a cover constraint against the element’s used width and height."
					},
					{
						"name": "fill",
						"desc": "The replaced content is sized to fill the element’s content box: the object's concrete object size is the element's used width and height."
					},
					{
						"name": "none",
						"desc": "The replaced content is not resized to fit inside the element's content box"
					},
					{
						"name": "scale-down"
					}
				]
			},
			{
				"name": "-o-object-position",
				"desc": "Determines the alignment of the replaced element inside its box.",
				"browsers": "O10.6",
				"ref": "http://www.w3.org/TR/css4-images/#object-position",
				"syntax": "img { -o-object-position: left top; }",
				"restriction": "position, length, percentage"
			},
			{
				"name": "opacity",
				"desc": "The opacity CSS property specifies the transparency of an element, that is, the degree to which the background behind the element is overlaid.",
				"browsers": "C,FF3.6,IE9,O9,S1.2",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/opacity",
				"syntax": "article { opacity: opacity: 0.4; }",
				"restriction": "number(0-1)"
			},
			{
				"name": "order",
				"desc": "The CSS order property specifies the order used to lay out flex items in their flex container. Elements are laid out in the ascending order of the order value. Elements with the same order value are laid out in the order in which they appear in the source code.",
				"browsers": "E,C29,FF22,IE11,O12.1,S9",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/order",
				"syntax": "p { order: -1; }",
				"restriction": "integer"
			},
			{
				"name": "orphans",
				"desc": "The orphans CSS property refers to the minimum number of lines in a block container that must be left at the bottom of the page. This property is normally used to control how page breaks occur.",
				"browsers": "C,IE8,O7,S1.3",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/orphans",
				"syntax": "<integer>",
				"restriction": "integer"
			},
			{
				"name": "-o-table-baseline",
				"desc": "Determines which row of a inline-table should be used as baseline of inline-table.",
				"browsers": "O9.6",
				"ref": "http://www.w3.org/TR/mathml-for-css/",
				"syntax": "td { -o-table-baseline: 2; }",
				"restriction": "integer"
			},
			{
				"name": "-o-tab-size",
				"desc": "This property determines the width of the tab character (U+0009), in space characters (U+0020), when rendered.",
				"browsers": "O10.6",
				"ref": "http://www.w3.org/TR/css3-text/#tab-size",
				"syntax": "div { -o-tab-size: 4; }",
				"restriction": "integer, length"
			},
			{
				"name": "-o-text-overflow",
				"desc": "Text can overflow for example when it is prevented from wrapping",
				"browsers": "O10",
				"ref": "http://www.w3.org/TR/css3-ui/#text-overflow0",
				"syntax": "span { -o-text-overflow: ellipsis; }",
				"restriction": "enum",
				"values": [
					{
						"name": "clip"
					},
					{
						"name": "ellipsis"
					}
				]
			},
			{
				"name": "-o-transform",
				"desc": "A two-dimensional transformation is applied to an element through the 'transform' property. This property contains a list of transform functions similar to those allowed by SVG.",
				"browsers": "O10.5",
				"ref": "http://www.w3.org/TR/css3-2d-transforms/#transform-property",
				"syntax": "div { -o-transform: rotate(-90deg); }",
				"restriction": "enum",
				"values": [
					{
						"name": "matrix()"
					},
					{
						"name": "matrix3d()"
					},
					{
						"name": "none"
					},
					{
						"name": "rotate()"
					},
					{
						"name": "rotate3d()"
					},
					{
						"name": "rotateX('angle')"
					},
					{
						"name": "rotateY('angle')"
					},
					{
						"name": "rotateZ('angle')"
					},
					{
						"name": "scale()"
					},
					{
						"name": "scale3d()"
					},
					{
						"name": "scaleX()"
					},
					{
						"name": "scaleY()"
					},
					{
						"name": "scaleZ()"
					},
					{
						"name": "skew()"
					},
					{
						"name": "skewX()"
					},
					{
						"name": "skewY()"
					},
					{
						"name": "translate()"
					},
					{
						"name": "translate3d()"
					},
					{
						"name": "translateX()"
					},
					{
						"name": "translateY()"
					},
					{
						"name": "translateZ()"
					}
				]
			},
			{
				"name": "-o-transform-origin",
				"desc": "Establishes the origin of transformation for an element.",
				"browsers": "O10.5",
				"ref": "http://www.w3.org/TR/css3-2d-transforms/#transform-origin",
				"syntax": "div { -o-transform-origin: 20% 40%; }",
				"restriction": "positon, length, percentage"
			},
			{
				"name": "-o-transition",
				"desc": "Shorthand property combines four of the transition properties into a single property.",
				"browsers": "O11.5",
				"ref": "http://www.w3.org/TR/css3-transitions/#transition",
				"syntax": "div { -o-transition: background-color linear 1s; }",
				"restriction": "time, property, timing-function, enum",
				"values": [
					{
						"name": "all",
						"desc": "Every property that is able to undergo a transition will do so."
					},
					{
						"name": "none",
						"desc": "No property will transition."
					}
				]
			},
			{
				"name": "-o-transition-delay",
				"desc": "Defines when the transition will start. It allows a transition to begin execution some period of time from when it is applied.",
				"browsers": "O11.5",
				"ref": "http://www.w3.org/TR/css3-transitions/#transition-delay",
				"syntax": "div { -o-transition-delay: 1s; }",
				"restriction": "time"
			},
			{
				"name": "-o-transition-duration",
				"desc": "Specifies how long the transition from the old value to the new value should take.",
				"browsers": "O11.5",
				"ref": "http://www.w3.org/TR/css3-transitions/#transition-duration",
				"syntax": "div { -o-transition-duration: 1s; }",
				"restriction": "time"
			},
			{
				"name": "-o-transition-property",
				"desc": "Specifies the name of the CSS property to which the transition is applied.",
				"browsers": "O11.5",
				"ref": "http://www.w3.org/TR/css3-transitions/#transition-property",
				"syntax": "div { -o-transition-property: background-color; }",
				"restriction": "property",
				"values": [
					{
						"name": "all",
						"desc": "Every property that is able to undergo a transition will do so."
					},
					{
						"name": "none",
						"desc": "No property will transition."
					}
				]
			},
			{
				"name": "-o-transition-timing-function",
				"desc": "Describes how the intermediate values used during a transition will be calculated.",
				"browsers": "O11.5",
				"ref": "http://www.w3.org/TR/css3-transitions/#transition-timing-function",
				"syntax": "div { -o-transition-timing-function: linear; }",
				"restriction": "timing-function"
			},
			{
				"name": "offset-block-end",
				"desc": "The offset-block-end CSS property defines the logical block end offset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the top, right, bottom, or left property depending on the values defined for writing-mode, direction, and text-orientation.",
				"browsers": "FF41",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/offset-block-end",
				"syntax": "article { offset-block-end: 50px; }",
				"restriction": "length, percentage",
				"values": [
					{
						"name": "auto",
						"desc": "For non-replaced elements, the effect of this value depends on which of related properties have the value 'auto' as well."
					}
				]
			},
			{
				"name": "offset-block-start",
				"desc": "The offset-block-start CSS property defines the logical block start offset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the top, right, bottom, or left property depending on the values defined for writing-mode, direction, and text-orientation.",
				"browsers": "FF41",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/offset-block-start",
				"syntax": "article { offset-block-start: 50px; }",
				"restriction": "length, percentage",
				"values": [
					{
						"name": "auto",
						"desc": "For non-replaced elements, the effect of this value depends on which of related properties have the value 'auto' as well."
					}
				]
			},
			{
				"name": "offset-inline-end",
				"desc": "The offset-inline-end CSS property defines the logical inline end offset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the top, right, bottom, or left property depending on the values defined for writing-mode, direction, and text-orientation.",
				"browsers": "FF41",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/offset-inline-end",
				"syntax": "article { offset-inline-end: 50px; }",
				"restriction": "length, percentage",
				"values": [
					{
						"name": "auto",
						"desc": "For non-replaced elements, the effect of this value depends on which of related properties have the value 'auto' as well."
					}
				]
			},
			{
				"name": "offset-inline-start",
				"desc": "The offset-inline-start CSS property defines the logical inline start offset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the top, right, bottom, or left property depending on the values defined for writing-mode, direction, and text-orientation.",
				"browsers": "FF41",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/offset-inline-start",
				"syntax": "article { offset-inline-start: 50px; }",
				"restriction": "length, percentage",
				"values": [
					{
						"name": "auto",
						"desc": "For non-replaced elements, the effect of this value depends on which of related properties have the value 'auto' as well."
					}
				]
			},
			{
				"name": "outline",
				"desc": "The CSS outline property is a shorthand property for setting one or more of the individual outline properties outline-style, outline-width and outline-color in a single declaration. In most cases the use of this shortcut is preferable and more convenient.",
				"browsers": "E,C,FF1.5,IE8,O8,S1.2",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/outline",
				"syntax": "header { outline: 5px solid red;}",
				"restriction": "length, line-width, line-style, color, enum",
				"values": [
					{
						"name": "auto",
						"desc": "Permits the user agent to render a custom outline style, typically the default platform style."
					},
					{
						"name": "invert",
						"browsers": "E,IE8,O"
					}
				]
			},
			{
				"name": "outline-color",
				"desc": "The outline-color CSS property sets the color of the outline of an element. An outline is a line that is drawn around elements, outside the border edge, to make the element stand out.",
				"browsers": "E,C,FF1.5,IE8,O8,S1.2",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/outline-color",
				"syntax": "body { outline-color: red; }",
				"restriction": "enum, color",
				"values": [
					{
						"name": "invert",
						"browsers": "E,IE8,O"
					}
				]
			},
			{
				"name": "outline-offset",
				"desc": "The outline-offset CSS property is used to set space between an outline and the edge or border of an element. An outline is a line that is drawn around elements, outside the border edge.",
				"browsers": "C,FF1.5,O9.5,S1.2",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/outline-offset",
				"syntax": "article { outline-offset: 15px; }",
				"restriction": "length"
			},
			{
				"name": "outline-style",
				"desc": "The outline-style CSS property is used to set the style of the outline of an element. An outline is a line that is drawn around elements, outside the border edge, to make the element stand out.",
				"browsers": "E,C,FF1.5,IE8,O8,S1.2",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/outline-style",
				"syntax": "td { outline-style: solid; }",
				"restriction": "line-style, enum",
				"values": [
					{
						"name": "auto",
						"desc": "Permits the user agent to render a custom outline style, typically the default platform style."
					}
				]
			},
			{
				"name": "outline-width",
				"desc": "The outline-width CSS property is used to set the width of the outline of an element. An outline is a line that is drawn around elements, outside the border edge, to make the element stand out:",
				"browsers": "E,C,FF1.5,IE8,O8,S1.2",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/outline-width",
				"syntax": "td { outline-width: 2px; }",
				"restriction": "length, line-width"
			},
			{
				"name": "overflow",
				"desc": "Using the overflow property with a value different to visible (its default) will create a new block formatting context. This is technically necessary — if a float intersected with the scrolling element it would forcibly rewrap the content. The rewrap would happen after each scroll step, leading to a slow scrolling experience.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow",
				"syntax": "div { overflow: hidden auto; }",
				"restriction": "enum",
				"values": [
					{
						"name": "auto",
						"desc": "The behavior of the 'auto' value is UA-dependent, but should cause a scrolling mechanism to be provided for overflowing boxes."
					},
					{
						"name": "hidden",
						"desc": "Content is clipped and no scrolling mechanism should be provided to view the content outside the clipping region."
					},
					{
						"name": "-moz-hidden-unscrollable",
						"browsers": "FF"
					},
					{
						"name": "scroll",
						"desc": "Content is clipped and if the user agent uses a scrolling mechanism that is visible on the screen (such as a scroll bar or a panner), that mechanism should be displayed for a box whether or not any of its content is clipped."
					},
					{
						"name": "visible",
						"desc": "Content is not clipped, i.e., it may be rendered outside the content box."
					}
				]
			},
			{
				"name": "overflow-wrap",
				"desc": "The overflow-wrap property is used to specify whether or not the browser may break lines within words in order to prevent overflow when an otherwise unbreakable string is too long to fit in its containing box.",
				"browsers": "C23,O12.1,S6.1",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-wrap",
				"syntax": "div { overflow-wrap: break-word; }",
				"restriction": "enum",
				"values": [
					{
						"name": "break-word",
						"desc": "An otherwise unbreakable sequence of characters may be broken at an arbitrary point if there are no otherwise-acceptable break points in the line."
					},
					{
						"name": "normal",
						"desc": "Lines may break only at allowed break points."
					}
				]
			},
			{
				"name": "overflow-x",
				"desc": "The overflow-x property specifies whether to clip content, render a scroll bar, or display overflow content of a block-level element, when it overflows at the left and right edges.",
				"browsers": "E,C,FF1.5,IE5,O9.5,S3",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-x",
				"syntax": "div { overflow-x: hidden; }",
				"restriction": "enum",
				"values": [
					{
						"name": "auto",
						"desc": "The behavior of the 'auto' value is UA-dependent, but should cause a scrolling mechanism to be provided for overflowing boxes."
					},
					{
						"name": "hidden",
						"desc": "Content is clipped and no scrolling mechanism should be provided to view the content outside the clipping region."
					},
					{
						"name": "scroll",
						"desc": "Content is clipped and if the user agent uses a scrolling mechanism that is visible on the screen (such as a scroll bar or a panner), that mechanism should be displayed for a box whether or not any of its content is clipped."
					},
					{
						"name": "visible",
						"desc": "Content is not clipped, i.e., it may be rendered outside the content box."
					}
				]
			},
			{
				"name": "overflow-y",
				"desc": "The overflow-y property specifies whether to clip content, render a scroll bar, or display overflow content of a block-level element, when it overflows at the top and bottom edges.",
				"browsers": "E,C,FF1.5,IE5,O9.5,S3",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-y",
				"syntax": "div { overflow-y: hidden; }",
				"restriction": "enum",
				"values": [
					{
						"name": "auto",
						"desc": "The behavior of the 'auto' value is UA-dependent, but should cause a scrolling mechanism to be provided for overflowing boxes."
					},
					{
						"name": "hidden",
						"desc": "Content is clipped and no scrolling mechanism should be provided to view the content outside the clipping region."
					},
					{
						"name": "scroll",
						"desc": "Content is clipped and if the user agent uses a scrolling mechanism that is visible on the screen (such as a scroll bar or a panner), that mechanism should be displayed for a box whether or not any of its content is clipped."
					},
					{
						"name": "visible",
						"desc": "Content is not clipped, i.e., it may be rendered outside the content box."
					}
				]
			},
			{
				"name": "pad",
				"desc": "@counter-style descriptor. Specifies a “fixed-width” counter style, where representations shorter than the pad value are padded with a particular <symbol>",
				"browsers": "FF33",
				"ref": "http://www.w3.org/TR/css-counter-styles-3/#descdef-counter-style-pad",
				"syntax": "@counter-style { pad: 3 '0'; }",
				"restriction": "integer, image, string, identifier"
			},
			{
				"name": "padding",
				"desc": "The padding property sets the padding space on all sides of an element. The padding area is the space between the content of the element and its border. Negative values are not allowed.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/padding",
				"syntax": "div { padding: 4px 7px 2px 4px; }",
				"restriction": "length, percentage",
				"values": []
			},
			{
				"name": "padding-bottom",
				"desc": "The padding-bottom CSS property of an element sets the height of the padding area at the bottom of an element. The padding area is the space between the content of the element and its border. Contrary to margin-bottom values, negative values of padding-bottom are invalid.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/padding-bottom",
				"syntax": "ul { padding-bottom: 2em; }",
				"restriction": "length, percentage"
			},
			{
				"name": "padding-block-end",
				"desc": "The padding-block-end CSS property defines the logical block end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the padding-top, padding-right, padding-bottom, or padding-left property depending on the values defined for writing-mode, direction, and text-orientation.",
				"browsers": "FF41",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/padding-block-end",
				"syntax": "article { padding-block-end: 50px; }",
				"restriction": "length, percentage"
			},
			{
				"name": "padding-block-start",
				"desc": "The padding-block-start CSS property defines the logical block start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the padding-top, padding-right, padding-bottom, or padding-left property depending on the values defined for writing-mode, direction, and text-orientation.",
				"browsers": "FF41",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/padding-block-start",
				"syntax": "article { padding-block-start: 50px; }",
				"restriction": "length, percentage"
			},
			{
				"name": "padding-inline-end",
				"desc": "The padding-inline-end CSS property defines the logical inline end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the padding-top, padding-right, padding-bottom, or padding-left property depending on the values defined for writing-mode, direction, and text-orientation.",
				"browsers": "FF41",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline-end",
				"syntax": "article { padding-inline-end: 50px; }",
				"restriction": "length, percentage"
			},
			{
				"name": "padding-inline-start",
				"desc": "The padding-inline-start CSS property defines the logical inline start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the padding-top, padding-right, padding-bottom, or padding-left property depending on the values defined for writing-mode, direction, and text-orientation.",
				"browsers": "FF41",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline-start",
				"syntax": "article { padding-inline-start: 50px; }",
				"restriction": "length, percentage"
			},
			{
				"name": "padding-left",
				"desc": "The padding-left CSS property of an element sets the padding space required on the left side of an element. The padding area is the space between the content of the element and it's border. A negative value is not allowed.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/padding-left",
				"syntax": "ul { padding-left: 2em; }",
				"restriction": "length, percentage"
			},
			{
				"name": "padding-right",
				"desc": "The padding-right CSS property of an element sets the padding space required on the right side of an element. The padding area is the space between the content of the element and its border. Negative values are not allowed.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/padding-right",
				"syntax": "ul { padding-right: 2em; }",
				"restriction": "length, percentage"
			},
			{
				"name": "padding-top",
				"desc": "The padding-top CSS property of an element sets the padding space required on the top of an element. The padding area is the space between the content of the element and its border. Contrary to margin-top values, negative values of padding-top are invalid.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/padding-top",
				"syntax": "ul { padding-top: 2em; }",
				"restriction": "length, percentage"
			},
			{
				"name": "page-break-after",
				"desc": "The page-break-after CSS property adjusts page breaks after the current element.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/page-break-after",
				"syntax": "table { page-break-after: always; }",
				"restriction": "enum",
				"values": [
					{
						"name": "always",
						"desc": "Always force a page break after the generated box."
					},
					{
						"name": "auto",
						"desc": "Neither force nor forbid a page break after generated box."
					},
					{
						"name": "avoid",
						"desc": "Avoid a page break after the generated box."
					},
					{
						"name": "left",
						"desc": "Force one or two page breaks after the generated box so that the next page is formatted as a left page."
					},
					{
						"name": "right",
						"desc": "Force one or two page breaks after the generated box so that the next page is formatted as a right page."
					}
				]
			},
			{
				"name": "page-break-before",
				"desc": "The page-break-before CSS property adjusts page breaks before the current element.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/page-break-before",
				"syntax": "table { page-break-before: always; }",
				"restriction": "enum",
				"values": [
					{
						"name": "always",
						"desc": "Always force a page break before the generated box."
					},
					{
						"name": "auto",
						"desc": "Neither force nor forbid a page break before the generated box."
					},
					{
						"name": "avoid",
						"desc": "Avoid a page break before the generated box."
					},
					{
						"name": "left",
						"desc": "Force one or two page breaks before the generated box so that the next page is formatted as a left page."
					},
					{
						"name": "right",
						"desc": "Force one or two page breaks before the generated box so that the next page is formatted as a right page."
					}
				]
			},
			{
				"name": "page-break-inside",
				"desc": "The page-break-inside CSS property adjusts page breaks inside the current element.",
				"browsers": "C,IE8,O7,S1.3",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/page-break-inside",
				"syntax": "table { page-break-inside: avoid; }",
				"restriction": "enum",
				"values": [
					{
						"name": "auto",
						"desc": "Neither force nor forbid a page break inside the generated box."
					},
					{
						"name": "avoid",
						"desc": "Avoid a page break inside the generated box."
					}
				]
			},
			{
				"name": "paint-order",
				"desc": "Controls the order that the three paint operations that shapes and text are rendered with: their fill, their stroke and any markers they might have.",
				"browsers": "C35,FF31,O22,S7.1",
				"ref": "http://www.w3.org/TR/SVG2/painting.html#PaintOrderProperty",
				"restriction": "enum",
				"values": [
					{
						"name": "fill"
					},
					{
						"name": "markers"
					},
					{
						"name": "normal",
						"desc": "The element is painted with the standard order of painting operations: the 'fill' is painted first, then its 'stroke' and finally its markers."
					},
					{
						"name": "stroke"
					}
				]
			},
			{
				"name": "perspective",
				"desc": "The perspective CSS property determines the distance between the z=0 plane and the user in order to give to the 3D-positioned element some perspective. Each 3D element with z>0 becomes larger; each 3D-element with z<0 becomes smaller. The strength of the effect is determined by the value of this property.",
				"browsers": "E,C36,FF16,IE10,O23,S9",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/perspective",
				"syntax": "div { perspective: none; }",
				"restriction": "length, enum",
				"values": [
					{
						"name": "none",
						"desc": "No perspective transform is applied."
					}
				]
			},
			{
				"name": "perspective-origin",
				"desc": "The perspective-origin CSS property determines the position the viewer is looking at. It is used as the vanishing point by the perspective property.",
				"browsers": "E,C36,FF16,IE10,O23,S9",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/perspective-origin",
				"syntax": "div { perspective-origin: 10px; }",
				"restriction": "position, percentage, length"
			},
			{
				"name": "pointer-events",
				"desc": "The CSS property pointer-events allows authors to control under what circumstances (if any) a particular graphic element can become the target of mouse events. When this property is unspecified, the same characteristics of the visiblePainted value apply to SVG content.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events",
				"restriction": "enum",
				"values": [
					{
						"name": "all",
						"desc": "The given element can be the target element for pointer events whenever the pointer is over either the interior or the perimeter of the element."
					},
					{
						"name": "fill",
						"desc": "The given element can be the target element for pointer events whenever the pointer is over the interior of the element."
					},
					{
						"name": "none",
						"desc": "The given element does not receive pointer events."
					},
					{
						"name": "painted"
					},
					{
						"name": "stroke",
						"desc": "The given element can be the target element for pointer events whenever the pointer is over the perimeter of the element."
					},
					{
						"name": "visible",
						"desc": "The given element can be the target element for pointer events when the ‘visibility’ property is set to visible and the pointer is over either the interior or the perimete of the element."
					},
					{
						"name": "visibleFill"
					},
					{
						"name": "visiblePainted"
					},
					{
						"name": "visibleStroke"
					}
				]
			},
			{
				"name": "position",
				"desc": "The position CSS property chooses alternative rules for positioning elements, designed to be useful for scripted animation effects.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/position",
				"syntax": "div { position: absolute; }",
				"restriction": "enum",
				"values": [
					{
						"name": "absolute"
					},
					{
						"name": "fixed",
						"desc": "The box's position is calculated according to the 'absolute' model, but in addition, the box is fixed with respect to some reference. As with the 'absolute' model, the box's margins do not collapse with any other margins."
					},
					{
						"name": "-ms-page",
						"browsers": "E,IE10"
					},
					{
						"name": "relative"
					},
					{
						"name": "static"
					},
					{
						"name": "sticky",
						"browsers": "FF32"
					},
					{
						"name": "-webkit-sticky",
						"browsers": "S6.1"
					}
				]
			},
			{
				"name": "prefix",
				"desc": "@counter-style descriptor. Specifies a <symbol> that is prepended to the marker representation.",
				"browsers": "FF33",
				"ref": "http://www.w3.org/TR/css-counter-styles-3/#descdef-counter-style-prefix",
				"syntax": "@counter-style { prefix: '#'; }",
				"restriction": "image, string, identifier"
			},
			{
				"name": "quotes",
				"desc": "The quotes CSS property indicates how user agents should render quotation marks.",
				"browsers": "E,C,FF1.5,IE8,O8,S5.1",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/quotes",
				"syntax": "none | [ <string> <string> ]+",
				"restriction": "string",
				"values": [
					{
						"name": "none",
						"desc": "The 'open-quote' and 'close-quote' values of the 'content' property produce no quotations marks, as if they were 'no-open-quote' and 'no-close-quote' respectively."
					}
				]
			},
			{
				"name": "range",
				"desc": "@counter-style descriptor. Defines the ranges over which the counter style is defined.",
				"browsers": "FF33",
				"ref": "http://www.w3.org/TR/css-counter-styles-3/#descdef-counter-style-range",
				"syntax": "@counter-style { range: 2 infinite, 8 834048; }",
				"restriction": "integer, enum",
				"values": [
					{
						"name": "auto",
						"desc": "The range depends on the counter system."
					},
					{
						"name": "infinite",
						"desc": "If used as the first value in a range, it represents negative infinity; if used as the second value, it represents positive infinity."
					}
				]
			},
			{
				"name": "resize",
				"desc": "The resize CSS property lets you control the resizability of an element.",
				"browsers": "C,FF4,O15,S3",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/resize",
				"syntax": "div { resize: both; }",
				"restriction": "enum",
				"values": [
					{
						"name": "both",
						"desc": "The UA presents a bidirectional resizing mechanism to allow the user to adjust both the height and the width of the element."
					},
					{
						"name": "horizontal",
						"desc": "The UA presents a unidirectional horizontal resizing mechanism to allow the user to adjust only the width of the element."
					},
					{
						"name": "none",
						"desc": "The UA does not present a resizing mechanism on the element, and the user is given no direct manipulation mechanism to resize the element."
					},
					{
						"name": "vertical",
						"desc": "The UA presents a unidirectional vertical resizing mechanism to allow the user to adjust only the height of the element."
					}
				]
			},
			{
				"name": "right",
				"desc": "The right CSS property specifies part of the position of positioned elements.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/right",
				"syntax": "article { right: 50px; }",
				"restriction": "length, percentage",
				"values": [
					{
						"name": "auto",
						"desc": "For non-replaced elements, the effect of this value depends on which of related properties have the value 'auto' as well"
					}
				]
			},
			{
				"name": "ruby-align",
				"desc": "The ruby-align CSS property defines the distribution of the different ruby elements over the base.",
				"browsers": "FF10,IE5",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/ruby-align",
				"syntax": "auto | start | left | center | end | right | distribute-letter | distribute-space | line-edge",
				"restriction": "enum",
				"values": [
					{
						"name": "auto",
						"desc": "The user agent determines how the ruby contents are aligned. This is the initial value.",
						"browsers": "E,IE5"
					},
					{
						"name": "center",
						"desc": "The ruby content is centered within its box."
					},
					{
						"name": "distribute-letter",
						"browsers": "E,IE5"
					},
					{
						"name": "distribute-space",
						"browsers": "E,IE5"
					},
					{
						"name": "left",
						"desc": "The ruby text content is aligned with the start edge of the base."
					},
					{
						"name": "line-edge",
						"browsers": "E,IE5"
					},
					{
						"name": "right",
						"desc": "The ruby text content is aligned with the end edge of the base.",
						"browsers": "E,IE5"
					},
					{
						"name": "start",
						"desc": "The ruby text content is aligned with the start edge of the base.",
						"browsers": "FF10"
					},
					{
						"name": "space-between",
						"desc": "The ruby content expands as defined for normal text justification (as defined by 'text-justify'),",
						"browsers": "FF10"
					},
					{
						"name": "space-around",
						"desc": "As for 'space-between' except that there exists an extra justification opportunities whose space is distributed half before and half after the ruby content.",
						"browsers": "FF10"
					}
				]
			},
			{
				"name": "ruby-overhang",
				"desc": "Determines whether, and on which side, ruby text is allowed to partially overhang any adjacent text in addition to its own base, when the ruby text is wider than the ruby base.",
				"browsers": "FF10,IE5",
				"ref": "http://www.w3.org/TR/css3-ruby/#rubyover",
				"syntax": "auto | start | end | none",
				"restriction": "enum",
				"values": [
					{
						"name": "auto",
						"desc": "The ruby text can overhang text adjacent to the base on either side. This is the initial value."
					},
					{
						"name": "end",
						"desc": "The ruby text can overhang the text that follows it."
					},
					{
						"name": "none",
						"desc": "The ruby text cannot overhang any text adjacent to its base, only its own base."
					},
					{
						"name": "start",
						"desc": "The ruby text can overhang the text that precedes it."
					}
				]
			},
			{
				"name": "ruby-position",
				"desc": "The ruby-position CSS property defines the position of a ruby element relatives to its base element. It can be position over the element (over), under it (under), or between the characters, on their right side (inter-character).",
				"browsers": "FF10,IE5",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/ruby-position",
				"syntax": "before | after | right",
				"restriction": "enum",
				"values": [
					{
						"name": "after"
					},
					{
						"name": "before"
					},
					{
						"name": "inline"
					},
					{
						"name": "right",
						"desc": "The ruby text appears on the right of the base. Unlike 'before' and 'after', this value is not relative to the text flow direction."
					}
				]
			},
			{
				"name": "ruby-span",
				"desc": "Determines whether, and on which side, ruby text is allowed to partially overhang any adjacent text in addition to its own base, when the ruby text is wider than the ruby base.",
				"browsers": "FF10",
				"ref": "http://www.w3.org/TR/css3-ruby/#rubyspan",
				"syntax": "attr(x) | none",
				"restriction": "enum",
				"values": [
					{
						"name": "attr(x)"
					},
					{
						"name": "none",
						"desc": "No spanning. The computed value is '1'."
					}
				]
			},
			{
				"name": "scrollbar-3dlight-color",
				"desc": "Determines the color of the top and left edges of the scroll box and scroll arrows of a scroll bar.",
				"browsers": "IE6",
				"ref": "https://msdn.microsoft.com/en-us/library/ms531153(VS.85).aspx",
				"syntax": "textarea { scrollbar-3dlight-color: #00ffff; }",
				"restriction": "color"
			},
			{
				"name": "scrollbar-arrow-color",
				"desc": "Determines the color of the arrow elements of a scroll arrow.",
				"browsers": "IE6",
				"ref": "https://msdn.microsoft.com/en-us/library/ms531154(VS.85).aspx",
				"syntax": "body { scrollbar-arrow-color: #00ffff; }",
				"restriction": "color"
			},
			{
				"name": "scrollbar-base-color",
				"desc": "Determines the color of the main elements of a scroll bar, which include the scroll box, track, and scroll arrows.",
				"browsers": "IE6",
				"ref": "https://msdn.microsoft.com/en-us/library/ms531155(VS.85).aspx",
				"syntax": "textarea { scrollbar-base-color: #00ffff; }",
				"restriction": "color"
			},
			{
				"name": "scrollbar-darkshadow-color",
				"desc": "Determines the color of the gutter of a scroll bar.",
				"browsers": "IE6",
				"ref": "https://msdn.microsoft.com/en-us/library/ms531156(v=VS.85).aspx",
				"syntax": "textarea { scrollbar-darkshadow-color: #00ffff; }",
				"restriction": "color"
			},
			{
				"name": "scrollbar-face-color",
				"desc": "Determines the color of the scroll box and scroll arrows of a scroll bar.",
				"browsers": "IE6",
				"ref": "https://msdn.microsoft.com/en-us/library/ms531157(VS.85).aspx",
				"syntax": "textarea { scrollbar-face-color: #00ffff; }",
				"restriction": "color"
			},
			{
				"name": "scrollbar-highlight-color",
				"desc": "Determines the color of the top and left edges of the scroll box and scroll arrows of a scroll bar.",
				"browsers": "IE6",
				"ref": "https://msdn.microsoft.com/en-us/library/ms531158(VS.85).aspx",
				"syntax": "textarea { scrollbar-highlight-color: #00ffff; }",
				"restriction": "color"
			},
			{
				"name": "scrollbar-shadow-color",
				"desc": "Determines the color of the bottom and right edges of the scroll box and scroll arrows of a scroll bar.",
				"browsers": "IE6",
				"ref": "https://msdn.microsoft.com/en-us/library/ms531159(VS.85).aspx",
				"syntax": "textarea { scrollbar-shadow-color: #00ffff; }",
				"restriction": "color"
			},
			{
				"name": "scrollbar-track-color",
				"desc": "Determines the color of the track element of a scroll bar.",
				"browsers": "IE6",
				"ref": "https://msdn.microsoft.com/en-us/library/ms531160(VS.85).aspx",
				"syntax": "textarea { scrollbar-track-color: #00ffff; }",
				"restriction": "color"
			},
			{
				"name": "scroll-behavior",
				"desc": "The scroll-behavior CSS property specifies the scrolling behavior for a scrolling box, when scrolling happens due to navigation or CSSOM scrolling APIs. Any other scrolls, e.g. those that are performed by the user, are not affected by this property. When this property is specified on the root element, it applies to the viewport instead.",
				"browsers": "FF36",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior",
				"restriction": "enum",
				"values": [
					{
						"name": "auto",
						"desc": "Scrolls in an instant fashion."
					},
					{
						"name": "smooth"
					}
				]
			},
			{
				"name": "scroll-snap-coordinate",
				"desc": "The scroll-snap-coordinate CSS property defines the positions in x and y coordinates within the element which will align with the nearest ancestor scroll container's scroll-snap-destination for the respective axis.",
				"browsers": "FF39",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-coordinate",
				"restriction": "position, length, percentage, enum",
				"values": [
					{
						"name": "none",
						"desc": "Specifies that this element does not contribute a snap point."
					}
				]
			},
			{
				"name": "scroll-snap-destination",
				"desc": "The scroll-snap-destination CSS property defines the position in x and y coordinates within the scroll container's visual viewport which element snap points align with.",
				"browsers": "FF39",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-destination",
				"restriction": "position, length, percentage"
			},
			{
				"name": "scroll-snap-points-x",
				"desc": "The scroll-snap-points-x CSS property defines the horizontal positioning of snap points within the content of the scroll container they are applied to.",
				"browsers": "FF39",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-points-x",
				"restriction": "enum",
				"values": [
					{
						"name": "none",
						"desc": "No snap points are defined by this scroll container."
					},
					{
						"name": "repeat()"
					}
				]
			},
			{
				"name": "scroll-snap-points-y",
				"desc": "The scroll-snap-points-y CSS property defines the vertical positioning of snap points within the content of the scroll container they are applied to.",
				"browsers": "FF39",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-points-y",
				"restriction": "enum",
				"values": [
					{
						"name": "none",
						"desc": "No snap points are defined by this scroll container."
					},
					{
						"name": "repeat()"
					}
				]
			},
			{
				"name": "scroll-snap-type",
				"desc": "The scroll-snap-type CSS property defines how strictly snap points are enforced on the scroll container in case there is one.",
				"browsers": "FF39",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type",
				"restriction": "enum",
				"values": [
					{
						"name": "none",
						"desc": "The visual viewport of this scroll container must ignore snap points, if any, when scrolled."
					},
					{
						"name": "mandatory",
						"desc": "The visual viewport of this scroll container is guaranteed to rest on a snap point when there are no active scrolling operations."
					},
					{
						"name": "proximity",
						"desc": "The visual viewport of this scroll container may come to rest on a snap point at the termination of a scroll at the discretion of the UA given the parameters of the scroll."
					}
				]
			},
			{
				"name": "shape-image-threshold",
				"desc": "The shape-image-threshold CSS property defines the alpha channel threshold used to extract the shape using an image as the value for shape-outside. A value of 0.5 means that the shape will enclose all the pixels that are more than 50% opaque.",
				"browsers": "C37,O24",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/shape-image-threshold",
				"syntax": "div { shape-image-threshold: 0.5; }",
				"restriction": "number"
			},
			{
				"name": "shape-margin",
				"desc": "The shape-margin CSS property adds a margin to shape-outside.",
				"browsers": "C37,O24",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/shape-margin",
				"syntax": "div { shape-margin: 10px; }",
				"restriction": "url, length, percentage"
			},
			{
				"name": "shape-outside",
				"desc": "The shape-outside CSS property uses shape values to define the float area for a float and will cause inline content to wrap around the shape instead of the float's bounding box.",
				"browsers": "C37,O24",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/shape-outside",
				"syntax": "div { shape-outside: margin-box; }",
				"restriction": "image, box, shape, enum",
				"values": [
					{
						"name": "margin-box"
					},
					{
						"name": "none",
						"desc": "The float area is unaffected."
					}
				]
			},
			{
				"name": "size",
				"browsers": "C,O8",
				"ref": "http://www.w3.org/TR/css3-page/#page-size-prop",
				"syntax": "<length>{1,2} | auto | [ <page-size> || [ portrait | landscape] ]",
				"restriction": "length"
			},
			{
				"name": "src",
				"desc": "@font-face descriptor. Specifies the resource containing font data. It is required, whether the font is downloadable or locally installed.",
				"ref": "http://www.w3.org/TR/css3-fonts/#src-desc",
				"syntax": "src: url(font.woff) format('woff');",
				"restriction": "enum, url, identifier",
				"values": [
					{
						"name": "url()",
						"desc": "Reference font by URL"
					},
					{
						"name": "format()"
					},
					{
						"name": "local()"
					}
				]
			},
			{
				"name": "stop-color",
				"desc": "Indicates what color to use at that gradient stop.",
				"ref": "http://www.w3.org/TR/SVG2/pservers.html#StopColorProperty",
				"restriction": "color"
			},
			{
				"name": "stop-opacity",
				"desc": "Defines the opacity of a given gradient stop.",
				"ref": "http://www.w3.org/TR/SVG2/pservers.html#StopOpacityProperty",
				"restriction": "number(0-1)"
			},
			{
				"name": "stroke",
				"desc": "Paints along the outline of the given graphical element.",
				"ref": "http://www.w3.org/TR/SVG2/painting.html#StrokeProperty",
				"restriction": "color, enum, url",
				"values": [
					{
						"name": "url()",
						"desc": "A URL reference to a paint server element, which is an element that defines a paint server: ‘hatch’, ‘linearGradient’, ‘mesh’, ‘pattern’, ‘radialGradient’ and ‘solidcolor’."
					}
				]
			},
			{
				"name": "stroke-dasharray",
				"desc": "Controls the pattern of dashes and gaps used to stroke paths.",
				"ref": "http://www.w3.org/TR/SVG2/painting.html#StrokeDasharrayProperty",
				"restriction": "length, percentage, number, enum",
				"values": [
					{
						"name": "none",
						"desc": "Indicates that no dashing is used."
					}
				]
			},
			{
				"name": "stroke-dashoffset",
				"desc": "Specifies the distance into the dash pattern to start the dash.",
				"ref": "http://www.w3.org/TR/SVG2/painting.html#StrokeDashoffsetProperty",
				"restriction": "percentage, length"
			},
			{
				"name": "stroke-linecap",
				"desc": "Specifies the shape to be used at the end of open subpaths when they are stroked.",
				"ref": "http://www.w3.org/TR/SVG2/painting.html#StrokeLinecapProperty",
				"restriction": "enum",
				"values": [
					{
						"name": "butt"
					},
					{
						"name": "round",
						"desc": "Indicates that at each end of each subpath, the shape representing the stroke will be extended by a half circle with a radius equal to the stroke width."
					},
					{
						"name": "square",
						"desc": "Indicates that at the end of each subpath, the shape representing the stroke will be extended by a rectangle with the same width as the stroke width and whose length is half of the stroke width."
					}
				]
			},
			{
				"name": "stroke-linejoin",
				"desc": "Specifies the shape to be used at the corners of paths or basic shapes when they are stroked.",
				"ref": "http://www.w3.org/TR/SVG2/painting.html#StrokeLinejoinProperty",
				"restriction": "enum",
				"values": [
					{
						"name": "bevel"
					},
					{
						"name": "miter"
					},
					{
						"name": "round",
						"desc": "Indicates that a round corner is to be used to join path segments."
					}
				]
			},
			{
				"name": "stroke-miterlimit",
				"desc": "When two line segments meet at a sharp angle and miter joins have been specified for 'stroke-linejoin', it is possible for the miter to extend far beyond the thickness of the line stroking the path.",
				"ref": "http://www.w3.org/TR/SVG2/painting.html#StrokeMiterlimitProperty",
				"syntax": "path { stroke-miterlimit: 4; }",
				"restriction": "number"
			},
			{
				"name": "stroke-opacity",
				"desc": "Specifies the opacity of the painting operation used to stroke the current object.",
				"ref": "http://www.w3.org/TR/SVG2/painting.html#StrokeOpacityProperty",
				"restriction": "number(0-1)"
			},
			{
				"name": "stroke-width",
				"desc": "Specifies the width of the stroke on the current object.",
				"ref": "http://www.w3.org/TR/SVG2/painting.html#StrokeWidth",
				"restriction": "percentage, length"
			},
			{
				"name": "suffix",
				"desc": "@counter-style descriptor. Specifies a <symbol> that is appended to the marker representation.",
				"browsers": "FF33",
				"ref": "http://www.w3.org/TR/css-counter-styles-3/#descdef-counter-style-suffix",
				"syntax": "@counter-style { suffix: '\\2E\\20'; }",
				"restriction": "image, string, identifier"
			},
			{
				"name": "system",
				"desc": "@counter-style descriptor. Specifies which algorithm will be used to construct the counter’s representation based on the counter value.",
				"browsers": "FF33",
				"ref": "http://www.w3.org/TR/css-counter-styles-3/#descdef-counter-style-system",
				"syntax": "@counter-style triangle { system: cyclic; }",
				"restriction": "enum, integer",
				"values": [
					{
						"name": "additive"
					},
					{
						"name": "alphabetic",
						"desc": "Interprets the list of counter symbols as digits to an alphabetic numbering system, similar to the default lower-alpha counter style, which wraps from \"a\", \"b\", \"c\", to \"aa\", \"ab\", \"ac\"."
					},
					{
						"name": "cyclic"
					},
					{
						"name": "extends"
					},
					{
						"name": "fixed",
						"desc": "Runs through its list of counter symbols once, then falls back."
					},
					{
						"name": "numeric"
					},
					{
						"name": "symbolic"
					}
				]
			},
			{
				"name": "symbols",
				"desc": "The symbols() function allows counter styles to be defined inline, directly as the value of the CSS property. Unlike styles defines with @counter-style, these styles are anonymous. The symbols() function doesn't have all the capabilities and options of the @counter-style at-rule, but is useful in cases such as when the style is used only once and you don't need all the the options provided by @counter-style.",
				"browsers": "FF33",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/symbols",
				"syntax": "@counter-style { symbols: '*' ⁑ † ‡; }",
				"restriction": "image, string, identifier"
			},
			{
				"name": "table-layout",
				"desc": "The table-layout CSS property defines the algorithm to be used to layout the table cells, rows, and columns.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/table-layout",
				"syntax": "table { table-layout: fixed; }",
				"restriction": "enum",
				"values": [
					{
						"name": "auto",
						"desc": "Use any automatic table layout algorithm."
					},
					{
						"name": "fixed",
						"desc": "Use the fixed table layout algorithm."
					}
				]
			},
			{
				"name": "tab-size",
				"desc": "Determines the width of the tab character (U+0009), in space characters (U+0020), when rendered.",
				"browsers": "C21,O15,S6.1",
				"ref": "http://www.w3.org/TR/css3-text/#tab-size",
				"syntax": "div { tab-size: 4; }",
				"restriction": "integer, length"
			},
			{
				"name": "text-align",
				"desc": "Describes how inline contents of a block are horizontally aligned if the contents do not completely fill the line box.",
				"ref": "http://www.w3.org/TR/css3-text/#text-align0",
				"syntax": "h2 { text-align: center; }",
				"restriction": "string",
				"values": [
					{
						"name": "center",
						"desc": "The inline contents are centered within the line box."
					},
					{
						"name": "end",
						"desc": "The inline contents are aligned to the end edge of the line box.",
						"browsers": "C,FF3.6,O15,S3.1"
					},
					{
						"name": "justify",
						"desc": "The text is justified according to the method specified by the 'text-justify' property."
					},
					{
						"name": "left",
						"desc": "The inline contents are aligned to the left edge of the line box. In vertical text, 'left' aligns to the edge of the line box that would be the start edge for left-to-right text."
					},
					{
						"name": "right",
						"desc": "The inline contents are aligned to the right edge of the line box. In vertical text, 'right' aligns to the edge of the line box that would be the end edge for left-to-right text."
					},
					{
						"name": "start",
						"desc": "The inline contents are aligned to the start edge of the line box.",
						"browsers": "C,FF1,O15,S3.1"
					}
				]
			},
			{
				"name": "text-align-last",
				"desc": "The text-align-last CSS property describes how the last line of a block or a line, right before a forced line break, is aligned.",
				"browsers": "E,FF12,IE5",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/text-align-last",
				"syntax": "div { text-align-last: right; }",
				"restriction": "enum",
				"values": [
					{
						"name": "auto",
						"desc": "Content on the affected line is aligned per 'text-align' unless 'text-align' is set to 'justify', in which case it is 'start-aligned'."
					},
					{
						"name": "center",
						"desc": "The inline contents are centered within the line box."
					},
					{
						"name": "justify",
						"desc": "The text is justified according to the method specified by the 'text-justify' property."
					},
					{
						"name": "left",
						"desc": "The inline contents are aligned to the left edge of the line box. In vertical text, 'left' aligns to the edge of the line box that would be the start edge for left-to-right text."
					},
					{
						"name": "right",
						"desc": "The inline contents are aligned to the right edge of the line box. In vertical text, 'right' aligns to the edge of the line box that would be the end edge for left-to-right text."
					}
				]
			},
			{
				"name": "text-anchor",
				"desc": "Used to align (start-, middle- or end-alignment) a string of text relative to a given point.",
				"ref": "http://www.w3.org/TR/SVG2/text.html#TextAnchorProperty",
				"restriction": "enum",
				"values": [
					{
						"name": "end",
						"desc": "The rendered characters are aligned such that the end of the resulting rendered text is at the initial current text position."
					},
					{
						"name": "middle",
						"desc": "The rendered characters are aligned such that the geometric middle of the resulting rendered text is at the initial current text position."
					},
					{
						"name": "start",
						"desc": "The rendered characters are aligned such that the start of the resulting rendered text is at the initial current text position."
					}
				]
			},
			{
				"name": "text-decoration",
				"desc": "The text-decoration CSS property is used to set the text formatting to underline, overline, line-through or blink. Underline and overline decorations are positioned under the text, line-through over it.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration",
				"syntax": "a:visited { text-decoration: line-through; }",
				"restriction": "enum, color",
				"values": [
					{
						"name": "dashed"
					},
					{
						"name": "dotted"
					},
					{
						"name": "double"
					},
					{
						"name": "line-through"
					},
					{
						"name": "overline"
					},
					{
						"name": "solid"
					},
					{
						"name": "underline"
					},
					{
						"name": "wavy"
					}
				]
			},
			{
				"name": "text-decoration-line",
				"desc": "The text-decoration-line CSS property sets what kind of line decorations are added to an element.",
				"browsers": "FF36",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-line",
				"syntax": "div { text-decoration-line: underline; }",
				"restriction": "enum",
				"values": [
					{
						"name": "line-through"
					},
					{
						"name": "none",
						"desc": "Neither produces nor inhibits text decoration."
					},
					{
						"name": "overline"
					},
					{
						"name": "underline"
					}
				]
			},
			{
				"name": "text-decoration-style",
				"desc": "The text-decoration-style CSS property defines the style of the lines specified by text-decoration-line. The style applies to all lines: there is no way to define different styles for each of the lines defined by text-decoration-line.",
				"browsers": "FF36",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-style",
				"syntax": "div { text-decoration-style: solid; }",
				"restriction": "enum",
				"values": [
					{
						"name": "dashed"
					},
					{
						"name": "dotted"
					},
					{
						"name": "double"
					},
					{
						"name": "none",
						"desc": "Produces no line."
					},
					{
						"name": "solid"
					},
					{
						"name": "wavy"
					}
				]
			},
			{
				"name": "text-indent",
				"desc": "Specifies the indentation applied to lines of inline content in a block. The indentation only affects the first line of inline content in the block unless the 'hanging' keyword is specified, in which case it affects all lines except the first.",
				"ref": "http://www.w3.org/TR/css3-text/#text-indent0",
				"syntax": "li { text-indent: 5px; }",
				"restriction": "percentage, length",
				"values": []
			},
			{
				"name": "text-justify",
				"desc": "Selects the justification algorithm used when 'text-align' is set to 'justify'. The property applies to block containers, but the UA may (but is not required to) also support it on inline elements.",
				"browsers": "E,IE5.5",
				"ref": "http://www.w3.org/TR/css3-text/#text-justify0",
				"syntax": "div { text-justify: inter-word; }",
				"restriction": "enum",
				"values": [
					{
						"name": "auto",
						"desc": "The UA determines the justification algorithm to follow, based on a balance between performance and adequate presentation quality."
					},
					{
						"name": "distribute",
						"desc": "Justification primarily changes spacing both at word separators and at grapheme cluster boundaries in all scripts except those in the connected and cursive groups. This value is sometimes used in e.g. Japanese, often with the 'text-align-last' property."
					},
					{
						"name": "distribute-all-lines"
					},
					{
						"name": "inter-cluster"
					},
					{
						"name": "inter-ideograph"
					},
					{
						"name": "inter-word"
					},
					{
						"name": "kashida"
					},
					{
						"name": "newspaper"
					}
				]
			},
			{
				"name": "text-orientation",
				"desc": "The text-orientation CSS property defines the orientation of the text in a line. This property only has an effect in vertical mode, that is when writing-mode is not horizontal-tb. It is useful to control the display of writing in languages using vertical script, but also to deal with vertical table headers.",
				"browsers": "C,O15,S5.1",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/text-orientation",
				"syntax": "span { text-orientation: mixed; }",
				"restriction": "enum",
				"values": [
					{
						"name": "sideways",
						"browsers": "C25,O15,S6.1"
					},
					{
						"name": "sideways-right",
						"browsers": "C25,O15,S6.1"
					},
					{
						"name": "upright"
					}
				]
			},
			{
				"name": "text-overflow",
				"desc": "The text-overflow CSS property determines how overflowed content that is not displayed is signaled to users. It can be clipped, display an ellipsis ('…', U+2026 Horizontal Ellipsis), or display a custom string.",
				"browsers": "E,C,FF9,IE5.5,O11.6,S2",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow",
				"syntax": "span { text-overflow: ellipsis; }",
				"restriction": "enum, string",
				"values": [
					{
						"name": "clip"
					},
					{
						"name": "ellipsis"
					}
				]
			},
			{
				"name": "text-rendering",
				"desc": "The text-rendering CSS property provides information to the rendering engine about what to optimize for when rendering text.",
				"browsers": "C,FF3,O9,S5",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/text-rendering",
				"restriction": "enum",
				"values": [
					{
						"name": "auto"
					},
					{
						"name": "geometricPrecision"
					},
					{
						"name": "optimizeLegibility"
					},
					{
						"name": "optimizeSpeed",
						"desc": "Indicates that the user agent shall emphasize rendering speed over legibility and geometric precision."
					}
				]
			},
			{
				"name": "text-shadow",
				"desc": "The text-shadow property adds shadows to text. It accepts a comma-separated list of shadows to be applied to the text and text-decorations of the element.",
				"browsers": "E,C,FF3.6,IE10,O9.5,S1.1",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow",
				"syntax": "h1 { text-shadow: 20px 12px 2px #333;}",
				"restriction": "length, color",
				"values": []
			},
			{
				"name": "text-transform",
				"desc": "The text-transform CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform",
				"syntax": "h1 { text-transform: capitalize; }",
				"restriction": "enum",
				"values": [
					{
						"name": "capitalize"
					},
					{
						"name": "lowercase"
					},
					{
						"name": "none",
						"desc": "No effects."
					},
					{
						"name": "uppercase"
					}
				]
			},
			{
				"name": "text-underline-position",
				"desc": "The CSS text-underline-position property specifies the position of the underline which is set using the text-decoration property underline value.",
				"browsers": "E,IE10",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/text-underline-position",
				"syntax": "article { text-underline-position: auto; }",
				"restriction": "enum",
				"values": [
					{
						"name": "above"
					},
					{
						"name": "auto",
						"desc": "The user agent may use any algorithm to determine the underline’s position. In horizontal line layout, the underline should be aligned as for alphabetic. In vertical line layout, if the language is set to Japanese or Korean, the underline should be aligned as for over."
					},
					{
						"name": "below",
						"desc": "The underline is aligned with the under edge of the element’s content box."
					}
				]
			},
			{
				"name": "top",
				"desc": "The top CSS property specifies part of the position of positioned elements. It has no effect on non-positioned elements.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/top",
				"syntax": "article { top: 50px; }",
				"restriction": "length, percentage",
				"values": [
					{
						"name": "auto",
						"desc": "For non-replaced elements, the effect of this value depends on which of related properties have the value 'auto' as well"
					}
				]
			},
			{
				"name": "touch-action",
				"desc": "The touch-action CSS property specifies whether, and in what ways, a given region can be manipulated by the user (for instance, by panning or zooming).",
				"browsers": "E,C36,IE11,O23",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action",
				"syntax": "div { touch-action: pan-x; }",
				"restriction": "enum",
				"values": [
					{
						"name": "auto",
						"desc": "The user agent may determine any permitted touch behaviors for touches that begin on the element."
					},
					{
						"name": "cross-slide-x",
						"browsers": "E,IE11"
					},
					{
						"name": "cross-slide-y",
						"browsers": "E,IE11"
					},
					{
						"name": "double-tap-zoom",
						"browsers": "E,IE11"
					},
					{
						"name": "manipulation",
						"desc": "The user agent may consider touches that begin on the element only for the purposes of scrolling and continuous zooming."
					},
					{
						"name": "none",
						"desc": "Touches that begin on the element must not trigger default touch behaviors."
					},
					{
						"name": "pan-x",
						"desc": "The user agent may consider touches that begin on the element only for the purposes of horizontally scrolling the element’s nearest ancestor with horizontally scrollable content."
					},
					{
						"name": "pan-y",
						"desc": "The user agent may consider touches that begin on the element only for the purposes of vertically scrolling the element’s nearest ancestor with vertically scrollable content."
					},
					{
						"name": "pinch-zoom",
						"browsers": "E,IE11"
					}
				]
			},
			{
				"name": "transform",
				"desc": "The CSS transform property lets you modify the coordinate space of the CSS visual formatting model. Using it, elements can be translated, rotated, scaled, and skewed.",
				"browsers": "E,C36,FF16,IE10,O12.1,S9",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/transform",
				"syntax": "div { transform: rotate(-90deg); }",
				"restriction": "enum",
				"values": [
					{
						"name": "matrix()"
					},
					{
						"name": "matrix3d()"
					},
					{
						"name": "none"
					},
					{
						"name": "perspective()"
					},
					{
						"name": "rotate()"
					},
					{
						"name": "rotate3d()"
					},
					{
						"name": "rotateX('angle')"
					},
					{
						"name": "rotateY('angle')"
					},
					{
						"name": "rotateZ('angle')"
					},
					{
						"name": "scale()"
					},
					{
						"name": "scale3d()"
					},
					{
						"name": "scaleX()"
					},
					{
						"name": "scaleY()"
					},
					{
						"name": "scaleZ()"
					},
					{
						"name": "skew()"
					},
					{
						"name": "skewX()"
					},
					{
						"name": "skewY()"
					},
					{
						"name": "translate()"
					},
					{
						"name": "translate3d()"
					},
					{
						"name": "translateX()"
					},
					{
						"name": "translateY()"
					},
					{
						"name": "translateZ()"
					}
				]
			},
			{
				"name": "transform-origin",
				"desc": "The transform-origin property lets you modify the origin for transformations of an element. For example, the transform-origin of the rotate() function is the centre of rotation. (This property is applied by first translating the element by the negated value of the property, then applying the element's transform, then translating by the property value.)",
				"browsers": "E,C36,FF16,IE10,O12.1,S9",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin",
				"syntax": ".album { transform-origin: 20% 40%; }",
				"restriction": "position, length, percentage"
			},
			{
				"name": "transform-style",
				"desc": "The transform-style CSS property determines if the children of the element are positioned in the 3D-space or are flattened in the plane of the element.",
				"browsers": "E,C36,FF16,IE10,O23,S9",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-style",
				"syntax": "div { transform-style: flat; }",
				"restriction": "enum",
				"values": [
					{
						"name": "flat"
					},
					{
						"name": "preserve-3d",
						"browsers": "E,C36,FF16,O23,S9"
					}
				]
			},
			{
				"name": "transition",
				"desc": "The transition CSS property is a shorthand property for transition-property, transition-duration, transition-timing-function, and transition-delay. It enables you to define the transition between two states of an element. Different states may be defined using pseudo-classes like :hover or :active or dynamically set using JavaScript.",
				"browsers": "E,FF16,IE10,O12.5",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/transition",
				"syntax": "div { transition: background-color linear 1s; }",
				"restriction": "time, property, timing-function, enum",
				"values": [
					{
						"name": "all",
						"desc": "Every property that is able to undergo a transition will do so."
					},
					{
						"name": "none",
						"desc": "No property will transition."
					}
				]
			},
			{
				"name": "transition-delay",
				"desc": "The transition-delay CSS property specifies the amount of time to wait between a change being requested to a property that is to be transitioned and the start of the transition effect.",
				"browsers": "E,FF16,IE10,O12.5",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/transition-delay",
				"syntax": "div { transition-delay: 1s; }",
				"restriction": "time"
			},
			{
				"name": "transition-duration",
				"desc": "The transition-duration CSS property specifies the number of seconds or milliseconds a transition animation should take to complete. By default, the value is 0s, meaning that no animation will occur.",
				"browsers": "E,FF16,IE10,O12.5",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration",
				"syntax": "div { transition-duration: 1s; }",
				"restriction": "time"
			},
			{
				"name": "transition-property",
				"desc": "The transition-property CSS property is used to specify the names of CSS properties to which a transition effect should be applied.",
				"browsers": "E,FF16,IE10,O12.5",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property",
				"syntax": "div { transition-property: background-color; }",
				"restriction": "property",
				"values": [
					{
						"name": "all",
						"desc": "Every property that is able to undergo a transition will do so."
					},
					{
						"name": "none",
						"desc": "No property will transition."
					}
				]
			},
			{
				"name": "transition-timing-function",
				"desc": "The transition-timing-function CSS property is used to describe how the intermediate values of the CSS properties being affected by a transition effect are calculated. This in essence lets you establish an acceleration curve, so that the speed of the transition can vary over its duration.",
				"browsers": "E,FF16,IE10,O12.5",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function",
				"syntax": "div { transition-timing-function: linear; }",
				"restriction": "timing-function"
			},
			{
				"name": "unicode-bidi",
				"desc": "The unicode-bidi CSS property together with the direction property relates to the handling of bidirectional text in a document. For example, if a block of text contains both left-to-right and right-to-left text then the user-agent uses a complex Unicode algorithm to decide how to display the text. This property overrides this algorithm and allows the developer to control the text embedding.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/unicode-bidi",
				"syntax": "p { unicode-bidi: embed; }",
				"restriction": "enum",
				"values": [
					{
						"name": "bidi-override"
					},
					{
						"name": "embed"
					},
					{
						"name": "isolate",
						"desc": "The contents of the element are considered to be inside a separate, independent paragraph.",
						"browsers": "C,FF10,O15,S5.1"
					},
					{
						"name": "isolate-override",
						"browsers": "C,FF17,O15,S6.1"
					},
					{
						"name": "normal",
						"desc": "The element does not open an additional level of embedding with respect to the bidirectional algorithm. For inline-level elements, implicit reordering works across element boundaries."
					},
					{
						"name": "plaintext",
						"browsers": "C,FF10,O15,S6"
					}
				]
			},
			{
				"name": "unicode-range",
				"desc": "@font-face descriptor. Defines the set of Unicode codepoints that may be supported by the font face for which it is declared.",
				"ref": "http://www.w3.org/TR/css3-fonts/#unicode-range-desc",
				"syntax": "@font-face { unicode-range: U+26; }",
				"restriction": "unicode-range",
				"values": [
					{
						"name": "U+26"
					},
					{
						"name": "U+20-24F, U+2B0-2FF, U+370-4FF, U+1E00-1EFF, U+2000-20CF, U+2100-23FF, U+2500-26FF, U+E000-F8FF, U+FB00–FB4F"
					},
					{
						"name": "U+20-17F, U+2B0-2FF, U+2000-206F, U+20A0-20CF, U+2100-21FF, U+2600-26FF"
					},
					{
						"name": "U+20-2FF, U+370-4FF, U+1E00-20CF, U+2100-23FF, U+2500-26FF, U+FB00-FB4F, U+FFF0-FFFD"
					},
					{
						"name": "U+20-4FF, U+530-58F, U+10D0-10FF, U+1E00-23FF, U+2440-245F, U+2500-26FF, U+FB00-FB4F, U+FE20-FE2F, U+FFF0-FFFD"
					},
					{
						"name": "U+00-7F"
					},
					{
						"name": "U+80-FF"
					},
					{
						"name": "U+100-17F"
					},
					{
						"name": "U+180-24F"
					},
					{
						"name": "U+1E00-1EFF"
					},
					{
						"name": "U+250-2AF"
					},
					{
						"name": "U+370-3FF"
					},
					{
						"name": "U+1F00-1FFF"
					},
					{
						"name": "U+400-4FF"
					},
					{
						"name": "U+500-52F"
					},
					{
						"name": "U+00-52F, U+1E00-1FFF, U+2200–22FF"
					},
					{
						"name": "U+530–58F"
					},
					{
						"name": "U+590–5FF"
					},
					{
						"name": "U+600–6FF"
					},
					{
						"name": "U+750–77F"
					},
					{
						"name": "U+8A0–8FF"
					},
					{
						"name": "U+700–74F"
					},
					{
						"name": "U+900–97F"
					},
					{
						"name": "U+980–9FF"
					},
					{
						"name": "U+A00–A7F"
					},
					{
						"name": "U+A80–AFF"
					},
					{
						"name": "U+B00–B7F"
					},
					{
						"name": "U+B80–BFF"
					},
					{
						"name": "U+C00–C7F"
					},
					{
						"name": "U+C80–CFF"
					},
					{
						"name": "U+D00–D7F"
					},
					{
						"name": "U+D80–DFF"
					},
					{
						"name": "U+118A0–118FF"
					},
					{
						"name": "U+E00–E7F"
					},
					{
						"name": "U+1A20–1AAF"
					},
					{
						"name": "U+AA80–AADF"
					},
					{
						"name": "U+E80–EFF"
					},
					{
						"name": "U+F00–FFF"
					},
					{
						"name": "U+1000–109F"
					},
					{
						"name": "U+10A0–10FF"
					},
					{
						"name": "U+1200–137F"
					},
					{
						"name": "U+1380–139F"
					},
					{
						"name": "U+2D80–2DDF"
					},
					{
						"name": "U+AB00–AB2F"
					},
					{
						"name": "U+1780–17FF"
					},
					{
						"name": "U+1800–18AF"
					},
					{
						"name": "U+1B80–1BBF"
					},
					{
						"name": "U+1CC0–1CCF"
					},
					{
						"name": "U+4E00–9FD5"
					},
					{
						"name": "U+3400–4DB5"
					},
					{
						"name": "U+2F00–2FDF"
					},
					{
						"name": "U+2E80–2EFF"
					},
					{
						"name": "U+1100–11FF"
					},
					{
						"name": "U+AC00–D7AF"
					},
					{
						"name": "U+3040–309F"
					},
					{
						"name": "U+30A0–30FF"
					},
					{
						"name": "U+A5, U+4E00-9FFF, U+30??, U+FF00-FF9F"
					},
					{
						"name": "U+A4D0–A4FF"
					},
					{
						"name": "U+A000–A48F"
					},
					{
						"name": "U+A490–A4CF"
					},
					{
						"name": "U+2000-206F"
					},
					{
						"name": "U+3000–303F"
					},
					{
						"name": "U+2070–209F"
					},
					{
						"name": "U+20A0–20CF"
					},
					{
						"name": "U+2100–214F"
					},
					{
						"name": "U+2150–218F"
					},
					{
						"name": "U+2190–21FF"
					},
					{
						"name": "U+2200–22FF"
					},
					{
						"name": "U+2300–23FF"
					},
					{
						"name": "U+E000-F8FF"
					},
					{
						"name": "U+FB00–FB4F"
					},
					{
						"name": "U+FB50–FDFF"
					},
					{
						"name": "U+1F600–1F64F"
					},
					{
						"name": "U+2600–26FF"
					},
					{
						"name": "U+1F300–1F5FF"
					},
					{
						"name": "U+1F900–1F9FF"
					},
					{
						"name": "U+1F680–1F6FF"
					}
				]
			},
			{
				"name": "user-select",
				"desc": "Controls the appearance of selection.",
				"ref": "http://www.w3.org/TR/css-ui-4/#propdef-user-select",
				"syntax": "div { user-select: text; }",
				"restriction": "enum",
				"values": [
					{
						"name": "all",
						"desc": "The content of the element must be selected atomically"
					},
					{
						"name": "auto"
					},
					{
						"name": "contain",
						"desc": "UAs must not allow a selection which is started in this element to be extended outside of this element."
					},
					{
						"name": "none",
						"desc": "The UA must not allow selections to be started in this element."
					},
					{
						"name": "text",
						"desc": "The element imposes no constraint on the selection."
					}
				]
			},
			{
				"name": "vertical-align",
				"desc": "The vertical-align CSS property specifies the vertical alignment of an inline or table-cell box.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align",
				"syntax": "div { vertical-align: middle; }",
				"restriction": "percentage, length",
				"values": [
					{
						"name": "auto",
						"desc": "Align the dominant baseline of the parent box with the equivalent, or heuristically reconstructed, baseline of the element inline box."
					},
					{
						"name": "baseline",
						"desc": "Align the 'alphabetic' baseline of the element with the 'alphabetic' baseline of the parent element."
					},
					{
						"name": "bottom",
						"desc": "Align the after edge of the extended inline box with the after-edge of the line box."
					},
					{
						"name": "middle",
						"desc": "Align the 'middle' baseline of the inline element with the middle baseline of the parent."
					},
					{
						"name": "sub",
						"desc": "Lower the baseline of the box to the proper position for subscripts of the parent's box. (This value has no effect on the font size of the element's text.)"
					},
					{
						"name": "super",
						"desc": "Raise the baseline of the box to the proper position for superscripts of the parent's box. (This value has no effect on the font size of the element's text.)"
					},
					{
						"name": "text-bottom"
					},
					{
						"name": "text-top"
					},
					{
						"name": "top",
						"desc": "Align the before edge of the extended inline box with the before-edge of the line box."
					},
					{
						"name": "-webkit-baseline-middle",
						"browsers": "C,S1"
					}
				]
			},
			{
				"name": "visibility",
				"desc": "The visibility property can be used to hide an element while leaving the space where it would have been. It can also hide rows or columns of a table.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/visibility",
				"syntax": "img { visibility: hidden; }",
				"restriction": "enum",
				"values": [
					{
						"name": "collapse",
						"desc": "Table-specific. If used on elements other than rows, row groups, columns, or column groups, 'collapse' has the same meaning as 'hidden'."
					},
					{
						"name": "hidden",
						"desc": "The generated box is invisible (fully transparent, nothing is drawn), but still affects layout."
					},
					{
						"name": "visible",
						"desc": "The generated box is visible."
					}
				]
			},
			{
				"name": "-webkit-animation",
				"desc": "Shorthand property combines six of the animation properties into a single property.",
				"browsers": "C,S5",
				"ref": "http://www.w3.org/TR/css3-animations/#animation",
				"syntax": "div { -webkit-animation: movearound 4s ease 3 normal; }",
				"restriction": "time, enum, timing-function, identifier, number",
				"values": [
					{
						"name": "alternate"
					},
					{
						"name": "alternate-reverse"
					},
					{
						"name": "backwards"
					},
					{
						"name": "both",
						"desc": "Both forwards and backwards fill modes are applied."
					},
					{
						"name": "forwards"
					},
					{
						"name": "infinite",
						"desc": "Causes the animation to repeat forever."
					},
					{
						"name": "none",
						"desc": "No animation is performed"
					},
					{
						"name": "normal",
						"desc": "Normal playback."
					},
					{
						"name": "reverse",
						"desc": "All iterations of the animation are played in the reverse direction from the way they were specified."
					}
				]
			},
			{
				"name": "-webkit-animation-delay",
				"desc": "Defines when the animation will start.",
				"browsers": "C,S5",
				"ref": "http://www.w3.org/TR/css3-animations/#animation-delay",
				"syntax": "div { -webkit-animation-delay: 4s; }",
				"restriction": "time"
			},
			{
				"name": "-webkit-animation-direction",
				"desc": "Defines whether or not the animation should play in reverse on alternate cycles.",
				"browsers": "C,S5",
				"ref": "http://www.w3.org/TR/css3-animations/#animation-direction",
				"syntax": "div { -webkit-animation-direction: normal; }",
				"restriction": "enum",
				"values": [
					{
						"name": "alternate"
					},
					{
						"name": "alternate-reverse"
					},
					{
						"name": "normal",
						"desc": "Normal playback."
					},
					{
						"name": "reverse",
						"desc": "All iterations of the animation are played in the reverse direction from the way they were specified."
					}
				]
			},
			{
				"name": "-webkit-animation-duration",
				"desc": "Defines the length of time that an animation takes to complete one cycle.",
				"browsers": "C,S5",
				"ref": "http://www.w3.org/TR/css3-animations/#animation-duration",
				"syntax": "div { -webkit-animation-duration: 4s; }",
				"restriction": "time"
			},
			{
				"name": "-webkit-animation-fill-mode",
				"desc": "Defines what values are applied by the animation outside the time it is executing.",
				"browsers": "C,S5",
				"ref": "http://www.w3.org/TR/css3-animations/#animation-fill-mode-property",
				"syntax": "div { -webkit-animation-fill-mode: forwards; }",
				"restriction": "enum",
				"values": [
					{
						"name": "backwards"
					},
					{
						"name": "both",
						"desc": "Both forwards and backwards fill modes are applied."
					},
					{
						"name": "forwards"
					},
					{
						"name": "none",
						"desc": "There is no change to the property value between the time the animation is applied and the time the animation begins playing or after the animation completes."
					}
				]
			},
			{
				"name": "-webkit-animation-iteration-count",
				"desc": "Defines the number of times an animation cycle is played. The default value is one, meaning the animation will play from beginning to end once.",
				"browsers": "C,S5",
				"ref": "http://www.w3.org/TR/css3-animations/#animation-iteration-count",
				"syntax": "div { -webkit-animation-iteration-count: 3; }",
				"restriction": "number, enum",
				"values": [
					{
						"name": "infinite",
						"desc": "Causes the animation to repeat forever."
					}
				]
			},
			{
				"name": "-webkit-animation-name",
				"desc": "Defines a list of animations that apply. Each name is used to select the keyframe at-rule that provides the property values for the animation.",
				"browsers": "C,S5",
				"ref": "http://www.w3.org/TR/css3-animations/#the-animation-name-property-",
				"syntax": "div { -webkit-animation-name: movearound; }",
				"restriction": "identifier, enum",
				"values": [
					{
						"name": "none",
						"desc": "No animation is performed"
					}
				]
			},
			{
				"name": "-webkit-animation-play-state",
				"desc": "Defines whether the animation is running or paused.",
				"browsers": "C,S5",
				"ref": "http://www.w3.org/TR/css3-animations/#animation-play-state",
				"syntax": "div { -webkit-animation-play-state: running; }",
				"restriction": "enum",
				"values": [
					{
						"name": "paused"
					},
					{
						"name": "running"
					}
				]
			},
			{
				"name": "-webkit-animation-timing-function",
				"desc": "Describes how the animation will progress over one cycle of its duration. See the 'transition-timing-function'.",
				"browsers": "C,S5",
				"ref": "http://www.w3.org/TR/css3-animations/#animation-timing-function",
				"syntax": "div { -webkit-animation-timing-function: ease; }",
				"restriction": "timing-function"
			},
			{
				"name": "-webkit-appearance",
				"desc": "Changes the appearance of buttons and other controls to resemble native controls.",
				"browsers": "C,S3",
				"ref": "http://css-infos.net/property/-webkit-appearance",
				"syntax": "h3 { -webkit-appearance: button; }",
				"restriction": "enum",
				"values": [
					{
						"name": "button"
					},
					{
						"name": "button-bevel"
					},
					{
						"name": "caps-lock-indicator"
					},
					{
						"name": "caret"
					},
					{
						"name": "checkbox"
					},
					{
						"name": "default-button"
					},
					{
						"name": "listbox"
					},
					{
						"name": "listitem"
					},
					{
						"name": "media-fullscreen-button"
					},
					{
						"name": "media-mute-button"
					},
					{
						"name": "media-play-button"
					},
					{
						"name": "media-seek-back-button"
					},
					{
						"name": "media-seek-forward-button"
					},
					{
						"name": "media-slider"
					},
					{
						"name": "media-sliderthumb"
					},
					{
						"name": "menulist"
					},
					{
						"name": "menulist-button"
					},
					{
						"name": "menulist-text"
					},
					{
						"name": "menulist-textfield"
					},
					{
						"name": "none"
					},
					{
						"name": "push-button"
					},
					{
						"name": "radio"
					},
					{
						"name": "scrollbarbutton-down"
					},
					{
						"name": "scrollbarbutton-left"
					},
					{
						"name": "scrollbarbutton-right"
					},
					{
						"name": "scrollbarbutton-up"
					},
					{
						"name": "scrollbargripper-horizontal"
					},
					{
						"name": "scrollbargripper-vertical"
					},
					{
						"name": "scrollbarthumb-horizontal"
					},
					{
						"name": "scrollbarthumb-vertical"
					},
					{
						"name": "scrollbartrack-horizontal"
					},
					{
						"name": "scrollbartrack-vertical"
					},
					{
						"name": "searchfield"
					},
					{
						"name": "searchfield-cancel-button"
					},
					{
						"name": "searchfield-decoration"
					},
					{
						"name": "searchfield-results-button"
					},
					{
						"name": "searchfield-results-decoration"
					},
					{
						"name": "slider-horizontal"
					},
					{
						"name": "sliderthumb-horizontal"
					},
					{
						"name": "sliderthumb-vertical"
					},
					{
						"name": "slider-vertical"
					},
					{
						"name": "square-button"
					},
					{
						"name": "textarea"
					},
					{
						"name": "textfield"
					}
				]
			},
			{
				"name": "-webkit-backdrop-filter",
				"desc": "Applies a filter effect where the first filter in the list takes the element's background image as the input image.",
				"browsers": "S9",
				"ref": "https://drafts.fxtf.org/filters-2/#propdef-backdrop-filter",
				"syntax": "div { -webkit-backdrop-filter: blur(2px); }",
				"restriction": "enum, url",
				"values": [
					{
						"name": "none",
						"desc": "No filter effects are applied."
					},
					{
						"name": "blur()"
					},
					{
						"name": "brightness()"
					},
					{
						"name": "contrast()"
					},
					{
						"name": "drop-shadow()"
					},
					{
						"name": "grayscale()"
					},
					{
						"name": "hue-rotate()"
					},
					{
						"name": "invert()"
					},
					{
						"name": "opacity()"
					},
					{
						"name": "saturate()"
					},
					{
						"name": "sepia()"
					},
					{
						"name": "url()",
						"desc": "A filter reference to a <filter> element."
					}
				]
			},
			{
				"name": "-webkit-backface-visibility",
				"desc": "Determines whether or not the 'back' side of a transformed element is visible when facing the viewer. With an identity transform, the front side of an element faces the viewer.",
				"browsers": "C,S5",
				"ref": "http://www.w3.org/TR/css3-3d-transforms/#backface-visibility",
				"syntax": "div { -webkit-backface-visibility: hidden; }",
				"restriction": "enum",
				"values": [
					{
						"name": "hidden"
					},
					{
						"name": "visible"
					}
				]
			},
			{
				"name": "-webkit-background-clip",
				"desc": "Determines the background painting area.",
				"browsers": "C,S3",
				"ref": "http://www.w3.org/TR/css3-background/#the-background-clip",
				"syntax": "header { -webkit-background-clip: border-box; }",
				"restriction": "box"
			},
			{
				"name": "-webkit-background-composite",
				"browsers": "C,S3",
				"syntax": "div { -webkit-background-composite: padding; }",
				"restriction": "enum",
				"values": [
					{
						"name": "border"
					},
					{
						"name": "padding"
					}
				]
			},
			{
				"name": "-webkit-background-origin",
				"desc": "For elements rendered as a single box, specifies the background positioning area. For elements rendered as multiple boxes (e.g., inline boxes on several lines, boxes on several pages) specifies which boxes 'box-decoration-break' operates on to determine the background positioning area(s).",
				"browsers": "C,S3",
				"ref": "http://www.w3.org/TR/css3-background/#the-background-origin",
				"syntax": "header { -webkit-background-origin: border-box; }",
				"restriction": "box"
			},
			{
				"name": "-webkit-border-image",
				"desc": "Shorthand property for setting 'border-image-source', 'border-image-slice', 'border-image-width', 'border-image-outset' and 'border-image-repeat'. Omitted values are set to their initial values.",
				"browsers": "C,S5",
				"ref": "http://www.w3.org/TR/css3-background/#border-image",
				"syntax": "td { -webkit-border-image: url(border.png) 30 30 round;}",
				"restriction": "length, percentage, number, url, enum",
				"values": [
					{
						"name": "auto",
						"desc": "If 'auto' is specified then the border image width is the intrinsic width or height (whichever is applicable) of the corresponding image slice. If the image does not have the required intrinsic dimension then the corresponding border-width is used instead."
					},
					{
						"name": "fill",
						"desc": "Causes the middle part of the border-image to be preserved."
					},
					{
						"name": "none"
					},
					{
						"name": "repeat"
					},
					{
						"name": "round",
						"desc": "The image is tiled (repeated) to fill the area. If it does not fill the area with a whole number of tiles, the image is rescaled so that it does."
					},
					{
						"name": "space",
						"desc": "The image is tiled (repeated) to fill the area. If it does not fill the area with a whole number of tiles, the extra space is distributed around the tiles."
					},
					{
						"name": "stretch",
						"desc": "The image is stretched to fill the area."
					},
					{
						"name": "url()"
					}
				]
			},
			{
				"name": "-webkit-box-align",
				"desc": "Specifies the alignment of nested elements within an outer flexible box element.",
				"browsers": "C,S3",
				"ref": "http://css-infos.net/property/-webkit-box-align",
				"syntax": "div { -webkit-box-align: end; }",
				"restriction": "enum",
				"values": [
					{
						"name": "baseline",
						"desc": "If this box orientation is inline-axis or horizontal, all children are placed with their baselines aligned, and extra space placed before or after as necessary. For block flows, the baseline of the first non-empty line box located within the element is used. For tables, the baseline of the first cell is used."
					},
					{
						"name": "center",
						"desc": "Any extra space is divided evenly, with half placed above the child and the other half placed after the child."
					},
					{
						"name": "end",
						"desc": "For normal direction boxes, the bottom edge of each child is placed along the bottom of the box. Extra space is placed above the element. For reverse direction boxes, the top edge of each child is placed along the top of the box. Extra space is placed below the element."
					},
					{
						"name": "start",
						"desc": "For normal direction boxes, the top edge of each child is placed along the top of the box. Extra space is placed below the element. For reverse direction boxes, the bottom edge of each child is placed along the bottom of the box. Extra space is placed above the element."
					},
					{
						"name": "stretch",
						"desc": "The height of each child is adjusted to that of the containing block."
					}
				]
			},
			{
				"name": "-webkit-box-direction",
				"desc": "In webkit applications, -webkit-box-direction specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).",
				"browsers": "C,S3",
				"ref": "http://css-infos.net/property/-webkit-box-direction",
				"syntax": "div { -webkit-box-direction: reverse; }",
				"restriction": "enum",
				"values": [
					{
						"name": "normal",
						"desc": "A box with a computed value of horizontal for box-orient displays its children from left to right. A box with a computed value of vertical displays its children from top to bottom."
					},
					{
						"name": "reverse",
						"desc": "A box with a computed value of horizontal for box-orient displays its children from right to left. A box with a computed value of vertical displays its children from bottom to top."
					}
				]
			},
			{
				"name": "-webkit-box-flex",
				"desc": "Specifies an element's flexibility.",
				"browsers": "C,S3",
				"ref": "http://css-infos.net/property/-webkit-box-flex",
				"syntax": "div { -webkit-box-flex: 1; }",
				"restriction": "number"
			},
			{
				"name": "-webkit-box-flex-group",
				"desc": "Flexible elements can be assigned to flex groups using the 'box-flex-group' property.",
				"browsers": "C,S3",
				"ref": "http://css-infos.net/property/-webkit-box-flex-group",
				"syntax": "div { -webkit-box-flex-group: 4; }",
				"restriction": "integer"
			},
			{
				"name": "-webkit-box-ordinal-group",
				"desc": "Indicates the ordinal group the element belongs to. Elements with a lower ordinal group are displayed before those with a higher ordinal group.",
				"browsers": "C,S3",
				"ref": "http://css-infos.net/property/-webkit-box-ordinal-group",
				"syntax": "div { -webkit-box-ordinal-group: 3; }",
				"restriction": "integer"
			},
			{
				"name": "-webkit-box-orient",
				"desc": "In webkit applications, -webkit-box-orient specifies whether a box lays out its contents horizontally or vertically.",
				"browsers": "C,S3",
				"ref": "http://css-infos.net/property/-webkit-box-orient",
				"syntax": "div { -webkit-box-orient: vertical; }",
				"restriction": "enum",
				"values": [
					{
						"name": "block-axis"
					},
					{
						"name": "horizontal",
						"desc": "The box displays its children from left to right in a horizontal line."
					},
					{
						"name": "inline-axis"
					},
					{
						"name": "vertical",
						"desc": "The box displays its children from stacked from top to bottom vertically."
					}
				]
			},
			{
				"name": "-webkit-box-pack",
				"desc": "Specifies alignment of child elements within the current element in the direction of orientation.",
				"browsers": "C,S3",
				"ref": "http://css-infos.net/property/-webkit-box-pack",
				"syntax": "div { -webkit-box-pack: end; }",
				"restriction": "enum",
				"values": [
					{
						"name": "center",
						"desc": "The extra space is divided evenly, with half placed before the first child and the other half placed after the last child."
					},
					{
						"name": "end",
						"desc": "For normal direction boxes, the right edge of the last child is placed at the right side, with all extra space placed before the first child. For reverse direction boxes, the left edge of the first child is placed at the left side, with all extra space placed after the last child."
					},
					{
						"name": "justify",
						"desc": "The space is divided evenly in-between each child, with none of the extra space placed before the first child or after the last child. If there is only one child, treat the pack value as if it were start."
					},
					{
						"name": "start",
						"desc": "For normal direction boxes, the left edge of the first child is placed at the left side, with all extra space placed after the last child. For reverse direction boxes, the right edge of the last child is placed at the right side, with all extra space placed before the first child."
					}
				]
			},
			{
				"name": "-webkit-box-reflect",
				"desc": "The -webkit-box-reflect CSS property lets you reflect the content of an element in one specific direction.",
				"browsers": "C,S4",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-box-reflect",
				"syntax": "div { -webkit-box-reflect: below 5px; }",
				"values": [
					{
						"name": "above",
						"desc": "The reflection appears above the border box."
					},
					{
						"name": "below",
						"desc": "The reflection appears below the border box."
					},
					{
						"name": "left",
						"desc": "The reflection appears to the left of the border box."
					},
					{
						"name": "right",
						"desc": "The reflection appears to the right of the border box."
					}
				]
			},
			{
				"name": "-webkit-box-sizing",
				"desc": "Box Model addition in CSS3.",
				"browsers": "C,S3",
				"ref": "http://www.w3.org/TR/css3-ui/#box-sizing",
				"syntax": "div { -webkit-box-sizing: content-box; }",
				"restriction": "enum",
				"values": [
					{
						"name": "border-box"
					},
					{
						"name": "content-box"
					}
				]
			},
			{
				"name": "-webkit-break-after",
				"desc": "Describes the page/column break behavior before the generated box.",
				"browsers": "S7",
				"ref": "http://www.w3.org/TR/css3-multicol/#column-breaks",
				"syntax": "h2 { -webkit-break-after: column; }",
				"restriction": "enum",
				"values": [
					{
						"name": "always",
						"desc": "Always force a page break before/after the generated box."
					},
					{
						"name": "auto",
						"desc": "Neither force nor forbid a page/column break before/after the generated box."
					},
					{
						"name": "avoid",
						"desc": "Avoid a page/column break before/after the generated box."
					},
					{
						"name": "avoid-column",
						"desc": "Avoid a column break before/after the generated box."
					},
					{
						"name": "avoid-page",
						"desc": "Avoid a page break before/after the generated box."
					},
					{
						"name": "avoid-region"
					},
					{
						"name": "column",
						"desc": "Always force a column break before/after the generated box."
					},
					{
						"name": "left",
						"desc": "Force one or two page breaks before/after the generated box so that the next page is formatted as a left page."
					},
					{
						"name": "page",
						"desc": "Always force a page break before/after the generated box."
					},
					{
						"name": "region"
					},
					{
						"name": "right",
						"desc": "Force one or two page breaks before/after the generated box so that the next page is formatted as a right page."
					}
				]
			},
			{
				"name": "-webkit-break-before",
				"desc": "Describes the page/column break behavior before the generated box.",
				"browsers": "S7",
				"ref": "http://www.w3.org/TR/css3-multicol/#column-breaks",
				"syntax": "h2 { -webkit-break-before: column; }",
				"restriction": "enum",
				"values": [
					{
						"name": "always",
						"desc": "Always force a page break before/after the generated box."
					},
					{
						"name": "auto",
						"desc": "Neither force nor forbid a page/column break before/after the generated box."
					},
					{
						"name": "avoid",
						"desc": "Avoid a page/column break before/after the generated box."
					},
					{
						"name": "avoid-column",
						"desc": "Avoid a column break before/after the generated box."
					},
					{
						"name": "avoid-page",
						"desc": "Avoid a page break before/after the generated box."
					},
					{
						"name": "avoid-region"
					},
					{
						"name": "column",
						"desc": "Always force a column break before/after the generated box."
					},
					{
						"name": "left",
						"desc": "Force one or two page breaks before/after the generated box so that the next page is formatted as a left page."
					},
					{
						"name": "page",
						"desc": "Always force a page break before/after the generated box."
					},
					{
						"name": "region"
					},
					{
						"name": "right",
						"desc": "Force one or two page breaks before/after the generated box so that the next page is formatted as a right page."
					}
				]
			},
			{
				"name": "-webkit-break-inside",
				"desc": "Describes the page/column break behavior inside the generated box.",
				"browsers": "S7",
				"ref": "http://www.w3.org/TR/css3-multicol/#column-breaks",
				"syntax": "h2 { -webkit-break-inside: avoid-column; }",
				"restriction": "enum",
				"values": [
					{
						"name": "auto",
						"desc": "Neither force nor forbid a page/column break inside the generated box."
					},
					{
						"name": "avoid",
						"desc": "Avoid a page/column break inside the generated box."
					},
					{
						"name": "avoid-column",
						"desc": "Avoid a column break inside the generated box."
					},
					{
						"name": "avoid-page",
						"desc": "Avoid a page break inside the generated box."
					},
					{
						"name": "avoid-region"
					}
				]
			},
			{
				"name": "-webkit-column-break-after",
				"desc": "Describes the page/column break behavior before the generated box.",
				"browsers": "C,S3",
				"ref": "http://www.w3.org/TR/css3-multicol/#column-breaks",
				"syntax": "h2 { -webkit-column-break-after: column; }",
				"restriction": "enum",
				"values": [
					{
						"name": "always",
						"desc": "Always force a page break before/after the generated box."
					},
					{
						"name": "auto",
						"desc": "Neither force nor forbid a page/column break before/after the generated box."
					},
					{
						"name": "avoid",
						"desc": "Avoid a page/column break before/after the generated box."
					},
					{
						"name": "avoid-column",
						"desc": "Avoid a column break before/after the generated box."
					},
					{
						"name": "avoid-page",
						"desc": "Avoid a page break before/after the generated box."
					},
					{
						"name": "avoid-region"
					},
					{
						"name": "column",
						"desc": "Always force a column break before/after the generated box."
					},
					{
						"name": "left",
						"desc": "Force one or two page breaks before/after the generated box so that the next page is formatted as a left page."
					},
					{
						"name": "page",
						"desc": "Always force a page break before/after the generated box."
					},
					{
						"name": "region"
					},
					{
						"name": "right",
						"desc": "Force one or two page breaks before/after the generated box so that the next page is formatted as a right page."
					}
				]
			},
			{
				"name": "-webkit-column-break-before",
				"desc": "Describes the page/column break behavior before the generated box.",
				"browsers": "C,S3",
				"ref": "http://www.w3.org/TR/css3-multicol/#column-breaks",
				"syntax": "h2 { -webkit-column-break-before: column; }",
				"restriction": "enum",
				"values": [
					{
						"name": "always",
						"desc": "Always force a page break before/after the generated box."
					},
					{
						"name": "auto",
						"desc": "Neither force nor forbid a page/column break before/after the generated box."
					},
					{
						"name": "avoid",
						"desc": "Avoid a page/column break before/after the generated box."
					},
					{
						"name": "avoid-column",
						"desc": "Avoid a column break before/after the generated box."
					},
					{
						"name": "avoid-page",
						"desc": "Avoid a page break before/after the generated box."
					},
					{
						"name": "avoid-region"
					},
					{
						"name": "column",
						"desc": "Always force a column break before/after the generated box."
					},
					{
						"name": "left",
						"desc": "Force one or two page breaks before/after the generated box so that the next page is formatted as a left page."
					},
					{
						"name": "page",
						"desc": "Always force a page break before/after the generated box."
					},
					{
						"name": "region"
					},
					{
						"name": "right",
						"desc": "Force one or two page breaks before/after the generated box so that the next page is formatted as a right page."
					}
				]
			},
			{
				"name": "-webkit-column-break-inside",
				"desc": "Describes the page/column break behavior inside the generated box.",
				"browsers": "C,S3",
				"ref": "http://www.w3.org/TR/css3-multicol/#column-breaks",
				"syntax": "h2 { -webkit-column-break-inside: avoid-column; }",
				"restriction": "enum",
				"values": [
					{
						"name": "auto",
						"desc": "Neither force nor forbid a page/column break inside the generated box."
					},
					{
						"name": "avoid",
						"desc": "Avoid a page/column break inside the generated box."
					},
					{
						"name": "avoid-column",
						"desc": "Avoid a column break inside the generated box."
					},
					{
						"name": "avoid-page",
						"desc": "Avoid a page break inside the generated box."
					},
					{
						"name": "avoid-region"
					}
				]
			},
			{
				"name": "-webkit-column-count",
				"desc": "Describes the optimal number of columns into which the content of the element will be flowed.",
				"browsers": "C,S3",
				"ref": "http://www.w3.org/TR/css3-multicol/#column-count",
				"syntax": "div { -webkit-column-count: 3; }",
				"restriction": "integer",
				"values": [
					{
						"name": "auto",
						"desc": "Determines the number of columns by the 'column-width' property and the element width."
					}
				]
			},
			{
				"name": "-webkit-column-gap",
				"desc": "Sets the gap between columns. If there is a column rule between columns, it will appear in the middle of the gap.",
				"browsers": "C,S3",
				"ref": "http://www.w3.org/TR/css3-multicol/#column-gap0",
				"syntax": "div { -webkit-column-gap: 10px; }",
				"restriction": "length",
				"values": [
					{
						"name": "normal",
						"desc": "User agent specific and typically equivalent to 1em."
					}
				]
			},
			{
				"name": "-webkit-column-rule",
				"desc": "This property is a shorthand for setting 'column-rule-width', 'column-rule-style', and 'column-rule-color' at the same place in the style sheet. Omitted values are set to their initial values.",
				"browsers": "C,S3",
				"ref": "http://www.w3.org/TR/css3-multicol/#column-rule0",
				"syntax": "header { -webkit-column-rule: 5px solid red;}",
				"restriction": "length, line-width, line-style, color"
			},
			{
				"name": "-webkit-column-rule-color",
				"desc": "Sets the color of the column rule",
				"browsers": "C,S3",
				"ref": "http://www.w3.org/TR/css3-multicol/#column-rule-color",
				"syntax": "div { -webkit-column-rule-color: #ff0; }",
				"restriction": "color"
			},
			{
				"name": "-webkit-column-rule-style",
				"desc": "Sets the style of the rule between columns of an element.",
				"browsers": "C,S3",
				"ref": "http://www.w3.org/TR/css3-multicol/#column-rule-style",
				"syntax": "div { -webkit-column-rule-style: solid; }",
				"restriction": "line-style"
			},
			{
				"name": "-webkit-column-rule-width",
				"desc": "Sets the width of the rule between columns. Negative values are not allowed.",
				"browsers": "C,S3",
				"ref": "http://www.w3.org/TR/css3-multicol/#column-rule-width",
				"syntax": "div { -webkit-column-rule-width: 3px; }",
				"restriction": "length, line-width"
			},
			{
				"name": "-webkit-columns",
				"desc": "A shorthand property which sets both 'column-width' and 'column-count'.",
				"browsers": "C,S3",
				"ref": "http://www.w3.org/TR/css3-multicol/#columns0",
				"syntax": "div { -webkit-columns: 100px 3; }",
				"restriction": "length, integer",
				"values": [
					{
						"name": "auto",
						"desc": "The width depends on the values of other properties."
					}
				]
			},
			{
				"name": "-webkit-column-span",
				"desc": "Describes the page/column break behavior after the generated box.",
				"browsers": "C,S3",
				"ref": "http://www.w3.org/TR/css3-multicol/#column-span0",
				"syntax": "article { -webkit-column-span: all; }",
				"restriction": "enum",
				"values": [
					{
						"name": "all",
						"desc": "The element spans across all columns. Content in the normal flow that appears before the element is automatically balanced across all columns before the element appear."
					},
					{
						"name": "none",
						"desc": "The element does not span multiple columns."
					}
				]
			},
			{
				"name": "-webkit-column-width",
				"desc": "This property describes the width of columns in multicol elements.",
				"browsers": "C,S3",
				"ref": "http://www.w3.org/TR/css3-multicol/#column-width",
				"syntax": "div { -webkit-column-width: 100px; }",
				"restriction": "length",
				"values": [
					{
						"name": "auto",
						"desc": "The width depends on the values of other properties."
					}
				]
			},
			{
				"name": "-webkit-filter",
				"desc": "Processes an element’s rendering before it is displayed in the document, by applying one or more filter effects.",
				"browsers": "C18,O15,S6",
				"ref": "http://www.w3.org/TR/filter-effects/#propdef-filter",
				"syntax": "img { -webkit-filter: blur(3px); }",
				"restriction": "enum, url",
				"values": [
					{
						"name": "none",
						"desc": "No filter effects are applied."
					},
					{
						"name": "blur()"
					},
					{
						"name": "brightness()"
					},
					{
						"name": "contrast()"
					},
					{
						"name": "drop-shadow()"
					},
					{
						"name": "grayscale()"
					},
					{
						"name": "hue-rotate()"
					},
					{
						"name": "invert()"
					},
					{
						"name": "opacity()"
					},
					{
						"name": "saturate()"
					},
					{
						"name": "sepia()"
					},
					{
						"name": "url()",
						"desc": "A filter reference to a <filter> element."
					}
				]
			},
			{
				"name": "-webkit-flow-from",
				"desc": "Makes a block container a region and associates it with a named flow.",
				"browsers": "S6.1",
				"ref": "http://www.w3.org/TR/css3-regions/#flow-from",
				"syntax": "div { -webkit-flow-from: identifier; }",
				"restriction": "identifier",
				"values": [
					{
						"name": "none",
						"desc": "The block container is not a CSS Region."
					}
				]
			},
			{
				"name": "-webkit-flow-into",
				"desc": "Places an element or its contents into a named flow.",
				"browsers": "S6.1",
				"ref": "http://www.w3.org/TR/css3-regions/#flow-into",
				"syntax": "div { -webkit-flow-into: identifier; }",
				"restriction": "identifier",
				"values": [
					{
						"name": "none",
						"desc": "The element is not moved to a named flow and normal CSS processing takes place."
					}
				]
			},
			{
				"name": "-webkit-font-feature-settings",
				"desc": "This property provides low-level control over OpenType font features. It is intended as a way of providing access to font features that are not widely used but are needed for a particular use case.",
				"browsers": "C16",
				"ref": "http://www.w3.org/TR/css3-fonts/#propdef-font-feature-settings",
				"syntax": "body { -webkit-font-feature-settings: 'hwid'; }",
				"restriction": "string, integer",
				"values": [
					{
						"name": "\"c2cs\""
					},
					{
						"name": "\"dlig\""
					},
					{
						"name": "\"kern\""
					},
					{
						"name": "\"liga\""
					},
					{
						"name": "\"lnum\""
					},
					{
						"name": "\"onum\""
					},
					{
						"name": "\"smcp\""
					},
					{
						"name": "\"swsh\""
					},
					{
						"name": "\"tnum\""
					},
					{
						"name": "normal",
						"desc": "No change in glyph substitution or positioning occurs."
					},
					{
						"name": "off"
					},
					{
						"name": "on"
					}
				]
			},
			{
				"name": "-webkit-hyphens",
				"desc": "Controls whether hyphenation is allowed to create more break opportunities within a line of text.",
				"browsers": "S5.1",
				"ref": "http://www.w3.org/TR/css3-text/#hyphens0",
				"syntax": "div { -webkit-hyphens: manual; }",
				"restriction": "enum",
				"values": [
					{
						"name": "auto",
						"desc": "Conditional hyphenation characters inside a word, if present, take priority over automatic resources when determining hyphenation points within the word."
					},
					{
						"name": "manual"
					},
					{
						"name": "none",
						"desc": "Words are not broken at line breaks, even if characters inside the word suggest line break points."
					}
				]
			},
			{
				"name": "-webkit-line-break",
				"desc": "Specifies line-breaking rules for CJK (Chinese, Japanese, and Korean) text.",
				"browsers": "C,S3",
				"ref": "http://css-infos.net/property/-webkit-line-break",
				"syntax": "p { -webkit-line-break: normal; }",
				"values": [
					{
						"name": "after-white-space"
					},
					{
						"name": "normal"
					}
				]
			},
			{
				"name": "-webkit-margin-bottom-collapse",
				"browsers": "C,S3",
				"syntax": "div { -webkit-margin-bottom-collapse: collapse; }",
				"restriction": "enum",
				"values": [
					{
						"name": "collapse"
					},
					{
						"name": "discard"
					},
					{
						"name": "separate"
					}
				]
			},
			{
				"name": "-webkit-margin-collapse",
				"browsers": "C,S3",
				"syntax": "div { -webkit-margin-collapse: collapse; }",
				"restriction": "enum",
				"values": [
					{
						"name": "collapse"
					},
					{
						"name": "discard"
					},
					{
						"name": "separate"
					}
				]
			},
			{
				"name": "-webkit-margin-start",
				"browsers": "C,S3",
				"syntax": "div { -webkit-margin-start: 5px; }",
				"restriction": "percentage, length",
				"values": [
					{
						"name": "auto"
					}
				]
			},
			{
				"name": "-webkit-margin-top-collapse",
				"browsers": "C,S3",
				"syntax": "div { -webkit-margin-top-collapse: collapse; }",
				"restriction": "enum",
				"values": [
					{
						"name": "collapse"
					},
					{
						"name": "discard"
					},
					{
						"name": "separate"
					}
				]
			},
			{
				"name": "-webkit-mask-clip",
				"desc": "Determines the mask painting area, which determines the area that is affected by the mask.",
				"browsers": "C,O15,S4",
				"ref": "http://www.w3.org/TR/css-masking-1/#the-mask-clip",
				"restriction": "box"
			},
			{
				"name": "-webkit-mask-image",
				"desc": "Sets the mask layer image of an element.",
				"browsers": "C,O15,S4",
				"ref": "http://www.w3.org/TR/css-masking-1/#the-mask-image",
				"restriction": "url, image, enum",
				"values": [
					{
						"name": "none",
						"desc": "Counts as a transparent black image layer."
					},
					{
						"name": "url()",
						"desc": "Reference to a <mask element or to a CSS image."
					}
				]
			},
			{
				"name": "-webkit-mask-origin",
				"desc": "Specifies the mask positioning area.",
				"browsers": "C,O15,S4",
				"ref": "http://www.w3.org/TR/css-masking-1/#the-mask-origin",
				"restriction": "box"
			},
			{
				"name": "-webkit-mask-repeat",
				"desc": "Specifies how mask layer images are tiled after they have been sized and positioned.",
				"browsers": "C,O15,S4",
				"ref": "http://www.w3.org/TR/css-masking-1/#the-mask-repeat",
				"restriction": "repeat"
			},
			{
				"name": "-webkit-mask-size",
				"desc": "Specifies the size of the mask layer images.",
				"browsers": "C,O15,S4",
				"ref": "http://www.w3.org/TR/css-masking-1/#the-mask-size",
				"restriction": "length, percentage, enum",
				"values": [
					{
						"name": "auto",
						"desc": "Resolved by using the image’s intrinsic ratio and the size of the other dimension, or failing that, using the image’s intrinsic size, or failing that, treating it as 100%."
					},
					{
						"name": "contain",
						"desc": "Scale the image, while preserving its intrinsic aspect ratio (if any), to the largest size such that both its width and its height can fit inside the background positioning area."
					},
					{
						"name": "cover",
						"desc": "Scale the image, while preserving its intrinsic aspect ratio (if any), to the smallest size such that both its width and its height can completely cover the background positioning area."
					}
				]
			},
			{
				"name": "-webkit-nbsp-mode",
				"desc": "Defines the behavior of nonbreaking spaces within text.",
				"browsers": "C,S3",
				"ref": "http://css-infos.net/property/-webkit-nbsp-mode",
				"syntax": "p { -webkit-nbsp-mode: space; }",
				"values": [
					{
						"name": "normal"
					},
					{
						"name": "space"
					}
				]
			},
			{
				"name": "-webkit-overflow-scrolling",
				"desc": "The -webkit-overflow-scrolling CSS property controls whether or not touch devices use momentum-based scrolling for the given element.",
				"browsers": "C,S5",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-overflow-scrolling",
				"syntax": "div { -webkit-overflow-scrolling: touch; }",
				"values": [
					{
						"name": "auto"
					},
					{
						"name": "touch"
					}
				]
			},
			{
				"name": "-webkit-padding-start",
				"browsers": "C,S3",
				"syntax": "div { -webkit-padding-start: 5px; }",
				"restriction": "percentage, length"
			},
			{
				"name": "-webkit-perspective",
				"desc": "Applies the same transform as the perspective(<number>) transform function, except that it applies only to the positioned or transformed children of the element, not to the transform on the element itself.",
				"browsers": "C,S4",
				"ref": "http://www.w3.org/TR/css3-3d-transforms/#perspective",
				"syntax": "div { -webkit-perspective: none; }",
				"restriction": "length",
				"values": [
					{
						"name": "none",
						"desc": "No perspective transform is applied."
					}
				]
			},
			{
				"name": "-webkit-perspective-origin",
				"desc": "Establishes the origin for the perspective property. It effectively sets the X and Y position at which the viewer appears to be looking at the children of the element.",
				"browsers": "C,S4",
				"ref": "http://www.w3.org/TR/css3-3d-transforms/#perspective-origin",
				"syntax": "div { -webkit-perspective-origin: 10px; }",
				"restriction": "position, percentage, length"
			},
			{
				"name": "-webkit-region-fragment",
				"desc": "The 'region-fragment' property controls the behavior of the last region associated with a named flow.",
				"browsers": "S7",
				"ref": "http://dev.w3.org/csswg/css-regions/#region-fragment",
				"syntax": "article { -webkit-region-fragment: break; }",
				"restriction": "enum",
				"values": [
					{
						"name": "auto",
						"desc": "Content flows as it would in a regular content box."
					},
					{
						"name": "break"
					}
				]
			},
			{
				"name": "-webkit-tap-highlight-color",
				"desc": "-webkit-tap-highlight-color is a non-standard CSS property that sets the color of the highlight that appears over a link while it's being tapped. The highlighting indicates to the user that their tap is being successfully recognized, and indicates which element they're tapping on.",
				"browsers": "E,C,S3.1",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-tap-highlight-color",
				"restriction": "color"
			},
			{
				"name": "-webkit-text-fill-color",
				"desc": "The -webkit-text-fill-color CSS property specifies the fill color of characters of text. If this property is not set, the value of the color property is used.",
				"browsers": "E,C,S3",
				"syntax": "div { -webkit-text-fill-color: red; }",
				"restriction": "color",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-text-fill-color"
			},
			{
				"name": "-webkit-text-size-adjust",
				"desc": "Specifies a size adjustment for displaying text content in mobile browsers.",
				"browsers": "E,C,S3",
				"ref": "https://drafts.csswg.org/css-size-adjust/#text-size-adjust",
				"syntax": "div { -webkit-text-size-adjust: 60%; }",
				"restriction": "percentage",
				"values": [
					{
						"name": "auto",
						"desc": "Renderers must use the default size adjustment when displaying on a small device."
					},
					{
						"name": "none",
						"desc": "Renderers must not do size adjustment when displaying on a small device."
					}
				]
			},
			{
				"name": "-webkit-text-stroke",
				"desc": "The -webkit-text-stroke CSS property specifies the width and color of strokes for text characters. This is a shorthand property for the longhand properties -webkit-text-stroke-width and -webkit-text-stroke-color.",
				"browsers": "S3",
				"syntax": "div { -webkit-text-stroke: red 2x; }",
				"restriction": "length, line-width, color, percentage",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-text-stroke"
			},
			{
				"name": "-webkit-text-stroke-color",
				"desc": "The -webkit-text-stroke-color CSS property specifies the stroke color of characters of text. If this property is not set, the value of the color property is used.",
				"browsers": "S3",
				"syntax": "div { -webkit-text-stroke-color: red; }",
				"restriction": "color",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-text-stroke-color"
			},
			{
				"name": "-webkit-text-stroke-width",
				"desc": "The -webkit-text-stroke-width CSS property specifies the width of the stroke for text.",
				"browsers": "S3",
				"syntax": "div { -webkit-text-stroke-width: 2px; }",
				"restriction": "length, line-width, percentage",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-text-stroke-width"
			},
			{
				"name": "-webkit-touch-callout",
				"desc": "The -webkit-touch-callout CSS property controls the display of the default callout shown when you touch and hold a touch target.",
				"browsers": "S3",
				"syntax": "a { -webkit-touch-callout: none; }",
				"restriction": "enum",
				"values": [
					{
						"name": "none"
					}
				],
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-touch-callout"
			},
			{
				"name": "-webkit-transform",
				"desc": "A two-dimensional transformation is applied to an element through the 'transform' property. This property contains a list of transform functions similar to those allowed by SVG.",
				"browsers": "C,O12,S3.1",
				"ref": "http://www.w3.org/TR/css3-2d-transforms/#transform-property",
				"syntax": "div { -webkit-transform: rotate(-90deg); }",
				"restriction": "enum",
				"values": [
					{
						"name": "matrix()"
					},
					{
						"name": "matrix3d()"
					},
					{
						"name": "none"
					},
					{
						"name": "perspective()"
					},
					{
						"name": "rotate()"
					},
					{
						"name": "rotate3d()"
					},
					{
						"name": "rotateX('angle')"
					},
					{
						"name": "rotateY('angle')"
					},
					{
						"name": "rotateZ('angle')"
					},
					{
						"name": "scale()"
					},
					{
						"name": "scale3d()"
					},
					{
						"name": "scaleX()"
					},
					{
						"name": "scaleY()"
					},
					{
						"name": "scaleZ()"
					},
					{
						"name": "skew()"
					},
					{
						"name": "skewX()"
					},
					{
						"name": "skewY()"
					},
					{
						"name": "translate()"
					},
					{
						"name": "translate3d()"
					},
					{
						"name": "translateX()"
					},
					{
						"name": "translateY()"
					},
					{
						"name": "translateZ()"
					}
				]
			},
			{
				"name": "-webkit-transform-origin",
				"desc": "Establishes the origin of transformation for an element.",
				"browsers": "C,O15,S3.1",
				"ref": "http://www.w3.org/TR/css3-2d-transforms/#transform-origin",
				"syntax": ".album { -webkit-transform-origin: 20% 40%; }",
				"restriction": "position, length, percentage"
			},
			{
				"name": "-webkit-transform-origin-x",
				"desc": "The x coordinate of the origin for transforms applied to an element with respect to its border box.",
				"browsers": "C,S3.1",
				"ref": "http://www.w3.org/TR/css3-3d-transforms/#transform-origin",
				"syntax": "img { -webkit-transform-origin-x: 5px}",
				"restriction": "length, percentage"
			},
			{
				"name": "-webkit-transform-origin-y",
				"desc": "The y coordinate of the origin for transforms applied to an element with respect to its border box.",
				"browsers": "C,S3.1",
				"ref": "http://www.w3.org/TR/css3-3d-transforms/#transform-origin",
				"syntax": "img { -webkit-transform-origin-y: 5px}",
				"restriction": "length, percentage"
			},
			{
				"name": "-webkit-transform-origin-z",
				"desc": "The z coordinate of the origin for transforms applied to an element with respect to its border box.",
				"browsers": "C,S4",
				"ref": "http://www.w3.org/TR/css3-3d-transforms/#transform-origin",
				"syntax": "img { -webkit-transform-origin-z: 5px}",
				"restriction": "length, percentage"
			},
			{
				"name": "-webkit-transform-style",
				"desc": "Defines how nested elements are rendered in 3D space.",
				"browsers": "C,S4",
				"ref": "http://www.w3.org/TR/css3-3d-transforms/#transform-origin",
				"syntax": "div { -webkit-transform-style: flat; }",
				"restriction": "enum",
				"values": [
					{
						"name": "flat"
					}
				]
			},
			{
				"name": "-webkit-transition",
				"desc": "Shorthand property combines four of the transition properties into a single property.",
				"browsers": "C,O12,S5",
				"ref": "http://www.w3.org/TR/css3-transitions/#transition",
				"syntax": "div { -webkit-transition: background-color linear 1s; }",
				"restriction": "time, property, timing-function, enum",
				"values": [
					{
						"name": "all",
						"desc": "Every property that is able to undergo a transition will do so."
					},
					{
						"name": "none",
						"desc": "No property will transition."
					}
				]
			},
			{
				"name": "-webkit-transition-delay",
				"desc": "Defines when the transition will start. It allows a transition to begin execution some period of time from when it is applied.",
				"browsers": "C,O12,S5",
				"ref": "http://www.w3.org/TR/css3-transitions/#transition-delay",
				"syntax": "div { -webkit-transition-delay: 1s; }",
				"restriction": "time"
			},
			{
				"name": "-webkit-transition-duration",
				"desc": "Specifies how long the transition from the old value to the new value should take.",
				"browsers": "C,O12,S5",
				"ref": "http://www.w3.org/TR/css3-transitions/#transition-duration",
				"syntax": "div { -webkit-transition-duration: 1s; }",
				"restriction": "time"
			},
			{
				"name": "-webkit-transition-property",
				"desc": "Specifies the name of the CSS property to which the transition is applied.",
				"browsers": "C,O12,S5",
				"ref": "http://www.w3.org/TR/css3-transitions/#transition-property",
				"syntax": "div { -webkit-transition-property: background-color; }",
				"restriction": "property",
				"values": [
					{
						"name": "all",
						"desc": "Every property that is able to undergo a transition will do so."
					},
					{
						"name": "none",
						"desc": "No property will transition."
					}
				]
			},
			{
				"name": "-webkit-transition-timing-function",
				"desc": "Describes how the intermediate values used during a transition will be calculated.",
				"browsers": "C,O12,S5",
				"ref": "http://www.w3.org/TR/css3-transitions/#transition-timing-function",
				"syntax": "div { -webkit-transition-timing-function: linear; }",
				"restriction": "timing-function"
			},
			{
				"name": "-webkit-user-drag",
				"browsers": "S3",
				"syntax": "div { -webkit-user-drag: element; }",
				"restriction": "enum",
				"values": [
					{
						"name": "auto"
					},
					{
						"name": "element"
					},
					{
						"name": "none"
					}
				]
			},
			{
				"name": "-webkit-user-modify",
				"desc": "Determines whether a user can edit the content of an element.",
				"browsers": "C,S3",
				"ref": "http://css-infos.net/property/-webkit-user-modify",
				"syntax": "div { -webkit-user-modify: read-only; }",
				"restriction": "enum",
				"values": [
					{
						"name": "read-only"
					},
					{
						"name": "read-write"
					},
					{
						"name": "read-write-plaintext-only"
					}
				]
			},
			{
				"name": "-webkit-user-select",
				"desc": "Controls the appearance of selection.",
				"browsers": "C,S3",
				"ref": "http://css-infos.net/property/-webkit-user-select",
				"syntax": "div { -webkit-user-select: text; }",
				"restriction": "enum",
				"values": [
					{
						"name": "auto"
					},
					{
						"name": "none"
					},
					{
						"name": "text"
					}
				]
			},
			{
				"name": "white-space",
				"desc": "The white-space property is used to describe how whitespace inside the element is handled.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/white-space",
				"syntax": "section { white-space: nowrap; }",
				"restriction": "enum",
				"values": [
					{
						"name": "normal",
						"desc": "Sets 'white-space-collapsing' to 'collapse' and 'text-wrap' to 'normal'."
					},
					{
						"name": "nowrap",
						"desc": "Sets 'white-space-collapsing' to 'collapse' and 'text-wrap' to 'none'."
					},
					{
						"name": "pre"
					},
					{
						"name": "pre-line"
					},
					{
						"name": "pre-wrap"
					}
				]
			},
			{
				"name": "widows",
				"desc": "When a paragraph is split over two pages in paged media, the widows CSS property defines the minimum number of lines that must be left at the top of the second page. In typography, a widow is the last line of a paragraph appearing alone at the top of a new page. Setting the widows property allows the prevention of single-line widows.",
				"browsers": "C,IE8,O9.5,S1",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/widows",
				"syntax": "<integer>",
				"restriction": "integer"
			},
			{
				"name": "width",
				"desc": "The width CSS property specifies the width of the content area of an element. The content area is inside the padding, border, and margin of the element.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/width",
				"syntax": "header { width: 200px; }",
				"restriction": "length, percentage",
				"values": [
					{
						"name": "auto",
						"desc": "The width depends on the values of other properties."
					},
					{
						"name": "fit-content",
						"browsers": "C46,O33"
					},
					{
						"name": "max-content",
						"browsers": "C46,O33"
					},
					{
						"name": "min-content",
						"browsers": "C46,O33"
					}
				]
			},
			{
				"name": "will-change",
				"desc": "The will-change CSS property provides a way for authors to hint browsers about the kind of changes to be expected on an element, so that the browser can set up appropriate optimizations ahead of time before the element is actually changed. These kind of optimizations can increase the responsiveness of a page by doing potentially expensive work ahead of time before they are actually required.",
				"browsers": "C36,FF36,O24",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/will-change",
				"syntax": "body { will-change: scroll-position; }",
				"restriction": "enum, identifier",
				"values": [
					{
						"name": "auto",
						"desc": "Expresses no particular intent."
					},
					{
						"name": "contents"
					},
					{
						"name": "scroll-position"
					}
				]
			},
			{
				"name": "word-break",
				"desc": "The word-break CSS property is used to specify whether to break lines within words.",
				"browsers": "E,C,FF15,IE5,S3",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/word-break",
				"syntax": "p.album { word-break: break-all; }",
				"restriction": "enum",
				"values": [
					{
						"name": "break-all"
					},
					{
						"name": "keep-all",
						"desc": "Block characters can no longer create implied break points."
					},
					{
						"name": "normal",
						"desc": "Breaks non-CJK scripts according to their own rules."
					}
				]
			},
			{
				"name": "word-spacing",
				"desc": "The word-spacing CSS property specifies the spacing behavior between tags and words.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/word-spacing",
				"syntax": "article { word-spacing: 3px; }",
				"restriction": "length, percentage",
				"values": [
					{
						"name": "normal",
						"desc": "No additional spacing is applied. Computes to zero."
					}
				]
			},
			{
				"name": "word-wrap",
				"desc": "Specifies whether the UA may break within a word to prevent overflow when an otherwise-unbreakable string is too long to fit.",
				"ref": "http://www.w3.org/TR/css3-text/#word-wrap0",
				"syntax": "p { word-wrap: break-word; }",
				"restriction": "enum",
				"values": [
					{
						"name": "break-word",
						"desc": "An otherwise unbreakable sequence of characters may be broken at an arbitrary point if there are no otherwise-acceptable break points in the line."
					},
					{
						"name": "normal",
						"desc": "Lines may break only at allowed break points."
					}
				]
			},
			{
				"name": "writing-mode",
				"desc": "The writing-mode property defines whether lines of text are laid out horizontally or vertically and the direction in which blocks progress.",
				"browsers": "E,FF41",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/writing-mode",
				"syntax": "span { writing-mode: lr-tb; }",
				"restriction": "enum",
				"values": [
					{
						"name": "horizontal-tb"
					},
					{
						"name": "sideways-lr",
						"browsers": "FF43"
					},
					{
						"name": "sideways-rl",
						"browsers": "FF43"
					},
					{
						"name": "vertical-lr"
					},
					{
						"name": "vertical-rl"
					}
				]
			},
			{
				"name": "z-index",
				"desc": "The z-index property specifies the z-order of a positioned element and its descendants. When elements overlap, z-order determines which one covers the other. An element with a larger z-index generally covers an element with a lower one.",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/z-index",
				"syntax": "img { z-index: 3; }",
				"restriction": "integer",
				"values": [
					{
						"name": "auto",
						"desc": "The stack level of the generated box in the current stacking context is 0. The box does not establish a new stacking context unless it is the root element."
					}
				]
			},
			{
				"name": "zoom",
				"desc": "The non-standard zoom CSS property can be used to control the magnification scale of an element. transform: scale() should be used instead of this property if possible. However, unlike CSS Transforms, zoom affects the layout size of the element.",
				"browsers": "E,C,IE6,O15,S4",
				"ref": "https://developer.mozilla.org/en-US/docs/Web/CSS/zoom",
				"syntax": ".example { zoom: 1; }",
				"restriction": "enum, integer, number, percentage",
				"values": [
					{
						"name": "normal"
					}
				]
			}
		]
	}
};
	exports.descriptions = {
	"100": "Thin",
	"200": "Extra Light (Ultra Light)",
	"300": "Light",
	"400": "Normal",
	"500": "Medium",
	"600": "Semi Bold (Demi Bold)",
	"700": "Bold",
	"800": "Extra Bold (Ultra Bold)",
	"900": "Black (Heavy)",
	"alternate": "The animation cycle iterations that are odd counts are played in the normal direction, and the animation cycle iterations that are even counts are played in a reverse direction.",
	"alternate-reverse": "The animation cycle iterations that are odd counts are played in the reverse direction, and the animation cycle iterations that are even counts are played in a normal direction.",
	"backwards": "The beginning property value (as defined in the first @keyframes at-rule) is applied before the animation is displayed, during the period defined by 'animation-delay'.",
	"forwards": "The final property value (as defined in the last @keyframes at-rule) is maintained after the animation completes.",
	"paused": "A running animation will be paused.",
	"running": "Resume playback of a paused animation.",
	"multiply": "The source color is multiplied by the destination color and replaces the destination.",
	"screen": "Multiplies the complements of the backdrop and source color values, then complements the result.",
	"overlay": "Multiplies or screens the colors, depending on the backdrop color value.",
	"darken": "Selects the darker of the backdrop and source colors.",
	"lighten": "Selects the lighter of the backdrop and source colors.",
	"color-dodge": "Brightens the backdrop color to reflect the source color.",
	"color-burn": "Darkens the backdrop color to reflect the source color.",
	"hard-light": "Multiplies or screens the colors, depending on the source color value.",
	"soft-light": "Darkens or lightens the colors, depending on the source color value.",
	"difference": "Subtracts the darker of the two constituent colors from the lighter color..",
	"exclusion": "Produces an effect similar to that of the Difference mode but lower in contrast.",
	"hue": "Creates a color with the hue of the source color and the saturation and luminosity of the backdrop color.",
	"saturation": "Creates a color with the saturation of the source color and the hue and luminosity of the backdrop color.",
	"color": "Creates a color with the hue and saturation of the source color and the luminosity of the backdrop color.",
	"luminosity": "Creates a color with the luminosity of the source color and the hue and saturation of the backdrop color.",
	"repeat": "The image is tiled (repeated) to fill the area.",
	"clone": "Each box is independently wrapped with the border and padding.",
	"slice": "The effect is as though the element were rendered with no breaks present, and then sliced by the breaks afterward.",
	"inset": "Changes the drop shadow from an outer shadow (one that shadows the box onto the canvas, as if it were lifted above the canvas) to an inner shadow (one that shadows the canvas onto the box, as if the box were cut out of the canvas and shifted behind it).",
	"border-box": "The specified width and height (and respective min/max properties) on this element determine the border box of the element.",
	"content-box": "Behavior of width and height as specified by CSS2.1. The specified width and height (and respective min/max properties) apply to the width and height respectively of the content box of the element.",
	"rect()": "Specifies offsets from the edges of the border box.",
	"evenodd": "Determines the ‘insideness’ of a point on the canvas by drawing a ray from that point to infinity in any direction and counting the number of path segments from the given shape that the ray crosses.",
	"nonzero": "Determines the ‘insideness’ of a point on the canvas by drawing a ray from that point to infinity in any direction and then examining the places where a segment of the shape crosses the ray.",
	"linearRGB": "Color operations should occur in the linearized RGB color space.",
	"sRGB": "Color operations should occur in the sRGB color space.",
	"balance": "Balance content equally between columns, if possible.",
	"attr()": "The attr(n) function returns as a string the value of attribute n for the subject of the selector.",
	"counter(name)": "Counters are denoted by identifiers (see the 'counter-increment' and 'counter-reset' properties).",
	"alias": "Indicates an alias of/shortcut to something is to be created. Often rendered as an arrow with a small curved arrow next to it.",
	"all-scroll": "Indicates that the something can be scrolled in any direction. Often rendered as arrows pointing up, down, left, and right with a dot in the middle.",
	"cell": "Indicates that a cell or set of cells may be selected. Often rendered as a thick plus-sign with a dot in the middle.",
	"col-resize": "Indicates that the item/column can be resized horizontally. Often rendered as arrows pointing left and right with a vertical bar separating them.",
	"context-menu": "A context menu is available for the object under the cursor. Often rendered as an arrow with a small menu-like graphic next to it.",
	"copy": "Indicates something is to be copied. Often rendered as an arrow with a small plus sign next to it.",
	"crosshair": "A simple crosshair (e.g., short line segments resembling a '+' sign). Often used to indicate a two dimensional bitmap selection mode.",
	"e-resize": "Indicates that east edge is to be moved.",
	"ew-resize": "Indicates a bidirectional east-west resize cursor.",
	"grab": "Indicates that something can be grabbed.",
	"grabbing": "Indicates that something is being grabbed.",
	"help": "Help is available for the object under the cursor. Often rendered as a question mark or a balloon.",
	"move": "Indicates something is to be moved.",
	"-moz-grab": "Indicates that something can be grabbed.",
	"-moz-grabbing": "Indicates that something is being grabbed.",
	"-moz-zoom-in": "Indicates that something can be zoomed (magnified) in.",
	"-moz-zoom-out": "Indicates that something can be zoomed (magnified) out.",
	"ne-resize": "Indicates that movement starts from north-east corner.",
	"nesw-resize": "Indicates a bidirectional north-east/south-west cursor.",
	"no-drop": "Indicates that the dragged item cannot be dropped at the current cursor location. Often rendered as a hand or pointer with a small circle with a line through it.",
	"not-allowed": "Indicates that the requested action will not be carried out. Often rendered as a circle with a line through it.",
	"n-resize": "Indicates that north edge is to be moved.",
	"ns-resize": "Indicates a bidirectional north-south cursor.",
	"nw-resize": "Indicates that movement starts from north-west corner.",
	"nwse-resize": "Indicates a bidirectional north-west/south-east cursor.",
	"pointer": "The cursor is a pointer that indicates a link.",
	"progress": "A progress indicator. The program is performing some processing, but is different from 'wait' in that the user may still interact with the program. Often rendered as a spinning beach ball, or an arrow with a watch or hourglass.",
	"row-resize": "Indicates that the item/row can be resized vertically. Often rendered as arrows pointing up and down with a horizontal bar separating them.",
	"se-resize": "Indicates that movement starts from south-east corner.",
	"s-resize": "Indicates that south edge is to be moved.",
	"sw-resize": "Indicates that movement starts from south-west corner.",
	"vertical-text": "Indicates vertical-text that may be selected. Often rendered as a horizontal I-beam.",
	"wait": "Indicates that the program is busy and the user should wait. Often rendered as a watch or hourglass.",
	"-webkit-grab": "Indicates that something can be grabbed.",
	"-webkit-grabbing": "Indicates that something is being grabbed.",
	"-webkit-zoom-in": "Indicates that something can be zoomed (magnified) in.",
	"-webkit-zoom-out": "Indicates that something can be zoomed (magnified) out.",
	"w-resize": "Indicates that west edge is to be moved.",
	"zoom-in": "Indicates that something can be zoomed (magnified) in.",
	"zoom-out": "Indicates that something can be zoomed (magnified) out.",
	"ltr": "Left-to-right direction.",
	"rtl": "Right-to-left direction.",
	"block": "The element generates a block-level box",
	"flex": "The element generates a principal flex container box and establishes a flex formatting context.",
	"flexbox": "The element lays out its contents using flow layout (block-and-inline layout). Standardized as 'flex'.",
	"inline-block": "A block box, which itself is flowed as a single inline box, similar to a replaced element. The inside of an inline-block is formatted as a block box, and the box itself is formatted as an inline box.",
	"inline-flex": "Inline-level flex container.",
	"inline-flexbox": "Inline-level flex container. Standardized as 'inline-flex'",
	"inline-table": "Inline-level table wrapper box containing table box.",
	"list-item": "One or more block boxes and one marker box.",
	"-moz-box": "The element lays out its contents using flow layout (block-and-inline layout). Standardized as 'flex'.",
	"-moz-inline-box": "Inline-level flex container. Standardized as 'inline-flex'",
	"-ms-flexbox": "The element lays out its contents using flow layout (block-and-inline layout). Standardized as 'flex'.",
	"-ms-grid": "The element generates a principal grid container box, and establishes a grid formatting context.",
	"-ms-inline-flexbox": "Inline-level flex container. Standardized as 'inline-flex'",
	"-ms-inline-grid": "Inline-level grid container.",
	"run-in": "The element generates a run-in box. Run-in elements act like inlines or blocks, depending on the surrounding elements.",
	"table": "The element generates a principal table wrapper box containing an additionally-generated table box, and establishes a table formatting context.",
	"-webkit-box": "The element lays out its contents using flow layout (block-and-inline layout). Standardized as 'flex'.",
	"-webkit-flex": "The element lays out its contents using flow layout (block-and-inline layout).",
	"-webkit-inline-box": "Inline-level flex container. Standardized as 'inline-flex'",
	"-webkit-inline-flex": "Inline-level flex container.",
	"hide": "No borders or backgrounds are drawn around/behind empty cells.",
	"show": "Borders and backgrounds are drawn around/behind empty cells (like normal cells).",
	"accumulate": "If the ancestor container element has a property of new, then all graphics elements within the current container are rendered both on the parent's background image and onto the target.",
	"new": "Create a new background image canvas. All children of the current container element can access the background, and they will be rendered onto both the parent's background image canvas in addition to the target device.",
	"blur()": "Applies a Gaussian blur to the input image.",
	"brightness()": "Applies a linear multiplier to input image, making it appear more or less bright.",
	"contrast()": "Adjusts the contrast of the input.",
	"drop-shadow()": "Applies a drop shadow effect to the input image.",
	"grayscale()": "Converts the input image to grayscale.",
	"hue-rotate()": "Applies a hue rotation on the input image. ",
	"invert()": "Inverts the samples in the input image.",
	"opacity()": "Applies transparency to the samples in the input image.",
	"saturate()": "Saturates the input image.",
	"sepia()": "Converts the input image to sepia.",
	"content": "Indicates automatic sizing, based on the flex item’s content.",
	"column-reverse": "Same as 'column', except the main-start and main-end directions are swapped.",
	"row": "The flex container’s main axis has the same orientation as the inline axis of the current writing mode.",
	"row-reverse": "Same as 'row', except the main-start and main-end directions are swapped.",
	"wrap-reverse": "Same as 'wrap', except the cross-start and cross-end directions are swapped.",
	"bold": "Same as 700",
	"bolder": "Specifies the weight of the face bolder than the inherited value.",
	"caption": "The font used for captioned controls (e.g., buttons, drop-downs, etc.).",
	"lighter": "Specifies the weight of the face lighter than the inherited value.",
	"menu": "The font used in menus (e.g., dropdown menus and menu lists).",
	"message-box": "The font used in dialog boxes.",
	"small-caption": "The font used for labeling small controls.",
	"status-bar": "The font used in window status bars.",
	"\"aalt\"": "Access All Alternates.",
	"\"abvf\"": "Above-base Forms. Required in Khmer script.",
	"\"abvm\"": "Above-base Mark Positioning. Required in Indic scripts.",
	"\"abvs\"": "Above-base Substitutions. Required in Indic scripts.",
	"\"afrc\"": "Alternative Fractions.",
	"\"akhn\"": "Akhand. Required in most Indic scripts.",
	"\"blwf\"": "Below-base Form. Required in a number of Indic scripts.",
	"\"blwm\"": "Below-base Mark Positioning. Required in Indic scripts.",
	"\"blws\"": "Below-base Substitutions. Required in Indic scripts.",
	"\"calt\"": "Contextual Alternates.",
	"\"case\"": "Case-Sensitive Forms. Applies only to European scripts; particularly prominent in Spanish-language setting.",
	"\"ccmp\"": "Glyph Composition/Decomposition.",
	"\"cfar\"": "Conjunct Form After Ro. Required in Khmer scripts.",
	"\"cjct\"": "Conjunct Forms. Required in Indic scripts that show similarity to Devanagari.",
	"\"clig\"": "Contextual Ligatures.",
	"\"cpct\"": "Centered CJK Punctuation. Used primarily in Chinese fonts.",
	"\"cpsp\"": "Capital Spacing. Should not be used in connecting scripts (e.g. most Arabic).",
	"\"cswh\"": "Contextual Swash.",
	"\"curs\"": "Cursive Positioning. Can be used in any cursive script.",
	"\"c2pc\"": "Petite Capitals From Capitals. Applies only to bicameral scripts.",
	"\"dist\"": "Distances. Required in Indic scripts.",
	"\"dnom\"": "Denominators.",
	"\"dtls\"": "Dotless Forms. Applied to math formula layout.",
	"\"expt\"": "Expert Forms. Applies only to Japanese.",
	"\"falt\"": "Final Glyph on Line Alternates. Can be used in any cursive script.",
	"\"fin2\"": "Terminal Form #2. Used only with the Syriac script.",
	"\"fin3\"": "Terminal Form #3. Used only with the Syriac script.",
	"\"fina\"": "Terminal Forms. Can be used in any alphabetic script.",
	"\"flac\"": "Flattened ascent forms. Applied to math formula layout.",
	"\"frac\"": "Fractions.",
	"\"fwid\"": "Full Widths. Applies to any script which can use monospaced forms.",
	"\"half\"": "Half Forms. Required in Indic scripts that show similarity to Devanagari.",
	"\"haln\"": "Halant Forms. Required in Indic scripts.",
	"\"halt\"": "Alternate Half Widths. Used only in CJKV fonts.",
	"\"hist\"": "Historical Forms.",
	"\"hkna\"": "Horizontal Kana Alternates. Applies only to fonts that support kana (hiragana and katakana).",
	"\"hlig\"": "Historical Ligatures.",
	"\"hngl\"": "Hangul. Korean only.",
	"\"hojo\"": "Hojo Kanji Forms (JIS X 0212-1990 Kanji Forms). Used only with Kanji script.",
	"\"hwid\"": "Half Widths. Generally used only in CJKV fonts.",
	"\"init\"": "Initial Forms. Can be used in any alphabetic script.",
	"\"isol\"": "Isolated Forms. Can be used in any cursive script.",
	"\"ital\"": "Italics. Applies mostly to Latin; note that many non-Latin fonts contain Latin as well.",
	"\"jalt\"": "Justification Alternates. Can be used in any cursive script.",
	"\"jp78\"": "JIS78 Forms. Applies only to Japanese.",
	"\"jp83\"": "JIS83 Forms. Applies only to Japanese.",
	"\"jp90\"": "JIS90 Forms. Applies only to Japanese.",
	"\"jp04\"": "JIS2004 Forms. Applies only to Japanese.",
	"\"lfbd\"": "Left Bounds.",
	"\"ljmo\"": "Leading Jamo Forms. Required for Hangul script when Ancient Hangul writing system is supported.",
	"\"locl\"": "Localized Forms.",
	"\"ltra\"": "Left-to-right glyph alternates.",
	"\"ltrm\"": "Left-to-right mirrored forms.",
	"\"mark\"": "Mark Positioning.",
	"\"med2\"": "Medial Form #2. Used only with the Syriac script.",
	"\"medi\"": "Medial Forms.",
	"\"mgrk\"": "Mathematical Greek.",
	"\"mkmk\"": "Mark to Mark Positioning.",
	"\"nalt\"": "Alternate Annotation Forms.",
	"\"nlck\"": "NLC Kanji Forms. Used only with Kanji script.",
	"\"nukt\"": "Nukta Forms. Required in Indic scripts..",
	"\"numr\"": "Numerators.",
	"\"opbd\"": "Optical Bounds.",
	"\"ordn\"": "Ordinals. Applies mostly to Latin script.",
	"\"ornm\"": "Ornaments.",
	"\"palt\"": "Proportional Alternate Widths. Used mostly in CJKV fonts.",
	"\"pcap\"": "Petite Capitals.",
	"\"pkna\"": "Proportional Kana. Generally used only in Japanese fonts.",
	"\"pnum\"": "Proportional Figures.",
	"\"pref\"": "Pre-base Forms. Required in Khmer and Myanmar (Burmese) scripts and southern Indic scripts that may display a pre-base form of Ra.",
	"\"pres\"": "Pre-base Substitutions. Required in Indic scripts.",
	"\"pstf\"": "Post-base Forms. Required in scripts of south and southeast Asia that have post-base forms for consonants eg: Gurmukhi, Malayalam, Khmer.",
	"\"psts\"": "Post-base Substitutions.",
	"\"pwid\"": "Proportional Widths.",
	"\"qwid\"": "Quarter Widths. Generally used only in CJKV fonts.",
	"\"rand\"": "Randomize.",
	"\"rclt\"": "Required Contextual Alternates. May apply to any script, but is especially important for many styles of Arabic.",
	"\"rlig\"": "Required Ligatures. Applies to Arabic and Syriac. May apply to some other scripts.",
	"\"rkrf\"": "Rakar Forms. Required in Devanagari and Gujarati scripts.",
	"\"rphf\"": "Reph Form. Required in Indic scripts. E.g. Devanagari, Kannada.",
	"\"rtbd\"": "Right Bounds.",
	"\"rtla\"": "Right-to-left alternates.",
	"\"rtlm\"": "Right-to-left mirrored forms.",
	"\"ruby\"": "Ruby Notation Forms. Applies only to Japanese.",
	"\"salt\"": "Stylistic Alternates.",
	"\"sinf\"": "Scientific Inferiors.",
	"\"size\"": "Optical size.",
	"\"smpl\"": "Simplified Forms. Applies only to Chinese and Japanese.",
	"\"ssty\"": "Math script style alternates.",
	"\"stch\"": "Stretching Glyph Decomposition.",
	"\"subs\"": "Subscript.",
	"\"sups\"": "Superscript.",
	"\"titl\"": "Titling.",
	"\"tjmo\"": "Trailing Jamo Forms. Required for Hangul script when Ancient Hangul writing system is supported.",
	"\"tnam\"": "Traditional Name Forms. Applies only to Japanese.",
	"\"trad\"": "Traditional Forms. Applies only to Chinese and Japanese.",
	"\"twid\"": "Third Widths. Generally used only in CJKV fonts.",
	"\"unic\"": "Unicase.",
	"\"valt\"": "Alternate Vertical Metrics. Applies only to scripts with vertical writing modes.",
	"\"vatu\"": "Vattu Variants. Used for Indic scripts. E.g. Devanagari.",
	"\"vert\"": "Vertical Alternates. Applies only to scripts with vertical writing modes.",
	"\"vhal\"": "Alternate Vertical Half Metrics. Used only in CJKV fonts.",
	"\"vjmo\"": "Vowel Jamo Forms. Required for Hangul script when Ancient Hangul writing system is supported.",
	"\"vkna\"": "Vertical Kana Alternates. Applies only to fonts that support kana (hiragana and katakana).",
	"\"vkrn\"": "Vertical Kerning.",
	"\"vpal\"": "Proportional Alternate Vertical Metrics. Used mostly in CJKV fonts.",
	"\"vrt2\"": "Vertical Alternates and Rotation. Applies only to scripts with vertical writing modes.",
	"\"zero\"": "Slashed Zero.",
	"narrower": "Indicates a narrower value relative to the width of the parent element.",
	"wider": "Indicates a wider value relative to the width of the parent element.",
	"style": "Allow synthetic italic faces.",
	"weight": "Allow synthetic bold faces.",
	"annotation()": "Enables display of alternate annotation forms.",
	"character-variant()": "Enables display of specific character variants.",
	"historical-forms": "Enables display of historical forms.",
	"ornaments()": "Enables replacement of default glyphs with ornaments, if provided in the font.",
	"styleset()": "Enables display with stylistic sets.",
	"stylistic()": "Enables display of stylistic alternates.",
	"swash()": "Enables display of swash glyphs.",
	"all-petite-caps": "Enables display of petite capitals for both upper and lowercase letters.",
	"all-small-caps": "Enables display of small capitals for both upper and lowercase letters.",
	"petite-caps": "Enables display of petite capitals.",
	"titling-caps": "Enables display of titling capitals.",
	"unicase": "Enables display of mixture of small capitals for uppercase letters with normal lowercase letters.",
	"full-width": "Enables rendering of full-width variants.",
	"jis04": "Enables rendering of JIS04 forms.",
	"jis78": "Enables rendering of JIS78 forms.",
	"jis83": "Enables rendering of JIS83 forms.",
	"jis90": "Enables rendering of JIS90 forms.",
	"proportional-width": "Enables rendering of proportionally-spaced variants.",
	"simplified": "Enables rendering of simplified forms.",
	"traditional": "Enables rendering of traditional forms.",
	"additional-ligatures": "Enables display of additional ligatures.",
	"common-ligatures": "Enables display of common ligatures.",
	"contextual": "Enables display of contextual alternates.",
	"discretionary-ligatures": "Enables display of discretionary ligatures.",
	"historical-ligatures": "Enables display of historical ligatures.",
	"no-additional-ligatures": "Disables display of additional ligatures.",
	"no-common-ligatures": "Disables display of common ligatures.",
	"no-contextual": "Disables display of contextual alternates.",
	"no-discretionary-ligatures": "Disables display of discretionary ligatures.",
	"no-historical-ligatures": "Disables display of historical ligatures.",
	"diagonal-fractions": "Enables display of lining diagonal fractions.",
	"lining-nums": "Enables display of lining numerals.",
	"oldstyle-nums": "Enables display of old-style numerals.",
	"ordinal": "Enables display of letter forms used with ordinal numbers.",
	"proportional-nums": "Enables display of proportional numerals.",
	"slashed-zero": "Enables display of slashed zeros.",
	"stacked-fractions": "Enables display of lining stacked fractions.",
	"tabular-nums": "Enables display of tabular numerals.",
	"fit-content": "Use the fit-content inline size or fit-content block size, as appropriate to the writing mode.",
	"max-content": "Use the max-content inline size or max-content block size, as appropriate to the writing mode.",
	"min-content": "Use the min-content inline size or min-content block size, as appropriate to the writing mode.",
	"flip": "After rotating by the precededing angle, the image is flipped horizontally. Defaults to 0deg if the angle is ommitted.",
	"from-image": "If the image has an orientation specified in its metadata, such as EXIF, this value computes to the angle that the metadata specifies is necessary to correctly orient the image.",
	"crisp-edges": "The image must be scaled with an algorithm that preserves contrast and edges in the image, and which does not smooth colors or introduce blur to the image in the process.",
	"optimizeQuality": "Deprecated.",
	"pixelated": "When scaling the image up, the 'nearest neighbor' or similar algorithm must be used, so that the image appears to be simply composed of very large pixels.",
	"active": "The input method editor is initially active; text entry is performed using it unless the user specifically dismisses it.",
	"disabled": "The input method editor is disabled and may not be activated by the user.",
	"inactive": "The input method editor is initially inactive, but the user may activate it if they wish.",
	"circle": "A hollow circle.",
	"disc": "A filled circle.",
	"inside": "The marker box is outside the principal block box, as described in the section on the ::marker pseudo-element below.",
	"outside": "The ::marker pseudo-element is an inline element placed immediately before all ::before pseudo-elements in the principal block box, after which the element's content flows.",
	"symbols()": "Allows a counter style to be defined inline.",
	"alpha": "Indicates that the alpha values of the mask should be used.",
	"luminance": "Indicates that the luminance values of the mask should be used.",
	"path()": "Defines an SVG path as a string, with optional 'fill-rule' as the first argument.",
	"block-axis": "Elements are oriented along the box's axis.",
	"inline-axis": "Elements are oriented vertically.",
	"padding-box": "The specified width and height (and respective min/max properties) on this element determine the padding box of the element.",
	"manual": "Words are only broken at line breaks where there are characters inside the word that suggest line break opportunities",
	"line-through": "Each line of text has a line through the middle.",
	"overline": "Each line of text has a line above it.",
	"underline": "Each line of text is underlined.",
	"dashed": "Produces a dashed line style.",
	"dotted": "Produces a dotted line.",
	"double": "Produces a double line.",
	"solid": "Produces a solid line.",
	"wavy": "Produces a wavy line.",
	"matrix()": "Specifies a 2D transformation in the form of a transformation matrix of six values. matrix(a,b,c,d,e,f) is equivalent to applying the transformation matrix [a b c d e f]",
	"matrix3d()": "Specifies a 3D transformation as a 4x4 homogeneous matrix of 16 values in column-major order.",
	"perspective": "Specifies a perspective projection matrix.",
	"rotate()": "Specifies a 2D rotation by the angle specified in the parameter about the origin of the element, as defined by the transform-origin property.",
	"rotate3d()": "Specifies a clockwise 3D rotation by the angle specified in last parameter about the [x,y,z] direction vector described by the first 3 parameters.",
	"rotateX('angle')": "Specifies a clockwise rotation by the given angle about the X axis.",
	"rotateY('angle')": "Specifies a clockwise rotation by the given angle about the Y axis.",
	"rotateZ('angle')": "Specifies a clockwise rotation by the given angle about the Z axis.",
	"scale()": "Specifies a 2D scale operation by the [sx,sy] scaling vector described by the 2 parameters. If the second parameter is not provided, it is takes a value equal to the first.",
	"scale3d()": "Specifies a 3D scale operation by the [sx,sy,sz] scaling vector described by the 3 parameters.",
	"scaleX()": "Specifies a scale operation using the [sx,1] scaling vector, where sx is given as the parameter.",
	"scaleY()": "Specifies a scale operation using the [sy,1] scaling vector, where sy is given as the parameter.",
	"scaleZ()": "Specifies a scale operation using the [1,1,sz] scaling vector, where sz is given as the parameter.",
	"skew()": "Specifies a skew transformation along the X and Y axes. The first angle parameter specifies the skew on the X axis. The second angle parameter specifies the skew on the Y axis. If the second parameter is not given then a value of 0 is used for the Y angle (ie: no skew on the Y axis).",
	"skewX()": "Specifies a skew transformation along the X axis by the given angle.",
	"skewY()": "Specifies a skew transformation along the Y axis by the given angle.",
	"translate()": "Specifies a 2D translation by the vector [tx, ty], where tx is the first translation-value parameter and ty is the optional second translation-value parameter.",
	"translate3d()": "Specifies a 3D translation by the vector [tx,ty,tz], with tx, ty and tz being the first, second and third translation-value parameters respectively.",
	"translateX()": "Specifies a translation by the given amount in the X direction.",
	"translateY()": "Specifies a translation by the given amount in the Y direction.",
	"translateZ()": "Specifies a translation by the given amount in the Z direction. Note that percentage values are not allowed in the translateZ translation-value, and if present are evaluated as 0.",
	"false": "The element does not contain an accelerator key sequence.",
	"true": "The element contains an accelerator key sequence.",
	"bt": "Bottom-to-top block flow. Layout is horizontal.",
	"lr": "Left-to-right direction. The flow orientation is vertical.",
	"rl": "Right-to-left direction. The flow orientation is vertical.",
	"tb": "Top-to-bottom direction. The flow orientation is horizontal.",
	"zoom": "The element is zoomable.",
	"no-limit": "There is no limit.",
	"mode": "Any of the range of mode values available to the -ms-layout-grid-mode property.",
	"type": "Any of the range of type values available to the -ms-layout-grid-type property.",
	"loose": "Default. Grid used for Japanese and Korean characters.",
	"-ms-autohiding-scrollbar": "Indicates the element displays auto-hiding scrollbars during mouse interactions and panning indicators during touch and keyboard interactions.",
	"scrollbar": "Scrollbars are typically narrow strips inserted on one or two edges of an element and which often have arrows to click on and a \"thumb\" to drag up and down (or left and right) to move the contents of the element.",
	"ideograph-alpha": "Creates 1/4em extra spacing between runs of ideographic letters and non-ideographic letters, such as Latin-based, Cyrillic, Greek, Arabic or Hebrew.",
	"ideograph-numeric": "Creates 1/4em extra spacing between runs of ideographic letters and numeric glyphs.",
	"ideograph-parenthesis": "Creates extra spacing between normal (non wide) parenthesis and ideographs.",
	"ideograph-space": "Extends the width of the space character while surrounded by ideographs.",
	"punctuation": "Creates extra non-breaking spacing around punctuation as required by language-specific typographic conventions.",
	"digits": "Attempt to typeset horizontally each maximal sequence of consecutive ASCII digits (U+0030–U+0039) that has as many or fewer characters than the specified integer such that it takes up the space of a single character within the vertical line box.",
	"inter-cluster": "Justification primarily changes spacing at word separators and at grapheme cluster boundaries in clustered scripts. This value is typically used for Southeast Asian scripts such as Thai.",
	"inter-ideograph": "Justification primarily changes spacing at word separators and at inter-graphemic boundaries in scripts that use no word spaces. This value is typically used for CJK languages.",
	"inter-word": "Justification primarily changes spacing at word separators. This value is typically used for languages that separate words using spaces, like English or (sometimes) Korean.",
	"kashida": "Justification primarily stretches Arabic and related scripts through the use of kashida or other calligraphic elongation.",
	"clip": "Clip inline content that overflows. Characters may be only partially rendered.",
	"ellipsis": "Render an ellipsis character (U+2026) to represent clipped inline content.",
	"over": "The underline is aligned with the 'top' (right in vertical writing) edge of the element's em-box. In this mode, an overline also switches sides.",
	"under": "The underline is aligned with the 'bottom' (left in vertical writing) edge of the element's em-box. In this case the underline usually does not cross the descenders. This is sometimes called 'accounting' underline.",
	"grippers": "Grippers are always on.",
	"break-all": "Lines may break between any two grapheme clusters for non-CJK scripts.",
	"clear": "Inline flow content can only wrap on top and bottom of the exclusion and must leave the areas to the start and end edges of the exclusion box empty.",
	"maximum": "Inline flow content can wrap on the side of the exclusion with the largest available space for the given line, and must leave the other side of the exclusion empty.",
	"minimum": "Inline flow content can flow around the edge of the exclusion with the smallest available space within the flow content’s containing block, and must leave the other edge of the exclusion empty.",
	"current": "Indicates that the user agent should target the frame that the element is in.",
	"root": "Indicates that the user agent should target the full window.",
	"scale-down": "Size the content as if ‘none’ or ‘contain’ were specified, whichever would result in a smaller concrete object size.",
	"invert": "Performs a color inversion on the pixels on the screen.",
	"-moz-hidden-unscrollable": "Same as the standardized 'clip', except doesn’t establish a block formatting context.",
	"painted": "The given element can be the target element for pointer events when the pointer is over a \"painted\" area. ",
	"visibleFill": "The given element can be the target element for pointer events when the ‘visibility’ property is set to visible and when the pointer is over the interior of the element.",
	"visiblePainted": "The given element can be the target element for pointer events when the ‘visibility’ property is set to visible and when the pointer is over a ‘painted’ area.",
	"visibleStroke": "The given element can be the target element for pointer events when the ‘visibility’ property is set to visible and when the pointer is over the perimeter of the element.",
	"absolute": "The box's position (and possibly size) is specified with the 'top', 'right', 'bottom', and 'left' properties. These properties specify offsets with respect to the box's 'containing block'.",
	"-ms-page": "The box's position is calculated according to the 'absolute' model.",
	"relative": "The box's position is calculated according to the normal flow (this is called the position in normal flow). Then the box is offset relative to its normal position.",
	"static": "The box is a normal box, laid out according to the normal flow. The 'top', 'right', 'bottom', and 'left' properties do not apply.",
	"sticky": "The box's position is calculated according to the normal flow. Then the box is offset relative to its flow root and containing block and in all cases, including table elements, does not affect the position of any following boxes.",
	"-webkit-sticky": "The box's position is calculated according to the normal flow. Then the box is offset relative to its flow root and containing block and in all cases, including table elements, does not affect the position of any following boxes.",
	"distribute-letter": "If the width of the ruby text is smaller than that of the base, then the ruby text contents are evenly distributed across the width of the base, with the first and last ruby text glyphs lining up with the corresponding first and last base glyphs. If the width of the ruby text is at least the width of the base, then the letters of the base are evenly distributed across the width of the ruby text.",
	"distribute-space": "If the width of the ruby text is smaller than that of the base, then the ruby text contents are evenly distributed across the width of the base, with a certain amount of white space preceding the first and following the last character in the ruby text. That amount of white space is normally equal to half the amount of inter-character space of the ruby text.",
	"line-edge": "If the ruby text is not adjacent to a line edge, it is aligned as in 'auto'. If it is adjacent to a line edge, then it is still aligned as in auto, but the side of the ruby text that touches the end of the line is lined up with the corresponding edge of the base.",
	"after": "The ruby text appears after the base. This is a relatively rare setting used in ideographic East Asian writing systems, most easily found in educational text.",
	"before": "The ruby text appears before the base. This is the most common setting used in ideographic East Asian writing systems.",
	"attr(x)": "The value of attribute 'x' is a string value. The string value is evaluated as a <number> to determine the number of ruby base elements to be spanned by the annotation element.",
	"smooth": "Scrolls in a smooth fashion using a user-agent-defined timing function and time period.",
	"repeat()": "Defines an interval at which snap points are defined, starting from the container’s relevant start edge.",
	"margin-box": "The background is painted within (clipped to) the margin box.",
	"format()": "Optional hint describing the format of the font resource.",
	"local()": "Format-specific string that identifies a locally available copy of a given font.",
	"butt": "Indicates that the stroke for each subpath does not extend beyond its two endpoints.",
	"bevel": "Indicates that a bevelled corner is to be used to join path segments.",
	"miter": "Indicates that a sharp corner is to be used to join path segments.",
	"additive": "Represents “sign-value” numbering systems, which, rather than using reusing digits in different positions to change their value, define additional digits with much larger values, so that the value of the number can be obtained by adding all the digits together.",
	"cyclic": "Cycles repeatedly through its provided symbols, looping back to the beginning when it reaches the end of the list.",
	"extends": "Use the algorithm of another counter style, but alter other aspects.",
	"numeric": "interprets the list of counter symbols as digits to a \"place-value\" numbering system, similar to the default 'decimal' counter style.",
	"symbolic": "Cycles repeatedly through its provided symbols, doubling, tripling, etc. the symbols on each successive pass through the list.",
	"sideways": "This value is equivalent to 'sideways-right' in 'vertical-rl' writing mode and equivalent to 'sideways-left' in 'vertical-lr' writing mode.",
	"sideways-right": "In vertical writing modes, this causes text to be set as if in a horizontal layout, but rotated 90° clockwise.",
	"upright": "In vertical writing modes, characters from horizontal-only scripts are rendered upright, i.e. in their standard horizontal orientation.",
	"geometricPrecision": "Indicates that the user agent shall emphasize geometric precision over legibility and rendering speed.",
	"optimizeLegibility": "Indicates that the user agent shall emphasize legibility over rendering speed and geometric precision.",
	"capitalize": "Puts the first typographic letter unit of each word in titlecase.",
	"lowercase": "Puts all letters in lowercase.",
	"uppercase": "Puts all letters in uppercase.",
	"perspective()": "Specifies a perspective projection matrix.",
	"flat": "All children of this element are rendered flattened into the 2D plane of the element.",
	"preserve-3d": "Flattening is not performed, so children maintain their position in 3D space.",
	"bidi-override": "Inside the element, reordering is strictly in sequence according to the 'direction' property; the implicit part of the bidirectional algorithm is ignored.",
	"embed": "If the element is inline-level, this value opens an additional level of embedding with respect to the bidirectional algorithm. The direction of this embedding level is given by the 'direction' property.",
	"isolate-override": "This combines the isolation behavior of 'isolate' with the directional override behavior of 'bidi-override'",
	"plaintext": "For the purposes of the Unicode bidirectional algorithm, the base directionality of each bidi paragraph for which the element forms the containing block is determined not by the element's computed 'direction'.",
	"U+26": "Ampersand.",
	"U+20-24F, U+2B0-2FF, U+370-4FF, U+1E00-1EFF, U+2000-20CF, U+2100-23FF, U+2500-26FF, U+E000-F8FF, U+FB00–FB4F": "WGL4 character set (Pan-European).",
	"U+20-17F, U+2B0-2FF, U+2000-206F, U+20A0-20CF, U+2100-21FF, U+2600-26FF": "The Multilingual European Subset No. 1. Latin. Covers ~44 languages.",
	"U+20-2FF, U+370-4FF, U+1E00-20CF, U+2100-23FF, U+2500-26FF, U+FB00-FB4F, U+FFF0-FFFD": "The Multilingual European Subset No. 2. Latin, Greek, and Cyrillic. Covers ~128 language.",
	"U+20-4FF, U+530-58F, U+10D0-10FF, U+1E00-23FF, U+2440-245F, U+2500-26FF, U+FB00-FB4F, U+FE20-FE2F, U+FFF0-FFFD": "The Multilingual European Subset No. 3. Covers all characters belonging to European scripts.",
	"U+00-7F": "Basic Latin (ASCII).",
	"U+80-FF": "Latin-1 Supplement. Accented characters for Western European languages, common punctuation characters, multiplication and division signs.",
	"U+100-17F": "Latin Extended-A. Accented characters for for Czech, Dutch, Polish, and Turkish.",
	"U+180-24F": "Latin Extended-B. Croatian, Slovenian, Romanian, Non-European and historic latin, Khoisan, Pinyin, Livonian, Sinology.",
	"U+1E00-1EFF": "Latin Extended Additional. Vietnamese, German captial sharp s, Medievalist, Latin general use.",
	"U+250-2AF": "International Phonetic Alphabet Extensions.",
	"U+370-3FF": "Greek and Coptic.",
	"U+1F00-1FFF": "Greek Extended. Accented characters for polytonic Greek.",
	"U+400-4FF": "Cyrillic.",
	"U+500-52F": "Cyrillic Supplement. Extra letters for Komi, Khanty, Chukchi, Mordvin, Kurdish, Aleut, Chuvash, Abkhaz, Azerbaijani, and Orok.",
	"U+00-52F, U+1E00-1FFF, U+2200–22FF": "Latin, Greek, Cyrillic, some punctuation and symbols.",
	"U+530–58F": "Armenian.",
	"U+590–5FF": "Hebrew.",
	"U+600–6FF": "Arabic.",
	"U+750–77F": "Arabic Supplement. Additional letters for African languages, Khowar, Torwali, Burushaski, and early Persian.",
	"U+8A0–8FF": "Arabic Extended-A. Additional letters for African languages, European and Central Asian languages, Rohingya, Berber, Arwi, and Koranic annotation signs.",
	"U+700–74F": "Syriac.",
	"U+900–97F": "Devanagari.",
	"U+980–9FF": "Bengali.",
	"U+A00–A7F": "Gurmukhi.",
	"U+A80–AFF": "Gujarati.",
	"U+B00–B7F": "Oriya.",
	"U+B80–BFF": "Tamil.",
	"U+C00–C7F": "Telugu.",
	"U+C80–CFF": "Kannada.",
	"U+D00–D7F": "Malayalam.",
	"U+D80–DFF": "Sinhala.",
	"U+118A0–118FF": "Warang Citi.",
	"U+E00–E7F": "Thai.",
	"U+1A20–1AAF": "Tai Tham.",
	"U+AA80–AADF": "Tai Viet.",
	"U+E80–EFF": "Lao.",
	"U+F00–FFF": "Tibetan.",
	"U+1000–109F": "Myanmar (Burmese).",
	"U+10A0–10FF": "Georgian.",
	"U+1200–137F": "Ethiopic.",
	"U+1380–139F": "Ethiopic Supplement. Extra Syllables for Sebatbeit, and Tonal marks",
	"U+2D80–2DDF": "Ethiopic Extended. Extra Syllables for Me'en, Blin, and Sebatbeit.",
	"U+AB00–AB2F": "Ethiopic Extended-A. Extra characters for Gamo-Gofa-Dawro, Basketo, and Gumuz.",
	"U+1780–17FF": "Khmer.",
	"U+1800–18AF": "Mongolian.",
	"U+1B80–1BBF": "Sundanese.",
	"U+1CC0–1CCF": "Sundanese Supplement. Punctuation.",
	"U+4E00–9FD5": "CJK (Chinese, Japanese, Korean) Unified Ideographs. Most common ideographs for modern Chinese and Japanese.",
	"U+3400–4DB5": "CJK Unified Ideographs Extension A. Rare ideographs.",
	"U+2F00–2FDF": "Kangxi Radicals.",
	"U+2E80–2EFF": "CJK Radicals Supplement. Alternative forms of Kangxi Radicals.",
	"U+1100–11FF": "Hangul Jamo.",
	"U+AC00–D7AF": "Hangul Syllables.",
	"U+3040–309F": "Hiragana.",
	"U+30A0–30FF": "Katakana.",
	"U+A5, U+4E00-9FFF, U+30??, U+FF00-FF9F": "Japanese Kanji, Hiragana and Katakana characters plus Yen/Yuan symbol.",
	"U+A4D0–A4FF": "Lisu.",
	"U+A000–A48F": "Yi Syllables.",
	"U+A490–A4CF": "Yi Radicals.",
	"U+2000-206F": "General Punctuation.",
	"U+3000–303F": "CJK Symbols and Punctuation.",
	"U+2070–209F": "Superscripts and Subscripts.",
	"U+20A0–20CF": "Currency Symbols.",
	"U+2100–214F": "Letterlike Symbols.",
	"U+2150–218F": "Number Forms.",
	"U+2190–21FF": "Arrows.",
	"U+2200–22FF": "Mathematical Operators.",
	"U+2300–23FF": "Miscellaneous Technical.",
	"U+E000-F8FF": "Private Use Area.",
	"U+FB00–FB4F": "Alphabetic Presentation Forms. Ligatures for latin, Armenian, and Hebrew.",
	"U+FB50–FDFF": "Arabic Presentation Forms-A. Contextual forms / ligatures for Persian, Urdu, Sindhi, Central Asian languages, etc, Arabic pedagogical symbols, word ligatures.",
	"U+1F600–1F64F": "Emoji: Emoticons.",
	"U+2600–26FF": "Emoji: Miscellaneous Symbols.",
	"U+1F300–1F5FF": "Emoji: Miscellaneous Symbols and Pictographs.",
	"U+1F900–1F9FF": "Emoji: Supplemental Symbols and Pictographs.",
	"U+1F680–1F6FF": "Emoji: Transport and Map Symbols.",
	"text-bottom": "Align the bottom of the box with the after-edge of the parent element's font.",
	"text-top": "Align the top of the box with the before-edge of the parent element's font.",
	"break": "If the content fits within the CSS Region, then this property has no effect.",
	"pre": "Sets 'white-space-collapsing' to 'preserve' and 'text-wrap' to 'none'.",
	"pre-line": "Sets 'white-space-collapsing' to 'preserve-breaks' and 'text-wrap' to 'normal'.",
	"pre-wrap": "Sets 'white-space-collapsing' to 'preserve' and 'text-wrap' to 'normal'.",
	"contents": "Indicates that the author expects to animate or change something about the element’s contents in the near future.",
	"scroll-position": "Indicates that the author expects to animate or change the scroll position of the element in the near future.",
	"horizontal-tb": "Top-to-bottom block flow direction. The writing mode is horizontal.",
	"sideways-lr": "Left-to-right block flow direction. The writing mode is vertical, while the typographic mode is horizontal.",
	"sideways-rl": "Right-to-left block flow direction. The writing mode is vertical, while the typographic mode is horizontal.",
	"vertical-lr": "Left-to-right block flow direction. The writing mode is vertical.",
	"vertical-rl": "Right-to-left block flow direction. The writing mode is vertical."
};
});