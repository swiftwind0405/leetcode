/**
 * @author Dream
 */
public class StringWithoutAaaOrBbb {
    public String strWithout3a3b(int a, int b) {
        StringBuffer buffer = new StringBuffer();
        int subtract = Math.abs(a - b);
        if (subtract >= 3) {
            if (a > b) {
                while (a > 1 && b > 0) {
                    buffer.append("aab");
                    a -= 2;
                    b--;
                }
            }else {
                while (a > 0 && b > 1) {
                    buffer.append("bba");
                    b -= 2;
                    a--;
                }
            }
        }
        while (a > 0 && b > 0) {
            if (a >= b) {
                buffer.append("ab");
            }
            if (b > a) {
                buffer.append("ba");
            }
            a--;
            b--;
        }
        while (a > 0) {
            buffer.append("a");
            a--;
        }
        while (b > 0) {
            buffer.append("b");
            b--;
        }
        return buffer.toString();
    }
}
