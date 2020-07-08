/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let cur = head,
    prev = null;
  while (cur) {
    if (cur.val === val && head === cur) {
      // 头部特殊情况
      head = cur.next;
      cur = head;
    } else if (cur.val === val) {
      // 移除cur
      prev.next = cur.next;
      cur = cur.next;
    } else {
      // 指针指向下一个节点
      prev = cur;
      cur = cur.next;
    }
  }
  return head;
};
