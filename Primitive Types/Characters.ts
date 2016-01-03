/**
 * Created by Josh on 1/3/16.
 */
//file for implementing the character type

//supports ASCII
class character {
    symbol:string;
    constructor(symbol:string) {
        this.symbol = symbol;
    }
    tostring() {
        return this.symbol;
    }
}

class Ucharacter {
    //not implemented
}