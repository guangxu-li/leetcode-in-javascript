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
 * @return {number[]}
 */
const findFrequentTreeSum = function (root) {
  let max = 0;
  const sums = [];
  const calculate = (node) => {
    if (!node) {
      return 0;
    }

    const s = node.val + calculate(node.left, sums, max) + calculate(node.right, sums, max);
    sums[s] = (sums[s] || 0) + 1;
    max = Math.max(max, sums[s]);

    return s;
  };
  calculate(root);

  const nums = [];
  Object.entries(sums).forEach(([key, val]) => {
    if (val === max) {
      nums.push(key);
    }
  });
  return nums;
};
// @lc code=end
