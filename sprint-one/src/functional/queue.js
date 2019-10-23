var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var first = 0;
  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[first + size++] = value;
  };

  someInstance.dequeue = function() {
    if (size > 0) {
      var dequeued = storage[first];
      delete storage[first++];
      size--;
      return dequeued;
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
