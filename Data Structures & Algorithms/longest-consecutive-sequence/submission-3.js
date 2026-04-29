class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        nums.sort((a, b) => a - b);
        let len = 0;
        let i = 0;

        // const numbers = new Set(nums);
        nums = [...new Set(nums)];

        while (i < nums.length) {
            // pick the first element
            let _len = 1;
            let pointerUpdated = false;
            // move up the array and check the sequence
            for(let j = i + 1; j < nums.length; j++) {
                if(nums[j] === nums[j - 1] + 1) {
                    _len = _len + 1;
                }
                else {
                    i = j;
                    pointerUpdated = true;
                    break;
                }
            }

            if(_len > len) len = _len;

            if(!pointerUpdated) i++;
        }

        return len;
    }
}
