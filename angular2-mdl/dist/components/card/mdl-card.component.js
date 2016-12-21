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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var mdl_error_1 = require('./../common/mdl-error');
var MdlCardComponent = (function () {
    function MdlCardComponent() {
    }
    MdlCardComponent = __decorate([
        core_1.Component({
            selector: 'mdl-card',
            host: {
                '[class.mdl-card]': 'true'
            },
            template: '<ng-content></ng-content>',
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [])
    ], MdlCardComponent);
    return MdlCardComponent;
}());
exports.MdlCardComponent = MdlCardComponent;
var MdlCardChildStructure = (function () {
    function MdlCardChildStructure(mdlCardComponent, childComponentName) {
        this.mdlCardComponent = mdlCardComponent;
        this.childComponentName = childComponentName;
    }
    MdlCardChildStructure.prototype.ngOnInit = function () {
        if (this.mdlCardComponent === null) {
            throw new mdl_error_1.MdlStructureError(this.childComponentName, 'mdl-card');
        }
    };
    return MdlCardChildStructure;
}());
exports.MdlCardChildStructure = MdlCardChildStructure;
var MdlCardTitleComponent = (function (_super) {
    __extends(MdlCardTitleComponent, _super);
    function MdlCardTitleComponent(mdlCardComponent) {
        _super.call(this, mdlCardComponent, 'mdl-card-title');
    }
    MdlCardTitleComponent = __decorate([
        core_1.Component({
            selector: 'mdl-card-title',
            host: {
                '[class.mdl-card__title]': 'true'
            },
            template: '<ng-content></ng-content>',
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __param(0, core_1.Optional()), 
        __metadata('design:paramtypes', [MdlCardComponent])
    ], MdlCardTitleComponent);
    return MdlCardTitleComponent;
}(MdlCardChildStructure));
exports.MdlCardTitleComponent = MdlCardTitleComponent;
var MdlCardSupportingTextComponent = (function (_super) {
    __extends(MdlCardSupportingTextComponent, _super);
    function MdlCardSupportingTextComponent(mdlCardComponent) {
        _super.call(this, mdlCardComponent, 'mdl-card-supporting-text');
    }
    MdlCardSupportingTextComponent = __decorate([
        core_1.Component({
            selector: 'mdl-card-supporting-text',
            host: {
                '[class.mdl-card__supporting-text]': 'true'
            },
            template: '<ng-content></ng-content>',
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __param(0, core_1.Optional()), 
        __metadata('design:paramtypes', [MdlCardComponent])
    ], MdlCardSupportingTextComponent);
    return MdlCardSupportingTextComponent;
}(MdlCardChildStructure));
exports.MdlCardSupportingTextComponent = MdlCardSupportingTextComponent;
var MdlCardMediaComponent = (function (_super) {
    __extends(MdlCardMediaComponent, _super);
    function MdlCardMediaComponent(mdlCardComponent) {
        _super.call(this, mdlCardComponent, 'mdl-card-media');
    }
    MdlCardMediaComponent = __decorate([
        core_1.Component({
            selector: 'mdl-card-media',
            host: {
                '[class.mdl-card__media]': 'true'
            },
            template: '<ng-content></ng-content>',
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __param(0, core_1.Optional()), 
        __metadata('design:paramtypes', [MdlCardComponent])
    ], MdlCardMediaComponent);
    return MdlCardMediaComponent;
}(MdlCardChildStructure));
exports.MdlCardMediaComponent = MdlCardMediaComponent;
var MdlCardActionsComponent = (function (_super) {
    __extends(MdlCardActionsComponent, _super);
    function MdlCardActionsComponent(mdlCardComponent) {
        _super.call(this, mdlCardComponent, 'mdl-card-actions');
    }
    MdlCardActionsComponent = __decorate([
        core_1.Component({
            selector: 'mdl-card-actions',
            host: {
                '[class.mdl-card__actions]': 'true'
            },
            template: '<ng-content></ng-content>',
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __param(0, core_1.Optional()), 
        __metadata('design:paramtypes', [MdlCardComponent])
    ], MdlCardActionsComponent);
    return MdlCardActionsComponent;
}(MdlCardChildStructure));
exports.MdlCardActionsComponent = MdlCardActionsComponent;
var MdlCardMenuComponent = (function (_super) {
    __extends(MdlCardMenuComponent, _super);
    function MdlCardMenuComponent(mdlCardComponent) {
        _super.call(this, mdlCardComponent, 'mdl-card-menu');
    }
    MdlCardMenuComponent = __decorate([
        core_1.Component({
            selector: 'mdl-card-menu',
            host: {
                '[class.mdl-card__menu]': 'true'
            },
            template: '<ng-content></ng-content>',
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __param(0, core_1.Optional()), 
        __metadata('design:paramtypes', [MdlCardComponent])
    ], MdlCardMenuComponent);
    return MdlCardMenuComponent;
}(MdlCardChildStructure));
exports.MdlCardMenuComponent = MdlCardMenuComponent;
var MdlCardTitleTextDirective = (function () {
    function MdlCardTitleTextDirective() {
    }
    MdlCardTitleTextDirective = __decorate([
        core_1.Directive({
            selector: '[mdl-card-title-text]',
            host: {
                '[class.mdl-card__title-text]': 'true'
            }
        }), 
        __metadata('design:paramtypes', [])
    ], MdlCardTitleTextDirective);
    return MdlCardTitleTextDirective;
}());
exports.MdlCardTitleTextDirective = MdlCardTitleTextDirective;
var MdlCardBorderDirective = (function () {
    function MdlCardBorderDirective() {
    }
    MdlCardBorderDirective = __decorate([
        core_1.Directive({
            selector: '[mdl-card-border]',
            host: {
                '[class.mdl-card--border]': 'true'
            }
        }), 
        __metadata('design:paramtypes', [])
    ], MdlCardBorderDirective);
    return MdlCardBorderDirective;
}());
exports.MdlCardBorderDirective = MdlCardBorderDirective;
var MdlCardExpandDirective = (function () {
    function MdlCardExpandDirective() {
    }
    MdlCardExpandDirective = __decorate([
        core_1.Directive({
            selector: '[mdl-card-expand]',
            host: {
                '[class.mdl-card--expand]': 'true'
            }
        }), 
        __metadata('design:paramtypes', [])
    ], MdlCardExpandDirective);
    return MdlCardExpandDirective;
}());
exports.MdlCardExpandDirective = MdlCardExpandDirective;
var MDL_CARD_DIRECTIVES = [
    MdlCardComponent,
    MdlCardTitleComponent,
    MdlCardMediaComponent,
    MdlCardSupportingTextComponent,
    MdlCardActionsComponent,
    MdlCardMenuComponent,
    MdlCardTitleTextDirective,
    MdlCardBorderDirective,
    MdlCardExpandDirective
];
var MdlCardModule = (function () {
    function MdlCardModule() {
    }
    MdlCardModule = __decorate([
        core_1.NgModule({
            imports: [],
            exports: MDL_CARD_DIRECTIVES,
            declarations: MDL_CARD_DIRECTIVES,
        }), 
        __metadata('design:paramtypes', [])
    ], MdlCardModule);
    return MdlCardModule;
}());
exports.MdlCardModule = MdlCardModule;
//# sourceMappingURL=../../../dist/components/card/mdl-card.component.js.map