class Solution {
    public String convertToTitle(int n) {
        // 进制算法
        StringBuilder sb = new StringBuilder();
        while (n > 0) {
            int c = n % 26;
            if(c == 0){
                c = 26;
                n = n -1;
            }
            sb.insert(0, (char) ('A' + c - 1));
            n /= 26;
        }
        return sb.toString();
    }
}