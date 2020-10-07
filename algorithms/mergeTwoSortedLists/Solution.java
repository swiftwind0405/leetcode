public class Solution {

    //迭代，空间复杂度O(m+n)
    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        if (null == l1) {
            return l2;
        } else if (null == l2) {
            return l1;
        } else if (l1.val < l2.val) {
            l1.next = mergeTwoLists(l1.next, l2);
            return l1;
        } else {
            l2.next = mergeTwoLists(l1, l2.next);
            return l2;
        }
    }

    //递归，空间复杂度O(1)
    public ListNode iterationTwoLists(ListNode l1, ListNode l2) {
        //链表头部节点
        ListNode preHeadNode = new ListNode(-1);
        //返回排序链表的指针
        ListNode prev = preHeadNode;
        while (null != l1 && null != l2) {
            if (l1.val <= l2.val) {
                prev.next = l1;
                l1 = l1.next;
            } else {
                prev.next = l2;
                l2 = l2.next;
            }
            prev = prev.next;
        }
        prev.next = null == l1 ? l2 : l1;
        return preHeadNode.next;
    }

    static class ListNode {
        public int val;
        public ListNode next;

        public ListNode(int val) {
            this.val = val;
        }
    }
}