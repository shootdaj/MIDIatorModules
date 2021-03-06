"use strict";
var TestCommand = require('ember-cli/lib/commands/test');
var test_1 = require('../tasks/test');
var config_1 = require('../models/config');
var NgCliTestCommand = TestCommand.extend({
    availableOptions: [
        { name: 'watch', type: Boolean, default: true, aliases: ['w'] },
        { name: 'browsers', type: String },
        { name: 'colors', type: Boolean },
        { name: 'log-level', type: String },
        { name: 'port', type: Number },
        { name: 'reporters', type: String },
        { name: 'build', type: Boolean, default: true }
    ],
    run: function (commandOptions) {
        this.project.ngConfig = this.project.ngConfig || config_1.CliConfig.fromProject();
        var testTask = new test_1.default({
            ui: this.ui,
            analytics: this.analytics,
            project: this.project
        });
        if (!commandOptions.watch) {
            // if not watching ensure karma is doing a single run
            commandOptions.singleRun = true;
        }
        return testTask.run(commandOptions);
    }
});
NgCliTestCommand.overrideCore = true;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = NgCliTestCommand;
//# sourceMappingURL=/Users/hans/Sources/angular-cli/packages/angular-cli/angular-cli/commands/test.js.map