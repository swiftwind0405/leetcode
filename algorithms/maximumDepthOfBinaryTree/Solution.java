/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    //递归
    public int maxDepth(TreeNode root) {
        if(null == root){
            return 0;
        }
        int rightMax = maxDepth(root.right);
        int leftMax = maxDepth(root.left);
        return Math.max(rightMax,leftMax)+1;
    }

        //广度遍历
    public int maxDepth(TreeNode root){
        if(root == null){
                return 0;
        }
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        int res = 0;
    
        while(!queue.isEmpty()){
            //广度遍历核心是一层一层的进行
            int size = queue.size();
            while(size>0){
                TreeNode node = queue.poll();
                if(node.left !=null){
                    queue.offer(node.left);
                }
                if(node.right !=null){
                    queue.offer(node.right);
                }
                size--;
            }
            res++;
        }
        return res;
    }
}