class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // brute force approach
        const result = new Array(nums.length);

        for(let i = 0; i < nums.length; i++) {
            let prod = 1;
            for(let j = 0; j < nums.length; j++) {
                if(j === i) continue;
                prod = prod * nums[j];
            }
            result[i] = prod;
        }

        return result
    }
}
