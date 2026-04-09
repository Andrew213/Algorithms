type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined;

function once(fn: Function): OnceFn {
  let isFirst = true;
  return function (...args) {
    if (isFirst) {
      isFirst = false;

      return fn(...args);
    }
    return undefined;
  };
}

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */

const foo = (a: number, b: number, c: number) => a + b + c;
const onceFn = once(foo);

console.log("result 1  - ", onceFn(1, 2, 3));
console.log("result 2 - ", onceFn(2, 3, 6));
