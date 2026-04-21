class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const map = new Map();
        const n = nums.length;

        let prod = 1;

        // [  1,  2,  4,  6 ] 
        //   -4  -3  -2  -1

        //  0 --> 1
        //  1 --> 2
        // 2 --> 
        // 3 -->
        // -1 --> 6
        // -2 --> 24
        // -3 -->
        // -4 --> 
        
        for(let i = 0; i < n; i++) {
            prod = prod * nums[i];
            map.set(i, prod);
        }

        prod = 1;
        for(let i = n - 1; i >= 0; i--) {
            prod = prod * nums[i];
            map.set(i - n, prod)
        }

        const result = new Array(n);
        for(let i = 0; i < n; i++) {
            const preIdx = i === 0 ? null : i - 1;
            const postIdx = i === n - 1 ? null : (i - n) + 1

            const preVal =  preIdx !== null ? map.get(preIdx) : 1;
            const postVal = postIdx !== null ? map.get(postIdx) : 1;

            const prod = preVal * postVal;

            result[i] = prod
        }

        return result;
    }
}
