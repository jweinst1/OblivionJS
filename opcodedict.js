/**
 * Created by Josh on 1/3/16.
 */
//file for testing opcode creation

//captures a name and function in a js object
function putfunc(name, func) {
    return {name:func}
}
//puts a function in another object
function updatefunc(name, func, dict) {
    dict[name] = func;
}

function createfunc(name, paramter, command) {
    return {name:new Function(paramter, command)};
}
//creates function using eval
function create_eval(funcstring) {
    eval(funcstring);
    return fn;
}



