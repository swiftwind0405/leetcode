public class Solution {
    public boolean hasCycle(ListNode head) {
        // 使用 HashSet 来判断重复
        Set<ListNode> seen = new HashSet<ListNode>();
        while (head != null) {
            if (!seen.add(head)) {
                return true;
            }
            head = head.next;
        }
        return false;
    }
}