var convertToTitle = function(n) {
    const mod26 = (num) => {
        if (num <= 26) { return [num]; }
        if (num % 26 === 0) {
            return mod26((num / 26) -1).concat([26]);
        }
        return mod26(parseInt(num / 26)).concat([num % 26]);
    }
    return mod26(n).map(num => String.fromCharCode(num + 65 - 1)).join('');
};