class Solution {
    heap: number[];
    
    add(w: number) {
        // push the val to heap
        this.heap.push(w);

        let current = this.heap.length - 1;

        while(current > 0) {
            let pIndx = Math.floor((current - 1) / 2);

            if(this.heap[pIndx] < this.heap[current]) {
                [this.heap[pIndx], this.heap[current]] = [this.heap[current], this.heap[pIndx]]
                current = pIndx;
            } else {
                break
            }
        }
    }

    collideStones() {
        if(this.heap.length <= 1) return; 

        const s1 = this.heap[0];
        console.log("\n======")
        console.log("pre r: ", this.heap);
        // remove the largest
        this.removeStone(0);


        console.log("post r 1: ", this.heap)

        const s2 = this.heap[0];
        
        this.removeStone(0)

        console.log({ s1, s2})
        console.log("post r 2: ", this.heap)
        // remove the second stone

        // if s1 === s2 --> remove both stones
        const diff = s1 - s2;

        if(diff !== 0) {
            // bubble up the value
            this.add(diff);
        }

        console.log(this.heap);


        this.collideStones()
    }

    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones: number[]): number {
        // initialize the priority queue
        this.heap = [];

        // add elements to priority queue
        for(const w of stones) {
            this.add(w);
        }


        // pick the index 0 & 1 elem, and collide it
        this.collideStones();

        return this.heap.length ? this.heap[0] : 0;
    }   

    removeStone(idx: number) {
        if(this.heap.length === 0) return;
        if(this.heap.length === 1) {
            this.heap.pop();
            return;
        }

        const lastElem = this.heap.pop();

        this.heap[idx] = lastElem

        while(true) {
            let largest = idx;
            
            const left = (2 * idx) + 1;
            const right = (2 * idx) + 2;

            if(left < this.heap.length && this.heap[left] > this.heap[largest]) {
                largest = left;
            }

            if(right < this.heap.length && this.heap[right] > this.heap[largest]) {
                largest = right
            }

            if(largest === idx) break;

            // swap the index with right
            [this.heap[largest], this.heap[idx]] = [this.heap[idx], this.heap[largest]];
            idx = largest;
        }
    }
}
