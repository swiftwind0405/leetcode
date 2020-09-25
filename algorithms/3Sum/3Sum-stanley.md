# 15. 三数之和

## 方法一：排序 + 双指针

**解题思想：**

这道题如果使用暴力求解法，也就是三重循环来枚举，首先时间复杂度是O(N^3)，还得使用哈希表来进行去重，得到最终的一个不重复的三元数组，时间复杂度与空间复杂度都非常高。

可以通过先排序，再用三重循环，来保证循环的元素不重复。

同时，对于每一重循环而言，相邻两次枚举的元素不能相同，否则也会造成重复。举个例子，如果排完序的数组为

**代码：**

```js
[0, 1, 2, 2, 2, 3]
 ^  ^  ^
```

当枚举的第一个三元数组是 (0, 1, 2)，后面一次枚举依旧是 (0, 1, 2)，因此要将第三重循环跳到一个完全不同的元素，即跳过2也就是最后一个元素3。

用暴力法试一下：

```js
var threeSum = function (nums) {
  nums = nums.sort((a, b) => a - b);
  const len = nums.length,
    result = [];

  const check = (i, j, k) => nums[i] + nums[j] + nums[k] === 0;

  for (let i = 0; i < len - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    if (nums[i] === 0 && nums[i + 1] === 0 && nums[i + 2] === 0) {
      result.push([0, 0, 0]);
      break;
    }

    for (let j = i + 1; j < len - 1; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }

      for (let k = j + 1; k < len; k++) {
        if (k > j + 1 && nums[k] === nums[k - 1]) {
          continue;
        }
        check(i, j, k) && result.push([nums[i], nums[j], nums[k]]);
      }
    }
  }
  return result;
};
```

时间复杂度仍然为 O(N^3)，这是无法接受的，因此需要进行优化。

因为 a + b + c = 0，在保持 a 不变的前提下，随着 b 的增大，c 就会逐渐变小，因此我们让第三重循环的指针从最右边开始往右遍历。这样的话，将枚举的时间复杂度从 O(N^2)减少至 O(N)。这就是双指针的方法。

这道题的难点在于重复项的判断。

```js
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
```

**复杂度分析：**

- 时间复杂度：O(N^2)。

- 空间复杂度：O(logN)。额外排序的空间复杂度为 O(logN)。使用了一个额外的数组存储了 nums 的副本并进行排序，空间复杂度为 O(N)。
