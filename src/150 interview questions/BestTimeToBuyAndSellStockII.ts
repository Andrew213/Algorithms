/**
 * You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
 * On each day, you may decide to buy and/or sell the stock.
 * You can only hold at most one share of the stock at any time.
 * However, you can buy it then immediately sell it on the same day.
 * Find and return the maximum profit you can achieve.
 */

function maxProfit2(prices: number[]) {
  let totalProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const el = prices[i];
    const prevEl = prices[i - 1];
    if (el > prevEl) {
      totalProfit += el - prevEl;
    }
  }

  return totalProfit;
}

console.log(maxProfit2([6, 1, 3, 2, 4, 7]));
