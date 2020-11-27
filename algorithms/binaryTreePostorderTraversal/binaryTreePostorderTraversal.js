var postorderTraversal = function(root) {
    if (!root) return [];

    const res = [];

    // 翻转单链表
    const postMorrisReverseList = (root) => {
        let cur = root;
        let pre;
        while (cur) {
            let next = cur.right;
            cur.right = pre;
            pre = cur;
            cur = next;
        }
	    return pre;
    };
    // 打印函数
    const postMorrisPrint = (root) => {
        const reverseList = postMorrisReverseList(root);
        let cur = reverseList;
        while (cur) {
            res.push(cur.val);
            cur = cur.right;
        }
        postMorrisReverseList(reverseList);
    };

    let cur1 = root;    // 遍历树的指针变量
    let cur2;           // 当前子树的最右节点

    while(cur1) {
        cur2 = cur1.left;
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
                postMorrisPrint(cur1.left);
            }
        }
        cur1 = cur1.right;
    }
    postMorrisPrint(root);
    
    return res;
};