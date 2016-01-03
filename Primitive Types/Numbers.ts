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
}