var addTwoNumbers = function (l1, l2) {
    if (!l1 || !l2) {
      return l1 ? l1 : l2;
    }
  
    let x = (y = carry = sum = 0);
    // res 是一个哨兵节点，用来返回一个新链表
    let res = (tmp = new ListNode());
    // 遍历列表 l1 和 l2 直至到达它们的尾端。
    // 还必须检查 carry = 1carry=1 是否成立，
    // 如果成立，则向返回列表追加一个含有数字 11 的新结点。
    while (l1 || l2 || carry) {
      tmp.next = new ListNode();
      x = l1 ? l1.val : 0;
      y = l2 ? l2.val : 0;
      sum = x + y + carry;
      // 更新进位的值
      carry = Math.floor(sum / 10);
      // 创建一个数值为 (sum mod 10) 的新结点，并将其设置为当前结点的下一个结点
      tmp.next.val = sum % 10;
      // 然后将当前结点前进到下一个结点。
      tmp = tmp.next;
      // 将节点继续前进到下一个结点。
      l1 = l1 ? l1.next : l1;
      l2 = l2 ? l2.next : l2;
    }
    return res.next;
  };