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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        if(!list1) return list2;
        if(!list2) return list1;

        let l1 = list1;
        let l2 = list2;
        let head: ListNode;



        if(l1.val < l2.val) {
            head = l1;
            l1 = l1.next;
        } else {
            head = l2;
            l2 = l2.next;
        }
        
        let current = head;

        while(l1 !== null && l2 !== null) {
            if(l1.val < l2.val) {
                current.next = l1;
                current = l1;
                l1 = l1.next;
            } else {
                current.next = l2;
                current = l2;
                l2 = l2.next;
            }
        }

        current.next = l1 || l2

        return head;
    }
}
