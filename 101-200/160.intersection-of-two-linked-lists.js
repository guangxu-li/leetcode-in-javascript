/*
 * @lc app=leetcode id=160 lang=javascript
 *
 * [160] Intersection of Two Linked Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) {
    return null;
  }

  let tail = headA;
  while (tail.next != null) {
    tail = tail.next;
  }
  tail.next = headA;

  let hare = headB;
  let tortoise = headB;
  while (hare && hare.next) {
    tortoise = tortoise.next;
    hare = hare.next.next;

    if (hare === tortoise) {
      break;
    }
  }

  if (!hare || !hare.next) {
    tail.next = null;
    return null;
  }

  tortoise = headB;
  while (tortoise !== hare) {
    tortoise = tortoise.next;
    hare = hare.next;
  }

  tail.next = null;
  return hare;
};
// @lc code=end
