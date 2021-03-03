/*
 * @lc app=leetcode id=250 lang=javascript
 *
 * [250] Count Univalue Subtrees
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
 * @param {TreeNode} root
 * @return {number}
 */
const countUnivalSubtrees = function (root) {
  const univalSubtrees = (node) => {
    if (!node.left && !node.right) {
      return 1;
    }

    let cnt = 0;
    let left = 0;
    let right = 0;
    let flag = 1;
    if (node.left) {
      left = univalSubtrees(node.left);
      flag = left > 0 && node.val === node.left.val;
    }

    if (node.right) {
      right = univalSubtrees(node.right);
      flag &= right > 0 && node.val === node.right.val;
    }

    cnt += Math.abs(left) + Math.abs(right);
    return flag ? 1 + cnt : -cnt;
  };

  return root && Math.abs(univalSubtrees(root));
};
// @lc code=end
