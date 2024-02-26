class RandomizedSet {
  private hashMap: Map<number, number>; // Для быстрой проверки наличия элемента и его индекса
  private list: number[]; // Для хранения элементов
  constructor() {
    this.hashMap = new Map();
    this.list = [];
  }

  insert(val: number): boolean {
    if (this.hashMap.has(val)) {
      return false;
    }
    this.list.push(val);
    this.hashMap.set(val, this.list.length - 1);
    return true;
  }

  remove(val: number): boolean {
    if (!this.hashMap.has(val)) {
      return false;
    }
    const index = this.hashMap.get(val) as number;

    const lastElement = this.list[this.list.length - 1];
    this.list[index] = lastElement; // Перемещаем последний элемент на место удаляемого
    this.hashMap.set(lastElement, index); // Обновляем индекс у перемещенного элемента
    this.list.pop(); // Удаляем последний элемент
    this.hashMap.delete(val); // Удаляем элемент из хэш-таблицы

    return true;
  }

  getRandom(): number {
    const randomIndex = Math.floor(Math.random() * this.list.length);
    return this.list[randomIndex];
  }
}

const obj = new RandomizedSet();

console.log(obj.insert(1));
console.log(obj.remove(2));
console.log(obj.insert(2));
console.log(obj.getRandom());
console.log(obj.remove(1));
console.log(obj.insert(2));
console.log(obj.getRandom());

// console.log(obj.remove(3));
/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
