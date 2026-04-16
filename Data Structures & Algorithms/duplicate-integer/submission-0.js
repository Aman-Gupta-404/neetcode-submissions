class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // iterate through the array
        // pick one element & check if duplicates exist
        let result = false;

        for(let i = 0; i < nums.length; i++) {
            for(let j = i + 1; j < nums.length; j ++) {
                if(nums[i] === nums[j]) {
                    // duplicate exists
                    result = true;
                    break;
                }
            }

            if(result) break;
        }

        return result;
    }
}
