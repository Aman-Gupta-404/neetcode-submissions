class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let arr = s.split("");
        let result = 0
        for(let i = 0; i < arr.length; i++) {
           let map = new Map();
           let mf = 0;
           for(let j = i; j < arr.length; j++) {
                const c2 = arr[j]
                map.set(c2, (map.get(c2) ?? 0) + 1 );
                mf = Math.max(mf, map.get(c2));

                const replaceCount = j - i + 1 - mf;

                if(replaceCount <= k) result = Math.max(result, j - i + 1);
           }
        }
        return result;
    }
}
