class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        // let money = 0;
        // [2, 1, 1, 2]
        const dp = new Map<number, number>()
        
        function dfs(n: number) {
            if(n === nums.length - 1) return nums[n];
            if(n > nums.length - 1) return 0;
            
            if(dp.has(n)) return dp.get(n);
            

            const sum1 = nums[n] + dfs(n + 2);
            const sum2 = dfs(n + 1);

            const res = Math.max(sum1, sum2);
            dp.set(n, res); 
            return res;
        }

        return dfs(0);
    }
}
