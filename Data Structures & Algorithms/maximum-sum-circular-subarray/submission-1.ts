class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubarraySumCircular(nums: number[]): number {
        // calculate max sum using kadance
        // calculate the min sum using kadance

        let sum = 0;
        let maxSum = nums[0];
        let minSum = nums[0];

        for(let i = 0; i < nums.length; i++) {
            if(sum < 0) sum = 0;

            sum = sum + nums[i];

            maxSum = Math.max(maxSum, sum);
        }

        sum = 0;
        for(let i = 0; i < nums.length; i++) {
            if(sum > 0) sum = 0;

            sum = sum + nums[i];

            minSum = Math.min(minSum, sum);
        }

        const total = nums.reduce((acc, curr) => acc + curr, 0);

        return maxSum < 0 ? maxSum : Math.max(maxSum, total - minSum);
    }
}
