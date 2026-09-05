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
        const start = intervals.map(i => i.start).sort((a,b) => a - b);
        const end = intervals.map(i => i.end).sort((a,b) => a - b);

        let s = 0, e = 0;

        let rooms = 0;
        let min = 0;
        while(s < start.length) {  
            if(start[s] < end[e]) {
                rooms++;
                s++;
            } else {
                rooms--;
                e++;
            }

            min = Math.max(rooms, min);
        }

        return min;
    }
}
