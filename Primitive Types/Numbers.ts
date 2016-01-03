/**
 * Created by Josh on 1/2/16.
 */

class integer {
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

class infinity {
    value:number;
    constructor() {
        this.value = Infinity;
    }
    get():number {
        return this.value;
    }
}

class binarynum {
    value:number;
    constructor(value:number=0) {
        this.value = value;
    }
    get() {
        return this.value.toString(2);
    }
}