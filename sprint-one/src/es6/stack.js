class Stack {
  constructor() {
    this.len = 0;
    this.storage = {};
  }

  push(val) {
    this.storage[this.len++] = val;
  }

  pop() {
    if (this.len > 0) {
      const popped = this.storage[--this.len];
      delete this.storage[this.len];
      return popped;
    }
  }

  size() {
    return this.len;
  }
}