class TrieNode {
    value: string | null;
    isLast: boolean;
    children: Map<string, TrieNode>

    constructor(value?: string, isLast: boolean = false) {
        this.value = value || null;
        this.isLast = isLast;
        this.children = new Map<string, TrieNode>();
    }

    addChildren(node: TrieNode) {
        if(node && node.value) this.children.set(node.value, node);
    }

    updateIsLast(flag: boolean) {
        this.isLast = flag;
    }
}

class WordDictionary {
    tree: TrieNode;

    constructor() {
        this.tree = new TrieNode(null)
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word: string): void {
        let node = this.tree;

        for(let c of word) {
            if(node.children.has(c)) {
                // go deeper into the tree;
                node = node.children.get(c);
            } else {
                const newNode = new TrieNode(c);
                node.addChildren(newNode);
                node = newNode;
            }
        }

        node.updateIsLast(true);
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word: string): boolean {
        let node = this.tree;

        function dfs(root: TrieNode | null, idx: number, counter: number): boolean {
            if(!root) return false;

            let c = word[idx];  // "." || char

            if(idx === word.length) {
                return root.isLast;
            }

            if(c === ".") {
                // we check for counter limit exceed
                if(counter >= 2) return false

                // try all the children
                for(let [c, n] of root.children) {
                    if(dfs(n, idx + 1, counter + 1)) return true;
                }

                return false;
            } else {
                // do the regular dfs
                let child = root.children.get(c);
                if(!child) return false;
                return dfs(child, idx + 1, 0);
            }
        }

        return dfs(this.tree, 0, 0);
    }
}
