/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    const map = {
      I: 1,
      IV: 4,
      V: 5,
      IX: 9,
      X: 10,
      XL: 40,
      L: 50,
      XC: 90,
      C: 100,
      CD: 400,
      D: 500,
      CM: 900,
      M: 1000
    };
    let result = 0;
    for (let i = 0; i < s.length;) {
      // 两种情况，一位或者两位
      if (i + 1 < s.length && map[s.substring(i, i+2)]) {
        result += map[s.substring(i, i+2)];
        i += 2;
      } else {
        result += map[s.substring(i, i+1)];
        i++;
      }
    }

    console.log(result);
    return result;
};

romanToInt('CDXXXV')