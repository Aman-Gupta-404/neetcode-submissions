class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
       let i = 0, r = 0;
        
        let maxLen = 0;

        const set = new Set<string>();

       while(i <= r && r < s.length) {
            
            // check if the character already exists
            if(!set.has(s[r])) {
                set.add(s[r]);
                maxLen = Math.max(maxLen, r - i + 1);
                r++;

                continue;
            }

            // char exists, move the i pointer until char removed
            while(set.has(s[r]) && i <= r) {
                set.delete(s[i]);                
                i++;
            }

            set.add(s[r]);
            maxLen = Math.max(maxLen, r - i + 1);
            r++

       }

       return maxLen;
    }
}
