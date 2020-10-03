class Solution {

    // 自上而下而下递归思路，比较左树与右树高度差
    public boolean isBalanced(TreeNode root) {
        if (null == root) {
            return true;
        }
        int leftDepth = recrusionTreeDepth(root.left, 0);
        int rightDepth = recrusionTreeDepth(root.right, 0);
        return Math.abs(leftDepth - rightDepth) <= 1 && isBalanced(root.left) && isBalanced(root.right);
    }

    private int recrusionTreeDepth(TreeNode node, int depth) {
        if (node == null) {
            return depth;
        }
        depth++;
        int leftDepth = recrusionTreeDepth(node.left, depth);
        int rightDepth = recrusionTreeDepth(node.right, depth);
        return Math.max(leftDepth, rightDepth);
    }

    //官方给出的计算树的高度的方法
    public int height(TreeNode root) {
        if (root == null) {
            return 0;
        } else {
            return Math.max(height(root.left), height(root.right)) + 1;
        }
    }
}