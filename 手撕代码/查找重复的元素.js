// 例如：[1，2，4，4，3，3，1，5，3]
// 输出：[1，3，4]
let arr = [1, 2, 4, 4, 3, 3, 1, 5, 3];

const repeat = arr => {
    let map = {};
    let result = [];
    arr.forEach(v => {
        if (map[v] === 1) {
            result.push(v);
        }
        map[v] = (map[v] || 0) + 1;
    });
    return result;
};

console.log(repeat(arr));
