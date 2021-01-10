/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public boolean isUnivalTree(TreeNode root) {
        Set<Integer> values = new HashSet();
        dfs(root,values);
        return values.size() == 1;
    }

    //深度遍历
    private void dfs(TreeNode root,Set<Integer> values){
        if(root!=null){
            values.add(root.val);
            dfs(root.left,values);
            dfs(root.right,values);
        }
    }
}