/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head) return head; // 链表为空，直接返回
  let prev = head,
    temp;
  while (head.next) {
    temp = head.next;
    head.next = temp.next;
    temp.next = prev;
    prev = temp;
  }
  return prev;
};
