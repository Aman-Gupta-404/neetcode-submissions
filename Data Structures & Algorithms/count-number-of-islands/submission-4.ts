class Solution {
    dfs(r: number, c: number, grid: string[][], visited: Set<string>) {
        const key = `${r},${c}`;
        const rowLen = grid.length;
        const colLen = grid[0].length;

        if(
            r < 0 || r >= rowLen ||
            c < 0 || c >= colLen
        ) return;

        if(grid[r][c] === "0" || visited.has(key)) return;
    
        // add the cell to the visited set
        visited.add(key)

        // get the neighbours and visit them
        const neighbors = [
            [r, c - 1],
            [r, c + 1],
            [r - 1, c],
            [r + 1, c],
        ]

        for(const [_r, _c] of neighbors) {
            this.dfs(_r, _c, grid, visited);
        }
    }

    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {
        // navigate to each element & check if its land
        // if land, mark as visited

        const visited = new Set<string>();

        let count = 0;

        for(let r = 0; r < grid.length; r++) {
            for(let c = 0; c < grid[0].length; c++) {
                
                const key = `${r},${c}`;
                
                if(grid[r][c] === "0" || visited.has(key)) continue;

                this.dfs(r, c, grid, visited);
                count++;
            }
        }

        return count;
    }
}
