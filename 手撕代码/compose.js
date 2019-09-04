let fn1 = a => a + 1;
let fn2 = b => b + 2;
let fn3 = c => c + 99;

const compose = (...fns) => {
    if (fns.length === 0) {
        return args => args;
    }
    return (...args) =>
        fns.reduceRight((composed, fn) => fn(composed), ...args);
};

console.log(
    compose(
        fn3,
        fn2,
        fn1
    )(100)
); // 相当于fn1(fn2(fn3(100)))
