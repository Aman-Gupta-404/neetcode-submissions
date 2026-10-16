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
        // slow fast pointer
        if(!head) return false
        
        let slow = head;
        let fast = head;

        while(fast.next && fast.next.next) {
            slow = slow.next;
            fast = fast.next.next

            if(slow.val === fast.val) return true;
        }

        return false;
    }
}
