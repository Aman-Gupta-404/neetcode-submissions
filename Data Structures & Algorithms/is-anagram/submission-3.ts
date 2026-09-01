class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        // optimized approach
        if(s.length !== t.length) return false
       
        const map = new Map<string, number>();

        // first loop
        for(let i = 0; i < s.length; i++) {
            const char = s.charAt(i)
            map.set(char, map.has(char) ? Number(map.get(char)) + 1 : 0);
        }
        console.log(map)
        // second loop
        for(let i = 0; i < t.length; i++) {
            const charCount = map.get(t.charAt(i)) || 0
            if(!map.has(t.charAt(i))) return false;
            else if(map.has(t.charAt(i)) && map.get(t.charAt(i)) === 0) map.delete(t.charAt(i));
            else map.set(t.charAt(i), Number(map.get(t.charAt(i)) - 1))
        }


        return map.size === 0

    }
}
