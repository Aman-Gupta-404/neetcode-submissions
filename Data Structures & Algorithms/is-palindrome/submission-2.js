class Solution {
    isAlphaNumeric(c) {
        if("a" <= c && c <= "z") return true;
        else if("A" <= c && c <= "Z") return true;
        else if("0" <= c && c <= "9") return true;
        else if(c === " ") return false
        return false
    }

    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let i = 0, j = s.length - 1;

        while(i < j) {
            if(!this.isAlphaNumeric(s[i])) i++;
            if(!this.isAlphaNumeric(s[j])) j--;

            if(s[i].toLowerCase() === s[j].toLowerCase()) {
                i++;
                j--;
            } else if(this.isAlphaNumeric(s[i]) && this.isAlphaNumeric(s[j])) {
                return false
            }
        }

        return true;
    }
}
