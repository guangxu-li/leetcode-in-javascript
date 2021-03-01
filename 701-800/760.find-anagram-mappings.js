/*
 * @lc app=leetcode id=760 lang=javascript
 *
 * [760] Find Anagram Mappings
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
const anagramMappings = function (A, B) {
    const mappings = [];
    for (let i = 0; i < B.length; i += 1) {
        mappings[B[i]] = i;
    }

    const map = [];
    for (let i = 0; i < A.length; i += 1) {
        map[i] = mappings[A[i]];
    }

    return map;
};
// @lc code=end
