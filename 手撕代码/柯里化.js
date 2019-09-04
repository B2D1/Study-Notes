function currying(fn, ...arguments) {
    const len = fn.length;
    let args = arguments;
    return function curried(..._args) {
        args = [...args, ..._args];
        if (args.length < len) {
            return function(..._args) {
                return curried.apply(null, _args);
            };
        }
        return fn.apply(null, args);
    };
}

const add = (x, y, z) => x + y + z;
const newAdd = currying(add, 200);
const res = newAdd(2)(3);
console.log(res);
