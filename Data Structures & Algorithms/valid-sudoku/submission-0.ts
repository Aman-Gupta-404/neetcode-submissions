class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        // check every row
        for(let r = 0;  r < board.length; r++) {
            // maintain set
            const set = new Set<string>()
            for(let c = 0; c < board.length; c++) {
                if (board[r][c] === ".") continue;
                if(set.has(board[r][c])) {
                    return false;
                }

                set.add(board[r][c]);
            }
        }

        // check every column
        for(let c = 0; c < board.length; c++) {
            const set = new Set<string>();

            for(let r = 0; r < board.length; r++) {
                if (board[r][c] === ".") continue;
                if(set.has(board[r][c])) {
                    return false;
                }

                set.add(board[r][c]);
            }
        }

        // check for each sub-box
        const map = new Map<string, Set<string>>();

        for(let r = 0; r < board.length; r++) {
            for(let c = 0; c < board.length; c++) {
                if (board[r][c] === ".") continue;

                // check the sub box it belongs to
                const subRow = Math.floor(r / 3);
                const subCol = Math.floor(c / 3);

                // check if any value repeated for this cell
                const key = `${subRow},${subCol}`;

                const set = map.get(key);

                if(set && set.has(board[r][c])) {
                    return false;
                }

                if(map.has(key)) map.set(key, map.get(key).add(board[r][c]));
                else map.set(key, new Set<string>([board[r][c]]));
            }
        }

        return true;

    }
}
