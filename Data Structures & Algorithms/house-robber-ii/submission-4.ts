class Solution {
    helperFunc(arr: number[]): number {
        const dp = new Map<number, number>();

        function dfs(idx: number): number {
            if(idx > arr.length - 1) {
                return 0;
            }

            if(dp.has(idx)) return dp.get(idx);

            const res = Math.max(arr[idx] + dfs(idx + 2), dfs(idx + 1));
            dp.set(idx, res);

            return res;
        }

        return dfs(0)
    }
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        if(nums.length === 1) return nums[0];
        
        return Math.max(this.helperFunc(nums.slice(0, nums.length - 1)), this.helperFunc(nums.slice(1, nums.length)));
    }
}
