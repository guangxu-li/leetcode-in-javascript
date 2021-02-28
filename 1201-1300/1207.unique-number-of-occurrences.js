/*
 * @lc app=leetcode id=1207 lang=javascript
 *
 * [1207] Unique Number of Occurrences
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const cnts = new Map();
    for (const val of arr) {
        cnts.set(val, (cnts.get(val) || 0) + 1);
    }

    return cnts.size == new Set(cnts.values()).size;
};
// @lc code=end

