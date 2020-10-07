let removeNthFromEnd = function (head, n) {
    // 添加哨兵节点
    let dummy = new ListNode(0);
    dummy.next = head;
    let fast = dummy, slow = dummy;
    // 快指针先走 n+1 步
    while(n--) {
        fast = fast.next;
    }
    // 快慢指针同时走
    // 快指针走到最后的时候，慢指针的位置就是第N个节点的前一个节点的位置
    while(fast && fast.next) {
        fast = fast.next;
        slow = slow.next;
    }
    // 删除这个节点
    slow.next = slow.next.next;
    return dummy.next;
}