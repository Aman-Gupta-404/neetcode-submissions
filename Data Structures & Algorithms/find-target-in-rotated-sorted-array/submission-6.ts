class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        //         l         r
        // nums = [3,4,5,6,1,2], target = 1
        //         0 1 2 2 4 5        
        let l = 0, r = nums.length - 1;
        
        while(l <= r) {    
            // check for both the pointers
            if(nums[l] === target) return l;
            else if(nums[r] === target) return r;

            // divide the array
            const m = l + Math.floor((r - l) / 2);
            if(nums[m] === target) return m;

            // check which side does target belong
            if(nums[l] < nums[m]) {
                // left side is sorted
                if(nums[l] < target && nums[m] > target) {
                    // select the left side
                    r = m - 1;
                } else {
                    l = m + 1;
                }
            } else {
                // right side is sorted
                if(nums[m] <= target && target < nums[r]) {
                    // select the right side
                    l = m + 1;
                } else {
                    r = m - 1;
                }
            }
        }

        return -1;
    }
}
