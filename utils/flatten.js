const flatten = (arr) => [].concat(...arr.map((v) => (Array.isArray(v) ? flatten(v) : v)));

const res = flatten([[1, 2], 3, [[[4], 5]]]);

console.log(res);
