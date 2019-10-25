var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  const {has, index} = this._indexOf(item);
  if (!has) {
    this._storage.splice(index, 0, item);
  }
};

setPrototype.contains = function(item) {
  return this._indexOf(item).has;
};

setPrototype._indexOf = function(item) {
  let left = 0;
  let right = this._storage.length - 1;
  let index;
  while (left <= right) {
    index = Math.floor((left + right) / 2);
    if (item > this._storage[index]) {
      left = index + 1;
    } else if (item < this._storage[index]) {
      right = index - 1;
    } else {
      return { has: true, index };
    }
  }
  return { has: false, index: left };
};

setPrototype.remove = function(item) {
  const {has, index} = this._indexOf(item);
  if (has) {
    this._storage.splice(index, 1);
  }
};

/*
* Complexity: What is the time complexity of the above functions?
*
*/
