import java.util.LinkedList;
import java.util.List;

/**
 * @author Dream
 */
public class AddToArrayFormOfInteger {
    public List<Integer> addToArrayForm(int[] num, int k) {
        int len = num.length;
        int lastNum = k;
        LinkedList<Integer> list = new LinkedList<>();
        int i = len - 1;
        while (i >= 0 || lastNum > 0) {
            if (i >= 0) {
                lastNum += num[i];
            }
            list.addFirst(lastNum % 10);
            lastNum /= 10;
            i--;
        }
        return list;
    }
}
