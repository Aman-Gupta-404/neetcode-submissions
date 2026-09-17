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
     * @return {number}
     */
    goodNodes(root: TreeNode | null): number {
        let count = 0;

        function dfs(node: TreeNode | null, prevMax: number) {
            // check the base case
            if(!node) return

            // check if the node correct
            if(node.val >= prevMax) count++;

            const newMax = Math.max(prevMax, node.val);
            dfs(node.left, newMax);
            dfs(node.right, newMax);
        }

        dfs(root, Number.NEGATIVE_INFINITY);

        return count;
    }
}
