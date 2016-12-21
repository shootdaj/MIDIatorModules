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
var forms_1 = require('@angular/forms');
var common_1 = require('@angular/common');
var boolean_property_1 = require('./../common/boolean-property');
var noop = function (_) { };
var IS_FOCUSED = 'is-focused';
exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return MdlCheckboxComponent; }),
    multi: true
};
var MdlCheckboxComponent = (function () {
    function MdlCheckboxComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.disabled = false;
        this.change = new core_1.EventEmitter();
        this.value_ = false;
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        this.el = elementRef.nativeElement;
    }
    Object.defineProperty(MdlCheckboxComponent.prototype, "value", {
        get: function () { return this.value_; },
        set: function (v) {
            this.value_ = v;
            this.onChangeCallback(v);
            this.change.emit(v);
        },
        enumerable: true,
        configurable: true
    });
    ;
    MdlCheckboxComponent.prototype.writeValue = function (value) {
        this.value_ = value;
    };
    MdlCheckboxComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    MdlCheckboxComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    MdlCheckboxComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    MdlCheckboxComponent.prototype.onFocus = function () {
        this.renderer.setElementClass(this.el, IS_FOCUSED, true);
    };
    MdlCheckboxComponent.prototype.onBlur = function () {
        this.renderer.setElementClass(this.el, IS_FOCUSED, false);
        this.onTouchedCallback();
    };
    MdlCheckboxComponent.prototype.onClick = function () {
        if (this.disabled) {
            return;
        }
        this.value = !this.value;
    };
    __decorate([
        core_1.Input(),
        boolean_property_1.BooleanProperty(), 
        __metadata('design:type', Object)
    ], MdlCheckboxComponent.prototype, "disabled", void 0);
    MdlCheckboxComponent = __decorate([
        core_1.Component({
            selector: 'mdl-checkbox',
            providers: [exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
            host: {
                '(click)': 'onClick()',
                '[class.mdl-checkbox]': 'true',
                '[class.is-upgraded]': 'true',
                '[class.is-checked]': 'value',
                '[class.is-disabled]': 'disabled'
            },
            template: "\n  <input type=\"checkbox\" class=\"mdl-checkbox__input\" \n    (focus)=\"onFocus()\" \n    (blur)=\"onBlur()\"\n    [disabled]=\"disabled\"\n    [ngModel]=\"value\">\n  <span class=\"mdl-checkbox__label\"><ng-content></ng-content></span>\n  <span class=\"mdl-checkbox__focus-helper\"></span>\n  <span class=\"mdl-checkbox__box-outline\">\n    <span class=\"mdl-checkbox__tick-outline\"></span>\n  </span>\n  ",
            inputs: ['value'],
            outputs: ['change'],
            encapsulation: core_1.ViewEncapsulation.None,
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], MdlCheckboxComponent);
    return MdlCheckboxComponent;
}());
exports.MdlCheckboxComponent = MdlCheckboxComponent;
var MDL_CHECKBOX_DIRECTIVES = [MdlCheckboxComponent];
var MdlChekboxModule = (function () {
    function MdlChekboxModule() {
    }
    MdlChekboxModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule],
            exports: MDL_CHECKBOX_DIRECTIVES,
            declarations: MDL_CHECKBOX_DIRECTIVES,
        }), 
        __metadata('design:paramtypes', [])
    ], MdlChekboxModule);
    return MdlChekboxModule;
}());
exports.MdlChekboxModule = MdlChekboxModule;
//# sourceMappingURL=../../../dist/components/checkbox/mdl-checkbox.component.js.map