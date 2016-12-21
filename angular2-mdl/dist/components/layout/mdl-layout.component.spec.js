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
var mdl_ripple_directive_1 = require('./../common/mdl-ripple.directive');
var index_2 = require('./../tabs/index');
describe('Component: MdlLayout', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [index_1.MdlLayoutModule, mdl_ripple_directive_1.MdlRippleModule, index_2.MdlTabsModule],
            declarations: [MdlTestLayoutComponent],
        });
    });
    it('should add the css class mdl-layout__container to the child of the host element', function () {
        testing_1.TestBed.overrideComponent(MdlTestLayoutComponent, { set: {
                template: '<mdl-layout>x</mdl-layout>' }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestLayoutComponent);
        fixture.detectChanges();
        var layoutEl = fixture.debugElement.query(platform_browser_1.By.directive(index_1.MdlLayoutComponent)).nativeElement;
        var layoutContainer = layoutEl.children.item(0);
        expect(layoutContainer.classList.contains('mdl-layout__container')).toBe(true);
        var layoutMainElement = layoutContainer.children.item(0);
        expect(layoutMainElement.classList.contains('mdl-layout')).toBe(true);
    });
    it('should configure layout mode standard if no mode is provided', function () {
        testing_1.TestBed.overrideComponent(MdlTestLayoutComponent, { set: {
                template: '<mdl-layout mdl-layout-mode="">x</mdl-layout>' }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestLayoutComponent);
        fixture.detectChanges();
        expect(fixture.debugElement.query(platform_browser_1.By.directive(index_1.MdlLayoutComponent)).componentInstance.mode).toBe('standard');
    });
    it('should throw if an unsupported layout type is provided', function () {
        testing_1.TestBed.overrideComponent(MdlTestLayoutComponent, { set: {
                template: '<mdl-layout mdl-layout-mode="test">x</mdl-layout>' }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestLayoutComponent);
        expect(function () {
            fixture.detectChanges();
        }).toThrow();
    });
    it('should close the obfuscator if the escape key is pressed', function () {
        testing_1.TestBed.overrideComponent(MdlTestLayoutComponent, { set: {
                template: "\n          <mdl-layout>\n            <mdl-layout-header></mdl-layout-header>\n            <mdl-layout-drawer></mdl-layout-drawer>\n            <mdl-layout-content></mdl-layout-content>\n          </mdl-layout>\n        " }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestLayoutComponent);
        fixture.detectChanges();
        var layoutComponent = fixture.debugElement.query(platform_browser_1.By.directive(index_1.MdlLayoutComponent)).componentInstance;
        layoutComponent.isDrawerVisible = true;
        var obfuscatorElement = fixture.debugElement.query(platform_browser_1.By.css('.mdl-layout__obfuscator')).nativeElement;
        // dirty hack to provide an event with keyCode
        var e = new Event('keydown');
        e.keyCode = 27;
        obfuscatorElement.dispatchEvent(e);
        expect(layoutComponent.isDrawerVisible).toBe(false);
    });
    it('should unregister the scroll listener if a content is present', function () {
        testing_1.TestBed.overrideComponent(MdlTestLayoutComponent, { set: {
                template: "\n          <mdl-layout>\n            <mdl-layout-header></mdl-layout-header>\n            <mdl-layout-drawer></mdl-layout-drawer>\n            <mdl-layout-content></mdl-layout-content>\n          </mdl-layout>\n        " }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestLayoutComponent);
        fixture.detectChanges();
        var layoutComponent = fixture.debugElement.query(platform_browser_1.By.directive(index_1.MdlLayoutComponent)).componentInstance;
        expect(layoutComponent.scrollListener).toBeDefined();
        layoutComponent.ngOnDestroy();
        expect(layoutComponent.scrollListener).toBeNull();
    });
    it('should safely unregister the scroll listener if no content is present', function (done) {
        testing_1.TestBed.overrideComponent(MdlTestLayoutComponent, { set: {
                template: "\n          <mdl-layout>\n            <mdl-layout-header></mdl-layout-header>\n            <mdl-layout-drawer></mdl-layout-drawer>\n          </mdl-layout>\n        " }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestLayoutComponent);
        fixture.detectChanges();
        var layoutComponent = fixture.debugElement.query(platform_browser_1.By.directive(index_1.MdlLayoutComponent)).componentInstance;
        expect(layoutComponent.scrollListener).toBeUndefined();
        layoutComponent.ngOnDestroy();
        expect(layoutComponent.scrollListener).toBeUndefined();
        done();
    });
    it('should change the small screen css on small screens', function (done) {
        testing_1.TestBed.overrideComponent(MdlTestLayoutComponent, { set: {
                template: "\n          <mdl-layout>\n            <mdl-layout-header></mdl-layout-header>\n            <mdl-layout-drawer></mdl-layout-drawer>\n            <mdl-layout-content></mdl-layout-content>\n          </mdl-layout>\n        " }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestLayoutComponent);
        fixture.detectChanges();
        var layoutComponent = fixture.debugElement.query(platform_browser_1.By.directive(index_1.MdlLayoutComponent)).componentInstance;
        // small screen
        layoutComponent.onQueryChange(true);
        fixture.detectChanges();
        var mdlLayoutElement = fixture.debugElement.query(platform_browser_1.By.css('.mdl-layout')).nativeElement;
        expect(mdlLayoutElement.classList.contains('is-small-screen')).toBe(true);
        // large screen
        layoutComponent.onQueryChange(false);
        fixture.detectChanges();
        expect(mdlLayoutElement.classList.contains('is-small-screen')).toBe(false);
        done();
    });
    it('should call onscroll if the content is getting ascroll event', function (done) {
        testing_1.TestBed.overrideComponent(MdlTestLayoutComponent, { set: {
                template: "\n          <mdl-layout>\n            <mdl-layout-content></mdl-layout-content>\n          </mdl-layout>\n        " }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestLayoutComponent);
        fixture.detectChanges();
        var layoutDebugElement = fixture.debugElement.query(platform_browser_1.By.directive(index_1.MdlLayoutComponent));
        var layoutComponent = layoutDebugElement.componentInstance;
        var contentEl = fixture.debugElement.query(platform_browser_1.By.directive(index_1.MdlLayoutContentComponent)).nativeElement;
        spyOn(layoutComponent, 'onScroll');
        var scrollEvent = new CustomEvent('scroll');
        contentEl.dispatchEvent(scrollEvent);
        expect(layoutComponent.onScroll).toHaveBeenCalled();
        done();
    });
    it('should activate the first tab if no index is set', function (done) {
        testing_1.TestBed.overrideComponent(MdlTestLayoutComponent, { set: {
                template: "\n          <mdl-layout>\n            <mdl-layout-header></mdl-layout-header>\n            <mdl-layout-content>\n               <mdl-layout-tab-panel mdl-layout-tab-panel-title=\"t1\"></mdl-layout-tab-panel>\n               <mdl-layout-tab-panel mdl-layout-tab-panel-title=\"t2\"></mdl-layout-tab-panel>\n            </mdl-layout-content>\n          </mdl-layout>\n        " }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestLayoutComponent);
        fixture.detectChanges();
        var mdlLayoutComponent = fixture.debugElement.query(platform_browser_1.By.directive(index_1.MdlLayoutComponent)).componentInstance;
        expect(mdlLayoutComponent.selectedIndex).toBe(0);
        done();
    });
    it('should activate the selected tab if the selectedIndex changed programmatically', function (done) {
        testing_1.TestBed.overrideComponent(MdlTestLayoutComponent, { set: {
                template: "\n          <mdl-layout [mdl-layout-tab-active-index]=\"activeIndex\">\n            <mdl-layout-header></mdl-layout-header>\n            <mdl-layout-content>\n               <mdl-layout-tab-panel mdl-layout-tab-panel-title=\"t1\"></mdl-layout-tab-panel>\n               <mdl-layout-tab-panel mdl-layout-tab-panel-title=\"t2\"></mdl-layout-tab-panel>\n            </mdl-layout-content>\n          </mdl-layout>\n        " }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestLayoutComponent);
        fixture.detectChanges();
        expect(fixture.componentInstance.activeIndex).toBe(0);
        fixture.componentInstance.activeIndex = 1;
        fixture.detectChanges();
        var mdlLayoutComponent = fixture.debugElement.query(platform_browser_1.By.directive(index_1.MdlLayoutComponent)).componentInstance;
        expect(mdlLayoutComponent.selectedIndex).toBe(1);
        done();
    });
    it('should be possible to listen to changes to the active tab', function (done) {
        testing_1.TestBed.overrideComponent(MdlTestLayoutComponent, { set: {
                template: "\n          <mdl-layout [mdl-layout-tab-active-index]=\"1\" (mdl-layout-tab-active-changed)=\"tabChanged($event)\">\n           <mdl-layout-header></mdl-layout-header>\n            <mdl-layout-content>\n               <mdl-layout-tab-panel mdl-layout-tab-panel-title=\"t1\"></mdl-layout-tab-panel>\n               <mdl-layout-tab-panel mdl-layout-tab-panel-title=\"t2\"></mdl-layout-tab-panel>\n            </mdl-layout-content>\n         </mdl-layout>\n        " }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestLayoutComponent);
        fixture.detectChanges();
        var testComponent = fixture.componentInstance;
        var mdlTabsComponent = fixture.debugElement.query(platform_browser_1.By.directive(index_1.MdlLayoutComponent)).componentInstance;
        expect(mdlTabsComponent.selectedIndex).toBe(1);
        var aDebugElements = fixture.debugElement.queryAll(platform_browser_1.By.css('a'));
        // select the first tab
        aDebugElements[0].nativeElement.click();
        fixture.detectChanges();
        expect(mdlTabsComponent.selectedIndex).toBe(0);
        expect(testComponent.selectedIndexOutput).toBe(0);
        // click again should change nothing
        aDebugElements[0].nativeElement.click();
        expect(mdlTabsComponent.selectedIndex).toBe(0);
        done();
    });
    it('should be possible to create rich tabs', testing_1.async(function () {
        testing_1.TestBed.overrideComponent(MdlTestLayoutComponent, { set: {
                template: "\n          <mdl-layout>\n           <mdl-layout-header></mdl-layout-header>\n            <mdl-layout-content>\n               <mdl-layout-tab-panel>\n                 <mdl-tab-panel-title>\n                    <span class=\"test\">Test</span>\n                  </mdl-tab-panel-title>\n                  <mdl-tab-panel-content>\n                    <span class=\"content\">The content</span>\n                  </mdl-tab-panel-content>\n                </mdl-layout-tab-panel>\n            </mdl-layout-content>\n         </mdl-layout>\n        " }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestLayoutComponent);
        fixture.detectChanges();
        // must have a MdlLayoutHeaderComponent
        var layoutHeader = fixture.debugElement.query(platform_browser_1.By.directive(index_1.MdlLayoutHeaderComponent));
        var titleDebugElement = layoutHeader.query(platform_browser_1.By.css('.test'));
        expect(titleDebugElement.nativeElement.nodeName).toEqual('SPAN');
    }));
    it('should close the drawer on small screens if closeDrawerOnSmallScreens is called', function (done) {
        testing_1.TestBed.overrideComponent(MdlTestLayoutComponent, { set: {
                template: "\n          <mdl-layout mdl-layout-fixed-drawer>\n            <mdl-layout-header></mdl-layout-header>\n            <mdl-layout-drawer></mdl-layout-drawer>\n            <mdl-layout-content></mdl-layout-content>\n          </mdl-layout>\n        " }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestLayoutComponent);
        fixture.detectChanges();
        var layoutComponent = fixture.debugElement.query(platform_browser_1.By.directive(index_1.MdlLayoutComponent)).componentInstance;
        layoutComponent.toggleDrawer();
        fixture.detectChanges();
        var drawer = fixture.debugElement.query(platform_browser_1.By.directive(index_1.MdlLayoutDrawerComponent)).componentInstance;
        expect(drawer.isDrawerVisible).toBe(true);
        // small screen
        layoutComponent.onQueryChange(true);
        fixture.detectChanges();
        expect(layoutComponent.isSmallScreen).toBe(true);
        layoutComponent.closeDrawerOnSmallScreens();
        expect(drawer.isDrawerVisible).toBe(false);
        done();
    });
    it('should set the drawer to null, if the drawer is not a direct child of the layout', function (done) {
        testing_1.TestBed.overrideComponent(MdlTestLayoutComponent, { set: {
                template: "\n          <mdl-layout mdl-layout-fixed-drawer>\n            <mdl-layout-header></mdl-layout-header>\n            <mdl-layout-content>\n               <mdl-layout>\n                  <mdl-layout-drawer></mdl-layout-drawer>\n               </mdl-layout>\n            </mdl-layout-content>\n          </mdl-layout>\n        " }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestLayoutComponent);
        fixture.detectChanges();
        var layoutComponent = fixture.debugElement.query(platform_browser_1.By.directive(index_1.MdlLayoutComponent)).componentInstance;
        fixture.detectChanges();
        expect(layoutComponent.hasDrawer()).toBe(false);
        done();
    });
    it('shoudl be possible to listen to mouseover/mouseout events on tabs', function () {
        testing_1.TestBed.overrideComponent(MdlTestLayoutComponent, { set: {
                template: "\n          <mdl-layout \n              (mdl-layout-tab-mouseover)=\"tabMouseover($event)\"\n              (mdl-layout-tab-mouseout)=\"tabMouseout($event)\">\n           <mdl-layout-header></mdl-layout-header>\n              <mdl-layout-content>\n                <mdl-layout-tab-panel mdl-layout-tab-panel-title=\"t1\"></mdl-layout-tab-panel>\n                <mdl-layout-tab-panel mdl-layout-tab-panel-title=\"t2\"></mdl-layout-tab-panel>\n              </mdl-layout-content>\n         </mdl-layout>\n        " }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestLayoutComponent);
        fixture.detectChanges();
        var testComponent = fixture.componentInstance;
        spyOn(testComponent, 'tabMouseover');
        spyOn(testComponent, 'tabMouseout');
        var tab1Elem = fixture.debugElement.query(platform_browser_1.By.css('.mdl-layout__tab')).nativeElement;
        var eventMouseover = new Event('mouseover', {});
        tab1Elem.dispatchEvent(eventMouseover);
        var eventMouseout = new Event('mouseout', {});
        tab1Elem.dispatchEvent(eventMouseout);
        expect(testComponent.tabMouseover).toHaveBeenCalledWith({ index: 0 });
        expect(testComponent.tabMouseout).toHaveBeenCalledWith({ index: 0 });
    });
});
var MdlTestLayoutComponent = (function () {
    function MdlTestLayoutComponent() {
        this.activeIndex = 0;
    }
    MdlTestLayoutComponent.prototype.tabChanged = function ($event) {
        this.selectedIndexOutput = $event.index;
    };
    MdlTestLayoutComponent.prototype.tabMouseover = function ($event) { };
    MdlTestLayoutComponent.prototype.tabMouseout = function ($event) { };
    MdlTestLayoutComponent = __decorate([
        core_1.Component({
            selector: 'test-layout',
            template: 'replaced by the test'
        }), 
        __metadata('design:paramtypes', [])
    ], MdlTestLayoutComponent);
    return MdlTestLayoutComponent;
}());
//# sourceMappingURL=../../../dist/components/layout/mdl-layout.component.spec.js.map