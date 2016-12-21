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
var mdl_tooltip_position_service_1 = require('./mdl-tooltip-position.service');
var IS_ACTIVE = 'is-active';
var host = {
    '[class.mdl-tooltip]': 'true',
    '[class.mdl-tooltip--large]': 'large',
    '[class.mdl-tooltip--left]': 'position=="left"',
    '[class.mdl-tooltip--right]': 'position=="right"',
    '[class.mdl-tooltip--top]': 'position=="top"',
    '[class.mdl-tooltip--bottom]': 'position=="bottom"'
};
var MdlSimpleTooltipComponent = (function () {
    function MdlSimpleTooltipComponent(elRef, renderer, mdlTooltipPositionService) {
        this.elRef = elRef;
        this.renderer = renderer;
        this.mdlTooltipPositionService = mdlTooltipPositionService;
        this.large = false;
        this.element = elRef.nativeElement;
    }
    MdlSimpleTooltipComponent.prototype.mouseLeave = function () {
        this.renderer.setElementClass(this.elRef.nativeElement, IS_ACTIVE, false);
    };
    MdlSimpleTooltipComponent.prototype.mouseEnter = function (event) {
        var props = event.target.getBoundingClientRect();
        var offsetWidth = this.element.offsetWidth;
        var offsetHeight = this.element.offsetHeight;
        var style = this.mdlTooltipPositionService.calcStyle(offsetWidth, offsetHeight, props, this.position);
        for (var key in style) {
            this.renderer.setElementStyle(this.elRef.nativeElement, key, style[key]);
        }
        this.renderer.setElementClass(this.elRef.nativeElement, IS_ACTIVE, true);
    };
    MdlSimpleTooltipComponent = __decorate([
        core_1.Component({
            selector: 'mdl-simple-tooltip',
            host: host,
            template: '<div>{{tooltipText}}</div>',
            providers: [mdl_tooltip_position_service_1.MdlTooltipPositionService]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, mdl_tooltip_position_service_1.MdlTooltipPositionService])
    ], MdlSimpleTooltipComponent);
    return MdlSimpleTooltipComponent;
}());
exports.MdlSimpleTooltipComponent = MdlSimpleTooltipComponent;
var MdlTooltipComponent = (function (_super) {
    __extends(MdlTooltipComponent, _super);
    function MdlTooltipComponent(elRef, renderer, mdlTooltipPositionService) {
        _super.call(this, elRef, renderer, mdlTooltipPositionService);
    }
    MdlTooltipComponent = __decorate([
        core_1.Component({
            selector: 'mdl-tooltip',
            template: '<div><ng-content></ng-content></div>',
            exportAs: 'mdlTooltip',
            host: host,
            providers: [mdl_tooltip_position_service_1.MdlTooltipPositionService]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, mdl_tooltip_position_service_1.MdlTooltipPositionService])
    ], MdlTooltipComponent);
    return MdlTooltipComponent;
}(MdlSimpleTooltipComponent));
exports.MdlTooltipComponent = MdlTooltipComponent;
//# sourceMappingURL=../../../dist/components/tooltip/mdl-tooltip.component.js.map