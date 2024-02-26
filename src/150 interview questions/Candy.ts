/**
 * 
 * There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.
 * You are giving candies to these children subjected to the following requirements:
 * Each child must have at least one candy.
 * Children with a higher rating get more candies than their neighbors.
 * Return the minimum number of candies you need to have to distribute the candies to the children.
 *  
 * Example 1:
 * Input: ratings = [1,0,2]
 * Output: 5
 * Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.
 * 
 * Example 2:
 * Input: ratings = [1,2,2]
 * Output: 4
 * Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
 * The third child gets 1 candy because it satisfies the above two conditions.

 */

function candy(ratings: number[]): number {
  //   const result: number[] = new Array(ratings.length).fill(1);

  const candies: number[] = new Array(ratings.length).fill(1);

  // прохожусь сначала слева направо

  for (let i = 1; i < ratings.length; i++) {
    const currentChild = ratings[i];
    const prevChild = ratings[i - 1];

    if (currentChild > prevChild) {
      candies[i] = candies[i - 1] + 1;
    }
  }

  // затем обратно с учетом полученных конфет
  for (let i = ratings.length - 2; i >= 0; i--) {
    const currentChild = ratings[i];
    const nextChild = ratings[i + 1];

    if (currentChild > nextChild && candies[i] <= candies[i + 1]) {
      candies[i] = candies[i + 1] + 1;
    }
  }

  return candies.reduce((acc, el) => acc + el, 0);
}

candy([1, 2, 3, 3, 3, 2, 1]);
