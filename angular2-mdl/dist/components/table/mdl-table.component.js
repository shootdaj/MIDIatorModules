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
var template = "\n        <table class=\"mdl-data-table\">\n           <thead>\n           <tr>\n              <th *ngIf=\"selectable\">\n                 <mdl-checkbox mdl-ripple [ngModel]=\"isAllSelected()\" (ngModelChange)=\"toogleAll()\"></mdl-checkbox>\n              </th>\n              <th *ngFor=\"let column of model.columns\"\n                  [ngClass]=\"{'mdl-data-table__cell--non-numeric': !column.numeric}\">\n                 {{column.name}}\n              </th>\n           </tr>\n           </thead>\n           <tbody>\n           <tr *ngFor=\"let data of model.data; let i = index\" [ngClass]=\"{'is-selected': selectable && data.selected}\">\n              <td *ngIf=\"selectable\">\n                 <mdl-checkbox mdl-ripple\n                      [(ngModel)]=\"data.selected\"\n                      (ngModelChange)=\"selectionChanged(data)\"></mdl-checkbox>\n              </td>\n              <td *ngFor=\"let column of model.columns\"\n                  [ngClass]=\"{'mdl-data-table__cell--non-numeric': !column.numeric}\">\n                 {{data[column.key]}}\n              </td>\n           </tr>\n           </tbody>\n        </table>  \n    ";
var styles = [
    "\n    :host{\n      display:inline-block;\n    }\n    "
];
var MdlTableComponent = (function () {
    function MdlTableComponent() {
        this.selectable = false;
    }
    __decorate([
        core_1.Input('table-model'), 
        __metadata('design:type', Object)
    ], MdlTableComponent.prototype, "model", void 0);
    MdlTableComponent = __decorate([
        core_1.Component({
            selector: 'mdl-table',
            template: template,
            styles: styles
        }), 
        __metadata('design:paramtypes', [])
    ], MdlTableComponent);
    return MdlTableComponent;
}());
exports.MdlTableComponent = MdlTableComponent;
var MdlSelectableTableComponent = (function (_super) {
    __extends(MdlSelectableTableComponent, _super);
    function MdlSelectableTableComponent() {
        _super.apply(this, arguments);
        this.selectionChange = new core_1.EventEmitter();
        this.selectable = true;
        this.allSelected = false;
    }
    MdlSelectableTableComponent.prototype.isAllSelected = function () {
        return this.model.data.every(function (data) { return data.selected; });
    };
    MdlSelectableTableComponent.prototype.toogleAll = function () {
        var selected = !this.isAllSelected();
        this.model.data.forEach(function (data) { return data.selected = selected; });
        this.updateSelected();
    };
    MdlSelectableTableComponent.prototype.updateSelected = function () {
        this.selected = this.model.data.filter(function (data) { return data.selected; });
        this.selectionChange.emit({ value: this.selected });
    };
    MdlSelectableTableComponent.prototype.selectionChanged = function (data) {
        this.updateSelected();
    };
    __decorate([
        core_1.Input('table-model'), 
        __metadata('design:type', Object)
    ], MdlSelectableTableComponent.prototype, "model", void 0);
    __decorate([
        core_1.Input('table-model-selected'), 
        __metadata('design:type', Array)
    ], MdlSelectableTableComponent.prototype, "selected", void 0);
    __decorate([
        core_1.Output('table-model-selectionChanged'), 
        __metadata('design:type', Object)
    ], MdlSelectableTableComponent.prototype, "selectionChange", void 0);
    MdlSelectableTableComponent = __decorate([
        core_1.Component({
            selector: 'mdl-table-selectable',
            template: template,
            styles: styles
        }), 
        __metadata('design:paramtypes', [])
    ], MdlSelectableTableComponent);
    return MdlSelectableTableComponent;
}(MdlTableComponent));
exports.MdlSelectableTableComponent = MdlSelectableTableComponent;
//# sourceMappingURL=../../../dist/components/table/mdl-table.component.js.map