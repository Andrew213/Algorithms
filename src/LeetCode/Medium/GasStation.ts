/**
 * 
// There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].

// You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. 
// You begin the journey with an empty tank at one of the gas stations.

// Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, 
// otherwise return -1. If there exists a solution, it is guaranteed to be unique.
 */

// Решение в лоб. Подумать над оптимизацией
// function makeCircle(
//   startGasStationIndex: number,
//   gas: number[],
//   cost: number[],
// ) {
//   let capacity = 0;

//   for (let i = 0; i < gas.length; i++) {
//     const index = (startGasStationIndex + i) % gas.length;
//     capacity += gas[index];

//     const gasRemains = capacity - cost[index];
//     if (gasRemains < 0) {
//       return -1;
//     }
//     capacity = gasRemains;
//   }

//   return startGasStationIndex;
// }

// function canCompleteCircuit(gas: number[], cost: number[]): number {
//   let startIndex = -1;
//   for (let i = 0; i < gas.length; i++) {
//     startIndex = makeCircle(i, gas, cost);
//     if (startIndex >= 0) {
//       break;
//     }
//   }

//   return startIndex;
// }

function canCompleteCircuit(gas: number[], cost: number[]): number {
  let capacity = 0;
  let startGasStationIndex = 0;
  // общий баланс топлива по всему кругу;
  let total = 0;

  for (let i = 0; i < gas.length; i++) {
    capacity += gas[i];
    total += gas[i] - cost[i];
    const gasRemains = capacity - cost[i];
    if (gasRemains < 0) {
      //   res = -1;
      capacity = 0;
      //двигаю начальную станцию если запоролся
      startGasStationIndex = i + 1;
    } else {
      // коплю топливо
      capacity = gasRemains;
    }
  }

  return total < 0 ? -1 : startGasStationIndex;
}

console.log("result", canCompleteCircuit([2, 3, 4], [3, 4, 3])); // O(N)
