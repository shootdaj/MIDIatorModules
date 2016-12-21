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
var mdl_chip_contact_directive_1 = require('./mdl-chip-contact.directive');
var MdlChipComponent = (function () {
    function MdlChipComponent() {
        this.actionClick = new core_1.EventEmitter();
    }
    MdlChipComponent.prototype.action = function () {
        this.actionClick.emit();
    };
    __decorate([
        core_1.Input('mdl-label'), 
        __metadata('design:type', Object)
    ], MdlChipComponent.prototype, "mdlLabel", void 0);
    __decorate([
        core_1.Input('mdl-action-icon'), 
        __metadata('design:type', Object)
    ], MdlChipComponent.prototype, "mdlActionIcon", void 0);
    __decorate([
        core_1.Output('action-click'), 
        __metadata('design:type', Object)
    ], MdlChipComponent.prototype, "actionClick", void 0);
    __decorate([
        core_1.ContentChild(mdl_chip_contact_directive_1.MdlChipContactDirective), 
        __metadata('design:type', mdl_chip_contact_directive_1.MdlChipContactDirective)
    ], MdlChipComponent.prototype, "chipContact", void 0);
    MdlChipComponent = __decorate([
        core_1.Component({
            selector: 'mdl-chip',
            host: {
                '[class.mdl-chip]': 'true',
                '[class.mdl-chip--contact]': 'chipContact'
            },
            template: "\n    <ng-content></ng-content>\n    <span *ngIf=\"mdlLabel\" class=\"mdl-chip__text\">{{mdlLabel}}</span>\n    <button *ngIf=\"mdlActionIcon\" (click)=\"action()\" type=\"button\" class=\"mdl-chip__action\">\n      <mdl-icon>{{mdlActionIcon}}</mdl-icon>\n    </button>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], MdlChipComponent);
    return MdlChipComponent;
}());
exports.MdlChipComponent = MdlChipComponent;
//# sourceMappingURL=../../../dist/components/chips/mdl-chip.component.js.map