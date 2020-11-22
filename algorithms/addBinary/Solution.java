public class Solution {
    // 偷懒算法，如果位过长，转化会溢出
    return Integer.toBinaryString(
        Integer.parseInt(a, 2) + Integer.parseInt(b, 2)
    );
}
