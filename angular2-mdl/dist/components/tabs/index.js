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
var mdl_tabs_component_1 = require('./mdl-tabs.component');
var mdl_tab_panel_component_1 = require('./mdl-tab-panel.component');
var mdl_tab_panel_title_component_1 = require('./mdl-tab-panel-title.component');
var core_1 = require('@angular/core');
var mdl_ripple_directive_1 = require('./../common/mdl-ripple.directive');
var index_1 = require('./../common/index');
var common_1 = require('@angular/common');
__export(require('./mdl-tabs.component'));
__export(require('./mdl-tab-panel.component'));
__export(require('./mdl-tab-panel-title.component'));
var MDL_TABS_DIRECTIVES = [
    mdl_tabs_component_1.MdlTabsComponent,
    mdl_tab_panel_component_1.MdlTabPanelComponent,
    mdl_tab_panel_title_component_1.MdlTabPanelTitleComponent,
    mdl_tab_panel_component_1.MdlTabPanelContent
];
var MdlTabsModule = (function () {
    function MdlTabsModule() {
    }
    MdlTabsModule = __decorate([
        core_1.NgModule({
            imports: [mdl_ripple_directive_1.MdlRippleModule, index_1.MdlCommonsModule, common_1.CommonModule],
            exports: MDL_TABS_DIRECTIVES,
            declarations: MDL_TABS_DIRECTIVES.slice(),
        }), 
        __metadata('design:paramtypes', [])
    ], MdlTabsModule);
    return MdlTabsModule;
}());
exports.MdlTabsModule = MdlTabsModule;
//# sourceMappingURL=../../../dist/components/tabs/index.js.map