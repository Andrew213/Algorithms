/**
 * 
 * Write a function that checks if a given value is an instance of a given class or superclass. 
 * For this problem, an object is considered an instance of a given class if that object has access to that class's methods.
There are no constraints on the data types that can be passed to the function. For example, the value or the class could be undefined.
 */

class Foo {
  hrenA: number | undefined;
  hrenB: number | undefined;
  constructor(a: number, b: number) {
    this.hrenA = a;
    this.hrenB = b;
  }
}
const her = new Foo(1, 2);
const proto = Object.getPrototypeOf(her);
// console.log(proto.constructor === Foo);
// console.log(Object.getPrototypeOf(Foo));
// console.log(Object.getPrototypeOf(her));
function checkIfInstanceOf(obj: any, classFunction: Function): boolean {
  if (obj == null) return false;

  let prototype = Object.getPrototypeOf(obj);

  while (prototype !== null) {
    if (prototype.constructor === classFunction) {
      return true;
    }
    prototype = Object.getPrototypeOf(prototype);
  }

  return false;
}

class Animal {}
class Dog extends Animal {}
console.log(checkIfInstanceOf(new Dog(), Animal));
/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
