class KthLargest {
    k: number;
    heap: number[];

    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k: number, nums: number[]) {
        this.k = k;
        this.heap = [];
        for(let n of nums) {
            this.add(n);
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val: number): number {
        this.heap.push(val);

        if(this.heap.length > 1) {
            this.bubbleUp(this.heap.length - 1);
        }

        if(this.heap.length > this.k) {
            this.bubbleDown();
        }

        return this.heap[0]
    }

    bubbleUp(idx: number) {
        const lastIdx = idx;
        const parentIdx = Math.floor((lastIdx - 1) / 2);

        if(this.heap[parentIdx] > this.heap[lastIdx]) {
            [this.heap[parentIdx], this.heap[lastIdx]] = [this.heap[lastIdx], this.heap[parentIdx]]
            this.bubbleUp(parentIdx);
        } else {
            return;
        }
    };

    bubbleDown() {
        const removedRoot = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        const heapLen = this.heap.length

        // now bubble down from the root
        let i = 0;

        while(true) {
            const leftIdx = (2 * i) + 1;
            const rightIdx = (2 * i) + 2;
            let smallestIdx = i;

            if(leftIdx < heapLen && this.heap[smallestIdx] > this.heap[leftIdx]) {
                smallestIdx = leftIdx
            }

            if(rightIdx < heapLen && this.heap[smallestIdx] > this.heap[rightIdx]) {
                smallestIdx = rightIdx;
            }

            if(i === smallestIdx) break;

            [this.heap[smallestIdx], this.heap[i]] = [this.heap[i], this.heap[smallestIdx]]

            i = smallestIdx
        }
    }
}
