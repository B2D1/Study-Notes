/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // 公式法
  const sqrt5 = Math.sqrt(5);
  return ~~((Math.pow((1 + sqrt5) / 2, n + 1) - Math.pow((1 - sqrt5) / 2, n + 1)) / sqrt5);
  // 递推法
  if (n < 4) return n;
  let farther = 2,
    far = 3;
  var res = 0;
  for (let i = 4; i <= n; i++) {
    res = farther + far;
    farther = far;
    far = res;
  }
  return res;
};

s = climbStairs(4);
s;
