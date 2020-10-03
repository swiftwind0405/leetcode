public class Solution {
    public boolean isSameTree(TreeNode p, TreeNode q) {
        // 比较两颗树是否相等，通过对树的遍历比较树的值是否相等
        if (null == p && null == q) {
            return true;
        }
        if (null == p && null != q) {
            return false;
        }
        if (null != p && null == q) {
            return false;
        }
        if (p.val != q.val) {
            return false;
        }

        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
}
