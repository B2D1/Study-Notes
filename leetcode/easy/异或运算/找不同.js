/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  let res = 0;
  for (let k of t) {
    res ^= k.charCodeAt();
  }
  for (let k of s) {
    res ^= k.charCodeAt();
  }
  return String.fromCharCode(res);
};

console.log(findTheDifference('a', 'aa'));
