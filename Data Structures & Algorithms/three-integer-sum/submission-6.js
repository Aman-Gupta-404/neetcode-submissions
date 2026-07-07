class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  threeSum(nums) {
    // optimized solution
    // nums[i] + nums[j] + nums[k] = 0
    // nums[j] + nums[k] = -nums[i]
    // 2 sum problem
    // [-4, -1, -1, 0, 1, 2]

    const sorted = nums.sort((a,b) => a - b);
    const answer = [];

    for (let i = 0; i < sorted.length; i++) {
      if (sorted[i] > 0) break;

      if (i > 0 && sorted[i] === sorted[i - 1]) {
        continue;
      }
      // get the target
      const target = -sorted[i];

      // run 2 pointer method
      let l = i + 1,
        r = sorted.length - 1;

      while (l < r) {
        const sum = sorted[l] + sorted[r];
        if (sum < target) {
          l++;
          while (l < r && sorted[l] === sorted[l - 1]) {
            l++;
          }
        } else if (sum > target) {
          r--;
          while (l < r && sorted[r] === sorted[r + 1]) {
            r--;
          }
        } else {
          answer.push([sorted[i], sorted[l], sorted[r]]);
          r--;
          l++;

          while (l < r && sorted[r] === sorted[r + 1]) {
            r--;
          }

          while (l < r && sorted[l] === sorted[l - 1]) {
            l++;
          }
        }
      }
    }

    return answer;
  }
}
