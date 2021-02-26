/*
 * @lc app=leetcode id=678 lang=javascript
 *
 * [678] Valid Parenthesis String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
    let cnt = 0, wild = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(') {
            cnt++;
        } else if (s[i] == ')') {
            cnt--;
        } else {
            wild++;
        }

        if (cnt < 0) {
            if (wild == 0) {
                return false;
            }

            cnt++;
            wild--;
        }
    }

    if (cnt > wild) {
        return false;
    }

    cnt = 0, wild = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] == ')') {
            cnt++;
        } else if (s[i] == '(') {
            cnt--;
        } else {
            wild++;
        }

        if (cnt < 0) {
            if (wild == 0) {
                return false;
            }

            cnt++;
            wild--;
        }
    }

    return cnt <= wild;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = checkValidString;
// @after-stub-for-debug-end
