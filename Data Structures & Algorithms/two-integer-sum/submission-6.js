class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // map
        const map = new Map();

        for(let i = 0; i < nums.length; i++) {
            // iterage over the arr
            // nums[i] + nums[j] = target;
            // nums[j] = target - nums[i]

            if(map.has(nums[i])) {
                return [i, map.get(nums[i])].sort();
            } else {
                const diff = target - nums[i];
                map.set(diff, i);
            }
        }

        return [];
    }
}
