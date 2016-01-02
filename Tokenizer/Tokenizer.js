/**
 * Created by Josh on 1/1/16.
 */
var tokenutils = (function () {
    function tokenutils() {
    }
    tokenutils.splitby = function (char, text) {
        return text.split(char);
    };
    //applies matching across many strings and returns an area with matches
    tokenutils.containsmatch = function (splits, temp) {
        var newstrings = [];
        for (var num in splits)
            if (temp.test(splits[num]))
                newstrings.push(splits[num]);
        return newstrings;
    };
    tokenutils.findallmatches = function (text, temp) {
        var pattern = new RegExp(temp, "g");
        return text.match(pattern);
    };
    return tokenutils;
})();
//# sourceMappingURL=Tokenizer.js.map