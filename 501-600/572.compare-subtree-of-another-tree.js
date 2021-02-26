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
var equal = function(s, t) {
    if (!s && !t) {
        return true;
    }

    if (!s || !t) {
        return false;
    }

    return s.val == t.val && equal(s.left, t.left) && equal(s.right, t.right);
}

/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
    if (!s) {
        return !t;
    }

    return equal(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t);
};
// @lc code=end

