class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses: number, prerequisites: number[][]): boolean {
        // build the graph
        const map = {};

        for(let i = 0; i < numCourses; i++) {
            map[i] = new Set<number>();
        }

        for(let [a, b] of prerequisites) {
            map[a].add(b);
        }

        const visited = new Set();
        const cycle = new Set();
    
        function dfs(node: number): boolean {
            if(visited.has(node)) return true;
            if(cycle.has(node)) return false;

            // navigate its adjacent nodes
            const adjacentNodes = map[node];

            cycle.add(node)

            for(let n of adjacentNodes) {
                if(!dfs(n)) return false;
            }
            
            cycle.delete(node);

            visited.add(node);

            return true;
        }

        for(let i = 0; i < numCourses; i++) {
            if(!dfs(i)) return false
        } 

        return true;
    }
}
