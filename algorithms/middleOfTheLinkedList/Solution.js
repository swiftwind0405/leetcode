/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    const list = [];
    const loop = (node) => {
        list.push(node)
        if (node.next) {
            loop(node.next)
        }
    }
    loop(head)
    const middle = list.length/2
    // 如果中位数是整数
    if (middle%1 === 0) {
        return list[middle];
    } else {
        return list[Math.round(middle)-1]
    }
};