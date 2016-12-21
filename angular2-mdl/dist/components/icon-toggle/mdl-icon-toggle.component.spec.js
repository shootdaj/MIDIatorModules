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
var mdl_icon_toggle_component_1 = require('./mdl-icon-toggle.component');
var forms_1 = require('@angular/forms');
describe('Component: MdlIconToggle', function () {
    var doc;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [forms_1.FormsModule, mdl_icon_toggle_component_1.MdlIconToggleModule],
            declarations: [MdlTestIconToggleComponent],
        });
    }));
    beforeEach(testing_1.async(testing_1.inject([platform_browser_1.DOCUMENT], function (document) {
        doc = document;
    })));
    it('should add the css class mdl-icon-toggle to the host element', function () {
        var fixture = testing_1.TestBed.createComponent(MdlTestIconToggleComponent);
        fixture.detectChanges();
        var checkboxEl = fixture.nativeElement.children.item(0);
        expect(checkboxEl.classList.contains('mdl-icon-toggle')).toBe(true);
    });
    it('should fire a change event if the state changed', testing_1.async(function () {
        var fixture = testing_1.TestBed.createComponent(MdlTestIconToggleComponent);
        fixture.detectChanges();
        var instance = fixture.componentInstance;
        spyOn(instance, 'onChange');
        fixture.debugElement.query(platform_browser_1.By.directive(mdl_icon_toggle_component_1.MdlIconToggleComponent)).nativeElement.click();
        expect(instance.onChange).toHaveBeenCalledWith(true);
    }));
    // the following test, tests implicity that annotation are inherited (@Input @BooleanPorperty is defined in the
    // class MdlCheckboxComponent and not in MdlTestIconToggleComponent
    it('should be possible to disable the icon toggle', testing_1.async(function () {
        var fixture = testing_1.TestBed.createComponent(MdlTestIconToggleComponent);
        fixture.detectChanges();
        var instance = fixture.componentInstance;
        var cbDebugElem = fixture.debugElement.query(platform_browser_1.By.directive(mdl_icon_toggle_component_1.MdlIconToggleComponent));
        cbDebugElem.componentInstance.setDisabledState(true);
        fixture.detectChanges();
        var checkboxEl = cbDebugElem.nativeElement;
        expect(checkboxEl.classList.contains('is-disabled')).toBe(true, 'should have css is-disabled');
        // should not change on click
        cbDebugElem.nativeElement.click();
        expect(instance.checkboxValue1).toEqual(false);
    }));
});
var MdlTestIconToggleComponent = (function () {
    function MdlTestIconToggleComponent() {
        this.checkboxValue1 = false;
    }
    MdlTestIconToggleComponent.prototype.onChange = function (v) { };
    MdlTestIconToggleComponent = __decorate([
        core_1.Component({
            selector: 'test-icon',
            template: "\n    <mdl-icon-toggle [disabled]=\"false\" [(ngModel)]=\"checkboxValue1\" mdl-ripple (change)=\"onChange($event)\">\n    format_bold\n    </mdl-icon-toggle>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], MdlTestIconToggleComponent);
    return MdlTestIconToggleComponent;
}());
//# sourceMappingURL=../../../dist/components/icon-toggle/mdl-icon-toggle.component.spec.js.map