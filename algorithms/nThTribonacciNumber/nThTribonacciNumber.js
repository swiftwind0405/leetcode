var tribonacci = function(n) {
    const map = [0, 1, 1];
    const recursion = (n) => {
        if (map[n] !== undefined) {
            return map[n];
        }
        map[n] = recursion(n - 1) + recursion(n - 2) + recursion(n - 3);
        return map[n];
    };
    return recursion(n);
};
