/**
 * @param {string} s
 * @return {string}
 */
 var toLowerCase = function(s) {
    const sb = [];
    for (let ch of s) {
        if (ch.charCodeAt() >= 65 && ch.charCodeAt() <= 90) {
            // 直接+32也可以
            // ch = String.fromCharCode(ch.charCodeAt() + 32);
            ch = String.fromCharCode(ch.charCodeAt() | 32);

        }
        sb.push(ch);
    }
    return sb.join('');
};
