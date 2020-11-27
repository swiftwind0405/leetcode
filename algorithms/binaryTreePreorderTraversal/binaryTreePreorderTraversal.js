var preorderTraversal = function(root) {
    if (!root) return;
    const res = [];
    let cur1 = root;  // 当前开始遍历的节点
    let cur2;         // 记录当前结点的左子树
    while(cur1) {
        cur2 = cur1.left;
        if(cur2) {
            // 找到当前左子树的最右侧节点，
            // 且这个节点应该在指向根结点之前，否则整个节点又回到了根结点。
            while (cur2.right && cur2.right !== cur1) {
                cur2 = cur2.right;
            }
            // 这个时候如果最右侧这个节点的右指针没有指向根结点，
            // 创建连接然后往下一个左子树的根结点进行连接操作。
            if (!cur2.right) {
                cur2.right = cur1;
                res.push(cur1.val);
                cur1 = cur1.left;
                continue;
            } else {  // 当左子树的最右侧节点有指向根结点，
                // 此时说明我们已经回到了根结点并重复了之前的操作，
                // 同时在回到根结点的时候我们应该已经处理完 左子树的最右侧节点了，把路断开。
                cur2.right = null;
            }
        } else {
            // 说明当前是叶子节点了，直接访问就好
            res.push(cur1.val);
        }
        // 一直往右边走
        cur1 = cur1.right;
    }
    return res;
};
