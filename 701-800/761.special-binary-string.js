/*
 * @lc app=leetcode id=761 lang=javascript
 *
 * [761] Special Binary String
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var makeLargestSpecial = function(S) {
    const largestSpecial = [];
    for (let i = 0, anchor = 0, cnt = 0; i < S.length; i++) {
        cnt += S.charAt(i) == '1' ? 1 : -1;
        if (cnt == 0) {
            largestSpecial.push('1' + makeLargestSpecial(S.substring(anchor + 1, i)) + '0');
            anchor = i + 1;
        }
    }

    return largestSpecial.sort().reverse().join("");
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = makeLargestSpecial;
// @after-stub-for-debug-end
