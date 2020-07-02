/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let res = 0;
  for (let num of nums) {
    res ^= num;
  }
  return res;
};

// 时间复杂度：O(n) 空间复杂度：O(1)
// 利用异或运算的三大特性：
// 一个数和 0 做 XOR 运算等于本身：a^0 = a
// 一个数和其本身做 XOR 运算等于 0：a^a = 0
// XOR 运算满足交换律和结合律：a^b^a = (a^a)^b = 0^b = b

console.log(singleNumber([4, 1, 2, 1, 2]));
