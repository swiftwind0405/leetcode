var guessNumber = function(n) {
    let low = 1, high = n;
    while (low <= high) {
        const mid = Math.floor((high + low) / 2);
        const res = guess(mid);
        if (res === -1) {
            high = mid - 1;
        } else if (res === 1) {
            low = mid + 1;
        } else {
            return mid;
        }
    }
};
