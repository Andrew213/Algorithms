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

function movingAverage(array, windowSize) {
  const result = [];
  let current_sum = 0;
  for (let j = 0; j < windowSize; j++) {
    current_sum += Number(array[j]);
  }
  result.push(current_sum / windowSize);
  for (let i = 0; i < array.length - windowSize; i++) {
    current_sum -= array[i];
    current_sum += array[i + windowSize];
    result.push(current_sum / windowSize);
  }

  return result;
  result;
}

function solve() {
  const n = readInt();
  const arr = readArray();
  const windowSize = readInt();
  console.log({ windowSize });
  process.stdout.write(`${movingAverage(arr, windowSize).join(" ")}`);
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
