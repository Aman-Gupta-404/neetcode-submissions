class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const result  = new Array(temperatures.length).fill(0);

        const stack: { i: number, val: number }[] = [];

        for(let i = 0; i < temperatures.length; i++) {
            const t = temperatures[i];

            // check if the temperature satisfies the last stack value
            while(stack.length && stack[stack.length - 1].val < t) {
                const lastVal = stack.pop();

                // diff
                result[lastVal.i] = i - lastVal.i;
            }
            

            stack.push({ i, val: t});
        }

        return result;
    }
}
