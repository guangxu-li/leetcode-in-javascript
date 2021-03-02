/*
 * @lc app=leetcode id=384 lang=javascript
 *
 * [384] Shuffle an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
const Solution = function (nums) {
    this.nums = nums;
    this.original = [...nums];
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
    this.nums = [...this.original];
    return this.nums;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
    const swap = (i, j) => {
        [this.nums[i], this.nums[j]] = [this.nums[j], this.nums[i]];
    };

    for (let i = 0; i < this.nums.length; i += 1) {
        swap(i, Math.floor(Math.random() * this.nums.length));
    }

    return this.nums;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
// @lc code=end
