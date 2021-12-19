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
