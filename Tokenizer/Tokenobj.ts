/**
 * Created by Josh on 1/3/16.
 */

//basic interface for stack classes
interface stack {
    container:any[];
    push:(element:any) => void;
    pop:() => any;
    checktop:() => any;
    length:() => number;
}

class token {
    text:string;
    command:string;
    value:any;
    constructor(text:string, command:string, value:any) {
        this.text = text;
        this.command = command;
        this.value = value;
    }
}