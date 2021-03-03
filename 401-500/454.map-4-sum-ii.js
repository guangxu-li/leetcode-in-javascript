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
    const counter = new Map();
    A.forEach((a) => {
        B.forEach((b) => {
            counter.set(a + b, (counter.get(a + b) || 0) + 1);
        });
    });

    let cnt = 0;
    C.forEach((c) => {
        D.forEach((d) => {
            cnt += counter.get(-c - d) || 0;
        });
    });

    return cnt;
};
// @lc code=end
