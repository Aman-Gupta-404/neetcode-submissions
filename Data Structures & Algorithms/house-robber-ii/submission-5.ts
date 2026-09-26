class Solution {
    maxRob(arr: number[]): number {
        let prev = 0;
        let prevPrev = 0;

        for(let n of arr) {
            const amt = Math.max(prevPrev + n, prev);

            prevPrev = prev;
            prev = amt;
        }

        return prev;
    }
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        if(nums.length === 1) return nums[0];
        
        return Math.max(this.maxRob(nums.slice(0, nums.length - 1)), 
            this.maxRob(nums.slice(1, nums.length))
        )
    }
}
