/**
 * Created by Josh on 1/2/16.
 */
//file for implementing boolean types, true and false
var bool = (function () {
    function bool(state) {
        this.state = state;
    }
    bool.prototype.changestate = function () {
        if (this.state == true)
            this.state = false;
        else
            this.state = true;
    };
    bool.prototype.getstate = function () {
        return this.state;
    };
    return bool;
})();
//default true value
var TRUE = (function () {
    function TRUE() {
        this.state = true;
    }
    return TRUE;
})();
//default false value
var FALSE = (function () {
    function FALSE() {
        this.state = false;
    }
    return FALSE;
})();
//# sourceMappingURL=Booleans.js.map