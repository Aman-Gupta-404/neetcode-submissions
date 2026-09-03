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
    maxDepth(root: TreeNode | null): number {
        if(!root) return 0;

        let queue: TreeNode[][] = [[root]];
        let result = 0;

        while(queue.length) {
            const row = queue.shift();
            
            if(row && row.length) result++;

            let newRow: TreeNode[] = []
            for(let i = 0; i < row.length; i++) {
                const curr = row[i];
                if(curr.left) newRow.push(curr.left);
                if(curr.right) newRow.push(curr.right);
            }

            if(newRow.length) queue.push(newRow);
        }

        return result;
    }
}
