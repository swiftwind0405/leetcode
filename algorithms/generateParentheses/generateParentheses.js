/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const arr = [];
    function generate(left, right, str) {
        // 递归终结条件：n 都用完了
        if (left === n && right ===n) {
            arr.push(str);
            return;
        }

        // 如果左括号没用完（第一肯定先使用左括号），就继续递归
        if(left < n) {
            generate(left + 1, right, str + '(');
        }

        // 如果右括号没用完（右括号肯定比左括号少，且有括号没用完），就继续递归
        if(right < left) {
            generate(left, right + 1, str + ')')
        }
    }

    generate(0, 0, '');
    return arr;
};