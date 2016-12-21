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
describe('Component: MdlTabsPanel', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [index_1.MdlTabsModule],
            declarations: [MdlTestComponent],
        });
    });
    it('should add the css class mdl-tabs__panel to the host element', function () {
        testing_1.TestBed.overrideComponent(MdlTestComponent, { set: {
                template: '<mdl-tab-panel>x</mdl-tab-panel>' }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestComponent);
        fixture.detectChanges();
        var tabPanelEl = fixture.nativeElement.children.item(0);
        expect(tabPanelEl.classList.contains('mdl-tabs__panel')).toBe(true);
    });
    it('should add the css class isActive to the host element if the panel is active', function () {
        testing_1.TestBed.overrideComponent(MdlTestComponent, { set: {
                template: '<mdl-tab-panel>x</mdl-tab-panel>' }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestComponent);
        fixture.detectChanges();
        var tabPanelComponent = fixture.debugElement.query(platform_browser_1.By.directive(index_1.MdlTabPanelComponent)).componentInstance;
        tabPanelComponent.isActive = true;
        fixture.detectChanges();
        var tabPanelEl = fixture.nativeElement.children.item(0);
        expect(tabPanelEl.classList.contains('is-active')).toBe(true);
    });
    it('should activate the selected tab if the selectedIndex changed programmatically', function () {
        testing_1.TestBed.overrideComponent(MdlTestComponent, { set: {
                template: "\n          <mdl-tabs [mdl-tab-active-index]=\"activeIndex\" >\n               <mdl-tab-panel mdl-tab-panel-title=\"t1\"></mdl-tab-panel>\n               <mdl-tab-panel mdl-tab-panel-titlex=\"t2\"></mdl-tab-panel>\n          </mdl-tabs>\n        " }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestComponent);
        fixture.detectChanges();
        expect(fixture.componentInstance.activeIndex).toBe(0);
        fixture.componentInstance.activeIndex = 1;
        fixture.detectChanges();
        var mdlLayoutComponent = fixture.debugElement.query(platform_browser_1.By.directive(index_1.MdlTabsComponent)).componentInstance;
        expect(mdlLayoutComponent.selectedIndex).toBe(1);
    });
});
var MdlTestComponent = (function () {
    function MdlTestComponent() {
        this.activeIndex = 0;
    }
    MdlTestComponent = __decorate([
        core_1.Component({
            selector: 'test',
            template: 'replaced by the test'
        }), 
        __metadata('design:paramtypes', [])
    ], MdlTestComponent);
    return MdlTestComponent;
}());
//# sourceMappingURL=../../../dist/components/tabs/mdl-tab-panel.component.spec.js.map