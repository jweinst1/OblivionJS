/**
 * Created by Josh on 12/31/15.
 */

//general set interface
interface set {
    collection: {};

    contains:(element:any) => boolean;

    add:(element:any) => void;

    remove:(element:any) => void;

    toarray:() => any[];
}

class numset implements set {
    collection: {};
    constructor(elements:number[]) {
        this.collection = {};
        for(var elem in elements) this.collection[elements[elem]] = true;
    }
    contains(element:number) {
        return element in this.collection
    }
    add(element:number) {
        this.collection[element] = true;
    }
    remove(element:number) {
        delete this.collection[element]
    }
    toarray() {
        var arr = [];
        for(var key in this.collection) arr.push(key);
        return arr;
    }
}


var test = new numset([1, 2, 3, 4]);
console.log(test.contains(3));