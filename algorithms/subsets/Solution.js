var subsets = function (nums) {
    const res = [];
    const backtrack = (path, l, start) => {
        if (path.length === l) {
            res.push(path);
            return;
        }
        // for循环遍历数组中的所有数字
        // 没有用forEach来遍历是因为要保证子集的有序性，后面接的数字必须是当前数字后面的数字
        // 因此还需要记录一个下标来
        for (let i = start; i < nums.length; i++) {
            backtrack(path.concat(nums[i]), l, i + 1);
        }
    };
    // 在for循环中进行回溯的调用
    for (let i = 0; i <= nums.length; i++) {
        backtrack([], i, 0);
    }
    return res;
};