"use strict";
var config_1 = require('../models/config');
var fs_1 = require('fs');
var common_tags_1 = require('common-tags');
var chalk_1 = require('chalk');
var path = require('path');
var resolve = require('resolve');
function _findUp(name, from) {
    var currentDir = from;
    while (currentDir && currentDir !== path.parse(currentDir).root) {
        var p = path.join(currentDir, name);
        if (fs_1.existsSync(p)) {
            return p;
        }
        currentDir = path.dirname(currentDir);
    }
    return null;
}
function _hasOldCliBuildFile() {
    return fs_1.existsSync(_findUp('angular-cli-build.js', process.cwd()))
        || fs_1.existsSync(_findUp('angular-cli-build.ts', process.cwd()))
        || fs_1.existsSync(_findUp('ember-cli-build.js', process.cwd()))
        || fs_1.existsSync(_findUp('angular-cli-build.js', __dirname))
        || fs_1.existsSync(_findUp('angular-cli-build.ts', __dirname))
        || fs_1.existsSync(_findUp('ember-cli-build.js', __dirname));
}
var Version = (function () {
    function Version(_version) {
        this._version = _version;
    }
    Version.prototype._parse = function () {
        return this.isKnown()
            ? this._version.match(/^(\d+)\.(\d+)(?:\.(\d+))?(?:-(alpha|beta|rc)\.(.*))?$/).slice(1)
            : [];
    };
    Version.prototype.isAlpha = function () { return this.qualifier == 'alpha'; };
    Version.prototype.isBeta = function () { return this.qualifier == 'beta'; };
    Version.prototype.isReleaseCandidate = function () { return this.qualifier == 'rc'; };
    Version.prototype.isKnown = function () { return this._version !== null; };
    Object.defineProperty(Version.prototype, "major", {
        get: function () { return this._parse()[0] || 0; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Version.prototype, "minor", {
        get: function () { return this._parse()[1] || 0; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Version.prototype, "patch", {
        get: function () { return this._parse()[2] || 0; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Version.prototype, "qualifier", {
        get: function () { return this._parse()[3] || ''; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Version.prototype, "extra", {
        get: function () { return this._parse()[4] || ''; },
        enumerable: true,
        configurable: true
    });
    Version.prototype.toString = function () { return this._version; };
    Version.fromProject = function () {
        var packageJson = null;
        try {
            var angularCliPath = resolve.sync('angular-cli', {
                basedir: process.cwd(),
                packageFilter: function (pkg, pkgFile) {
                    packageJson = pkg;
                }
            });
            if (angularCliPath && packageJson) {
                try {
                    return new Version(packageJson.version);
                }
                catch (e) {
                    return new Version(null);
                }
            }
        }
        catch (e) {
        }
        var configPath = config_1.CliConfig.configFilePath();
        var configJson = fs_1.readFileSync(configPath, 'utf8');
        try {
            var json = JSON.parse(configJson);
            return new Version(json.project && json.project.version);
        }
        catch (e) {
            return new Version(null);
        }
    };
    Version.assertPostWebpackVersion = function () {
        if (this.isPreWebpack()) {
            console.error(chalk_1.bold(chalk_1.red('\n' + (_a = ["\n        It seems like you're using a project generated using an old version of the Angular CLI.\n        The latest CLI now uses webpack and includes a lot of improvements, include a simpler\n        workflow, a faster build and smaller bundles.\n        \n        To get more info, including a step-by-step guide to upgrade the CLI, follow this link:\n        https://github.com/angular/angular-cli/wiki/Upgrading-from-Beta.10-to-Beta.12\n      "], _a.raw = ["\n        It seems like you're using a project generated using an old version of the Angular CLI.\n        The latest CLI now uses webpack and includes a lot of improvements, include a simpler\n        workflow, a faster build and smaller bundles.\n        \n        To get more info, including a step-by-step guide to upgrade the CLI, follow this link:\n        https://github.com/angular/angular-cli/wiki/Upgrading-from-Beta.10-to-Beta.12\n      "], common_tags_1.stripIndents(_a)) + '\n')));
            process.exit(1);
        }
        else {
            // Verify that there's no build file.
            if (_hasOldCliBuildFile()) {
                console.error(chalk_1.bold(chalk_1.yellow('\n' + (_b = ["\n          It seems like you're using the newest version of the Angular CLI that uses webpack.\n          This version does not require an angular-cli-build file, but your project has one.\n          It will be ignored.\n        "], _b.raw = ["\n          It seems like you're using the newest version of the Angular CLI that uses webpack.\n          This version does not require an angular-cli-build file, but your project has one.\n          It will be ignored.\n        "], common_tags_1.stripIndents(_b)) + '\n')));
            }
        }
        var _a, _b;
    };
    Version.isPreWebpack = function () {
        // CliConfig is a bit stricter with the schema, so we need to be a little looser with it.
        var version = Version.fromProject();
        if (version && version.isKnown()) {
            if (version.major == 0) {
                return true;
            }
            else if (version.minor != 0) {
                return false;
            }
            else if (version.isBeta() && !version.toString().match(/webpack/)) {
                var betaVersion = version.extra;
                if (parseInt(betaVersion) < 12) {
                    return true;
                }
            }
        }
        else {
            return _hasOldCliBuildFile();
        }
        return false;
    };
    return Version;
}());
exports.Version = Version;
//# sourceMappingURL=/Users/hans/Sources/angular-cli/packages/angular-cli/angular-cli/upgrade/version.js.map