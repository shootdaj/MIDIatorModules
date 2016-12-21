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
var mdl_switch_component_1 = require('./mdl-switch.component');
var forms_1 = require('@angular/forms');
var platform_browser_1 = require('@angular/platform-browser');
describe('Component: MdlSwitch', function () {
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [mdl_switch_component_1.MdlSwitchModule, forms_1.FormsModule],
            declarations: [MdlTestSwitchComponent],
        });
    }));
    it('should add the css class mdl-switch to the host element', function () {
        var fixture = testing_1.TestBed.createComponent(MdlTestSwitchComponent);
        fixture.detectChanges();
        var checkboxEl = fixture.nativeElement.children.item(0);
        expect(checkboxEl.classList.contains('mdl-switch')).toBe(true);
    });
    it('should fire a change event if the state changed', testing_1.async(function () {
        var fixture = testing_1.TestBed.createComponent(MdlTestSwitchComponent);
        fixture.detectChanges();
        var instance = fixture.componentInstance;
        spyOn(instance, 'onChange');
        fixture.debugElement.query(platform_browser_1.By.directive(mdl_switch_component_1.MdlSwitchComponent)).nativeElement.click();
        expect(instance.onChange).toHaveBeenCalledWith(true);
    }));
});
var MdlTestSwitchComponent = (function () {
    function MdlTestSwitchComponent() {
    }
    MdlTestSwitchComponent.prototype.onChange = function (v) { };
    MdlTestSwitchComponent = __decorate([
        core_1.Component({
            selector: 'test-icon',
            template: '<mdl-switch [(ngModel)]="checkboxValue1" mdl-ripple (change)="onChange($event)">switch</mdl-switch>'
        }), 
        __metadata('design:paramtypes', [])
    ], MdlTestSwitchComponent);
    return MdlTestSwitchComponent;
}());
//# sourceMappingURL=../../../dist/components/switch/mdl-switch.component.spec.js.map