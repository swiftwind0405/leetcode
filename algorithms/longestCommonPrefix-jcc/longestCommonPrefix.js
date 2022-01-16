var longestCommonPrefix = function(strs) {
  if(strs.length == 0) return "";
  let str = strs[0]; // 取第一个用来做基准比较
  for(let i = 1; i<strs.length; i++) { // 不需要跟自己比较，从1开始
      let j = 0;
      for(;j<str.length && j<strs[i].length; j++) {
        if(str[j] != strs[i][j]) break; // 有不想等的就跳出循环
      }
      str = str.substr(0, j); // 截取相等的部分
      if(str === "") return str;
  }
  return str;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));