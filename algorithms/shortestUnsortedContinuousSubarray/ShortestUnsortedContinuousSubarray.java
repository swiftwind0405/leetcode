import java.util.Deque;
import java.util.LinkedList;

/**
 * @author Dream
 */
public class ShortestUnsortedContinuousSubarray {
    public int findUnsortedSubarray(int[] nums) {
        Deque<Integer> que = new LinkedList<>();
        int left = nums.length;
        int right = 0;
        boolean flag = false;
        for (int i = 0; i < nums.length; i++) {
            if (!que.isEmpty() && nums[i] < nums[que.getLast()]) {
                int temp = que.getLast();
                while (!que.isEmpty() && nums[i] < nums[que.getLast()]) {
                    left = Math.min(left, que.pollLast());
                }
                que.addLast(temp);
                right = i;
                flag = true;
            } else {
                que.addLast(i);
            }
        }
        return flag == true ? (right - left + 1) : 0;
    }
}
