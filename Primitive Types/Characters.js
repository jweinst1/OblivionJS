/**
 * Created by Josh on 1/3/16.
 */
//file for implementing the character type
//supports ASCII
var character = (function () {
    function character(symbol) {
        this.symbol = symbol;
    }
    character.prototype.tostring = function () {
        return this.symbol;
    };
    return character;
})();
var Ucharacter = (function () {
    function Ucharacter() {
    }
    return Ucharacter;
})();
//# sourceMappingURL=Characters.js.map