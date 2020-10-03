/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const map1 = new Map();
    const map2 = new Map();

    function countNum(str, map) {
        for (let i = 0; i < str.length; i++) {
            const current = str[i]
            const value = map.get(current);
            if (value) {
                map.set(current, value + 1)
            } else {
                map.set(current, 1)
            }
        }
    }

    countNum(s, map1);
    countNum(t, map2);

    if (map1.size !== map2.size || (
        [...map1.keys()].sort().join("") !== [...map2.keys()].sort().join("")
    )) {
        return false;
    }

    for(let [key, value] of map1) {
        if (value !== map2.get(key)) {
            return false;
        }
    }

    return true;    
};