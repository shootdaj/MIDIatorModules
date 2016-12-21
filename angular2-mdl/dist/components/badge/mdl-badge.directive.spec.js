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
var mdl_badge_directive_1 = require('./mdl-badge.directive');
describe('Directive: MdlBadge', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [mdl_badge_directive_1.MdlBadgeModule],
            declarations: [MdlTestBadgeComponent],
        });
    });
    it('should add the css class mdl-badge and the attribute data-badge to the host element', function () {
        testing_1.TestBed.overrideComponent(MdlTestBadgeComponent, { set: {
                template: '<span mdl-badge="3"></span>' }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestBadgeComponent);
        fixture.detectChanges();
        var spanEl = fixture.nativeElement.children.item(0);
        expect(spanEl.classList.contains('mdl-badge')).toBe(true);
        expect(spanEl.getAttribute('data-badge')).toBe('3');
    });
    it('should add the class mdl-badge--overlap and mdl-badge-no-background to the host element', function () {
        testing_1.TestBed.overrideComponent(MdlTestBadgeComponent, { set: {
                template: '<span mdl-badge="3" mdl-badge-no-background mdl-badge-overlap></span>' }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestBadgeComponent);
        fixture.detectChanges();
        var spanEl = fixture.nativeElement.children.item(0);
        expect(spanEl.classList.contains('mdl-badge')).toBe(true);
        expect(spanEl.classList.contains('mdl-badge--overlap')).toBe(true);
        expect(spanEl.classList.contains('mdl-badge--no-background')).toBe(true);
    });
});
var MdlTestBadgeComponent = (function () {
    function MdlTestBadgeComponent() {
    }
    MdlTestBadgeComponent = __decorate([
        core_1.Component({
            selector: 'test-badge',
            template: 'replaced by the test'
        }), 
        __metadata('design:paramtypes', [])
    ], MdlTestBadgeComponent);
    return MdlTestBadgeComponent;
}());
//# sourceMappingURL=../../../dist/components/badge/mdl-badge.directive.spec.js.map