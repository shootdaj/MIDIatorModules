var isNumber = require('./isNumber');
var GLOBAL = require('./GLOBAL');

    /**
     * Check if value is finite
     */
    function isFinite(val){
        var is = false;
        if (typeof val === 'string' && val !== '') {
            is = GLOBAL.isFinite( parseFloat(val) );
        } else if (isNumber(val)){
            // need to use isNumber because of Number constructor
            is = GLOBAL.isFinite( val );
        }
        return is;
    }

    module.exports = isFinite;


