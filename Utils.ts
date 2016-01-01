/**
 * Created by Josh on 12/31/15.
 */

class character {
    public symbol: string;
    public match: RegExp;
    public search: Function;
    constructor(symbol: string) {
        this.symbol = symbol;
        this.match = new RegExp(symbol, "g");
        this.search = (text:string) => {return text.search(this.match)}
    }
}



var t = new character("f");
console.log(t.search("is fun"));