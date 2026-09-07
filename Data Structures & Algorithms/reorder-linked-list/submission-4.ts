/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head: ListNode | null): void {
        if(!head) return;

        const nodes: ListNode[] = [];
        let curr = head
        
        while(curr !== null) {
            nodes.push(curr);
            curr = curr.next;
        }

        let i = 0, j = nodes.length - 1;

        let prev = null;
        while(i <= j) {
            if(prev) prev.next = nodes[i];

            nodes[i].next = nodes[j];

            prev = nodes[j];
            i++;
            j--;
        }

        prev.next = null;
    }
}
