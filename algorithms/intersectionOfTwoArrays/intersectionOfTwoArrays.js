var intersection = function(nums1, nums2) {
    const set = new Set();
    nums1.forEach(x => set.add(x));

    const res = [];
    nums2.forEach(y => {
        if (set.has(y)) {
            res.push(y);
            set.delete(y);
        }
    })
    return res;
};
