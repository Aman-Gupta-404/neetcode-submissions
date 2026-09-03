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
        // BFS Method
        if(!root) return null;
        
        const queue: TreeNode[] = [root];

        while(queue.length) {
            const elem = queue.shift();

            if(elem.left) queue.push(elem.left);
            if(elem.right) queue.push(elem.right);
            
            // reverse the node
            [elem.left, elem.right] = [elem.right, elem.left];

        }

        return root;
    }
}
