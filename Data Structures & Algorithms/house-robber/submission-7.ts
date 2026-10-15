class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        let dp = {};

        function dfs(i: number): number {
            if(i === nums.length - 1) return nums[i];
            if(i > nums.length - 1) return 0;
            if(dp[i]) return dp[i]
            const sum1 = nums[i] + dfs(i + 2);
            const sum2 = dfs(i + 1);

            const res = Math.max(sum1, sum2);

            dp[i] = res;

            return res;
        }

        return dfs(0);
    }
}
