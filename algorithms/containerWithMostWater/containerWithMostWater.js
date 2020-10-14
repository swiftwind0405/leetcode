/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let ans = 0, L = 0, R = height.length - 1;
    while(L <= R) {
        const now = Math.min(height[L], height[R]) * (R - L);
        ans = Math.max(ans, now);
        height[L] > height[R] ? R-- : L++ ;
    }
    return ans;
};
