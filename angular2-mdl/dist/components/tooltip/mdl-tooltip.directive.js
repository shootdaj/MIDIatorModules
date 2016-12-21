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
var mdl_tooltip_component_1 = require('./mdl-tooltip.component');
var AbstractMdlTooltipDirective = (function () {
    function AbstractMdlTooltipDirective(vcRef, large, componentFactoryResolver, renderer) {
        this.vcRef = vcRef;
        this.large = large;
        this.componentFactoryResolver = componentFactoryResolver;
        this.renderer = renderer;
    }
    AbstractMdlTooltipDirective.prototype.ngOnInit = function () {
        // if the tooltip is not an instance of MdlTooltipComponent
        // we create a simpleTooltipComponent on the fly.
        if (!(this.tooltip instanceof mdl_tooltip_component_1.MdlTooltipComponent)) {
            var cFactory = this.componentFactoryResolver.resolveComponentFactory(mdl_tooltip_component_1.MdlSimpleTooltipComponent);
            var cRef = this.vcRef.createComponent(cFactory);
            this.tooltipComponent = cRef.instance;
            this.tooltipComponent.tooltipText = this.tooltip;
            this.configureTooltipComponent();
        }
        else {
            this.tooltipComponent = this.tooltip;
            this.configureTooltipComponent();
        }
    };
    AbstractMdlTooltipDirective.prototype.configureTooltipComponent = function () {
        this.tooltipComponent.large = this.large;
        this.tooltipComponent.position = this.position;
    };
    AbstractMdlTooltipDirective.prototype.onMouseEnter = function (event) {
        this.tooltipComponent.mouseEnter(event);
    };
    AbstractMdlTooltipDirective.prototype.onMouseLeave = function () {
        this.tooltipComponent.mouseLeave();
    };
    __decorate([
        core_1.HostListener('window:touchstart'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], AbstractMdlTooltipDirective.prototype, "onMouseLeave", null);
    return AbstractMdlTooltipDirective;
}());
exports.AbstractMdlTooltipDirective = AbstractMdlTooltipDirective;
var host = {
    '(mouseenter)': 'onMouseEnter($event)',
    '(touchend)': 'onMouseEnter($event)',
    '(mouseleave)': 'onMouseLeave()'
};
var MdlTooltipDirective = (function (_super) {
    __extends(MdlTooltipDirective, _super);
    function MdlTooltipDirective(vcRef, componentFactoryResolver, renderer) {
        _super.call(this, vcRef, false, componentFactoryResolver, renderer);
    }
    __decorate([
        core_1.Input('mdl-tooltip'), 
        __metadata('design:type', Object)
    ], MdlTooltipDirective.prototype, "tooltip", void 0);
    __decorate([
        core_1.Input('mdl-tooltip-position'), 
        __metadata('design:type', String)
    ], MdlTooltipDirective.prototype, "position", void 0);
    MdlTooltipDirective = __decorate([
        core_1.Directive({
            selector: '[mdl-tooltip]',
            host: host
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef, core_1.ComponentFactoryResolver, core_1.Renderer])
    ], MdlTooltipDirective);
    return MdlTooltipDirective;
}(AbstractMdlTooltipDirective));
exports.MdlTooltipDirective = MdlTooltipDirective;
var MdlTooltipLargeDirective = (function (_super) {
    __extends(MdlTooltipLargeDirective, _super);
    function MdlTooltipLargeDirective(vcRef, componentFactoryResolver, renderer) {
        _super.call(this, vcRef, true, componentFactoryResolver, renderer);
    }
    __decorate([
        core_1.Input('mdl-tooltip-large'), 
        __metadata('design:type', Object)
    ], MdlTooltipLargeDirective.prototype, "tooltip", void 0);
    __decorate([
        core_1.Input('mdl-tooltip-position'), 
        __metadata('design:type', String)
    ], MdlTooltipLargeDirective.prototype, "position", void 0);
    MdlTooltipLargeDirective = __decorate([
        core_1.Directive({
            selector: '[mdl-tooltip-large]',
            host: host
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef, core_1.ComponentFactoryResolver, core_1.Renderer])
    ], MdlTooltipLargeDirective);
    return MdlTooltipLargeDirective;
}(AbstractMdlTooltipDirective));
exports.MdlTooltipLargeDirective = MdlTooltipLargeDirective;
//# sourceMappingURL=../../../dist/components/tooltip/mdl-tooltip.directive.js.map