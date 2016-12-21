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
var number_property_1 = require('./number.property');
describe('NumberPropertyTest', function () {
    it('should work for null values', function () {
        var x = new NumberPropertyTest();
        x.field = null;
        expect(x.field).toBe(null);
        x.field = undefined;
        expect(x.field).toBe(null);
    });
    it('should work with default values', function () {
        var x = new NumberPropertyTest();
        expect(x.defaultField).toBe(10);
    });
    it('should work for string values', function () {
        var x = new NumberPropertyTest();
        x.field = '1';
        expect(x.field).toBe(1);
        x.field = '0';
        expect(x.field).toBe(0);
    });
    it('should work for number values', function () {
        var x = new NumberPropertyTest();
        x.field = 1;
        expect(x.field).toBe(1);
        x.field = 0;
        expect(x.field).toBe(0);
    });
});
var NumberPropertyTest = (function () {
    function NumberPropertyTest() {
        this.defaultField = 10;
    }
    __decorate([
        number_property_1.NumberProperty(), 
        __metadata('design:type', Number)
    ], NumberPropertyTest.prototype, "field", void 0);
    __decorate([
        number_property_1.NumberProperty(), 
        __metadata('design:type', Number)
    ], NumberPropertyTest.prototype, "defaultField", void 0);
    return NumberPropertyTest;
}());
//# sourceMappingURL=../../../dist/components/common/number.property.spec.js.map