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
main([
  { point: 15, step: 5 },
  { point: 8, step: 8 },
]);
