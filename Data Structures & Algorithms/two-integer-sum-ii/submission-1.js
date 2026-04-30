class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const map = new Map();
        
        for(let i = 0; i < numbers.length; i++) {
            const elem = target - numbers[i];

            if(map.has(elem)) {
                const index1 = map.get(elem);
                const index2 = i + 1;
                const result = [ Math.min(index1, index2), Math.max(index1, index2) ];
                return result
            } else {
                map.set(numbers[i], i + 1);
            }
        }

        return []
    }
}
