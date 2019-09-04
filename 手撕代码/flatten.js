// [[1, 2], 3, [[[4], 5]]]

const flatten = arr => {
    return [].concat(...arr.map((v, i) => (Array.isArray(v) ? flatten(v) : v)));
};

const res = flatten([[1, 2], 3, [[[4], 5]]]);

console.log(res);
