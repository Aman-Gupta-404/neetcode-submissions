class Solution {
    toNumber(val: string): number {
        return Number(val);
    }

    /**
     * @param {string} num1
     * @param {string} num2
     * @return {string}
     */
    multiply(num1: string, num2: string): string {
        if(num1 === "0" || num2 === "0") return "0";

        const result = new Array(num1.length + num2.length).fill(0);

        for(let i1 = num1.length - 1; i1 >= 0; i1--) {
            const digit1 = Number(num1[i1]);

            for(let i2 = num2.length - 1; i2 >= 0; i2--) {
                const digit2 = Number(num2[i2]);

                const prod = digit1 * digit2;

                const pos1 = i1 + i2;
                const pos2 = i1 + i2 + 1;

                const sum = prod + result[pos2];

                result[pos2] = sum % 10
                result[pos1] += Math.floor(sum / 10);
            }
        }

        let start = 0;

        while(result[start] === 0) {
            start++;
        }

        return result.slice(start).join("")
    }
}
