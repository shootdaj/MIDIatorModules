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
var testing_1 = require('@angular/core/testing');
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var index_1 = require('./index');
describe('Component: MdlTooltip', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [index_1.MdlTooltipModule],
            declarations: [MdlTestTooltipComponent],
        });
    });
    it('should add the css class mdl-tooltip to the host element', function () {
        testing_1.TestBed.overrideComponent(MdlTestTooltipComponent, { set: {
                template: '<mdl-tooltip>x</mdl-tooltip>' }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestTooltipComponent);
        fixture.detectChanges();
        var tooltipEl = fixture.debugElement.query(platform_browser_1.By.directive(index_1.MdlTooltipComponent)).nativeElement;
        expect(tooltipEl.classList.contains('mdl-tooltip')).toBe(true);
    });
    it('should add the css class mdl-tooltip--large to the host element', function () {
        testing_1.TestBed.overrideComponent(MdlTestTooltipComponent, { set: {
                template: "\n          <div [mdl-tooltip-large]=\"t\"></div>\n          <mdl-tooltip #t=\"mdlTooltip\">x</mdl-tooltip>\n        " }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestTooltipComponent);
        fixture.detectChanges();
        var tooltipEl = fixture.debugElement.query(platform_browser_1.By.directive(index_1.MdlTooltipComponent)).nativeElement;
        expect(tooltipEl.classList.contains('mdl-tooltip--large')).toBe(true);
    });
    it('should add create a simpletooltipcomponent for the mdl-tooltip directive with text', testing_1.async(function () {
        testing_1.TestBed.overrideComponent(MdlTestTooltipComponent, { set: {
                template: "\n           <div mdl-tooltip=\"test\"></div>\n        " }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestTooltipComponent);
        fixture.detectChanges();
        // wait for async component creation
        setTimeout(function () {
            // let angular prepare the tooltip with class and text
            fixture.detectChanges();
            // check the result
            var tooltipEl = fixture.debugElement
                .query(platform_browser_1.By.directive(index_1.MdlSimpleTooltipComponent)).nativeElement;
            expect(tooltipEl.classList.contains('mdl-tooltip')).toBe(true);
        }, 0);
    }));
    it('should add the css class is-active if the mous enters the directive element', function () {
        testing_1.TestBed.overrideComponent(MdlTestTooltipComponent, { set: {
                template: "\n           <div [mdl-tooltip]=\"t\" mdl-tooltip-position=\"left\"></div>\n          <mdl-tooltip #t=\"mdlTooltip\">x</mdl-tooltip>\n        " }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestTooltipComponent);
        fixture.detectChanges();
        var tooltipTriggerElement = fixture.debugElement.query(platform_browser_1.By.directive(index_1.MdlTooltipDirective)).nativeElement;
        var evt = document.createEvent('HTMLEvents');
        evt.initEvent('mouseenter', true, true);
        tooltipTriggerElement.dispatchEvent(evt);
        var tooltipEl = fixture.debugElement.query(platform_browser_1.By.directive(index_1.MdlTooltipComponent)).nativeElement;
        expect(tooltipEl.classList.contains('is-active')).toBe(true);
    });
    it('should remove the css class is-active if the mouse leaves the directive element', function () {
        testing_1.TestBed.overrideComponent(MdlTestTooltipComponent, { set: {
                template: "\n           <div [mdl-tooltip]=\"t\"></div>\n          <mdl-tooltip #t=\"mdlTooltip\">x</mdl-tooltip>\n        " }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestTooltipComponent);
        fixture.detectChanges();
        var tooltipTriggerElement = fixture.debugElement.query(platform_browser_1.By.directive(index_1.MdlTooltipDirective)).nativeElement;
        var evt = document.createEvent('HTMLEvents');
        evt.initEvent('mouseleave', true, true);
        tooltipTriggerElement.dispatchEvent(evt);
        var tooltipEl = fixture.debugElement.query(platform_browser_1.By.directive(index_1.MdlTooltipComponent)).nativeElement;
        expect(tooltipEl.classList.contains('is-active')).toBe(false);
    });
    it('should add the css class mdl-tooltip--{position} if the position is set to {position}', function () {
        testing_1.TestBed.overrideComponent(MdlTestTooltipComponent, { set: {
                template: "\n           <div [mdl-tooltip]=\"t\" mdl-tooltip-position=\"left\"></div>\n          <mdl-tooltip #t=\"mdlTooltip\">x</mdl-tooltip>\n        " }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestTooltipComponent);
        fixture.detectChanges();
        ['bottom', 'top', 'left', 'right'].forEach(function (position) {
            var debugElement = fixture.debugElement.query(platform_browser_1.By.directive(index_1.MdlTooltipComponent));
            debugElement.componentInstance.position = position;
            fixture.detectChanges();
            var tooltipEl = debugElement.nativeElement;
            expect(tooltipEl.classList.contains("mdl-tooltip--" + position)).toBe(true);
        });
    });
});
var MdlTestTooltipComponent = (function () {
    function MdlTestTooltipComponent() {
    }
    MdlTestTooltipComponent = __decorate([
        core_1.Component({
            selector: 'test-icon',
            template: 'replaced by the test'
        }), 
        __metadata('design:paramtypes', [])
    ], MdlTestTooltipComponent);
    return MdlTestTooltipComponent;
}());
//# sourceMappingURL=../../../dist/components/tooltip/mdl-tooltip.component.spec.js.map