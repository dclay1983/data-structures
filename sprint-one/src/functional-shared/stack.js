var Stack = function() {
  var stack = {
    len: 0,
    storage: {}
  };
  for (var key in stackMethods) {
    stack[key] = stackMethods[key];
  }
  return stack;
};

var stackMethods = {
  push: function (value) {
    this.storage[this.len++] = value;
  },

  pop: function () {
    if (this.len > 0) {
      var popped = this.storage[--this.len];
      delete this.storage[this.len];
      return popped;
    }
  },

  size: function () {
    return this.len;
  }
};

