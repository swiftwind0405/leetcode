// 解法一：双循环，这是很笨的一种实现方式，时间复杂度也很高
var moveZeroes = function(nums) {
    let x = 0;
    while(x < nums.length) {
        if(nums[x] === 0) {
            let y = x + 1;
            while (x < nums.length - 1 && y < nums.length - 1 && nums[y] === 0) {
                y++;
            }
            if (nums[y]) {
                [nums[x], nums[y]] = [nums[y], nums[x]]
            }
        }
        x++;
    }
    return nums;
};

// 解法二：双循环的第二种解法
var moveZeroes = function(nums) {
    let y = 0;
    // 第一次遍历的时候，y指针记录非0的个数，只要是非0的统统都赋给nums[y]
    for (let x = 0; x < nums.length; x++) {
        if(nums[x] !== 0) {
            nums[y++] = nums[x];
        }
    }
    // 非0元素统计完了，剩下的都是0了
	// 所以第二次遍历把末尾的元素都赋为0即可
    for (let x = y; x < nums.length; x++) {
        nums[x] = 0;
    }
    return nums;
};

// 解法三：快排的思想（利用0，不等于0的都放到0的左边），达到一次循环
var moveZeroes = function(nums) {
    let y = 0;
    for(let x = 0; x < nums.length; x++) {
        //当前元素!=0，就把其交换到左边，等于0的交换到右边
        if(nums[x] !== 0) {
            [nums[x], nums[y++]] = [nums[y], nums[x]];
        }
    }
    return nums;
};
