class Solution {
    isAlphaNumeric(c: string): boolean {
        // check if its between a & z or between for 0 & 9
        if(
            (c.charCodeAt(0) >= "a".charCodeAt(0) &&
            c.charCodeAt(0) <= "z".charCodeAt(0)) ||
            (c.charCodeAt(0) >= "0".charCodeAt(0) &&
            c.charCodeAt(0) <= "9".charCodeAt(0))
        ) {
            return true
        } else return false;
    }

    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        // brute force
        let sanitizedOriginal = "";
        let sanitizedReversed = "";

        // loop over the string
        for(let c of s) {
            // convert to lowercase;
            c = c.toLowerCase();
            console.log(c, this.isAlphaNumeric(c))
            if(this.isAlphaNumeric(c)) {
                sanitizedOriginal += c
            }
        }

        for(let i = sanitizedOriginal.length - 1; i >= 0; i--) {
            sanitizedReversed += sanitizedOriginal[i];
        }

        return sanitizedOriginal === sanitizedReversed;
    }
}
