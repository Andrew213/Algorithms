/**
 * Вася и Маша участвуют в субботнике и красят стволы деревьев в белый цвет.
 * Деревья растут вдоль улицы через равные промежутки в 1 метр.
 * Одно из деревьев обозначено числом ноль, деревья по одну сторону занумерованы положительными числами 1, 2 и т.д.,
 * а в другую — отрицательными -1, -2 и т.д.
 *
 * Ведро с краской для Васи установили возле дерева P, а для Маши — возле дерева Q.
 * Ведра с краской очень тяжелые и Вася с Машей не могут их переставить, поэтому они окунают кисть в ведро и уже с этой кистью идут красить дерево.
 * Краска на кисти из ведра Васи засыхает, когда он удаляется от ведра более чем на V метров, а из ведра Маши — на M метров.
 *
 * Определите, сколько деревьев может быть покрашено.
 *
 * Формат ввода
 * В первой строке содержится два целых числа P и V — номер дерева, у которого стоит ведро Васи и на сколько деревьев он может от него удаляться.
 * В второй строке содержится два целых числа Q и M — аналогичные данные для Маши.
 *
 * Формат вывода
 * Выведите одно число — количество деревьев, которые могут быть покрашены.
 */

const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let p, v, q, m;
let lineCount = 0;

r1.on("line", function (line) {
  lineCount++;
  if (lineCount === 1) {
    [p, v] = line.split(" ").map((x) => +x);
  } else if (lineCount === 2) {
    [q, m] = line.split(" ").map((x) => +x);

    const result = main([
      {
        point: p,
        step: v,
      },
      {
        point: q,
        step: m,
      },
    ]);

    console.log(result);

    r1.close();
  }
});
function main(arr) {
  const vasya = arr[0];
  const masha = arr[1];
  const VasysRange = [vasya.point - vasya.step, vasya.point + vasya.step];
  const MashasRange = [masha.point - masha.step, masha.point + masha.step];

  const start = Math.max(VasysRange[0], MashasRange[0]);
  const end = Math.min(VasysRange[1], MashasRange[1]);

  let total;

  if (end >= start) {
    const totalStart = Math.min(VasysRange[0], MashasRange[0]);
    const totalEnd = Math.max(VasysRange[1], MashasRange[1]);
    total = Math.abs(totalStart) + Math.abs(totalEnd);

    if (totalStart < 0 && totalEnd > 0) {
      total += 1;
    }

    console.log("Пересекаются");
  } else {
    let vasyaTotal = VasysRange[1] - VasysRange[0] + 1;

    let mashaTotal = MashasRange[1] - MashasRange[0] + 1;

    total = vasyaTotal + mashaTotal;
    console.log("не Пересекаются");
  }

  return total;
}

// 39
// main([
//   { point: -1, step: 12 },
//   { point: 8, step: 17 },
// ]);

//25
// main([
//   { point: 0, step: 7 },
//   { point: 12, step: 5 },
// ]);

// 14
// main([
//   { point: 2, step: 3 },
//   { point: 10, step: 3 },
// ]);

// 9
// main([
//   { point: 0, step: 3 },
//   { point: -3, step: 2 },
// ]);

//5
// main([
//   { point: 0, step: 1 },
//   { point: 0, step: 2 },
// ]);

//5
// main([
//   { point: 1, step: 1 },
//   { point: -1, step: 1 },
// ]);

//14
// main([
//   { point: 3, step: 4 },
//   { point: 13, step: 2 },
// ]);

//21
// main([
//   { point: 15, step: 5 },
//   { point: 8, step: 8 },
// ]);
