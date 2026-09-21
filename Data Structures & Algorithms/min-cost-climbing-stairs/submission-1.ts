class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost: number[]): number {
        const dp = new Array(cost.length);
        function dfs(node): number {
            if(node <= 1) return cost[node];

            if(dp[node]) return dp[node];

            const _cost = Math.min(dfs(node - 1), dfs(node - 2))  

            const ownCost = node >= cost.length ? 0 : cost[node]

            const currCost = _cost + ownCost;

            dp[node] = currCost;

            return currCost
        }

        return dfs(cost.length);
    }
}
