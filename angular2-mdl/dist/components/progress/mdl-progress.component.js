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
var common_1 = require('@angular/common');
var MdlProgressComponent = (function () {
    function MdlProgressComponent() {
        this.progress = 0;
        this.buffer = 100;
        this.aux = 0;
    }
    MdlProgressComponent.prototype.ngOnChanges = function (changes) {
        if (changes['buffer']) {
            this.setBuffer(changes['buffer'].currentValue);
        }
    };
    MdlProgressComponent.prototype.setBuffer = function (b) {
        this.aux = 100 - b;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MdlProgressComponent.prototype, "progress", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MdlProgressComponent.prototype, "buffer", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MdlProgressComponent.prototype, "aux", void 0);
    __decorate([
        core_1.Input(),
        boolean_property_1.BooleanProperty(), 
        __metadata('design:type', Boolean)
    ], MdlProgressComponent.prototype, "indeterminate", void 0);
    MdlProgressComponent = __decorate([
        core_1.Component({
            selector: 'mdl-progress',
            host: {
                '[class.mdl-progress]': 'true',
                '[class.mdl-progress__indeterminate]': 'indeterminate===true'
            },
            template: "\n    <div class=\"progressbar bar bar1\" [style.width]=\"progress + '%'\"></div>\n    <div class=\"bufferbar bar bar2\" [style.width]=\"buffer + '%'\"></div>\n    <div class=\"auxbar bar bar3\" [ngStyle]=\"{'width': aux+'%'}\"></div>\n  ",
            encapsulation: core_1.ViewEncapsulation.None,
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        }), 
        __metadata('design:paramtypes', [])
    ], MdlProgressComponent);
    return MdlProgressComponent;
}());
exports.MdlProgressComponent = MdlProgressComponent;
var MDL_PROGRESS_DIRECTIVES = [MdlProgressComponent];
var MdlProgressModule = (function () {
    function MdlProgressModule() {
    }
    MdlProgressModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            exports: MDL_PROGRESS_DIRECTIVES,
            declarations: MDL_PROGRESS_DIRECTIVES,
        }), 
        __metadata('design:paramtypes', [])
    ], MdlProgressModule);
    return MdlProgressModule;
}());
exports.MdlProgressModule = MdlProgressModule;
//# sourceMappingURL=../../../dist/components/progress/mdl-progress.component.js.map