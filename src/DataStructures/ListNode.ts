export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
  size(): number {
    let count = 0;
    let current: ListNode | null = this;

    while (current !== null) {
      count++;
      current = current.next;
    }

    return count;
  }

  get(index: number): ListNode | null {
    if (index < 0) return null;

    let current: ListNode | null = this;
    let currentIndex = 0;

    while (current !== null) {
      if (currentIndex === index) {
        return current;
      }

      current = current.next;
      currentIndex++;
    }

    return null;
  }
}
