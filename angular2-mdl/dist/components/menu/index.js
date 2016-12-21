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
var mdl_menu_component_1 = require('./mdl-menu.component');
var mdl_menu_item_component_1 = require('./mdl-menu-item.component');
var mdl_menu_item_directive_1 = require('./mdl-menu-item.directive');
var common_1 = require('@angular/common');
var MDL_MENU_DIRECTIVES = [
    mdl_menu_component_1.MdlMenuComponent,
    mdl_menu_item_component_1.MdlMenuItemComponent,
    mdl_menu_item_directive_1.MdlMenuItemFullBleedDeviderComponent
];
__export(require('./mdl-menu.component'));
__export(require('./mdl-menu-item.component'));
__export(require('./mdl-menu-item.directive'));
var MdlMenuModule = (function () {
    function MdlMenuModule() {
    }
    MdlMenuModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            exports: MDL_MENU_DIRECTIVES,
            declarations: MDL_MENU_DIRECTIVES,
        }), 
        __metadata('design:paramtypes', [])
    ], MdlMenuModule);
    return MdlMenuModule;
}());
exports.MdlMenuModule = MdlMenuModule;
//# sourceMappingURL=../../../dist/components/menu/index.js.map