class MinHeap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(i) {
        return (i - 1) >> 1;
    }
    
    getLeftIndex(i) {
        return 2 * i + 1;
    }

    getRightIndex(i) {
        return 2 * i + 2;
    }

    swap(i1, i2) {
        const temp = this.heap[i1];
        this.heap[i1] = this.heap[i2];
        this.heap[i2] = temp;
    }

    shiftUp(index) {
        if ( index === 0) return;
        const parentIndex = this.getParentIndex(index);
        if (this.heap[parentIndex] && this.heap[parentIndex].val > this.heap[index].val) {
            this.swap(parentIndex, index);
            this.shiftUp(parentIndex);
        }
    }

    shiftDown(index) {
        if (index > this.heap.length - 1) return;
        const leftIndex = this.getLeftIndex(index);
        const rightIndex = this.getRightIndex(index);
        if (this.heap[leftIndex] && this.heap[leftIndex].val < this.heap[index].val) {
            this.swap(leftIndex, index);
            this.shiftDown(leftIndex);
        }
        if (this.heap[rightIndex] && this.heap[rightIndex].val < this.heap[index].val) {
            this.swap(rightIndex, index);
            this.shiftDown(rightIndex);
        }
    }

    insert(value) {
        this.heap.push(value);
        this.shiftUp(this.heap.length - 1);
    }

    pop() {
        if (this.size() === 1) return this.heap.shift();
        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.shiftDown(0);
        return top;
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }
}

var mergeKLists = function(lists) {
    const h = new MinHeap();
    const res = new ListNode(null);
    let p = res;

    lists.forEach(l => {
        !!l && h.insert(l);
    })

    while (h.size()) {
        const node = h.pop();
        p.next = node;
        p = p.next;
        if (node.next) {
            h.insert(node.next)
        }
    }

    return res.next;
};