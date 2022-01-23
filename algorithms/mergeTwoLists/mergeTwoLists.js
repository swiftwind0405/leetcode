var mergeTwoLists = function(list1, list2) {
  // 数组的解法
  // let targetList = list1;
  // targetList.push(...list2);

  // if (targetList.length === 0 || targetList === 1) return targetList;

  // targetList.sort((a, b) => a - b);
  // return targetList;

  // 链表
  if (list1 === null) return list2;
  if (list2 === null) return list1;

  if (list1.val > list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2
  }
};

console.log(mergeTwoLists([1, 2, 3], [2, 3, 8]));