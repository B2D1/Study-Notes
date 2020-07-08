/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function (root) {
  if (!root) return [];
  let res = [];
  res.push(root.val);
  for (let i = root.children.length - 1; i >= 0; i--) {
    res = postorder(root.children[i]).concat(res);
  }
  return res;
};
