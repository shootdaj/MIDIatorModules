"use strict";
var path = require('path');
exports.ngAppResolve = function (resolvePath) {
    return path.resolve(process.cwd(), resolvePath);
};
exports.webpackOutputOptions = {
    colors: true,
    chunks: true,
    modules: false,
    reasons: false,
    chunkModules: false
};
exports.webpackDevServerOutputOptions = {
    assets: true,
    colors: true,
    version: true,
    hash: true,
    timings: true,
    chunks: false,
    chunkModules: false
};
//# sourceMappingURL=/Users/hans/Sources/angular-cli/packages/angular-cli/angular-cli/models/webpack-build-utils.js.map