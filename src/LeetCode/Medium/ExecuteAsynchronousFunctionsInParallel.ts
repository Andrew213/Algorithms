/**
 * Given an array of asynchronous functions functions, return a new promise promise. Each function in the array accepts no arguments and returns a promise. 
 * All the promises should be executed in parallel.

promise resolves:

When all the promises returned from functions were resolved successfully in parallel. 
The resolved value of promise should be an array of all the resolved values of promises in the same order as they were in the functions. 
The promise should resolve when all the asynchronous functions in the array have completed execution in parallel.
promise rejects:

When any of the promises returned from functions were rejected. promise should also reject with the reason of the first rejection.
Please solve it without using the built-in Promise.all function.
 */

type Fn<T> = () => Promise<T>;

function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
  const result: T[] = [];
  let completed = 0;

  return new Promise((resolve, reject) => {
    for (let i = 0; i < functions.length; i++) {
      const fn = functions[i];
      fn()
        .then((res) => {
          result[i] = res;
          ++completed;
          if (completed === functions.length) {
            resolve(result);
          }
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
}

const functions = [
  () => new Promise((resolve) => setTimeout(() => resolve(4), 50)),
  () => new Promise((resolve) => setTimeout(() => resolve(10), 150)),
  () => new Promise((resolve) => setTimeout(() => resolve(16), 100)),
];

promiseAll(functions).then(console.log);
