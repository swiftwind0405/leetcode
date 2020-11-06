var maxDepth = function(root) {
    if (!root) return 0;
    if (root.left === null && root.right === null) {
        return 1;
    }
    const leftDepth = maxDepth(root.left) + 1;
    const rightDepth = maxDepth(root.right) + 1;
    return Math.max(leftDepth, rightDepth);
};