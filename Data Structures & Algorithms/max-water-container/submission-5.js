class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        // optimized solution using 2 pointer

        let l = 0, r = heights.length - 1;
        let result = 0;

        while(l < r) {
            const ans = Math.min(heights[l], heights[r]) * (r - l);

            result = Math.max(ans, result);

           if(heights[l] < heights[r]) l++;
           else r--;
        }

        return result;
    }
}
