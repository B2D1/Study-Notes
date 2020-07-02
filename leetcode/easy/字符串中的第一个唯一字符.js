/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const m = new Map();
  for (let i of s) {
    let count = m.get(i) || 0;
    m.set(i, count + 1);
  }
  for (let i of s) {
    if (m.get(i) === 1) return i;
  }
};

console.log(firstUniqChar('leetcode'));
