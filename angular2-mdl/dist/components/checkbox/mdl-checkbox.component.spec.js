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
var mdl_checkbox_component_1 = require('./mdl-checkbox.component');
var forms_1 = require('@angular/forms');
describe('Component: MdlCheckbox', function () {
    var doc;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [mdl_checkbox_component_1.MdlChekboxModule, forms_1.FormsModule],
            declarations: [MdlTestCheckboxComponent],
        });
    }));
    beforeEach(testing_1.async(testing_1.inject([platform_browser_1.DOCUMENT], function (document) {
        doc = document;
    })));
    it('should add the css class mdl-checkbox to the host element', function () {
        var fixture = testing_1.TestBed.createComponent(MdlTestCheckboxComponent);
        fixture.detectChanges();
        var checkboxEl = fixture.nativeElement.children.item(0);
        expect(checkboxEl.classList.contains('mdl-checkbox')).toBe(true);
    });
    it('should support ngModel', testing_1.async(function () {
        var fixture = testing_1.TestBed.createComponent(MdlTestCheckboxComponent);
        fixture.detectChanges();
        fixture.whenStable().then(function () {
            var testInstance = fixture.componentInstance;
            // let el = <HTMLInputElement> fixture.debugElement.query(By.css('input')).nativeElement;
            var checkboxComponent = fixture.debugElement.query(platform_browser_1.By.directive(mdl_checkbox_component_1.MdlCheckboxComponent)).componentInstance;
            testInstance.checkboxValue1 = true;
            fixture.detectChanges();
            fixture.whenStable().then(function () {
                // but el.checked is not true ?
                expect(checkboxComponent.value).toEqual(true);
            });
        });
    }));
    it('should change the value on click', function () {
        var fixture = testing_1.TestBed.createComponent(MdlTestCheckboxComponent);
        fixture.detectChanges();
        var instance = fixture.componentInstance;
        instance.checkboxValue1 = false;
        fixture.debugElement.query(platform_browser_1.By.directive(mdl_checkbox_component_1.MdlCheckboxComponent)).nativeElement.click();
        expect(instance.checkboxValue1).toEqual(true);
    });
    it('should mark the component as focused and blured', function () {
        var fixture = testing_1.TestBed.createComponent(MdlTestCheckboxComponent);
        fixture.detectChanges();
        var inputEl = fixture.debugElement.query(platform_browser_1.By.css('input')).nativeElement;
        var evt = doc.createEvent('HTMLEvents');
        evt.initEvent('focus', true, true);
        inputEl.dispatchEvent(evt);
        fixture.detectChanges();
        var checkboxEl = fixture.debugElement.query(platform_browser_1.By.directive(mdl_checkbox_component_1.MdlCheckboxComponent)).nativeElement;
        expect(checkboxEl.classList.contains('is-focused')).toBe(true);
        var evtBlur = doc.createEvent('HTMLEvents');
        evtBlur.initEvent('blur', true, true);
        inputEl.dispatchEvent(evtBlur);
        fixture.detectChanges();
        expect(checkboxEl.classList.contains('is-focused')).toBe(false);
    });
    it('should fire a change event if the state changed', testing_1.async(function () {
        var fixture = testing_1.TestBed.createComponent(MdlTestCheckboxComponent);
        fixture.detectChanges();
        var instance = fixture.componentInstance;
        spyOn(instance, 'onChange');
        fixture.debugElement.query(platform_browser_1.By.directive(mdl_checkbox_component_1.MdlCheckboxComponent)).nativeElement.click();
        expect(instance.onChange).toHaveBeenCalledWith(true);
    }));
    it('should be possible to disable the checkbox', testing_1.async(function () {
        var fixture = testing_1.TestBed.createComponent(MdlTestCheckboxComponent);
        fixture.detectChanges();
        var instance = fixture.componentInstance;
        var cbDebugElem = fixture.debugElement.query(platform_browser_1.By.directive(mdl_checkbox_component_1.MdlCheckboxComponent));
        cbDebugElem.componentInstance.setDisabledState(true);
        fixture.detectChanges();
        var checkboxEl = cbDebugElem.nativeElement;
        expect(checkboxEl.classList.contains('is-disabled')).toBe(true, 'should have css is-disabled');
        // should not change on click
        cbDebugElem.nativeElement.click();
        expect(instance.checkboxValue1).toEqual(false);
    }));
});
var MdlTestCheckboxComponent = (function () {
    function MdlTestCheckboxComponent() {
        this.checkboxValue1 = false;
    }
    MdlTestCheckboxComponent.prototype.onChange = function (v) { };
    MdlTestCheckboxComponent = __decorate([
        core_1.Component({
            selector: 'test-icon',
            template: "<mdl-checkbox [disabled]=\"false\" [(ngModel)]=\"checkboxValue1\" mdl-ripple (change)=\"onChange($event)\">\n              checkbox label\n            </mdl-checkbox>\n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], MdlTestCheckboxComponent);
    return MdlTestCheckboxComponent;
}());
//# sourceMappingURL=../../../dist/components/checkbox/mdl-checkbox.component.spec.js.map