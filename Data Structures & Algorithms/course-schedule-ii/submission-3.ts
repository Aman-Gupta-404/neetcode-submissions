class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses: number, prerequisites: number[][]): number[] {
        // graph - topological sort

        // build a graph
        const graph = {};

        for(let i = 0; i < numCourses; i++) {
            graph[i] = [];
        }

        prerequisites.map(([c, p]) => {
            graph[c].push(p);
        })

        const visited = new Set<number>();
        const cycle = new Set<number>();

        const result = [];

        // iterate over the graph using dfs
        function dfs(curr): boolean {
            // base conditions
            // check if its a cycle
            if(cycle.has(curr)) return false;

            // check if its already visited
            if(visited.has(curr)) return true;

            cycle.add(curr);
            // run dfs on the adjcent nodes

            for(let n of graph[curr]) {
                if(!dfs(n)) return false;
            }
                cycle.delete(curr);

                visited.add(curr);

                result.push(curr);

            return true;
        }

        for(let i = 0; i < numCourses; i++) {
            const node = graph[i];

            const r = dfs(i);
            if(r === false) return []
        }

        return result;
    }
}
