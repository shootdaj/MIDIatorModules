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
describe('Component: MdlLayoutHeader', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [index_1.MdlLayoutModule],
            declarations: [MdlTestLayoutComponent],
        });
    });
    it('should add the css class mdl-layout__header to the host element', function () {
        testing_1.TestBed.overrideComponent(MdlTestLayoutComponent, { set: {
                template: "\n           <mdl-layout>\n            <mdl-layout-header>x</mdl-layout-header>\n          </mdl-layout>\n        " }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestLayoutComponent);
        fixture.detectChanges();
        var layoutEl = fixture.debugElement.query(platform_browser_1.By.directive(index_1.MdlLayoutHeaderComponent)).nativeElement;
        expect(layoutEl.classList.contains('mdl-layout__header')).toBe(true);
    });
    it('should decompact the header if the header is compact in waterfall mode', function () {
        testing_1.TestBed.overrideComponent(MdlTestLayoutComponent, { set: {
                template: "\n           <mdl-layout mdl-layout-mode=\"waterfall\">\n            <mdl-layout-header>x</mdl-layout-header>\n            <mdl-layout-content></mdl-layout-content>\n         </mdl-layout>\n        " }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestLayoutComponent);
        fixture.detectChanges();
        var headerDebugElement = fixture.debugElement.query(platform_browser_1.By.directive(index_1.MdlLayoutHeaderComponent));
        var header = headerDebugElement.componentInstance;
        header.isCompact = false;
        header.el.click();
        expect(header.isCompact).toBe(false);
        header.isCompact = true;
        expect(header.isCompact).toBe(true);
        header.el.click();
        expect(header.isCompact).toBe(false);
    });
    it('should set animating to false if the transisition ends', function () {
        testing_1.TestBed.overrideComponent(MdlTestLayoutComponent, { set: {
                template: "\n           <mdl-layout mdl-layout-mode=\"waterfall\">\n            <mdl-layout-header>x</mdl-layout-header>\n            <mdl-layout-content></mdl-layout-content>\n         </mdl-layout>\n        " }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestLayoutComponent);
        fixture.detectChanges();
        var headerDebugElement = fixture.debugElement.query(platform_browser_1.By.directive(index_1.MdlLayoutHeaderComponent));
        var header = headerDebugElement.componentInstance;
        header.isAnimating = true;
        header.el.dispatchEvent(new CustomEvent('transitionend'));
        expect(header.isAnimating).toBe(false);
    });
    it('should compact the header if the content is scrolled down and not compact on the contrary', function () {
        testing_1.TestBed.overrideComponent(MdlTestLayoutComponent, { set: {
                template: "\n           <mdl-layout mdl-layout-mode=\"waterfall\">\n            <mdl-layout-header>x</mdl-layout-header>\n            <mdl-layout-content></mdl-layout-content>\n         </mdl-layout>\n        " }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestLayoutComponent);
        fixture.detectChanges();
        var mdlLayout = fixture.debugElement.query(platform_browser_1.By.directive(index_1.MdlLayoutComponent)).componentInstance;
        var headerDebugElement = fixture.debugElement.query(platform_browser_1.By.directive(index_1.MdlLayoutHeaderComponent));
        mdlLayout.onScroll(600);
        expect(headerDebugElement.componentInstance.isCompact).toBe(true);
        // simulate animating is over
        headerDebugElement.componentInstance.isAnimating = false;
        mdlLayout.onScroll(0);
        expect(headerDebugElement.componentInstance.isCompact).toBe(false);
    });
    it('should not animate the header if the screen is samll', function () {
        testing_1.TestBed.overrideComponent(MdlTestLayoutComponent, { set: {
                template: "\n           <mdl-layout mdl-layout-mode=\"waterfall\">\n            <mdl-layout-header>x</mdl-layout-header>\n            <mdl-layout-content></mdl-layout-content>\n         </mdl-layout>\n        " }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestLayoutComponent);
        fixture.detectChanges();
        var mdlLayout = fixture.debugElement.query(platform_browser_1.By.directive(index_1.MdlLayoutComponent)).componentInstance;
        var headerDebugElement = fixture.debugElement.query(platform_browser_1.By.directive(index_1.MdlLayoutHeaderComponent));
        mdlLayout.isSmallScreen = true;
        mdlLayout.onScroll(600);
        expect(headerDebugElement.componentInstance.isAnimating).toBe(false);
        mdlLayout.onScroll(0);
        expect(headerDebugElement.componentInstance.isAnimating).toBe(false);
    });
    it('should not run any scroll code if the header is not in waterfall mode or is animating', function () {
        testing_1.TestBed.overrideComponent(MdlTestLayoutComponent, { set: {
                template: "\n           <mdl-layout>\n            <mdl-layout-header>x</mdl-layout-header>\n            <mdl-layout-content></mdl-layout-content>\n         </mdl-layout>\n        " }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestLayoutComponent);
        fixture.detectChanges();
        var mdlLayout = fixture.debugElement.query(platform_browser_1.By.directive(index_1.MdlLayoutComponent)).componentInstance;
        mdlLayout.mode = 'standard';
        var headerDebugElement = fixture.debugElement.query(platform_browser_1.By.directive(index_1.MdlLayoutHeaderComponent));
        mdlLayout.onScroll(600);
        expect(headerDebugElement.componentInstance.isCompact).toBe(false);
        mdlLayout.mode = 'waterfall';
        headerDebugElement.componentInstance.isAnimating = true;
        mdlLayout.onScroll(600);
        expect(headerDebugElement.componentInstance.isCompact).toBe(false);
    });
});
var MdlTestLayoutComponent = (function () {
    function MdlTestLayoutComponent() {
    }
    MdlTestLayoutComponent = __decorate([
        core_1.Component({
            selector: 'test-layout',
            template: 'replaced by the test'
        }), 
        __metadata('design:paramtypes', [])
    ], MdlTestLayoutComponent);
    return MdlTestLayoutComponent;
}());
//# sourceMappingURL=../../../dist/components/layout/mdl-layout-header.component.spec.js.map