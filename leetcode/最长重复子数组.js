/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function (A, B) {
  if (A.toString() === B.toString()) return A.length;
  let max = 0;
  var compareFirst = function (A, B) {
    if (A.length === 0 || B.length === 0) return 0;
    if (A[0] === B[0]) {
      return 1 + compareFirst(A.slice(1), B.slice(1));
    } else {
      return 0;
    }
  };
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      if (A[i] === B[j]) {
        let res = 1 + compareFirst(A.slice(i + 1), B.slice(j + 1));
        if (max < res) {
          max = res;
        }
      }
    }
  }
  return max;
};

// console.log(findLength(A, B));
