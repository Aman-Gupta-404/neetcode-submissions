class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums: number[]): number[][] {
        const result: number[][] = [];
        const subset: number[] = [];

        function dfs(idx: number) {
            // push the existing subset
            result.push([...subset]);

            for(let i = idx; i < nums.length; i++) {
                // add the decision value
                subset.push(nums[i]);
                
                // go deep into decision
                dfs(i + 1);

                // go back to the prev decision
                subset.pop();
            }
        }

        dfs(0);

        return result
    }
}
