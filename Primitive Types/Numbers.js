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
    return integer;
})();
//# sourceMappingURL=Numbers.js.map