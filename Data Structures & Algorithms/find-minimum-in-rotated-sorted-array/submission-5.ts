class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        // binary search
        let l= 0, r = nums.length - 1;

        let smallest = nums[0];

        while(l < r) {
            // compare the left and right pointer --> upd smallest
            smallest = Math.min(smallest, nums[l], nums[r]);

            // find mid --> choose a side
            const mid = l + Math.floor(((r - l) / 2));

            // check which side is sorted
            if(nums[l] < nums[mid]) {
                // left side is sroted
                l = mid + 1;
            }
            else {
                // the other side is non-sorted
                r = mid;
            }
        }

        return smallest
    }
}
