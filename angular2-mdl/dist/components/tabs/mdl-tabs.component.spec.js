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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var index_1 = require('./index');
describe('Component: MdlTabs', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [index_1.MdlTabsModule],
            declarations: [MdlTestComponent],
        });
    });
    it('should add the css class mdl-tabs to the host element', function () {
        testing_1.TestBed.overrideComponent(MdlTestComponent, { set: {
                template: '<mdl-tabs>x</mdl-tabs>' }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestComponent);
        fixture.detectChanges();
        var tabsEl = fixture.nativeElement.children.item(0);
        expect(tabsEl.classList.contains('mdl-tabs')).toBe(true);
    });
    it('should activate the first tab if no index is set', function () {
        testing_1.TestBed.overrideComponent(MdlTestComponent, { set: {
                template: '<mdl-tabs><mdl-tab-panel></mdl-tab-panel></mdl-tabs>' }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestComponent);
        fixture.detectChanges();
        var mdlTabsComponent = fixture.debugElement.query(platform_browser_1.By.directive(index_1.MdlTabsComponent)).componentInstance;
        expect(mdlTabsComponent.selectedIndex).toBe(0);
    });
    it('should be possible to listen to chanegs to the active tab', function () {
        testing_1.TestBed.overrideComponent(MdlTestComponent, { set: {
                template: "\n          <mdl-tabs [mdl-tab-active-index]=\"1\" (mdl-tab-active-changed)=\"tabChanged($event)\">\n            <mdl-tab-panel></mdl-tab-panel>\n            <mdl-tab-panel></mdl-tab-panel>\n          </mdl-tabs>\n        " }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestComponent);
        fixture.detectChanges();
        var testComponent = fixture.componentInstance;
        var mdlTabsComponent = fixture.debugElement.query(platform_browser_1.By.directive(index_1.MdlTabsComponent)).componentInstance;
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
    });
    it('should be possible to create rich tabs', function () {
        testing_1.TestBed.overrideComponent(MdlTestComponent, { set: {
                template: "\n          <mdl-tabs [mdl-tab-active-index]=\"1\" (mdl-tab-active-changed)=\"tabChanged($event)\">\n            <mdl-tab-panel>\n              <mdl-tab-panel-title>\n                <span class=\"test\">Test</span>\n              </mdl-tab-panel-title>\n              <mdl-tab-panel-content>\n                <span class=\"content\">The content</span>\n              </mdl-tab-panel-content>\n            </mdl-tab-panel>\n          </mdl-tabs>\n        " }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestComponent);
        fixture.detectChanges();
        // the tab is now a div tag and not an a tag.
        var testElement = fixture.debugElement.query(platform_browser_1.By.css('.mdl-tabs__tab'));
        expect(testElement.nativeElement.nodeName).toBe('DIV');
    });
});
var MdlTestComponent = (function () {
    function MdlTestComponent() {
    }
    MdlTestComponent.prototype.tabChanged = function ($event) {
        this.selectedIndexOutput = $event.index;
    };
    MdlTestComponent = __decorate([
        core_1.Component({
            selector: 'test',
            template: 'replaced by the test'
        }), 
        __metadata('design:paramtypes', [])
    ], MdlTestComponent);
    return MdlTestComponent;
}());
//# sourceMappingURL=../../../dist/components/tabs/mdl-tabs.component.spec.js.map