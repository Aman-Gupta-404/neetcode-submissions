class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        // optimized approach: 2 pointer method

        let l = 0, r = heights.length - 1;
        let result = 0;

        while(l < r) {
            // calculate the volume
            const vol = Math.min(heights[l], heights[r]) * (r - l);

            result = Math.max(vol, result);

            if(heights[l] >= heights[r]) {
                r--;
            } else {
                l++;
            }
        }

        return result;
    }
}
