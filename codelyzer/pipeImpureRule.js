"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Lint = require('tslint/lib/lint');
var sprintf_js_1 = require('sprintf-js');
var SyntaxKind = require('./util/syntaxKind');
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        _super.apply(this, arguments);
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithWalker(new ClassMetadataWalker(sourceFile, this));
    };
    Rule.FAILURE = 'Warning: impure pipe declared in class %s.';
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
var ClassMetadataWalker = (function (_super) {
    __extends(ClassMetadataWalker, _super);
    function ClassMetadataWalker(sourceFile, rule) {
        _super.call(this, sourceFile, rule.getOptions());
        this.rule = rule;
    }
    ClassMetadataWalker.prototype.visitClassDeclaration = function (node) {
        var className = node.name.text;
        var decorators = node.decorators || [];
        decorators.filter(function (d) {
            var baseExpr = d.expression || {};
            return baseExpr.expression.text === 'Pipe';
        }).forEach(this.validateProperties.bind(this, className));
        _super.prototype.visitClassDeclaration.call(this, node);
    };
    ClassMetadataWalker.prototype.validateProperties = function (className, pipe) {
        var argument = this.extractArgument(pipe);
        if (argument.kind === SyntaxKind.current().ObjectLiteralExpression) {
            argument.properties.filter(function (n) { return n.name.text === 'pure'; })
                .forEach(this.validateProperty.bind(this, className));
        }
    };
    ClassMetadataWalker.prototype.extractArgument = function (pipe) {
        var baseExpr = pipe.expression || {};
        var args = baseExpr.arguments || [];
        return args[0];
    };
    ClassMetadataWalker.prototype.validateProperty = function (className, property) {
        var propValue = property.initializer.getText();
        if (propValue === "false") {
            this.addFailure(this.createFailure(property.getStart(), property.getWidth(), sprintf_js_1.sprintf.apply(this, this.createFailureArray(className))));
        }
    };
    ClassMetadataWalker.prototype.createFailureArray = function (className) {
        return [Rule.FAILURE, className];
    };
    return ClassMetadataWalker;
}(Lint.RuleWalker));
exports.ClassMetadataWalker = ClassMetadataWalker;
