class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        // optimized sol
        let i = 0, j = heights.length - 1;

        let res = 0;

        while(i < j) {
            const vol = Math.min(heights[i], heights[j]) * (j - i);

            res = Math.max(res, vol);

            if(heights[i] < heights[j]) i++;
            else if(heights[j] < heights[i]) j--;
            else {
                i++;
                j--;
            }
        }


        return res;
    }
}
