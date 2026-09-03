/**
 * Definition of Interval:
 * class Interval  {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals: Interval[]): number {
        const startTimes = intervals.map(i => i.start).sort((a,b) => a - b);
        const endTimes = intervals.map(i => i.end).sort((a,b) => a - b);

        let s = 0, e = 0;
        let count = 0;
        let min = 0;

        while(s < startTimes.length) {
            if(endTimes[e] <= startTimes[s]) {
                e++;
                count--;
            } else {
                s++;
                count++;
            }
            min = Math.max(min, count);
        }

        return min;
    }
}
