class Solution {
    checkCycle(node: number, graph: any, parent: number, visited: Set<number>): boolean {
        visited.add(node);

        for(let n of graph[node]) {
            if(n === parent) continue;

            if(visited.has(n)) {
                console.log({ n })
                return true;
            }
            if(this.checkCycle(n, graph, node, visited)) {
                return true
            }
        }

        return false
    }

    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n: number, edges: number[][]): boolean {
        if(edges.length < n - 1) return false;

        // create the graph
        const graph = {};

        for(let i = 0; i < n; i++) {
            graph[i] = new Set<number>();
        }

        for(const [a, b] of edges) {
            graph[a].add(b);
            graph[b].add(a);
        }

        const visited = new Set<number>();

        if(this.checkCycle(0, graph, -1, visited)) return false
        console.log(visited)
        return visited.size === n;
    }
}
