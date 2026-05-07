class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let max = 0;

        for(let i = 0; i < s.length; i++) {
            const set = new Set();
            set.add(s[i]);
            for(let j = i + 1; j < s.length; j++) {
                if(s[j] !== s[i] && !set.has(s[j])) {
                    set.add(s[j]);
                } else break;
            }

            max = Math.max(max, set.size);
        }

        return max;
    }
}
