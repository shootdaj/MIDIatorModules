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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var mdl_menu_component_1 = require('./mdl-menu.component');
var boolean_property_1 = require('./../common/boolean-property');
var MdlMenuItemComponent = (function () {
    // forwardRef is needed because of he circular dependency menu queries menuitems; menuitem needs the parent
    function MdlMenuItemComponent(elementRef, renderer, mdlMenu) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.mdlMenu = mdlMenu;
        this.element = elementRef.nativeElement;
    }
    MdlMenuItemComponent.prototype.onClick = function ($event) {
        $event.stopPropagation();
        if (this.disabled) {
            this.mdlMenu.hide();
            return;
        }
        this.mdlMenu.hideOnItemClicked();
    };
    // we need to register a touchstart at the window to get informed if the user taps outside the menu.
    // But if we register a touchstart event - safari will no longer convert touch events to click events.
    // So we need to convert touch to click and the user still needs to register a (click) listener to be
    // informed if the menu item has clicked.
    MdlMenuItemComponent.prototype.onTouch = function ($event) {
        // ensure that this event is totally consumed
        $event.stopPropagation();
        $event.preventDefault();
        var event = new MouseEvent('click', { bubbles: true });
        this.renderer.invokeElementMethod(this.element, 'dispatchEvent', [event]);
    };
    __decorate([
        core_1.Input('disabled'),
        boolean_property_1.BooleanProperty(), 
        __metadata('design:type', Boolean)
    ], MdlMenuItemComponent.prototype, "disabled", void 0);
    MdlMenuItemComponent = __decorate([
        core_1.Component({
            selector: 'mdl-menu-item',
            host: {
                '[class.mdl-menu__item]': 'true',
                'tabindex': '-1',
                '(click)': 'onClick($event)',
                '(touchstart)': 'onTouch($event)'
            },
            template: '<ng-content></ng-content>'
        }),
        __param(2, core_1.Inject(core_1.forwardRef(function () { return mdl_menu_component_1.MdlMenuComponent; }))), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, mdl_menu_component_1.MdlMenuComponent])
    ], MdlMenuItemComponent);
    return MdlMenuItemComponent;
}());
exports.MdlMenuItemComponent = MdlMenuItemComponent;
//# sourceMappingURL=../../../dist/components/menu/mdl-menu-item.component.js.map