class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        // brute force approach
        // pick every single possible duets

        let vol = 0;

        for(let i = 0; i < heights.length; i++) {
            for(let j = i + 1; j < heights.length; j++) {
                const width = j - i;
                const height = Math.min(heights[i], heights[j]);

                let currVol = height * width;

                vol = Math.max(vol, currVol);
            }
        }

        return vol;
    }
}
