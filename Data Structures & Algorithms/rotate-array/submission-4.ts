class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums: number[], k: number): void {
        if(nums.length === k) return;

        if(k > nums.length) k = k % nums.length;

        // rotate the array
        let l = 0, r = nums.length - 1;

        while(l < r) {
            [nums[l], nums[r]] = [nums[r], nums[l]]
            l++;
            r--;
        }

        l = k, r = nums.length - 1;

        while(l < r) {
            [nums[l], nums[r]] = [nums[r], nums[l]]
            l++;
            r--;
        }

        l = 0, r = k - 1;

        while(l < r) {
            [nums[l], nums[r]] = [nums[r], nums[l]]
            l++;
            r--;
        }
    }
}
