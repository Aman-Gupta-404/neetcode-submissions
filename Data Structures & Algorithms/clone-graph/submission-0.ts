/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    dfs(node: Node | null, visitedMap: Map<Node, Node>): Node | null {
         if (!node) return null;

        if(visitedMap.has(node)) return visitedMap.get(node);
        
        let value = node.val;

        const clone = new Node(value, []);
        
        visitedMap.set(node, clone)

        for(let n of node.neighbors) {
            const nClone = this.dfs(n, visitedMap)
            clone.neighbors.push(nClone);
        }


        return clone;
    }

    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node: Node | null): Node {
        // let clone = ;
        const visitedMap = new Map<Node, Node>();
        return this.dfs(node, visitedMap);
    }
}
