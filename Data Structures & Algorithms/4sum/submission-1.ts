class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(nums: number[], target: number): number[][] {
        let result: number[][] = [];

        nums.sort((a, b) => a - b);

        console.log({ nums })
        
        for(let i = 0; i < nums.length; i++) {
            // skip if the element is same as before
            if(i > 0 && nums[i] === nums[i - 1]) continue;


            // apply 3 sum on the rest of the elements
            for(let j = i + 1; j < nums.length; j++) {
                // skip if elem is same as prev
                if(j > i + 1 && nums[j] === nums[j - 1]) continue;

                let l = j + 1, r = nums.length - 1;

                while(l < r) {
                    // the combo gives the output
                    const sum = nums[i] + nums[j] + nums[l] + nums[r];
                    
                    if(sum === target) {
                        result.push([nums[i], nums[j], nums[l], nums[r]]);
                        l++;
                        r--;
                        
                        while(nums[l] === nums[l - 1]) l++
                        while(nums[r] === nums[r + 1]) r--;
                    } else if(sum < target) {
                        l++;
                    } else {
                        r--;
                    }

                    // skip duplicates
                }
            }
        }   

        return result;
    }
}
