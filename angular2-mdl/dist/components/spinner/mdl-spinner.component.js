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
var core_1 = require('@angular/core');
var boolean_property_1 = require('./../common/boolean-property');
var common_1 = require('@angular/common');
var MdlSpinnerComponent = (function () {
    function MdlSpinnerComponent() {
        this.layers = [1, 2, 3, 4];
    }
    __decorate([
        core_1.Input(),
        boolean_property_1.BooleanProperty(), 
        __metadata('design:type', Boolean)
    ], MdlSpinnerComponent.prototype, "active", void 0);
    __decorate([
        core_1.Input('single-color'),
        boolean_property_1.BooleanProperty(), 
        __metadata('design:type', Boolean)
    ], MdlSpinnerComponent.prototype, "singleColor", void 0);
    MdlSpinnerComponent = __decorate([
        core_1.Component({
            selector: 'mdl-spinner',
            host: {
                '[class.mdl-spinner]': 'true',
                '[class.is-upgraded]': 'true',
                '[class.is-active]': 'active',
                '[class.mdl-spinner--single-color]': 'singleColor',
            },
            // must be one line - otherwise the spinner is broken in the ui
            /* tslint:disable */
            template: "\n    <div *ngFor=\"let layer of layers;\" \n            class=\"mdl-spinner__layer mdl-spinner__layer-{{layer}}\">\n      <div class=\"mdl-spinner__circle-clipper mdl-spinner__left\">\n         <div class=\"mdl-spinner__circle\"></div>\n      </div><div class=\"mdl-spinner__gap-patch\"><div class=\"mdl-spinner__circle\"></div></div><div class=\"mdl-spinner__circle-clipper mdl-spinner__right\"><div class=\"mdl-spinner__circle\"></div></div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], MdlSpinnerComponent);
    return MdlSpinnerComponent;
}());
exports.MdlSpinnerComponent = MdlSpinnerComponent;
var MDL_SPINNER_DIRECTIVES = [MdlSpinnerComponent];
var MdlSpinnerModule = (function () {
    function MdlSpinnerModule() {
    }
    MdlSpinnerModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            exports: MDL_SPINNER_DIRECTIVES,
            declarations: MDL_SPINNER_DIRECTIVES,
        }), 
        __metadata('design:paramtypes', [])
    ], MdlSpinnerModule);
    return MdlSpinnerModule;
}());
exports.MdlSpinnerModule = MdlSpinnerModule;
//# sourceMappingURL=../../../dist/components/spinner/mdl-spinner.component.js.map