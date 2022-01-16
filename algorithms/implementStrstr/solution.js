// 解法一：用 js 现成的 indexOf api
var strStr = function(haystack, needle) {
    if(!needle) return 0;
    return haystack.indexOf(needle)
};


// TODO: 解法二：自己实现
// var strStr = function(haystack, needle) {
//     // 不存在或者相等时，返回0
//     if (!needle || needle === haystack) return 0;
//     let h = 0, n = 0, index = 0;
//     while (h < haystack.length && haystack.length < needle.length) {
//         while (haystack[h] === needle[n] && n < needle.length) {
//             if (index === 0) {
//                 index = h
//             }
//             n = n + 1;
//         }
//         if (n === needle.length) {
//             return index;
//         } else {
//             h = h + 1;
//         }
//     }
//     // 找不到或者要查找的字符串大于自己的时候，返回-1
//     return -1;
// };