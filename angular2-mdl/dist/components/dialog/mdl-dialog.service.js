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
var Subject_1 = require('rxjs/Subject');
var platform_browser_1 = require('@angular/platform-browser');
var mdl_dialog_component_1 = require('./mdl-dialog.component');
var mdl_dialog_host_component_1 = require('./mdl-dialog-host.component');
exports.MDL_CONFIGUARTION = new core_1.OpaqueToken('MDL_CONFIGUARTION');
exports.MDL_CONTENT_VIEW_CONTAINER_REF = new core_1.OpaqueToken('MDL_CONTENT_VIEW_CONTAINER_REF');
exports.MIN_DIALOG_Z_INDEX = 100000;
(function (ConfirmResult) {
    ConfirmResult[ConfirmResult["Confirmed"] = 0] = "Confirmed";
    ConfirmResult[ConfirmResult["Declined"] = 1] = "Declined";
})(exports.ConfirmResult || (exports.ConfirmResult = {}));
var ConfirmResult = exports.ConfirmResult;
/**
 * Internal representation of the dialog ref. the service
 * user should not have access to the created components
 * and internal implementations.
 */
var InternalMdlDialogReference = (function () {
    function InternalMdlDialogReference() {
        this.components = new Set();
        this.onHideSubject = new Subject_1.Subject();
        this.isModal = false;
    }
    InternalMdlDialogReference.prototype.addComponentRef = function (cRef) {
        this.components.add(cRef);
    };
    InternalMdlDialogReference.prototype.hide = function () {
        this.components.forEach(function (cRef) {
            cRef.destroy();
        });
        this.onHideSubject.next();
        this.onHideSubject.complete();
        this.closeCallback();
    };
    InternalMdlDialogReference.prototype.onHide = function () {
        return this.onHideSubject.asObservable();
    };
    return InternalMdlDialogReference;
}());
exports.InternalMdlDialogReference = InternalMdlDialogReference;
/**
 * The reference to the created and displayed dialog.
 */
var MdlDialogReference = (function () {
    function MdlDialogReference(internaleRef) {
        this.internaleRef = internaleRef;
    }
    /**
     * closes the dialog
     */
    MdlDialogReference.prototype.hide = function () {
        this.internaleRef.hide();
    };
    /**
     * Observable that emits, if the dialog was closed.
     * @returns {Observable<void>}
     */
    MdlDialogReference.prototype.onHide = function () {
        return this.internaleRef.onHide();
    };
    return MdlDialogReference;
}());
exports.MdlDialogReference = MdlDialogReference;
/**
 * The MdlDialogService is used to open different kind of dialogs. SimpleDialogs and Custom Dialogs.
 * @experimental
  */
var MdlDialogService = (function () {
    function MdlDialogService(componentFactoryResolver, doc) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.doc = doc;
        this.openDialogs = new Array();
        // create the overlay - that we will need to block the ui in case of modal dialogs
        // TODO bad angular design
        this.overlay = this.doc.createElement('div');
        this.overlay.className = 'dialog-backdrop';
        this.overlay.addEventListener('click', function (e) {
            e.stopPropagation();
        });
    }
    MdlDialogService.prototype.setDefaultViewContainerRef = function (vcRef) {
        this.defaultViewContainerRef = vcRef;
    };
    /**
     * Shows a dialog that is just an alert - e.g. with one button.
     * @param alertMessage The message that should be displayed.
     * @param okTex The text that the button should have
     * @param title The optional title of the dialog
     * @param vcRef The ViewContainerRef where the alert dialog should be attached to.
     * Must not be provided if setDefaultViewContainerRef was set.
     * @returns A promise that is called if the user hits the Ok button.
     */
    MdlDialogService.prototype.alert = function (alertMessage, okText, title, vcRef) {
        var _this = this;
        if (okText === void 0) { okText = 'Ok'; }
        return new Promise(function (resolve, reject) {
            _this.showDialog({
                title: title,
                message: alertMessage,
                actions: [
                    { handler: function () { return resolve(); }, text: okText }
                ],
                vcRef: vcRef,
                isModal: true
            });
        });
    };
    /**
     * Shows a dialog that is just a confirm message - e.g. with two button.
     * @param question The question that should be displayed.
     * @param declineText The text for decline button. defaults to Cancel
     * @param confirmText The text for the confirm button . defaults to Ok
     * @param vcRef The ViewContainerRef where the aletr dialog should be attached to.
     * Must not be provided if setDefaultViewContainerRef was set.
     * @returns A promise that is called if the user hits the Ok button.
     */
    MdlDialogService.prototype.confirm = function (question, declineText, confirmText, vcRef) {
        var _this = this;
        if (declineText === void 0) { declineText = 'Cancel'; }
        if (confirmText === void 0) { confirmText = 'Ok'; }
        return new Promise(function (resolve, reject) {
            _this.showDialog({
                message: question,
                actions: [
                    { handler: function () { return resolve(ConfirmResult.Confirmed); }, text: confirmText },
                    { handler: function () { return resolve(ConfirmResult.Declined); }, text: declineText, isClosingAction: true }
                ],
                vcRef: vcRef,
                isModal: true
            });
        });
    };
    /**
     * Shows a dialog that is specified by the provided configuration.
     * @param config The simple dialog configuration.
     * @returns A promise that returns the MdlDialogReference.
     */
    MdlDialogService.prototype.showDialog = function (config) {
        if (config.actions.length === 0) {
            throw new Error('a dialog mus have at least one aciton');
        }
        var internalDialogRef = new InternalMdlDialogReference();
        var dialogRef = new MdlDialogReference(internalDialogRef);
        var providers = [
            { provide: MdlDialogReference, useValue: dialogRef },
            { provide: InternalMdlDialogReference, useValue: internalDialogRef },
            { provide: exports.MDL_CONFIGUARTION, useValue: config }
        ];
        var contentDialog = this.createComponentInstance(config.vcRef, providers, mdl_dialog_component_1.MdlDialogComponent);
        return this.createHostDialog(dialogRef, internalDialogRef, contentDialog, config);
    };
    /**
     * Shows a dialog that is specified by the provided configuration.
     * @param config The custom dialog configuration.
     * @returns A promise that returns the MdlDialogReference.
     */
    MdlDialogService.prototype.showCustomDialog = function (config) {
        var internalDialogRef = new InternalMdlDialogReference();
        var dialogRef = new MdlDialogReference(internalDialogRef);
        var providers = [
            { provide: MdlDialogReference, useValue: dialogRef },
            { provide: InternalMdlDialogReference, useValue: internalDialogRef }
        ];
        var contentDialog = this.createComponentInstance(config.vcRef, providers, config.component);
        return this.createHostDialog(dialogRef, internalDialogRef, contentDialog, config);
    };
    MdlDialogService.prototype.createHostDialog = function (dialogRef, internalDialogRef, contentDialog, dialogConfig) {
        var _this = this;
        if (!contentDialog.viewContainerRef) {
            throw new Error('The CustomDialog should implement the interface IMdlCustomDialog');
        }
        var providers = [
            { provide: MdlDialogReference, useValue: dialogRef },
            { provide: InternalMdlDialogReference, useValue: internalDialogRef },
            { provide: exports.MDL_CONTENT_VIEW_CONTAINER_REF, useValue: contentDialog.viewContainerRef }
        ];
        var hostDialogComponent = this.createComponentInstance(dialogConfig.vcRef, providers, mdl_dialog_host_component_1.MdlDialogHostComponent);
        internalDialogRef.hostDialog = hostDialogComponent;
        internalDialogRef.isModal = dialogConfig.isModal;
        internalDialogRef.closeCallback = function () {
            _this.popDialog(internalDialogRef);
        };
        this.pushDialog(internalDialogRef);
        return Promise.resolve(dialogRef);
    };
    MdlDialogService.prototype.pushDialog = function (dialogRef) {
        this.openDialogs.push(dialogRef);
        this.orderDialogStack();
    };
    MdlDialogService.prototype.popDialog = function (dialogRef) {
        this.openDialogs.splice(this.openDialogs.indexOf(dialogRef), 1);
        this.orderDialogStack();
    };
    MdlDialogService.prototype.orderDialogStack = function () {
        // +1 because the overlay may have MIN_DIALOG_Z_INDEX if the dialog is modal.
        var zIndex = exports.MIN_DIALOG_Z_INDEX + 1;
        this.openDialogs.forEach(function (iDialogRef) {
            iDialogRef.hostDialog.zIndex = zIndex;
            // +2 to make room for the overlay if a dialog is modal
            zIndex += 2;
        });
        // if there is a modal dialog append the overloay to the dom - if not remove the overlay from the body
        var topMostModalDialog = null;
        for (var i = (this.openDialogs.length - 1); i >= 0; i--) {
            if (this.openDialogs[i].isModal) {
                topMostModalDialog = this.openDialogs[i];
                break;
            }
        }
        if (this.overlay.parentElement) {
            this.overlay.parentElement.removeChild(this.overlay);
        }
        if (topMostModalDialog) {
            // append the overlay - TODO bad angular design
            this.doc.body.appendChild(this.overlay);
            // move the overlay diredct under the topmos modal dialog
            this.overlay.style.zIndex = String(topMostModalDialog.hostDialog.zIndex - 1);
        }
    };
    MdlDialogService.prototype.createComponentInstance = function (targetVCRef, providers, component) {
        var cFactory = this.componentFactoryResolver.resolveComponentFactory(component);
        var viewContainerRef = targetVCRef || this.defaultViewContainerRef;
        if (!viewContainerRef) {
            throw new Error('You did not provide a ViewContainerRef. Please see https://github.com/mseemann/angular2-mdl/wiki/How-to-use-the-MdlDialogService');
        }
        var resolvedProviders = core_1.ReflectiveInjector.resolve(providers);
        var parentInjector = viewContainerRef.parentInjector;
        var childInjector = core_1.ReflectiveInjector.fromResolvedProviders(resolvedProviders, parentInjector);
        var componentRef = viewContainerRef.createComponent(cFactory, viewContainerRef.length, childInjector);
        var internalDialogRef = childInjector.get(InternalMdlDialogReference);
        // add the componentref to the internalDialogRef - this will later be used to
        // call componentref.destroy if the dialog goes hidden.
        internalDialogRef.addComponentRef(componentRef);
        return componentRef.instance;
    };
    MdlDialogService = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Inject(platform_browser_1.DOCUMENT)), 
        __metadata('design:paramtypes', [core_1.ComponentFactoryResolver, Object])
    ], MdlDialogService);
    return MdlDialogService;
}());
exports.MdlDialogService = MdlDialogService;
//# sourceMappingURL=../../../dist/components/dialog/mdl-dialog.service.js.map