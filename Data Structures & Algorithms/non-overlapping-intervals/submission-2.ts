class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals: number[][]): number {
        if(intervals.length <= 1) return 0;
        
        intervals.sort((a, b) => a[1] - b[1]);
        
        let prevInterval: number[] = intervals[0];

        let count = 0;

        for(let i = 1; i < intervals.length; i++) {
            if(intervals[i][0] < prevInterval[1]) {
                // overlapping, remove the curr interval
                count++;
            } else {
                prevInterval = intervals[i];
            }
        }

        return count;
    }
}
