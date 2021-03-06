/*
 * @lc app=leetcode id=371 lang=javascript
 *
 * [371] Sum of Two Integers
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const getSum = function (a, b) {
  while (b) {
    [a, b] = [a ^ b, (a & b) << 1];
  }

  return a;
};
// @lc code=end
