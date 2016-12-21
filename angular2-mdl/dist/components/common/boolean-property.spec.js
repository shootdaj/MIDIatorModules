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
var boolean_property_1 = require('./boolean-property');
describe('BooleanProperty', function () {
    it('should work for null values', function () {
        var x = new BooleanPropertyTest();
        x.field = null;
        expect(x.field).toBe(false);
        x.field = undefined;
        expect(x.field).toBe(false);
    });
    it('should work for string values', function () {
        var x = new BooleanPropertyTest();
        x.field = 'hello';
        expect(x.field).toBe(true);
        x.field = 'true';
        expect(x.field).toBe(true);
        x.field = '';
        expect(x.field).toBe(true);
        x.field = 'false';
        expect(x.field).toBe(false);
    });
});
var BooleanPropertyTest = (function () {
    function BooleanPropertyTest() {
    }
    __decorate([
        boolean_property_1.BooleanProperty(), 
        __metadata('design:type', Boolean)
    ], BooleanPropertyTest.prototype, "field", void 0);
    return BooleanPropertyTest;
}());
//# sourceMappingURL=../../../dist/components/common/boolean-property.spec.js.map