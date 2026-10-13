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
        // BFS
        if(!root) return [];

        const queue: TreeNode[][] = [[root]];
        let i = 0;
        const result = []

        while(i < queue.length) {
            const layer = queue[i++];
            
            if(!layer.length) break;

            if(layer[layer.length - 1]) {
                result.push(layer[layer.length - 1].val)
            }

            const newLayer: TreeNode[] = [];

            for(let n of layer) {
                if(n.left) newLayer.push(n.left);
                if(n.right) newLayer.push(n.right);
            }

            queue.push(newLayer);
        }

        return result;
    }
}
