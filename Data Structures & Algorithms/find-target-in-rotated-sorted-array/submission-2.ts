class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let l = 0, r = nums.length - 1;
        
        let res = -1;

        while(l <= r) {
            const mid = l + Math.floor((r - l) / 2);

            if(nums[mid] === target) {
                res = mid;
                break;
            }

            if(nums[l] <= nums[mid]) {
                // left side is sorted
                if(nums[l] <= target && target < nums[mid]) {
                    r = mid - 1
                } else {
                    l = mid + 1
                }
            } else {
                // right side is sorted
                if(nums[mid] < target && target <= nums[r]) {
                    l = mid + 1
                } else {
                    r = mid - 1
                }
            }
        }

        return res;
    }
}
