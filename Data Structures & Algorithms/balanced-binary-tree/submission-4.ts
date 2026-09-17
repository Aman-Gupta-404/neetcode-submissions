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
     * @return {boolean}
     */
    isBalanced(root: TreeNode | null): boolean {
        let isBalanced = true;

        function dfs(root: TreeNode | null): number {
            if(!root) return 0;
            
            const leftH = dfs(root.left);
            const rightH = dfs(root.right);

            // check for the condition of the nodes
            const diff = leftH > rightH ? leftH - rightH : rightH - leftH;

            if(diff > 1) isBalanced = false;


            return Math.max(leftH, rightH) + 1;
        }

        dfs(root);

        return isBalanced;
    }
}
