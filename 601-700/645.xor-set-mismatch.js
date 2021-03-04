/*
 * @lc app=leetcode id=645 lang=javascript
 *
 * [645] Set Mismatch
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findErrorNums = function (nums) {
  let xor = nums.reduce((res, num, i) => res ^ num ^ (i + 1), 0);
  xor &= -xor;

  let xor0 = 0;
  let xor1 = 0;

  nums.forEach((num, i) => {
    xor0 ^= num & xor ? 0 : num;
    xor1 ^= num & xor ? num : 0;

    xor0 ^= (i + 1) & xor ? 0 : i + 1;
    xor1 ^= (i + 1) & xor ? i + 1 : 0;
  });

  if (nums.some((num) => num === xor0)) {
    return [xor0, xor1];
  }
  return [xor1, xor0];
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = findErrorNums;
// @after-stub-for-debug-end
