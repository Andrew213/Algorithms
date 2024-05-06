function insertionSort(arr: number[]) {
  for (let i = 1; i < arr.length; i++) {
    const value = arr[i];
    while (arr[i - 1] > value) {
      arr[i] = arr[i - 1];
      i -= 1;
    }
    arr[i] = value;
  }
  return arr;
}

console.log(insertionSort([6, 5, 3, 1, 0, 8, 7, 2, 4]));
