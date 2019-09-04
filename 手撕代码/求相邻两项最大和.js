// let arr1 = [-1, 3, 1, -5, 2]; // => 4
const handler = arr => {
    let prev = arr[0];
    let sumArr = [];
    for (let i = 1; i < arr.length; i++) {
        let sum = arr[i] + prev;
        prev = arr[i];
        sumArr.push(sum);
    }
    return Math.max(...sumArr);
};

console.log(handler([-1, 3, 1, -5, 2]));
