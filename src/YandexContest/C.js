/** Форматирование файла
 * Петя - начинающий программист. Сегодня он написал код из n строк.
 * К сожалению оказалось, что этот код трудно читать. Петя решил исправить это, добавив в различные места пробелы.
 * А точнее, для i-й строки ему нужно добавить ровно a[i] пробелов.
 *
 * Для добавления пробелов Петя выделяет строку и нажимает на одну из трёх клавиш: Space, Tab, и Backspace.
 * При нажатии на Space в строку добавляется один пробел.
 * При нажатии на Tab в строку добавляются четыре пробела.
 * При нажатии на Backspace в строке удаляется один пробел.
 *
 * Первая строка входных данных содержит одно целое положительное число n – количество строк в файле.
 * Каждая из следующих n строк содержит одно целое неотрицательное число – количество пробелов, которые нужно добавить в i-ю строку файла.
 */

const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lineCount;
const nums = [];
let count;

let start = true;

r1.on("line", function (line) {
  if (count > 0) {
    nums.push(+line);
    count--;
  }

  if (start) {
    start = false;
    lineCount = +line;
    count = +line;
  }

  if (count <= 0) {
    const result = main(lineCount, nums);
    console.log(result);
    r1.close();
  }
});

function countClicks(num) {
  let totalClicks = 0;
  if (num > 0) {
    if (num >= 4 && num % 4 !== 3) {
      const tabPresses = Math.floor(num / 4);
      totalClicks += tabPresses;
      if (num > tabPresses * 4) {
        const spaces = num - tabPresses * 4;
        totalClicks += spaces;
      }
    } else if (num >= 3) {
      const tabPresses = Math.floor(num / 4) + 1;
      totalClicks += tabPresses;
      if (tabPresses * 4 > num) {
        // жмем backspace
        totalClicks += 1;
      }
    } else {
      totalClicks += num;
    }
  }

  return totalClicks;
}

function main(spacesArr) {
  let totalPresses = 0;

  for (num of spacesArr) {
    totalPresses += countClicks(num);
  }
  console.log(`total presses `, totalPresses);

  return totalPresses;
}

// 9
// main(5, [0, 1, 2, 3, 10]);

// 250000005
// main(5, [0, 1, 2, 3, 1000000000]);
