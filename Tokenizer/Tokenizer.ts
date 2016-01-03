/**
 * Created by Josh on 1/1/16.
 */

class tokenutils {

    static splitby(char:string, text:string): string[] {
        return text.split(char);
    }
    //applies matching across many strings and returns an area with matches
    static containsmatch(splits:string[], temp:RegExp): string[] {
        var newstrings = [];
        for(var num in splits) if(temp.test(splits[num])) newstrings.push(splits[num]);
        return newstrings;
    }
    static findallmatches(text:string, temp:string): string[] {
        var pattern = new RegExp(temp, "g");
        return text.match(pattern);
    }
}

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

class Tokenizer {

}