class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums: number[]): number[][] {
        const result = [];
        let set = [];

        function dfs(n: number): void {
            // console.log({ set })
            result.push([...set]);

            if(n >= nums.length) return;

            for(let i = n; i < nums.length; i++) {
                set.push(nums[i]);

                dfs(i + 1);

                set.pop();
            }
        }

        dfs(0);

        return result;
    }
}
