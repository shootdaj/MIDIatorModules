"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ripple_vendor_1 = require('./ripple.vendor');
// known bugs: https://github.com/google/material-design-lite/issues/4215
var MdlRippleDirective = (function () {
    function MdlRippleDirective(elementRef, renderer, cssContainerClasses) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.cssContainerClasses = cssContainerClasses;
        this.RIPPLE = 'mdl-ripple';
        this.rippleActive = true;
        this.el = elementRef.nativeElement;
    }
    MdlRippleDirective.prototype.ngOnChanges = function (changes) {
        var _this = this;
        // remove any existing ripple container
        if (this.rippleContainer) {
            this.el.removeChild(this.rippleContainer);
            delete this.rippleContainer;
            delete this.ripple;
        }
        // if used as mdl-ripple without property binding it is an empty string
        // otherwise (e.g. [mdl-ripple] it is a boolean - may be with the default value true.
        if (this.rippleActive === '' || this.rippleActive) {
            this.rippleContainer = this.renderer.createElement(null, 'span');
            this.cssContainerClasses.forEach(function (cssClass) {
                _this.rippleContainer.classList.add(cssClass);
            });
            var rippleElement = this.renderer.createElement(null, 'span');
            rippleElement.classList.add(this.RIPPLE);
            this.rippleContainer.appendChild(rippleElement);
            this.el.appendChild(this.rippleContainer);
            this.ripple = new ripple_vendor_1.MaterialRipple(this.el);
        }
    };
    return MdlRippleDirective;
}());
exports.MdlRippleDirective = MdlRippleDirective;
var MdlButtonRippleDirective = (function (_super) {
    __extends(MdlButtonRippleDirective, _super);
    function MdlButtonRippleDirective(elementRef, renderer) {
        _super.call(this, elementRef, renderer, ['mdl-button__ripple-container']);
        this.rippleActive = true;
    }
    __decorate([
        core_1.Input('mdl-ripple'), 
        __metadata('design:type', Object)
    ], MdlButtonRippleDirective.prototype, "rippleActive", void 0);
    MdlButtonRippleDirective = __decorate([
        core_1.Directive({
            selector: 'mdl-button[mdl-ripple], button[mdl-ripple]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], MdlButtonRippleDirective);
    return MdlButtonRippleDirective;
}(MdlRippleDirective));
exports.MdlButtonRippleDirective = MdlButtonRippleDirective;
var MdlCheckboxRippleDirective = (function (_super) {
    __extends(MdlCheckboxRippleDirective, _super);
    function MdlCheckboxRippleDirective(elementRef, renderer) {
        _super.call(this, elementRef, renderer, ['mdl-checkbox__ripple-container', 'mdl-ripple--center']);
        this.rippleActive = true;
    }
    __decorate([
        core_1.Input('mdl-ripple'), 
        __metadata('design:type', Object)
    ], MdlCheckboxRippleDirective.prototype, "rippleActive", void 0);
    MdlCheckboxRippleDirective = __decorate([
        core_1.Directive({
            selector: 'mdl-checkbox[mdl-ripple]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], MdlCheckboxRippleDirective);
    return MdlCheckboxRippleDirective;
}(MdlRippleDirective));
exports.MdlCheckboxRippleDirective = MdlCheckboxRippleDirective;
var MdlRadioRippleDirective = (function (_super) {
    __extends(MdlRadioRippleDirective, _super);
    function MdlRadioRippleDirective(elementRef, renderer) {
        _super.call(this, elementRef, renderer, ['mdl-radio__ripple-container', 'mdl-ripple--center']);
        this.rippleActive = true;
    }
    __decorate([
        core_1.Input('mdl-ripple'), 
        __metadata('design:type', Object)
    ], MdlRadioRippleDirective.prototype, "rippleActive", void 0);
    MdlRadioRippleDirective = __decorate([
        core_1.Directive({
            selector: 'mdl-radio[mdl-ripple]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], MdlRadioRippleDirective);
    return MdlRadioRippleDirective;
}(MdlRippleDirective));
exports.MdlRadioRippleDirective = MdlRadioRippleDirective;
var MdlIconToggleRippleDirective = (function (_super) {
    __extends(MdlIconToggleRippleDirective, _super);
    function MdlIconToggleRippleDirective(elementRef, renderer) {
        _super.call(this, elementRef, renderer, ['mdl-icon-toggle__ripple-container', 'mdl-ripple--center']);
        this.rippleActive = true;
    }
    __decorate([
        core_1.Input('mdl-ripple'), 
        __metadata('design:type', Object)
    ], MdlIconToggleRippleDirective.prototype, "rippleActive", void 0);
    MdlIconToggleRippleDirective = __decorate([
        core_1.Directive({
            selector: 'mdl-icon-toggle[mdl-ripple]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], MdlIconToggleRippleDirective);
    return MdlIconToggleRippleDirective;
}(MdlRippleDirective));
exports.MdlIconToggleRippleDirective = MdlIconToggleRippleDirective;
var MdlSwitchRippleDirective = (function (_super) {
    __extends(MdlSwitchRippleDirective, _super);
    function MdlSwitchRippleDirective(elementRef, renderer) {
        _super.call(this, elementRef, renderer, ['mdl-switch__ripple-container', 'mdl-ripple--center']);
        this.rippleActive = true;
    }
    __decorate([
        core_1.Input('mdl-ripple'), 
        __metadata('design:type', Object)
    ], MdlSwitchRippleDirective.prototype, "rippleActive", void 0);
    MdlSwitchRippleDirective = __decorate([
        core_1.Directive({
            selector: 'mdl-switch[mdl-ripple]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], MdlSwitchRippleDirective);
    return MdlSwitchRippleDirective;
}(MdlRippleDirective));
exports.MdlSwitchRippleDirective = MdlSwitchRippleDirective;
var MdlMenuItemRippleDirective = (function (_super) {
    __extends(MdlMenuItemRippleDirective, _super);
    function MdlMenuItemRippleDirective(elementRef, renderer) {
        _super.call(this, elementRef, renderer, ['mdl-menu__item--ripple-container']);
        this.rippleActive = true;
    }
    __decorate([
        core_1.Input('mdl-ripple'), 
        __metadata('design:type', Object)
    ], MdlMenuItemRippleDirective.prototype, "rippleActive", void 0);
    MdlMenuItemRippleDirective = __decorate([
        core_1.Directive({
            selector: 'mdl-menu-item[mdl-ripple]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], MdlMenuItemRippleDirective);
    return MdlMenuItemRippleDirective;
}(MdlRippleDirective));
exports.MdlMenuItemRippleDirective = MdlMenuItemRippleDirective;
var MdlAnchorRippleDirective = (function (_super) {
    __extends(MdlAnchorRippleDirective, _super);
    function MdlAnchorRippleDirective(elementRef, renderer) {
        _super.call(this, elementRef, renderer, ['mdl-tabs__ripple-container', 'mdl-layout__tab-ripple-container']);
        this.rippleActive = true;
    }
    __decorate([
        core_1.Input('mdl-ripple'), 
        __metadata('design:type', Object)
    ], MdlAnchorRippleDirective.prototype, "rippleActive", void 0);
    MdlAnchorRippleDirective = __decorate([
        core_1.Directive({
            selector: 'a[mdl-ripple],div[mdl-ripple]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], MdlAnchorRippleDirective);
    return MdlAnchorRippleDirective;
}(MdlRippleDirective));
exports.MdlAnchorRippleDirective = MdlAnchorRippleDirective;
var MdlListItemRippleDirective = (function (_super) {
    __extends(MdlListItemRippleDirective, _super);
    function MdlListItemRippleDirective(elementRef, renderer) {
        _super.call(this, elementRef, renderer, ['mdl-button__ripple-container']);
        this.rippleActive = true;
    }
    MdlListItemRippleDirective.prototype.ngOnInit = function () {
        // mdl-list-items has no position style - but position relative
        // is needed to restrict the ripplecontainer to the bounds of the item
        this.renderer.setElementStyle(this.el, 'position', 'relative');
    };
    __decorate([
        core_1.Input('mdl-ripple'), 
        __metadata('design:type', Object)
    ], MdlListItemRippleDirective.prototype, "rippleActive", void 0);
    MdlListItemRippleDirective = __decorate([
        core_1.Directive({
            selector: 'mdl-list-item[mdl-ripple]',
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], MdlListItemRippleDirective);
    return MdlListItemRippleDirective;
}(MdlRippleDirective));
exports.MdlListItemRippleDirective = MdlListItemRippleDirective;
var MDL_COMMON_DIRECTIVES = [
    MdlCheckboxRippleDirective,
    MdlButtonRippleDirective,
    MdlRadioRippleDirective,
    MdlIconToggleRippleDirective,
    MdlSwitchRippleDirective,
    MdlMenuItemRippleDirective,
    MdlAnchorRippleDirective,
    MdlListItemRippleDirective
];
var MdlRippleModule = (function () {
    function MdlRippleModule() {
    }
    MdlRippleModule = __decorate([
        core_1.NgModule({
            imports: [],
            exports: MDL_COMMON_DIRECTIVES,
            declarations: MDL_COMMON_DIRECTIVES,
        }), 
        __metadata('design:paramtypes', [])
    ], MdlRippleModule);
    return MdlRippleModule;
}());
exports.MdlRippleModule = MdlRippleModule;
//# sourceMappingURL=../../../dist/components/common/mdl-ripple.directive.js.map