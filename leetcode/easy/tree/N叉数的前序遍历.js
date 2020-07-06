/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
  if (!root) return [];
  let res = [];
  root.children && res.push(root.val);
  for (let i = 0; i < root.children.length; i++) {
    res = res.concat(preorder(root.children[i]));
  }
  return res;
};
