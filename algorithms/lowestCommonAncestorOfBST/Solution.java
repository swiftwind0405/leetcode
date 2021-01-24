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
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        List<TreeNode> pPath = getPath(root,p);
        List<TreeNode> qPath = getPath(root,q);

        TreeNode common = null;
        for(int i=0; i<pPath.size()&&i<qPath.size();i++){
            if(pPath.get(i) == qPath.get(i)){
                common = pPath.get(i);
            }else{
                break;
            }
        }
        return common;
    }


    public List<TreeNode> getPath(TreeNode root, TreeNode target){
        List<TreeNode> treeNodePath = new ArrayList();
        TreeNode node = root;
        while(node!=target){
            treeNodePath.add(node);
            if(node.val > target.val){
                node = node.left;
            }else{
                node = node.right;
            }
        }
        treeNodePath.add(target);
        return treeNodePath;
    }
}