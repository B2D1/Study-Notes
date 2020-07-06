/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function (root) {
  // BFS
  // if (!root) return 0;
  // let queue = [root], n = 0;
  // while (queue.length) {
  //     let len = queue.length;

  //     while (len--) {
  //         const first = queue.shift();
  //         if (first.children) queue = queue.concat(first.children);
  //     }
  //     n++;
  // }
  // return n;
  // DFS
  if (!root) return 0;
  if (!root.children) return 1;
  let max = 0;
  for (let i = 0; i < root.children.length; i++) {
    let childDepth = maxDepth(root.children[i]);
    max = Math.max(childDepth, max);
  }
  return max + 1;
};
