class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let res = 0;

        const set = new Set(nums);

        for(let i = 0; i < nums.length; i++) {
            // loop through the array, pick the element
            // check the sequence
            let curr = nums[i];
            let len = 0
            while(set.has(curr)) {
                len++;
                curr++;
            }

            res = Math.max(res, len);
        }

        return res;
    }
}
