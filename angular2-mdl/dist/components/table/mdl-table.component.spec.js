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
var testing_1 = require('@angular/core/testing');
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var index_1 = require('./index');
var mdl_checkbox_component_1 = require('./../checkbox/mdl-checkbox.component');
var forms_1 = require('@angular/forms');
describe('Component: MdlTableComponent', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [index_1.MdlTableModule, forms_1.FormsModule],
            declarations: [MdlTestTableComponent],
        });
    });
    it('should create a table with class "mdl-data-table', function () {
        var fixture = testing_1.TestBed.createComponent(MdlTestTableComponent);
        fixture.detectChanges();
        var tableEl = fixture.debugElement.query(platform_browser_1.By.css('table')).nativeElement;
        expect(tableEl.classList.contains('mdl-data-table')).toBe(true);
    });
    it('should select all items if the toggleAll checkbox is clicked', function () {
        var fixture = testing_1.TestBed.createComponent(MdlTestTableComponent);
        fixture.detectChanges();
        var firstCheckboxEl = fixture.debugElement
            .query(platform_browser_1.By.directive(mdl_checkbox_component_1.MdlCheckboxComponent)).nativeElement;
        firstCheckboxEl.click();
        fixture.detectChanges();
        expect(fixture.componentInstance.selected.length).toBe(fixture.componentInstance.tableData.length);
    });
    it('should change the selection to the last table row if the last checkbox is clickt', function () {
        var fixture = testing_1.TestBed.createComponent(MdlTestTableComponent);
        fixture.detectChanges();
        var checkboxes = fixture.debugElement.queryAll(platform_browser_1.By.directive(mdl_checkbox_component_1.MdlCheckboxComponent));
        var firstCheckboxEl = checkboxes[checkboxes.length - 1].nativeElement;
        firstCheckboxEl.click();
        fixture.detectChanges();
        // one is already selected so we have to selected items
        expect(fixture.componentInstance.selected.length).toBe(2);
    });
});
var MdlTestTableComponent = (function () {
    function MdlTestTableComponent() {
        this.tableData = [
            { material: 'Acrylic (Transparent)', quantity: 25, unitPrice: 2.90, selected: true },
            { material: 'Plywood (Birch)', quantity: 50, unitPrice: 1.25, selected: false },
            { material: 'Laminate (Gold on Blue)', quantity: 10, unitPrice: 2.35, selected: false }
        ];
        this.selected = new Array();
        this.tableModel = new index_1.MdlDefaultTableModel([
            { key: 'material', name: 'Material', sortable: true },
            { key: 'quantity', name: 'Quantity', sortable: true, numeric: true },
            { key: 'unitPrice', name: 'Unit price', numeric: true }
        ]);
    }
    MdlTestTableComponent.prototype.ngOnInit = function () {
        this.tableModel.addAll(this.tableData);
        this.selected = this.tableData.filter(function (data) { return data.selected; });
    };
    MdlTestTableComponent.prototype.selectionChanged = function ($event) {
        this.selected = $event.value;
    };
    MdlTestTableComponent = __decorate([
        core_1.Component({
            selector: 'test-icon',
            template: "\n    <mdl-table-selectable mdl-shadow=\"2\"\n         [table-model]=\"tableModel\"\n         [table-model-selected]=\"selected\"\n         (table-model-selectionChanged)=\"selectionChanged($event)\">\n    </mdl-table-selectable>\n    ",
        }), 
        __metadata('design:paramtypes', [])
    ], MdlTestTableComponent);
    return MdlTestTableComponent;
}());
//# sourceMappingURL=../../../dist/components/table/mdl-table.component.spec.js.map