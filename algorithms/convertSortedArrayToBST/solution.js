/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
 var sortedArrayToBST = function(nums) {
    if (!nums.length) return null;
    // 取中间的索引
    const middle = nums.length >> 1;
    return new TreeNode(
        nums[middle],                             // 根节点为中间节点
        sortedArrayToBST(nums.slice(0, middle)),  // 左子树是左侧值
        sortedArrayToBST(nums.slice(middle + 1)), // 右子树为右侧值
    )
};