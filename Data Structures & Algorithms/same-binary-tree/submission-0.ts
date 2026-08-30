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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    convertTreeToArray(root: TreeNode | null): TreeNode[] {
        const result: TreeNode[] = [];
        const queue = [root]

        while(queue.length) {
            const levelLength = queue.length;
            let res: TreeNode[] = []
    
            for(let i = 0; i < levelLength; i++) {
                const elem = queue.shift();

                res.push(elem);
                
                if(elem) {
                    queue.push(elem.left || null);
                    queue.push(elem.right || null);
                }

            }

            result.push(...res);
        }

        return result;
    }

    isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
        const pArr = this.convertTreeToArray(p);
        const qArr = this.convertTreeToArray(q);

        if(pArr.length !== qArr.length) return false;

        for(let i = 0; i < pArr.length; i++) {
            const pElem = pArr[i]
            const qElem = qArr[i]
            const flag = pElem?.val === qElem?.val && pElem?.left?.val === qElem?.left?.val && pElem?.right?.val === qElem?.right?.val

            if(!flag) return false
        }

        return true
    }
}
