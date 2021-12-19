/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    const l1Num = Number(l1.reverse().join(''));
    const l2Num = Number(l2.reverse().join(''));

    const sum = l1Num + l2Num;

    return sum.toString().split('').map(item => Number(item));
};

// 换一种思路
var twoNumbers = function(l1, l2) {
  function transformList (list, len) {
    let _list = [...list];
    while (_list.length < len) {
      _list.push(0);
    }

    console.log(_list);

    return _list;
  }
  // 因为每位最大为9，所以相加最大为18
  // 每位相加除10取余，做为当前位，下一位加1
  // 初始下位加0
  // 把两个数组位数补齐
  let pre = 0;
  const sumArray = [];
  const maxLength = l1.length >= l2.length ? l1.length : l2.length;
  const _l1 = transformList(l1, maxLength);
  const _l2 = transformList(l2, maxLength);

  for (let i = 0; i < maxLength; i++) {
    sumArray[i] = (_l1[i] + _l2[i]) % 10 + pre;
    pre = _l1[i] + _l2[i] >= 10 ? 1 : 0;
  }
  
  if (pre === 1) {
    sumArray.push(1);
  }

  return sumArray;
}

twoNumbers([1,2,6, 6], [2, 3, 4, 4]);
