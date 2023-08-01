// console.log(classNames("foo", "bar")); // => 'foo bar'
// console.log(classNames("foo", { bar: true })); // => 'foo bar'
// console.log(classNames({ "foo-bar": true })); // => 'foo-bar'
// console.log(classNames({ "foo-bar": false })); // => ''
// console.log(classNames({ foo: true }, { bar: true })); // => 'foo bar'
// console.log(classNames({ foo: true, bar: true })); // => 'foo bar'
// console.log(
//   classNames("foo", { bar: true, duck: false }, "baz", { quux: true })
// ); // => 'foo bar baz quux'
// console.log(classNames(null, false, "bar", undefined, 0, 1, { baz: null }, "")); // => 'bar 1'
// console.log(classNames("bar", [1, null, "baz"], { baz: true }, "3")); // => 'bar 1 baz baz 3'
console.log(
  classNames(
    "bar",
    [1, null, "baz", ["foo", "test", [4, [5]]]],
    { baz: 0 },
    "3"
  )
); // => 'bar 1 baz foo test baz 3'

function classNames(...args: any[]): string | undefined {
  const result: string[] = [];
  if (!args.length) {
    return "";
  }
  args.forEach((arg) => {
    if (typeof arg === "string" || (typeof arg === "number" && arg !== 0)) {
      result.push(String(arg));
    } else if (Array.isArray(arg)) {
      const argArr = classNames(...arg);
      if (typeof argArr === "string") {
        result.push(argArr);
      }
    } else if (typeof arg === "object" && arg !== null) {
      Object.entries(arg).forEach(([key, value]) => {
        if (value || (typeof value === "number" && value === 0)) {
          result.push(key);
        }
      });
    }
  });
  const res = result.join(" ");
  return res.trim();
}
