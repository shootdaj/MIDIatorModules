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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var boolean_property_1 = require('./../common/boolean-property');
var number_property_1 = require('./../common/number.property');
var mdl_button_component_1 = require('./../button/mdl-button.component');
var mdl_icon_component_1 = require('./../icon/mdl-icon.component');
var forms_2 = require('@angular/forms');
var common_1 = require('@angular/common');
exports.DISABLE_NATIVE_VALIDITY_CHECKING = new core_1.OpaqueToken('disableNativeValidityChecking');
var noop = function (_) { };
var nextId = 0;
var IS_FOCUSED = 'is-focused';
var IS_DISABLED = 'is-disabled';
var IS_INVALID = 'is-invalid';
var IS_DIRTY = 'is-dirty';
var MdlTextFieldComponent = (function () {
    function MdlTextFieldComponent(renderer, elmRef, nativeCheckGlobalDisabled) {
        this.renderer = renderer;
        this.elmRef = elmRef;
        this.nativeCheckGlobalDisabled = nativeCheckGlobalDisabled;
        this.blurEmitter = new core_1.EventEmitter();
        this.focusEmitter = new core_1.EventEmitter();
        this.id = "mdl-textfield-" + nextId++;
        this.disabled = false;
        this.required = false;
        this.autofocus = false;
        this.isFloatingLabel = false;
        this.rows = null;
        this.maxrows = -1;
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        this.el = elmRef.nativeElement;
    }
    Object.defineProperty(MdlTextFieldComponent.prototype, "value", {
        get: function () { return this.value_; },
        set: function (v) {
            this.value_ = v;
            this.onChangeCallback(v);
        },
        enumerable: true,
        configurable: true
    });
    ;
    MdlTextFieldComponent.prototype.writeValue = function (value) {
        this.value_ = value;
        this.checkDirty();
    };
    MdlTextFieldComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    MdlTextFieldComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    MdlTextFieldComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    MdlTextFieldComponent.prototype.ngOnChanges = function () {
        this.checkDisabled();
    };
    MdlTextFieldComponent.prototype.ngDoCheck = function () {
        this.checkValidity();
        this.checkDirty();
    };
    MdlTextFieldComponent.prototype.setFocus = function () {
        if (!this.inputEl) {
            return;
        }
        this.renderer.invokeElementMethod(this.inputEl.nativeElement, 'focus', []);
    };
    MdlTextFieldComponent.prototype.onFocus = function (event) {
        this.renderer.setElementClass(this.el, IS_FOCUSED, true);
        this.focusEmitter.emit(event);
    };
    MdlTextFieldComponent.prototype.onBlur = function (event) {
        this.renderer.setElementClass(this.el, IS_FOCUSED, false);
        this.onTouchedCallback();
        this.blurEmitter.emit(event);
    };
    MdlTextFieldComponent.prototype.checkDisabled = function () {
        this.renderer.setElementClass(this.el, IS_DISABLED, this.disabled);
    };
    MdlTextFieldComponent.prototype.checkValidity = function () {
        // check the global setting - if globally disabled do no check
        if (this.nativeCheckGlobalDisabled === true) {
            return;
        }
        // check local setting - if locally disabled do no check
        if (this.disableNativeValidityChecking) {
            return;
        }
        if (this.inputEl && this.inputEl.nativeElement.validity) {
            this.renderer.setElementClass(this.el, IS_INVALID, !this.inputEl.nativeElement.validity.valid);
        }
    };
    MdlTextFieldComponent.prototype.checkDirty = function () {
        var dirty = this.inputEl && this.inputEl.nativeElement.value && this.inputEl.nativeElement.value.length > 0;
        this.renderer.setElementClass(this.el, IS_DIRTY, dirty);
    };
    MdlTextFieldComponent.prototype.keydownTextarea = function ($event) {
        var currentRowCount = this.inputEl.nativeElement.value.split('\n').length;
        if ($event.keyCode === 13) {
            if (currentRowCount >= this.maxrows && this.maxrows !== -1) {
                $event.preventDefault();
            }
        }
    };
    __decorate([
        core_1.Output('blur'), 
        __metadata('design:type', core_1.EventEmitter)
    ], MdlTextFieldComponent.prototype, "blurEmitter", void 0);
    __decorate([
        core_1.Output('focus'), 
        __metadata('design:type', core_1.EventEmitter)
    ], MdlTextFieldComponent.prototype, "focusEmitter", void 0);
    __decorate([
        core_1.ViewChild('input'), 
        __metadata('design:type', core_1.ElementRef)
    ], MdlTextFieldComponent.prototype, "inputEl", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MdlTextFieldComponent.prototype, "value", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MdlTextFieldComponent.prototype, "type", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MdlTextFieldComponent.prototype, "label", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MdlTextFieldComponent.prototype, "pattern", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MdlTextFieldComponent.prototype, "min", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MdlTextFieldComponent.prototype, "max", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MdlTextFieldComponent.prototype, "name", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MdlTextFieldComponent.prototype, "id", void 0);
    __decorate([
        core_1.Input('error-msg'), 
        __metadata('design:type', Object)
    ], MdlTextFieldComponent.prototype, "errorMessage", void 0);
    __decorate([
        core_1.Input(),
        boolean_property_1.BooleanProperty(), 
        __metadata('design:type', Object)
    ], MdlTextFieldComponent.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(),
        boolean_property_1.BooleanProperty(), 
        __metadata('design:type', Object)
    ], MdlTextFieldComponent.prototype, "required", void 0);
    __decorate([
        core_1.Input(),
        boolean_property_1.BooleanProperty(), 
        __metadata('design:type', Boolean)
    ], MdlTextFieldComponent.prototype, "autofocus", void 0);
    __decorate([
        core_1.Input('floating-label'),
        boolean_property_1.BooleanProperty(), 
        __metadata('design:type', Object)
    ], MdlTextFieldComponent.prototype, "isFloatingLabel", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MdlTextFieldComponent.prototype, "placeholder", void 0);
    __decorate([
        core_1.Input(),
        number_property_1.NumberProperty(), 
        __metadata('design:type', Number)
    ], MdlTextFieldComponent.prototype, "rows", void 0);
    __decorate([
        core_1.Input(),
        number_property_1.NumberProperty(), 
        __metadata('design:type', Number)
    ], MdlTextFieldComponent.prototype, "maxrows", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MdlTextFieldComponent.prototype, "icon", void 0);
    __decorate([
        core_1.Input(),
        boolean_property_1.BooleanProperty(), 
        __metadata('design:type', Object)
    ], MdlTextFieldComponent.prototype, "disableNativeValidityChecking", void 0);
    MdlTextFieldComponent = __decorate([
        core_1.Component({
            selector: 'mdl-textfield',
            host: {
                '[class.mdl-textfield]': 'true',
                '[class.is-upgraded]': 'true',
                '[class.mdl-textfield--expandable]': 'icon',
                '[class.mdl-textfield--floating-label]': 'isFloatingLabel',
                '[class.has-placeholder]': 'placeholder'
            },
            template: "\n   <div *ngIf=\"!icon\">\n     <textarea\n        *ngIf=\"rows\"\n        #input\n        [rows]=\"rows\"\n        class=\"mdl-textfield__input\" \n        type=\"text\"\n        [attr.name]=\"name\"\n        [id]=\"id\"\n        [placeholder]=\"placeholder ? placeholder : ''\"\n        (focus)=\"onFocus($event)\" \n        (blur)=\"onBlur($event)\"\n        (keydown)=\"keydownTextarea($event)\"\n        [(ngModel)]=\"value\"\n        [disabled]=\"disabled\"\n        [autofocus]=\"autofocus\"\n        ></textarea>\n     <input\n        *ngIf=\"!rows\"\n        #input\n        class=\"mdl-textfield__input\" \n        [type]=\"type\" \n        [attr.name]=\"name\"\n        [id]=\"id\"\n        [pattern]=\"pattern ? pattern : '.*'\"\n        [attr.min]=\"min\"\n        [attr.max]=\"max\"\n        [placeholder]=\"placeholder ? placeholder : ''\"\n        (focus)=\"onFocus($event)\" \n        (blur)=\"onBlur($event)\"\n        [(ngModel)]=\"value\"\n        [disabled]=\"disabled\"\n        [required]=\"required\"\n        [autofocus]=\"autofocus\"\n        >\n     <label class=\"mdl-textfield__label\" [attr.for]=\"id\">{{label}}</label>\n     <span class=\"mdl-textfield__error\">{{errorMessage}}</span>\n   </div>\n   <div *ngIf=\"icon\">\n      <button mdl-button mdl-button-type=\"icon\" (click)=\"setFocus()\">\n         <mdl-icon>{{icon}}</mdl-icon>\n      </button>\n      <div class=\"mdl-textfield__expandable-holder\">\n       <input\n          #input\n          class=\"mdl-textfield__input\" \n          [type]=\"type\" \n          [attr.name]=\"name\"\n          [id]=\"id\"\n          [pattern]=\"pattern ? pattern : '.*'\"\n          [attr.min]=\"min\"\n          [attr.max]=\"max\"\n          [placeholder]=\"placeholder ? placeholder : ''\"\n          (focus)=\"onFocus($event)\" \n          (blur)=\"onBlur($event)\"\n          [(ngModel)]=\"value\"\n          [disabled]=\"disabled\"\n          [required]=\"required\"\n          [autofocus]=\"autofocus\" \n         >\n     <label class=\"mdl-textfield__label\" [attr.for]=\"id\">{{label}}</label>\n     <span class=\"mdl-textfield__error\">{{errorMessage}}</span>\n      </div>\n   </div>\n   ",
            providers: [{
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return MdlTextFieldComponent; }),
                    multi: true
                }]
        }),
        __param(2, core_1.Optional()),
        __param(2, core_1.Inject(exports.DISABLE_NATIVE_VALIDITY_CHECKING)), 
        __metadata('design:paramtypes', [core_1.Renderer, core_1.ElementRef, Boolean])
    ], MdlTextFieldComponent);
    return MdlTextFieldComponent;
}());
exports.MdlTextFieldComponent = MdlTextFieldComponent;
var MdlTextFieldModule = (function () {
    function MdlTextFieldModule() {
    }
    MdlTextFieldModule = __decorate([
        core_1.NgModule({
            imports: [mdl_icon_component_1.MdlIconModule, mdl_button_component_1.MdlButtonModule, forms_2.FormsModule, common_1.CommonModule],
            exports: [MdlTextFieldComponent],
            declarations: [MdlTextFieldComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], MdlTextFieldModule);
    return MdlTextFieldModule;
}());
exports.MdlTextFieldModule = MdlTextFieldModule;
//# sourceMappingURL=../../../dist/components/textfield/mdl-textfield.component.js.map