class Solution {
    dfs(row: number, col: number, grid: string[][], visited: Set<string>): void {
        // boundry check
        if(row < 0 || col < 0 || row >= grid.length || col >= grid[0].length) return;


        // check if its water
        if(grid[row][col] === "0") return;

        const key =`${row.toString()},${col.toString()}`;
        if(visited.has(key)) return

        visited.add(key);

        const n = [
            [row, col - 1],
            [row, col + 1],
            [row -1, col],
            [row + 1, col]
        ]

        for(const [r, c] of n) {
            this.dfs(r, c, grid, visited);
        }
    }

    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {
        const visited = new Set<string>();
        let count = 0;

        for(let r = 0; r < grid.length; r++) {
            for(let c = 0; c < grid[r].length; c++) {
                const node = grid[r][c];
                const key = `${r.toString()},${c.toString()}`;
                if(node === "0" || visited.has(key)) continue;
                                    
                // we have found our land
                count++;
                this.dfs(r, c, grid, visited);
            }
        }
        return count;
    }
}
