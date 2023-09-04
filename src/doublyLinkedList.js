// Реализация двусвязного списка

function createNode(value) {
  return {
    value,
    next: null,
    prev: null,
  };
}

class DoublyLinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  // Добавляет элемент в список.
  // Если указан индекс - добавляет по индексу,
  // в противном случае добавляет в конец.
  // Если индекс за пределами — кидает ошибку.
  add(value, index) {
    const node = createNode(value);

    if (index && (index >= this.size || index < 0)) {
      throw new Error("Индекс выходит за пределы");
    }

    if (index === undefined) {
      if (this.head === null) {
        this.head = node;
        this.tail = node;
      } else {
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
      }
      this.size += 1;
      return;
    }

    if (index > 0 && index <= this.size) {
      const current = this.searchByIndex(index);
      node.prev = current.prev;
      node.next = current;

      current.prev.next = node;
      current.prev = node;
      this.size += 1;
      return;
    }
    this.size += 1;
  }

  // Удаляет элемент из списка по значению.
  // Удаляет только первый найденный элемент.
  // Если элемент не найден, ничего делать не нужно.
  removeByValue(value) {
    if (this.head.value === value) {
      this.head = this.head.next;
      this.head.prev = null;
      this.size -= 1;
      return;
    }

    let current = this.head;

    while (current) {
      if (current.value === value) {
        // console.log(`current `, current);
        current.prev.next = current.next;
        current.next.prev = current.prev;
        this.size -= 1;
        return;
        //   current.next.prev = previous;
        //   previous.next = current.next;
      }
      current = current.next;
    }
  }

  // Удаляет элемент из списка по индексу.
  // Если индекс за пределами — кидает ошибку.
  removeByIndex(index) {
    const current = this.searchByIndex(index);
    current.prev = current.next;
    current.next.prev = current.prev;
    this.size -= 1;
  }

  // Ищет элемент в списке по индексу.
  // Если индекс за пределами — кидает ошибку.
  searchByIndex(index) {
    if (index <= 0 || index > this.size) {
      throw new Error("Invalid index");
    }

    let current = this.head;
    let currentIndex = 1;

    while (current !== null && currentIndex < index) {
      current = current.next;
      currentIndex++;
    }

    if (current === null) {
      throw new Error("Invalid index");
    }

    return current;
  }

  // Ищет элемент в списке по значению.
  // Возвращает первый найденный элемент.
  // Опционально можно указать индекс начала поиска.
  // Если индекс за пределами — кидает ошибку.
  // Если элемент не найден, нужно вернуть null.
  searchByValue(value, startIndex = 1) {
    let current = this.searchByIndex(startIndex);

    while (current) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }
    return null;
  }
}

const list = new DoublyLinkedList();

list.add("a", 1);
// list.add("f")
list.add("b");
list.add("g");

list.add("f", 2);
list.add("c", 2);

list.removeByValue("c");

list.add("k");

console.log(list);
