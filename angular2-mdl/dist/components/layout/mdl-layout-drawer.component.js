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
var mdl_layout_component_1 = require('./mdl-layout.component');
var MdlLayoutDrawerComponent = (function () {
    function MdlLayoutDrawerComponent(parentLayout) {
        this.parentLayout = parentLayout;
        this.isDrawerVisible = false;
    }
    MdlLayoutDrawerComponent.prototype.isDrawerDirectChildOf = function (layout) {
        return this.parentLayout === layout;
    };
    MdlLayoutDrawerComponent = __decorate([
        core_1.Component({
            selector: 'mdl-layout-drawer',
            host: {
                '[class.mdl-layout__drawer]': 'true',
                '[class.is-visible]': 'isDrawerVisible'
            },
            template: "<ng-content></ng-content>",
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __param(0, core_1.Optional()),
        __param(0, core_1.Inject(core_1.forwardRef(function () { return mdl_layout_component_1.MdlLayoutComponent; }))), 
        __metadata('design:paramtypes', [mdl_layout_component_1.MdlLayoutComponent])
    ], MdlLayoutDrawerComponent);
    return MdlLayoutDrawerComponent;
}());
exports.MdlLayoutDrawerComponent = MdlLayoutDrawerComponent;
//# sourceMappingURL=../../../dist/components/layout/mdl-layout-drawer.component.js.map