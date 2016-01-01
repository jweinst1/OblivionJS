/**
 * Created by Josh on 12/31/15.
 */
//File for implementing a linked list interface
var Link = (function () {
    function Link(head, next) {
        if (next === void 0) { next = null; }
        this.first = head;
        this.rest = next;
    }
    Link.prototype.setvalue = function (val) {
        this.first = val;
    };
    return Link;
})();
var Unitlist = (function () {
    function Unitlist(elements) {
        this.list = new Link(elements.shift());
        var current = this.list;
        while (elements.length > 0) {
            current.rest = new Link(elements.shift());
            current = current.rest;
        }
    }
    Unitlist.prototype.get = function (key) {
        var current = this.list;
        while (current != null) {
            if (current.first == key)
                return key;
            else
                current = current.rest;
        }
        throw "Index Error";
    };
    Unitlist.prototype.append = function (val) {
        var current = this.list;
        while (current != null)
            current = current.rest;
        current.rest = new Link(val);
    };
    return Unitlist;
})();
//# sourceMappingURL=Linkedlist.js.map