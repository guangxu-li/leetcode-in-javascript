/*
 * @lc app=leetcode id=1769 lang=javascript
 *
 * [1769] Minimum Number of Operations to Move All Balls to Each Box
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
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    const moves = [];
    for (let i = 0, ops = 0, balls = 0; i < boxes.length; i++) {
        moves[i] += ops;
        balls += boxes.charAt(i) - '0';
        ops += balls;
    }

    for (let i = boxes.length - 1, ops = 0, balls = 0; i >= 0; i--) {
        moves[i] += ops;
        balls += boxes.charAt(i) - '0';
        ops += balls;
    }

    return moves;
};
// @lc code=end

