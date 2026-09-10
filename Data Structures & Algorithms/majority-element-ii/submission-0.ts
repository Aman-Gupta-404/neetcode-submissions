class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums: number[]): number[] {
        // brute force
        const max = Math.floor(nums.length / 3)
        const res = new Set<number>();

        for(let i = 0; i < nums.length; i++) {
            if(res.has(nums[i])) continue;

            let count = 1;
            for(let j = i + 1; j < nums.length; j++) {
                if(nums[j] === nums[i]) count++;
            }

            if(count > max) res.add(nums[i]);
        }

        return Array.from(res);
    }
}
