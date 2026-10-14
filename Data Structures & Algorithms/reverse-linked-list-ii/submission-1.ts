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
     * @param {number} left
     * @param {number} right
     * @return {ListNode}
     */
    reverseBetween(
        head: ListNode | null,
        left: number,
        right: number,
    ): ListNode {
        // declare curr and move it to left node
        let dummy = new ListNode(0);
        dummy.next = head;

        let prevNode = dummy;
        let curr = head;
        let pointer = 1;

        while(pointer < left) {
            prevNode = curr;
            curr = curr.next;
            pointer++;
        }

        let prev = null;
        let leftNode = curr;

        // now reverse from pointer left to right
        while(pointer <= right) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
            pointer++;
        }

        // re-arrange the pinters
        prevNode.next = prev;
        leftNode.next = curr;

        return dummy.next;
    }
}
