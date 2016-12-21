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
var mdl_layout_content_component_1 = require('./mdl-layout-content.component');
var index_1 = require('./index');
describe('Component: MdlLayoutContent', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [index_1.MdlLayoutModule],
            declarations: [MdlTestLayoutComponent],
        });
    });
    it('should add the css class mdl-layout__content to the host element', function () {
        var fixture = testing_1.TestBed.createComponent(MdlTestLayoutComponent);
        fixture.detectChanges();
        var layoutEl = fixture.debugElement.query(platform_browser_1.By.directive(mdl_layout_content_component_1.MdlLayoutContentComponent)).nativeElement;
        expect(layoutEl.classList.contains('mdl-layout__content')).toBe(true);
    });
});
var MdlTestLayoutComponent = (function () {
    function MdlTestLayoutComponent() {
    }
    MdlTestLayoutComponent = __decorate([
        core_1.Component({
            selector: 'test-layout',
            template: '<mdl-layout-content>x</mdl-layout-content>',
        }), 
        __metadata('design:paramtypes', [])
    ], MdlTestLayoutComponent);
    return MdlTestLayoutComponent;
}());
//# sourceMappingURL=../../../dist/components/layout/mdl-layout-content.component.spec.js.map