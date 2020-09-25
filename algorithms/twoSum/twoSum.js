var twoSum = function(nums, target) {
    const len = nums.length, map = {};
    for(let i = 0; i < len; i++) {
        const result = map[nums[i]];
        // 第一个数字的index为0时，其实是一个假值，需要额外处理下
        if (result === 0 || result) {
            return [result, i];
        }
        map[target - nums[i]] = i;
    }
};
