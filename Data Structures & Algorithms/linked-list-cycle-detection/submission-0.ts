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
        let s = head;
        let f = head;
        let result = false;

        while(f !== null && f.next !== null) {
            s = s!.next;
            f = f.next.next
            
            if(f && f.val === s.val) {
                result = true;
                break;
            }
        }

        return result;
    }
}
