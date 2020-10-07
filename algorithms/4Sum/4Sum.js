var fourSum = function(nums, target) {
    const res = [];
    const len = nums.length;
    if (nums == null || len < 4) return res;

    nums = nums.sort((a, b) => a - b);

    for (let i = 0; i < len - 3; i++) {
        //计算当前的最小值，如果最小值都比target大，或者最大值都比target小不用再继续计算了
        if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target || 
                nums[len - 1] + nums[len - 2] + nums[len - 3] + nums[len -4] < target) break;
        if (i === 0 || nums[i] !== nums[i-1]) {
            for (let j = i + 1; j < len - 2; j++) {
                if (j === i + 1 || nums[j] !== nums[j - 1]) {
                    let R = len - 1, L = j + 1;
                    //计算当前的最小值，如果最小值都比target大，不用再继续计算了
                    if (nums[i] + nums[j] + nums[L] + nums[L + 1] > target) continue;
                    //计算当前最大值，如果最大值都比target小，不用再继续计算了
                    if (nums[i] + nums[j] + nums[R] + nums[R - 1] < target) continue;
                    while (L < R) {
                        let sum = nums[i] + nums[j] + nums[L] + nums[R];
                        if (sum == target) {
                            res.push([nums[i], nums[j], nums[L], nums[R]]);
                        }
                        if (sum < target) {
                            while (nums[L] === nums[++L]);
                        } else {
                            while (nums[R] === nums[--R]);
                        }
                    }
                }
            }
        }
    }
    return res;
};
