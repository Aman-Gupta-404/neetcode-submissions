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
        let newStr = ""
        for(let c of s) {
            if(this.isAlphaNumeric(c)) {
                newStr += c.toLowerCase();
            }
        }
        const revStr = newStr.split("").reverse().join("")

        return newStr === revStr;
    }
}
