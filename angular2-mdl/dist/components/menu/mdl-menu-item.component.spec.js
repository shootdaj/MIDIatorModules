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
describe('Component: MdlMenuItem', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [index_1.MdlMenuModule],
            declarations: [MdlTestMenuItemComponent],
        });
    });
    it('should add the css class mdl-menu__item to the host element', function () {
        testing_1.TestBed.overrideComponent(MdlTestMenuItemComponent, { set: {
                template: '<mdl-menu><mdl-menu-item>x</mdl-menu-item></mdl-menu>' }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestMenuItemComponent);
        fixture.detectChanges();
        var menuItemEl = fixture.debugElement.query(platform_browser_1.By.directive(index_1.MdlMenuItemComponent)).nativeElement;
        expect(menuItemEl.classList.contains('mdl-menu__item')).toBe(true);
    });
    it('should call hideOnItemClicked on menu if the item is clicked', function () {
        testing_1.TestBed.overrideComponent(MdlTestMenuItemComponent, { set: {
                template: '<mdl-menu><mdl-menu-item>x</mdl-menu-item></mdl-menu>' }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestMenuItemComponent);
        fixture.detectChanges();
        var menu = fixture.debugElement.query(platform_browser_1.By.directive(index_1.MdlMenuComponent)).componentInstance;
        var menuItemEl = fixture.debugElement.query(platform_browser_1.By.directive(index_1.MdlMenuItemComponent)).nativeElement;
        spyOn(menu, 'hideOnItemClicked').and.callThrough();
        expect(menu.hideOnItemClicked).not.toHaveBeenCalled();
        menuItemEl.click();
        expect(menu.hideOnItemClicked).toHaveBeenCalled();
    });
    it('should call hideOnItemClicked on menu if the item is touched', function () {
        testing_1.TestBed.overrideComponent(MdlTestMenuItemComponent, { set: {
                template: '<mdl-menu><mdl-menu-item>x</mdl-menu-item></mdl-menu>' }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestMenuItemComponent);
        fixture.detectChanges();
        var menu = fixture.debugElement.query(platform_browser_1.By.directive(index_1.MdlMenuComponent)).componentInstance;
        var menuItemEl = fixture.debugElement.query(platform_browser_1.By.directive(index_1.MdlMenuItemComponent)).nativeElement;
        spyOn(menu, 'hideOnItemClicked').and.callThrough();
        expect(menu.hideOnItemClicked).not.toHaveBeenCalled();
        var event = new Event('touchstart', {});
        menuItemEl.dispatchEvent(event);
        expect(menu.hideOnItemClicked).toHaveBeenCalled();
    });
    it('should not call hideOnItemClicked on menu if the item is disbaled', function () {
        testing_1.TestBed.overrideComponent(MdlTestMenuItemComponent, { set: {
                template: '<mdl-menu><mdl-menu-item disabled>x</mdl-menu-item></mdl-menu>' }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestMenuItemComponent);
        fixture.detectChanges();
        var menu = fixture.debugElement.query(platform_browser_1.By.directive(index_1.MdlMenuComponent)).componentInstance;
        var menuItemEl = fixture.debugElement.query(platform_browser_1.By.directive(index_1.MdlMenuItemComponent)).nativeElement;
        spyOn(menu, 'hideOnItemClicked').and.callThrough();
        expect(menu.hideOnItemClicked).not.toHaveBeenCalled();
        menuItemEl.click();
        expect(menu.hideOnItemClicked).not.toHaveBeenCalled();
    });
});
var MdlTestMenuItemComponent = (function () {
    function MdlTestMenuItemComponent() {
    }
    MdlTestMenuItemComponent = __decorate([
        core_1.Component({
            selector: 'test-menu',
            template: 'replaced by the test'
        }), 
        __metadata('design:paramtypes', [])
    ], MdlTestMenuItemComponent);
    return MdlTestMenuItemComponent;
}());
//# sourceMappingURL=../../../dist/components/menu/mdl-menu-item.component.spec.js.map