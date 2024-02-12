/**
 * Given an integer array nums sorted in non-decreasing order,
 * remove some duplicates in-place such that each unique element appears at most twice.
 * The relative order of the elements should be kept the same.
 * Since it is impossible to change the length of the array in some languages,
 *  you must instead have the result be placed in the first part of the array nums.
 * More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result.
 * It does not matter what you leave beyond the first k elements.
 *
 * Example 1:
 * Input: nums = [1,1,1,2,2,3]Output: 5, nums = [1,1,2,2,3,_]
 * Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
 * It does not matter what you leave beyond the returned k (hence they are underscores).
 *
 * Example 2:Input: nums = [0,0,1,1,1,1,2,3,3]Output: 7, nums = [0,0,1,1,2,3,3,_,_]
 * Explanation: Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.
 * It does not matter what you leave beyond the returned k (hence they are underscores).
 */

function removeDuplicates2(nums: number[]): number {
  for (let i = 0, moveNextEl = 1; i < nums.length; i++) {
    const el = nums[i];
    let nextEl = nums[i + moveNextEl];
    let prevEl = nums[i - 1];

    if (el === nextEl && el === prevEl) {
      nums.splice(i, 1);
      i -= 1;
    }
  }

  return nums.length;
}

removeDuplicates2([0, 0, 1, 1, 1, 1, 2, 3, 3]);
