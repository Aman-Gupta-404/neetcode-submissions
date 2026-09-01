class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        // brute force
        if(s.length !== t.length) return false
        
        const sArr = s.split("").sort();
        const tArr = t.split("").sort();

        for(let i = 0; i < sArr.length; i++) {
            if(sArr[i] !== tArr[i]) return false
        }

        return true;
        
    }
}
