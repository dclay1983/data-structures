var Queue = function() {
  var queue = {
    first: 0,
    len: 0,
    storage: {}
  };
  for (var key in queueMethods) {
    queue[key] = queueMethods[key];
  }
  return queue;
};

var queueMethods = {
  enqueue: function(val) {
    this.storage[this.first + this.len++] = val;
  },

  dequeue: function() {
    if (this.len > 0) {
      var dequeued = this.storage[this.first];
      delete this.storage[this.first++];
      this.len--;
      return dequeued;
    }
  },

  size: function() {
    return this.len;
  }
};


