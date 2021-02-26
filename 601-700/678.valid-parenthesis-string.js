/*
 * @lc app=leetcode id=678 lang=javascript
 *
 * [678] Valid Parenthesis String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
    let lo = hi = 0;
    for (const c of s) {
        lo += c == '(' ? 1 : -1;
        hi += c == ')' ? -1 : 1;

        if (hi < 0) {
            return false;
        }

        lo = Math.max(lo, 0);
    }

    return lo == 0;
};
// @lc code=end


