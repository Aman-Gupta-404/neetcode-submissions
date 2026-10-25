class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        // brute force --> O(n^2)

        const map = new Map<number, number>();
        // n1 + n2 = target
        // n2 = target - n1
        for(let i = 0;  i < nums.length; i++) {
            const n2 = target - nums[i];
            if(map.has(n2)) {
                // complemitary exists, return the pair
                return [map.get(n2), i];
            } else {
                map.set(nums[i], i);
            }
        }

        return [];
    }
}
