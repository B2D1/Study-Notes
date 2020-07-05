/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
  //   nums.sort();
  //   for (let i = 0; i < nums.length; i++) {
  //     if (nums[i] === nums[i + 1]) {
  //       return nums[i];
  //     }
  //   }
  const s = new Set();
  for (let v of nums) {
    let len = s.size;
    s.add(v);
    if (s.size === len) {
      return v;
    }
  }
};

s = findRepeatNumber([2, 3, 1, 0, 2, 5, 3]);

console.log(s);
