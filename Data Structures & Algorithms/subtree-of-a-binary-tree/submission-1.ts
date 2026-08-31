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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
       if(!root && subRoot) return false;
       if(!subRoot) return true

       const isEqual = this.isEqual(root, subRoot);

       if(isEqual) return true
        
        return this.isSubtree(root?.left, subRoot) || this.isSubtree(root?.right, subRoot);
    }

    isEqual(p: TreeNode | null, q: TreeNode | null): boolean {
        if(!p && !q) return true;
        if(!p || !q) return false

        return (this.isEqual(p.left, q.left) && 
        this.isEqual(p.right, q.right) && p.val === q.val);
    }
}
