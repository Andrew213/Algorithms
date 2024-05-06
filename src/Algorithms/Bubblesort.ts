const Bubblesort = (arr: number[]): any => {
  let temp = 0;
  const result = [...arr];
  let swapped = false;

  for (let i = 0; i < result.length - 1; i++) {
    if (result[i] > result[i + 1]) {
      temp = result[i];
      result[i] = result[i + 1];
      result[i + 1] = temp;
      swapped = true;
    }
  }
  if (swapped) {
    swapped = false;
    return Bubblesort(result);
  }
};

console.log(Bubblesort([6, 5, 3, 1, 8, 7, 2, 4]));
