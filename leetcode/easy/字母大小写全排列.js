/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function (S) {
  let arr = S.split('');
  let letterArr = arr.filter((v) => isNaN(v));
  if (!letterArr.length) return [S];
  letterArr = letterArr.map((v) => v.toLowerCase());
  let numArr = arr.filter((v) => !isNaN(v));
  let numIndexArr = [];
  arr.forEach((v, i) => {
    if (!isNaN(v)) numIndexArr.push(i);
  });
  let ans = [letterArr[0], letterArr[0].toUpperCase()];
  for (let i = 1; i < letterArr.length; i++) {
    ans = ans.concat([...ans]);
    let len = ans.length / 2 - 1;
    ans = ans.map((v, index) => {
      return index <= len ? v + letterArr[i] : v + letterArr[i].toUpperCase();
    });
  }
  ans = ans.map((v) => {
    v = v.split('');
    for (let i in numIndexArr) {
      v.splice(numIndexArr[i], 0, numArr[i]);
    }
    return v.join('');
  });
  return ans;
};

s = letterCasePermutation('03fH');
s; // ["03fh","03fH","03Fh","03FH"]
