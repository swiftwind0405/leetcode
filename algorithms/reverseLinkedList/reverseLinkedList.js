var reverseList = function(head) {
    let prev = null;
    let curr = head;
    while(curr) {
        let nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }
    return prev;
};