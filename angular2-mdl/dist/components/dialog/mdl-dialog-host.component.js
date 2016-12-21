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
var MdlDialogHostComponent = (function () {
    function MdlDialogHostComponent(dialogContentViewContainerRef) {
        this.dialogContentViewContainerRef = dialogContentViewContainerRef;
        this.zIndex = mdl_dialog_service_1.MIN_DIALOG_Z_INDEX + 1;
    }
    MdlDialogHostComponent = __decorate([
        core_1.Component({
            selector: 'mdl-dialog-host-component',
            host: {
                '[class.mdl-dialog]': 'true',
                '[class.open]': 'true',
                '[class.fixed]': 'true',
                '[style.zIndex]': 'zIndex'
            },
            template: "<div [append-view-container-ref]=\"dialogContentViewContainerRef\"></div>",
            styles: [
                "\n    mdl-dialog-host-component {\n      position: absolute;\n      left: 0; right: 0;\n      width: -moz-fit-content;\n      width: -webkit-fit-content;\n      width: fit-content;\n      height: -moz-fit-content;\n      height: -webkit-fit-content;\n      height: fit-content;\n      margin: auto;\n      border: solid;\n      padding: 1em;\n      background: white;\n      color: black;\n      display: none;\n      z-index: 1;\n    }\n    \n    mdl-dialog-host-component.open {\n      display: block;\n    }\n    \n    mdl-dialog-host-component.fixed {\n      position: fixed;\n      top: 50%;\n      transform: translate(0, -50%);\n    }\n    \n    .dialog-backdrop {\n      position: fixed;\n      top: 0; right: 0; bottom: 0; left: 0;\n      background: rgba(0,0,0,0.1);\n    }\n\n    "
            ],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __param(0, core_1.Inject(core_1.forwardRef(function () { return mdl_dialog_service_1.MDL_CONTENT_VIEW_CONTAINER_REF; }))), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef])
    ], MdlDialogHostComponent);
    return MdlDialogHostComponent;
}());
exports.MdlDialogHostComponent = MdlDialogHostComponent;
//# sourceMappingURL=../../../dist/components/dialog/mdl-dialog-host.component.js.map