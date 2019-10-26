var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  // Private function used to create a Node object
  // Used to permit child classes to define Node for more complex access
  list._newNode = function(value) {
    return Node(value);
  };

  list.addToTail = function(value) {
    var node = this._newNode(value);
    if (this.head === null) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  };

  list.removeHead = function() {
    var node = this.head;
    this.head = node ? node.next : null;
    if (this.head === null) { this.tail = this.head; }
    return node ? node.value : undefined;
  };

  list.contains = function(target) {
    var node = this.head;
    while (node) {
      if (node.value === target) { return true; }
      node = node.next;
    }
    return false;
  };

  list.isEmpty = function() { return this.head === null; };

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
 * creation = O(1) constant
 * addToTail = O(1) constant
 * removeHead = O(1) constant
 * contains = O(n) linear
 */
