var twoSum = function (nums, target) {
  const map = new Map();
  const len = nums.length;

  for (var i = 0; i < len; i++) {
    var diff = target - nums[i];
    if (map.has(diff) && i !== map.get(diff)) {
      return [i, map.get(diff)]
    }
    map.set(nums[i], i);
  }
}