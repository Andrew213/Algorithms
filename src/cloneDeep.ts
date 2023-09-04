// Напишите функцию, которая выполняет глубокое копирование значений.

type PlainObject<T = unknown> = {
  [k in string]: T;
};

function isArray(value: unknown): value is [] {
  return Array.isArray(value);
}

function isPlainObject(value: unknown): value is PlainObject {
  return (
    typeof value === "object" &&
    value !== null &&
    value.constructor === Object &&
    Object.prototype.toString.call(value) === "[object Object]"
  );
}

function cloneDeep(obj: any): any {
  if (isArray(obj)) {
    return obj.map((el: any) => cloneDeep(el));
  }

  if (isPlainObject(obj)) {
    const cloneObj = {} as any;
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        cloneObj[key] = cloneDeep(obj[key]);
      }
    }
    return cloneObj;
  }
  return obj;
}

const objects = [{ a: 1 }, { b: 2 }];
const deep = cloneDeep(objects);

// console.log(deep[0] === objects[0]); // => false

export default cloneDeep;
