/**
 * Created by Josh on 1/3/16.
 */
//MAIN FILE FOR VM
//top level virtual machine object
var Oblivion = (function () {
    function Oblivion() {
        this.arithmetic = new arithopers();
        this.values = new valueopers();
    }
    //only works on integers and math processing so far.
    //takes an array of tokens.
    Oblivion.prototype.process = function (commands) {
        var current = null;
        for (var num in commands) {
            switch (commands[num].code) {
                case "int":
                    current = this.values[commands[num].code](commands[num].val);
                    break;
                default:
                    current = this.arithmetic[commands[num].code](current, parseInt(commands[num].val));
                    break;
            }
        }
        return current;
    };
    return Oblivion;
})();
var arithopers = (function () {
    function arithopers() {
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
var valueopers = (function () {
    function valueopers() {
        this.int = function (value) {
            return new integer(parseInt(value));
        };
        this.binary = function (value) {
            return new binarynum();
        };
    }
    return valueopers;
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
var Tokenizer = (function () {
    function Tokenizer() {
    }
    Tokenizer.tokenize = function (input) {
        var tokenstrs = input.split(" ");
        var tokens = [];
        for (var num in tokenstrs)
            tokens.push(new Token(tokenstrs[num]));
        return tokens;
    };
    return Tokenizer;
})();
//main Token class
var Token = (function () {
    function Token(input) {
        var pair = input.split("->");
        this.val = pair[1];
        this.code = pair[0];
    }
    return Token;
})();
var test = new Oblivion();
var putin = Tokenizer.tokenize("int->5 add->4 sub->6 mul->4");
console.log(test.process(putin));
//# sourceMappingURL=Main.js.map
