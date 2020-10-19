var intersect = function(nums1, nums2) {
    const map = new Map();
    nums1.forEach(x => {
        if (map.has(x)) {
            map.set(x, map.get(x) + 1);
        } else {
            map.set(x, 1);
        }
    });
    const res = [];
    nums2.forEach(y => {
        if (map.has(y)) {
            res.push(y);
            map.set(y, map.get(y) - 1);
            if(map.get(y) === 0) {
                map.delete(y);
            }
        }
    });
    return res;
};
