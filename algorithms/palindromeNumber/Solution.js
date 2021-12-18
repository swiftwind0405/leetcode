// 普通解法：数字转为字符串，然后将字符串分割为数组，只需要循环数组的一半长度进行判断对应元素是否相等即可。
 var isPalindrome1 = function(x) {
    // 特殊情况：
    // 如上所述，当 x < 0 时，x 不是回文数。
    // 同样地，如果数字的最后一位是 0，为了使该数字为回文，
    // 则其第一位数字也应该是 0
    // 只有 0 满足这一属性
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }

    const xStr = x.toString();
    const length = xStr.length;
    const middle = length / 2;
    for (let x = 0, y = length - 1; x <= middle; x++ , y--) {
        if (xStr[x] !== xStr[y]) {
            return false;
        }
    }
    return true;
};

// 数学解法：通过取整和取余操作获取整数中对应的数字进行比较。
var isPalindrome2 = function(x) {
    if (x < 0) {
        return false;
    }

    let div = 1;
    while (x / div >= 10) {
        div *= 10
    }
    console.log('div', div)
    while (x > 0) {
        let left = parseInt(x / div),
            right = x % 10;
        if (left !== right) {
            return false
        }
        // 再往中间进一位继续判断
        x = parseInt((x % div) / 10);
        div /= 100
    }
    return true;
};