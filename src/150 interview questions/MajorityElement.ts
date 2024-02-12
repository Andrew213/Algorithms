/**
 * Given an array nums of size n, return the majority element.
 * The majority element is the element that appears more than ⌊n / 2⌋ times.
 * You may assume that the majority element always exists in the array.
 */

function majorityElement(nums: number[]): number {
  const result: any = {};

  for (let i = 0; i < nums.length; i++) {
    if (result[`${nums[i]}`]) {
      result[`${nums[i]}`] = result[`${nums[i]}`] + 1;
    } else {
      result[`${nums[i]}`] = 1;
    }
  }

  let majority = 0;

  let count = 0;

  for (const [key, value] of Object.entries(result)) {
    if ((value as any) > count) {
      majority = key as any;
      count = value as any;
    }
  }
  return +majority;
}

majorityElement([3, 3, 4]);
