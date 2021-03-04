/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function (nums) {
  return nums.reduce((res, num, i) => res ^ num ^ i, nums.length);
};
// @lc code=end
