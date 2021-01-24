var permute = function (nums) {
    const res = [];
    const backtrack = (path) => {
        // 3. 递归的终点
        if(path.length === nums.length) {
            res.push(path);
            return;
        }
        // 遍历所有数字
        nums.forEach(n => {
            // 2. 如果包含当前数字，也就是重复了，即死路，就不要递归了
            if (path.includes(n)) return;
            // 1. 把数字加到数组里，进行递归调用
            backtrack(path.concat(n));
        })
    };
    backtrack([]);
    return res;
};