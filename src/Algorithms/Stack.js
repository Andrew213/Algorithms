class Queue {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  enqueue(value) {
    const node = { value, next: null, prev: null };

    node.prev = this.tail;

    if (this.tail) {
      this.tail.next = node;
      this.tail = node;
    } else {
      this.head = this.tail = node;
    }

    this.size++;
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Не могу удалить из пустого стека");
    }

    const node = this.head;
    const nextNode = node.next;

    if (nextNode) {
      nextNode.prev = null;
    }

    this.head = nextNode;

    this.size--;

    return node;
  }

  peek() {
    return this.head;
  }

  isEmpty() {
    return !this.head;
  }
}
