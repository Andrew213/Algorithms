/**
 * 
 *
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i]
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer
 * You must write an algorithm that runs in O(n) time and without using the division operation
 
Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
 * 
 */

// function productExceptSelf(nums: number[]): number[] {
//   const result: number[] = new Array(nums.length).fill(1);
//   //   const result: number[] = [];

//   for (let i = 0; i < nums.length; i++) {
//     let summ = result[i];
//     for (let j = 0; j < i; j++) {
//       summ = summ * nums[j];
//     }

//     for (let k = nums.length - 1; k > i; k--) {
//       summ = summ * nums[k];
//     }

//     result[i] = summ;
//   }

//   return result;
// }

function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  const result: number[] = new Array(n).fill(1);

  let prefix = 1;
  let suffix = 1;

  for (let i = 0; i < n; i++) {
    result[i] = result[i] * prefix;

    const right = result[n - 1 - i];
    const nms = nums[n - 1 - i];
    result[n - 1 - i] = right * suffix;

    prefix = prefix * nums[i];
    suffix = suffix * nms;
  }

  return result;
}

productExceptSelf([2, 2, 3, 4, 5]);
