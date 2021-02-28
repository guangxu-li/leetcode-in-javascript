/*
 * @lc app=leetcode id=1302 lang=javascript
 *
 * [1302] Deepest Leaves Sum
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
var deepestLeavesSum = function (root) {
    const nodes = [];
    nodes.push(root);
    let sum = 0;

    while (nodes.length) {
        let size = nodes.length;
        sum = 0;

        while (size--) {
            const node = nodes.shift();
            sum += node.val;

            if (node.left) nodes.push(node.left);
            if (node.right) nodes.push(node.right);
        }
    }

    return sum;
};
// @lc code=end

