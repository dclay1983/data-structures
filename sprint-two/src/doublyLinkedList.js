var DoublyLinkedList = function() {
  var list = LinkedList();

  // retain access to parent functions to implement new features
  var oldAddToTail = list.addToTail;
  var oldRemoveHead = list.removeHead;

  // Private function used to override parent Node and add "previous" property
  list._newNode = function(value) {
    var node = Node(value);
    node.previous = null;
    return node;
  };

  list.addToHead = function(value) {
    var node = this._newNode(value);
    if (this.head === null) {
      this.head = this.tail = node;
    } else {
      node.next = this.head;
      this.head.previous = node;
      this.head = node;
    }

  };

  list.removeHead = function() {
    var value = oldRemoveHead.call(this);
    if (this.head) { this.head.previous = null; }
    return value;
  };

  list.addToTail = function(value) {
    var oldTail = this.tail;
    oldAddToTail.call(this, value);
    if (oldTail !== null) { this.tail.previous = oldTail; }
  };

  list.removeTail = function() {
    var node = this.tail;
    this.tail = node ? node.previous : null;
    this.tail ? this.tail.next = null : this.head = this.tail;
    return node ? node.value : undefined;
  };

  return list;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * creation O(1) constant
 * addToTail O(1) constant
 * removeHead O(1) constant
 * removeTail O(1) constant
 * contains = O(n) linear
 */