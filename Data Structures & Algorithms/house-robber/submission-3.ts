class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {

        let rob1 = 0, rob2 = 0;

        for(let n of nums) {
            const _rob = Math.max(n + rob1, rob2);

            rob1 = rob2;
            rob2 = _rob;
        } 

        return rob2;
    }
}
