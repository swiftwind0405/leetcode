var findContentChildren = function(g, s) {
    const sortFunc = (a, b) => a - b;
    g.sort(sortFunc);
    s.sort(sortFunc);
    let i = 0;
    s.forEach(n => {
        if ( n >= g[i]) {
            i++;
        }
    });
    return i;
};