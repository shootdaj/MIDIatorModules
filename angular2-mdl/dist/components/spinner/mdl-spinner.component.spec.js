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
var mdl_spinner_component_1 = require('./mdl-spinner.component');
describe('Component: MdlProgress', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [mdl_spinner_component_1.MdlSpinnerModule],
            declarations: [MdlTestSpinnerComponent],
        });
    });
    it('should add the css class mdl-spinner to the host element', function () {
        testing_1.TestBed.overrideComponent(MdlTestSpinnerComponent, { set: {
                template: '<mdl-spinner active></mdl-spinner>' }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestSpinnerComponent);
        fixture.detectChanges();
        var spinnerEl = fixture.nativeElement.children.item(0);
        expect(spinnerEl.classList.contains('mdl-spinner')).toBe(true);
    });
    it('should be possible to activate or deactivate the spinner', function () {
        testing_1.TestBed.overrideComponent(MdlTestSpinnerComponent, { set: {
                template: '<mdl-spinner [active]="active"></mdl-spinner>' }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestSpinnerComponent);
        fixture.detectChanges();
        var spinnerEl = fixture.nativeElement.children.item(0);
        expect(spinnerEl.classList.contains('is-active')).toBe(true);
        fixture.componentInstance.active = false;
        fixture.detectChanges();
        expect(spinnerEl.classList.contains('is-active')).toBe(false);
    });
    it('should be possible to colorize or decolorize the spinner', function () {
        testing_1.TestBed.overrideComponent(MdlTestSpinnerComponent, { set: {
                template: '<mdl-spinner [single-color]="colored"></mdl-spinner>' }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestSpinnerComponent);
        fixture.detectChanges();
        var spinnerEl = fixture.nativeElement.children.item(0);
        expect(spinnerEl.classList.contains('mdl-spinner--single-color')).toBe(true);
        fixture.componentInstance.colored = false;
        fixture.detectChanges();
        expect(spinnerEl.classList.contains('mdl-spinner--single-color')).toBe(false);
    });
});
var MdlTestSpinnerComponent = (function () {
    function MdlTestSpinnerComponent() {
        this.active = true;
        this.colored = true;
    }
    MdlTestSpinnerComponent = __decorate([
        core_1.Component({
            selector: 'test-progress',
            template: 'replaced by the test'
        }), 
        __metadata('design:paramtypes', [])
    ], MdlTestSpinnerComponent);
    return MdlTestSpinnerComponent;
}());
//# sourceMappingURL=../../../dist/components/spinner/mdl-spinner.component.spec.js.map