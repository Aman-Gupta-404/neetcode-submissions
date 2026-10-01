class Solution {
    count: number = 0;
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s: string): number {

        for(let i = 0; i < s.length; i++) {
            
            // check for even string length
            this.checkPalindrome(s, i, i)

            // check for odd string length
            this.checkPalindrome(s, i, i + 1)
        }
    
        return this.count;
    }

    checkPalindrome(s, i, j) {
        while(i >= 0 && j < s.length && s[i] === s[j]) {
            this.count++;
            i--;
            j++;
        }
    }
}
