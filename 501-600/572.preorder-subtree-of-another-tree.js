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
var preorder = function(s) {
    if (!s) {
        return null; 
    }

    return "#" + s.val + preorder(s.left) + preorder(s.right);
}

var isSubtree = function(s, t) {
    let ss = preorder(s), st = preorder(t);

    return ss.includes(st);
};
// @lc code=end

