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
    it('should add the css class mdl-chip__contact to the host element and mdl-chip--contact to the mdl-chip', function () {
        var fixture = testing_1.TestBed.createComponent(MdlTestComponent);
        fixture.detectChanges();
        var el = fixture.debugElement.query(platform_browser_1.By.directive(index_1.MdlChipContactDirective)).nativeElement;
        expect(el.classList.contains('mdl-chip__contact')).toBe(true);
        var elChip = fixture.debugElement.query(platform_browser_1.By.directive(index_1.MdlChipComponent)).nativeElement;
        expect(elChip.classList.contains('mdl-chip--contact')).toBe(true);
    });
    it('should throw if mdl-chip-contact is used outside mdl-chip', function () {
        testing_1.TestBed.overrideComponent(MdlTestComponent, { set: {
                template: '<span mdl-chip-contact>A</span>' }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestComponent);
        expect(function () { return fixture.detectChanges(); })
            .toThrow();
    });
});
var MdlTestComponent = (function () {
    function MdlTestComponent() {
    }
    MdlTestComponent = __decorate([
        core_1.Component({
            selector: 'test-chip',
            template: "\n    <mdl-chip mdl-label=\"test\">\n      <span mdl-chip-contact>A</span>\n    </mdl-chip>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], MdlTestComponent);
    return MdlTestComponent;
}());
//# sourceMappingURL=../../../dist/components/chips/mdl-chip-contact.directive.spec.js.map