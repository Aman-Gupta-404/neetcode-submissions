class Solution {
    /**
     * @params {string} str1
     * @params {string} str2
     * @return {boolean}
     */
    checkIsAnagram(str1, str2) {
        // if the strings dont have same length, they are not anagrams
        if(str1.length !== str2.length) return false;

        // sort both the strings
        const sortedStr1 = str1.split("").sort().join("");
        const sortedStr2 = str2.split("").sort().join("");

        // if sorted strings are same, then they are anagrams
        if(sortedStr1 === sortedStr2) return true;
        return false;
    }
    
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // If the array length is 1, just return a single list of that array
        if(strs.length === 1) return [strs];

        // this will store the final result
        let result = [];

        // this will store the already added strings
        const map = new Map();

        for(let i = 0; i < strs.length; i++) {
            const str1 = strs[i];

            // if the already added hash has str1, then skip the loop
            if(map.has(str1)) continue

            let subArr = [str1]
            
            // add str1 to the already added hash
            map.set(str1, 1);

            for(let j = i + 1; j < strs.length; j++) {
                const str2 = strs[j];

                // check if str1 is an anagram of str2
                const isAnagram = this.checkIsAnagram(str1, str2);

                // if an anagram, push to subarr
                if(isAnagram) {
                    subArr.push(str2);
                    map.set(str2, 1);
                }
            }

            // push subarr to result
            result.push(subArr);
        }

        return result;
    }
}
