### twoSum(https://leetcode-cn.com/problems/two-sum)

**Python**

```python
from typing import List

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        d = {}
        n = len(nums)
        for i in range(n):
            if target - nums[i] in d:
                return d[target - nums[i]], i
            else:
                d[nums[i]] = i
```

```
### 复杂度分析

- 时间复杂度：O(n^2)
   > 每次循环都要遍历剩下的数组元素
- 空间复杂度：O(1)
   > 没有占用额外的空间
```

**复杂度分析**

- 时间复杂度： O(n)

  > 我们只遍历了包含有 *n* 个元素的列表一次。在表中进行的每次查找只花费 O(1)*O*(1) 的时间。

- 空间复杂度：O(n) 

  > 所需的额外空间取决于哈希表中存储的元素数量，该表最多需要存储 *n* 个元素。

