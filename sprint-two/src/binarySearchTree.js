class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.depth = 1;
  }

  insert(value) {
    if (this.value === value) { return; }
    const key = value < this.value ? 'left' : 'right';
    const inverseKey = key === 'right' ? 'left' : 'right';

    if (this[key]) {
      this[key].insert(value);
      var otherDepth = this._depthOf(this[inverseKey]);
      this.depth = Math.max(this[key].depth, otherDepth) + 1;
    } else {
      this[key] = new BinarySearchTree(value);
      this.depth = this.depth === 1 ? 2 : this.depth;
    }
    this._balance();
  }

  contains(value) {
    if (value === this.value) {
      return true;
    }
    var key = value < this.value ? 'left' : 'right';
    return this[key] ? this[key].contains(value) : false;
  }

  depthFirstLog(cb) {
    cb(this.value);
    if (this.left) { this.left.depthFirstLog(cb); }
    if (this.right) { this.right.depthFirstLog(cb); }
  }

  breadthFirstLog(cb) {
    const queue = LinkedList();
    queue.addToTail(this);
    while (!queue.isEmpty()) {
      const node = queue.removeHead();
      cb(node.value);
      if (node.left) { queue.addToTail(node.left); }
      if (node.right) { queue.addToTail(node.right); }
    }
  }

  _rotate(rot) {
    var antiRot = rot === 'left' ? 'right' : 'left';

    var aDepth = this._depthOf(this[rot]);
    var bDepth = this._depthOf(this[antiRot][rot]);
    var childDepth = Math.max(aDepth, bDepth) + 1;
    var rootDepth = Math.max(childDepth, this._depthOf(this[antiRot][antiRot])) + 1;

    var child = new BinarySearchTree(this.value);
    child[rot] = this[rot];
    child[antiRot] = this[antiRot][rot];
    this.value = this[antiRot].value;
    this[antiRot] = this[antiRot][antiRot];
    this[rot] = child;

    this.depth = rootDepth;
    this[rot].depth = childDepth;
  }

  _balance() {
    var lDepth = this._depthOf(this.left);
    var rDepth = this._depthOf(this.right);
    var diff = lDepth - rDepth;
    if (diff < -1) {
      lDepth = this._depthOf(this.right.left);
      rDepth = this._depthOf(this.right.right);
      if (lDepth > rDepth) {
        this.right._rotate('right');
      }
      this._rotate('left');
    } else if (diff > 1) {
      lDepth = this._depthOf(this.left.left);
      rDepth = this._depthOf(this.left.right);
      if (lDepth < rDepth) {
        this.left._rotate('left');
      }
      this._rotate('right');
    }
  }

  _depthOf(node) {
    return node === null ? 0 : node.depth;
  }
}


/*
 * Complexity: What is the time complexity of the above functions?
 * Creation O(1) Constant
 * insert O(log(n)) Logarithmic
 * contains O(log(n)) Logarithmic
 * depthFirstLog O(n) Linear
 */
