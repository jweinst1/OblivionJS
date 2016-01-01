/**
 * Created by Josh on 12/31/15.
 */
//File for implementing a linked list interface

class Link {
    first: any;
    rest: any;
    constructor(head:any, next:any=null) {
        this.first = head;
        this.rest = next;
    }
    setvalue(val:any) {
        this.first = val;
    }
}

interface Linkedlist {
    list:Link;

    get:(key:any) => any;

    append:(val:any) => void;

    insert:(val:any) => void;

}

class Unitlist implements Linkedlist {
    list:Link;

    constructor(elements:any[]) {
        
    }
}