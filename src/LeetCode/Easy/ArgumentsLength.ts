type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };

// Write a function argumentsLength that returns the count of arguments passed to it.

function argumentsLength(...args: JSONValue[]): number {
  return args.length;
}

console.log("result", argumentsLength({}, null, "3"));

/**
 * argumentsLength(1, 2, 3); // 3
 */
