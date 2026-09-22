class Solution {
    heap: number[];
    
    // min heap
    
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums: number[], k: number): number {
        // priority queue
        
        // initialize the queue
        this.heap = []

        // add elements to it
        for(let i = 0; i < nums.length; i++) {
            this.add(nums[i])

            // check if the size exceeds
            if(this.heap.length > k) {
                // bubble down
                this.bubbleDown()
            }
        }

        console.log(this.heap);

        return this.heap[0]

    }


    add(num: number): void {
        this.heap.push(num);

        // sort it 
        let currIdx = this.heap.length - 1;

        while(currIdx > 0) {
            let pIndx = Math.floor((currIdx - 1) / 2);
            // compare parent with child
            if(this.heap[pIndx] > this.heap[currIdx]) {
                // swap
                [this.heap[pIndx], this.heap[currIdx]] = [this.heap[currIdx], this.heap[pIndx]]
                // update the curr & pIdx
                currIdx = pIndx
            } else break;
        }
    }

    bubbleDown(): void {
        let idx = 0;
        let lastElem = this.heap.pop()
        if(this.heap.length <= 0) return

        this.heap[0] = lastElem;
        let smallIdx = idx;

        while(true) {
            // get child idx
            const left = (2 * smallIdx) + 1;
            const right = (2 * smallIdx) + 2;

            if(left < this.heap.length && this.heap[left] < this.heap[smallIdx]) {
                smallIdx = left
            }

            if(right < this.heap.length && this.heap[right] < this.heap[smallIdx]) {
                smallIdx = right
            }

            if(smallIdx === idx) {
                break
            }

            // swap
            [this.heap[smallIdx], this.heap[idx]] = [this.heap[idx], this.heap[smallIdx]];

            idx = smallIdx;
        }
    }
}
