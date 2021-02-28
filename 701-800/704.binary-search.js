/*
 * @lc app=leetcode id=704 lang=javascript
 *
 * [704] Binary Search
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let lo = 0, hi = nums.length - 1;

    while (lo <= hi) {
        const mid = (lo + hi) >>> 1;
        if (nums[mid] < target) {
            lo = mid + 1;
        } else if (nums[mid] == target) {
            return mid;
        } else {
            hi = mid - 1;
        }
    }

    return -1;
};
// @lc code=end

