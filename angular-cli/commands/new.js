"use strict";
var chalk = require('chalk');
var Command = require('ember-cli/lib/models/command');
var Project = require('ember-cli/lib/models/project');
var SilentError = require('silent-error');
var validProjectName = require('ember-cli/lib/utilities/valid-project-name');
var normalizeBlueprint = require('ember-cli/lib/utilities/normalize-blueprint-option');
var init_1 = require('./init');
var NewCommand = Command.extend({
    name: 'new',
    description: "Creates a new directory and runs " + chalk.green('ng init') + " in it.",
    works: 'outsideProject',
    availableOptions: [
        { name: 'dry-run', type: Boolean, default: false, aliases: ['d'] },
        { name: 'verbose', type: Boolean, default: false, aliases: ['v'] },
        { name: 'blueprint', type: String, default: 'ng2', aliases: ['b'] },
        { name: 'link-cli', type: Boolean, default: false, aliases: ['lc'] },
        { name: 'skip-npm', type: Boolean, default: false, aliases: ['sn'] },
        { name: 'skip-bower', type: Boolean, default: true, aliases: ['sb'] },
        { name: 'skip-git', type: Boolean, default: false, aliases: ['sg'] },
        { name: 'directory', type: String, aliases: ['dir'] },
        { name: 'source-dir', type: String, default: 'src', aliases: ['sd'] },
        { name: 'style', type: String, default: 'css' },
        { name: 'prefix', type: String, default: 'app', aliases: ['p'] },
        { name: 'mobile', type: Boolean, default: false }
    ],
    run: function (commandOptions, rawArgs) {
        var packageName = rawArgs.shift();
        if (!packageName) {
            return Promise.reject(new SilentError(("The \"ng " + this.name + "\" command requires a name argument to be specified. ") +
                "For more details, use \"ng help\"."));
        }
        commandOptions.name = packageName;
        if (commandOptions.dryRun) {
            commandOptions.skipGit = true;
        }
        if (packageName === '.') {
            return Promise.reject(new SilentError("Trying to generate an application structure in this directory? Use \"ng init\" " +
                "instead."));
        }
        if (!validProjectName(packageName)) {
            return Promise.reject(new SilentError("We currently do not support a name of \"" + packageName + "\"."));
        }
        if (commandOptions.mobile) {
            return Promise.reject(new SilentError('The --mobile flag has been disabled temporarily while we await an update of ' +
                'angular-universal for supporting NgModule. Sorry for the inconvenience.'));
        }
        commandOptions.blueprint = normalizeBlueprint(commandOptions.blueprint);
        if (!commandOptions.directory) {
            commandOptions.directory = packageName;
        }
        var createAndStepIntoDirectory = new this.tasks.CreateAndStepIntoDirectory({ ui: this.ui, analytics: this.analytics });
        var initCommand = new init_1.default({
            ui: this.ui,
            analytics: this.analytics,
            tasks: this.tasks,
            project: Project.nullProject(this.ui, this.cli)
        });
        return createAndStepIntoDirectory
            .run({
            directoryName: commandOptions.directory,
            dryRun: commandOptions.dryRun
        })
            .then(initCommand.run.bind(initCommand, commandOptions, rawArgs));
    }
});
NewCommand.overrideCore = true;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = NewCommand;
//# sourceMappingURL=/Users/hans/Sources/angular-cli/packages/angular-cli/angular-cli/commands/new.js.map