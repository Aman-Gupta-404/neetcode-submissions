class Solution {
    result: number[][];

    dfs(r: number, c: number, grid: number[][], visited: Set<string>, prev: number) {
       const rowLen = grid.length;
       const colLen = grid[0].length;
        const key = `${r},${c}`;

       // check if out of bounds
       if(
        r < 0 || r > rowLen - 1 ||
        c < 0 || c > colLen - 1 ||
        visited.has(key) ||
        grid[r][c] < prev
       ) return;

       visited.add(key);

       const neighbors = [
        [r, c - 1],
        [r, c + 1],
        [r - 1, c],
        [r + 1, c],
       ]

       for(let [row, col] of neighbors) {
        this.dfs(row, col, grid, visited, grid[r][c]);
       }
    }

    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights: number[][]): number[][] {
        // 1. visit cells from the last
        // 2. mark as visited
        // 3. check if it the water flows to neighbours and recursively check
        // 4. store the result

        const rowLen = heights.length;
       const colLen = heights[0].length;

        const pacific = new Set<string>();
        const atlantic = new Set<string>();

        for(let c = 0; c < colLen; c++) {
            // run dfs on top edge
            this.dfs(0, c, heights, pacific, heights[0][c])

            //run def on bottom edge
            this.dfs(rowLen - 1, c, heights, atlantic, heights[rowLen - 1][c]);
        }

        for(let r = 0; r < rowLen; r++) {
            // run dfs on the left edge
            this.dfs(r, 0, heights, pacific, heights[r][0]);

            // run dfs on the right edge
            this.dfs(r, colLen - 1, heights, atlantic, heights[r][colLen - 1]);
        }

        const result: number[][] = []

        // loop through the grid
        for(let r = 0; r < rowLen; r++) {
            for(let c = 0; c < colLen; c++) {
                // check if the node connects both atlantic and pacific
                const key = `${r},${c}`;

                if(pacific.has(key) && atlantic.has(key)) {
                    result.push([r, c]);
                }
            }
        }

        return result;
    }
}
