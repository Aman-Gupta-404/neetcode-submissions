class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals: number[][]): number[][] {
        // sort the interval by start time (inc order)
        intervals.sort((a, b) => a[0] - b[0]);

        // iterate and merge them
        const result: number[][] = [intervals[0]];

        for(let i = 1; i < intervals.length; i++) {
            const [currStart, currEnd] = intervals[i];
            const prevEnd = result[result.length - 1][1];

            if(currStart <= prevEnd) {
                result[result.length - 1][1] = Math.max(prevEnd, currEnd)
            } else {
                result.push([currStart, currEnd]);
            }
        }

        return result;
    }
}
