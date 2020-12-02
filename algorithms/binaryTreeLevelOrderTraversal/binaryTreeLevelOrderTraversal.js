var levelOrder = function(root) {
    if (!root) return [];
    const res = [];
    const q = [[root, 0]];
    while (q.length) {
        const [n, level] = q.shift();
        if (res[level]) {
            res[level].push(n.val)
        } else {
            res[level] = [n.val];
        }
        if (n.left) q.push([n.left, level + 1]);
        if (n.right) q.push([n.right, level + 1]);
    }
    return res;
};