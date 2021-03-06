"use strict";
var Task = require('ember-cli/lib/models/task');
var path = require('path');
// require dependencies within the target project
function requireDependency(root, moduleName) {
    var packageJson = require(path.join(root, 'node_modules', moduleName, 'package.json'));
    var main = path.normalize(packageJson.main);
    return require(path.join(root, 'node_modules', moduleName, main));
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Task.extend({
    run: function (options) {
        var _this = this;
        var projectRoot = this.project.root;
        return new Promise(function (resolve) {
            var karma = requireDependency(projectRoot, 'karma');
            var karmaConfig = path.join(projectRoot, _this.project.ngConfig.config.test.karma.config);
            // Convert browsers from a string to an array
            if (options.browsers) {
                options.browsers = options.browsers.split(',');
            }
            // Assign additional karmaConfig options to the local ngapp config
            options.configFile = karmaConfig;
            // :shipit:
            var karmaServer = new karma.Server(options, resolve);
            karmaServer.start();
        });
    }
});
//# sourceMappingURL=/Users/hans/Sources/angular-cli/packages/angular-cli/angular-cli/tasks/test.js.map