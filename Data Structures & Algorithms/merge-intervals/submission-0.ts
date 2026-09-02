class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals: number[][]): number[][] {
        if(intervals.length === 1) return intervals;

        // sort the intervals by start time
        intervals.sort((a, b) => a[0] - b[0]);

        const result: number[][] = [intervals[0]]

        for(let i = 1; i < intervals.length; i++) {
            const prevInterval = result[result.length - 1];

            if(intervals[i][0] <= prevInterval[1]) {
                // it can be merged
                result[result.length - 1] = [prevInterval[0], Math.max(prevInterval[1], intervals[i][1])]
            } else {
                result.push(intervals[i]);
            }
        }

        return result;
    }
}
