/**
 * Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
 */

/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  const n = nums.length;
  k = k % n; // Учитываем случай, когда k больше n

  const rotated = new Array(n);
  for (let i = 0; i < n; i++) {
    rotated[(i + k) % n] = nums[i];
  }

  for (let i = 0; i < n; i++) {
    nums[i] = rotated[i];
  }
}

rotate([-1, -100, 3, 99], 2);
