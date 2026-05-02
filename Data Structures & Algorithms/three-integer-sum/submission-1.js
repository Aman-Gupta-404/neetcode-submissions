class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const map = new Map();

        const set = new Set();

        for(let i = 0; i < nums.length; i++) {
            // add the i elem to map
            map.set(nums[i], i);

            for(let j = i + 1; j < nums.length; j++) {
                // calc sum
                const e = -nums[i] - nums[j]

                // check if e exists in the map
                if(map.has(e) && map.get(e) !== i && map.get(e) !== j) {
                    //join("_").toString()
                    let r = JSON.stringify([nums[i], nums[j], e].sort());
                    set.add(r)
                }

                map.set(nums[j], j);
            }
        }

        return Array.from(set).map(arr => JSON.parse(arr));
    }
}
