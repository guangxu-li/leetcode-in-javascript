/*
 * @lc app=leetcode id=572 lang=javascript
 *
 * [572] Subtree of Another Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
const preorder = (s) => {
  if (!s) {
    return null;
  }

  return `#${s.val}${preorder(s.left)}${preorder(s.right)}`;
};

const isSubtree = function (s, t) {
  const ss = preorder(s);
  const st = preorder(t);

  return ss.includes(st);
};
// @lc code=end
