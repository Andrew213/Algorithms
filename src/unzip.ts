/**
 * Реализуйте функцию, которая группирует значения из массивов по индексам. Если хоть один аргумент не массив — нужно выбросить ошибку ${arg} is not array.
 *
 * unzip([1, 2, 3], [4], [5, 6]); // => [[1, 4, 5], [2, undefined, 6], [3, undefined, undefined]]
 * unzip([1, 2, 3]); // => [[1], [2], [3]]
 * unzip([1], [1, 2, 3], [4, 6, 7, 8, 9]); // => [[1, 1, 4], [undefined, 2, 6], [undefined, 3, 7], [undefined, undefined, 8], [undefined, undefined, 9]]
 * unzip({}); // => Error: [object Object] is not array
 */

function unzip<T>(...args: T[][]): T[][] {
  // Ваш код
  args.forEach((arg) => {
    if (!Array.isArray(arg)) {
      throw new Error(`${arg} is not array`);
    }
  });

  const maxLength = Math.max(...args.map((arr) => arr.length));
  const result: T[][] = [];

  for (let i = 0; i < maxLength; i++) {
    const group: T[] = [];

    args.forEach((arr) => {
      group.push(arr[i]);
    });

    result.push(group);
  }

  return result;
}

// console.log(unzip([1, 2, 3], [4], [5, 6]));

export default unzip;
