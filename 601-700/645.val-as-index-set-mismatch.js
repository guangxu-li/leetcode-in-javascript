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
  const vals = nums;
  let dup = 0;
  vals.forEach((num) => {
    const val = Math.abs(num);
    if (vals[val - 1] < 0) {
      dup = val;
    } else {
      vals[val - 1] *= -1;
    }
  });

  let missing = 0;
  vals.some((num, i) => {
    missing = i + 1;
    return num > 0;
  });

  return [dup, missing];
};
// @lc code=end
