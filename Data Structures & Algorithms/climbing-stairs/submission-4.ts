class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        if(n <= 2) return n;

        let prev = 2;
        let prevPrev = 1;
        let result = prev;

        for(let i = 3; i <= n; i++) {
            result = prev + prevPrev;

            prevPrev = prev;
            prev = result;
        }

        return result;
    }
}
