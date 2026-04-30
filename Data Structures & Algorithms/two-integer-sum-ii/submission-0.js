class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let result = []
        for(let i = 0; i < numbers.length; i++) {
            for(let j = i + 1; j < numbers.length; j++) {
                if(numbers[i] + numbers[j] === target) {
                    result = [i + 1, j + 1];
                    break;
                }
            }
        }

        return result;
    }
}
