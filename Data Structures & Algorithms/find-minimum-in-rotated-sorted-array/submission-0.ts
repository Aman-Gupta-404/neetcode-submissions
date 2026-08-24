class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        // brute force solution
        let min = Number.POSITIVE_INFINITY;

        for(let i = 0; i < nums.length; i++) {
            min = Math.min(min, nums[i]);
        };

        return min;
    }
}
