/**
 * Created by Josh on 1/3/16.
 */

    //all functions must be in a single variable.
class operatordict {
    funcs:any;
    constructor() {
        this.funcs = {};
    }
    //adds a function to the dict
    addfunc(name:string, fparameter:string, fcommand:string) {
        this.funcs[name] = new Function(fparameter, fcommand);
    }
}
//provides functional interface for changing integers, and O(1) time of process.
class arithopers {
    add:Function;
    sub:Function;
    mul:Function;
    div:Function;
    rem:Function;
    constructor() {
        this.add = function(num:numvalue, amount) {
            num.increment(amount);
        };
        this.sub = function (num:numvalue, amount) {
            num.decrement(amount);
        };
        this.mul = function (num:numvalue, amount) {
            num.multiply(amount);
        };
        this.div = function (num:numvalue, amount) {
            num.divide(amount);
        };
        this.rem = function (num:numvalue, amount) {
            num.remainder(amount);
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