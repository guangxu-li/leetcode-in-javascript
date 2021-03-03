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
  let cnt = 0;
  let wild = 0;
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === "(") {
      cnt += 1;
    } else if (s[i] === ")") {
      cnt -= 1;
    } else {
      wild += 1;
    }

    if (cnt < 0) {
      if (wild === 0) {
        return false;
      }

      cnt += 1;
      wild -= 1;
    }
  }

  if (cnt > wild) {
    return false;
  }

  cnt = 0;
  wild = 0;
  for (let i = s.length - 1; i >= 0; i -= 1) {
    if (s[i] === ")") {
      cnt += 1;
    } else if (s[i] === "(") {
      cnt -= 1;
    } else {
      wild += 1;
    }

    if (cnt < 0) {
      if (wild === 0) {
        return false;
      }

      cnt += 1;
      wild -= 1;
    }
  }

  return cnt <= wild;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = checkValidString;
// @after-stub-for-debug-end
