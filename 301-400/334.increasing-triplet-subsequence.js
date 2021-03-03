/*
 * @lc app=leetcode id=334 lang=javascript
 *
 * [334] Increasing Triplet Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const increasingTriplet = function (nums) {
    for (let i = 0, first = Infinity, second = Infinity; i < nums.length; i += 1) {
        if (nums[i] <= first) {
            first = nums[i];
        } else if (nums[i] <= second) {
            second = nums[i];
        } else {
            return true;
        }
    }

    return false;
};
// @lc code=end
