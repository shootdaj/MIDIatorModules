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
var MdlLayoutHeaderComponent = (function () {
    function MdlLayoutHeaderComponent(elementRef, renderer, mdlLayout) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.mdlLayout = mdlLayout;
        this.isCompact = false;
        this.isAnimating = false;
        this.isSeamed = false;
        this.isRipple = true;
        this.el = elementRef.nativeElement;
    }
    MdlLayoutHeaderComponent.prototype.onTransitionEnd = function () {
        this.isAnimating = false;
    };
    MdlLayoutHeaderComponent.prototype.onClick = function () {
        if (this.isCompact) {
            this.isCompact = false;
            this.isAnimating = true;
        }
    };
    MdlLayoutHeaderComponent = __decorate([
        core_1.Component({
            selector: 'mdl-layout-header',
            host: {
                '[class.mdl-layout__header]': 'true',
                '[class.is-casting-shadow]': 'mode==="standard" || isCompact',
                '[class.mdl-layout__header--seamed]': 'isSeamed',
                '[class.mdl-layout__header--waterfall]': 'mode==="waterfall"',
                '[class.mdl-layout__header--scroll]': 'mode==="scroll"',
                '[class.is-compact]': 'isCompact',
                '(transitionend)': 'onTransitionEnd()',
                '(click)': 'onClick()'
            },
            template: "\n     <ng-content></ng-content>\n     <div *ngIf=\"tabs?.toArray()?.length > 0\" class=\"mdl-layout__tab-bar-container\">\n         <div class=\"mdl-layout__tab-bar is-casting-shadow\">\n           <div *ngFor=\"let tab of tabs.toArray()\" \n                class=\"mdl-layout__tab\" \n                [ngClass]=\"{'is-active': tab.isActive}\"\n                (mouseover)=\"mdlLayout.onTabMouseover(tab)\" \n                (mouseout)=\"mdlLayout.onTabMouseout(tab)\">\n              <div \n                *ngIf=\"tab.titleComponent\" \n                (click)=\"mdlLayout.tabSelected(tab)\"\n                [mdl-ripple]=\"isRipple\"\n                [append-view-container-ref]=\"tab.titleComponent.vcRef\"></div>\n              <a *ngIf=\"!tab.titleComponent\" \n                    href=\"javascript:void(0)\"   \n                    (click)=\"mdlLayout.tabSelected(tab)\"\n                    class=\"mdl-layout__tab\" \n                    [mdl-ripple]=\"isRipple\"\n                   >{{tab.title}}</a>\n             </div>\n         </div>\n     </div>\n  ",
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __param(2, core_1.Inject(core_1.forwardRef(function () { return mdl_layout_component_1.MdlLayoutComponent; }))), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, mdl_layout_component_1.MdlLayoutComponent])
    ], MdlLayoutHeaderComponent);
    return MdlLayoutHeaderComponent;
}());
exports.MdlLayoutHeaderComponent = MdlLayoutHeaderComponent;
//# sourceMappingURL=../../../dist/components/layout/mdl-layout-header.component.js.map