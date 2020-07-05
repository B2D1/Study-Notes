/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let len = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        if (!grid[i - 1] || (grid[i - 1] && !grid[i - 1][j])) len++; // top
        if (!grid[i + 1] || (grid[i + 1] && !grid[i + 1][j])) len++; // bottom
        if (!grid[i][j - 1] || (grid[i][j - 1] && !grid[i][j - 1])) len++; // left
        if (!grid[i][j + 1] || (grid[i][j + 1] && !grid[i][j + 1])) len++; // right
      }
    }
  }
  return len;
};

console.log(islandPerimeter([[1, 1]]));
