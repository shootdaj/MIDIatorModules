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
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var mdl_icon_component_1 = require('./../icon/mdl-icon.component');
var mdl_checkbox_component_1 = require('./../checkbox/mdl-checkbox.component');
var MdlIconToggleComponent = (function (_super) {
    __extends(MdlIconToggleComponent, _super);
    function MdlIconToggleComponent(elementRef, renderer) {
        _super.call(this, elementRef, renderer);
    }
    MdlIconToggleComponent = __decorate([
        core_1.Component({
            selector: 'mdl-icon-toggle',
            providers: [{
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return MdlIconToggleComponent; }),
                    multi: true }],
            host: {
                '(click)': 'onClick()',
                '[class.mdl-icon-toggle]': 'true',
                '[class.is-upgraded]': 'true',
                '[class.is-checked]': 'value',
                '[class.is-disabled]': 'disabled'
            },
            outputs: ['change'],
            template: "\n  <input type=\"checkbox\" class=\"mdl-icon-toggle__input\" \n    (focus)=\"onFocus()\" \n    (blur)=\"onBlur()\"\n    [disabled]=\"disabled\"\n    [(ngModel)]=\"value\">\n  <mdl-icon class=\"mdl-icon-toggle__label\"><ng-content></ng-content></mdl-icon>\n  ",
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], MdlIconToggleComponent);
    return MdlIconToggleComponent;
}(mdl_checkbox_component_1.MdlCheckboxComponent));
exports.MdlIconToggleComponent = MdlIconToggleComponent;
var MDL_ICON_TOGGLE_DIRECTIVES = [MdlIconToggleComponent];
var MdlIconToggleModule = (function () {
    function MdlIconToggleModule() {
    }
    MdlIconToggleModule = __decorate([
        core_1.NgModule({
            imports: [mdl_icon_component_1.MdlIconModule, common_1.CommonModule, forms_1.FormsModule],
            exports: MDL_ICON_TOGGLE_DIRECTIVES,
            declarations: MDL_ICON_TOGGLE_DIRECTIVES,
        }), 
        __metadata('design:paramtypes', [])
    ], MdlIconToggleModule);
    return MdlIconToggleModule;
}());
exports.MdlIconToggleModule = MdlIconToggleModule;
//# sourceMappingURL=../../../dist/components/icon-toggle/mdl-icon-toggle.component.js.map