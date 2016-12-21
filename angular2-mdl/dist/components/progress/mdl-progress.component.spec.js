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
var mdl_progress_component_1 = require('./mdl-progress.component');
describe('Component: MdlProgress', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [mdl_progress_component_1.MdlProgressModule],
            declarations: [MdlTestProgressComponent],
        });
    });
    it('should add the css class mdl-progress to the host element', function () {
        testing_1.TestBed.overrideComponent(MdlTestProgressComponent, { set: {
                template: '<mdl-progress progress="44"></mdl-progress>' }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestProgressComponent);
        fixture.detectChanges();
        var progressEl = fixture.nativeElement.children.item(0);
        expect(progressEl.classList.contains('mdl-progress')).toBe(true);
    });
    it('should call setBuffer - if the buffer changes', function () {
        testing_1.TestBed.overrideComponent(MdlTestProgressComponent, { set: {
                template: '<mdl-progress progress="44" [buffer]="buffer"></mdl-progress>' }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestProgressComponent);
        fixture.detectChanges();
        var component = fixture.componentInstance;
        var progressComponent = fixture.debugElement.query(platform_browser_1.By.directive(mdl_progress_component_1.MdlProgressComponent)).componentInstance;
        spyOn(progressComponent, 'setBuffer');
        component.buffer = 23;
        fixture.detectChanges();
        expect(progressComponent.setBuffer).toHaveBeenCalled();
    });
});
var MdlTestProgressComponent = (function () {
    function MdlTestProgressComponent() {
        this.buffer = 20;
    }
    MdlTestProgressComponent = __decorate([
        core_1.Component({
            selector: 'test-progress',
            template: 'replaced by the test'
        }), 
        __metadata('design:paramtypes', [])
    ], MdlTestProgressComponent);
    return MdlTestProgressComponent;
}());
//# sourceMappingURL=../../../dist/components/progress/mdl-progress.component.spec.js.map