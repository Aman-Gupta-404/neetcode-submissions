class TrieNode {
    val: string | null;
    children: Map<string, TrieNode>;
    isLast: boolean;

    constructor(val?: string, isLast: boolean = false) {
        this.val = val || null;
        this.children = new Map<string, TrieNode>()
        this.isLast = isLast 
    }

    add(node: TrieNode) {
        this.children.set(node.val, node)
    }

    updateFlag(isLast: boolean) {
        this.isLast = isLast;
    }
}

class PrefixTree {
    tree: TrieNode;

    constructor() {
        this.tree = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word: string): void {
        let node = this.tree;

        for(let c of word) {
            if(node.children.has(c)) {
                // the character exists in tree children
                node = node.children.get(c);
            } else {
                // it does not exist
                const newNode = new TrieNode(c);
                node.add(newNode);
                node = newNode
            }
        }

        node.updateFlag(true);
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word: string): boolean {
       let node = this.tree;

       for(let c of word) {
            const child = node.children.get(c);
            if(!child) return false;

            node = child;
       }

       return node.isLast;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix: string): boolean {
        let node = this.tree;

       for(let c of prefix) {
            const child = node.children.get(c);
            if(!child) return false;

            node = child;
       }

       return true;
    }
}
