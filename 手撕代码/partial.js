function partial(...args) {
    const fn = args.splice(0, 1)[0];
    return function(..._args) {
        let pos = 0;
        for (let i = 0; i < args.length; i++) {
            args[i] = args[i] === '_' ? _args[pos++] : args[i];
        }
        while (pos < _args.length) {
            args.push(_args[pos++]);
        }
        return fn.apply(this, args);
    };
}

function add(x, y, z) {
    return x + y + z;
}

const partialAdd = partial(add, '_', 10);

console.log(partialAdd(100, 1000));
