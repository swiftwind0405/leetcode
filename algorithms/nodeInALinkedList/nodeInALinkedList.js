var deleteNode = function(node) {
    // 传入的就是要删除的节点，因此把它用下个节点覆盖即可
    node.val = node.next.val;
    node.next = node.next.next;
};