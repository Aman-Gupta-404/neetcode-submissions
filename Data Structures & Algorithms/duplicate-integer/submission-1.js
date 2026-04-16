class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // iterate through the array
        // store the value in the set and before storing
        // check if it already exists
        
        // we use set as checking if element exists is fater compared to array
        const mySet = new Set();

        for(let i = 0; i < nums.length; i++) {
            if(mySet.has(nums[i])) {
                return true;
            }
            mySet.add(nums[i]);
        }

        return false;
    }
}
