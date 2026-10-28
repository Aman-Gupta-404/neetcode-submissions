class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let maxLen = 0;
        let l = 0, r = 0;
        let set = new Set<string>();

        while(r < s.length && l <= r) {
            // check if the char already exists

            if(!set.has(s[r])) {
                // duplicate does not exists
                set.add(s[r]);
                maxLen = Math.max(maxLen, r - l + 1);
                r++;
                continue
            }

            // duplicate exists
            while(set.has(s[r])) {
                set.delete(s[l]);
                l++;
            }

            maxLen = Math.max(maxLen, r - l + 1);

            set.add(s[r]);
            r++;
        }

        return maxLen;
    }
}
