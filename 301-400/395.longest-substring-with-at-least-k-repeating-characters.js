/*
 * @lc app=leetcode id=395 lang=javascript
 *
 * [395] Longest Substring with At Least K Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const longestSubstring = function (s, k) {
  const chCnt = ((S) => {
    const cnts = [];
    return Array.from(S).reduce((result, item) => {
      let cnt = result;
      cnt += !cnts[item] && 1;
      cnts[item] = (cnts[item] || 0) + 1;

      return cnt;
    }, 0);
  })(s);

  let len = 0;
  for (let i = 1; i <= chCnt; i += 1) {
    const cnts = [];
    let unique = 0;
    let valid = 0;
    let lo = 0;
    let hi = 0;

    while (hi < s.length) {
      const head = s[lo];
      const tail = s[hi];

      if (unique === i && !cnts[tail]) {
        // shrink
        if (cnts[head] === k) {
          valid -= 1;
        }
        cnts[head] -= 1;
        if (!cnts[head]) {
          unique -= 1;
        }
        lo += 1;
      } else {
        // expand
        if (!cnts[tail]) {
          unique += 1;
        }
        cnts[tail] = (cnts[tail] || 0) + 1;
        if (cnts[tail] === k) {
          valid += 1;
        }
        hi += 1;
      }

      // update
      if (valid === i) {
        len = Math.max(len, hi - lo);
      }
    }
  }

  return len;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = longestSubstring;
// @after-stub-for-debug-end
