var plusOne = function(digits) {
    let carry = true;  // 进位标志，初始化的时候末位是需要加1的
    for (let index = digits.length - 1; index >= 0; index--) {
        digits[index] = digits[index] + (carry ? 1 : 0); 
        if (digits[index] > 9) {
            // 溢出
            digits[index] = 0;
            carry = true;
        } else {
            carry = false;
        }
    }

    return carry ? [1, ...digits] : digits;    // 最后如果依旧有进位标志，还需要处理一下
};
