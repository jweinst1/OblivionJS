/**
 * Created by Josh on 1/2/16.
 */
//file for implementing boolean types, true and false


class bool {
    state:boolean;
    constructor(state:boolean) {
        this.state = state;
    }
    changestate() {
        if(this.state == true) this.state = false;
        else this.state = true;
    }
    getstate() {
        return this.state
    }
}
//default true value
class TRUE {
    state:boolean;
    constructor() {
        this.state = true;
    }
}
//default false value
class FALSE {
    state:boolean;
    constructor() {
        this.state = false;
    }
}