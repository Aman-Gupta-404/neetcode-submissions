class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        // hash map --> { char: count }
        const map = new Map<string, number>();

        for(let c of s) {
            map.set(c, (map.get(c) ?? 0) + 1)
        } 
        console.log({ map })
        for(let c of t) {
            map.set(c, (map.get(c) ?? 0) - 1)
        }
        console.log({ map })
        // check if all occurances has become zero
        for(let [c, n] of map) {
            if(n === 0) continue
            else return false
        }

        return true;
    }
}
