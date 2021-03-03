/* eslint-disable no-bitwise */
/*
 * @lc app=leetcode id=326 lang=javascript
 *
 * [326] Power of Three
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree = function (n) {
    return new RegExp("^10*$", "gi").test(n.toString(3));
};
// @lc code=end
