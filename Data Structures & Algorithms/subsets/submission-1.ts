class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums: number[]): number[][] {
        // maintain result
        const result: number[][] = [];
        const subset: number[] = [];

        function dfs(idx: number) {
            result.push([...subset])

            for(let i = idx; i < nums.length; i++) {
                // add element to the subset
                subset.push(nums[i]);

                // go deeper into the decision tree
                dfs(i+1);

                // reverse the decision (backtrack);
                subset.pop();
            }
        }

        dfs(0);

        return result;
    }
}
