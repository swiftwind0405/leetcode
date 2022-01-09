/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function (s) {
    const map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }
    let array = s.split('').map(item => map[item]);
    for (let x = 0, y = 1; x < array.length - 1; x++, y++) {
        if (array[x] < array[y]) {
            array[y] = array[y] - array[x]
            array[x] = 0;
        }
    }
    return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};
