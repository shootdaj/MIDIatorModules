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
var noop = function () { };
var IS_FOCUSED = 'is-focused';
// Registry for mdl-readio compnents. Is responsible to keep the
// right state of the radio buttons of a radio group. It would be
// easier if i had a mdl-radio-group component. but this would be
// a big braking change.
var MdlRadioGroupRegisty = (function () {
    function MdlRadioGroupRegisty() {
        this.radioComponents = [];
    }
    MdlRadioGroupRegisty.prototype.add = function (radioComponent) {
        this.radioComponents.push(radioComponent);
    };
    MdlRadioGroupRegisty.prototype.remove = function (radioComponent) {
        this.radioComponents.slice(this.radioComponents.indexOf(radioComponent), 1);
    };
    MdlRadioGroupRegisty.prototype.select = function (radioComponent) {
        // unselect evenry radioComponent that is not the provided radiocomponent and has the same name
        this.radioComponents.forEach(function (component) {
            if (component.name === radioComponent.name) {
                if (component !== radioComponent) {
                    component.deselect(radioComponent.value);
                }
            }
        });
    };
    MdlRadioGroupRegisty = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], MdlRadioGroupRegisty);
    return MdlRadioGroupRegisty;
}());
exports.MdlRadioGroupRegisty = MdlRadioGroupRegisty;
/*
 <mdl-radio name="group1" value="1" [(ngModel)]="radioOption">Value 1</mdl-radio>
 */
var MdlRadioComponent = (function () {
    function MdlRadioComponent(elementRef, renderer, ragioGroupRegisty) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.ragioGroupRegisty = ragioGroupRegisty;
        this.disabled = false;
        this.change = new core_1.EventEmitter();
        // the internal state - used to set the underlaying radio button state.
        this.checked = false;
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        this.el = elementRef.nativeElement;
    }
    MdlRadioComponent.prototype.ngOnInit = function () {
        // we need a name and it must be the same as in the formcontrol.
        // a radio group without name is useless.
        this.checkName();
        // register the radio button - this is the only chance to unselect the
        // radio button that is no longer active
        this.ragioGroupRegisty.add(this);
    };
    MdlRadioComponent.prototype.ngOnDestroy = function () {
        this.ragioGroupRegisty.remove(this);
    };
    MdlRadioComponent.prototype.writeValue = function (optionValue) {
        this.optionValue = optionValue;
        this.updateCheckState();
    };
    MdlRadioComponent.prototype.deselect = function (value) {
        // called from the registry. the value is the value of the selected radio button
        // e.g. the radio button get unselected if it isnÄt the selected one.
        this.writeValue(value);
    };
    MdlRadioComponent.prototype.registerOnChange = function (fn) {
        var _this = this;
        // wrap the callback, so that we can call select on the registry
        this.onChangeCallback = function () {
            fn(_this.value);
            _this.ragioGroupRegisty.select(_this);
        };
    };
    MdlRadioComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    MdlRadioComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    MdlRadioComponent.prototype.onFocus = function () {
        this.renderer.setElementClass(this.el, IS_FOCUSED, true);
    };
    MdlRadioComponent.prototype.onBlur = function () {
        this.renderer.setElementClass(this.el, IS_FOCUSED, false);
    };
    MdlRadioComponent.prototype.onClick = function () {
        if (this.disabled) {
            return;
        }
        this.optionValue = this.value;
        this.updateCheckState();
        this.onChangeCallback();
        this.change.emit(this.optionValue);
    };
    MdlRadioComponent.prototype.updateCheckState = function () {
        this.checked = this.optionValue === this.value;
    };
    MdlRadioComponent.prototype.checkName = function () {
        if (this.name && this.formControlName && this.name !== this.formControlName) {
            this.throwNameError();
        }
        if (!this.name && this.formControlName) {
            this.name = this.formControlName;
        }
    };
    MdlRadioComponent.prototype.throwNameError = function () {
        throw new Error("\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <mdl-radio formControlName=\"food\" name=\"food\"></mdl-radio>\n    ");
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MdlRadioComponent.prototype, "name", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MdlRadioComponent.prototype, "formControlName", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MdlRadioComponent.prototype, "value", void 0);
    __decorate([
        core_1.Input(),
        boolean_property_1.BooleanProperty(), 
        __metadata('design:type', Object)
    ], MdlRadioComponent.prototype, "disabled", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], MdlRadioComponent.prototype, "change", void 0);
    MdlRadioComponent = __decorate([
        core_1.Component({
            selector: 'mdl-radio',
            providers: [{
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return MdlRadioComponent; }),
                    multi: true
                }],
            host: {
                '(click)': 'onClick()',
                '[class.mdl-radio]': 'true',
                '[class.is-upgraded]': 'true',
                '[class.is-checked]': 'checked',
                '[class.is-disabled]': 'disabled'
            },
            template: "\n  <input type=\"checkbox\" class=\"mdl-radio__button\" \n    [attr.name]=\"name\"\n    (focus)=\"onFocus()\" \n    (blur)=\"onBlur()\"\n    [disabled]=\"disabled\"\n    [(ngModel)]=\"checked\">\n  <span class=\"mdl-radio__label\"><ng-content></ng-content></span>\n  <span class=\"mdl-radio__outer-circle\"></span>\n  <span class=\"mdl-radio__inner-circle\"></span>\n  "
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, MdlRadioGroupRegisty])
    ], MdlRadioComponent);
    return MdlRadioComponent;
}());
exports.MdlRadioComponent = MdlRadioComponent;
var MdlRadioModule = (function () {
    function MdlRadioModule() {
    }
    MdlRadioModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule],
            exports: [MdlRadioComponent],
            providers: [MdlRadioGroupRegisty],
            declarations: [MdlRadioComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], MdlRadioModule);
    return MdlRadioModule;
}());
exports.MdlRadioModule = MdlRadioModule;
//# sourceMappingURL=../../../dist/components/radio/mdl-radio.component.js.map