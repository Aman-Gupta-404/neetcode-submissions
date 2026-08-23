class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        let length = 0;

        // create a new set to store all unique characters
        const charSet = new Set(s.split(""));

        for(let c of charSet) {
            let l = 0, r = 0;
            let count = 0;

            while(r < s.length) {
                if(s[r] === c) {
                    count++;
                }

                const window = r - l + 1;

                if(window - count <= k) {
                    length = Math.max(length, window);
                } else {
                    if(s[l] === c) count--;
                    l++
                }

                r++;
            }
        }

        return length;
    }
}
