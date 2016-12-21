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
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var mdl_dialog_service_1 = require('./mdl-dialog.service');
var mdl_dialog_component_1 = require('./mdl-dialog.component');
var index_1 = require('../common/index');
var mdl_dialog_host_component_1 = require('./mdl-dialog-host.component');
__export(require('./mdl-dialog.service'));
var MdlDialogModule = (function () {
    function MdlDialogModule() {
    }
    MdlDialogModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, index_1.MdlCommonsModule],
            exports: [mdl_dialog_component_1.MdlDialogComponent],
            declarations: [mdl_dialog_component_1.MdlDialogComponent, mdl_dialog_host_component_1.MdlDialogHostComponent],
            providers: [mdl_dialog_service_1.MdlDialogService],
            entryComponents: [mdl_dialog_component_1.MdlDialogComponent, mdl_dialog_host_component_1.MdlDialogHostComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], MdlDialogModule);
    return MdlDialogModule;
}());
exports.MdlDialogModule = MdlDialogModule;
//# sourceMappingURL=../../../dist/components/dialog/index.js.map