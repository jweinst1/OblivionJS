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


}

class Unitlist implements Linkedlist {
    list:Link;

    constructor(elements:any[]) {
        this.list = new Link(elements.shift());
        var current = this.list;
        while(elements.length>0) {
            current.rest = new Link(elements.shift());
            current = current.rest;
        }
    }
    get(key:number) {
        var current = this.list;
        while(current != null) {
            if(current.first==key) return key;
            else current = current.rest;
        }
        throw "Index Error";
    }
    append(val:number) {
        var current = this.list;
        while(current != null) current = current.rest;
        current.rest = new Link(val);
    }
}