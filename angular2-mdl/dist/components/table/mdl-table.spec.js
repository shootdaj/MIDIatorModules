"use strict";
var mdl_table_1 = require('./mdl-table');
describe('Component: MdlTableModel', function () {
    var tableModel;
    beforeEach(function () {
        tableModel = new mdl_table_1.MdlDefaultTableModel([
            { key: 'key', name: 'name', sortable: true, numeric: false }
        ]);
    });
    it('should be possible to access the columns', function () {
        expect(tableModel.columns.length).toBe(1);
    });
    it('should be possible to add tabel data', function () {
        tableModel.addAll([{ selected: true }]);
        expect(tableModel.data.length).toBe(1);
    });
});
//# sourceMappingURL=../../../dist/components/table/mdl-table.spec.js.map