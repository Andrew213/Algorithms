type P = Promise<number>;
// async function addTwoPromises(promise1: P, promise2: P): P {}
const promise1 = new Promise((resolve) => setTimeout(() => resolve(2), 20));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(5), 60));

async function addTwoPromises(promise1: P, promise2: P): P {
  return Promise.all([promise1, promise2]).then((res) => {
    return (res as number[]).reduce((val: number, n: number) => val + n, 0);
  });
}

const foo2 = Promise.all([promise1, promise2]).then((res) => {
  console.log({
    res: (res as number[]).reduce((val: number, n: number) => val + n, 0),
  });
});
