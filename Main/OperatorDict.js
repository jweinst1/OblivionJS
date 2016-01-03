/**
 * Created by Josh on 1/3/16.
 */
//all functions must be in a single variable.
var operatordict = (function () {
    function operatordict() {
        this.funcs = {};
    }
    //adds a function to the dict
    operatordict.prototype.addfunc = function (name, fparameter, fcommand) {
        this.funcs[name] = new Function(fparameter, fcommand);
    };
    return operatordict;
})();
//provides functional interface for changing integers, and O(1) time of process.
var arithopers = (function () {
    function arithopers() {
        this.add = function (num, amount) {
            num.increment(amount);
        };
        this.sub = function (num, amount) {
            num.decrement(amount);
        };
        this.mul = function (num, amount) {
            num.multiply(amount);
        };
        this.div = function (num, amount) {
            num.divide(amount);
        };
        this.rem = function (num, amount) {
            num.remainder(amount);
        };
    }
    return arithopers;
})();
//# sourceMappingURL=OperatorDict.js.map