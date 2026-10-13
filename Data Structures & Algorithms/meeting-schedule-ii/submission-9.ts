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
        // create a start and end array
        const start = intervals.map(i => i.start).sort((a, b) => a - b);
        const end = intervals.map(i => i.end).sort((a, b) => a - b);

        let s = 0;
        let e = 0;

        let rooms = 0;
        let max = 0;

        while(s < start.length) {
            if(start[s] < end[e]) {
                rooms++;
                s++;
            } else {
                rooms--;
                e++
            }

            max = Math.max(rooms, max);
        }

        return max;
    }
}
