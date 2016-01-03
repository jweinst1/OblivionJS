/**
 * Created by Josh on 1/2/16.
 */
var integer = (function () {
    function integer(value) {
        this.value = value;
    }
    integer.prototype.increment = function (amount) {
        this.value += amount;
    };
    integer.prototype.decrement = function (amount) {
        this.value -= amount;
    };
    integer.prototype.multiply = function (amount) {
        this.value *= amount;
    };
    integer.prototype.divide = function (amount) {
        this.value /= amount;
    };
    integer.prototype.remainder = function (amount) {
        this.value %= amount;
    };
    integer.prototype.tostring = function () {
        return this.value.toString();
    };
    return integer;
})();
var infinity = (function () {
    function infinity() {
        this.value = Infinity;
    }
    infinity.prototype.get = function () {
        return this.value;
    };
    return infinity;
})();
var binarynum = (function () {
    function binarynum(value) {
        if (value === void 0) { value = 0; }
        this.value = value;
    }
    binarynum.prototype.tostring = function () {
        return this.value.toString(2);
    };
    binarynum.prototype.increment = function (amount) {
        this.value += amount;
    };
    binarynum.prototype.decrement = function (amount) {
        this.value -= amount;
    };
    binarynum.prototype.multiply = function (amount) {
        this.value *= amount;
    };
    binarynum.prototype.divide = function (amount) {
        this.value /= amount;
    };
    binarynum.prototype.remainder = function (amount) {
        this.value %= amount;
    };
    return binarynum;
})();
//# sourceMappingURL=Numbers.js.map