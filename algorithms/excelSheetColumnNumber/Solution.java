public class Solution {
    public int titleToNumber(String s) {
        int result = 0;
        for(int i = 0; i<s.length();i++){
            int num = s.charAt(i) - 'A' + 1;
            result = result * 26 + num;
        }
        return result;
    }
}
