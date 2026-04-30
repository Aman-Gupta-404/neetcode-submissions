class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let i = 0, j = numbers.length - 1;

        while(i < j) {
            const val = numbers[i] + numbers[j]
            if(val > target) j--;
            else if(val < target) i++;
            else return [i + 1, j + 1];
        }

        return [];
    }
}
