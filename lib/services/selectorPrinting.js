var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
(function (dependencies, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(dependencies, factory);
    }
})(["require", "exports", "../parser/cssNodes"], function (require, exports) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    var nodes = require("../parser/cssNodes");
    var Element = (function () {
        function Element() {
        }
        Element.prototype.findAttribute = function (name) {
            if (this.attributes) {
                for (var _i = 0, _a = this.attributes; _i < _a.length; _i++) {
                    var attribute = _a[_i];
                    if (attribute.name === name) {
                        return attribute.value;
                    }
                }
            }
            return null;
        };
        Element.prototype.addChild = function (child) {
            if (child instanceof Element) {
                child.parent = this;
            }
            if (!this.children) {
                this.children = [];
            }
            this.children.push(child);
        };
        Element.prototype.append = function (text) {
            if (this.attributes) {
                var last = this.attributes[this.attributes.length - 1];
                last.value = last.value + text;
            }
        };
        Element.prototype.prepend = function (text) {
            if (this.attributes) {
                var first = this.attributes[0];
                first.value = text + first.value;
            }
        };
        Element.prototype.findRoot = function () {
            var curr = this;
            while (curr.parent && !(curr.parent instanceof RootElement)) {
                curr = curr.parent;
            }
            return curr;
        };
        Element.prototype.removeChild = function (child) {
            if (this.children) {
                var index = this.children.indexOf(child);
                if (index !== -1) {
                    this.children.splice(index, 1);
                    return true;
                }
            }
            return false;
        };
        Element.prototype.addAttr = function (name, value) {
            if (!this.attributes) {
                this.attributes = [];
            }
            for (var _i = 0, _a = this.attributes; _i < _a.length; _i++) {
                var attribute = _a[_i];
                if (attribute.name === name) {
                    attribute.value += ' ' + value;
                    return;
                }
            }
            this.attributes.push({ name: name, value: value });
        };
        Element.prototype.clone = function (cloneChildren) {
            if (cloneChildren === void 0) { cloneChildren = true; }
            var elem = new Element();
            if (this.attributes) {
                elem.attributes = [];
                for (var _i = 0, _a = this.attributes; _i < _a.length; _i++) {
                    var attribute = _a[_i];
                    elem.addAttr(attribute.name, attribute.value);
                }
            }
            if (cloneChildren && this.children) {
                elem.children = [];
                for (var index = 0; index < this.children.length; index++) {
                    elem.addChild(this.children[index].clone());
                }
            }
            return elem;
        };
        Element.prototype.cloneWithParent = function () {
            var clone = this.clone(false);
            if (this.parent && !(this.parent instanceof RootElement)) {
                var parentClone = this.parent.cloneWithParent();
                parentClone.addChild(clone);
            }
            return clone;
        };
        return Element;
    }());
    exports.Element = Element;
    var RootElement = (function (_super) {
        __extends(RootElement, _super);
        function RootElement() {
            return _super.apply(this, arguments) || this;
        }
        return RootElement;
    }(Element));
    exports.RootElement = RootElement;
    var LabelElement = (function (_super) {
        __extends(LabelElement, _super);
        function LabelElement(label) {
            var _this = _super.call(this) || this;
            _this.addAttr('name', label);
            return _this;
        }
        return LabelElement;
    }(Element));
    exports.LabelElement = LabelElement;
    var MarkedStringPrinter = (function () {
        function MarkedStringPrinter(quote) {
            this.quote = quote;
            // empty
        }
        MarkedStringPrinter.prototype.print = function (element) {
            this.result = [];
            if (element instanceof RootElement) {
                this.doPrint(element.children, 0);
            }
            else {
                this.doPrint([element], 0);
            }
            var value = this.result.join('\n');
            return [{ language: 'html', value: value }];
        };
        MarkedStringPrinter.prototype.doPrint = function (elements, indent) {
            for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
                var element = elements_1[_i];
                this.doPrintElement(element, indent);
                if (element.children) {
                    this.doPrint(element.children, indent + 1);
                }
            }
        };
        MarkedStringPrinter.prototype.writeLine = function (level, content) {
            var indent = new Array(level).join('  ');
            this.result.push(indent + content);
        };
        MarkedStringPrinter.prototype.doPrintElement = function (element, indent) {
            var _this = this;
            var name = element.findAttribute('name');
            // special case: a simple label
            if (element instanceof LabelElement) {
                this.writeLine(indent, name);
                return;
            }
            // the real deal
            var content = ['<'];
            // element name
            if (name) {
                content.push(name);
            }
            else {
                content.push('element');
            }
            // attributes
            if (element.attributes) {
                element.attributes.forEach(function (attr) {
                    if (attr.name !== 'name') {
                        content.push(' ');
                        content.push(attr.name);
                        var value = attr.value;
                        if (value) {
                            content.push('=');
                            content.push(quotes.ensure(value, _this.quote));
                        }
                    }
                });
            }
            content.push('>');
            this.writeLine(indent, content.join(''));
        };
        return MarkedStringPrinter;
    }());
    var quotes;
    (function (quotes) {
        function ensure(value, which) {
            return which + remove(value) + which;
        }
        quotes.ensure = ensure;
        function remove(value) {
            var match = value.match(/^['"](.*)["']$/);
            if (match) {
                return match[1];
            }
            return value;
        }
        quotes.remove = remove;
    })(quotes || (quotes = {}));
    function toElement(node, parentElement) {
        var result = new Element();
        node.getChildren().forEach(function (child) {
            switch (child.type) {
                case nodes.NodeType.SelectorCombinator:
                    if (parentElement) {
                        var segments = child.getText().split('&');
                        if (segments.length === 1) {
                            // should not happen
                            result.addAttr('name', segments[0]);
                            break;
                        }
                        result = parentElement.cloneWithParent();
                        if (segments[0]) {
                            var root = result.findRoot();
                            root.prepend(segments[0]);
                        }
                        for (var i = 1; i < segments.length; i++) {
                            if (i > 1) {
                                var clone = parentElement.cloneWithParent();
                                result.addChild(clone.findRoot());
                                result = clone;
                            }
                            result.append(segments[i]);
                        }
                    }
                    break;
                case nodes.NodeType.SelectorPlaceholder:
                    if (child.getText() === '@at-root') {
                        return result;
                    }
                // fall through
                case nodes.NodeType.ElementNameSelector:
                    var text = child.getText();
                    result.addAttr('name', text === '*' ? 'element' : text);
                    break;
                case nodes.NodeType.ClassSelector:
                    result.addAttr('class', child.getText().substring(1));
                    break;
                case nodes.NodeType.IdentifierSelector:
                    result.addAttr('id', child.getText().substring(1));
                    break;
                case nodes.NodeType.MixinDeclaration:
                    result.addAttr('class', child.getName());
                    break;
                case nodes.NodeType.PseudoSelector:
                    result.addAttr(child.getText(), '');
                    break;
                case nodes.NodeType.AttributeSelector:
                    var expr = child.getChildren()[0];
                    if (expr) {
                        var value = void 0;
                        if (expr.getRight()) {
                            switch (expr.getOperator().getText()) {
                                case '|=':
                                    // excatly or followed by -words
                                    value = quotes.remove(expr.getRight().getText()) + "-\u2026";
                                    break;
                                case '^=':
                                    // prefix
                                    value = quotes.remove(expr.getRight().getText()) + "\u2026";
                                    break;
                                case '$=':
                                    // suffix
                                    value = "\u2026" + quotes.remove(expr.getRight().getText());
                                    break;
                                case '~=':
                                    // one of a list of words
                                    value = " \u2026 " + quotes.remove(expr.getRight().getText()) + " \u2026 ";
                                    break;
                                case '*=':
                                    // substring
                                    value = "\u2026" + quotes.remove(expr.getRight().getText()) + "\u2026";
                                    break;
                                default:
                                    value = quotes.remove(expr.getRight().getText());
                                    break;
                            }
                        }
                        result.addAttr(expr.getLeft().getText(), value);
                    }
                    break;
            }
        });
        return result;
    }
    exports.toElement = toElement;
    function selectorToMarkedString(node) {
        var root = selectorToElement(node);
        return new MarkedStringPrinter('"').print(root);
    }
    exports.selectorToMarkedString = selectorToMarkedString;
    function simpleSelectorToMarkedString(node) {
        var element = toElement(node);
        return new MarkedStringPrinter('"').print(element);
    }
    exports.simpleSelectorToMarkedString = simpleSelectorToMarkedString;
    var SelectorElementBuilder = (function () {
        function SelectorElementBuilder(element) {
            this.prev = null;
            this.element = element;
        }
        SelectorElementBuilder.prototype.processSelector = function (selector) {
            var _this = this;
            var parentElement = null;
            if (!(this.element instanceof RootElement)) {
                if (selector.getChildren().some(function (c) { return c.hasChildren() && c.getChild(0).type === nodes.NodeType.SelectorCombinator; })) {
                    var curr = this.element.findRoot();
                    if (curr.parent instanceof RootElement) {
                        parentElement = this.element;
                        this.element = curr.parent;
                        this.element.removeChild(curr);
                        this.prev = null;
                    }
                }
            }
            selector.getChildren().forEach(function (selectorChild) {
                if (selectorChild instanceof nodes.SimpleSelector) {
                    if (_this.prev instanceof nodes.SimpleSelector) {
                        var labelElement = new LabelElement('\u2026');
                        _this.element.addChild(labelElement);
                        _this.element = labelElement;
                    }
                    else if (_this.prev && (_this.prev.matches('+') || _this.prev.matches('~'))) {
                        _this.element = _this.element.parent;
                    }
                    if (_this.prev && _this.prev.matches('~')) {
                        _this.element.addChild(toElement(selectorChild));
                        _this.element.addChild(new LabelElement('\u22EE'));
                    }
                    var thisElement = toElement(selectorChild, parentElement);
                    var root = thisElement.findRoot();
                    _this.element.addChild(root);
                    _this.element = thisElement;
                }
                if (selectorChild instanceof nodes.SimpleSelector ||
                    selectorChild.type === nodes.NodeType.SelectorCombinatorParent ||
                    selectorChild.type === nodes.NodeType.SelectorCombinatorSibling ||
                    selectorChild.type === nodes.NodeType.SelectorCombinatorAllSiblings) {
                    _this.prev = selectorChild;
                }
            });
        };
        return SelectorElementBuilder;
    }());
    function isNewSelectorContext(node) {
        switch (node.type) {
            case nodes.NodeType.MixinDeclaration:
            case nodes.NodeType.Stylesheet:
                return true;
        }
        return false;
    }
    function selectorToElement(node) {
        if (node.matches('@at-root')) {
            return null;
        }
        var root = new RootElement();
        var parentRuleSets = [];
        if (node.getParent() instanceof nodes.RuleSet) {
            var parent = node.getParent().getParent(); // parent of the selector's ruleset
            while (parent && !isNewSelectorContext(parent)) {
                if (parent instanceof nodes.RuleSet) {
                    if (parent.getSelectors().matches('@at-root')) {
                        break;
                    }
                    parentRuleSets.push(parent);
                }
                parent = parent.getParent();
            }
        }
        var builder = new SelectorElementBuilder(root);
        for (var i = parentRuleSets.length - 1; i >= 0; i--) {
            var selector = parentRuleSets[i].getSelectors().getChild(0);
            if (selector) {
                builder.processSelector(selector);
            }
        }
        builder.processSelector(node);
        return root;
    }
    exports.selectorToElement = selectorToElement;
});
//# sourceMappingURL=selectorPrinting.js.map