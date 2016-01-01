/**
 * Created by Josh on 12/31/15.
 */
var numset = (function () {
    function numset(elements) {
        this.collection = {};
        for (var elem in elements)
            this.collection[elements[elem]] = true;
    }
    numset.prototype.contains = function (element) {
        return element in this.collection;
    };
    numset.prototype.add = function (element) {
        this.collection[element] = true;
    };
    numset.prototype.remove = function (element) {
        delete this.collection[element];
    };
    numset.prototype.toarray = function () {
        var arr = [];
        for (var key in this.collection)
            arr.push(key);
        return arr;
    };
    return numset;
})();
var test = new numset([1, 2, 3, 4]);
console.log(test.contains(3));
//# sourceMappingURL=Sets.js.map