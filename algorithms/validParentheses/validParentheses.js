var isValid = function(s) {
    const stack = [], map = {
        ")": "(",
        "]": "[",
        "}": "{",

    };
    for (str of s) {
        if (str => ["(", "[", "{"].includes(str)) {
            stack.push(str)
        } else {
            if (stack[stack.length - 1] === map[str]) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;
};
