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
    }
    return Unitlist;
})();
//# sourceMappingURL=Linkedlist.js.map