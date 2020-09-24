# 14. 最长公共前缀

## 方法一：取第一个字符串，与剩下的依次比较

写法一：

**代码：**

```js
var longestCommonPrefix = function(strs) {
  if (strs.length == 0) return "";
  let ans = strs[0];
  for (let i = 1; i < strs.length; i++) {
    let j = 0;
    for (; j < ans.length && j < strs[i].length; j++) {
      if (ans[j] != strs[i][j]) break;
    }
    ans = ans.substr(0, j);
    if (ans === "") return ans;
  }
  return ans;
};
```

写法二：

**代码：**

```js
var longestCommonPrefix = function(strs) {
	// 当字符串数组长度为 0 时则公共前缀为空，直接返回
  if (strs.length === 0) return '';
	// 令最长公共前缀 ans 的值为第一个字符串，进行初始化
  const ans = strs[0];
  const len = ans.length;
	// ans 是空字符串的特殊情况
	if (len === 0) return '';
  for (let i = 0; i < len; i++) {
      if (!strs.every(str => str[i] === ans[i])) {
				// 首次判定的时候就有不满足的项，直接抛空出去
	      if (i === 0) return '';
				// 当有不满足项出现的时候，把之前满足的字符串抛出去
	      return ans.slice(0, i);
      }
  }
	// 循环跑完也没有return出去，说明全部满足，把判断的这个字符return出去
  return ans;
};
```

**复杂度分析：**

- 时间复杂度：O(n)，n 是数组的长度
- 空间复杂度：O(1)

## 方法二：直接比较最长字符串与最短字符串

**解题思路：**

找出最大字符串与最小字符串，然后比较出来的公共前缀也为其它字符串的公共前缀。

这里需要注意的是，比较大小是按照字符的大小，比如abac是小于abc的。

**代码：**

```js
var longestCommonPrefix = function(strs) {
	if (strs === null || strs.length === 0) return "";
  if(strs.length === 1) return strs[0]
  let min = 0, max = 0
  for(let i = 1; i < strs.length; i++) {
      if(strs[min] > strs[i]) min = i
      if(strs[max] < strs[i]) max = i
  }
  for(let j = 0; j < strs[min].length; j++) {
      if(strs[min].charAt(j) !== strs[max].charAt(j)) {
          return strs[min].substring(0, j)
      }
  }
  return strs[min];
};
```

**复杂度分析：**

- 时间复杂度：O(n+m)，n是数组的长度， m 是字符串数组中最短字符的长度
- 空间复杂度：O(1)

## 方法三：分治策略 归并思想

**解题思路：**

把问题分解为子问题：找2个字符串的最长公共前缀

**代码：**

```js
var longestCommonPrefix = function(strs) {
    if (strs === null || strs.length === 0) return "";
    return lCPrefixRec(strs)
};

// 若分裂后的两个数组长度不为 1，则继续分裂
// 直到分裂后的数组长度都为 1，
// 然后比较获取最长公共前缀
function lCPrefixRec(arr) {
  let length = arr.length
  if(length === 1) {
    return arr[0]
  }
  let mid = Math.floor(length / 2),
      left = arr.slice(0, mid),
      right = arr.slice(mid, length)
  return lCPrefixTwo(lCPrefixRec(left), lCPrefixRec(right))
}

// 求 str1 与 str2 的最长公共前缀
function lCPrefixTwo(str1, str2) {
    let j = 0
    for(; j < str1.length && j < str2.length; j++) {
        if(str1.charAt(j) !== str2.charAt(j)) {
            break
        }
    }
    return str1.substring(0, j)
}
```

**复杂度分析：**

- 时间复杂度：O(s)，s 是所有字符串中字符数量的总和
- 空间复杂度：O(m*logn)，n是数组的长度，m为字符串数组中最长字符的长度