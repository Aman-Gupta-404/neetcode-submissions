class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // create a set
        const set = new Set(nums);
        let res = 0;
        // loop in the set
        for(const num of set) {
            // if set has num - 1, its not the start of the seq
            if(set.has(num - 1)) continue;

            let len = 1
            while(set.has(num + len)) {
                len++;
            }
            res = Math.max(res, len);
        }
        return res;
    }
}
