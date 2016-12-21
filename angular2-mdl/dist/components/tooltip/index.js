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
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var core_1 = require('@angular/core');
var mdl_tooltip_component_1 = require('./mdl-tooltip.component');
var mdl_tooltip_directive_1 = require('./mdl-tooltip.directive');
var MDL_TOOLTIP_DIRECTIVES = [
    mdl_tooltip_component_1.MdlTooltipComponent,
    mdl_tooltip_directive_1.MdlTooltipLargeDirective,
    mdl_tooltip_directive_1.MdlTooltipDirective
];
__export(require('./mdl-tooltip.component'));
__export(require('./mdl-tooltip.directive'));
var MdlTooltipModule = (function () {
    function MdlTooltipModule() {
    }
    MdlTooltipModule = __decorate([
        core_1.NgModule({
            imports: [],
            exports: MDL_TOOLTIP_DIRECTIVES,
            declarations: MDL_TOOLTIP_DIRECTIVES.concat([mdl_tooltip_component_1.MdlSimpleTooltipComponent]),
            entryComponents: [mdl_tooltip_component_1.MdlSimpleTooltipComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], MdlTooltipModule);
    return MdlTooltipModule;
}());
exports.MdlTooltipModule = MdlTooltipModule;
//# sourceMappingURL=../../../dist/components/tooltip/index.js.map