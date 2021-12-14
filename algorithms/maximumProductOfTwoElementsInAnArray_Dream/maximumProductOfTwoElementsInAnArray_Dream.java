import java.util.*;
import java.util.stream.Collectors;

/**
 * @author Dream
 */
public class maximumProductOfTwoElementsInAnArray_Dream {
    //研究了arrays.sort方法写的
    class Solution1 {
        public int maxProduct(int[] nums) {
            for (int i = 0, j = i; i < nums.length - 1; j = ++i) {
                int ai = nums[i + 1];
                while (nums[j] < ai) {
                    nums[j + 1] = nums[j];
                    if (j-- == 0) {
                        break;
                    }
                }
                nums[j + 1] = ai;
            }
            return ((nums[0] - 1) * (nums[1] - 1));
        }
    }

    //两次遍历取出最大值，并删除
    class Solution2 {
        public int maxProduct(int[] nums) {
            Map<Integer, Integer> map = new HashMap<>(2);
            map.put(0,0);
            map.put(1,0);
            List<Integer> collect = Arrays.stream(nums).boxed().collect(Collectors.toList());
            foreachListToRemove(collect, map, 0);
            foreachListToRemove(collect, map, 1);
            return (map.get(0) - 1) * (map.get(1) - 1);
        }

        public void foreachListToRemove(List<Integer> collection,Map<Integer,Integer> map,Integer index) {
            Iterator<Integer> iterator = collection.iterator();
            while (iterator.hasNext()) {
                Integer value = iterator.next();
                if (map.get(index) < value) {
                    map.put(index, value);
                }
            }
            collection.remove(map.get(index));
        }
    }

}
