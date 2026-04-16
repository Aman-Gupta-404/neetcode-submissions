class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const myMap = new Map();

        for(let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];

            const index = myMap.get(diff);

            if(index >= 0) return [index, i];
            myMap.set(nums[i], i);
        }

        return []
    }
}
