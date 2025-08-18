/* 
Рита и Гоша играют в игру. У Риты есть n фишек, на каждой из которых написано количество очков. Сначала Гоша называет число 
k, затем Рита должна выбрать две фишки, сумма очков на которых равна заданному числу.
**/

const _readline = require("readline");

const _reader = _readline.createInterface({
  input: process.stdin,
});

const _inputLines = [];
let _curLine = 0;

_reader.on("line", (line) => {
  _inputLines.push(line);

  if (_inputLines.length === 3) {
    // ждём ровно 3 строки
    _reader.close(); // закрываем интерфейс
    solve();
  }
});

process.stdin.on("end", solve);

// Если ответ существует, верните список из двух элементов
// Если нет - то верните пустой список
// function twoSum(array, targetSum) {
//   // Ваше решение
//   const result = [];
//   for (let i = 0; i < array.length - 1; ++i) {
//     const currentNum = array[i];
//     for (let j = i + 1; j < array.length; ++j) {
//       const nextNum = array[j];
//       const currSum = currentNum + nextNum;
//       if (currSum === targetSum) {
//         result.push(currentNum, nextNum);
//         return result;
//       }
//     }
//   }

//   return result;
// }

function twoSum(array, targetSum) {
  // Ваше решение
  const seen = new Set();

  for (let num of array) {
    const complement = targetSum - num;
    if (seen.has(complement)) {
      return [complement, num];
    }
    seen.add(num);
  }

  return [];
}

function solve() {
  const n = readInt();
  const array = readArray();
  const targetSum = readInt();
  const ans = twoSum(array, targetSum);
  if (ans.length === 0) {
    console.log("None");
  } else {
    process.stdout.write(`${ans.join(" ")}`);
  }
}

function readInt() {
  const n = Number(_inputLines[_curLine]);
  _curLine++;
  return n;
}

function readArray() {
  var arr = _inputLines[_curLine]
    .trim(" ")
    .split(" ")
    .map((num) => Number(num));
  _curLine++;
  return arr;
}
