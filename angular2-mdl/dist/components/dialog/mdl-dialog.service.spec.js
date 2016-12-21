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
var mdl_dialog_service_1 = require('./mdl-dialog.service');
var mdl_dialog_host_component_1 = require('./mdl-dialog-host.component');
var mdl_dialog_component_1 = require('./mdl-dialog.component');
describe('Service: MdlDialog', function () {
    var mdlDialogService;
    var doc;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [MdlTestViewComponent, ViewRefHolderComponent],
            imports: [index_1.MdlDialogModule, TestDialogModul],
        });
    }));
    beforeEach(testing_1.async(testing_1.inject([mdl_dialog_service_1.MdlDialogService, platform_browser_1.DOCUMENT], function (service, _doc) {
        mdlDialogService = service;
        doc = _doc;
    })));
    it('should show a an alert', function (done) {
        var title = 'Alert';
        var fixture = testing_1.TestBed.createComponent(MdlTestViewComponent);
        fixture.detectChanges();
        var viewRef = fixture.debugElement.query(platform_browser_1.By.directive(ViewRefHolderComponent)).componentInstance.viewRef;
        mdlDialogService.setDefaultViewContainerRef(viewRef);
        var result = mdlDialogService.alert(title);
        result.then(function () {
            // test passed because the action was called
            done();
        });
        fixture.detectChanges();
        var dialogHostComponent = fixture.debugElement.query(platform_browser_1.By.directive(mdl_dialog_host_component_1.MdlDialogHostComponent)).componentInstance;
        expect(dialogHostComponent.zIndex).toBe(100001, 'the zIndex should be 100001');
        // let dialogComponent = fixture.debugElement.query(By.directive(MdlDialogComponent)).componentInstance;
        // the backdrop shoud be visible and hav an zIndex of 100000
        var backdrop = doc.querySelector('.dialog-backdrop');
        expect(backdrop.style.zIndex).toBe('100000');
        var dialogComponentDebugElem = fixture.debugElement.query(platform_browser_1.By.directive(mdl_dialog_component_1.MdlDialogComponent));
        var titleDiv = dialogComponentDebugElem.query(platform_browser_1.By.css('.mdl-dialog__content')).nativeElement;
        expect(titleDiv.innerText).toBe(title);
        // close the dialog by clicking the ok button
        var buttonEl = fixture.debugElement.query(platform_browser_1.By.css('button')).nativeElement;
        buttonEl.click();
    });
    it('should show a confirm dialog which is modal and can be closed with click on confirm', function (done) {
        var fixture = testing_1.TestBed.createComponent(MdlTestViewComponent);
        fixture.detectChanges();
        var viewRef = fixture.debugElement.query(platform_browser_1.By.directive(ViewRefHolderComponent)).componentInstance.viewRef;
        mdlDialogService.setDefaultViewContainerRef(viewRef);
        var result = mdlDialogService.confirm('?', 'no', 'yes');
        result.then(function (r) {
            // test passed because the action was called
            expect(r).toBe(mdl_dialog_service_1.ConfirmResult.Confirmed, 'confirm dialog should be closed with confirmed state');
            done();
        });
        fixture.detectChanges();
        // the yes button
        var buttonDebugElements = fixture.debugElement.queryAll(platform_browser_1.By.css('.mdl-button'));
        var buttonEl = buttonDebugElements[0].nativeElement;
        buttonEl.click();
    });
    it('should show a confirm dialog which is modal and can be closed esc', function (done) {
        var fixture = testing_1.TestBed.createComponent(MdlTestViewComponent);
        fixture.detectChanges();
        var viewRef = fixture.debugElement.query(platform_browser_1.By.directive(ViewRefHolderComponent)).componentInstance.viewRef;
        mdlDialogService.setDefaultViewContainerRef(viewRef);
        var result = mdlDialogService.confirm('?', 'no', 'yes');
        result.then(function (r) {
            // test passed because the action was called
            expect(r).toBe(mdl_dialog_service_1.ConfirmResult.Declined, 'confirm dialog should be closed with declined');
            done();
        });
        fixture.detectChanges();
        var dialog = fixture.debugElement.query(platform_browser_1.By.directive(mdl_dialog_component_1.MdlDialogComponent)).componentInstance;
        // sending an keybord event to the dialog would be better
        dialog.onEsc();
    });
    it('should be possible to open a custom dialog', function (done) {
        var fixture = testing_1.TestBed.createComponent(MdlTestViewComponent);
        fixture.detectChanges();
        var viewRef = fixture.debugElement.query(platform_browser_1.By.directive(ViewRefHolderComponent)).componentInstance.viewRef;
        mdlDialogService.setDefaultViewContainerRef(viewRef);
        var p = mdlDialogService.showCustomDialog({
            component: TestCustomDialog
        });
        p.then(function (dialogRef) {
            dialogRef.onHide().subscribe(function () {
                done();
            });
            var customDialogComponent = fixture.debugElement.query(platform_browser_1.By.directive(TestCustomDialog)).componentInstance;
            // call close by calling hide on the dialog reference
            customDialogComponent.close();
        });
    });
    it('should not be possible to use a custom dialog component that dosen\'t implement IMdlCustomDialog', function () {
        var fixture = testing_1.TestBed.createComponent(MdlTestViewComponent);
        fixture.detectChanges();
        var viewRef = fixture.debugElement.query(platform_browser_1.By.directive(ViewRefHolderComponent)).componentInstance.viewRef;
        mdlDialogService.setDefaultViewContainerRef(viewRef);
        expect(function () {
            mdlDialogService.showCustomDialog({ component: TestFailCustomDialog });
        }).toThrow();
    });
    it('should stop propagaton on overlay clicks', function () {
        var fixture = testing_1.TestBed.createComponent(MdlTestViewComponent);
        fixture.detectChanges();
        var viewRef = fixture.debugElement.query(platform_browser_1.By.directive(ViewRefHolderComponent)).componentInstance.viewRef;
        mdlDialogService.setDefaultViewContainerRef(viewRef);
        mdlDialogService.alert('Alert');
        var backdrop = doc.querySelector('.dialog-backdrop');
        var event = new MouseEvent('click', {});
        spyOn(event, 'stopPropagation');
        backdrop.dispatchEvent(event);
        expect(event.stopPropagation).toHaveBeenCalled();
    });
    it('should not be possible to create a simple dialog without actions', function () {
        expect(function () {
            mdlDialogService.showDialog({
                message: 'x',
                actions: []
            });
        }).toThrow();
    });
    it('should not hide the dialog on esc key  if there is no closing action', function (done) {
        var fixture = testing_1.TestBed.createComponent(MdlTestViewComponent);
        fixture.detectChanges();
        var viewRef = fixture.debugElement.query(platform_browser_1.By.directive(ViewRefHolderComponent)).componentInstance.viewRef;
        mdlDialogService.setDefaultViewContainerRef(viewRef);
        var pDialogRef = mdlDialogService.showDialog({
            message: 'm',
            actions: [
                { handler: function () { }, text: 'ok' }
            ]
        });
        pDialogRef.then(function (dialogRef) {
            spyOn(dialogRef, 'hide');
            var dialog = fixture.debugElement.query(platform_browser_1.By.directive(mdl_dialog_component_1.MdlDialogComponent)).componentInstance;
            // sending an keybord event to the dialog would be better
            dialog.onEsc();
            expect(dialogRef.hide).not.toHaveBeenCalled();
            done();
        });
    });
    it('should throw an error if now viewcontainerref is provided', function () {
        expect(function () {
            mdlDialogService.showCustomDialog({ component: TestFailCustomDialog });
        }).toThrow();
    });
});
var ViewRefHolderComponent = (function () {
    function ViewRefHolderComponent(viewRef) {
        this.viewRef = viewRef;
    }
    ViewRefHolderComponent = __decorate([
        core_1.Component({
            selector: 'view-ref-holder',
            template: '<div></div>'
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef])
    ], ViewRefHolderComponent);
    return ViewRefHolderComponent;
}());
var MdlTestViewComponent = (function () {
    function MdlTestViewComponent(viewRef) {
        this.viewRef = viewRef;
    }
    MdlTestViewComponent = __decorate([
        core_1.Component({
            selector: 'test-view',
            template: '<div><view-ref-holder></view-ref-holder></div>'
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef])
    ], MdlTestViewComponent);
    return MdlTestViewComponent;
}());
var TestCustomDialog = (function () {
    function TestCustomDialog(viewRef, dialog) {
        this.viewRef = viewRef;
        this.dialog = dialog;
    }
    Object.defineProperty(TestCustomDialog.prototype, "viewContainerRef", {
        get: function () {
            return this.viewRef;
        },
        enumerable: true,
        configurable: true
    });
    TestCustomDialog.prototype.close = function () {
        this.dialog.hide();
    };
    TestCustomDialog = __decorate([
        core_1.Component({
            selector: 'test-dialog-component',
            template: '<div>TestCustomDialog</div>'
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef, mdl_dialog_service_1.MdlDialogReference])
    ], TestCustomDialog);
    return TestCustomDialog;
}());
var TestFailCustomDialog = (function () {
    function TestFailCustomDialog() {
    }
    TestFailCustomDialog = __decorate([
        core_1.Component({
            selector: 'test-fail-dialog-component',
            template: '<div>TestFalCustomDialog</div>'
        }), 
        __metadata('design:paramtypes', [])
    ], TestFailCustomDialog);
    return TestFailCustomDialog;
}());
var TestDialogModul = (function () {
    function TestDialogModul() {
    }
    TestDialogModul = __decorate([
        core_1.NgModule({
            imports: [],
            exports: [TestCustomDialog],
            declarations: [TestCustomDialog, TestFailCustomDialog],
            providers: [],
            entryComponents: [TestCustomDialog, TestFailCustomDialog]
        }), 
        __metadata('design:paramtypes', [])
    ], TestDialogModul);
    return TestDialogModul;
}());
//# sourceMappingURL=../../../dist/components/dialog/mdl-dialog.service.spec.js.map