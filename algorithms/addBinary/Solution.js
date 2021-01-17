var addBinary = function (a, b) {
    while (a.length > b.length) b = '0' + b;
    while (a.length < b.length) a = '0' + a;
    let res = new Array(a.length);
    let sum = 0;
    let carry = 0;
    for (let i = a.length - 1; i >= 0; i--) {
        sum = Number(a[i]) + Number(b[i]) + carry
        if (sum >= 2) {
            res[i] = sum - 2;
            carry = 1;
        } else {
            res[i] = sum;
            carry = 0;
        }
    }
    if (carry) res.unshift(1);
    return res.join('');
};