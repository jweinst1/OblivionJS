/**
 * Created by Josh on 1/3/16.
 */
//MAIN FILE FOR VM
//top level virtual machine object
var Oblivion = (function () {
    function Oblivion() {
        this.arithmetic = new arithopers();
    }
    //only works on integers and math processing so far.
    Oblivion.prototype.process = function (commands) {
        var tokens = commands.split(" ");
        var currentvar = null;
        for (var num in tokens) {
            var token = tokens[num].split("->");
            currentvar = this.arithmetic[token[0]](token[1]);
        }
        return currentvar;
    };
    return Oblivion;
})();
var arithopers = (function () {
    function arithopers() {
        this.int = function (amount) {
            return new integer(parseInt(amount));
        };
        this.add = function (num, amount) {
            num.increment(amount);
            return num;
        };
        this.sub = function (num, amount) {
            num.decrement(amount);
            return num;
        };
        this.mul = function (num, amount) {
            num.multiply(amount);
            return num;
        };
        this.div = function (num, amount) {
            num.divide(amount);
            return num;
        };
        this.rem = function (num, amount) {
            num.remainder(amount);
            return num;
        };
    }
    return arithopers;
})();
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
//# sourceMappingURL=Main.js.map