class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        // binary search

        let l = 0, r = nums.length - 1;

        while(l <= r) {
            // check if target is in l or r position
            if(nums[l] === target) return l;
            if(nums[r] === target) return r;

            // get the mid point
            const mid = l + Math.floor(((r - l) / 2));

            if(nums[mid] === target) return mid;

            if(nums[l] <= nums[mid]) {
                // left side is sorted
                if(nums[l] < target && target < nums[mid]) {
                    // number belongs in left sub array
                    r = mid;
                } else {
                    l = mid + 1;
                }
            } else {
                // right side is sorted
                if(nums[mid] < target && target < nums[r]) {
                    l = mid + 1;
                } else {
                    r = mid;
                }
            }
        }

        return -1;
    }
}
