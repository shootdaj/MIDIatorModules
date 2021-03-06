"use strict";
var Command = require('ember-cli/lib/models/command');
var build_webpack_1 = require('../tasks/build-webpack');
var build_webpack_watch_1 = require('../tasks/build-webpack-watch');
var BuildCommand = Command.extend({
    name: 'build',
    description: 'Builds your app and places it into the output path (dist/ by default).',
    aliases: ['b'],
    availableOptions: [
        {
            name: 'target',
            type: String,
            default: 'development',
            aliases: ['t', { 'dev': 'development' }, { 'prod': 'production' }]
        },
        { name: 'environment', type: String, default: '', aliases: ['e'] },
        { name: 'output-path', type: 'Path', default: 'dist/', aliases: ['o'] },
        { name: 'watch', type: Boolean, default: false, aliases: ['w'] },
        { name: 'watcher', type: String },
        { name: 'suppress-sizes', type: Boolean, default: false },
        { name: 'base-href', type: String, default: null, aliases: ['bh'] },
    ],
    run: function (commandOptions) {
        if (commandOptions.environment === '') {
            if (commandOptions.target === 'development') {
                commandOptions.environment = 'dev';
            }
            if (commandOptions.target === 'production') {
                commandOptions.environment = 'prod';
            }
        }
        var project = this.project;
        var ui = this.ui;
        var buildTask = commandOptions.watch ?
            new build_webpack_watch_1.default({
                cliProject: project,
                ui: ui,
                outputPath: commandOptions.outputPath,
                target: commandOptions.target,
                environment: commandOptions.environment
            }) :
            new build_webpack_1.default({
                cliProject: project,
                ui: ui,
                outputPath: commandOptions.outputPath,
                target: commandOptions.target,
                environment: commandOptions.environment,
            });
        return buildTask.run(commandOptions);
    }
});
BuildCommand.overrideCore = true;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BuildCommand;
//# sourceMappingURL=/Users/hans/Sources/angular-cli/packages/angular-cli/angular-cli/commands/build.js.map