var inorderTraversal = function(root) {
    if (!root) return [];

    const res = [];
    let cur1 = root;
    let cur2;

    while(cur1) {
        cur2 = cur1.left;
        //构建连接线
        if(cur2) {
            while (cur2.right && cur2.right !== cur1) {
                cur2 = cur2.right;
            }
            if (!cur2.right) {
                cur2.right = cur1;
                cur1 = cur1.left;
                continue;
            } else {
                cur2.right = null;
            }
        }
        res.push(cur1.val);
        cur1 = cur1.right;
    }
    
    return res;
};