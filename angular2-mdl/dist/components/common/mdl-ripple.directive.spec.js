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
var mdl_ripple_directive_1 = require('./../common/mdl-ripple.directive');
var mdl_list_component_1 = require('./../list/mdl-list.component');
var index_1 = require('../menu/index');
function getFiytureForTemplate(template) {
    testing_1.TestBed.overrideComponent(MdlTestRippleComponent, { set: { template: template } });
    var fixture = testing_1.TestBed.createComponent(MdlTestRippleComponent);
    fixture.detectChanges();
    return fixture;
}
describe('Directive: MdlRipple', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [mdl_ripple_directive_1.MdlRippleModule, mdl_list_component_1.MdlListModule, index_1.MdlMenuModule],
            declarations: [MdlTestRippleComponent],
        });
    });
    function getSpan1IfAny(fixture) {
        var rippleTarget = fixture.debugElement.query(platform_browser_1.By.css('[ng-reflect-ripple-active]')).nativeElement;
        if (rippleTarget.children.length === 0) {
            return null;
        }
        var span0 = rippleTarget.children.item(0);
        return span0.children.item(0);
    }
    it('should add the ripple span elements if mdl-ripple is empty', function () {
        var fixture = getFiytureForTemplate('<mdl-button mdl-ripple></mdl-button>');
        var span1 = getSpan1IfAny(fixture);
        expect(span1.classList.contains('mdl-ripple')).toBe(true);
    });
    it('should add the ripple if mdl-ripple is set to true', function () {
        var fixture = getFiytureForTemplate('<mdl-button [mdl-ripple]="true"></mdl-button>');
        var span1 = getSpan1IfAny(fixture);
        expect(span1.classList.contains('mdl-ripple')).toBe(true);
    });
    it('should not add ripple if mdl-ripple is set to false', function () {
        var fixture = getFiytureForTemplate('<mdl-button [mdl-ripple]="false"></mdl-button>');
        var span1 = getSpan1IfAny(fixture);
        expect(span1).toBeNull();
    });
    it('should remove the ripple if mdl-ripple is set to false', function () {
        var fixture = getFiytureForTemplate('<mdl-checkbox [mdl-ripple]="doRipple"></mdl-checkbox>');
        expect(getSpan1IfAny(fixture).classList.contains('mdl-ripple')).toBe(true);
        fixture.debugElement.componentInstance.doRipple = false;
        fixture.detectChanges();
        expect(getSpan1IfAny(fixture)).toBeNull();
    });
    it('should add the ripple to button', function () {
        var fixture = getFiytureForTemplate('<button mdl-ripple></button>');
        var span1 = getSpan1IfAny(fixture);
        expect(span1.classList.contains('mdl-ripple')).toBe(true);
    });
    it('should add the ripple to mdl-radio', function () {
        var fixture = getFiytureForTemplate('<mdl-radio mdl-ripple></mdl-radio>');
        var span1 = getSpan1IfAny(fixture);
        expect(span1.classList.contains('mdl-ripple')).toBe(true);
    });
    it('should add the ripple to mdl-icon-toggle', function () {
        var fixture = getFiytureForTemplate('<mdl-icon-toggle mdl-ripple></mdl-icon-toggle>');
        var span1 = getSpan1IfAny(fixture);
        expect(span1.classList.contains('mdl-ripple')).toBe(true);
    });
    it('should add the ripple to mdl-switch', function () {
        var fixture = getFiytureForTemplate(' <mdl-switch mdl-ripple></mdl-switch>');
        var span1 = getSpan1IfAny(fixture);
        expect(span1.classList.contains('mdl-ripple')).toBe(true);
    });
    it('should add the ripple to mdl-menu-item', function () {
        var fixture = getFiytureForTemplate("\n          <mdl-menu>\n            <mdl-menu-item mdl-ripple></mdl-menu-item>\n          </mdl-menu>\n        ");
        var span1 = getSpan1IfAny(fixture);
        expect(span1.classList.contains('mdl-ripple')).toBe(true);
    });
    it('should add the ripple to anchor tag for tabs', function () {
        var fixture = getFiytureForTemplate('<a mdl-ripple></a>');
        var span1 = getSpan1IfAny(fixture);
        expect(span1.classList.contains('mdl-ripple')).toBe(true);
    });
    it('should add the ripple to mdl-list-item tag for tabs', function () {
        var fixture = getFiytureForTemplate("\n         <mdl-list>\n            <mdl-list-item mdl-ripple></mdl-list-item>\n          </mdl-list>\n        ");
        var span1 = getSpan1IfAny(fixture);
        expect(span1.classList.contains('mdl-ripple')).toBe(true);
    });
    it('should make the mdl-list-items css style position to relative', function () {
        var fixture = getFiytureForTemplate("\n         <mdl-list>\n            <mdl-list-item [mdl-ripple]=\"true\"></mdl-list-item>\n          </mdl-list>\n        ");
        var mdlListItemElement = fixture.debugElement
            .query(platform_browser_1.By.directive(mdl_list_component_1.MdlListItemComponent)).nativeElement;
        expect(mdlListItemElement.style.position).toBe('relative');
    });
    it('should add the ripple tog tag for', function () {
        var fixture = getFiytureForTemplate("\n         <a [mdl-ripple]=\"true\"></a>\n        ");
        var span1 = getSpan1IfAny(fixture);
        expect(span1.classList.contains('mdl-ripple')).toBe(true);
    });
});
var MdlTestRippleComponent = (function () {
    function MdlTestRippleComponent() {
        this.doRipple = true;
    }
    MdlTestRippleComponent = __decorate([
        core_1.Component({
            selector: 'test-ripple',
            template: 'replaced by the test'
        }), 
        __metadata('design:paramtypes', [])
    ], MdlTestRippleComponent);
    return MdlTestRippleComponent;
}());
//# sourceMappingURL=../../../dist/components/common/mdl-ripple.directive.spec.js.map