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
 var univalSubtrees = function(root) {
    if (!root.left && !root.right) {
        return 1;
    }

    let cnt = 0, left = 0, right = 0, flag = 1;
    if (root.left) {
        left = univalSubtrees(root.left);
        flag &= left > 0 && root.val == root.left.val;
    }

    if (root.right) {
        right = univalSubtrees(root.right);
        flag &= right > 0 && root.val == root.right.val;
    }

    cnt += Math.abs(left) + Math.abs(right);
    return flag ? 1 + cnt : -cnt;
 }

/**
 * @param {TreeNode} root
 * @return {number}
 */
var countUnivalSubtrees = function(root) {
    return root && Math.abs(univalSubtrees(root));
};
// @lc code=end

