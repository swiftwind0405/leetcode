/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
    // 先排除没有目标元素的情况
    if (nums.indexOf(target) === -1) return [-1, -1];
    // 双指针
    var start = 0;
    var end = nums.length - 1;
    var indexArr = [];
    while (end >= start) {
      if (nums[start] === target && !indexArr[0]) {
        indexArr[0] = start;
      } else {
        start++
      }
      if (nums[end] === target && !indexArr[1]) {
        indexArr[1] = end;
      } else {
        end--
      }
    }

    // 只有一个相等的情况
    if (!indexArr[0]) return [indexArr[1], indexArr[1]];
    if (!indexArr[1]) return [indexArr[0], indexArr[0]];

    return indexArr;
};
console.log(searchRange([1, 3, 9, 4, 5], 4));