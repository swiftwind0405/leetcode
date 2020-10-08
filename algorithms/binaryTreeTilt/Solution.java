public class Solution {
    int tilt = 0;

    public int findTilt(TreeNode root) {
        if (null == root) {
            return 0;
        }
        iterationNodeTilt(root);
        return tilt;
    }

    private int iterationNodeTilt(TreeNode root) {
        if (null == root) {
            return 0;
        }
        int leftTilt = iterationNodeTilt(root.left);
        int rightTilt = iterationNodeTilt(root.right);

        tilt += Math.abs(leftTilt - rightTilt);
        return leftTilt + rightTilt + root.val;
    }
}
