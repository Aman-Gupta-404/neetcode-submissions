class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let result = 0;

        let i = 0, buy = 0, sell = 0;

        while (i < prices.length) {
            buy = prices[i];
            console.log("1: ", i);
            while (prices[i + 1] >= buy) {
            i++;
            sell = prices[i];
            const prof = sell - buy;

            result = Math.max(prof, result);
            }

            i++;
        }

        return result;
    }
}
