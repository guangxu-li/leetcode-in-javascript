/*
 * @lc app=leetcode id=454 lang=javascript
 *
 * [454] 4Sum II
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
const fourSumCount = function (A, B, C, D) {
  return ((arrays) => {
    const counter = new Map();
    const add = (part1, i, sum) =>
      i === part1.length
        ? counter.set(sum, (counter.get(sum) || 0) + 1)
        : part1[i].forEach((val) => add(part1, i + 1, sum + val));
    add(arrays.slice(0, arrays.length / 2), 0, 0);

    const count = (part2, i, sum) =>
      i === part2.length
        ? counter.get(-sum) || 0
        : part2[i].reduce((cnt, val) => cnt + count(part2, i + 1, sum + val), 0);
    return count(arrays.slice(arrays.length / 2, arrays.length), 0, 0);
  })([A, B, C, D]);
};
// @lc code=end
