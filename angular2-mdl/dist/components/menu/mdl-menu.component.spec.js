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
var mdl_button_component_1 = require('./../button/mdl-button.component');
describe('Component: MdlMenu', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [index_1.MdlMenuModule, mdl_button_component_1.MdlButtonModule],
            declarations: [MdlTestComponent],
        });
    });
    it('should add the css class mdl-menu__container to the host element', function () {
        testing_1.TestBed.overrideComponent(MdlTestComponent, { set: {
                template: '<mdl-menu>x</mdl-menu>' }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestComponent);
        fixture.detectChanges();
        var menuEl = fixture.debugElement.query(platform_browser_1.By.css('.mdl-menu__container')).nativeElement;
        expect(menuEl).toBeDefined();
    });
    it('should export the component instance as mdlMenu', function () {
        testing_1.TestBed.overrideComponent(MdlTestComponent, { set: {
                template: '<mdl-menu #menu="mdlMenu">x</mdl-menu>' }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestComponent);
        fixture.detectChanges();
        var references = fixture.debugElement.query(platform_browser_1.By.directive(index_1.MdlMenuComponent)).references;
        expect(references['menu']).toBeDefined();
    });
    it('should throw if toggle is called without a button', function () {
        testing_1.TestBed.overrideComponent(MdlTestComponent, { set: {
                template: '<mdl-menu>x</mdl-menu>' }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestComponent);
        fixture.detectChanges();
        var menu = fixture.debugElement.query(platform_browser_1.By.directive(index_1.MdlMenuComponent)).componentInstance;
        expect(function () {
            menu.toggle(null, null);
        }).toThrow();
    });
    it('should show the menu if the the menu button is clicked and hide if clicked again', function () {
        testing_1.TestBed.overrideComponent(MdlTestComponent, { set: {
                template: "\n          <mdl-button #btn=\"mdlButton\" (click)=\"m1.toggle($event, btn)\">button</mdl-button>\n          <mdl-menu #m1=\"mdlMenu\"><mdl-menu-item>Action</mdl-menu-item></mdl-menu>\n        " }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestComponent);
        fixture.detectChanges();
        var buttonElement = fixture.debugElement.query(platform_browser_1.By.directive(mdl_button_component_1.MdlButtonComponent)).nativeElement;
        var menu = fixture.debugElement.query(platform_browser_1.By.directive(index_1.MdlMenuComponent)).componentInstance;
        buttonElement.click();
        expect(menu.isVisible).toBe(true);
        expect(menu.menuElement.classList.contains('is-animating')).toBe(true);
        expect(menu.container.classList.contains('is-visible')).toBe(true);
        buttonElement.click();
        expect(menu.isVisible).toBe(false);
        expect(menu.menuElement.classList.contains('is-animating')).toBe(true);
        expect(menu.container.classList.contains('is-visible')).toBe(false);
        expect(menu.container.style.left).not.toBe('');
        expect(menu.container.style.top).not.toBe('');
        expect(menu.container.style.right).toBe('');
        expect(menu.container.style.bottom).toBe('');
    });
    it('should be possible to show a menu bottom-right aligned', function () {
        testing_1.TestBed.overrideComponent(MdlTestComponent, { set: {
                template: "\n          <mdl-button #btn=\"mdlButton\" (click)=\"m1.toggle($event, btn)\">button</mdl-button>\n          <mdl-menu #m1=\"mdlMenu\" mdl-menu-position=\"bottom-right\">\n            <mdl-menu-item>Action</mdl-menu-item>\n          </mdl-menu>\n        " }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestComponent);
        fixture.detectChanges();
        var buttonElement = fixture.debugElement.query(platform_browser_1.By.directive(mdl_button_component_1.MdlButtonComponent)).nativeElement;
        var menu = fixture.debugElement.query(platform_browser_1.By.directive(index_1.MdlMenuComponent)).componentInstance;
        buttonElement.click();
        expect(menu.isVisible).toBe(true);
        expect(menu.container.style.left).toBe('');
        expect(menu.container.style.top).not.toBe('');
        expect(menu.container.style.right).not.toBe('');
        expect(menu.container.style.bottom).toBe('');
    });
    it('should be possible to show a menu top-left aligned', function () {
        testing_1.TestBed.overrideComponent(MdlTestComponent, { set: {
                template: "\n          <mdl-button #btn=\"mdlButton\" (click)=\"m1.toggle($event, btn)\">button</mdl-button>\n          <mdl-menu #m1=\"mdlMenu\" mdl-menu-position=\"top-left\">\n            <mdl-menu-item>Action</mdl-menu-item>\n          </mdl-menu>\n        " }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestComponent);
        fixture.detectChanges();
        var buttonElement = fixture.debugElement.query(platform_browser_1.By.directive(mdl_button_component_1.MdlButtonComponent)).nativeElement;
        var menu = fixture.debugElement.query(platform_browser_1.By.directive(index_1.MdlMenuComponent)).componentInstance;
        buttonElement.click();
        expect(menu.isVisible).toBe(true);
        expect(menu.container.style.left).not.toBe('');
        expect(menu.container.style.top).toBe('');
        expect(menu.container.style.right).toBe('');
        expect(menu.container.style.bottom).not.toBe('');
    });
    it('should be possible to show a menu top-right aligned', function () {
        testing_1.TestBed.overrideComponent(MdlTestComponent, { set: {
                template: "\n          <mdl-button #btn=\"mdlButton\" (click)=\"m1.toggle($event, btn)\">button</mdl-button>\n          <mdl-menu #m1=\"mdlMenu\" mdl-menu-position=\"top-right\">\n            <mdl-menu-item>Action</mdl-menu-item>\n          </mdl-menu>\n        " }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestComponent);
        fixture.detectChanges();
        var buttonElement = fixture.debugElement.query(platform_browser_1.By.directive(mdl_button_component_1.MdlButtonComponent)).nativeElement;
        var menu = fixture.debugElement.query(platform_browser_1.By.directive(index_1.MdlMenuComponent)).componentInstance;
        buttonElement.click();
        expect(menu.isVisible).toBe(true);
        expect(menu.container.style.left).toBe('');
        expect(menu.container.style.top).toBe('');
        expect(menu.container.style.right).not.toBe('');
        expect(menu.container.style.bottom).not.toBe('');
    });
    it('should be possible to show a menu unaligned', function () {
        testing_1.TestBed.overrideComponent(MdlTestComponent, { set: {
                template: "\n          <mdl-button #btn=\"mdlButton\" (click)=\"m1.toggle($event, btn)\">button</mdl-button>\n          <mdl-menu #m1=\"mdlMenu\" mdl-menu-position=\"unaligned\">\n            <mdl-menu-item>Action</mdl-menu-item>\n          </mdl-menu>\n        " }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestComponent);
        fixture.detectChanges();
        var buttonElement = fixture.debugElement.query(platform_browser_1.By.directive(mdl_button_component_1.MdlButtonComponent)).nativeElement;
        var menu = fixture.debugElement.query(platform_browser_1.By.directive(index_1.MdlMenuComponent)).componentInstance;
        buttonElement.click();
        expect(menu.isVisible).toBe(true);
        expect(menu.container.style.left).toBe('');
        expect(menu.container.style.top).toBe('');
        expect(menu.container.style.right).toBe('');
    });
});
var MdlTestComponent = (function () {
    function MdlTestComponent() {
    }
    MdlTestComponent = __decorate([
        core_1.Component({
            selector: 'test-menu',
            template: 'replaced by the test'
        }), 
        __metadata('design:paramtypes', [])
    ], MdlTestComponent);
    return MdlTestComponent;
}());
//# sourceMappingURL=../../../dist/components/menu/mdl-menu.component.spec.js.map