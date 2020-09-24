# 27. 移除元素

直接对原数组中进行更改，返回目标数组的长度，超过这个长度的数组项可以继续留在原数组中，长度以内的项则就是结果项。

## 方法一：直接覆盖

**解题思想：**

遇到不同于val的项，就将其直接覆盖到nums数组中，并记一次累加值，当遍历完之后，所有不同于val的项就都放到nums数组的前面了，而这个累加值就是这个前面数组的长度。

**代码：**

```js
var removeElement = (nums, val) => {
  let count= 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[count] = nums[i];
      count++;
    } 
  }
  return count;
}
```

**复杂度分析：**

- 时间复杂度：O(n)，就一次循环遍历

## 方法二：双指针法

**解题思想：**

左指针在数组开始的位置，右指针在数组结尾的位置。当左指针的项等于val的时候，把右指针的项给拿过来，同时右指针往左移一位；而当等于的时候，左指针往右移一位。当两个指针相遇的时候，左指针的位置就是所有不等于val项的数组的长度。

**代码：**

```js
var removeElement = function(nums, val) {
  let L = 0, R = nums.length - 1;
  while (L <= R) {
    if (nums[L] === val) {
      nums[L] = nums[R];
      R--;
    } else {
      L++;
    }
  }
  return L;
};
```

## 方法三：直接删除元素

遇到和val相同的项就直接用splice删除，后面的项就都会往前移一位。

**代码：**

```js
var removeElement = function(nums, val) {
  for (let i = 0; i < nums.length ; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
			// 指针 i 要 -1，新项需重新判定，不然会漏掉
      i--;
    }
  }
  return nums.length;
};
```

> 为了避免遍历时执行多遍计算数组长度的操作，影响效率,，建议在循环开始以变量的形式缓存下数组长度，若在循环内部有可能改变数组长度，请务必慎重处理，避免数组越界。因此这里会改变数组长度的做法，是有危险的，不推荐。

另一种写法：

只要数组中还存在和val相同的项，就删除。

```js
var removeElement = (nums, val) => {
  while (nums.indexOf(val) !== -1) {
    nums.splice(nums.indexOf(val),1)
  }
  return nums.length
}
```

**复杂度分析：**

- 时间复杂度：O(n)

    > 这几种方法都需要遍历一次数组，因此时间复杂度都是O(n)

- 空间复杂度：O(1)

    > 没有占用额外的空间