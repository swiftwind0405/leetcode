var firstUniqChar = function(s) {
    const startIndex = 'a'.charCodeAt();
    // 创建一个长度为26的字母表，初始频率都为0
    const freq = Array.from({length: 26}, x => 0);
    // 与a做比较得到索引位置，如果重复则频率+1
    for (let i = 0; i < s.length; i++) {
        freq[s.charCodeAt(i) - startIndex] ++;
    }
    // 最后再扫一遍s，如果在频率表中的频率为1，则代表只出现过一次
    for (let i = 0; i < s.length; i++) {
        if (freq[s.charCodeAt(i) - startIndex] === 1) {
            return i;
        }
    }
    return -1;
};
