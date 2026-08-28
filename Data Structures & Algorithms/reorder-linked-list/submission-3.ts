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

        let s = head;
        let f = head;

        while(f !== null && f.next !== null) {
            s = s.next;
            f = f.next.next
        }

        let curr = s.next;
        s.next = null;

        let prev = null

        while(curr !== null) {
            const _next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = _next;
        }


        let left = head;
        let right = prev;

        while(right !== null) {
            let nextLeft = left.next;
            let nextRight = right.next;

            left.next = right;
            right.next = nextLeft;

            left = nextLeft;
            right = nextRight;
        }
       
    }
}
