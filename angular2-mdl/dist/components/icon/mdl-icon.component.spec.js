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
var mdl_icon_component_1 = require('./mdl-icon.component');
describe('Component: MdlIcon', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [mdl_icon_component_1.MdlIconModule],
            declarations: [MdlTestIconComponent],
        });
    });
    it('should add the css class material-icons to the host element', function () {
        var fixture = testing_1.TestBed.createComponent(MdlTestIconComponent);
        fixture.detectChanges();
        var iconEl = fixture.nativeElement.children.item(0);
        expect(iconEl.classList.contains('material-icons')).toBe(true);
    });
});
var MdlTestIconComponent = (function () {
    function MdlTestIconComponent() {
    }
    MdlTestIconComponent = __decorate([
        core_1.Component({
            selector: 'test-icon',
            template: '<mdl-icon>x</mdl-icon>'
        }), 
        __metadata('design:paramtypes', [])
    ], MdlTestIconComponent);
    return MdlTestIconComponent;
}());
//# sourceMappingURL=../../../dist/components/icon/mdl-icon.component.spec.js.map