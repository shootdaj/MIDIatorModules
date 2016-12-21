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
var mdl_slider_component_1 = require('./mdl-slider.component');
var forms_1 = require('@angular/forms');
describe('Component: MdlSlider', function () {
    var doc;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [mdl_slider_component_1.MdlSliderModule, forms_1.FormsModule],
            declarations: [MdlTestSliderComponent],
        });
    }));
    beforeEach(testing_1.async(testing_1.inject([platform_browser_1.DOCUMENT], function (document) {
        doc = document;
    })));
    it('should add the css class mdl-slider__container to the host element', testing_1.async(function () {
        var fixture = testing_1.TestBed.createComponent(MdlTestSliderComponent);
        fixture.detectChanges();
        var iconEl = fixture.nativeElement.children.item(0);
        expect(iconEl.classList.contains('mdl-slider__container')).toBe(true);
    }));
    it('should support ngModel', testing_1.async(function () {
        var fixture = testing_1.TestBed.createComponent(MdlTestSliderComponent);
        fixture.detectChanges();
        var instance = fixture.componentInstance;
        var component = fixture.debugElement.query(platform_browser_1.By.directive(mdl_slider_component_1.MdlSliderComponent)).componentInstance;
        instance.currentValue = 67;
        fixture.detectChanges();
        fixture.whenStable().then(function () {
            expect(component.value).toEqual(67);
            component.value = 88;
            fixture.detectChanges();
            expect(instance.currentValue).toEqual(88);
        });
    }));
    it('should call blur on mouseup events on the host element', testing_1.async(function () {
        var fixture = testing_1.TestBed.createComponent(MdlTestSliderComponent);
        fixture.detectChanges();
        var hostElement = fixture.debugElement.query(platform_browser_1.By.css('mdl-slider')).nativeElement;
        spyOn(hostElement, 'blur');
        var evt = doc.createEvent('HTMLEvents');
        evt.initEvent('mouseup', true, true);
        hostElement.dispatchEvent(evt);
        fixture.detectChanges();
        expect(hostElement.blur).toHaveBeenCalled();
    }));
    it('should propagate mousedown events on the host to the input element', testing_1.async(function () {
        var fixture = testing_1.TestBed.createComponent(MdlTestSliderComponent);
        fixture.detectChanges();
        var hostElement = fixture.debugElement.query(platform_browser_1.By.css('mdl-slider')).nativeElement;
        var inputElement = fixture.debugElement.query(platform_browser_1.By.css('input')).nativeElement;
        spyOn(inputElement, 'dispatchEvent').and.callThrough();
        var evt = doc.createEvent('HTMLEvents');
        evt.initEvent('mousedown', true, true);
        hostElement.dispatchEvent(evt);
        fixture.detectChanges();
        expect(inputElement.dispatchEvent).toHaveBeenCalledTimes(1);
    }));
    it('should not propagate mousedown events to the input element on other elements than the host', testing_1.async(function () {
        var fixture = testing_1.TestBed.createComponent(MdlTestSliderComponent);
        fixture.detectChanges();
        var inputElement = fixture.debugElement.query(platform_browser_1.By.css('input')).nativeElement;
        spyOn(inputElement, 'dispatchEvent').and.callThrough();
        var evt = doc.createEvent('HTMLEvents');
        evt.initEvent('mousedown', true, true);
        inputElement.dispatchEvent(evt);
        fixture.detectChanges();
        // if it would be propagated dispatchEvent would have been called 2 times.
        expect(inputElement.dispatchEvent).toHaveBeenCalledTimes(1);
    }));
    it('should be possible to disable the slider', testing_1.async(function () {
        var fixture = testing_1.TestBed.createComponent(MdlTestSliderComponent);
        fixture.detectChanges();
        var cbDebugElem = fixture.debugElement.query(platform_browser_1.By.directive(mdl_slider_component_1.MdlSliderComponent));
        cbDebugElem.componentInstance.setDisabledState(true);
        fixture.detectChanges();
        expect(cbDebugElem.componentInstance.disabled).toBe(true, 'the internal disbaled prop should be true');
        fixture.whenStable().then(function () {
            var inputElement = fixture.debugElement.query(platform_browser_1.By.css('input')).nativeElement;
            expect(inputElement.getAttribute('disabled')).toBe('', 'the underlaying input element should be disbaled');
        });
    }));
});
var MdlTestSliderComponent = (function () {
    function MdlTestSliderComponent() {
        this.min = 0;
        this.max = 100;
        this.currentValue = 50;
    }
    MdlTestSliderComponent = __decorate([
        core_1.Component({
            selector: 'test-icon',
            template: "<mdl-slider [min]='min' [max]='max' [(ngModel)]='currentValue'></mdl-slider>"
        }), 
        __metadata('design:paramtypes', [])
    ], MdlTestSliderComponent);
    return MdlTestSliderComponent;
}());
//# sourceMappingURL=../../../dist/components/slider/mdl-slider.component.spec.js.map