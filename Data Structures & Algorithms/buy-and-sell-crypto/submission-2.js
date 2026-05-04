class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
       let i = 0, min = prices[0];
        let res = 0;
       while(i < prices.length) {
            if(prices[i] > min) {
                const prof = prices[i] - min
                res = Math.max(prof, res);
            }
            min = Math.min(prices[i], min);
            i++;
       }

       return res;
    }
}
