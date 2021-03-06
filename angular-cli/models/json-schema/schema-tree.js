"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var error_1 = require('../error');
var InvalidSchema = (function (_super) {
    __extends(InvalidSchema, _super);
    function InvalidSchema() {
        _super.apply(this, arguments);
    }
    return InvalidSchema;
}(error_1.NgToolkitError));
exports.InvalidSchema = InvalidSchema;
var MissingImplementationError = (function (_super) {
    __extends(MissingImplementationError, _super);
    function MissingImplementationError() {
        _super.apply(this, arguments);
    }
    return MissingImplementationError;
}(error_1.NgToolkitError));
exports.MissingImplementationError = MissingImplementationError;
var SettingReadOnlyPropertyError = (function (_super) {
    __extends(SettingReadOnlyPropertyError, _super);
    function SettingReadOnlyPropertyError() {
        _super.apply(this, arguments);
    }
    return SettingReadOnlyPropertyError;
}(error_1.NgToolkitError));
exports.SettingReadOnlyPropertyError = SettingReadOnlyPropertyError;
/**
 * Holds all the information, including the value, of a node in the schema tree.
 */
var SchemaTreeNode = (function () {
    function SchemaTreeNode(nodeMetaData) {
        this._defined = false;
        this._dirty = false;
        this._schema = nodeMetaData.schema;
        this._name = nodeMetaData.name;
        this._value = nodeMetaData.value;
        this._forward = nodeMetaData.forward;
        this._parent = nodeMetaData.parent;
    }
    SchemaTreeNode.prototype.dispose = function () {
        this._parent = null;
        this._schema = null;
        this._value = null;
        this._forward.dispose();
        this._forward = null;
    };
    Object.defineProperty(SchemaTreeNode.prototype, "defined", {
        get: function () { return this._defined; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchemaTreeNode.prototype, "dirty", {
        get: function () { return this._dirty; },
        set: function (v) {
            if (v) {
                this._defined = true;
                this._dirty = true;
                if (this._parent) {
                    this._parent.dirty = true;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchemaTreeNode.prototype, "type", {
        get: function () { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchemaTreeNode.prototype, "name", {
        get: function () { return this._name; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchemaTreeNode.prototype, "readOnly", {
        get: function () { return this._schema['readOnly']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchemaTreeNode.prototype, "parent", {
        get: function () { return this._parent; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchemaTreeNode.prototype, "children", {
        get: function () { return null; },
        enumerable: true,
        configurable: true
    });
    SchemaTreeNode.prototype.set = function (v) {
        if (!this.readOnly) {
            throw new MissingImplementationError();
        }
        throw new SettingReadOnlyPropertyError();
    };
    ;
    SchemaTreeNode._defineProperty = function (proto, treeNode) {
        if (treeNode.readOnly) {
            Object.defineProperty(proto, treeNode.name, {
                enumerable: true,
                get: function () { return treeNode.get(); }
            });
        }
        else {
            Object.defineProperty(proto, treeNode.name, {
                enumerable: true,
                get: function () { return treeNode.get(); },
                set: function (v) { return treeNode.set(v); }
            });
        }
    };
    return SchemaTreeNode;
}());
exports.SchemaTreeNode = SchemaTreeNode;
/** Base Class used for Non-Leaves TreeNode. Meaning they can have children. */
var NonLeafSchemaTreeNode = (function (_super) {
    __extends(NonLeafSchemaTreeNode, _super);
    function NonLeafSchemaTreeNode() {
        _super.apply(this, arguments);
    }
    NonLeafSchemaTreeNode.prototype.dispose = function () {
        for (var _i = 0, _a = Object.keys(this.children); _i < _a.length; _i++) {
            var key = _a[_i];
            this.children[key].dispose();
        }
        _super.prototype.dispose.call(this);
    };
    Object.defineProperty(NonLeafSchemaTreeNode.prototype, "readOnly", {
        // Non leaves are read-only.
        get: function () { return true; },
        enumerable: true,
        configurable: true
    });
    NonLeafSchemaTreeNode.prototype.get = function () {
        if (this.defined) {
            return this._value;
        }
        else {
            return undefined;
        }
    };
    NonLeafSchemaTreeNode.prototype.destroy = function () {
        this._defined = false;
        this._value = null;
    };
    // Helper function to create a child based on its schema.
    NonLeafSchemaTreeNode.prototype._createChildProperty = function (name, value, forward, schema, define) {
        if (define === void 0) { define = true; }
        var type = schema['type'];
        var Klass = null;
        switch (type) {
            case 'object':
                Klass = ObjectSchemaTreeNode;
                break;
            case 'array':
                Klass = ArraySchemaTreeNode;
                break;
            case 'string':
                Klass = StringSchemaTreeNode;
                break;
            case 'boolean':
                Klass = BooleanSchemaTreeNode;
                break;
            case 'number':
                Klass = NumberSchemaTreeNode;
                break;
            case 'integer':
                Klass = IntegerSchemaTreeNode;
                break;
            default:
                console.error('Type ' + type + ' not understood by SchemaClassFactory.');
                return null;
        }
        var metaData = new Klass({ parent: this, forward: forward, value: value, schema: schema, name: name });
        if (define) {
            SchemaTreeNode._defineProperty(this._value, metaData);
        }
        return metaData;
    };
    return NonLeafSchemaTreeNode;
}(SchemaTreeNode));
exports.NonLeafSchemaTreeNode = NonLeafSchemaTreeNode;
/** A Schema Tree Node that represents an object. */
var ObjectSchemaTreeNode = (function (_super) {
    __extends(ObjectSchemaTreeNode, _super);
    function ObjectSchemaTreeNode(metaData) {
        _super.call(this, metaData);
        var value = metaData.value, forward = metaData.forward, schema = metaData.schema;
        if (value) {
            this._defined = true;
        }
        this._children = Object.create(null);
        this._value = Object.create(null);
        if (schema['properties']) {
            for (var _i = 0, _a = Object.keys(schema['properties']); _i < _a.length; _i++) {
                var name = _a[_i];
                var propertySchema = schema['properties'][name];
                this._children[name] = this._createChildProperty(name, value ? value[name] : null, forward ? forward.children[name] : null, propertySchema);
            }
        }
        else if (!schema['additionalProperties']) {
            throw new InvalidSchema();
        }
        if (!schema['additionalProperties']) {
            Object.freeze(this._value);
        }
        else if (value) {
            // Set other properties which don't have a schema.
            for (var _b = 0, _c = Object.keys(value); _b < _c.length; _b++) {
                var key = _c[_b];
                if (!this._children[key]) {
                    this._value[key] = value[key];
                }
            }
        }
        Object.freeze(this._children);
    }
    ObjectSchemaTreeNode.prototype.serialize = function (serializer, value) {
        var _this = this;
        if (value === void 0) { value = this._value; }
        serializer.object(function () {
            var _loop_1 = function(key) {
                if (_this._children[key]) {
                    if (_this._children[key].defined) {
                        serializer.property(key, function () { return _this._children[key].serialize(serializer, value[key]); });
                    }
                }
                else if (_this._schema['additionalProperties']) {
                    serializer.property(key, function () { return _this._children[key].serialize(serializer, value[key]); });
                }
            };
            for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
                var key = _a[_i];
                _loop_1(key);
            }
        });
    };
    Object.defineProperty(ObjectSchemaTreeNode.prototype, "children", {
        get: function () { return this._children; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObjectSchemaTreeNode.prototype, "type", {
        get: function () { return 'object'; },
        enumerable: true,
        configurable: true
    });
    return ObjectSchemaTreeNode;
}(NonLeafSchemaTreeNode));
exports.ObjectSchemaTreeNode = ObjectSchemaTreeNode;
/** A Schema Tree Node that represents an array. */
var ArraySchemaTreeNode = (function (_super) {
    __extends(ArraySchemaTreeNode, _super);
    function ArraySchemaTreeNode(metaData) {
        _super.call(this, metaData);
        var value = metaData.value, forward = metaData.forward, schema = metaData.schema;
        if (value) {
            this._defined = true;
        }
        else {
            value = [];
        }
        this._items = [];
        this._value = [];
        for (var index = 0; index < value.length; index++) {
            this._items[index] = this._createChildProperty('' + index, value && value[index], forward && forward.children[index], schema['items']);
        }
        if (!schema['additionalProperties']) {
            Object.freeze(this._value);
        }
    }
    Object.defineProperty(ArraySchemaTreeNode.prototype, "children", {
        get: function () { return this._items; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArraySchemaTreeNode.prototype, "type", {
        get: function () { return 'array'; },
        enumerable: true,
        configurable: true
    });
    ArraySchemaTreeNode.prototype.serialize = function (serializer, value) {
        var _this = this;
        if (value === void 0) { value = this._value; }
        serializer.array(function () {
            for (var i = 0; i < value.length; i++) {
                _this._items[i].serialize(serializer, value[i]);
            }
        });
    };
    return ArraySchemaTreeNode;
}(NonLeafSchemaTreeNode));
exports.ArraySchemaTreeNode = ArraySchemaTreeNode;
/**
 * The root class of the tree node. Receives a prototype that will be filled with the
 * properties of the Schema root.
 */
var RootSchemaTreeNode = (function (_super) {
    __extends(RootSchemaTreeNode, _super);
    function RootSchemaTreeNode(proto, metaData) {
        _super.call(this, metaData);
        for (var _i = 0, _a = Object.keys(this._children); _i < _a.length; _i++) {
            var key = _a[_i];
            if (this._children[key]) {
                SchemaTreeNode._defineProperty(proto, this._children[key]);
            }
        }
    }
    return RootSchemaTreeNode;
}(ObjectSchemaTreeNode));
exports.RootSchemaTreeNode = RootSchemaTreeNode;
/** A leaf in the schema tree. Must contain a single primitive value. */
var LeafSchemaTreeNode = (function (_super) {
    __extends(LeafSchemaTreeNode, _super);
    function LeafSchemaTreeNode(metaData) {
        _super.call(this, metaData);
        this._defined = metaData.value !== undefined;
        if ('default' in metaData.schema) {
            this._default = metaData.schema['default'];
        }
    }
    LeafSchemaTreeNode.prototype.get = function () {
        if (!this.defined && this._forward) {
            return this._forward.get();
        }
        if (!this.defined && this._default !== undefined) {
            return this._default;
        }
        return this._value === undefined ? undefined : this.convert(this._value);
    };
    LeafSchemaTreeNode.prototype.set = function (v) { this.dirty = true; this._value = this.convert(v); };
    LeafSchemaTreeNode.prototype.destroy = function () {
        this._defined = false;
        this._value = null;
    };
    LeafSchemaTreeNode.prototype.serialize = function (serializer, value) {
        if (value === void 0) { value = this.get(); }
        if (this.defined) {
            serializer.outputValue(value);
        }
    };
    return LeafSchemaTreeNode;
}(SchemaTreeNode));
exports.LeafSchemaTreeNode = LeafSchemaTreeNode;
/** Basic primitives for JSON Schema. */
var StringSchemaTreeNode = (function (_super) {
    __extends(StringSchemaTreeNode, _super);
    function StringSchemaTreeNode() {
        _super.apply(this, arguments);
    }
    StringSchemaTreeNode.prototype.serialize = function (serializer, value) {
        if (value === void 0) { value = this.get(); }
        if (this.defined) {
            serializer.outputString(value);
        }
    };
    StringSchemaTreeNode.prototype.convert = function (v) { return v === undefined ? undefined : '' + v; };
    Object.defineProperty(StringSchemaTreeNode.prototype, "type", {
        get: function () { return 'string'; },
        enumerable: true,
        configurable: true
    });
    return StringSchemaTreeNode;
}(LeafSchemaTreeNode));
var BooleanSchemaTreeNode = (function (_super) {
    __extends(BooleanSchemaTreeNode, _super);
    function BooleanSchemaTreeNode() {
        _super.apply(this, arguments);
    }
    BooleanSchemaTreeNode.prototype.serialize = function (serializer, value) {
        if (value === void 0) { value = this.get(); }
        if (this.defined) {
            serializer.outputBoolean(value);
        }
    };
    BooleanSchemaTreeNode.prototype.convert = function (v) { return v === undefined ? undefined : !!v; };
    Object.defineProperty(BooleanSchemaTreeNode.prototype, "type", {
        get: function () { return 'boolean'; },
        enumerable: true,
        configurable: true
    });
    return BooleanSchemaTreeNode;
}(LeafSchemaTreeNode));
var NumberSchemaTreeNode = (function (_super) {
    __extends(NumberSchemaTreeNode, _super);
    function NumberSchemaTreeNode() {
        _super.apply(this, arguments);
    }
    NumberSchemaTreeNode.prototype.serialize = function (serializer, value) {
        if (value === void 0) { value = this.get(); }
        if (this.defined) {
            serializer.outputNumber(value);
        }
    };
    NumberSchemaTreeNode.prototype.convert = function (v) { return v === undefined ? undefined : +v; };
    Object.defineProperty(NumberSchemaTreeNode.prototype, "type", {
        get: function () { return 'number'; },
        enumerable: true,
        configurable: true
    });
    return NumberSchemaTreeNode;
}(LeafSchemaTreeNode));
var IntegerSchemaTreeNode = (function (_super) {
    __extends(IntegerSchemaTreeNode, _super);
    function IntegerSchemaTreeNode() {
        _super.apply(this, arguments);
    }
    IntegerSchemaTreeNode.prototype.convert = function (v) { return v === undefined ? undefined : Math.floor(+v); };
    return IntegerSchemaTreeNode;
}(NumberSchemaTreeNode));
//# sourceMappingURL=/Users/hans/Sources/angular-cli/packages/angular-cli/angular-cli/models/json-schema/schema-tree.js.map