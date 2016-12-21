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
var mdl_shadow_directive_1 = require('./mdl-shadow.directive');
describe('Directive: MdlShadow', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [mdl_shadow_directive_1.MdlShadowModule],
            declarations: [MdlTestShadowComponent],
        });
    });
    it('should add the css class mdl-shadow--2dp to the host element', function () {
        testing_1.TestBed.overrideComponent(MdlTestShadowComponent, { set: {
                template: '<span mdl-shadow="2"></span>' }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestShadowComponent);
        fixture.detectChanges();
        var spanEl = fixture.nativeElement.children.item(0);
        expect(spanEl.classList.contains('mdl-shadow--2dp')).toBe(true);
    });
    it('should change the class from mdl-shadow--2dp to mdl-shadow--4dp if the directive value changes', function () {
        testing_1.TestBed.overrideComponent(MdlTestShadowComponent, { set: {
                template: '<span [mdl-shadow]="shadow"></span>' }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestShadowComponent);
        fixture.detectChanges();
        var spanEl = fixture.nativeElement.children.item(0);
        expect(spanEl.classList.contains('mdl-shadow--2dp')).toBe(true);
        fixture.componentInstance.shadow = 4;
        fixture.detectChanges();
        expect(spanEl.classList.contains('mdl-shadow--4dp')).toBe(true);
    });
    it('should throw if an unsupported shadow value is provided', function () {
        testing_1.TestBed.overrideComponent(MdlTestShadowComponent, { set: {
                template: '<span mdl-shadow="200"></span>' }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestShadowComponent);
        expect(function () { return fixture.detectChanges(); }).toThrow();
    });
});
var MdlTestShadowComponent = (function () {
    function MdlTestShadowComponent() {
        this.shadow = 2;
    }
    MdlTestShadowComponent = __decorate([
        core_1.Component({
            selector: 'test-shadow',
            template: 'replaced by the test'
        }), 
        __metadata('design:paramtypes', [])
    ], MdlTestShadowComponent);
    return MdlTestShadowComponent;
}());
//# sourceMappingURL=../../../dist/components/shadow/mdl-shadow.directive.spec.js.map