/* eslint-disable no-bitwise */
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
    let x = Math.abs(a);
    let y = Math.abs(b);
    if (x < y) {
        return getSum(b, a);
    }

    const sign = a > 0 || -1;
    const add = a * b >= 0;

    while (y) {
        [x, y] = [x ^ y, add ? (x & y) << 1 : (~x & y) << 1];
    }

    return sign * x;
};
// @lc code=end
