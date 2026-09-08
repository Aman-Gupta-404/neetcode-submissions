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

        const result: number[][] = [];
        const queue: TreeNode[][] = [[root]];

        let i = 0;

        while(i < queue.length) {
            const row: TreeNode[] = queue[i++]
            
            if(!row.length) continue;
            
            const res: number[] = []
            const nextRow: TreeNode[] = []
            
            for(let j = 0; j < row.length; j++) {
                if(row[j]) res.push(row[j].val);
                
                if(row[j].left) nextRow.push(row[j].left);
                if(row[j].right) nextRow.push(row[j].right)
            }
            
            queue.push([...nextRow]);
            result.push([...res]);
        }

        return result;
    }
}
