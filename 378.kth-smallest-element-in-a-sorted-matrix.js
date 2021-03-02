/*
 * @lc app=leetcode id=378 lang=javascript
 *
 * [378] Kth Smallest Element in a Sorted Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
const kthSmallest = function (matrix, k) {
    const search = (m, target) => {
        const n = m.length;
        const arr = {
            lo: m[0][0],
            hi: m[n - 1][n - 1],
            cnt: 0,
        };

        let c = 0;
        let r = n - 1;

        while (c < n && r >= 0) {
            const cur = m[r][c];
            if (cur > target) {
                arr.hi = Math.min(arr.hi, cur);
                r -= 1;
            } else {
                arr.lo = Math.max(arr.lo, cur);
                arr.cnt += r + 1;
                c += 1;
            }
        }

        return arr;
    };

    const n = matrix.length;
    let lo = matrix[0][0];
    let hi = matrix[n - 1][n - 1];

    while (lo < hi) {
        const mid = lo + (hi - lo) / 2;
        const arr = search(matrix, mid);
        if (arr.cnt < k) {
            lo = arr.hi;
        } else if (arr.cnt === k) {
            return arr.lo;
        } else {
            hi = arr.lo;
        }
    }

    return lo;
};
// @lc code=end
