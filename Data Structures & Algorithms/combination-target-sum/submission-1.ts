class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums: number[], target: number): number[][] {
        const result: number[][] = [];
        const subset: number[] = [];
        let setSum = 0;

        // map --> { number: frequency }
        const map = new Map<number, number>()

        function dfs(idx: number) {
            // const sum = subset.reduce((acc, curr) => acc + curr, 0);
            const sum = setSum;
            
            if(sum === target) {
                // if the subset is valid, add it
                result.push([...subset]);
                return;
            }

            if(sum > target) return;


            // todo: check this later
            let i = idx;

            while(i < nums.length) {
                // add to decision tree;
                subset.push(nums[i]);
                setSum += nums[i];

                // process the decision
                dfs(i)

                // remove from decision tree
                subset.pop();
                setSum -= nums[i];

                i++;
            }
        }

        dfs(0);

        return result;
    }
}
