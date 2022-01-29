var maxProfit = function(prices) {
    let min = prices[0];
    let max = 0;
    for (let price of prices) {
        max = Math.max(max, price - min);
        min = Math.min(price, min);
    }
     return max;
};
