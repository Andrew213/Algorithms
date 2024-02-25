/**
 * You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].
 * Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:
 * 0 <= j <= nums[i] and i + j < n
 * Return the minimum number of jumps to reach nums[n - 1].
 * The test cases are generated such that you can reach nums[n - 1]
 *
 * Example 1:
 * Input: nums = [2,3,1,1,4]
 * Output:
 * Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index
 *
 * Example 2
 * Input: nums = [2,3,0,1,4]
 * Output: 2
 * 
 * Принципы динамического программирования в данной задаче:

1. **Разбиение задачи на подзадачи**:
   - Задача разбивается на более мелкие подзадачи, где для каждого индекса необходимо найти минимальное количество прыжков до этого индекса.

2. **Мемоизация или запоминание промежуточных результатов**:
   - Мы создаем массив dp, где dp[i] будет хранить минимальное количество прыжков до индекса i.

3. **Нахождение оптимальной подструктуры**:
   - Минимальное количество прыжков до индекса i может быть вычислено как минимальное количество прыжков до предыдущих позиций плюс один.
 */

function jump(nums: number[]) {
  const n = nums.length;
  const dp = new Array(n).fill(Infinity);
  dp[0] = 0;

  for (let i = 0; i < n; i++) {
    const element = nums[i];
    for (let j = 1; j <= element && i + j < n; j++) {
      dp[i + j] = Math.min(dp[i + j], dp[i] + 1);
    }
  }

  return dp[n - 1] !== Infinity ? dp[n - 1] : -1;
}

// console.log(jump([3, 3, 5, 2, 1, 0, 0, 1, 4]));
console.log(jump([5, 9, 3, 2, 1, 0, 2, 3, 3, 1, 0, 0]));
