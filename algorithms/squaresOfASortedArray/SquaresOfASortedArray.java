/**
 * @author Dream
 */
public class SquaresOfASortedArray {
    public int[] sortedSquares(int[] nums) {
        int[] result = new int[nums.length];
        int q = nums.length - 1;
        for (int i = 0, j = nums.length - 1; i <= j;) {
            int iNum = nums[i] * nums[i];
            int jNum = nums[j] * nums[j];
            if (iNum > jNum) {
                result[q] = iNum;
                i++;
                q--;
            }else if (iNum < jNum){
                result[q] = jNum;
                j--;
                q--;
            }else {
                if (i == j) {
                    result[q] = iNum;
                    i++;
                }else {
                    result[q] = iNum;
                    i++;
                    q--;
                    result[q] = jNum;
                    j--;
                    q--;
                }
            }
        }
        return result;
    }
}
