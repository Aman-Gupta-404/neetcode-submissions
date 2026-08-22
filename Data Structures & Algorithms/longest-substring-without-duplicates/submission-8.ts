class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        if(s.length <= 1) return s.length;

        let result = 0;
        const set = new Set();
        let l = 0;
        set.add(s[l])

        for(let r = 1; r < s.length; r++) {
            if(set.has(s[r])) {
                // move the left pointer until the duplicate is removed
                while(set.has(s[r])) {
                    set.delete(s[l])
                    l++
                } 
            } 
            // add elem to set and continue
            set.add(s[r]);
            let len = r - l + 1;

            result = Math.max(len, result);
            
        }

        return result;
    }
}
