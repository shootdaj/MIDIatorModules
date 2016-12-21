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
describe('Component: MdlChip', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [index_1.MdlChipModule],
            declarations: [MdlTestComponent],
        });
    });
    it('should add the css class mdl-chip to the host element', function () {
        var fixture = testing_1.TestBed.createComponent(MdlTestComponent);
        fixture.detectChanges();
        var el = fixture.debugElement.query(platform_browser_1.By.directive(index_1.MdlChipComponent)).nativeElement;
        expect(el.classList.contains('mdl-chip')).toBe(true);
    });
    it('should contain the label text if present', function () {
        var fixture = testing_1.TestBed.createComponent(MdlTestComponent);
        fixture.detectChanges();
        var el = fixture.debugElement.query(platform_browser_1.By.css('.mdl-chip__text')).nativeElement;
        expect(el.textContent).toBe('test');
    });
    it('should contain the delete button if mdl-delete-icon is set', function () {
        var fixture = testing_1.TestBed.createComponent(MdlTestComponent);
        fixture.detectChanges();
        var el = fixture.debugElement.query(platform_browser_1.By.css('.mdl-chip__action')).nativeElement;
        expect(el.nodeName).toBe('BUTTON');
    });
    it('should call the action method on click', function () {
        var fixture = testing_1.TestBed.createComponent(MdlTestComponent);
        fixture.detectChanges();
        var testComponent = fixture.componentInstance;
        spyOn(testComponent, 'onAction');
        var el = fixture.debugElement.query(platform_browser_1.By.css('.mdl-chip__action')).nativeElement;
        el.click();
        expect(testComponent.onAction).toHaveBeenCalled();
    });
});
var MdlTestComponent = (function () {
    function MdlTestComponent() {
    }
    MdlTestComponent.prototype.onAction = function () { };
    MdlTestComponent = __decorate([
        core_1.Component({
            selector: 'test-chip',
            template: '<mdl-chip mdl-label="test" mdl-action-icon="cancel" (action-click)="onAction()"></mdl-chip>'
        }), 
        __metadata('design:paramtypes', [])
    ], MdlTestComponent);
    return MdlTestComponent;
}());
//# sourceMappingURL=../../../dist/components/chips/mdl-chip.component.spec.js.map