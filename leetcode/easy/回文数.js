/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  let n = 10 ** ~~Math.log10(x);
  while (x > 1 && n > 1) {
    if (~~(x / n) !== x % 10) return false;
    x = ~~((x % n) / 10);
    n /= 100;
  }
  return true;
};

console.log(isPalindrome(121));
