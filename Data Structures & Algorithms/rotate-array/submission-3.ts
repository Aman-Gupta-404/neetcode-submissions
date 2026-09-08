class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums: number[], k: number): void {
        if(nums.length === k) return;

        if(k > nums.length) k = k % nums.length;

        for(let i = 1; i <= k; i++) {
            const elem = nums.pop();

            nums.unshift(elem);
        }
    }
}
