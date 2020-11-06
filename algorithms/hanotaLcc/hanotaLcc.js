var hanota = function(A, B, C) {
    const move = (n, from, buffer, to) => {
        if (n === 1) {
            console.log(A, '--->', C);
            to.push(from.pop());
        } else {
            move(n - 1, from, to, buffer);
            console.log(A, '--->', C);
            move(1, from, buffer, to);
            move(n - 1, buffer, from, to);
        }
    }
    move(A.length, A, B, C);
};
