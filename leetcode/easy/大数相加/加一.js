/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  // BigInt
  return (BigInt(digits.join('')) + 1n).toString().split('').map(Number);
  // 模拟加法
};

s = plusOne([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
s;
