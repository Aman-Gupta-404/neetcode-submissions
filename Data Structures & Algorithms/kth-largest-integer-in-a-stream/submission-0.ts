

class KthLargest {
    k: number;
    heap: number[];
    
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k: number, nums: number[]) {
        // initialize the variables
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
        // first add it to the end of heap
        this.heap.push(val);

        // bubble up and fullfil the heap condition
        this.bubbleup(this.heap.length);

        // check if the heap length has exceed the size
        if(this.heap.length > this.k) {
            this.removeMin();
        }

        return this.heap[0];
    }

    removeMin() {
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();

        this.bubbleDown(0);
    }

    bubbleup(length: number) {
        let idx = length - 1;

        while(idx > 0) {
            const pIdx = Math.floor((idx - 1) / 2);
            if(this.heap[pIdx] > this.heap[idx]) {
                [this.heap[pIdx], this.heap[idx]] = [this.heap[idx], this.heap[pIdx]];
            }

            idx = pIdx;
        }
    }

    bubbleDown(index: number) {
        while(true) {
            let smallest = index;

            const left = (2 * index) + 1;
            const right = (2 * index) + 2;

            if(left < this.heap.length && this.heap[smallest] > this.heap[left]) {
                smallest = left;
            }

            if(right < this.heap.length && this.heap[smallest] > this.heap[right]) {
                smallest = right
            }

            if(smallest === index) {
                break;
            }

            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }
}
