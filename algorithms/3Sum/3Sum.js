var threeSum = function(nums) {
    const result = [];
  
    const len = nums.length;
    if (len < 3) {
      return result;
    }
  
    nums = nums.sort((a, b) => a - b);
    for (let i = 0; i < len; i++) {
      // 如果当前数组大于0，则三数之和一定大于0，所以结束循环
      if (nums[i] > 0) break;
      // 重复项跳过循环
      if (i > 0 && nums[i] === nums[i-1]) continue;
      let L = i + 1;
      let R = len - 1;
      while (L < R) {
        const sum = nums[i] + nums[L] + nums[R];
        if (sum === 0) {
          // 跳过重复项
          result.push([nums[i], nums[L], nums[R]])
          while (L < R && nums[L] === nums[L + 1]) L++;
          while (L < R && nums[R] === nums[R - 1]) R--;
          L++;
          R--;
        }
        else if (sum < 0) L++;
        else if (sum > 0) R--;
      }
    }
    return result;
  };
  