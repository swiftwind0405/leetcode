var maxSubArray = function(nums) {
    // 初始值为0,最大值为第一个无素。
    let pre = 0, maxAns = nums[0];
    nums.forEach((x) => {
        // 前一个元素加到当前元素上，取较大值
        pre = Math.max(pre + x, x);
        // 取结果的最大值
        maxAns = Math.max(maxAns, pre);
        console.log(pre, maxAns)
    });
    return maxAns;
};
