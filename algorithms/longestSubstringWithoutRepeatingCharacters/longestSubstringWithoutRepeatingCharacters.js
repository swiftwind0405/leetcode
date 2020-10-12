/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const set = new Set();
    let R = -1, ans = 0;
    const len = s.length;
    for (let L = 0; L < len; L++) {
        if (L !== 0) {
			// 左指针向右移动一格，移除一个字符
            set.delete(s.charAt(L - 1))
        }
        while ( R + 1 < len && !set.has(s.charAt(R + 1))) {
			// 不断地移动右指针
            set.add(s.charAt(R + 1));
            ++R;
        }
        ans = Math.max(ans, R - L + 1)
    }
    return ans;
};
