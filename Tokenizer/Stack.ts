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