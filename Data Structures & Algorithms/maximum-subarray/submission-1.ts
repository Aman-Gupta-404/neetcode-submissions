class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums: number[]): number {
        // kadens algo: [2,-3,4,-2,2,1,-1,4]
        let sum = 0;
        let maxSum = nums[0];
        
        for(let i = 0; i < nums.length; i++) {
           if(sum < 0) sum = 0;

            sum = sum + nums[i];
            maxSum = Math.max(sum, maxSum);
        }

        return maxSum;
    }
}
