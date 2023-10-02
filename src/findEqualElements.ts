/*
Пересечение двух отсортированных массивов
Даны два отсортированных числовых массива. 
Напишите функцию, которая находит пересечение двух массивов и возвращает его. 
Пересечение — массив из элементов, которые встречаются в обоих массивах.
*/


// O(n**2)
// const findEqualElements = (arr1: number[], arr2: number[]): number[] => {
//    const result: number[] = []

//    if(arr2.length >= arr1.length ){

//    for(let i = 0; i<arr1.length; i++){
//     const foo = arr2.indexOf(arr1[i], i + 1)
//     if(foo >= 0){
//         result.push(arr2[foo])
//     }
//    }
// }else{
//     for(let i = 0; i<arr2.length; i++){
//         const foo = arr1.indexOf(arr2[i], i + 1)
//         if(foo >= 0){
//             result.push(arr1[foo])
//         }
       
// }
   
// }
// return result;

// }

// O(n)

function findEqualElements(arr1: number[], arr2: number[]) {
    let i = 0;
    let j = 0;
    const result = [];
  
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] > arr2[j]) {
        j++;
      } else if (arr1[i] < arr2[j]) {
        i++;
      } else {
        result.push(arr1[i]);
        i++;
        j++;
      }
    }

}
// // Примеры
// findEqualElements([1, 2, 3], [2]) // => [2]
// findEqualElements([2], [1, 2, 3]) // => [2]
// findEqualElements([1, 2, 2, 3], [2, 2, 2, 2]) // => [2, 2]
// findEqualElements([2, 2, 2, 2], [1, 2, 2, 3]) // => [2, 2]
