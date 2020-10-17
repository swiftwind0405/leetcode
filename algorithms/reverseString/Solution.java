class Solution {
    public void reverseString(char[] s) {
        int n = s.length;
        //经典空间为1 双指针
        // ++legft, 与 left++
        for (int left = 0, right = n - 1; left < right; ++left, --right) {
            char tmp = s[left];
            s[left] = s[right];
            s[right] = tmp;
        }
    }
}