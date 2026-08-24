class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        // brute force solution
        let l = 0, r =  nums.length - 1;
        let min = nums[l];

        while(l <= r) {
            if(nums[l] < nums[r]) {
                min = Math.min(min, nums[l]);
                break;
            }

            const mid = l + Math.floor((r - l) / 2);

            min = Math.min(nums[mid], min);

            if(nums[l] <= nums[mid]) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }


        return min;
    }
}
