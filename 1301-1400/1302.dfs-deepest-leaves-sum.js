/*
 * @lc app=leetcode id=1302 lang=javascript
 *
 * [1302] Deepest Leaves Sum
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const deepestLeavesSum = function (root) {
  let deepest = 0;
  let sum = 0;

  const traverse = (node, depth = 0) => {
    if (!node) {
      return;
    }

    if (!node.left && !node.right) {
      if (deepest < depth) {
        deepest = depth;
        sum = node.val;
      } else if (deepest === depth) {
        sum += node.val;
      }
    } else {
      traverse(node.left, depth + 1);
      traverse(node.right, depth + 1);
    }
  };

  traverse(root);

  return sum;
};
// @lc code=end
