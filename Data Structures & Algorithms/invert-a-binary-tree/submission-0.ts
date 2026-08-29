/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root: TreeNode | null): TreeNode {
        if(!root) return root;

        // swithc ops
        const temp = root?.left || null;
        root.left = root.right || null;
        root.right = temp;
        
        this.invertTree(root.left);
        this.invertTree(root.right);

        return root;
    }
}
