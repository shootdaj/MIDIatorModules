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
var MdlBadgeDirective = (function () {
    function MdlBadgeDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.el = elementRef.nativeElement;
    }
    MdlBadgeDirective.prototype.ngOnChanges = function () {
        this.renderer.setElementAttribute(this.el, 'data-badge', this.mdlBadgeContent);
    };
    __decorate([
        core_1.Input('mdl-badge'), 
        __metadata('design:type', String)
    ], MdlBadgeDirective.prototype, "mdlBadgeContent", void 0);
    MdlBadgeDirective = __decorate([
        core_1.Directive({
            selector: '[mdl-badge]',
            host: {
                '[class.mdl-badge]': 'true'
            }
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], MdlBadgeDirective);
    return MdlBadgeDirective;
}());
exports.MdlBadgeDirective = MdlBadgeDirective;
var MdlBadgeOverlapDirective = (function () {
    function MdlBadgeOverlapDirective() {
    }
    MdlBadgeOverlapDirective = __decorate([
        core_1.Directive({
            selector: '[mdl-badge-overlap]',
            host: {
                '[class.mdl-badge--overlap]': 'true'
            }
        }), 
        __metadata('design:paramtypes', [])
    ], MdlBadgeOverlapDirective);
    return MdlBadgeOverlapDirective;
}());
exports.MdlBadgeOverlapDirective = MdlBadgeOverlapDirective;
var MdlBadgeNoBackgroundDirective = (function () {
    function MdlBadgeNoBackgroundDirective() {
    }
    MdlBadgeNoBackgroundDirective = __decorate([
        core_1.Directive({
            selector: '[mdl-badge-no-background]',
            host: {
                '[class.mdl-badge--no-background]': 'true'
            }
        }), 
        __metadata('design:paramtypes', [])
    ], MdlBadgeNoBackgroundDirective);
    return MdlBadgeNoBackgroundDirective;
}());
exports.MdlBadgeNoBackgroundDirective = MdlBadgeNoBackgroundDirective;
var MDL_BADGE_DIRECTIVES = [MdlBadgeDirective, MdlBadgeOverlapDirective, MdlBadgeNoBackgroundDirective];
var MdlBadgeModule = (function () {
    function MdlBadgeModule() {
    }
    MdlBadgeModule = __decorate([
        core_1.NgModule({
            imports: [],
            exports: MDL_BADGE_DIRECTIVES,
            declarations: MDL_BADGE_DIRECTIVES,
        }), 
        __metadata('design:paramtypes', [])
    ], MdlBadgeModule);
    return MdlBadgeModule;
}());
exports.MdlBadgeModule = MdlBadgeModule;
//# sourceMappingURL=../../../dist/components/badge/mdl-badge.directive.js.map