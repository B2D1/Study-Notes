/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const m = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (m.has(nums[i]) && i - m.get(nums[i]) <= k) {
      return true;
    }
    m.set(nums[i], i);
  }
  return false;
};

//  给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，使得 nums [i] = nums [j]，并且 i 和 j 的差的 绝对值 至多为 k。
