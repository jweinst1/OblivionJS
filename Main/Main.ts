/**
 * Created by Josh on 1/3/16.
 */
//MAIN FILE FOR VM

//top level virtual machine object
class Oblivion {
    arithmetic:arithopers;
    constructor() {
        this.arithmetic = new arithopers();
    }
    //only works on integers and math processing so far.
    process(commands:string) {
        var tokens = commands.split(" ");
        var currentvar = null;
        for(var num in tokens) {
            var token = tokens[num].split("->");
            currentvar = this.arithmetic[token[0]](token[1]);
        }
        return currentvar;
    }
}

class arithopers {
    int:Function;
    add:Function;
    sub:Function;
    mul:Function;
    div:Function;
    rem:Function;
    constructor() {
        this.int = function(amount:string) {
            return new integer(parseInt(amount));
        };
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