"use strict";
var Command = require('ember-cli/lib/models/command');
var path = require('path');
var child_process = require('child_process');
var VersionCommand = Command.extend({
    name: 'version',
    description: 'outputs angular-cli version',
    aliases: ['v', '--version', '-v'],
    works: 'everywhere',
    availableOptions: [{
            name: 'verbose',
            type: Boolean, 'default': false
        }],
    run: function (options) {
        var versions = process.versions;
        var pkg = require(path.resolve(__dirname, '..', 'package.json'));
        versions['os'] = process.platform + ' ' + process.arch;
        var alwaysPrint = ['node', 'os'];
        var ngCliVersion = pkg.version;
        if (!__dirname.match(/node_modules/)) {
            var gitBranch = '??';
            try {
                var gitRefName = '' + child_process.execSync('git symbolic-ref HEAD', { cwd: __dirname });
                gitBranch = path.basename(gitRefName.replace('\n', ''));
            }
            catch (e) {
            }
            ngCliVersion = "local (v" + pkg.version + ", branch: " + gitBranch + ")";
        }
        this.printVersion('angular-cli', ngCliVersion);
        for (var _i = 0, _a = Object.keys(versions); _i < _a.length; _i++) {
            var module_1 = _a[_i];
            if (options.verbose || alwaysPrint.indexOf(module_1) > -1) {
                this.printVersion(module_1, versions[module_1]);
            }
        }
    },
    printVersion: function (module, version) {
        this.ui.writeLine(module + ': ' + version);
    }
});
VersionCommand.overrideCore = true;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = VersionCommand;
//# sourceMappingURL=/Users/hans/Sources/angular-cli/packages/angular-cli/angular-cli/commands/version.js.map