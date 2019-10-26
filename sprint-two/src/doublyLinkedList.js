var DoublyLinkedList = function() {
  var list = LinkedList();
  var oldAddToTail = list.addToTail;

  list._newNode = function(value) {
    var node = Node(value);
    node.previous = null;
    return node;
  };

  list.addToHead = function(value) {

  };

  list.addToTail = function(value) {
    oldAddToTail();
    // this.tail.prev
  };

  list.removeTail = function() {

  };

  return list;
};