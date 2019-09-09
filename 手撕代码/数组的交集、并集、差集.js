let arrA = [2, 99, 3, -1, 4];
let arrB = [4, 6, 99, -1, 21];

let arrC = arrA.filter(v => {
    return arrB.indexOf(v) !== -1;
});

let arrD = arrB.filter(v => {
    return arrC.indexOf(v) === -1;
});

console.log(arrC); // AB的交集
console.log([...new Set([...arrA, ...arrB])]); // AB的并集
console.log(arrD); // B的差集
