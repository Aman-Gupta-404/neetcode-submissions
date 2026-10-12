class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        const dp = {};

        function count(i: number): number {
            if(i <= 2) return i;

            if(dp[i]) return dp[i];

            const ways = count(i - 1) + count(i - 2);

            dp[i] = ways;

            return ways;
        }


        return count(n);
    }
}
