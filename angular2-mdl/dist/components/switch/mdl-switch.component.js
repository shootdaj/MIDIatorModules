"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var forms_1 = require('@angular/forms');
var mdl_checkbox_component_1 = require('./../checkbox/mdl-checkbox.component');
var common_1 = require('@angular/common');
var MdlSwitchComponent = (function (_super) {
    __extends(MdlSwitchComponent, _super);
    function MdlSwitchComponent(elementRef, renderer) {
        _super.call(this, elementRef, renderer);
    }
    MdlSwitchComponent = __decorate([
        core_1.Component({
            selector: 'mdl-switch',
            providers: [{
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return MdlSwitchComponent; }),
                    multi: true
                }],
            host: {
                '(click)': 'onClick()',
                '[class.mdl-switch]': 'true',
                '[class.is-upgraded]': 'true',
                '[class.is-checked]': 'value',
                '[class.is-disabled]': 'disabled'
            },
            outputs: ['change'],
            template: "\n    <input type=\"checkbox\" class=\"mdl-switch__input\" \n      (focus)=\"onFocus()\" \n      (blur)=\"onBlur()\"\n      [disabled]=\"disabled\"\n      [(ngModel)]=\"value\">\n    <span class=\"mdl-switch__label\"><ng-content></ng-content></span>\n    <div class=\"mdl-switch__track\"></div>\n    <div class=\"mdl-switch__thumb\"><span class=\"mdl-switch__focus-helper\"></span></div>\n  "
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], MdlSwitchComponent);
    return MdlSwitchComponent;
}(mdl_checkbox_component_1.MdlCheckboxComponent));
exports.MdlSwitchComponent = MdlSwitchComponent;
var MDL_SWITCH_DIRECTIVES = [MdlSwitchComponent];
var MdlSwitchModule = (function () {
    function MdlSwitchModule() {
    }
    MdlSwitchModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule],
            exports: MDL_SWITCH_DIRECTIVES,
            declarations: MDL_SWITCH_DIRECTIVES,
        }), 
        __metadata('design:paramtypes', [])
    ], MdlSwitchModule);
    return MdlSwitchModule;
}());
exports.MdlSwitchModule = MdlSwitchModule;
//# sourceMappingURL=../../../dist/components/switch/mdl-switch.component.js.map