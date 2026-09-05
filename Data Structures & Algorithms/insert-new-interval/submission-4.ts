class Solution {
    insertInterval(intervals: number[][], newInterval: number[]) {
        if(intervals.length === 0) {
            intervals.push(newInterval);
            return;
        }
        
        let l = 0, r = intervals.length;
        
        while(l < r) {
            const mid = l + Math.floor((r - l) / 2);

            if(intervals[mid][0] < newInterval[0]) {
                l = mid + 1;
            } else {
                r = mid;
            }
        }

        intervals.splice(l, 0, newInterval)
    }


    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals: number[][], newInterval: number[]): number[][] {
        // intervals.push(newInterval);
        // intervals.sort((a, b) => a[0] - b[0]);

        this.insertInterval(intervals, newInterval);
        
        if(intervals.length <= 1) return intervals;

        const result = [intervals[0]];

        for(let i = 1; i < intervals.length; i++) {
            const prevIdx = result.length - 1
            const currStart = intervals[i][0];
            const prevEnd = result[prevIdx][1]

            if(currStart <= prevEnd) {
                result[prevIdx] = [result[prevIdx][0], Math.max(result[prevIdx][1], intervals[i][1])]
            } else {
                result.push(intervals[i]);
            }
        }

        return result;
    }
}
