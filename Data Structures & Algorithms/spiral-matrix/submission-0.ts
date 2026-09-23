class Solution {

    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix: number[][]): number[] {
        const result: number[] = [];

        let left = 0, right = matrix[0].length - 1;
        let top = 0, bottom = matrix.length - 1;

        while(left <= right && top <= bottom) {
            // move right
            for(let c = left; c <= right; c++) {
                result.push(matrix[top][c]);
            }
            top = top + 1;

            // move bottom
            for(let r = top; r <= bottom; r++) {
                result.push(matrix[r][right]);
            }
            right = right - 1;


            // move left
            if(top <= bottom) {
                for(let c = right; c >= left; c--) {
                    result.push(matrix[bottom][c]);
                }

                bottom = bottom - 1;
            }

            // move top
            if(left <= right) {
                for(let r = bottom; r >= top; r--) {
                    result.push(matrix[r][left]);
                }

                left = left + 1;
            }
        }

        return result
    }
}
