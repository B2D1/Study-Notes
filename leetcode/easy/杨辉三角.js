/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows === 0) return [];
  if (numRows === 1) return [[1]];
  const arr = [[1], [1, 1]];
  for (let i = 2; i < numRows; i++) {
    arr[i] = [];
    arr[i][0] = arr[i][i] = 1;
    for (let j = 1; j < i; j++) {
      arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j];
    }
  }
  return arr;
};

s = generate(5);
console.log(s);
