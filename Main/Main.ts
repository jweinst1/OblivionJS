/**
 * Created by Josh on 1/3/16.
 */
//MAIN FILE FOR VM

//top level virtual machine object
class Oblivion {
    arithmetic:arithopers;
    values:valueopers;
    constructor() {
        this.arithmetic = new arithopers();
        this.values = new valueopers();
    }
    //only works on integers and math processing so far.
    //takes an array of tokens.
    process(commands:Token[]) {
        var current = null;
        for(var num in commands) {
            switch(commands[num].code) {
                case "int": current = this.values[commands[num].code](commands[num].val);
                    break;
                default: current = this.arithmetic[commands[num].code](current, parseInt(commands[num].val));
                    break;
            }
        }
        return current;
    }
}

class arithopers {
    add:Function;
    sub:Function;
    mul:Function;
    div:Function;
    rem:Function;
    constructor() {
        this.add = function(num:numvalue, amount) {
            num.increment(amount);
            return num;
        };
        this.sub = function (num:numvalue, amount) {
            num.decrement(amount);
            return num;
        };
        this.mul = function (num:numvalue, amount) {
            num.multiply(amount);
            return num;
        };
        this.div = function (num:numvalue, amount) {
            num.divide(amount);
            return num;
        };
        this.rem = function (num:numvalue, amount) {
            num.remainder(amount);
            return num;
        }
    }
}

class valueopers {
    int:Function;
    binary:Function;
    constructor() {
        this.int = function(value:string) {
            return new integer(parseInt(value));
        };
        this.binary = function(value:string) {
            return new binarynum();
        }
    }

}
//interfaces for numbers
interface numvalue {

    tostring:() => string;
    increment:(amount:any) => void;
    decrement:(amount:any) => void;
    multiply:(amount:any) => void;
    divide:(amount:any) => void;
    remainder:(amount:number) => void;
}

class integer implements numvalue {
    value:number;
    constructor(value:number) {
        this.value = value;
    }
    increment(amount:number) {
        this.value += amount;
    }
    decrement(amount:number) {
        this.value -= amount;
    }
    multiply(amount:number) {
        this.value *= amount;
    }
    divide(amount:number) {
        this.value /= amount;
    }
    remainder(amount:number) {
        this.value %= amount;
    }
    tostring():string {
        return this.value.toString();
    }
}

class binarynum implements numvalue {
    value:number;
    constructor(value:number=0) {
        this.value = value;
    }
    tostring() {
        return this.value.toString(2);
    }
    increment(amount:number) {
        this.value += amount;
    }
    decrement(amount:number) {
        this.value -= amount;
    }
    multiply(amount:number) {
        this.value *= amount;
    }
    divide(amount:number) {
        this.value /= amount;
    }
    remainder(amount:number) {
        this.value %= amount;
    }
}

class Tokenizer {
    static tokenize(input:string) {
        var tokenstrs = input.split(" ");
        var tokens = [];
        for(var num in tokenstrs) tokens.push(new Token(tokenstrs[num]));
        return tokens;
    }
}
//main Token class
class Token {
    code:string;
    val:string;
    constructor(input:string){
        var pair = input.split("->");
        this.val = pair[1];
        this.code = pair[0];
    }
}

var test = new Oblivion();
var putin = Tokenizer.tokenize("int->5 add->4 sub->6 mul->4");
console.log(test.process(putin));