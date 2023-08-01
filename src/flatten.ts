type NestedArray<T = unknown> = string | NestedArray<T>[];

type ExistingFlatArray<Arr, Depth extends number> = {
  done: Arr;
  recur: Arr extends ReadonlyArray<infer InnerArr>
    ? FlatArray<
        InnerArr,
        [
          -1,
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20
        ][Depth]
      >
    : Arr;
}[Depth extends -1 ? "done" : "recur"];

function flatten<T>(array: T) {
  const result: ExistingFlatArray<T, 21>[] = [];

  if (!Array.isArray(array)) {
    throw new Error("Argument must be an array");
  }

  array.forEach((value) => {
    if (Array.isArray(value)) {
      result.push(...flatten(value));
    } else {
      result.push(value);
    }
  });
  return result;
}
