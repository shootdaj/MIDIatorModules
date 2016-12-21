"use strict";
var MdlDefaultTableModel = (function () {
    function MdlDefaultTableModel(columns) {
        this.data = new Array();
        this.columns = columns;
    }
    MdlDefaultTableModel.prototype.addAll = function (data) {
        (_a = this.data).push.apply(_a, data);
        var _a;
    };
    return MdlDefaultTableModel;
}());
exports.MdlDefaultTableModel = MdlDefaultTableModel;
//# sourceMappingURL=../../../dist/components/table/mdl-table.js.map