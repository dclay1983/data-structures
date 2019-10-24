var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if (this.head === null) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  };

  list.removeHead = function() {
    var node = this.head;
    this.head = node.next;
    return node.value;
  };

  list.contains = function(target) {
    var node = this.head;
    while (node) {
      if (node.value === target) { return true; }
      node = node.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
