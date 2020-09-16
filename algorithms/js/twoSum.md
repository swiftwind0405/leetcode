# 1. 两数之和

## 方法一：暴力求解法

两层循环，遍历每个元素，查找是否存在一个值与之相加为 target 的目标元素

```js
var twoSum = function(nums, target) {
    const len = nums.length;
    for(let i = 0; i < len - 1; i++) {
        for(let j = i + 1; j < len; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
};
```

### 复杂度分析

- 时间复杂度：O(n^2)
	> 每次循环都要遍历剩下的数组元素
- 空间复杂度：O(1)
	> 没有占用额外的空间

### 优化方案

已经遍历过的元素，可以不用再遍历，利用哈希表缓存起来。