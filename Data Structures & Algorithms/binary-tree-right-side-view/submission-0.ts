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
     * @return {number[]}
     */
    rightSideView(root: TreeNode | null): number[] {
        // bfs

        if(!root) return [];

        const result = [];
        const queue: TreeNode[][] = [[root]];

        let counter = 0;

        while(counter < queue.length) {
            const row = queue[counter++];

            const newRow = [];

            for(let node of row) {
                if(node && node.left) newRow.push(node.left);
                if(node && node.right) newRow.push(node.right);
            }

            if(newRow.length) queue.push(newRow)

            result.push(row.pop().val);
        }
        
        return result;
    }
}
