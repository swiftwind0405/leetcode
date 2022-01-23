/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  // target 在左闭右闭的区间里，[left, right]
  let left = 0,
    right = nums.length - 1,
    result = nums.length;

  // 因为题目要求时间复杂度是O(log n)，所以得使用二分查找法
  while (left <= right) {
    const middle = left + Math.floor((right - left) >> 1);
    if (target > nums[middle]) {
      left = middle + 1; // target在右区间
    } else {
      result = middle; // target在左区间
      right = middle - 1;
    }
  }

  return result;
};
