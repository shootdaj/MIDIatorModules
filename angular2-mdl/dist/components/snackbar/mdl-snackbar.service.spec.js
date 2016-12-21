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
var mdl_snackbar_service_1 = require('./mdl-snackbar.service');
describe('Service: MdlSnackbar', function () {
    var mdlSnackbarServcie;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [MdlTestViewComponent],
            providers: [mdl_snackbar_service_1.MdlSnackbarService]
        });
    }));
    beforeEach(testing_1.async(testing_1.inject([mdl_snackbar_service_1.MdlSnackbarService], function (service) {
        mdlSnackbarServcie = service;
    })));
    it('should show a snackbar and close the snackbar if the aciton button is clicked', testing_1.async(function () {
        var fixture = testing_1.TestBed.createComponent(MdlTestViewComponent);
        fixture.detectChanges();
        var viewRef = fixture.debugElement.componentInstance.viewRef;
        mdlSnackbarServcie.setDefaultViewContainerRef(viewRef);
        var p = mdlSnackbarServcie.showSnackbar({
            message: 'm1',
            action: {
                handler: function () {
                    // now the test completes because of async
                },
                text: 'OK'
            }
        });
        fixture.detectChanges();
        p.then(function (mdlSnackbarComponent) {
            expect(mdlSnackbarComponent.isActive()).toBe(true);
            mdlSnackbarComponent.onClick();
        });
    }));
    it('should show a toastmessage and hide the message automatically', testing_1.async(function () {
        var fixture = testing_1.TestBed.createComponent(MdlTestViewComponent);
        fixture.detectChanges();
        var viewRef = fixture.debugElement.componentInstance.viewRef;
        mdlSnackbarServcie.setDefaultViewContainerRef(viewRef);
        var p = mdlSnackbarServcie.showToast('toast message', 1000);
        fixture.detectChanges();
        p.then(function (mdlSnackbarComponent) {
            expect(mdlSnackbarComponent.isActive()).toBe(true);
            setTimeout(function () {
                expect(mdlSnackbarComponent.isActive()).toBe(false);
                // now the test completes because of async
            }, 1500); // > 1000 + 250
        });
    }));
    it('should throw if no viewContainerRef is provided', testing_1.async(function () {
        expect(function () {
            mdlSnackbarServcie.showToast('toast message', 1000);
        }).toThrow();
    }));
});
var MdlTestViewComponent = (function () {
    function MdlTestViewComponent(viewRef) {
        this.viewRef = viewRef;
    }
    MdlTestViewComponent = __decorate([
        core_1.Component({
            selector: 'test-view',
            template: '<div></div>',
            providers: [mdl_snackbar_service_1.MdlSnackbarService]
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef])
    ], MdlTestViewComponent);
    return MdlTestViewComponent;
}());
//# sourceMappingURL=../../../dist/components/snackbar/mdl-snackbar.service.spec.js.map