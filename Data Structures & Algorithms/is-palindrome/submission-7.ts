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
        let l = 0, r = s.length - 1;

        while(l <= r) {
            const lc = s[l].toLowerCase();
            const rc = s[r].toLowerCase();

            if(this.isAlphaNumeric(lc) && this.isAlphaNumeric(rc)) {
                if(lc === rc) {
                    l++;
                    r--;
                } else {
                    return false;
                }

            } else if(!this.isAlphaNumeric(lc)) {
                l++;
            } else {
                r--;
            }
        }

        return true;
    }
}
