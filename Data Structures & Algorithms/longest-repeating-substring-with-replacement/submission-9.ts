class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        // optimized sol
        let maxlen = 0;
        let maxFreq = 0;
        
        const map = new Map<string, number>();

        let l = 0, r = 0;

        while(l <= r && r < s.length) {
            // update the freq with curr left pointer
            map.set(s[r], (map.get(s[r]) || 0) + 1);

            // update the max freq var
            maxFreq = Math.max(maxFreq, map.get(s[r]));

            // remove the chars from left side, until 
            while(r - l + 1 - maxFreq > k) {
                // reduce the freq from map
                if(map.has(s[l])) {
                    map.set(s[l], map.get(s[l]) - 1);
                }
                l++;
            }

            maxlen = Math.max(r - l + 1, maxlen);


            r++;
        }
     
        return maxlen;
    }
}
