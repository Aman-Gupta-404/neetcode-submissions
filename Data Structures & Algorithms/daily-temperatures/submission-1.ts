class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const result = new Array(temperatures.length);

        // stores the index --> [ [<index>, <value>] ]
        const stack: number[][] = []

        for(let i = 0; i < temperatures.length; i++) {
            const currTemp = temperatures[i];

            // check if the currTemp is the answer to the using a loop
            while(stack.length) {
                const [idx, val] = stack.pop();
                if(currTemp > val) {
                    result[idx] = i - idx;
                } else {
                    stack.push([idx, val]);
                    break;
                }
            }

            stack.push([i, currTemp])
        }

        for(let [idx, _] of stack) {
            result[idx] = 0;
        }

        return result;
    }
}
