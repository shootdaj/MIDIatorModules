"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var mdl_error_1 = require('../common/mdl-error');
var common_1 = require('@angular/common');
var MdlSnackbarError = (function (_super) {
    __extends(MdlSnackbarError, _super);
    function MdlSnackbarError(message) {
        _super.call(this, "" + message);
    }
    return MdlSnackbarError;
}(mdl_error_1.MdlError));
exports.MdlSnackbarError = MdlSnackbarError;
var ANIMATION_TIME = 250;
var MdlSnackbarComponent = (function () {
    function MdlSnackbarComponent() {
        this.showIt = false;
    }
    MdlSnackbarComponent.prototype.onClick = function () {
        this.onAction();
    };
    MdlSnackbarComponent.prototype.isActive = function () {
        return this.showIt;
    };
    MdlSnackbarComponent.prototype.show = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // wait unit the dom is in place - then showIt will change the css class
            setTimeout(function () {
                _this.showIt = true;
                // fire after the view animation is done
                setTimeout(function () {
                    resolve();
                }, ANIMATION_TIME);
            }, 1);
        });
    };
    MdlSnackbarComponent.prototype.hide = function () {
        this.showIt = false;
        return new Promise(function (resolve, reject) {
            // fire after the view animation is done
            setTimeout(function () {
                resolve();
            }, ANIMATION_TIME);
        });
    };
    MdlSnackbarComponent = __decorate([
        core_1.Component({
            selector: 'mdl-snackbar-component',
            template: "\n    <div id=\"demo-toast-example\" class=\" mdl-snackbar\" [ngClass]=\"{'mdl-snackbar--active': showIt }\">\n      <div class=\"mdl-snackbar__text\">{{message}}</div>\n      <button *ngIf=\"onAction\" class=\"mdl-snackbar__action\" type=\"button\" (click)=\"onClick()\" >{{actionText}}</button>\n    </div>\n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], MdlSnackbarComponent);
    return MdlSnackbarComponent;
}());
exports.MdlSnackbarComponent = MdlSnackbarComponent;
var MdlSnackbarService = (function () {
    function MdlSnackbarService(injector, compiler) {
        this.injector = injector;
        this.compiler = compiler;
    }
    MdlSnackbarService.prototype.setDefaultViewContainerRef = function (vcRef) {
        this.defaultViewContainerRef = vcRef;
    };
    MdlSnackbarService.prototype.showToast = function (message, timeout, vcRef) {
        return this.showSnackbar({
            message: message,
            timeout: timeout,
            vcRef: vcRef
        });
    };
    MdlSnackbarService.prototype.showSnackbar = function (snackbarMessage) {
        var optTimeout = snackbarMessage.timeout || 2750;
        var viewContainerRef = snackbarMessage.vcRef || this.defaultViewContainerRef;
        if (!viewContainerRef) {
            throw new MdlSnackbarError('A viewContainerRef must be present. ' +
                'Wether as by setDefaultViewContainerRef or as IMdlSnackbarMessage param.');
        }
        var moduleFactories = this.compiler
            .compileModuleAndAllComponentsSync(MdlSnackbaModule);
        var cRef = null;
        moduleFactories.componentFactories.forEach(function (cFactory) {
            cRef = viewContainerRef.createComponent(cFactory);
        });
        var mdlSnackbarComponent = cRef.instance;
        mdlSnackbarComponent.message = snackbarMessage.message;
        // TODO make sure only one snackbar is visible at one time
        // observable? push the configured instance and consume one after another?
        if (snackbarMessage.action) {
            mdlSnackbarComponent.actionText = snackbarMessage.action.text;
            mdlSnackbarComponent.onAction = function () {
                mdlSnackbarComponent.hide().then(function () {
                    cRef.destroy();
                    snackbarMessage.action.handler();
                });
            };
        }
        else {
            setTimeout(function () {
                mdlSnackbarComponent.hide().then(function () { cRef.destroy(); });
            }, optTimeout);
        }
        return mdlSnackbarComponent.show().then(function () {
            return mdlSnackbarComponent;
        });
    };
    MdlSnackbarService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [core_1.Injector, core_1.Compiler])
    ], MdlSnackbarService);
    return MdlSnackbarService;
}());
exports.MdlSnackbarService = MdlSnackbarService;
var MdlSnackbaModule = (function () {
    function MdlSnackbaModule() {
    }
    MdlSnackbaModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            exports: [MdlSnackbarComponent],
            declarations: [MdlSnackbarComponent],
            providers: [MdlSnackbarService]
        }), 
        __metadata('design:paramtypes', [])
    ], MdlSnackbaModule);
    return MdlSnackbaModule;
}());
exports.MdlSnackbaModule = MdlSnackbaModule;
//# sourceMappingURL=../../../dist/components/snackbar/mdl-snackbar.service.js.map