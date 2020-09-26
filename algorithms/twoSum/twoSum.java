import java.util.Map;

public class TwoSum {
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
}

