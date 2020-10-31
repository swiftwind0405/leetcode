var mergeTwoLists = function(l1, l2) {
    const prehead = new ListNode(-1);
    let prev = prehead;
    while (l1 !== null && l2 !== null) {
        // l1和l2谁小就接在后面，同时当前指针后移一位
        if (l1.val <= l2.val) {
            prev.next = l1;
            l1 = l1.next;
        } else {
            prev.next = l2;
            l2 = l2.next;
        }
        // 不管将哪一个元素接在了后面，我都需要把 prev 向后移一位。
        prev = prev.next;
    }
    // 合并后 l1 和 l2 最多只有一个还未被合并完，直接将链表末尾指向未合并完的链表即可
    prev.next = l1 === null ? l2 : l1;
    return prehead.next;
};
