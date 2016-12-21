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
var MdlSliderComponent = (function () {
    function MdlSliderComponent(renderer, elRef) {
        this.renderer = renderer;
        this.elRef = elRef;
        this.disabled = false;
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
    }
    Object.defineProperty(MdlSliderComponent.prototype, "value", {
        get: function () { return this.value_; },
        set: function (v) {
            this.value_ = v;
            this.updateSliderUI();
            this.onChangeCallback(v);
        },
        enumerable: true,
        configurable: true
    });
    ;
    MdlSliderComponent.prototype.writeValue = function (value) {
        this.value_ = value;
        this.updateSliderUI();
    };
    MdlSliderComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    MdlSliderComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    MdlSliderComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    MdlSliderComponent.prototype.updateSliderUI = function () {
        var fraction = (this.value_ - this.min) / (this.max - this.min);
        this.renderer.setElementClass(this.inputEl.nativeElement, 'is-lowest-value', fraction === 0);
        this.renderer.setElementStyle(this.lowerEl.nativeElement, 'flex', '' + fraction);
        this.renderer.setElementStyle(this.upperEl.nativeElement, 'flex', '' + (1 - fraction));
    };
    MdlSliderComponent.prototype.onMouseUp = function (event) {
        event.target.blur();
    };
    MdlSliderComponent.prototype.onMouseDown = function (event) {
        if (event.target !== this.elRef.nativeElement) {
            return;
        }
        // Discard the original event and create a new event that
        // is on the slider element.
        event.preventDefault();
        var newEvent = new MouseEvent('mousedown', {
            relatedTarget: event.relatedTarget,
            button: event.button,
            buttons: event.buttons,
            clientX: event.clientX,
            clientY: this.inputEl.nativeElement.getBoundingClientRect().y,
            screenX: event.screenX,
            screenY: event.screenY
        });
        this.renderer.invokeElementMethod(this.inputEl.nativeElement, 'dispatchEvent', [newEvent]);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], MdlSliderComponent.prototype, "min", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], MdlSliderComponent.prototype, "max", void 0);
    __decorate([
        core_1.ViewChild('lower'), 
        __metadata('design:type', core_1.ElementRef)
    ], MdlSliderComponent.prototype, "lowerEl", void 0);
    __decorate([
        core_1.ViewChild('uppper'), 
        __metadata('design:type', core_1.ElementRef)
    ], MdlSliderComponent.prototype, "upperEl", void 0);
    __decorate([
        core_1.ViewChild('input'), 
        __metadata('design:type', core_1.ElementRef)
    ], MdlSliderComponent.prototype, "inputEl", void 0);
    __decorate([
        core_1.Input(),
        boolean_property_1.BooleanProperty(), 
        __metadata('design:type', Object)
    ], MdlSliderComponent.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MdlSliderComponent.prototype, "value", null);
    MdlSliderComponent = __decorate([
        core_1.Component({
            selector: 'mdl-slider',
            providers: [{
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return MdlSliderComponent; }),
                    multi: true
                }],
            host: {
                '[class.mdl-slider__container]': 'true',
                '(mouseup)': 'onMouseUp($event)',
                '(mousedown)': 'onMouseDown($event)'
            },
            template: "\n    <input class=\"mdl-slider is-upgraded\" \n            type=\"range\" \n            [min]=\"min\" \n            [max]=\"max\" \n            [(ngModel)]=\"value\" \n            [disabled]=\"disabled\"\n            tabindex=\"0\"\n            #input>\n    <div class=\"mdl-slider__background-flex\">\n      <div class=\"mdl-slider__background-lower\" #lower></div>\n      <div class=\"mdl-slider__background-upper\" #uppper></div>\n  </div>\n  ",
            styles: [
                "\n    :host {\n        height: 22px;\n        user-select: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n    }\n    "
            ]
        }), 
        __metadata('design:paramtypes', [core_1.Renderer, core_1.ElementRef])
    ], MdlSliderComponent);
    return MdlSliderComponent;
}());
exports.MdlSliderComponent = MdlSliderComponent;
var MDL_SLIDER_DIRECTIVES = [MdlSliderComponent];
var MdlSliderModule = (function () {
    function MdlSliderModule() {
    }
    MdlSliderModule = __decorate([
        core_1.NgModule({
            imports: [forms_1.FormsModule, common_1.CommonModule],
            exports: MDL_SLIDER_DIRECTIVES,
            declarations: MDL_SLIDER_DIRECTIVES,
        }), 
        __metadata('design:paramtypes', [])
    ], MdlSliderModule);
    return MdlSliderModule;
}());
exports.MdlSliderModule = MdlSliderModule;
//# sourceMappingURL=../../../dist/components/slider/mdl-slider.component.js.map