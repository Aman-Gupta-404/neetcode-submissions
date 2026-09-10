class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums: number[]): number[] {
        // brute force
        const max = Math.floor(nums.length / 3)
        const map = new Map<number, number>();

        for(let i = 0; i < nums.length; i++) {
            map.set(nums[i], (map.get(nums[i]) || 0) + 1)
        }

        let res = [];

        for(const [key, value] of map) {
            if(value > max) res.push(key);
        }

        return res;
    }
}
