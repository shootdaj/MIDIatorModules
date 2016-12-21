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
var number_property_1 = require('./../common/number.property');
var MdlUnsupportedShadowValueError = (function (_super) {
    __extends(MdlUnsupportedShadowValueError, _super);
    function MdlUnsupportedShadowValueError(value) {
        _super.call(this, "Shadow value \"" + value + "\" isn't supported (allowed: 2,3,4,6,8,16,24).");
    }
    return MdlUnsupportedShadowValueError;
}(mdl_error_1.MdlError));
exports.MdlUnsupportedShadowValueError = MdlUnsupportedShadowValueError;
var MDL_SHADOW_VALUES = [2, 3, 4, 6, 8, 16, 24];
var MdlShadowDirective = (function () {
    function MdlShadowDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.mdlShadow = 2;
        this.el = elementRef.nativeElement;
    }
    MdlShadowDirective.prototype.ngOnChanges = function (changes) {
        if (MDL_SHADOW_VALUES.indexOf(Number(this.mdlShadow)) === -1) {
            throw new MdlUnsupportedShadowValueError(this.mdlShadow);
        }
        var change = changes['mdlShadow'];
        if (!change.isFirstChange()) {
            this.renderer.setElementClass(this.el, "mdl-shadow--" + change.previousValue + "dp", false);
        }
        this.renderer.setElementClass(this.el, "mdl-shadow--" + change.currentValue + "dp", true);
    };
    __decorate([
        core_1.Input('mdl-shadow'),
        number_property_1.NumberProperty(), 
        __metadata('design:type', Number)
    ], MdlShadowDirective.prototype, "mdlShadow", void 0);
    MdlShadowDirective = __decorate([
        core_1.Directive({
            selector: '[mdl-shadow]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], MdlShadowDirective);
    return MdlShadowDirective;
}());
exports.MdlShadowDirective = MdlShadowDirective;
var MDL_SHADOW_DIRECTIVES = [MdlShadowDirective];
var MdlShadowModule = (function () {
    function MdlShadowModule() {
    }
    MdlShadowModule = __decorate([
        core_1.NgModule({
            imports: [],
            exports: MDL_SHADOW_DIRECTIVES,
            declarations: MDL_SHADOW_DIRECTIVES,
        }), 
        __metadata('design:paramtypes', [])
    ], MdlShadowModule);
    return MdlShadowModule;
}());
exports.MdlShadowModule = MdlShadowModule;
//# sourceMappingURL=../../../dist/components/shadow/mdl-shadow.directive.js.map