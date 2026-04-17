class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // create a hash map
        const map = new Map();

        // loop through the array
        for(let i = 0; i < strs.length; i++) {
            const sortedVal = strs[i].split("").sort().join("");

            if(map.has(sortedVal)) {
                const list = [...map.get(sortedVal), strs[i]];
                map.set(sortedVal, list);
            } else {
                map.set(sortedVal, [strs[i]]);
            }
        }
        const result = []
        for(const [key, val] of map) {
            result.push(val);
        }

        return result;
    }
}
