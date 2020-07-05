/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // 递归版
  //   return binarySearch(nums, 0, nums.length - 1, target);
  // 非递归版
  let left = 0,
    right = nums.length - 1,
    pivot;
  while (left <= right) {
    pivot = ~~((left + right) / 2);
    if (nums[pivot] > target) {
      right = pivot - 1;
    } else if (nums[pivot] < target) {
      left = pivot + 1;
    } else {
      return pivot;
    }
  }
};

var binarySearch = function (nums, low, high, target) {
  if (low > high) return -1;
  const pivot = ~~((low + high) / 2);
  const pivotValue = nums[pivot];
  if (pivotValue > target) {
    return binarySearch(nums, low, pivot - 1, target);
  } else if (pivotValue < target) {
    return binarySearch(nums, pivot + 1, high, target);
  } else {
    return pivot;
  }
};

s = search([-1, 0, 3, 5, 9, 12], 9);
s;
