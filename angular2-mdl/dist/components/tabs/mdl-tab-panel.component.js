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
var mdl_tab_panel_title_component_1 = require('./mdl-tab-panel-title.component');
var MdlTabPanelContent = (function () {
    function MdlTabPanelContent() {
    }
    MdlTabPanelContent = __decorate([
        core_1.Component({
            selector: 'mdl-tab-panel-content',
            template: '<ng-content></ng-content>'
        }), 
        __metadata('design:paramtypes', [])
    ], MdlTabPanelContent);
    return MdlTabPanelContent;
}());
exports.MdlTabPanelContent = MdlTabPanelContent;
var MdlTabPanelComponent = (function () {
    function MdlTabPanelComponent() {
        this.isActive = false;
    }
    __decorate([
        core_1.ContentChild(mdl_tab_panel_title_component_1.MdlTabPanelTitleComponent), 
        __metadata('design:type', Object)
    ], MdlTabPanelComponent.prototype, "titleComponent", void 0);
    __decorate([
        core_1.Input('mdl-tab-panel-title'), 
        __metadata('design:type', Object)
    ], MdlTabPanelComponent.prototype, "title", void 0);
    MdlTabPanelComponent = __decorate([
        core_1.Component({
            selector: 'mdl-tab-panel',
            host: {
                '[class.mdl-tabs__panel]': 'true',
                '[class.is-active]': 'isActive'
            },
            template: "\n   <ng-content *ngIf=\"titleComponent\" select=\"mdl-tab-panel-content\"></ng-content>\n   <ng-content *ngIf=\"!titleComponent\"></ng-content>\n   "
        }), 
        __metadata('design:paramtypes', [])
    ], MdlTabPanelComponent);
    return MdlTabPanelComponent;
}());
exports.MdlTabPanelComponent = MdlTabPanelComponent;
//# sourceMappingURL=../../../dist/components/tabs/mdl-tab-panel.component.js.map