/*
 * @lc app=leetcode id=239 lang=javascript
 *
 * [239] Sliding Window Maximum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindow = function (nums, k) {
  const left = [];
  const right = [];

  for (let i = 0; i < nums.length; i += 1) {
    const j = nums.length - 1 - i;

    if (i % k === 0) left[i] = nums[i];
    else left[i] = Math.max(left[i - 1], nums[i]);

    if ((j + 1) % k === 0) right[j] = nums[j];
    else right[j] = Math.max(right[j + 1], nums[j]);
  }

  const maximum = [];
  for (let i = 0; i <= nums.length - k; i += 1) {
    maximum.push(Math.max(left[i + k - 1], right[i]));
  }

  return maximum;
};
// @lc code=end
