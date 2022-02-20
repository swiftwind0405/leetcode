/**
 * @author Dream
 */
public class NonDecreasingArray {
    public boolean checkPossibility(int[] nums) {
        int j = 0;
        int length = nums.length;
        for (int i = 1; i < length; i++) {
            if (i > 1 && i < length - 1 && nums[i - 1] > nums[i + 1] && nums[i-2] > nums[i]) {
                return false;
            }
            if (nums[i] < nums[i - 1]) {
                j++;
                if (j > 1) {
                    return false;
                }
            }
        }
        return true;
    }
}
