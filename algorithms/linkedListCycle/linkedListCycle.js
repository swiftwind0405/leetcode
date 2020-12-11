var hasCycle = function(head) {
    if (!head || !head.next) return false;
    let slow = head, fast = head.next;
    while (fast) {
        if (slow.val === fast.val) return true;
        if (!fast.next || !fast.next.next) return false;
        fast = fast.next.next;
        slow = slow.next;
    }
    return false;
};