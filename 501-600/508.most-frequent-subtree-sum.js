/*
 * @lc app=leetcode id=508 lang=javascript
 *
 * [508] Most Frequent Subtree Sum
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
 * @param {Map} sums
 * @param {Obj} max
 * @return {void}
 */
var calculate = function (root, sums, max) {
    if (!root) {
        return 0;
    }

    const s = root.val + calculate(root.left, sums, max) + calculate(root.right, sums, max);
    sums[s] = (sums[s] || 0) + 1;
    max.val = Math.max(max.val, sums[s])

    return s;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findFrequentTreeSum = function (root) {
    const max = { val: 0 };
    const sums = [];
    calculate(root, sums, max);

    let nums = [];
    for (const key in sums) {
        if (sums[key] == max.val) {
            nums.push(key);
        }
    }

    return nums;
};
// @lc code=end

