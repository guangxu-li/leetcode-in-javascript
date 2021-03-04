/*
 * @lc app=leetcode id=1048 lang=javascript
 *
 * [1048] Longest String Chain
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
const longestStrChain = function (words) {
  words.sort((a, b) => a.length - b.length);
  const counter = new Map();
  let max = 0;
  words.forEach((word) => {
    let lmax = 1;
    for (let i = 0; i < word.length; i += 1) {
      const prev = word.slice(0, i) + word.slice(i + 1);
      lmax = Math.max(lmax, 1 + (counter.get(prev) || 0));
    }

    max = Math.max(max, lmax);
    counter.set(word, lmax);
  });

  return max;
};
// @lc code=end
