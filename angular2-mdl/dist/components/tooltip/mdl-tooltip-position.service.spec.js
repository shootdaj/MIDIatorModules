"use strict";
var testing_1 = require('@angular/core/testing');
var mdl_tooltip_position_service_1 = require('./mdl-tooltip-position.service');
describe('Component: MdlTooltipPositionService', function () {
    var service;
    var boundingClientRect;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [mdl_tooltip_position_service_1.MdlTooltipPositionService]
        });
    });
    beforeEach(testing_1.inject([mdl_tooltip_position_service_1.MdlTooltipPositionService], function (mdlService) {
        service = mdlService;
        boundingClientRect = {
            bottom: 100,
            height: 20,
            left: 200,
            right: 200,
            top: 100,
            width: 20 };
    }));
    // left Object{top: '110px', marginTop: '0px', left: '190px'}
    // top Object{left: '210px', marginLeft: '0px', top: '90px'}
    // right Object{top: '110px', marginTop: '0px', left: '230px'}
    // bottom Object{left: '210px', marginLeft: '0px', top: '130px'}
    it('should calculate the position for tooltips with position left', function () {
        var style = service.calcStyle(0, 0, boundingClientRect, 'left');
        expect(style.top).toBe('110px');
        expect(style.left).toBe('190px');
    });
    it('should calculate the position for tooltips with position top', function () {
        var style = service.calcStyle(0, 0, boundingClientRect, 'top');
        expect(style.top).toBe('90px');
        expect(style.left).toBe('210px');
    });
    it('should calculate the position for tooltips with position right', function () {
        var style = service.calcStyle(0, 0, boundingClientRect, 'right');
        expect(style.top).toBe('110px');
        expect(style.left).toBe('230px');
    });
    it('should calculate the position for tooltips with position bottom', function () {
        var style = service.calcStyle(0, 0, boundingClientRect, 'bottom');
        expect(style.top).toBe('130px');
        expect(style.left).toBe('210px');
    });
    it('should calculate the position for tooltips with position left with neg top', function () {
        boundingClientRect.top = -100;
        var style = service.calcStyle(0, 0, boundingClientRect, 'left');
        // Object{top: '0', marginTop: '0', left: '190px'}
        expect(style.top).toBe('0');
        expect(style.left).toBe('190px');
    });
    it('should calculate the position for tooltips with position top with neg left', function () {
        boundingClientRect.left = -100;
        var style = service.calcStyle(0, 0, boundingClientRect, 'top');
        // Object{left: '0', marginLeft: '0', top: '90px'}
        expect(style.top).toBe('90px');
        expect(style.left).toBe('0');
    });
});
//# sourceMappingURL=../../../dist/components/tooltip/mdl-tooltip-position.service.spec.js.map