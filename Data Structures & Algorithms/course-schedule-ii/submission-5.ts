class Solution {
    result: number[];

    dfs(node: number, graph: any, visited: Set<number>, cycle: Set<number>) {
        if(visited.has(node)) return true;

        if(cycle.has(node)) return false;

        // add node to cycle
        cycle.add(node);

        // go deeper into ints neighbours
        for(let n of graph[node]) {
            if(!this.dfs(n, graph, visited, cycle)) return false;
        }

        cycle.delete(node);
        visited.add(node);
        return true
    }

    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses: number, prerequisites: number[][]): number[] {
        // create the graph
        const graph = {};

        for(let i = 0; i < numCourses; i++) {
            graph[i] = new Set<number>();
        }

        for(let [c, p] of prerequisites) {
            graph[c].add(p);
        }

        let visited = new Set<number>();
        let cycle = new Set<number>();

        for(let i = 0; i < numCourses; i++) {
            if(!this.dfs(i, graph, visited, cycle)) return [];
        }

        return Array.from(visited);
    }
}
