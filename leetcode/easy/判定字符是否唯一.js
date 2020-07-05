/**
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function (astr) {
  // return astr.length === new Set(astr).size;
  for (let i = 0; i < astr.length - 1; i++) {
    for (j = i + 1; j <= astr.length - 1; j++) {
      if (astr[i] === astr[j]) {
        return false;
      }
    }
  }
  return true;
};

s = isUnique('abc');
s;
