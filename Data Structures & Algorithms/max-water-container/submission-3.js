class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        // brute force solution

        let max = 0;

        for(let i = 0; i < heights.length; i++) {
            for(let j = i + 1; j < heights.length; j++) {
                const answer = Math.min(heights[j], heights[i]) * (j - i);

                max = Math.max(answer, max);
            }
        }

        return max;
    }
}
