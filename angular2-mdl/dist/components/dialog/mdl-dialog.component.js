"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var mdl_dialog_service_1 = require('./mdl-dialog.service');
// @experimental
var MdlDialogComponent = (function () {
    // why do i need forwardRef at this point, the demo LoginDialog dosn't need this!?!?
    function MdlDialogComponent(vcRef, dialogConfiguration, dialog, ngZone) {
        this.vcRef = vcRef;
        this.dialogConfiguration = dialogConfiguration;
        this.dialog = dialog;
        this.ngZone = ngZone;
    }
    Object.defineProperty(MdlDialogComponent.prototype, "viewContainerRef", {
        get: function () {
            return this.vcRef;
        },
        enumerable: true,
        configurable: true
    });
    MdlDialogComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // set the focus to the first focuable element
        this.ngZone.onMicrotaskEmpty.subscribe(function () {
            _this.buttons.first.nativeElement.focus();
        });
    };
    MdlDialogComponent.prototype.actionClicked = function (action) {
        action.handler();
        this.dialog.hide();
    };
    MdlDialogComponent.prototype.onEsc = function () {
        // run the first action that is marked as closing action
        var closeAction = this.dialogConfiguration.actions.find(function (action) { return action.isClosingAction; });
        if (closeAction) {
            closeAction.handler();
            this.dialog.hide();
        }
    };
    __decorate([
        core_1.ViewChildren('button'), 
        __metadata('design:type', core_1.QueryList)
    ], MdlDialogComponent.prototype, "buttons", void 0);
    __decorate([
        core_1.HostListener('keydown.esc'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], MdlDialogComponent.prototype, "onEsc", null);
    MdlDialogComponent = __decorate([
        core_1.Component({
            selector: 'mdl-dialog-component',
            host: {
                '[class.mdl-dialog]': 'true',
                '[class.open]': 'true',
                '[class.fixed]': 'true'
            },
            template: "\n      <div>\n        <h3 class=\"mdl-dialog__title\" *ngIf=\"dialogConfiguration?.title\">{{dialogConfiguration?.title}}</h3>\n        <div class=\"mdl-dialog__content\">{{dialogConfiguration?.message}}</div>\n        <div \n          class=\"mdl-dialog__actions\" \n          [ngClass]=\"{'mdl-dialog__actions--full-width': dialogConfiguration?.fullWidthAction}\">\n          <button\n            #button\n            type=\"button\" \n            class=\"mdl-button mdl-color-text--primary\" \n            *ngFor=\"let action of dialogConfiguration?.actions\" \n            (click)=\"actionClicked(action)\"\n            [ngClass]=\"{'close': action.isClosingAction}\">{{action.text}}</button>\n        </div>\n      </div>\n  ",
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __param(1, core_1.Inject(core_1.forwardRef(function () { return mdl_dialog_service_1.MDL_CONFIGUARTION; }))),
        __param(2, core_1.Inject(core_1.forwardRef(function () { return mdl_dialog_service_1.MdlDialogReference; }))), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef, Object, mdl_dialog_service_1.MdlDialogReference, core_1.NgZone])
    ], MdlDialogComponent);
    return MdlDialogComponent;
}());
exports.MdlDialogComponent = MdlDialogComponent;
//# sourceMappingURL=../../../dist/components/dialog/mdl-dialog.component.js.map