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

    bfs(row: number, col: number, grid: string[][], visited: Set<string>): void {
        const queue: number[][] = [ [row, col] ]; // (r, c)[];
        let head = 0;
        while(head < queue.length) {
            const [r, c] = queue[head++];

            if(grid[r][c] === "0") continue;

            const key = `${r},${c}`;

            if(visited.has(key)) continue;

            visited.add(key);

            const roots = [
                [r, c - 1],
                [r, c + 1],
                [r - 1, c],
                [r + 1, c]
            ];

            for(const n of roots) {
                // boundry check
                const _row = n[0];
                const _col = n[1]
                
                if(
                    _row < 0 || _col < 0 || _row >= grid.length || _col >= grid[0].length    
                ) {
                    continue;
                };
                const key = `${_row},${_col}`;
                if(visited.has(key)) continue;

                queue.push(n)
            }
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
                // this.dfs(r, c, grid, visited);
                this.bfs(r, c, grid, visited);
            }
        }
        return count;
    }
}
