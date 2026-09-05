class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const result: number[][] = [];

        nums.sort((a, b) => a - b);

        for(let i = 0; i < nums.length; i++) {
            if(nums[i] > 0) break;

            if(i > 0 && nums[i] === nums[i - 1]) {
                continue;
            };

            let l = i + 1, r = nums.length - 1;

            while(l < r) {
                const sum = nums[l] + nums[r];
                const target = -nums[i];

                if(sum > target) r--;
                else if(sum < target) l++;
                else {
                    result.push([nums[i], nums[l], nums[r]])
                    r--;
                    l++;

                    // handle duplicates
                    while(l < r && nums[l] === nums[l - 1]) {
                        l++;
                    }

                    while(l < r && nums[r] === nums[r + 1]) {
                        r--;
                    }
                }
            }
        }

        return result;
    }
}
