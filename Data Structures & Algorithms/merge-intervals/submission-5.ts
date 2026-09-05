class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals: number[][]): number[][] {
        if(intervals.length <= 1) return intervals;

        // sort the intervals
        intervals.sort((a, b) => a[0] - b[0]);

        // store the result
        const result: number[][] = [intervals[0]];

        // merge the intervals
        for(let i = 1; i < intervals.length; i++) {
            // merge if the intervals overlap

            const lastInterval = result.length - 1;

            const currStart = intervals[i][0];
            const prevEnd = result[lastInterval][1];

            if(currStart <= prevEnd) {
                result[lastInterval] = [result[lastInterval][0], Math.max(result[lastInterval][1], intervals[i][1])]
            } else {
                result.push(intervals[i])
            }
        }

        return result;
    }
}
