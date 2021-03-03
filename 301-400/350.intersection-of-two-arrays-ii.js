/*
 * @lc app=leetcode id=350 lang=javascript
 *
 * [350] Intersection of Two Arrays II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function (nums1, nums2) {
  const found = new Map();
  nums1.forEach((val) => found.set(val, (found.get(val) || 0) + 1));

  return nums2.filter((val) => {
    found.set(val, (found.get(val) || 0) - 1);
    return found.get(val) >= 0;
  });
};
// @lc code=end
