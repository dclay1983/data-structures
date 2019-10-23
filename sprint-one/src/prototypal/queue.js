var Queue = function () {
  var queue = Object.create(queueMethods);
  queue.first = 0;
  queue.len = 0;
  queue.storage = {};
  return queue;
};

var queueMethods = {
  enqueue: function (value) {
    this.storage[this.first + this.len++] = value;
  },

  dequeue: function () {
    if (this.len > 0) {
      var dequeued = this.storage[this.first];
      delete this.storage[this.first++];
      this.len--;
      return dequeued;
    }
  },

  size: function () {
    return this.len;
  }
};


