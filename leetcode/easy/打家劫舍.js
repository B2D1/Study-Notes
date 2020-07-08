/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let steal = 0,
    preSteal = 0,
    notSteal = 0;
  for (const v of nums) {
    steal = notSteal + v; // 这次偷 = 上次不偷的数 + 这次可偷的数
    notSteal = Math.max(preSteal, notSteal); // 这次不偷 = 最大（上次偷的数，上次不偷的数）
    preSteal = steal;
  }
  return Math.max(steal, notSteal);
};


// [2,7,9,3,1]
// 12