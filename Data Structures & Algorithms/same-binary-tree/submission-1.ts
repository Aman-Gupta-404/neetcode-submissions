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
    convertTreeToArr(root: TreeNode | null): TreeNode[] {
        if(!root) return [null];

        return [
            root,
            ...this.convertTreeToArr(root.left),
            ...this.convertTreeToArr(root.right)
        ]
    }

    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
        const pArr = this.convertTreeToArr(p);
        const qArr = this.convertTreeToArr(q);
      
        console.log(pArr);
        console.log(qArr);

        if(pArr.length !== qArr.length) return false;

        for(let i = 0; i < pArr.length; i++) {
            const pNode = pArr[i];
            const qNode = qArr[i];
            if(pNode?.val !== qNode?.val) {
                return false;
            }
        }

        return true;
    }
}
