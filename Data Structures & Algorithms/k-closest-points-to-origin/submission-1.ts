class Solution {
    heap: number[][];
    
    // val -> [x, y, distance]
    add(val: number[]) {
        this.heap.push(val);

        let currIdx = this.heap.length - 1;
        
        while(currIdx > 0) {
            // get the parent index
            const pIdx = Math.floor((currIdx - 1) / 2);

            if(this.heap[currIdx][2] < this.heap[pIdx][2]) {
                [this.heap[currIdx], this.heap[pIdx]] = [this.heap[pIdx], this.heap[currIdx]]
                currIdx = pIdx;
            } else break
        }
    }
    
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points: number[][], k: number): number[][] {
        this.heap = []
        const res: number[][] = [];

        for(let [x, y] of points) {
            this.add([x, y, this.getDistance(x, y)]);
        }

        for(let i = 0; i < k; i++) {
            // get the smallest heap element
            const s = this.heap[0];
            res.push([s[0], s[1]])
            // bubble down
            this.removeElement();
        }

        return res;
    }

    removeElement() {
        let idx = 0;

        const lastElem = this.heap.pop();

        if(!this.heap.length) return;

        this.heap[0] = lastElem;
        let smallest = idx;

        while(true) {
            const leftIdx = Math.floor((2 * idx) + 1)
            const rightIdx = Math.floor((2 * idx) + 2)

            if(leftIdx < this.heap.length && this.heap[leftIdx][2] < this.heap[smallest][2]) {
                smallest = leftIdx;
            }
            if(rightIdx < this.heap.length && this.heap[rightIdx][2] < this.heap[smallest][2]) {
                smallest = rightIdx;
            }

            if(smallest === idx) break;
            
            [this.heap[smallest], this.heap[idx]] = [this.heap[idx], this.heap[smallest]];
            
            idx = smallest
        }
    }

    getDistance(x: number, y: number) {
        return Math.sqrt(x * x + y * y);
    }
}
