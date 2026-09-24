class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses: number, prerequisites: number[][]): boolean {
        // create the graph
        const map = {};

        for(let i = 0; i < numCourses; i++) {
            map[i] = new Set();
        }

        for(let i = 0; i < prerequisites.length; i++) {
            const [a, b] = prerequisites[i]
            map[b].add(a);
        }

        let visited = new Set();
        let cycle = new Set();

        function dfs(node: number): boolean {
            if(visited.has(node)) return true;

            if(cycle.has(node)) {
                return false
            }

            // add it as visited and in cycle
            // visited.add(node);
            cycle.add(node);

            // get the adjcent nodes
            const adjNodes = map[node] || [];

            for(let node of adjNodes) {
                if(!dfs(node)) return false
            }

            cycle.delete(node);
            visited.add(node);
            return true;

        }

        
        // iterate over the graph
        for(let i = 0; i < numCourses; i++) {
            if(!dfs(i)) return false;
        }

        return true;
    }
}
