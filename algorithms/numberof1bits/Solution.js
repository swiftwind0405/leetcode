/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let result = 0
    // 二进制第一位是符号位，所以指需要循环后面31位
    for(let i = 0; i < 32; i++) {
        // (1 << i) 表示将数字1向左移动 i 位得到的值，即将二进制数1左移 i 位，得到一个只有第i位为1的二进制数
        // 运算符 & 用于将 n 的二进制表示和 (1 << i) 的二进制表示进行按位与运算。这将返回一个新的数字，其中只有当 n 的二进制表示中的第 i 位为1时，结果中的第 i 位才为1，否则为0
        // (n & (1 << i)) 这个表示 n 的二进制表示中的第 i 位是 0 还是 1
        if ((n & (1 << i)) !== 0) {
            result++
        }
    }
    return result
};