/*
 * @lc app=leetcode id=1465 lang=javascript
 *
 * [1465] Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts
 */

// @lc code=start
/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
const maxArea = function (h, w, horizontalCuts, verticalCuts) {
  const largestInterval = (arr, n) => {
    let prev = 0;
    let max = 0;
    for (let i = 0; i < arr.length; i += 1) {
      max = Math.max(max, arr[i] - prev);
      prev = arr[i];
    }

    return Math.max(max, n - prev);
  };

  const mod = 1e9 + 7;
  return (
    (largestInterval(
      horizontalCuts.sort((a, b) => a - b),
      h
    ) *
      largestInterval(
        verticalCuts.sort((a, b) => a - b),
        w
      )) %
    mod
  );
};
// @lc code=end
