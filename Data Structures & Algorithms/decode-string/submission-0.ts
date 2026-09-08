class Solution {
    isValidChar(c: string) {
        return c && "a".charCodeAt(0) <= c.charCodeAt(0) && c.charCodeAt(0) <= "z".charCodeAt(0);
    }

    isValidInteger(c: string) {
        return c && "0".charCodeAt(0) <= c.charCodeAt(0) && c.charCodeAt(0) <= "9".charCodeAt(0)
    }

    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s: string): string {
        const stack = [];

        for(let c of s) {
            console.log("===== loop: ", c)
            if(c !== "]") {
                stack.push(c)
                continue;
            }

            let _string = []

            while(this.isValidChar(stack[stack.length - 1])) {
                const char = stack.pop();
                _string.unshift(char);
            }


            // eventually reach an opening bracket
            if(stack[stack.length - 1] === "[") stack.pop();

            let multiplier = "";
            
            while(this.isValidInteger(stack[stack.length - 1])) {
                const val = stack.pop();
                multiplier = val + multiplier;
            }

            console.log({ multiplier })

            for(let i = 0; i < Number(multiplier); i++) {
               stack.push(..._string); 
            }

            console.log("ITS: ", stack)
        }

        console.log(stack)

        return stack.join("");
    }
}


// 2[a3[b]]c
