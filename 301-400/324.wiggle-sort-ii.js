/*
 * @lc app=leetcode id=324 lang=javascript
 *
 * [324] Wiggle Sort II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const wiggleSort = function (nums) {
  const vals = nums;
  const n = vals.length;
  const midIdx = Math.floor((n - 1) / 2);

  const swap = (i, j) => {
    [vals[i], vals[j]] = [vals[j], vals[i]];
  };

  const partition = (lo, hi, pivot) => {
    const pVal = vals[pivot];
    swap(pivot, hi);

    let j = lo;
    for (let i = lo; i <= hi; i += 1) {
      if (vals[i] > pVal) {
        swap(i, j);
        j += 1;
      }
    }

    swap(j, hi);

    return j;
  };

  const quickselect = (low, high, center) => {
    const lo = low;
    const hi = high;

    if (lo === hi) {
      return;
    }

    const pivot = partition(lo, hi, Math.floor(Math.random() * (hi - lo + 1) + lo));
    if (pivot === center) {
      return;
    }
    if (pivot > center) {
      quickselect(lo, pivot - 1, center);
    } else {
      quickselect(pivot + 1, hi, center);
    }
  };

  quickselect(0, n - 1, midIdx);
  const median = vals[midIdx];

  for (let cnt = 0, i = 1, j = 1, k = n - 2 + (n % 2); cnt < n; cnt += 1) {
    if (nums[j] > median) {
      swap(i, j);
      i = i + 2 >= n ? 0 : i + 2;
      j = j + 2 >= n ? 0 : j + 2;
    } else if (nums[j] < median) {
      swap(j, k);
      k = k < 2 ? n - 1 - (n % 2) : k - 2;
    } else {
      j = j + 2 >= n ? 0 : j + 2;
    }
  }
};
// @lc code=end
