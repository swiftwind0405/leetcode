class Solution {
    public void reverseString(char[] s) {
        int n = s.length;
        for(int left=0,right=n-1;left<right;++left,--right){
            char temp = s[right];
            s[right] = s[left];
            s[left] = temp;
        }

    }
}