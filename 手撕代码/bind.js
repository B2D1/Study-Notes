Function.prototype._bind = function(...args) {
    const context = args.splice(0, 1)[0];
    const fn = this;
    return function(..._args) {
        return fn.apply(context, [...args, ..._args]);
    };
};

Function.prototype._call = function(...args) {
    const context = args.splice(0, 1)[0];
    let res;
    context.fn = this;
    res = context.fn(...args);
    delete context.fn;
    return res;
};

Function.prototype._apply = function() {
    const context = args.splice(0, 1)[0];
    let res;
    context.fn = this;
    res = context.fn(...args);
    delete context.fn;
    return res;
};

let obj = { id: 24 };

function fn1(x, y, z) {
    console.log(this, arguments);
}
let bar = fn1._call(obj, 1, 2, 3);
let foo = fn1._bind(obj, 2);
// foo(3, 4);
