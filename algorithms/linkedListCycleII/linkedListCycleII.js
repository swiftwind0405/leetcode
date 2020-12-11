var detectCycle = function(head) {
    if (head === null) return null;
    let slow = head, fast = head;
    while (fast !== null) {
        // 慢指针每次走 1步
        slow = slow.next;
        if (fast.next === null) return null;
        // 快指针每次走2步
        fast = fast.next.next;
        // 快慢指针相遇
        if (fast === slow) {
            // 这时把快指针重新指向头部节点
            let ptr = head;
            // 当快慢指针相遇的时候，就是入环节点的位置
            while (ptr !== slow) {
                ptr = ptr.next;
                slow = slow.next;
            }
            return ptr;
        }

    }
    return null; 
};