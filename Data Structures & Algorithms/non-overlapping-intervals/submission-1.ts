class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals: number[][]): number {
        if(intervals.length === 1) return 0;
        
        // sort the interval by start time
        intervals.sort((a, b) => a[1] - b[1]);
        
        let result = 0;
        let prevEnd = intervals[0][1];

        for(let i = 1; i < intervals.length; i++) {
            if(intervals[i][0] < prevEnd) {
                result++;
            } else {
                prevEnd = intervals[i][1];
            }
        }

        return result;
    }
}
