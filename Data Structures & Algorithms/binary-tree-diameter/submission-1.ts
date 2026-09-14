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
    getDepth(root: TreeNode | null) {
        if(!root) return 0;

        const leftDepth = this.getDepth(root.left) + 1
        const rightDepth = this.getDepth(root.right) + 1;

        return Math.max(leftDepth, rightDepth);
    }
    
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root: TreeNode | null): number {
        if(!root) return 0;

        let result = 0;

        const queue: TreeNode[][] = [[root]];

        let counter = 0;

        while(counter < queue.length) {
            const row = queue[counter++];

            const newRow = [];

            for(let node of row) {
                // perform the operation on the node
                const leftDepth = this.getDepth(node.left);
                const rightDepth = this.getDepth(node.right)

                const d = leftDepth + rightDepth;
                result = Math.max(result, d);

                // push node child to next row
                if(node.left) newRow.push(node.left);
                if(node.right) newRow.push(node.right);
            }

            if(newRow.length) queue.push(newRow);
        }

        return result;        
    
    }
}
