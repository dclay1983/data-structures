class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    let key = '';
    if (this.value === value) { return; }
    key = value < this.value ? 'left' : 'right';

    if (this[key]) {
      this[key].insert(value);
    } else {
      this[key] = new BinarySearchTree(value);
    }
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
}


/*
 * Complexity: What is the time complexity of the above functions?
 * Creation O(1) Constant
 * insert O(log(n)) Logarithmic
 * contains O(log(n)) Logarithmic
 * depthFirstLog O(n) Linear
 */
