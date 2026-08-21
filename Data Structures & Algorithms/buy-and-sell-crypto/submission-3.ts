class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        // brute force sol -> every posibility
        let answer = 0;

        for(let i = 0; i < prices.length; i++) {
            for(let j = i + 1; j < prices.length; j++) {
                const profit = prices[j] - prices[i];

                answer = Math.max(profit, answer);
            }
        }

        return answer;
    }
}
