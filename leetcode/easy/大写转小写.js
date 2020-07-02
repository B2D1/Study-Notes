/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function (str) {
  let newStr = '';
  for (let i in str) {
    let code = str[i].charCodeAt();
    newStr += code >= 65 && code <= 90 ? String.fromCharCode(code + 32) : str[i];
    // solution2
    // newStr += String.fromCharCode(code | 32);
  }
  return newStr;
};

console.log(toLowerCase('Hello'));
