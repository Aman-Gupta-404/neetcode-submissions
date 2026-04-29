class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        // sort the array
        nums.sort((a, b) => a - b);
        nums = [...new Set(nums)];
        
        if(nums.length <= 1) return nums.length;
        
        let res = 0;
        let len = 1;
        
        // loop through the array and check its continuity
        for(let i = 1; i < nums.length; i++) {
            const curr = nums[i];
            const prev = nums[i - 1];
            if(curr === prev + 1) len++
            else {
                res = Math.max(res, len);
                len = 1
            }

            if(i === nums.length - 1) res = Math.max(res, len);
        }

        return res;
    }
}
