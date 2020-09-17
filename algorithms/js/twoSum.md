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

**复杂度分析：**

- 时间复杂度：O(n^2)
    每次循环都要遍历剩下的数组元素
- 空间复杂度：O(1)
    没有占用额外的空间

**优化方案：**

已经遍历过的元素，可以不用再遍历，利用哈希表缓存起来，空间换时间。

## 方法二：两遍哈希表

第一次循环把所有值和相应的index存到哈希表中，然后第二循环的时候，找到之前缓存的哈希表中对应的值。

```js
var twoSum = function(nums, target) {
    const len = nums.length, map = {};
    for(let i = 0; i < len; i++) {
        map[nums[i]] = i;
    }
    for(let i = 0; i < len; i++) {
        const complement = target - nums[i];
        if (map[complement] && map[complement] !== i) {
            return [i, map[complement]];
        }
    }
};
```

**复杂度分析：**

- 时间复杂度：O(n)
  只遍历了一次 O(n)，后面都是查找之前遍历过的元素 O(1)
- 空间复杂度：O(n)
  所需的额外空间取决于哈希表中存储的元素数量，最多需要存储 n 个元素。

## 方法三：一遍哈希表

在进行哈希表缓存的时候，直接就检查现有哈希表中有没有目标值。

```js
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
```

**复杂度分析：**

- 时间复杂度：O(n)
  只遍历了一次 O(n)，后面都是查找之前遍历过的元素 O(1)
- 空间复杂度：O(n)
  所需的额外空间取决于哈希表中存储的元素数量，最多需要存储 n 个元素。
