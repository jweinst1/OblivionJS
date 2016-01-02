/**
 * Created by Josh on 1/1/16.
 */
//interface for oper units
interface oper {
    sign:any;
    units:any[];
    operation:(unit:any) => void;
    tostring:() => string;
}

class plusoper implements oper {
    sign:string;
    units:string[];
    constructor() {
        this.sign = "+";
        this.units = ["I", "D"];
    }
    operation:(unit:number) => {};
    tostring:() => string;
}

