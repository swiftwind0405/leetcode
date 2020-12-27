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
        if (this.heap[parentIndex] > this.heap[index]) {
            this.swap(parentIndex, index);
            this.shiftUp(parentIndex);
        }
    }

    shiftDown(index) {
        if (index > this.heap.length - 1) return;
        const leftIndex = this.getLeftIndex(index);
        const rightIndex = this.getRightIndex(index);
        if (this.heap[leftIndex] < this.heap[index]) {
            this.swap(leftIndex, index);
            this.shiftDown(leftIndex);
        }
        if (this.heap[rightIndex] < this.heap[index]) {
            this.swap(rightIndex, index);
            this.shiftDown(rightIndex);
        }
    }

    insert(value) {
        this.heap.push(value);
        this.shiftUp(this.heap.length - 1);
    }

    pop() {
        this.heap[0] = this.heap.pop();
        this.shiftDown(0)
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }
}

var findKthLargest = function(nums, k) {
    const h = new MinHeap();
    nums.forEach(num => {
        h.insert(num);
        if (h.size() > k) {
            h.pop();
        }
    });
    return h.peek();
};
