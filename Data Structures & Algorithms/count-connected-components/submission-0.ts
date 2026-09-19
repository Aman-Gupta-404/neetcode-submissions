class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n: number, edges: number[][]): number {
        let count = 0;

        let visited = new Set();

        // initialize graph
        let graph = {}
        for(let i = 0; i < n; i++) graph[i] = new Set<number>();

        // update graph nodes
        for(let i = 0; i < edges.length; i++) {
            graph[edges[i][0]].add(edges[i][1]);
            graph[edges[i][1]].add(edges[i][0])
        }

        function dfs(node: number): void {
            if(visited.has(node)) return;

            // mark as visited
            visited.add(node)

            // run it on adjacent nodes
            const adjacentNodes = graph[node];

            for(const n of adjacentNodes) dfs(n);
        }

        for(let i = 0; i < n; i++) {
            if(visited.has(i)) continue

            count++;

            dfs(i);
        }

        return count;
    }
}
