/* 
Напишите функцию, которая выполняет глубокое сравнение между двумя значениями и определяет — являются ли они эквивалентными. 
Аргументами могут быть только объекты.
*/

function isEqual(a: any, b: any): boolean {
  for (const [key, value] of Object.entries(a)) {
    if (typeof value !== "object" && value !== b[key]) {
      return false;
    }

    if (typeof value === "object") {
      isEqual(value, b[key]);
    }
  }
  return true;
}

const a = { a: 1 };
const b = { a: 1 };
isEqual(a, b); // true

export default isEqual;
