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
var mdl_ripple_directive_1 = require('./common/mdl-ripple.directive');
var mdl_button_component_1 = require('./button/mdl-button.component');
var mdl_badge_directive_1 = require('./badge/mdl-badge.directive');
var mdl_shadow_directive_1 = require('./shadow/mdl-shadow.directive');
var mdl_card_component_1 = require('./card/mdl-card.component');
var index_1 = require('./chips/index');
var index_2 = require('./dialog/index');
var mdl_checkbox_component_1 = require('./checkbox/mdl-checkbox.component');
var mdl_radio_component_1 = require('./radio/mdl-radio.component');
var mdl_progress_component_1 = require('./progress/mdl-progress.component');
var mdl_icon_component_1 = require('./icon/mdl-icon.component');
var mdl_icon_toggle_component_1 = require('./icon-toggle/mdl-icon-toggle.component');
var mdl_list_component_1 = require('./list/mdl-list.component');
var mdl_spinner_component_1 = require('./spinner/mdl-spinner.component');
var mdl_slider_component_1 = require('./slider/mdl-slider.component');
var mdl_switch_component_1 = require('./switch/mdl-switch.component');
var mdl_snackbar_service_1 = require('./snackbar/mdl-snackbar.service');
var index_3 = require('./tooltip/index');
var index_4 = require('./table/index');
var index_5 = require('./menu/index');
var index_6 = require('./layout/index');
var index_7 = require('./tabs/index');
var mdl_textfield_component_1 = require('./textfield/mdl-textfield.component');
__export(require('./common/mdl-ripple.directive'));
__export(require('./badge/mdl-badge.directive'));
__export(require('./button/mdl-button.component'));
__export(require('./card/mdl-card.component'));
__export(require('./checkbox/mdl-checkbox.component'));
__export(require('./chips/index'));
__export(require('./dialog/index'));
__export(require('./icon/mdl-icon.component'));
__export(require('./list/mdl-list.component'));
__export(require('./icon-toggle/mdl-icon-toggle.component'));
__export(require('./progress/mdl-progress.component'));
__export(require('./radio/mdl-radio.component'));
__export(require('./shadow/mdl-shadow.directive'));
__export(require('./spinner/mdl-spinner.component'));
__export(require('./slider/mdl-slider.component'));
__export(require('./snackbar/mdl-snackbar.service'));
__export(require('./switch/mdl-switch.component'));
__export(require('./table/index'));
__export(require('./tooltip/index'));
__export(require('./menu/index'));
__export(require('./layout/index'));
__export(require('./tabs/index'));
__export(require('./textfield/mdl-textfield.component'));
var MDL_SERVICES = [
    mdl_snackbar_service_1.MdlSnackbarService
];
var MDL_MODULES = [
    mdl_button_component_1.MdlButtonModule,
    index_6.MdlLayoutModule,
    mdl_checkbox_component_1.MdlChekboxModule,
    index_1.MdlChipModule,
    index_2.MdlDialogModule,
    mdl_spinner_component_1.MdlSpinnerModule,
    mdl_ripple_directive_1.MdlRippleModule,
    mdl_badge_directive_1.MdlBadgeModule,
    mdl_shadow_directive_1.MdlShadowModule,
    mdl_card_component_1.MdlCardModule,
    mdl_radio_component_1.MdlRadioModule,
    mdl_progress_component_1.MdlProgressModule,
    mdl_icon_component_1.MdlIconModule,
    mdl_icon_toggle_component_1.MdlIconToggleModule,
    mdl_list_component_1.MdlListModule,
    mdl_slider_component_1.MdlSliderModule,
    mdl_switch_component_1.MdlSwitchModule,
    index_3.MdlTooltipModule,
    index_4.MdlTableModule,
    index_5.MdlMenuModule,
    index_7.MdlTabsModule,
    mdl_textfield_component_1.MdlTextFieldModule
];
var MdlModule = (function () {
    function MdlModule() {
    }
    MdlModule = __decorate([
        core_1.NgModule({
            imports: MDL_MODULES,
            exports: MDL_MODULES,
            providers: MDL_SERVICES
        }), 
        __metadata('design:paramtypes', [])
    ], MdlModule);
    return MdlModule;
}());
exports.MdlModule = MdlModule;
//# sourceMappingURL=../../dist/components/index.js.map