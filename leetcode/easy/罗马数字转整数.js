/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let ans = 0;
  const map = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };
  for (let i = 0; i < s.length; ) {
    if (s[i + 1] && map[s.substr(i, 2)]) {
      ans += map[s.substr(i, 2)];
      i += 2;
    } else {
      ans += map[s[i]];
      i += 1;
    }
  }
  return ans;
};

s = romanToInt('MCMXCIV');
s;
