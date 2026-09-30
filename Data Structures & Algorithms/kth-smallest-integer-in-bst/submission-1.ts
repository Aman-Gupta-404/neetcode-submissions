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
    // max heap
    heap: number[];
    k: number;

    add(num: number) {
        this.heap.push(num);

        let idx = this.heap.length - 1;
        
        while(idx > 0) {
            const pIdx = Math.floor((idx - 1) / 2);
            if(this.heap[pIdx] < this.heap[idx]) {
                [this.heap[pIdx], this.heap[idx]] = [this.heap[idx], this.heap[pIdx]];
                idx = pIdx
            } else break;
        }

        // trim the heap
        if(this.heap.length > this.k) {
            this.removeElem()
        }

    }

    removeElem() {
        let idx = 0;

        let largest = idx;

        const lastElem = this.heap.pop();

        if(!this.heap.length) return;

        this.heap[0] = lastElem

        while(true) {
            let left = ((2 * idx) + 1);
            let right = ((2 * idx) + 2);

            if(left < this.heap.length && this.heap[left] > this.heap[largest]) {
                largest = left 
            }
            if(right < this.heap.length && this.heap[right] > this.heap[largest]) {
                largest = right;
            }

            if(largest === idx) return;

            // swap
            [this.heap[largest], this.heap[idx]] = [this.heap[idx], this.heap[largest]];

            idx = largest
        }
    }

    dfs(node: TreeNode | null) {
            // base case
            if(!node) return;

            this.add(node.val);

            this.dfs(node.left);
            this.dfs(node.right);

            return;
        }

    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root: TreeNode | null, k: number): number {
        this.heap = []
        this.k = k;

        this.dfs(root);
        console.log("heap: ", this.heap)

        return this.heap[0];
    }
}
