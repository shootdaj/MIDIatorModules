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
var mdl_error_1 = require('./../common/mdl-error');
var boolean_property_1 = require('./../common/boolean-property');
var MdlUnsupportedButtonTypeError = (function (_super) {
    __extends(MdlUnsupportedButtonTypeError, _super);
    function MdlUnsupportedButtonTypeError(type) {
        _super.call(this, "Button type \"" + type + "\" isn't supported (allowed: raised, fab, mini-fab, icon, '').");
    }
    return MdlUnsupportedButtonTypeError;
}(mdl_error_1.MdlError));
exports.MdlUnsupportedButtonTypeError = MdlUnsupportedButtonTypeError;
var MdlUnsupportedColoredTypeError = (function (_super) {
    __extends(MdlUnsupportedColoredTypeError, _super);
    function MdlUnsupportedColoredTypeError(type) {
        _super.call(this, "Colored type \"" + type + "\" isn't supported (allowed: primary, accent, '').");
    }
    return MdlUnsupportedColoredTypeError;
}(mdl_error_1.MdlError));
exports.MdlUnsupportedColoredTypeError = MdlUnsupportedColoredTypeError;
var MDL_BUTTON_TYPES = [
    'raised',
    'fab',
    'mini-fab',
    'icon',
    ''
];
var MDL_COLORED_TYPES = [
    'primary',
    'accent',
    ''
];
var MdlButtonComponent = (function () {
    function MdlButtonComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.disabled = false;
        this.element = elementRef.nativeElement;
    }
    MdlButtonComponent.prototype.ngOnChanges = function () {
        if (this.mdlButtonType && MDL_BUTTON_TYPES.indexOf(this.mdlButtonType) === -1) {
            throw new MdlUnsupportedButtonTypeError(this.mdlButtonType);
        }
        if (this.mdlColoredType && MDL_COLORED_TYPES.indexOf(this.mdlColoredType) === -1) {
            throw new MdlUnsupportedColoredTypeError(this.mdlColoredType);
        }
    };
    MdlButtonComponent.prototype.onMouseUp = function () {
        this.blurIt();
    };
    MdlButtonComponent.prototype.onMouseLeave = function () {
        this.blurIt();
    };
    MdlButtonComponent.prototype.blurIt = function () {
        this.renderer.invokeElementMethod(this.element, 'blur', []);
    };
    __decorate([
        core_1.Input('mdl-button-type'), 
        __metadata('design:type', Object)
    ], MdlButtonComponent.prototype, "mdlButtonType", void 0);
    __decorate([
        core_1.Input('mdl-colored'), 
        __metadata('design:type', Object)
    ], MdlButtonComponent.prototype, "mdlColoredType", void 0);
    __decorate([
        core_1.Input(),
        boolean_property_1.BooleanProperty(), 
        __metadata('design:type', Object)
    ], MdlButtonComponent.prototype, "disabled", void 0);
    MdlButtonComponent = __decorate([
        core_1.Component({
            selector: 'mdl-button, button[mdl-button], a[mdl-button]',
            host: {
                '[attr.disabled]': 'disabled ? "disabled" : null',
                '(mouseup)': 'onMouseUp()',
                '(mouseleave)': 'onMouseLeave()',
                '[class.mdl-button]': 'true',
                '[class.mdl-button--raised]': 'mdlButtonType == "raised"',
                '[class.mdl-button--fab]': 'mdlButtonType == "fab" || mdlButtonType == "mini-fab"',
                '[class.mdl-button--mini-fab]': 'mdlButtonType == "mini-fab"',
                '[class.mdl-button--icon]': 'mdlButtonType == "icon"',
                '[class.mdl-button--primary]': 'mdlColoredType == "primary"',
                '[class.mdl-button--accent]': 'mdlColoredType == "accent"'
            },
            exportAs: 'mdlButton',
            template: '<ng-content></ng-content>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], MdlButtonComponent);
    return MdlButtonComponent;
}());
exports.MdlButtonComponent = MdlButtonComponent;
var MDL_BUTTON_DIRECTIVES = [MdlButtonComponent];
var MdlButtonModule = (function () {
    function MdlButtonModule() {
    }
    MdlButtonModule = __decorate([
        core_1.NgModule({
            imports: [],
            exports: MDL_BUTTON_DIRECTIVES,
            declarations: MDL_BUTTON_DIRECTIVES,
        }), 
        __metadata('design:paramtypes', [])
    ], MdlButtonModule);
    return MdlButtonModule;
}());
exports.MdlButtonModule = MdlButtonModule;
//# sourceMappingURL=../../../dist/components/button/mdl-button.component.js.map