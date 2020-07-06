/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (!matrix.length) return [];
  let res = [];
  let row, column;
  while (matrix.length) {
    row = matrix.length;
    column = matrix[0].length;
    if (column < 2 || row < 2) {
      return res.concat(
        matrix
          .toString()
          .split(',')
          .filter((v) => v)
          .map((v) => ~~v)
      );
    } else {
      // 遍历最外层
      res = res.concat(matrix[0]);
      for (let i = 1; i < row - 1; i++) {
        res.push(matrix[i][column - 1]);
      }
      res = res.concat([...matrix[row - 1]].reverse());
      for (let i = row - 2; i > 0; i--) {
        res.push(matrix[i][0]);
      }
    }
    // 清除最外层
    matrix.shift();
    matrix.pop();
    for (let j = 0; j < matrix.length; j++) {
      matrix[j].shift();
      matrix[j].pop();
    }
  }
  return res;
};

s = spiralOrder([
  [1, 11],
  [2, 12],
  [3, 13],
  [4, 14],
]);
s;
// [1,2,3,4,8,12,11,10,9,5,6,7]
