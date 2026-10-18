class Solution {
    // heap max heap of size k
    heap: number[][];
    k: number;

    addToHeap(val: number[]) {
        this.heap.push(val);

        if(this.heap.length <= 1) return;
        let currIdx = this.heap.length - 1;
        
        while(currIdx > 0) {
            let pIdx = Math.floor((currIdx - 1) / 2);
            if(this.heap[pIdx][2] < this.heap[currIdx][2]) {
                [this.heap[pIdx], this.heap[currIdx]] = [this.heap[currIdx], this.heap[pIdx]];
            } else break;

            currIdx = pIdx;
        }

        // remove the elements if its beyond k size
        if(this.heap.length > this.k) {
            // remove the element
            this.removeFromHeap();
        }

    }

    removeFromHeap() {
        let idx = 0;
        
        let lastElem = this.heap.pop();

        if(!this.heap.length) return;

        this.heap[0] = lastElem;
        
        let largest = 0;

        while(true) {
            // get children index
            let left = (2 * largest) + 1;
            let right = (2 * largest) + 2;

            if(left < this.heap.length && this.heap[left][2] > this.heap[largest][2]) {
                // [this.heap[left], this.heap[largest]] = [this.heap[largest], this.heap[left]];
                largest = left;
            }

            if(right < this.heap.length && this.heap[right][2] > this.heap[largest][2]) {
                // [this.heap[right], this.heap[largest]] = [this.heap[largest], this.heap[right]];
                largest = right;
            }

            if(idx === largest) break;

            [this.heap[idx], this.heap[largest]] = [this.heap[largest], this.heap[idx]];

            idx = largest
        }
    }

    getDistance(x: number, y: number) {
        // get the distance form origin
        return Math.sqrt((x * x) + (y * y)) 
    }

    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points: number[][], k: number): number[][] {
        this.heap = [];
        this.k = k

        for(let [x, y] of points) {
            const d = this.getDistance(x, y);

            this.addToHeap([x, y, d])
        }

        return this.heap.map(item => [item[0], item[1]]);
    }
}
