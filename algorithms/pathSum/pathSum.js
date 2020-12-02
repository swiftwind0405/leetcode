var hasPathSum = function(root, sum) {
    if(!root) return false;
    let res = false;
    const dfs = (node, s) => {
        // console.log(node.val, s);
        // 如果是叶子节点，且当前路径的和为sum，就证明找到一个符合要求的路径
        if (!node.left && !node.right && s === sum) {
            res = true;
        }
        if(node.left) dfs(node.left, s + node.left.val);
        if(node.right) dfs(node.right, s + node.right.val);
    };
    dfs(root, root.val);
    return res;
};