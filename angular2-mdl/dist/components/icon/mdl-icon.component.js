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
var core_1 = require('@angular/core');
var MdlIconComponent = (function () {
    function MdlIconComponent() {
    }
    MdlIconComponent = __decorate([
        core_1.Component({
            selector: 'mdl-icon',
            host: {
                '[class.material-icons]': 'true'
            },
            template: '<ng-content></ng-content>'
        }), 
        __metadata('design:paramtypes', [])
    ], MdlIconComponent);
    return MdlIconComponent;
}());
exports.MdlIconComponent = MdlIconComponent;
var MDL_ICON_DIRECTIVES = [MdlIconComponent];
var MdlIconModule = (function () {
    function MdlIconModule() {
    }
    MdlIconModule = __decorate([
        core_1.NgModule({
            imports: [],
            exports: MDL_ICON_DIRECTIVES,
            declarations: MDL_ICON_DIRECTIVES,
        }), 
        __metadata('design:paramtypes', [])
    ], MdlIconModule);
    return MdlIconModule;
}());
exports.MdlIconModule = MdlIconModule;
//# sourceMappingURL=../../../dist/components/icon/mdl-icon.component.js.map