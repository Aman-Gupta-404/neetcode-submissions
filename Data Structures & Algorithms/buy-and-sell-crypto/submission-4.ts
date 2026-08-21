class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        if(prices.length === 1) return 0;

        let profit = 0;

        // [10,1,5,6,7,1]
        //     i       j
        for(let i = 0; i < prices.length; i++) {
            if(i < prices.length - 1 && prices[i] >= prices[i+1]) {
                continue;
            }
            
            let j = i + 1;
        
            while(j < prices.length && prices[j] > prices[i]) {
                const prof = prices[j] - prices[i];
                profit = Math.max(profit, prof)
                j++;
            }

            if(prices[j] <= prices[i]) {
                i = j - 1;
            }
        }


        return profit;
    }

}
