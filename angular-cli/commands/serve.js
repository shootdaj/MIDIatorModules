"use strict";
var assign = require('lodash/assign');
var denodeify = require('denodeify');
var Command = require('ember-cli/lib/models/command');
var SilentError = require('silent-error');
var PortFinder = require('portfinder');
var serve_webpack_1 = require('../tasks/serve-webpack');
PortFinder.basePort = 49152;
var getPort = denodeify(PortFinder.getPort);
var defaultPort = process.env.PORT || 4200;
var ServeCommand = Command.extend({
    name: 'serve',
    description: 'Builds and serves your app, rebuilding on file changes.',
    aliases: ['server', 's'],
    availableOptions: [
        { name: 'port', type: Number, default: defaultPort, aliases: ['p'] },
        {
            name: 'host',
            type: String,
            default: 'localhost',
            aliases: ['H'],
            description: 'Listens on all interfaces by default'
        },
        { name: 'proxy-config', type: 'Path', aliases: ['pc'] },
        { name: 'watcher', type: String, default: 'events', aliases: ['w'] },
        { name: 'live-reload', type: Boolean, default: true, aliases: ['lr'] },
        {
            name: 'live-reload-host',
            type: String,
            aliases: ['lrh'],
            description: 'Defaults to host'
        },
        {
            name: 'live-reload-base-url',
            type: String,
            aliases: ['lrbu'],
            description: 'Defaults to baseURL'
        },
        {
            name: 'live-reload-port',
            type: Number,
            aliases: ['lrp'],
            description: '(Defaults to port number within [49152...65535])'
        },
        {
            name: 'live-reload-live-css',
            type: Boolean,
            default: true,
            description: 'Whether to live reload CSS (default true)'
        },
        {
            name: 'target',
            type: String,
            default: 'development',
            aliases: ['t', { 'dev': 'development' }, { 'prod': 'production' }]
        },
        { name: 'environment', type: String, default: '', aliases: ['e'] },
        { name: 'ssl', type: Boolean, default: false },
        { name: 'ssl-key', type: String, default: 'ssl/server.key' },
        { name: 'ssl-cert', type: String, default: 'ssl/server.crt' }
    ],
    run: function (commandOptions) {
        var _this = this;
        if (commandOptions.environment === '') {
            if (commandOptions.target === 'development') {
                commandOptions.environment = 'dev';
            }
            if (commandOptions.target === 'production') {
                commandOptions.environment = 'prod';
            }
        }
        commandOptions.liveReloadHost = commandOptions.liveReloadHost || commandOptions.host;
        return this._checkExpressPort(commandOptions)
            .then(this._autoFindLiveReloadPort.bind(this))
            .then(function (opts) {
            commandOptions = assign({}, opts, {
                baseURL: _this.project.config(commandOptions.target).baseURL || '/'
            });
            var serve = new serve_webpack_1.default({
                ui: _this.ui,
                analytics: _this.analytics,
                project: _this.project,
            });
            return serve.run(commandOptions);
        });
    },
    _checkExpressPort: function (commandOptions) {
        return getPort({ port: commandOptions.port, host: commandOptions.host })
            .then(function (foundPort) {
            if (commandOptions.port !== foundPort && commandOptions.port !== 0) {
                throw new SilentError("Port " + commandOptions.port + " is already in use.");
            }
            // otherwise, our found port is good
            commandOptions.port = foundPort;
            return commandOptions;
        });
    },
    _autoFindLiveReloadPort: function (commandOptions) {
        var _this = this;
        return getPort({ port: commandOptions.liveReloadPort, host: commandOptions.liveReloadHost })
            .then(function (foundPort) {
            // if live reload port matches express port, try one higher
            if (foundPort === commandOptions.port) {
                commandOptions.liveReloadPort = foundPort + 1;
                return _this._autoFindLiveReloadPort(commandOptions);
            }
            // port was already open
            if (foundPort === commandOptions.liveReloadPort) {
                return commandOptions;
            }
            // use found port as live reload port
            commandOptions.liveReloadPort = foundPort;
            return commandOptions;
        });
    }
});
ServeCommand.overrideCore = true;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ServeCommand;
//# sourceMappingURL=/Users/hans/Sources/angular-cli/packages/angular-cli/angular-cli/commands/serve.js.map