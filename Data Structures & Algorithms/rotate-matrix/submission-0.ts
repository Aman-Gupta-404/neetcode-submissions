class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix: number[][]): void {
        for(let r = 0; r < matrix.length; r++) {
            for(let c = r; c < matrix[r].length; c++) {
                // replace the elements
                [matrix[r][c], matrix[c][r]] = [matrix[c][r], matrix[r][c]];
            }
        }

        // every row reverse
        for(let r = 0; r < matrix.length; r++) {
            let left = 0, right =matrix[r].length - 1;

            while(left < right) {
                [matrix[r][left], matrix[r][right]] = [matrix[r][right], matrix[r][left]]
                left++;
                right--;
            }
        }
    }
}
