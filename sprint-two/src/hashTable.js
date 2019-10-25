

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._count = 0;
};

HashTable.prototype.insert = function(k, v, copy = false) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (!bucket) {
    bucket = [];
    this._storage.set(index, bucket);
  }
  var tuple = bucket.find(tuple => tuple[0] === k);

  if (!tuple) {
    bucket.push([k, v]);
    this._count++;
    if (!copy) { this._resize(); }
  } else {
    tuple[1] = v;
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket) {
    var tuple = bucket.find(tuple => tuple[0] === k);
    return tuple ? tuple[1] : undefined;
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket) {
    var tupleIndex = bucket.findIndex(tuple => tuple[0] === k);
    if (tupleIndex >= 0) {
      this._count--;
      var v = bucket.splice(tupleIndex, 1)[0][1];
      this._resize();
      return v;
    }
  }
};

// Resize HashTable if it is greater than 75%
// or less than 25%. This is called automatically
// on all insert and remove operations unless
// a copy flag is set.
HashTable.prototype._resize = function() {
  if (this._count > 0.75 * this._limit) {
    this._limit *= 2;
  } else if (this._count < 0.25 * this._limit && this._limit > 8) {
    this._limit /= 2;
  } else {
    return;
  }
  var oldStorage = this._storage;
  this._storage = LimitedArray(this._limit);
  this._count = 0;

  oldStorage.each(bucket => {
    if (bucket) {
      bucket.forEach(tuple => {
        var [k, v] = tuple;
        this.insert(k, v, true);
      });
    }
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 * Creation = O(1) Constant
 * insert = O(1) Constant (amortized)
 * retrieve = O(1) Constant
 * remove = O(1) Constant (amortized)
 * _resize = O(n) Linear
 */


