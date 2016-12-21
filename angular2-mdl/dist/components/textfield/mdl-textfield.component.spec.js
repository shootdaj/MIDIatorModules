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
var mdl_textfield_component_1 = require('./mdl-textfield.component');
var mdl_button_component_1 = require('./../button/mdl-button.component');
var forms_1 = require('@angular/forms');
describe('Component: MdlTextField', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [mdl_textfield_component_1.MdlTextFieldModule, mdl_button_component_1.MdlButtonModule, forms_1.FormsModule],
            declarations: [MdlTestComponent],
        });
    });
    it('should add the css class mdl-textfield to the host element', function () {
        testing_1.TestBed.overrideComponent(MdlTestComponent, { set: {
                template: '<mdl-textfield type="text" label="Text..." ></mdl-textfield>' }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestComponent);
        fixture.detectChanges();
        var tfEl = fixture.nativeElement.children.item(0);
        expect(tfEl.classList.contains('mdl-textfield')).toBe(true);
    });
    it('should support ngModel', testing_1.async(function () {
        testing_1.TestBed.overrideComponent(MdlTestComponent, { set: {
                template: '<mdl-textfield type="text" label="Text..." [(ngModel)]="text1"></mdl-textfield>' }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestComponent);
        fixture.detectChanges();
        fixture.whenStable().then(function () {
            var instance = fixture.componentInstance;
            var component = fixture.debugElement.query(platform_browser_1.By.directive(mdl_textfield_component_1.MdlTextFieldComponent)).componentInstance;
            instance.text1 = 'text1';
            fixture.detectChanges();
            fixture.whenStable().then(function () {
                expect(component.value).toEqual('text1');
                component.value = 'text2';
                fixture.detectChanges();
                expect(instance.text1).toEqual('text2');
            });
        });
    }));
    it('should mark the component as focused and blured', function () {
        testing_1.TestBed.overrideComponent(MdlTestComponent, { set: {
                template: '<mdl-textfield type="text" label="Text..." [(ngModel)]="text1"></mdl-textfield>' }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestComponent);
        fixture.detectChanges();
        var hostEl = fixture.debugElement.query(platform_browser_1.By.directive(mdl_textfield_component_1.MdlTextFieldComponent)).nativeElement;
        var inputEl = fixture.debugElement.query(platform_browser_1.By.css('input')).nativeElement;
        var evt = document.createEvent('HTMLEvents');
        evt.initEvent('focus', true, true);
        inputEl.dispatchEvent(evt);
        fixture.detectChanges();
        expect(hostEl.classList.contains('is-focused')).toBe(true);
        var evtBlur = document.createEvent('HTMLEvents');
        evtBlur.initEvent('blur', true, true);
        inputEl.dispatchEvent(evtBlur);
        fixture.detectChanges();
        expect(hostEl.classList.contains('is-focused')).toBe(false);
    });
    it('should mark the component as invalid ngModel (pattern)', testing_1.async(function () {
        testing_1.TestBed.overrideComponent(MdlTestComponent, { set: {
                template: '<mdl-textfield type="text" label="Text..." [(ngModel)]="text1" pattern="a"></mdl-textfield>' }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestComponent);
        fixture.detectChanges();
        var hostEl = fixture.debugElement.query(platform_browser_1.By.directive(mdl_textfield_component_1.MdlTextFieldComponent)).nativeElement;
        var el = fixture.debugElement.query(platform_browser_1.By.css('input')).nativeElement;
        el.value = 'b';
        fixture.detectChanges();
        fixture.whenStable().then(function () {
            expect(hostEl.classList.contains('is-invalid')).toBe(true);
        });
    }));
    it('should mark the component as invalid ngModel (min)', testing_1.async(function () {
        testing_1.TestBed.overrideComponent(MdlTestComponent, { set: {
                template: '<mdl-textfield type="number" label="Text..." [(ngModel)]="text1" min="2"></mdl-textfield>' }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestComponent);
        fixture.detectChanges();
        var hostEl = fixture.debugElement.query(platform_browser_1.By.directive(mdl_textfield_component_1.MdlTextFieldComponent)).nativeElement;
        var el = fixture.debugElement.query(platform_browser_1.By.css('input')).nativeElement;
        el.value = '1';
        fixture.detectChanges();
        fixture.whenStable().then(function () {
            expect(hostEl.classList.contains('is-invalid')).toBe(true);
        });
    }));
    it('should mark the component as invalid ngModel (max)', testing_1.async(function () {
        testing_1.TestBed.overrideComponent(MdlTestComponent, { set: {
                template: '<mdl-textfield type="number" label="Text..." [(ngModel)]="text1" max="1"></mdl-textfield>' }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestComponent);
        fixture.detectChanges();
        var hostEl = fixture.debugElement.query(platform_browser_1.By.directive(mdl_textfield_component_1.MdlTextFieldComponent)).nativeElement;
        var el = fixture.debugElement.query(platform_browser_1.By.css('input')).nativeElement;
        el.value = '2';
        fixture.detectChanges();
        fixture.whenStable().then(function () {
            expect(hostEl.classList.contains('is-invalid')).toBe(true);
        });
    }));
    it('should create a textarea if row is specified', function () {
        testing_1.TestBed.overrideComponent(MdlTestComponent, { set: {
                template: '<mdl-textfield type="text" label="Text..." rows="3"></mdl-textfield>' }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestComponent);
        fixture.detectChanges();
        var el = fixture.debugElement.query(platform_browser_1.By.css('textarea'));
        expect(el).toBeDefined();
    });
    it('should restrict the line count if maxrows is present', function () {
        testing_1.TestBed.overrideComponent(MdlTestComponent, { set: {
                template: '<mdl-textfield type="text" label="Text..." rows="3" [maxrows]="1"></mdl-textfield>' }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestComponent);
        fixture.detectChanges();
        var el = fixture.debugElement.query(platform_browser_1.By.css('textarea')).nativeElement;
        el.value = 'a';
        var e = new Event('keydown');
        e.keyCode = 13;
        spyOn(e, 'preventDefault');
        el.dispatchEvent(e);
        expect(e.preventDefault).toHaveBeenCalled();
    });
    it('should not restrict the line count if maxrows is -1', function () {
        testing_1.TestBed.overrideComponent(MdlTestComponent, { set: {
                template: ' <mdl-textfield type="text" label="Text..." rows="3" [maxrows]="-1"></mdl-textfield>' }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestComponent);
        fixture.detectChanges();
        var el = fixture.debugElement.query(platform_browser_1.By.css('textarea')).nativeElement;
        el.value = 'a';
        var e = new Event('keydown');
        e.keyCode = 13;
        el.dispatchEvent(e);
        spyOn(e, 'preventDefault');
        expect(e.preventDefault).not.toHaveBeenCalled();
    });
    it('should create an expandable textfield if icon is present', function () {
        testing_1.TestBed.overrideComponent(MdlTestComponent, { set: {
                template: '<mdl-textfield type="text" icon="search"></mdl-textfield>' }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestComponent);
        fixture.detectChanges();
        var el = fixture.debugElement.query(platform_browser_1.By.directive(mdl_textfield_component_1.MdlTextFieldComponent)).nativeElement;
        expect(el.classList.contains('mdl-textfield--expandable')).toBe(true);
    });
    it('should activate the expandable if the icon button is clicked', function () {
        testing_1.TestBed.overrideComponent(MdlTestComponent, { set: {
                template: '<mdl-textfield type="text" icon="search"></mdl-textfield>' }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestComponent);
        fixture.detectChanges();
        var btnEl = fixture.debugElement.query(platform_browser_1.By.directive(mdl_button_component_1.MdlButtonComponent)).nativeElement;
        btnEl.click();
        fixture.detectChanges();
        var el = fixture.debugElement.query(platform_browser_1.By.directive(mdl_textfield_component_1.MdlTextFieldComponent)).nativeElement;
        expect(el.classList.contains('is-focused')).toBe(true);
    });
    it('should add name and id to the input element if provided', function () {
        testing_1.TestBed.overrideComponent(MdlTestComponent, { set: {
                template: '<mdl-textfield type="text" label="Text..." id="id-1" name="name-1"></mdl-textfield>' }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestComponent);
        fixture.detectChanges();
        var inputEl = fixture.debugElement.query(platform_browser_1.By.css('input')).nativeElement;
        expect(inputEl.name).toEqual('name-1', 'name is not set');
        expect(inputEl.id).toEqual('id-1', 'id is not set');
    });
    it('should autogenerate an id that must match the labels for-attribute', function () {
        testing_1.TestBed.overrideComponent(MdlTestComponent, { set: {
                template: '<mdl-textfield type="text" label="Text..." name="name-1"></mdl-textfield>' }
        });
        var fixture = testing_1.TestBed.createComponent(MdlTestComponent);
        fixture.detectChanges();
        var inputEl = fixture.debugElement.query(platform_browser_1.By.css('input')).nativeElement;
        var id = inputEl.id;
        expect(id).toBeDefined();
        var labelEl = fixture.debugElement.query(platform_browser_1.By.css('label')).nativeElement;
        expect(labelEl.htmlFor).toBeDefined(id);
    });
    it('should have native validity check', function () {
        testing_1.TestBed.overrideComponent(MdlTestComponent, { set: {
                template: "\n          <mdl-textfield \n            type=\"text\" \n            pattern=\"^[a-z]+[a-z0-9._]+@[a-z]+.[a-z.]{2,5}$\" \n            label=\"Text...\" name=\"name-1\">\n        </mdl-textfield>'\n      "
            } });
        var fixture = testing_1.TestBed.createComponent(MdlTestComponent);
        fixture.detectChanges();
        var inputEl = fixture.debugElement.query(platform_browser_1.By.css('input')).nativeElement;
        inputEl.value = 'this is not a valid email';
        fixture.detectChanges();
        var el = fixture.debugElement.query(platform_browser_1.By.directive(mdl_textfield_component_1.MdlTextFieldComponent)).nativeElement;
        expect(el.classList.contains('is-invalid')).toBe(true, 'textfield should have css is-invalid');
    });
    it('should be possible to deactive native checking locally', function () {
        testing_1.TestBed.overrideComponent(MdlTestComponent, { set: {
                template: "\n          <mdl-textfield \n            disableNativeValidityChecking\n            type=\"text\" \n            pattern=\"^[a-z]+[a-z0-9._]+@[a-z]+.[a-z.]{2,5}$\" \n            label=\"Text...\" name=\"name-1\">\n        </mdl-textfield>'\n      "
            } });
        var fixture = testing_1.TestBed.createComponent(MdlTestComponent);
        fixture.detectChanges();
        var inputEl = fixture.debugElement.query(platform_browser_1.By.css('input')).nativeElement;
        inputEl.value = 'this is not a valid email';
        fixture.detectChanges();
        var el = fixture.debugElement.query(platform_browser_1.By.directive(mdl_textfield_component_1.MdlTextFieldComponent)).nativeElement;
        expect(el.classList.contains('is-invalid')).toBe(false, 'textfield should not have css is-invalid');
    });
    describe('globally deactivated native check', function () {
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [mdl_textfield_component_1.MdlTextFieldModule, mdl_button_component_1.MdlButtonModule, forms_1.FormsModule],
                declarations: [MdlTestComponent],
                providers: [
                    { provide: mdl_textfield_component_1.DISABLE_NATIVE_VALIDITY_CHECKING, useValue: true }
                ]
            });
        });
        it('should be possible to deactive native checking globally', function () {
            testing_1.TestBed.overrideComponent(MdlTestComponent, { set: {
                    template: "\n          <mdl-textfield \n            type=\"text\" \n            pattern=\"^[a-z]+[a-z0-9._]+@[a-z]+.[a-z.]{2,5}$\" \n            label=\"Text...\" name=\"name-1\">\n        </mdl-textfield>'\n      "
                } });
            var fixture = testing_1.TestBed.createComponent(MdlTestComponent);
            fixture.detectChanges();
            var inputEl = fixture.debugElement.query(platform_browser_1.By.css('input')).nativeElement;
            inputEl.value = 'this is not a valid email';
            fixture.detectChanges();
            var el = fixture.debugElement.query(platform_browser_1.By.directive(mdl_textfield_component_1.MdlTextFieldComponent)).nativeElement;
            expect(el.classList.contains('is-invalid')).toBe(false, 'textfield should not have css is-invalid');
        });
    });
    it('shoud support the autofocus attribute', function () {
        testing_1.TestBed.overrideComponent(MdlTestComponent, { set: {
                template: "\n          <mdl-textfield  type=\"text\" autofocus></mdl-textfield>'\n      "
            } });
        var fixture = testing_1.TestBed.createComponent(MdlTestComponent);
        fixture.detectChanges();
        var inputEl = fixture.debugElement.query(platform_browser_1.By.css('input')).nativeElement;
        expect(inputEl.getAttribute('autofocus')).toBe('', 'the autofocus attribute should be set');
    });
    it('should emit the blur and focus event', function () {
        testing_1.TestBed.overrideComponent(MdlTestComponent, { set: {
                template: "\n          <mdl-textfield  type=\"text\" (focus)=\"onFocus($event)\" (blur)=\"onBlur($event)\"></mdl-textfield>'\n      "
            } });
        var fixture = testing_1.TestBed.createComponent(MdlTestComponent);
        fixture.detectChanges();
        var component = fixture.componentInstance;
        spyOn(component, 'onFocus');
        spyOn(component, 'onBlur');
        var inputEl = fixture.debugElement.query(platform_browser_1.By.css('input')).nativeElement;
        inputEl.focus();
        expect(component.onFocus).toHaveBeenCalled();
        inputEl.blur();
        expect(component.onBlur).toHaveBeenCalled();
    });
    it('should be possible to set the focus programmatically', function () {
        testing_1.TestBed.overrideComponent(MdlTestComponent, { set: {
                template: "\n          <mdl-textfield  type=\"text\"></mdl-textfield>'\n      "
            } });
        var fixture = testing_1.TestBed.createComponent(MdlTestComponent);
        var textFieldDebugElement = fixture.debugElement.query(platform_browser_1.By.directive(mdl_textfield_component_1.MdlTextFieldComponent));
        var textFieldComonent = textFieldDebugElement.componentInstance;
        var el = textFieldDebugElement.nativeElement;
        // if called here the inputEl is not set - if the setFocus didn't check for inoutEl the next line throws.
        textFieldComonent.setFocus();
        fixture.detectChanges();
        // now it is save to call setFocus and the focus is set.
        textFieldComonent.setFocus();
        fixture.detectChanges();
        expect(el.classList.contains('is-focused')).toBe(true);
    });
    it('should be possible to disable the textinputfield', testing_1.async(function () {
        testing_1.TestBed.overrideComponent(MdlTestComponent, { set: {
                template: "\n          <mdl-textfield  type=\"text\"></mdl-textfield>'\n      "
            } });
        var fixture = testing_1.TestBed.createComponent(MdlTestComponent);
        var cbDebugElem = fixture.debugElement.query(platform_browser_1.By.directive(mdl_textfield_component_1.MdlTextFieldComponent));
        cbDebugElem.componentInstance.setDisabledState(true);
        fixture.detectChanges();
        var textInputElement = cbDebugElem.nativeElement;
        expect(textInputElement.classList.contains('is-disabled')).toBe(true, 'should have css is-disabled');
        fixture.whenStable().then(function () {
            var inputElement = fixture.debugElement.query(platform_browser_1.By.css('input')).nativeElement;
            expect(inputElement.getAttribute('disabled')).toBe('', 'the underlaying input element should be disbaled');
        });
    }));
});
var MdlTestComponent = (function () {
    function MdlTestComponent() {
        this.text1 = '';
    }
    MdlTestComponent.prototype.onBlur = function (event) { };
    MdlTestComponent.prototype.onFocus = function (event) { };
    MdlTestComponent = __decorate([
        core_1.Component({
            selector: 'test',
            template: 'replaced by the test'
        }), 
        __metadata('design:paramtypes', [])
    ], MdlTestComponent);
    return MdlTestComponent;
}());
//# sourceMappingURL=../../../dist/components/textfield/mdl-textfield.component.spec.js.map