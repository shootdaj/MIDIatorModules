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
var index_1 = require('./index');
describe('Component: MdlLayoutTitle', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [index_1.MdlLayoutModule],
            declarations: [MdlTestComponent]
        });
    });
    it('should add the css class mdl-layout-title to the header element', function () {
        var fixture = testing_1.TestBed.createComponent(MdlTestComponent);
        fixture.detectChanges();
        var titleEl = fixture.nativeElement.children.item(0);
        expect(titleEl.classList.contains('mdl-layout-title')).toBe(true);
    });
});
var MdlTestComponent = (function () {
    function MdlTestComponent() {
    }
    MdlTestComponent = __decorate([
        core_1.Component({
            selector: 'test',
            template: '<mdl-layout-title>x</mdl-layout-title>'
        }), 
        __metadata('design:paramtypes', [])
    ], MdlTestComponent);
    return MdlTestComponent;
}());
//# sourceMappingURL=../../../dist/components/layout/mdl-layout-title.component.spec.js.map