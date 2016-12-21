"use strict";
function numberProperty() {
    return function numberFieldValueMetadata(target, key) {
        var defaultValue = target[key];
        var localKey = "__mdl_private_symbol_" + key;
        target[localKey] = defaultValue;
        Object.defineProperty(target, key, {
            get: function () { return this[localKey]; },
            set: function (value) {
                if (typeof value === 'undefined') {
                    value = null;
                }
                else if (typeof value === 'string') {
                    value = parseInt(value);
                }
                this[localKey] = value;
            }
        });
    };
}
exports.NumberProperty = numberProperty;
//# sourceMappingURL=../../../dist/components/common/number.property.js.map