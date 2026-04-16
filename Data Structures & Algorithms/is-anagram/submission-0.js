class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // return false if the lenth is different
        // sort the array
        // check for element match one by one
        
        if(s.length !== t.length) return false;

        const sArr = s.split("").sort();
        const tArr = t.split("").sort();

        for(let i = 0; i < sArr.length; i++) {
            if(sArr[i] !== tArr[i]) return false;
        }
        return true;

    }
}
