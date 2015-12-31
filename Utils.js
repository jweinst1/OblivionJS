/**
 * Created by Josh on 12/31/15.
 */
var character = (function () {
    function character(symbol) {
        var _this = this;
        this.symbol = symbol;
        this.match = new RegExp(symbol, "g");
        this.search = function (text) { return text.search(_this.match); };
    }
    return character;
})();
var t = new character("f");
console.log(t.search("is fun"));
//# sourceMappingURL=Utils.js.map