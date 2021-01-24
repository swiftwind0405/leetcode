var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) return null;

    let pA = headA,
        pB = headB;
    // 相等只有2种情况：
    // 1. 两者相交 2. 都走到了最后
    while (pA !== pB) {
        // 如果没走到最后，就往后走一步；否则就指向互相的头节点
        pA = pA === null ? headB : pA.next;
        pB = pB === null ? headA : pB.next;
    }
    return pA;
};
