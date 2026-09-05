class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals: number[][], newInterval: number[]): number[][] {
        intervals.push(newInterval);
        
        if(intervals.length <= 1) return intervals;

        intervals.sort((a, b) => a[0] - b[0]);

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
