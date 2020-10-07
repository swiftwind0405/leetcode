public class Solution {
    public int hammingWeight(int n) {
        int bits = 0;
        int mask = 1;
        //32位，循环32次
        for (int i = 0; i < 32; i++) {
            //利用 mask 的特性 以及 位元算中的且运算
            if ((n & mask) != 0) {
                bits++;
            }
            //左移一位
            mask <<= 1;
        }
        return bits;
    }

}
