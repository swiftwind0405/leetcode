/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (k === 0 || !head) {
        return head
    }
    let current = head
    let index = 0
    let length = 0
    while (current.next) {
        current = current.next
        length++
    }
    // 没计算尾节点因此需要再+1
    length++
    // k对长度取余，k有可能超过本身链表的长度
    let _k = k % length
    // 把首尾节点接上
    current.next = head
    current = head
    // 继续遍历链表，当前节点加上旋转长度如果已经超出了长度，就代表是尾节点了
    while (current.next && index + _k < length - 1) {
        current = current.next
        index++
    }

    // 当前节点是尾节点，需要断开
    const result = current.next
    current.next = null
    return result
};
