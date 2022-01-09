var isPalindrome = function(x) {
    // 负数 0 10和10的倍数不可能为回文数
    if (x <= 0 || (!(x % 10) && x)) return false;
    let x2 = x, res = 0;
    while (x2) {
      res = res * 10 + x2 % 10;
      // x2 = ~~(x2 / 10);
      // ~~ 运算符处理大于32位数值时，为负数，可以换成Math.floor()
      x2 = Math.floor(x2 / 10);
    }

    return res === x;
};
