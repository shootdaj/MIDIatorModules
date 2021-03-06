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
var mdl_layout_component_1 = require('./mdl-layout.component');
var mdl_layout_header_component_1 = require('./mdl-layout-header.component');
var mdl_layout_drawer_component_1 = require('./mdl-layout-drawer.component');
var mdl_layout_content_component_1 = require('./mdl-layout-content.component');
var mdl_layout_header_transparent_directive_1 = require('./mdl-layout-header-transparent.directive');
var mdl_layout_header_row_component_1 = require('./mdl-layout-header-row.component');
var mdl_layout_title_component_1 = require('./mdl-layout-title.component');
var mdl_layout_spacer_component_1 = require('./mdl-layout-spacer.component');
var mdl_layout_tab_panel_component_1 = require('./mdl-layout-tab-panel.component');
var mdl_icon_component_1 = require('./../icon/mdl-icon.component');
var mdl_ripple_directive_1 = require('./../common/mdl-ripple.directive');
var index_1 = require('./../common/index');
var common_1 = require('@angular/common');
var index_2 = require('../tabs/index');
var MDL_LAYOUT_DIRECTIVES = [
    mdl_layout_component_1.MdlLayoutComponent,
    mdl_layout_header_component_1.MdlLayoutHeaderComponent,
    mdl_layout_drawer_component_1.MdlLayoutDrawerComponent,
    mdl_layout_content_component_1.MdlLayoutContentComponent,
    mdl_layout_header_transparent_directive_1.MdlLayoutHeaderTransparentDirective,
    mdl_layout_header_row_component_1.MdlLayoutHeaderRowComponent,
    mdl_layout_title_component_1.MdlLayoutTitleComponent,
    mdl_layout_spacer_component_1.MdlLayoutSpacerComponent,
    mdl_layout_tab_panel_component_1.MdlLayoutTabPanelComponent
];
__export(require('./mdl-layout.component'));
__export(require('./mdl-layout-header.component'));
__export(require('./mdl-layout-drawer.component'));
__export(require('./mdl-layout-content.component'));
__export(require('./mdl-layout-header-transparent.directive'));
__export(require('./mdl-layout-header-row.component'));
__export(require('./mdl-layout-title.component'));
__export(require('./mdl-layout-spacer.component'));
__export(require('./mdl-layout-tab-panel.component'));
var MdlLayoutModule = (function () {
    function MdlLayoutModule() {
    }
    MdlLayoutModule = __decorate([
        core_1.NgModule({
            imports: [mdl_icon_component_1.MdlIconModule, mdl_ripple_directive_1.MdlRippleModule, index_1.MdlCommonsModule, index_2.MdlTabsModule, common_1.CommonModule],
            exports: MDL_LAYOUT_DIRECTIVES,
            declarations: MDL_LAYOUT_DIRECTIVES,
        }), 
        __metadata('design:paramtypes', [])
    ], MdlLayoutModule);
    return MdlLayoutModule;
}());
exports.MdlLayoutModule = MdlLayoutModule;
//# sourceMappingURL=../../../dist/components/layout/index.js.map