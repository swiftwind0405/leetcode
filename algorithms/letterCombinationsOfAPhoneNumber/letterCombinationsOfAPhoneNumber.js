var letterCombinations = function (digits) {
  if (digits.length == 0) return [];

  const map = new Map(),
    res = [];
  // 初始化字典映射
  map.set("2", "abc");
  map.set("3", "def");
  map.set("4", "ghi");
  map.set("5", "jkl");
  map.set("6", "mno");
  map.set("7", "pqrs");
  map.set("8", "tuv");
  map.set("9", "wxyz");

  const dfs = (curStr, i) => {
    // 指针越界，递归的出口
    if (i > digits.length - 1) {
      // 将解推入res
      res.push(curStr);
      // 结束当前递归分支，进入另一个递归分支
      return;
    }

    const letters = map.get(digits[i]);
    // 不同的字母选择代表不同的递归分支
    for (const l of letters) {
      dfs(curStr + l, i + 1);
    }
  };
  dfs("", 0);
  return res;
};
