var Queue = function() {
  this.first = 0;
  this.len = 0;
  this.storage = {};
};
Queue.prototype.enqueue = function (val) {
  this.storage[this.first + this.len++] = val;
};

Queue.prototype.dequeue = function () {
  if (this.len > 0) {
    var dequeued = this.storage[this.first];
    delete this.storage[this.first++];
    this.len--;
    return dequeued;
  }
};

Queue.prototype.size = function() {
  return this.len;
};


