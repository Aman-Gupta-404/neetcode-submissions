class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
       let l = 0, r = nums.length - 1;

       let s = nums[0];

       while(l <= r) {
            if(nums[l] <= nums[r]) {
                s = Math.min(s, nums[l]);
                break;
            }

            const m = l + Math.floor((r - l) / 2);
            s = Math.min(s, nums[m]);
            if(nums[l] <= nums[m]) {
                l = m + 1;
            } else {
                r = m - 1;
            }
       }

       return s;
    }
}
