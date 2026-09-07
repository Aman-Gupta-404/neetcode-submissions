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
     * @return {boolean}
     */
    hasCycle(head: ListNode | null): boolean {
        // fast slow method
        let f = head, s = head;

        while(f !== null && f.next !== null) {
            s = s.next;
            f = f?.next?.next;

            if(s === f) return true
        }

        return false;
    }
}
