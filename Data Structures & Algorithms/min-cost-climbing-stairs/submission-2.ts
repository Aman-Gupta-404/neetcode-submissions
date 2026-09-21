class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost: number[]): number {
        // currCost = Min(prevCost, prevPrevCost) + currCost

        let prevPrevCost = cost[0];
        let prevCost = cost[1];
        let minCost = 0;

        for(let i = 2; i < cost.length; i++) {
            minCost = Math.min(prevCost, prevPrevCost) + cost[i];

            prevPrevCost = prevCost;
            prevCost = minCost;
        }

        return Math.min(prevCost, prevPrevCost);
    }
}
