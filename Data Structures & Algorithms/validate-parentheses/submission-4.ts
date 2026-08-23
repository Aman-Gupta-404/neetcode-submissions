class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        if(s.length % 2 !== 0) return false;

        const stack = [];
        
        const map = {
            "(": ")",
            "{": "}",
            "[": "]",
        }

        for(let i = 0; i < s.length; i++) {
             if(map[s[i]]) {
                // its opening bracket
                stack.push(s[i]);
             } else {
                // its a closing bracket
                // pop the stack, and match it with the char
                const popped = stack.pop();
                if(!popped || map[popped] !== s[i]) {
                    return false;
                }
             }
        }

        return stack.length ? false : true
    }
}
