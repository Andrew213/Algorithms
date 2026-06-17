/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 * 
 * Given the head of a linked list, return the list after sorting it in ascending order.
 * Input: head = [4,2,1,3]
Output: [1,2,3,4]

Input: head = [-1,5,3,4,0]
Output: [-1,0,3,4,5]
 * 
 */

import { ListNode } from "../../DataStructures/ListNode";

function sortList(head: ListNode | null): ListNode | null {
  let current = head;

  const arr = [];

  while (current !== null) {
    arr.push(current.val);

    current = current!.next;
  }

  if (arr.length) {
    const sorted = arr.sort((a, b) => a - b);

    const newList = sorted.reduceRight<ListNode | null>(
      (next, value) => new ListNode(value, next),
      null,
    );

    return newList;
  }

  return null;
}

const testA = new ListNode(
  4,
  new ListNode(2, new ListNode(1, new ListNode(3))),
);

sortList(testA);

//вообще надо было через сортировку слиянием и slow fast указателями. но мне нравится так
