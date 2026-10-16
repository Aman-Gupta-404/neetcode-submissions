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
     * @return {number[][]}
     */
    levelOrder(root: TreeNode | null): number[][] {
        if(!root) return [];

        const queue: TreeNode[][] = [[root]];
        let p = 0;
        
        let result: number[][] = [];

        while(p < queue.length) {
            // get the latest row
            const row = queue[p++];
            const res = row.map(n => n.val);

            result.push(res);
            const newRow = [];
            for(let n of row) {
                if(n.left) newRow.push(n.left);
                if(n.right) newRow.push(n.right);
            }

            if(newRow.length) queue.push(newRow);
        }

        return result;
    }
}
