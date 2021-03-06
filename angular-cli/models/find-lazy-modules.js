"use strict";
var fs = require('fs');
var glob = require('glob');
var path = require('path');
var ts = require('typescript');
var ast_utils_1 = require('../utilities/ast-utils');
function findLoadChildren(tsFilePath) {
    var source = ast_utils_1.getSource(tsFilePath);
    var unique = {};
    return (
    // Find all object literals.
    ast_utils_1.findNodes(source, ts.SyntaxKind.ObjectLiteralExpression)
        .map(function (node) { return ast_utils_1.findNodes(node, ts.SyntaxKind.PropertyAssignment); })
        .reduce(function (prev, curr) { return curr ? prev.concat(curr) : prev; }, [])
        .filter(function (node) {
        var key = ast_utils_1.getContentOfKeyLiteral(source, node.name);
        if (!key) {
            // key is an expression, can't do anything.
            return false;
        }
        return key == 'loadChildren';
    })
        .filter(function (node) {
        return node.initializer.kind === ts.SyntaxKind.StringLiteral;
    })
        .map(function (node) {
        var literal = node.initializer;
        return literal.text;
    })
        .map(function (moduleName) { return moduleName.split('#')[0]; })
        .filter(function (value) {
        if (unique[value]) {
            return false;
        }
        else {
            unique[value] = true;
            return true;
        }
    }));
}
exports.findLoadChildren = findLoadChildren;
function findLazyModules(projectRoot) {
    var result = {};
    glob.sync(path.join(projectRoot, '/**/*.ts'))
        .forEach(function (tsPath) {
        findLoadChildren(tsPath).forEach(function (moduleName) {
            var fileName = path.resolve(projectRoot, moduleName) + '.ts';
            if (fs.existsSync(fileName)) {
                // Put the moduleName as relative to the main.ts.
                result[moduleName] = fileName;
            }
        });
    });
    return result;
}
exports.findLazyModules = findLazyModules;
//# sourceMappingURL=/Users/hans/Sources/angular-cli/packages/angular-cli/angular-cli/models/find-lazy-modules.js.map