### twoSum(https://leetcode-cn.com/problems/two-sum)

**Java**

```java
public int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> numsIndexMap = new HashMap();
    for (int i = 0; i < nums.length; i++) {
        if (numsIndexMap.containsKey(target - nums[i])) {
            return new int[]{numsIndexMap.get(target - nums[i]), i};
        }
        numsIndexMap.put(nums[i], i);
    }
    throw new IllegalArgumentException();
}
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

