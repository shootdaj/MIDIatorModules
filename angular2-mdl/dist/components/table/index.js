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
var mdl_table_component_1 = require('./mdl-table.component');
var mdl_checkbox_component_1 = require('./../checkbox/mdl-checkbox.component');
var mdl_ripple_directive_1 = require('./../common/mdl-ripple.directive');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
__export(require('./mdl-table'));
__export(require('./mdl-table.component'));
var MDL_TABLE_DIRECTIVES = [
    mdl_table_component_1.MdlTableComponent,
    mdl_table_component_1.MdlSelectableTableComponent
];
var MdlTableModule = (function () {
    function MdlTableModule() {
    }
    MdlTableModule = __decorate([
        core_1.NgModule({
            imports: [mdl_checkbox_component_1.MdlChekboxModule, mdl_ripple_directive_1.MdlRippleModule, common_1.CommonModule, forms_1.FormsModule],
            exports: MDL_TABLE_DIRECTIVES,
            declarations: MDL_TABLE_DIRECTIVES,
        }), 
        __metadata('design:paramtypes', [])
    ], MdlTableModule);
    return MdlTableModule;
}());
exports.MdlTableModule = MdlTableModule;
//# sourceMappingURL=../../../dist/components/table/index.js.map