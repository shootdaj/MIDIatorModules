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
var mdl_layout_tab_panel_component_1 = require('./mdl-layout-tab-panel.component');
var MdlLayoutContentComponent = (function () {
    function MdlLayoutContentComponent(elRef) {
        this.elRef = elRef;
        this.el = elRef.nativeElement;
    }
    __decorate([
        core_1.ContentChildren(mdl_layout_tab_panel_component_1.MdlLayoutTabPanelComponent), 
        __metadata('design:type', core_1.QueryList)
    ], MdlLayoutContentComponent.prototype, "tabs", void 0);
    MdlLayoutContentComponent = __decorate([
        core_1.Component({
            selector: 'mdl-layout-content',
            host: {
                '[class.mdl-layout__content]': 'true',
            },
            template: "<ng-content></ng-content>",
            encapsulation: core_1.ViewEncapsulation.None,
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], MdlLayoutContentComponent);
    return MdlLayoutContentComponent;
}());
exports.MdlLayoutContentComponent = MdlLayoutContentComponent;
//# sourceMappingURL=../../../dist/components/layout/mdl-layout-content.component.js.map