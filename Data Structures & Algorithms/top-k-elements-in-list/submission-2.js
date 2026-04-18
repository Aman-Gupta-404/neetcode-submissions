class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // hash map method

        const map = new Map();
        // key: element | value: occurance

        for(let i = 0; i < nums.length; i++) {
            if(map.has(nums[i])) map.set(nums[i], map.get(nums[i]) + 1);
            else map.set(nums[i], 1);
        }

        const sortedArr = [];

        for(const [key, value] of map) {
            sortedArr.push({key, value});
        }

        sortedArr.sort((a, b) => b.value - a.value);

        return sortedArr.splice(0, k).map(item => item.key)
        
    }
}
