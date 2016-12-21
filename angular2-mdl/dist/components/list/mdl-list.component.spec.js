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
var mdl_list_component_1 = require('./mdl-list.component');
describe('Components: MdlList*', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [mdl_list_component_1.MdlListModule],
            declarations: [TestApp],
        });
    });
    it('should add the css class mdl-list to the element', function () {
        var fixture = testing_1.TestBed.createComponent(TestApp);
        fixture.detectChanges();
        var mdlListElement = fixture.debugElement.query(platform_browser_1.By.css('mdl-list'));
        expect(mdlListElement
            .nativeElement.classList.contains('mdl-list')).toBe(true);
        var mdlListItemElement = fixture.debugElement.query(platform_browser_1.By.css('mdl-list-item'));
        expect(mdlListItemElement
            .nativeElement.classList.contains('mdl-list__item')).toBe(true);
        var mdlListItemPrimaryContentElement = fixture.debugElement.query(platform_browser_1.By.css('mdl-list-item-primary-content'));
        expect(mdlListItemPrimaryContentElement
            .nativeElement.classList.contains('mdl-list__item-primary-content')).toBe(true);
        var mdlListItemSecondaryContentElement = fixture.debugElement.query(platform_browser_1.By.css('mdl-list-item-secondary-content'));
        expect(mdlListItemSecondaryContentElement
            .nativeElement.classList.contains('mdl-list__item-secondary-content')).toBe(true);
        var mdlListIconElement = fixture.debugElement.query(platform_browser_1.By.css('#icon1'));
        expect(mdlListIconElement
            .nativeElement.classList.contains('mdl-list__item-icon')).toBe(true);
        var mdlListIconAvatarElement = fixture.debugElement.query(platform_browser_1.By.css('#icon2'));
        expect(mdlListIconAvatarElement
            .nativeElement.classList.contains('mdl-list__item-avatar')).toBe(true);
        var mdlListItemSecondaryActionElement = fixture.debugElement.query(platform_browser_1.By.css('mdl-list-item-secondary-action'));
        expect(mdlListItemSecondaryActionElement
            .nativeElement.classList.contains('mdl-list__item-secondary-action')).toBe(true);
        var mdlListItemSubTitleElement = fixture.debugElement.query(platform_browser_1.By.css('mdl-list-item-sub-title'));
        expect(mdlListItemSubTitleElement
            .nativeElement.classList.contains('mdl-list__item-sub-title')).toBe(true);
        var mdlListItemSecondaryInfoElement = fixture.debugElement.query(platform_browser_1.By.css('mdl-list-item-secondary-info'));
        expect(mdlListItemSecondaryInfoElement
            .nativeElement.classList.contains('mdl-list__item-secondary-info')).toBe(true);
        var mdlListItemtextBodyElement = fixture.debugElement.query(platform_browser_1.By.css('mdl-list-item-text-body'));
        expect(mdlListItemtextBodyElement
            .nativeElement.classList.contains('mdl-list__item-text-body')).toBe(true);
    });
    it('should throw if mdl-list-item has no mdl-list parent', function () {
        testing_1.TestBed.overrideComponent(TestApp, { set: {
                template: '<mdl-list-item></mdl-list-item>' }
        });
        var fixture = testing_1.TestBed.createComponent(TestApp);
        expect(function () { return fixture.detectChanges(); }).toThrow();
    });
    it('should throw if mdl-list-item-primary-content has no mdl-list-item parent', function () {
        testing_1.TestBed.overrideComponent(TestApp, { set: {
                template: '<mdl-list-item-primary-content></mdl-list-item-primary-content>' }
        });
        var fixture = testing_1.TestBed.createComponent(TestApp);
        expect(function () { return fixture.detectChanges(); }).toThrow();
    });
    it('should throw if mdl-list-item-secondary-content has no mdl-list-item parent', function () {
        testing_1.TestBed.overrideComponent(TestApp, { set: {
                template: '<mdl-list-item-secondary-content></mdl-list-item-secondary-content>' }
        });
        var fixture = testing_1.TestBed.createComponent(TestApp);
        expect(function () { return fixture.detectChanges(); }).toThrow();
    });
    it('should throw if mdl-list-item-secondary-action has no mdl-list-item parent', function () {
        testing_1.TestBed.overrideComponent(TestApp, { set: {
                template: '<mdl-list-item-secondary-action></mdl-list-item-secondary-action>' }
        });
        var fixture = testing_1.TestBed.createComponent(TestApp);
        expect(function () { return fixture.detectChanges(); }).toThrow();
    });
    it('should throw if mdl-list-item-sub-title has no mdl-list-item-primary-content', function () {
        testing_1.TestBed.overrideComponent(TestApp, { set: {
                template: '<mdl-list-item-sub-title></mdl-list-item-sub-title>' }
        });
        var fixture = testing_1.TestBed.createComponent(TestApp);
        expect(function () { return fixture.detectChanges(); }).toThrow();
    });
    it('should throw if mdl-list-item-secondary-info has no mdl-list-item-secondary-content', function () {
        testing_1.TestBed.overrideComponent(TestApp, { set: {
                template: '<mdl-list-item-secondary-info></mdl-list-item-secondary-info>' }
        });
        var fixture = testing_1.TestBed.createComponent(TestApp);
        expect(function () { return fixture.detectChanges(); }).toThrow();
    });
    it('should throw if mdl-list-item-text-body has no mdl-list-item', function () {
        testing_1.TestBed.overrideComponent(TestApp, { set: {
                template: '<mdl-list-item-text-body></mdl-list-item-text-body>' }
        });
        var fixture = testing_1.TestBed.createComponent(TestApp);
        expect(function () { return fixture.detectChanges(); }).toThrow();
    });
    it('should only support max 3 lines', function () {
        testing_1.TestBed.overrideComponent(TestApp, { set: {
                template: '<mdl-list-item lines="4"></mdl-list-item>' }
        });
        var fixture = testing_1.TestBed.createComponent(TestApp);
        expect(function () { return fixture.detectChanges(); }).toThrow();
    });
});
var TestApp = (function () {
    function TestApp() {
    }
    TestApp = __decorate([
        core_1.Component({
            selector: 'test-app',
            template: "\n    <mdl-list>\n      <mdl-list-item lines=\"3\">\n        <mdl-list-item-primary-content>\n          <mdl-icon mdl-list-item-icon id=\"icon1\"></mdl-icon>\n          <mdl-icon mdl-list-item-avatar id=\"icon2\"></mdl-icon>\n          <mdl-list-item-sub-title></mdl-list-item-sub-title>\n          <mdl-list-item-text-body></mdl-list-item-text-body>\n        </mdl-list-item-primary-content>\n        <mdl-list-item-secondary-content>\n          <mdl-list-item-secondary-info></mdl-list-item-secondary-info>\n        </mdl-list-item-secondary-content>\n        <mdl-list-item-secondary-action>\n        \n        </mdl-list-item-secondary-action>\n      </mdl-list-item>\n    </mdl-list>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], TestApp);
    return TestApp;
}());
//# sourceMappingURL=../../../dist/components/list/mdl-list.component.spec.js.map