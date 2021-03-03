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
const checkValidString = function (s) {
  let lo = 0;
  let hi = 0;
  for (let i = 0; i < s.length; i += 1) {
    const c = s[i];
    lo += c === "(" ? 1 : -1;
    hi += c === ")" ? -1 : 1;

    if (hi < 0) {
      return false;
    }

    lo = Math.max(lo, 0);
  }

  return lo === 0;
};
// @lc code=end
