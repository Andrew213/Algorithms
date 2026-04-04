/**
 * Given the head of a singly linked list, return the middle node of the linked list.
 * If there are two middle nodes, return the second middle node.
 */

import { ListNode } from "../../DataStructures/ListNode";

const list1 = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))),
);

const list2 = new ListNode(
  1,
  new ListNode(
    2,
    new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6)))),
  ),
);

function middleNode(head: ListNode | null): ListNode | null {
  let result: ListNode | null = null;
  if (head) {
    const oddEven = head.size() % 2;
    const size = head.size();
    if (oddEven) {
      result = head.get(Math.floor(size / 2));
    } else {
      result = head.get(size / 2);
    }
  }

  return result;
}

console.log("Result", middleNode(list2));
