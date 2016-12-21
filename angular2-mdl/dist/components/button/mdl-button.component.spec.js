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
var mdl_button_component_1 = require('./mdl-button.component');
var mdl_ripple_directive_1 = require('./../common/mdl-ripple.directive');
describe('Component: MdlButton', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [mdl_button_component_1.MdlButtonModule, mdl_ripple_directive_1.MdlRippleModule],
            declarations: [MdlTestButtonComponent]
        });
    });
    it('should add the css class mdl-button to the host element', function () {
        testing_1.TestBed.overrideComponent(MdlTestButtonComponent, { set: {
                template: '<mdl-button></mdl-button>' }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestButtonComponent);
        fixture.detectChanges();
        var btnEl = fixture.nativeElement.children.item(0);
        expect(btnEl.classList.contains('mdl-button')).toBe(true);
    });
    it('should add the css class mdl-button to the host element - if mdl-button is used as attribute', function () {
        testing_1.TestBed.overrideComponent(MdlTestButtonComponent, { set: {
                template: '<button mdl-button></button>' }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestButtonComponent);
        fixture.detectChanges();
        var btnEl = fixture.nativeElement.children.item(0);
        expect(btnEl.classList.contains('mdl-button')).toBe(true);
    });
    it('should throw if an unsupported buttontype is provided', function () {
        testing_1.TestBed.overrideComponent(MdlTestButtonComponent, { set: {
                template: '<mdl-button mdl-button-type="didNotExist"></mdl-button>' }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestButtonComponent);
        expect(function () { return fixture.detectChanges(); }).toThrow();
    });
    it('should throw if an unsupported colored type is provided', function () {
        testing_1.TestBed.overrideComponent(MdlTestButtonComponent, { set: {
                template: '<mdl-button mdl-colored="didNotExist"></mdl-button>' }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestButtonComponent);
        expect(function () { return fixture.detectChanges(); }).toThrow();
    });
    it('should call blur on mouseup and mouseleave', function () {
        testing_1.TestBed.overrideComponent(MdlTestButtonComponent, { set: {
                template: '<mdl-button></mdl-button>' }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestButtonComponent);
        fixture.detectChanges();
        var mdlButtonDirective = fixture.debugElement.query(platform_browser_1.By.directive(mdl_button_component_1.MdlButtonComponent)).componentInstance;
        spyOn(mdlButtonDirective, 'blurIt').and.callThrough();
        expect(mdlButtonDirective.blurIt).not.toHaveBeenCalled();
        mdlButtonDirective.onMouseUp();
        expect(mdlButtonDirective.blurIt).toHaveBeenCalled();
        mdlButtonDirective.onMouseLeave();
        expect(mdlButtonDirective.blurIt).toHaveBeenCalled();
    });
    it('should export the component instance as mdlButton', function () {
        testing_1.TestBed.overrideComponent(MdlTestButtonComponent, { set: {
                template: '<mdl-button #button="mdlButton">x</mdl-button>' }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestButtonComponent);
        fixture.detectChanges();
        var references = fixture.debugElement.query(platform_browser_1.By.directive(mdl_button_component_1.MdlButtonComponent)).references;
        expect(references['button']).toBeDefined();
    });
});
var MdlTestButtonComponent = (function () {
    function MdlTestButtonComponent() {
    }
    MdlTestButtonComponent = __decorate([
        core_1.Component({
            selector: 'test-button',
            template: 'replaced by the test'
        }), 
        __metadata('design:paramtypes', [])
    ], MdlTestButtonComponent);
    return MdlTestButtonComponent;
}());
//# sourceMappingURL=../../../dist/components/button/mdl-button.component.spec.js.map