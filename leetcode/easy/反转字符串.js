/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  // API
  // s.reverse();
  // 双指针
  const n = ~~(s.length / 2);
  for (let i = 0, j = 0; i < n; i++) {
    j = s.length - 1 - i;
    [s[i], s[j]] = [s[j], s[i]];
  }
};
