class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points: number[][], k: number): number[][] {
        // get distance for each co-ordinates
        const d: number[][] = [];

        for(const [x, y] of points) {
            // calculate distance
            const distance = Math.sqrt(x * x + y * y);

            d.push([x, y, distance]);
        }

        // sort the distance in ascending order
        const res = d.sort((a, b) => a[2] - b[2]).slice(0, k).map(d => [d[0], d[1]]);

        return res;
    }
}
