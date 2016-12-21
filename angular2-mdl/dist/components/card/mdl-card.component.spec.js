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
var mdl_card_component_1 = require('./mdl-card.component');
describe('Components: MdlCard*', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [mdl_card_component_1.MdlCardModule],
            declarations: [TestApp],
        });
    });
    it('should add the css class mdl-card to the element', function () {
        var fixture = testing_1.TestBed.createComponent(TestApp);
        fixture.detectChanges();
        var mdlCardElement = fixture.debugElement.query(platform_browser_1.By.css('mdl-card'));
        expect(mdlCardElement.nativeElement.classList.contains('mdl-card')).toBe(true);
        var mdlCardTitleElement = fixture.debugElement.query(platform_browser_1.By.css('mdl-card-title'));
        expect(mdlCardTitleElement.nativeElement.classList.contains('mdl-card__title')).toBe(true);
        var mdlCardMediaElement = fixture.debugElement.query(platform_browser_1.By.css('mdl-card-media'));
        expect(mdlCardMediaElement.nativeElement.classList.contains('mdl-card__media')).toBe(true);
        var mdlCardSupportingTextElement = fixture.debugElement.query(platform_browser_1.By.css('mdl-card-supporting-text'));
        expect(mdlCardSupportingTextElement.nativeElement.classList.contains('mdl-card__supporting-text')).toBe(true);
        var mdlCardActionsElement = fixture.debugElement.query(platform_browser_1.By.css('mdl-card-actions'));
        expect(mdlCardActionsElement.nativeElement.classList.contains('mdl-card__actions')).toBe(true);
        var mdlCardMenuElement = fixture.debugElement.query(platform_browser_1.By.css('mdl-card-menu'));
        expect(mdlCardMenuElement.nativeElement.classList.contains('mdl-card__menu')).toBe(true);
        var mdlCardTitleTextElement = fixture.debugElement.query(platform_browser_1.By.css('[mdl-card-title-text]'));
        expect(mdlCardTitleTextElement.nativeElement.classList.contains('mdl-card__title-text')).toBe(true);
        var mdlCardBorderElement = fixture.debugElement.query(platform_browser_1.By.css('[mdl-card-border]'));
        expect(mdlCardBorderElement.nativeElement.classList.contains('mdl-card--border')).toBe(true);
        var mdlCardExpandElement = fixture.debugElement.query(platform_browser_1.By.css('[mdl-card-expand]'));
        expect(mdlCardExpandElement.nativeElement.classList.contains('mdl-card--expand')).toBe(true);
    });
    it('should throw if mdl-card-title has no mdl-card parent', function () {
        testing_1.TestBed.overrideComponent(TestApp, { set: {
                template: '<mdl-card-title></mdl-card-title>' }
        });
        var fixture = testing_1.TestBed.createComponent(TestApp);
        expect(function () { return fixture.detectChanges(); })
            .toThrow();
    });
    it('should throw if mdl-card-supporting-text has no mdl-card parent', function () {
        testing_1.TestBed.overrideComponent(TestApp, { set: {
                template: '<mdl-card-supporting-text></mdl-card-supporting-text>' }
        });
        var fixture = testing_1.TestBed.createComponent(TestApp);
        expect(function () { return fixture.detectChanges(); })
            .toThrow();
    });
    it('should throw if mdl-card-actions has no mdl-card parent', function () {
        testing_1.TestBed.overrideComponent(TestApp, { set: {
                template: '<mdl-card-actions></mdl-card-actions>' }
        });
        var fixture = testing_1.TestBed.createComponent(TestApp);
        expect(function () { return fixture.detectChanges(); })
            .toThrow();
    });
    it('should throw if mdl-card-menu has no mdl-card parent', function () {
        testing_1.TestBed.overrideComponent(TestApp, { set: {
                template: '<mdl-card-menu></mdl-card-menu>' }
        });
        var fixture = testing_1.TestBed.createComponent(TestApp);
        expect(function () { return fixture.detectChanges(); })
            .toThrow();
    });
    it('should throw if mdl-card-media has no mdl-card parent', function () {
        testing_1.TestBed.overrideComponent(TestApp, { set: {
                template: '<mdl-card-media></mdl-card-media>' }
        });
        var fixture = testing_1.TestBed.createComponent(TestApp);
        expect(function () { return fixture.detectChanges(); })
            .toThrow();
    });
});
var TestApp = (function () {
    function TestApp() {
    }
    TestApp = __decorate([
        core_1.Component({
            selector: 'test-app',
            template: "\n    <mdl-card>\n      <mdl-card-title mdl-card-expand><div mdl-card-title-text>test</div></mdl-card-title>\n      <mdl-card-media></mdl-card-media>\n      <mdl-card-supporting-text></mdl-card-supporting-text>\n      <mdl-card-actions mdl-card-border></mdl-card-actions>\n      <mdl-card-menu></mdl-card-menu>\n    </mdl-card>\n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], TestApp);
    return TestApp;
}());
//# sourceMappingURL=../../../dist/components/card/mdl-card.component.spec.js.map