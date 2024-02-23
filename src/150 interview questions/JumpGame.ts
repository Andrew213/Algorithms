/**
 * You are given an integer array nums.
 * You are initially positioned at the array's first index,
 * and each element in the array represents your maximum jump length at that position.
 * Return true if you can reach the last index, or false otherwise.
 *
 * Example 1
 * Input: nums = [2,3,1,1,4]
 * Output: tru
 * Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index
 *
 * Example 2
 * Input: nums = [3,2,1,0,4]
 * Output: fals
 * Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
 */

/**
 * Использую рекурсию с сохранением уже проверенных значений
 * Шаг1. Беру элемент и прыгаю на его значение
 * Шаг2. Если элемент не проверялся, то итерируюсь, иначе скип
 * Шаг3. Итерируюсь в обратном порядке, начиная с длинны взятого элемента до этого элемента
 * Шаг4. Если элемент не равен 0,  запускаю рекурсию для него
 * Шаг5. Если этим элементом можно дойти до конца, то сохраняю его в memo
 *
 * Cложность O(n^2) в худшем случае
 * */

function canJump(
  nums: number[],
  index: number = 0,
  memo: boolean[] = []
): boolean {
  const startedEl = nums[index];

  if (nums.length === 1) {
    return true;
  }

  if (memo[index] !== undefined) {
    return memo[index]; // Если результат для индекса уже известен, возвращаем его
  }

  for (let i = index + startedEl; i > index; i--) {
    const currentEl = nums[i];

    if (i === nums.length - 1) {
      memo[index] = true;
      return true; // Если достигли конечного элемента, возвращаем true
    }

    if (currentEl !== 0 && canJump(nums, i, memo)) {
      memo[index] = true;
      return true; // Если можем прыгнуть из текущей позиции, возвращаем true
    }
  }

  memo[index] = false;
  return false; // Если невозможно дойти до конечного элемента, возвращаем false
}

console.log(canJump([3, 3, 5, 2, 1, 0, 0, 1, 4]));
