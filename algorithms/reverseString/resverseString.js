var reverseString = function(s) {
    const len = s.length;
    const halfLen = Math.round(len/2);
    // 只用遍历前一半数组
    for (let i = 0; i < halfLen; i++) {
        // 两两交换
        [s[i], s[len - 1 -i]] = [s[len - 1 -i], s[i]];
    }
    return s;
};
