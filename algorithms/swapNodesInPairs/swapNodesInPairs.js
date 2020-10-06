var swapPairs = function(head) {
    let shaob = new ListNode(0); // 添加哨兵 加0
    shaob.next = head;
    let shao = shaob;   //shao 是为了一直往下指, 而 shaob 其实是为了返回第二个节点
    while(shao.next != null && shao.next.next != null) {
        let start = shao.next; // 代表第一次的1
        let end = shao.next.next; // 代表第一次的2
        shao.next = end; // 0 指向 2
        start.next = end.next; // 1 指向 3
        end.next = start; // 2 指向 1
        shao = start; // 将此时的1 也就是交换后的1当哨兵 继续循环
    }
    return shaob.next // 返回的是最初哨兵的前一个 就是链表头
};