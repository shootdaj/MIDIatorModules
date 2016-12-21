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
var number_property_1 = require('./../common/number.property');
var MdlUnsupportedCountOfListItemLinesError = (function (_super) {
    __extends(MdlUnsupportedCountOfListItemLinesError, _super);
    function MdlUnsupportedCountOfListItemLinesError(lines) {
        _super.call(this, "\"" + lines + "\" is not supported - max 3 lines please.");
    }
    return MdlUnsupportedCountOfListItemLinesError;
}(mdl_error_1.MdlError));
exports.MdlUnsupportedCountOfListItemLinesError = MdlUnsupportedCountOfListItemLinesError;
var MdlListComponent = (function () {
    function MdlListComponent() {
    }
    MdlListComponent = __decorate([
        core_1.Component({
            selector: 'mdl-list',
            host: {
                '[class.mdl-list]': 'true'
            },
            template: '<ng-content></ng-content>',
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [])
    ], MdlListComponent);
    return MdlListComponent;
}());
exports.MdlListComponent = MdlListComponent;
var MdlListItemComponent = (function () {
    function MdlListItemComponent(mdlListComponent) {
        this.mdlListComponent = mdlListComponent;
        this.lines = 1;
    }
    MdlListItemComponent.prototype.ngOnInit = function () {
        if (this.mdlListComponent === null) {
            throw new mdl_error_1.MdlStructureError('mdl-list-item', 'mdl-list');
        }
    };
    MdlListItemComponent.prototype.ngOnChanges = function () {
        if (this.lines && this.lines > 3) {
            throw new MdlUnsupportedCountOfListItemLinesError(this.lines);
        }
    };
    __decorate([
        core_1.Input(),
        number_property_1.NumberProperty(), 
        __metadata('design:type', Number)
    ], MdlListItemComponent.prototype, "lines", void 0);
    MdlListItemComponent = __decorate([
        core_1.Component({
            selector: 'mdl-list-item',
            host: {
                '[class.mdl-list__item]': 'true',
                '[class.mdl-list__item--two-line]': 'lines==2',
                '[class.mdl-list__item--three-line]': 'lines==3'
            },
            template: '<ng-content></ng-content>',
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __param(0, core_1.Optional()), 
        __metadata('design:paramtypes', [MdlListComponent])
    ], MdlListItemComponent);
    return MdlListItemComponent;
}());
exports.MdlListItemComponent = MdlListItemComponent;
var MdlListItemPrimaryContentComponent = (function () {
    function MdlListItemPrimaryContentComponent(mdlListItemComponent) {
        this.mdlListItemComponent = mdlListItemComponent;
    }
    MdlListItemPrimaryContentComponent.prototype.ngOnInit = function () {
        if (this.mdlListItemComponent === null) {
            throw new mdl_error_1.MdlStructureError('mdl-list-item-primary-content', 'mdl-list-item');
        }
    };
    MdlListItemPrimaryContentComponent = __decorate([
        core_1.Component({
            selector: 'mdl-list-item-primary-content',
            host: {
                '[class.mdl-list__item-primary-content]': 'true'
            },
            template: '<ng-content></ng-content>',
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __param(0, core_1.Optional()), 
        __metadata('design:paramtypes', [MdlListItemComponent])
    ], MdlListItemPrimaryContentComponent);
    return MdlListItemPrimaryContentComponent;
}());
exports.MdlListItemPrimaryContentComponent = MdlListItemPrimaryContentComponent;
var MdlListItemSecondaryContentComponent = (function () {
    function MdlListItemSecondaryContentComponent(mdlListItemComponent) {
        this.mdlListItemComponent = mdlListItemComponent;
    }
    MdlListItemSecondaryContentComponent.prototype.ngOnInit = function () {
        if (this.mdlListItemComponent === null) {
            throw new mdl_error_1.MdlStructureError('mdl-list-item-secondary-content', 'mdl-list-item');
        }
    };
    MdlListItemSecondaryContentComponent = __decorate([
        core_1.Component({
            selector: 'mdl-list-item-secondary-content',
            host: {
                '[class.mdl-list__item-secondary-content]': 'true'
            },
            template: '<ng-content></ng-content>',
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __param(0, core_1.Optional()), 
        __metadata('design:paramtypes', [MdlListItemComponent])
    ], MdlListItemSecondaryContentComponent);
    return MdlListItemSecondaryContentComponent;
}());
exports.MdlListItemSecondaryContentComponent = MdlListItemSecondaryContentComponent;
var MdlListItemSecondaryActionComponent = (function () {
    function MdlListItemSecondaryActionComponent(mdlListItemComponent) {
        this.mdlListItemComponent = mdlListItemComponent;
    }
    MdlListItemSecondaryActionComponent.prototype.ngOnInit = function () {
        if (this.mdlListItemComponent === null) {
            throw new mdl_error_1.MdlStructureError('mdl-list-item-secondary-action', 'mdl-list-item');
        }
    };
    MdlListItemSecondaryActionComponent = __decorate([
        core_1.Component({
            selector: 'mdl-list-item-secondary-action',
            host: {
                '[class.mdl-list__item-secondary-action]': 'true'
            },
            template: '<ng-content></ng-content>',
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __param(0, core_1.Optional()), 
        __metadata('design:paramtypes', [MdlListItemComponent])
    ], MdlListItemSecondaryActionComponent);
    return MdlListItemSecondaryActionComponent;
}());
exports.MdlListItemSecondaryActionComponent = MdlListItemSecondaryActionComponent;
var MdlListItemSubTitleComponent = (function () {
    function MdlListItemSubTitleComponent(mdlListItemComponent) {
        this.mdlListItemComponent = mdlListItemComponent;
    }
    MdlListItemSubTitleComponent.prototype.ngOnInit = function () {
        if (this.mdlListItemComponent === null) {
            throw new mdl_error_1.MdlStructureError('mdl-list-item-sub-title', 'mdl-list-item-primary-content');
        }
    };
    MdlListItemSubTitleComponent = __decorate([
        core_1.Component({
            selector: 'mdl-list-item-sub-title',
            host: {
                '[class.mdl-list__item-sub-title]': 'true'
            },
            template: '<ng-content></ng-content>',
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __param(0, core_1.Optional()), 
        __metadata('design:paramtypes', [MdlListItemPrimaryContentComponent])
    ], MdlListItemSubTitleComponent);
    return MdlListItemSubTitleComponent;
}());
exports.MdlListItemSubTitleComponent = MdlListItemSubTitleComponent;
var MdlListItemSecondaryInfoComponent = (function () {
    function MdlListItemSecondaryInfoComponent(mdlListItemComponent) {
        this.mdlListItemComponent = mdlListItemComponent;
    }
    MdlListItemSecondaryInfoComponent.prototype.ngOnInit = function () {
        if (this.mdlListItemComponent === null) {
            throw new mdl_error_1.MdlStructureError('mdl-list-item-secondary-info', 'mdl-list-item-secondary-content');
        }
    };
    MdlListItemSecondaryInfoComponent = __decorate([
        core_1.Component({
            selector: 'mdl-list-item-secondary-info',
            host: {
                '[class.mdl-list__item-secondary-info]': 'true'
            },
            template: '<ng-content></ng-content>',
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __param(0, core_1.Optional()), 
        __metadata('design:paramtypes', [MdlListItemSecondaryContentComponent])
    ], MdlListItemSecondaryInfoComponent);
    return MdlListItemSecondaryInfoComponent;
}());
exports.MdlListItemSecondaryInfoComponent = MdlListItemSecondaryInfoComponent;
var MdlListItemTextBodyComponent = (function () {
    function MdlListItemTextBodyComponent(mdlListItemComponent) {
        this.mdlListItemComponent = mdlListItemComponent;
    }
    MdlListItemTextBodyComponent.prototype.ngOnInit = function () {
        if (this.mdlListItemComponent === null) {
            throw new mdl_error_1.MdlStructureError('mdl-list-item-text-body', 'mdl-list-item');
        }
    };
    MdlListItemTextBodyComponent = __decorate([
        core_1.Component({
            selector: 'mdl-list-item-text-body',
            host: {
                '[class.mdl-list__item-text-body]': 'true'
            },
            template: '<ng-content></ng-content>',
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __param(0, core_1.Optional()), 
        __metadata('design:paramtypes', [MdlListItemComponent])
    ], MdlListItemTextBodyComponent);
    return MdlListItemTextBodyComponent;
}());
exports.MdlListItemTextBodyComponent = MdlListItemTextBodyComponent;
var MdlListItemIconDirective = (function () {
    function MdlListItemIconDirective() {
    }
    MdlListItemIconDirective = __decorate([
        core_1.Directive({
            selector: 'mdl-icon[mdl-list-item-icon]',
            host: {
                '[class.mdl-list__item-icon]': 'true'
            }
        }), 
        __metadata('design:paramtypes', [])
    ], MdlListItemIconDirective);
    return MdlListItemIconDirective;
}());
exports.MdlListItemIconDirective = MdlListItemIconDirective;
var MdlListItemAvatarDirective = (function () {
    function MdlListItemAvatarDirective() {
    }
    MdlListItemAvatarDirective = __decorate([
        core_1.Directive({
            selector: 'mdl-icon[mdl-list-item-avatar]',
            host: {
                '[class.mdl-list__item-avatar]': 'true'
            }
        }), 
        __metadata('design:paramtypes', [])
    ], MdlListItemAvatarDirective);
    return MdlListItemAvatarDirective;
}());
exports.MdlListItemAvatarDirective = MdlListItemAvatarDirective;
var MDL_LIST_DIRECTIVES = [
    MdlListComponent,
    MdlListItemComponent,
    MdlListItemPrimaryContentComponent,
    MdlListItemIconDirective,
    MdlListItemAvatarDirective,
    MdlListItemSecondaryContentComponent,
    MdlListItemSecondaryActionComponent,
    MdlListItemSubTitleComponent,
    MdlListItemSecondaryInfoComponent,
    MdlListItemTextBodyComponent
];
var MdlListModule = (function () {
    function MdlListModule() {
    }
    MdlListModule = __decorate([
        core_1.NgModule({
            imports: [],
            exports: MDL_LIST_DIRECTIVES,
            declarations: MDL_LIST_DIRECTIVES,
        }), 
        __metadata('design:paramtypes', [])
    ], MdlListModule);
    return MdlListModule;
}());
exports.MdlListModule = MdlListModule;
//# sourceMappingURL=../../../dist/components/list/mdl-list.component.js.map