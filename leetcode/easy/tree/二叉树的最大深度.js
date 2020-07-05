/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  // BFS
  if (!root) return 0;
  let n = 0;
  const queue = [root];
  while (queue.length) {
    let len = queue.length;
    while (len--) {
      root = queue.shift();
      if (root.left) queue.push(root.left);
      if (root.right) queue.push(root.right);
    }
    n++;
  }
  return n;
  // DFS
  if (!root) return 0;
  var max = 1;
  function helper(root, level) {
    max = Math.max(max, level);
    if (root.left) {
      helper(root.left, level + 1);
    }
    if (root.right) {
      helper(root.right, level + 1);
    }
  }
  helper(root, max);
  return max;
};
