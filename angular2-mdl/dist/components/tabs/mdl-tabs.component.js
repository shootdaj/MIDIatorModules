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
var boolean_property_1 = require('./../common/boolean-property');
var number_property_1 = require('./../common/number.property');
var mdl_tab_panel_component_1 = require('./mdl-tab-panel.component');
var MdlTabsComponent = (function () {
    function MdlTabsComponent() {
        this.selectedIndex = 0;
        this.isRipple = false;
        this.selectedTabEmitter = new core_1.EventEmitter();
    }
    MdlTabsComponent.prototype.ngAfterContentInit = function () {
        this.updateSelectedTabIndex();
    };
    MdlTabsComponent.prototype.ngOnChanges = function (changes) {
        if (changes['selectedIndex']) {
            this.updateSelectedTabIndex();
        }
    };
    MdlTabsComponent.prototype.updateSelectedTabIndex = function () {
        if (this.tabs) {
            this.tabs.forEach(function (tab) { return tab.isActive = false; });
            if (this.tabs.toArray().length > 0 && this.selectedIndex < this.tabs.toArray().length) {
                this.tabs.toArray()[this.selectedIndex].isActive = true;
            }
        }
    };
    MdlTabsComponent.prototype.tabSelected = function (tab) {
        var index = this.tabs.toArray().indexOf(tab);
        if (index != this.selectedIndex) {
            this.selectedIndex = index;
            this.updateSelectedTabIndex();
            this.selectedTabEmitter.emit({ index: this.selectedIndex });
        }
    };
    __decorate([
        core_1.Input('mdl-tab-active-index'),
        number_property_1.NumberProperty(), 
        __metadata('design:type', Number)
    ], MdlTabsComponent.prototype, "selectedIndex", void 0);
    __decorate([
        core_1.Input('mdl-ripple'),
        boolean_property_1.BooleanProperty(), 
        __metadata('design:type', Object)
    ], MdlTabsComponent.prototype, "isRipple", void 0);
    __decorate([
        core_1.Output('mdl-tab-active-changed'), 
        __metadata('design:type', Object)
    ], MdlTabsComponent.prototype, "selectedTabEmitter", void 0);
    __decorate([
        core_1.ContentChildren(mdl_tab_panel_component_1.MdlTabPanelComponent), 
        __metadata('design:type', core_1.QueryList)
    ], MdlTabsComponent.prototype, "tabs", void 0);
    MdlTabsComponent = __decorate([
        core_1.Component({
            selector: 'mdl-tabs',
            host: {
                '[class.mdl-tabs]': 'true',
                '[class.is-upgraded]': 'true'
            },
            template: "\n   <div class=\"mdl-tabs__tab-bar\">\n      <div *ngFor=\"let tab of tabs.toArray()\">\n        <div \n          *ngIf=\"tab.titleComponent\" \n          class=\"mdl-tabs__tab\" \n          (click)=\"tabSelected(tab)\"\n          [mdl-ripple]=\"isRipple\"\n          [ngClass]=\"{'is-active': tab.isActive}\"\n          [append-view-container-ref]=\"tab.titleComponent.vcRef\"></div>\n        <a *ngIf=\"!tab.titleComponent\" href=\"javascript:void(0)\"   \n              (click)=\"tabSelected(tab)\"\n              class=\"mdl-tabs__tab\" \n              [mdl-ripple]=\"isRipple\"\n              [ngClass]=\"{'is-active': tab.isActive}\">{{tab.title}}</a>\n       </div>\n  </div>\n  <ng-content></ng-content>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], MdlTabsComponent);
    return MdlTabsComponent;
}());
exports.MdlTabsComponent = MdlTabsComponent;
//# sourceMappingURL=../../../dist/components/tabs/mdl-tabs.component.js.map