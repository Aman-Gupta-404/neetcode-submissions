class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums: number[], k: number): void {
        // brute force solution
        if(k === nums.length) return

        if(k > nums.length) k = k % nums.length

        const result = [];

        for(let i = nums.length - k; i < nums.length; i++) {
            result.push(nums[i]);
        }

        for(let i = 0; i < nums.length - k; i++) {
            result.push(nums[i]);
        }

        console.log({ result });
        console.log({ nums })

        for(let i = 0; i < nums.length; i++) {
            nums[i] = result[i];
        }
    }
}
