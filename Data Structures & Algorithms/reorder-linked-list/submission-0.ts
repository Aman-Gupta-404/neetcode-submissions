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

        let curr = head;

        let arr = [];

        while(curr !== null) {
            arr.push(curr);
            curr = curr?.next || null;
        }

        curr = head;

        for(let i = 1; i < arr.length; i++) {
            // calculate idx
            const nextIdx = (i % 2) > 0 ? arr.length - ((i+1) / 2) : i / 2;
            console.log(i, nextIdx, curr)
            curr.next = arr[nextIdx];

            curr = arr[nextIdx];
        }

        curr.next = null;
    }
}
