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
var mdl_radio_component_1 = require('./mdl-radio.component');
var forms_1 = require('@angular/forms');
describe('Component: MdlRadio', function () {
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [mdl_radio_component_1.MdlRadioModule, forms_1.FormsModule, forms_1.ReactiveFormsModule],
            declarations: [MdlTestRadioComponent],
        });
    }));
    it('should add the css class mdl-radio to the host element', function () {
        var fixture = testing_1.TestBed.createComponent(MdlTestRadioComponent);
        fixture.detectChanges();
        var checkboxEl = fixture.nativeElement.children.item(0);
        expect(checkboxEl.classList.contains('mdl-radio')).toBe(true);
    });
    it('should support ngModel', testing_1.async(function () {
        var fixture = testing_1.TestBed.createComponent(MdlTestRadioComponent);
        fixture.detectChanges();
        var instance = fixture.componentInstance;
        var component = fixture.debugElement.queryAll(platform_browser_1.By.directive(mdl_radio_component_1.MdlRadioComponent))[0];
        instance.radioValue = '1';
        fixture.detectChanges();
        fixture.whenStable().then(function () {
            expect(component.componentInstance.optionValue).toEqual('1');
            var component2 = fixture.debugElement.queryAll(platform_browser_1.By.directive(mdl_radio_component_1.MdlRadioComponent))[1];
            component2.nativeElement.click();
            fixture.detectChanges();
            fixture.whenStable().then(function () {
                expect(component.componentInstance.optionValue).toEqual('2');
            });
        });
    }));
    it('should mark the component as focused and blured', function () {
        var fixture = testing_1.TestBed.createComponent(MdlTestRadioComponent);
        fixture.detectChanges();
        var inputEl = fixture.debugElement.queryAll(platform_browser_1.By.css('input'))[0].nativeElement;
        inputEl.focus();
        fixture.detectChanges();
        var radioEl = fixture.debugElement.queryAll(platform_browser_1.By.directive(mdl_radio_component_1.MdlRadioComponent))[0].nativeElement;
        expect(radioEl.classList.contains('is-focused')).toBe(true);
        inputEl.blur();
        fixture.detectChanges();
        expect(radioEl.classList.contains('is-focused')).toBe(false);
    });
    it('should throw if name and formcontrolname are different', testing_1.async(function () {
        testing_1.TestBed.overrideComponent(MdlTestRadioComponent, { set: {
                template: "\n        <mdl-radio name=\"r\" formControlName=\"test\" value=\"1\" mdl-ripple>radio label 1</mdl-radio>\n        <mdl-radio name=\"r\" formControlName=\"test\" value=\"2\" mdl-ripple>radio label 2</mdl-radio>\n      "
            } });
        var fixture = testing_1.TestBed.createComponent(MdlTestRadioComponent);
        expect(function () { fixture.detectChanges(); }).toThrow();
    }));
    it('should take the name from formcontrolname if no name os provided', testing_1.async(function () {
        testing_1.TestBed.overrideComponent(MdlTestRadioComponent, { set: {
                template: "\n        <form [formGroup]=\"form\">\n          <mdl-radio formControlName=\"test\" value=\"1\" mdl-ripple>radio label 1</mdl-radio>\n        </form>\n      "
            } });
        var fixture = testing_1.TestBed.createComponent(MdlTestRadioComponent);
        fixture.detectChanges();
        var radioComponent = fixture.debugElement.query(platform_browser_1.By.directive(mdl_radio_component_1.MdlRadioComponent)).componentInstance;
        expect(radioComponent.name).toEqual('test');
    }));
    it('should remove mdl-radio if the component is destroyed', testing_1.async(function () {
        testing_1.TestBed.overrideComponent(MdlTestRadioComponent, { set: {
                template: "\n      <form [formGroup]=\"form\">\n        <mdl-radio formControlName=\"test\" value=\"1\" mdl-ripple>radio label 1</mdl-radio>\n        <mdl-radio *ngIf=\"radioVisible\" formControlName=\"test\" value=\"2\" mdl-ripple>radio label 3</mdl-radio>\n      </form>\n    "
            } });
        var fixture = testing_1.TestBed.createComponent(MdlTestRadioComponent);
        fixture.detectChanges();
        var registry = testing_1.getTestBed().get(mdl_radio_component_1.MdlRadioGroupRegisty);
        spyOn(registry, 'remove').and.callThrough();
        fixture.componentInstance.radioVisible = false;
        fixture.detectChanges();
        expect(registry.remove).toHaveBeenCalled();
    }));
    it('should fire a change event if the state changed', testing_1.async(function () {
        var fixture = testing_1.TestBed.createComponent(MdlTestRadioComponent);
        fixture.detectChanges();
        var instance = fixture.componentInstance;
        spyOn(instance, 'onChange');
        var component2 = fixture.debugElement.queryAll(platform_browser_1.By.directive(mdl_radio_component_1.MdlRadioComponent))[1];
        component2.nativeElement.click();
        expect(instance.onChange).toHaveBeenCalledWith('2');
    }));
    it('should be possible to disable the radio input', testing_1.async(function () {
        var fixture = testing_1.TestBed.createComponent(MdlTestRadioComponent);
        fixture.detectChanges();
        var instance = fixture.componentInstance;
        var cbDebugElem = fixture.debugElement.queryAll(platform_browser_1.By.directive(mdl_radio_component_1.MdlRadioComponent))[0];
        cbDebugElem.componentInstance.setDisabledState(true);
        fixture.detectChanges();
        var checkboxEl = cbDebugElem.nativeElement;
        expect(checkboxEl.classList.contains('is-disabled')).toBe(true, 'should have css is-disabled');
        var value = instance.radioValue;
        // should not change on click
        cbDebugElem.nativeElement.click();
        expect(instance.radioValue).toEqual(value);
    }));
});
var MdlTestRadioComponent = (function () {
    function MdlTestRadioComponent(fb) {
        this.fb = fb;
        this.radioValue = '2';
        this.radioVisible = true;
        this.test = new forms_1.FormControl('');
    }
    MdlTestRadioComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            'test': this.test
        });
    };
    MdlTestRadioComponent.prototype.onChange = function (v) { };
    MdlTestRadioComponent = __decorate([
        core_1.Component({
            selector: 'test-radio',
            template: "\n    <mdl-radio name=\"r\" [(ngModel)]=\"radioValue\" value=\"1\" mdl-ripple \n          (change)=\"onChange($event)\">radio label 1</mdl-radio>\n    <mdl-radio name=\"r\" [(ngModel)]=\"radioValue\" value=\"2\" mdl-ripple \n          (change)=\"onChange($event)\">radio label 2</mdl-radio>\n  "
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], MdlTestRadioComponent);
    return MdlTestRadioComponent;
}());
//# sourceMappingURL=../../../dist/components/radio/mdl-radio.component.spec.js.map