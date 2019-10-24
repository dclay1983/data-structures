class Queue {
  constructor() {
    this.first = 0;
    this.len = 0;
    this.storage = {};
  }

  enqueue(val) {
    this.storage[this.first + this.len++] = val;
  }

  dequeue() {
    if (this.len > 0) {
      const dequeued = this.storage[this.first];
      delete this.storage[this.first++];
      this.len--;
      return dequeued;
    }
  }

  size() {
    return this.len;
  }
}