var minDepth = function(root) {
    if (!root) return 0;
    // 广度优先需要使用一个队列，同时额外再维护一个深度
    const q = [[root, 1]];
    while (q.length) {
        const [n, deepth] = q.shift();
        if (!n.left && !n.right) return deepth;
        // console.log(n.val, deepth);
        if (n.left) q.push([n.left, deepth + 1]);
        if (n.right) q.push([n.right, deepth + 1]);
    }
};