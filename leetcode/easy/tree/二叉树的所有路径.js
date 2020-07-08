/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  if (!root) return [];
  if (root.left === null && root.right === null) return [root.val.toString()];
  let left = binaryTreePaths(root.left);
  let right = binaryTreePaths(root.right);
  return left.concat(right).map((item) => root.val + '->' + item);
};
